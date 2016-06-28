var db;
// populate data xlsx
var url_xls = "db/recipes.xlsx";
// Google ads key
var adMobId = {
    admob_banner_key: 'ca-app-pub-4507494592048108/5482181270',
    admob_interstitial_key: 'ca-app-pub-4507494592048108/4005448076'
 };
// config app raiting
var prefs = {
	language: 'en',
	appName: 'Recipes Finder',
	androidURL: 'market://details?id=com.recipes.finder',
};
		
angular.module('mobileApp', ['ionic', 'ionic-material', 'ngRoute', 'ngCordova', 'mobileApp.controllers', 'nlFramework', 'ngLocalize', 'jett.ionic.filter.bar', 'afkl.lazyImage'])

.run(function($rootScope, $ionicPlatform, $nlFramework, $cordovaSQLite, $ionicLoading, $timeout, $cordovaAdMob, $cordovaStatusbar, $cordovaSplashscreen) {
  
  $ionicPlatform.ready(function() {
	//Load splash
	$cordovaSplashscreen.show();
   
   // assign parts for better usage
    $rootScope.fw = $nlFramework;
    $rootScope.drawer = $nlFramework.drawer;
    $rootScope.refresh = $nlFramework.refresh;
    $rootScope.burger = $nlFramework.burger;
    $rootScope.config = $nlFramework.config;
    $rootScope.toast = $nlFramework.toast;
    $rootScope.menu = $nlFramework.menu;
    
	// show me config
    console.log( $rootScope.config );
   
   // initialize the whole framework
    var nlOptions = {
      // global settings
      speed: 0.2,
      animation: 'ease',
      // use action button
      actionButton: true,
      // use toast messages
      toast: true,
      // burger specific
      burger: {
        use: true,
        endY: 6,
        startScale: 1,
        endScale: 0.7 
      },
      // content specific
      content:{
        topBarHeight: 56,
        modify: true
      },
      // drawer specific
      drawer: {
        maxWidth: 270,
        openCb: function(){
          console.log('nlDrawer: openned')
        },
        closeCb: function(){
          console.log('nlDrawer closed')
        }
      },
      // refresh specific
      refresh: {
        defaultColor: '#aa3344', // default(inactive) color
        activeColor: '#558844', // active color
        callback: function(){
          // here is just timeout to wait 5sec before ending sync animation
          setTimeout( function(){
            console.log( 'nlRefresh custom callback' );
            // after doing some stuff end syncing animation
            $nlRefresh.syncEnd();
          }, 3000 );
        }
      },
      secMenu: true
    };
    // initialize the framework
    $nlFramework.init( nlOptions );     
    $rootScope.showBannerAd = function() {
        try {
            console.log('Show Banner Ad');          
			 if (AdMob) {
				AdMob.createBanner({
					adId : adMobId.admob_banner_key,
					position :  AdMob.AD_POSITION.BOTTOM_CENTER,
					adExtras: {color_bg:'transparent'},
					autoShow : true
				});
			}
        } catch (e) {
            alert(e);
        }       
    }
	
	// Set statusbar
	$cordovaStatusbar.overlaysWebView(false);
	$cordovaStatusbar.styleHex('#E53241') //red  
   
	setTimeout( function(){
		$cordovaSplashscreen.hide();
	}, 6000 );
	
	$rootScope.showBannerAd();
	
    $rootScope.refresh.callback = function(){
      // here is just timeout to wait 5sec before ending sync animation
      setTimeout( function(){
        console.log( 'custom callback onSync' );
        // after doing some stuff end syncing animation
        $rootScope.refresh.syncEnd();
		$rootScope.selects();
      }, 3000 );
    };

    // If you like you can register backbutton handle 
    $ionicPlatform.registerBackButtonAction(function () {
      if ( !$rootScope.drawer.openned ) {
        // thedrawer is closed - exit the app
        navigator.app.exitApp();
      } else {
        // thedrawer is openned - close
        $rootScope.drawer.hide();
      }
    }, 100);
	
	// load excel data to sqlite
	$rootScope.loadXLSX = function (db){
		
		var X 	= XLSX;
		var dbs = db;
		
		function to_json(workbook) {
			var result = {};
			workbook.SheetNames.forEach(function(sheetName) {
				var roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
				if(roa.length > 0){
					result[sheetName] = roa;
				}
			});
					
			if(dbs == 'recipes'){
				for (var i = 0; i < result.recipes.length; i++) {	
					$rootScope.insertRecipes(result.recipes[i].ID,result.recipes[i].Menu,result.recipes[i].Category,result.recipes[i].Images,result.recipes[i].Intro,result.recipes[i].timingMenutes,result.recipes[i].Servings,result.recipes[i].Kcal);
				}
			}else if(dbs == 'instruction'){
				for (var i = 0; i < result.instruction.length; i++) {	
					$rootScope.insertInstruction(result.instruction[i].IdMenu,result.instruction[i].Title,result.instruction[i].Desc);
				}
			}else{
				for (var i = 0; i < result.ingredients.length; i++) {	
					$rootScope.insertIngredients(result.ingredients[i].IdMenu,result.ingredients[i].Composition,result.ingredients[i].Unit,result.ingredients[i].Desc);
				}
				$rootScope.selects();
			}
		}
		
		function process_wb(wb) {
			var output = to_json(wb);
			if(out.innerText === undefined) out.textContent = output;
			else out.innerText = output;
			if(typeof console !== 'undefined') console.log("output", new Date());
		}

		var oReq;
		if(window.XMLHttpRequest) oReq = new XMLHttpRequest();
		else if(window.ActiveXObject) oReq = new ActiveXObject('MSXML2.XMLHTTP.3.0');
		else throw "XHR unavailable for your browser";

		oReq.open("GET", url_xls, true);

		if(typeof Uint8Array !== 'undefined') {
			oReq.responseType = "arraybuffer";
			oReq.onload = function(e) {
				if(typeof console !== 'undefined') console.log("onload", new Date());
				var arraybuffer = oReq.response;
				var data = new Uint8Array(arraybuffer);
				var arr = new Array();
				for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
				var wb = XLSX.read(arr.join(""), {type:"binary"});
				process_wb(wb);
			};
		} else {
			oReq.setRequestHeader("Accept-Charset", "x-user-defined");	
			oReq.onreadystatechange = function() { if(oReq.readyState == 4 && oReq.status == 200) {
				var ff = convertResponseBodyToText(oReq.responseBody);
				//if(typeof console !== 'undefined') console.log("onload", new Date());
				var wb = XLSX.read(ff, {type:"binary"});
				process_wb(wb);
			} };
		}
		oReq.send();
	}
		
	if (window.cordova && window.SQLitePlugin) {
		db = $cordovaSQLite.openDB( 'recipeDB24.db', 1 );
	} else {
		db = window.openDatabase('recipeDB24', '1.0', 'recipeDB24.db', 100 * 1024 * 1024);
	}

	$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS recipes (id integer primary key, menu text, category text, img text, intro text, times integer, servings integer, kcal integer, favorites text)").then(function(res) {
		$cordovaSQLite.execute(db, "SELECT id FROM recipes").then(function(res) {
			if (res.rows.length == 0) {
				$rootScope.loading();
				$rootScope.loadXLSX("recipes");
					$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS instruction (IDrecipes integer, title text, description text)").then(function(res) {
						$cordovaSQLite.execute(db, "SELECT IDrecipes FROM instruction").then(function(res) {
							if (res.rows.length == 0) {
								$rootScope.loadXLSX("instruction");
									$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS ingredients (IDrecipe integer, composition text, unit text, desc text, cart text)").then(function(res) {
										$cordovaSQLite.execute(db, "SELECT IDrecipe FROM ingredients").then(function(res) {
											if (res.rows.length == 0) {
												$rootScope.loadXLSX("ingredients");
												$rootScope.loadingHide(600);
											}
										});					
									});
							}
						});					
					});
			}else{
				$rootScope.selects();
			}
		});				
	});		
	
	$rootScope.insertRecipes = function(id, menu, category, img, intro, times, servings, kcal) {
		var query = "INSERT INTO recipes (id, menu, category, img, intro, times, servings, kcal) VALUES (?,?,?,?,?,?,?,?)";
		$cordovaSQLite.execute(db, query, [id, menu, category, img, intro, times, servings, kcal]).then(function(res) {
			}, function (err) {
			   //alert(err);
		});
	};	

	$rootScope.insertInstruction = function(IDrecipes, title, description) {
		var query = "INSERT INTO instruction (IDrecipes, title, description) VALUES (?,?,?)";
		$cordovaSQLite.execute(db, query, [IDrecipes, title, description]).then(function(res) {
			}, function (err) {
			   //alert(err);
		});
	};	

	$rootScope.insertIngredients = function(IDrecipe, composition, unit, desc) {
		var query = "INSERT INTO ingredients (IDrecipe, composition, unit, desc) VALUES (?,?,?,?)";
		$cordovaSQLite.execute(db, query, [IDrecipe, composition, unit, desc]).then(function(res) {
			}, function (err) {
			   //alert(err);
		});
	};

	// Loadin function
	$rootScope.loading = function() {
        $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
		});
	}
	
	$rootScope.loadingHide = function(time) {
		$timeout(function() {
            $ionicLoading.hide();
        }, time);
	}
	
	$rootScope.selectDrawer = function() {
		// Execute SELECT statement to load message from database.
		$cordovaSQLite.execute(db, "SELECT category FROM recipes GROUP BY category").then(function(res) {
			if (res.rows.length > 0) {
				$rootScope.requestDataDrawer = [];
				
				for(var i = 0; i < res.rows.length; i++) {
					$rootScope.requestDataDrawer.push({category: res.rows.item(i).category});
				}
			}
		},
		function(error) {
			//$scope.statusMessage = "Error on loading: " + error.message;
				}
		);				
	}

	setTimeout( function(){
		$rootScope.selectDrawer();
	}, 1000);
	
  });
})

// just some routes to show some content
.config(function($routeProvider, $ionicFilterBarConfigProvider, $cordovaAppRateProvider, $ionicConfigProvider) {
    $routeProvider
    .when('/app', {
	  cache: false,
      templateUrl: 'views/app.html',
      controller: 'AppCtrl'
    }).
    otherwise({
      redirectTo: '/app'
    });

	var jsScrolling = (ionic.Platform.isAndroid() ) ? false : true;
	$ionicConfigProvider.scrolling.jsScrolling(jsScrolling);
	
	document.addEventListener("deviceready", function () {
		$cordovaAppRateProvider.setPreferences(prefs);
	}, false);
 
	// Setting header filter
    $ionicFilterBarConfigProvider.theme('assertive');
    $ionicFilterBarConfigProvider.clear('ion-close');
    $ionicFilterBarConfigProvider.search('ion-search');
    $ionicFilterBarConfigProvider.backdrop(true);
    $ionicFilterBarConfigProvider.transition('vertical');
    $ionicFilterBarConfigProvider.placeholder('Filter');
});