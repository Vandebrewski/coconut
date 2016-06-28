angular.module('mobileApp.controllers', [])

.controller('AppCtrl', function($rootScope, $scope, $ionicPopup, $nlFramework, $timeout, $ionicScrollDelegate, ionicMaterialInk, $ionicFilterBar, $cordovaSQLite, $ionicModal, $ionicPopover, $cordovaAppRate, $cordovaSocialSharing, $cordovaStatusbar) {
	console.log( 'AppCtrl' );
	$rootScope.title = 'All recipes';
	$scope.page = 0;
	$scope.limit = 8;
	$scope.noMoreItemsAvailable = false;
	$scope.noItemFound = false;
	$scope.infiniteScrollComplete = 0;
	$scope.requestData = [];
	$scope.requestDatas = [];
	
	var filterBarInstance;
	
	ionicMaterialInk.displayEffect();

    $ionicModal.fromTemplateUrl('views/detail.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Click like detail
    $scope.doLike = function(id){
        var btn_like = angular.element(document.querySelector('.detail-like'));
        btn_like.find('i').toggleClass('active');
			
			if(btn_like.find('i').hasClass('active')){
				var query = "UPDATE recipes SET favorites = ? WHERE id = ?";
				$cordovaSQLite.execute(db, query, ['true', id]).then(function(res) {
					// set options
					var options = {
					  title: 'Your bookmark this item!',
					  timeout: 2500
					}
					$nlFramework.toast.show( options );	
					}, function (err) {
					   //alert(err);
				});	
			}else{
				var query = "UPDATE recipes SET favorites = ? WHERE id = ?";
				$cordovaSQLite.execute(db, query, ['false', id]).then(function(res) {
						// set options
						var options = {
						  title: 'Your cancel bookmark this item!',
						  timeout: 2500
						}
						$nlFramework.toast.show( options );	
					}, function (err) {
					   //alert(err);
				});				
			}
	}
		
    // Click rate
    $scope.doRate = function(id){
		$cordovaAppRate.promptForRating(true).then(function (result) {
			// success
		});
	}
	
    // Click share
    $scope.doShare = function(){
		
		var Ingredient = '';
		var res = $rootScope.requestIngredient; 
		for(var i = 0; i < res.length; i++) {
			Ingredient += res[i].composition+' '+res[i].unit+' '+res[i].desc+'\n';
		}

		var Instruction = '';
		var req = $rootScope.requestInstruction; 
		for(var i = 0; i < req.length; i++) {
			Ingredient += '\n'+req[i].title+'\n'+req[i].description+'\n';
		}
		
		$cordovaSocialSharing.share($rootScope.requestDetail[0].menu+'\n\n'+$rootScope.requestDetail[0].intro+'\n\n'+Ingredient+'\n\n'+Instruction, null, null, 'http://mycodetemplates.com') // Share via native share sheet
		.then(function(result) {
		  // Success!
		}, function(err) {
		  // An error occured. Show a message to the user
		});
		console.log();   
	}
	
    // Click share Ingredient
    $scope.doShareIngredient = function(){
		
		var Ingredient = '';
		var res = $rootScope.requestIngredient; 
		for(var i = 0; i < res.length; i++) {
			Ingredient += res[i].composition+' '+res[i].unit+' '+res[i].desc+'\n';
		}
		
		$cordovaSocialSharing.share($rootScope.requestDetail[0].menu+'\n\n'+Ingredient, null, null, 'http://mycodetemplates.com') // Share via native share sheet
		.then(function(result) {
		  // Success!
		}, function(err) {
		  // An error occured. Show a message to the user
		});
		console.log();   
	}
	
	// Scroll infinite
	$scope.loadMore = function(){
		$rootScope.selects();
	};

	// select database
	$rootScope.selects = function() {
		
		$rootScope.title = 'All recipes';
		$rootScope.loading();
		// Execute SELECT statement to load message from database.
		$cordovaSQLite.execute(db, "SELECT id, menu, category, img, intro, times, servings, kcal FROM recipes limit "+$scope.page+","+$scope.limit).then(function(res) {

			if (res.rows.length > 0) {
				
				if($scope.infiniteScrollComplete == 0){
					for(var i = 0; i < res.rows.length; i++) {
							$scope.requestData.push({id: res.rows.item(i).id, menu: res.rows.item(i).menu, img: res.rows.item(i).img});
					}
				}
				$scope.page = $scope.page+$scope.limit;
			}
			
			if (res.rows.length != $scope.limit){
				$scope.infiniteScrollComplete = 1;
			    $scope.noMoreItemsAvailable = true;
			    $scope.noItemFound = true;	
			}
			$rootScope.loadingHide(600);
			$scope.$broadcast('scroll.infiniteScrollComplete');
		},
		function(error) {
			//$scope.statusMessage = "Error on loading: " + error.message;
				}
		);				
	}	

	// search database
	$rootScope.search = function(data) {
		$scope.requestData = [];
		$rootScope.title = 'Search';
		$rootScope.loading();
		// Execute SELECT statement to load message from database.
		$cordovaSQLite.execute(db, "SELECT id, menu, category, img, intro, times, servings, kcal FROM recipes WHERE menu LIKE '%"+data+"%'").then(function(res) {

			if (res.rows.length > 0) {
				
				for(var i = 0; i < res.rows.length; i++) {
						//console.log(res.rows.item(i).menu);
						$scope.requestData.push({id: res.rows.item(i).id, menu: res.rows.item(i).menu, img: res.rows.item(i).img});
				}
			}

			$rootScope.loadingHide(600);
		},
		function(error) {
			//$scope.statusMessage = "Error on loading: " + error.message;
				}
		);				
	}
	
	$rootScope.favorites = function() {
		$rootScope.loading();
		$rootScope.title = 'Favorites';
		// Execute SELECT statement to load message from database.
		$cordovaSQLite.execute(db, "SELECT id, menu, category, img, intro, times, servings, kcal FROM recipes WHERE favorites = 'true'").then(function(res) {
			if (res.rows.length > 0) {
				$scope.requestData = [];
					
				for(var i = 0; i < res.rows.length; i++) {
					$scope.requestData.push({id: res.rows.item(i).id, menu: res.rows.item(i).menu, img: res.rows.item(i).img});
				}
			$rootScope.loadingHide(600);
			}
		},
		function(error) {
			//$scope.statusMessage = "Error on loading: " + error.message;
				}
		);				
	};

	$rootScope.category = function(title) {
		$rootScope.loading();
		$rootScope.title = title;
		// Execute SELECT statement to load message from database.
		$cordovaSQLite.execute(db, "SELECT id, menu, category, img, intro, times, servings, kcal FROM recipes WHERE category = '"+title+"'").then(function(res) {
			if (res.rows.length > 0) {
				$scope.requestData = [];
					
				for(var i = 0; i < res.rows.length; i++) {
					$scope.requestData.push({id: res.rows.item(i).id, menu: res.rows.item(i).menu, img: res.rows.item(i).img});
				}
				$rootScope.loadingHide(600);
			}
		},
		function(error) {
			//$scope.statusMessage = "Error on loading: " + error.message;
				}
		);				
	};
	
	$rootScope.all = function() {
		$rootScope.title = 'All recipes';
		$scope.noMoreItemsAvailable = false;
		$scope.requestData = [];
		$scope.infiniteScrollComplete = 0;
		$scope.page = 0;
		$scope.limit = 8;
		setTimeout( function(){
			$rootScope.selects();
		}, 500);			
	}

    $rootScope.openAbout = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'ABOUT',
            template: '<b>Recipes finder app</b> created by rizal.saleh1@gmail.com'
        });

        $timeout(function() {
            //ionic.material.ink.displayEffect();
            ionicMaterialInk.displayEffect();
        }, 0);
    };

	// Filter bar	
    $scope.showFilterBar = function () {
		$scope.requestData = [];
		filterBarInstance = $ionicFilterBar.show({
			items: $scope.requestData,
			update: function (filteredItems, filterText) {
			$rootScope.search(filterText);
			setTimeout( function(){
				if($scope.requestData.length == 0){
					// set options
					var options = {
					  title: 'Your search data not found!',
					  trueCallback: $rootScope.all(),
					  timeout: 2500
					}
					$nlFramework.toast.show( options );	
				}
			}, 200);		
			
			$rootScope.loading();
			//$scope.requestData = filteredItems;
			$rootScope.loadingHide(600);
			}
		});
    };
	
	// Scroll top
	$scope.scrollTop = function() {
		$ionicScrollDelegate.scrollTop();
	};
 
    // Detail popover
    var templatePopover = '<ion-popover-view style="height:120px; width: 180px; padding: 10px;" ng-click="closePopover();">' +
					'   	<ion-list>' +
					'   	<ion-item menu-close class="ink dark-bg" ng-click="doShareIngredient();">Send shopping list</ion-item>' +
					'   	<ion-item menu-close class="ink dark-bg" ng-click="doShare();">Share</ion-item>' +
					'   	</ion-list>' +
					'</ion-popover-view>';
	
    $scope.popover = $ionicPopover.fromTemplate(templatePopover, {
        scope: $scope
    });
	
    $scope.closePopover = function () {
        $scope.popover.hide();	
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });
	
    // Popover
    $scope.openPopover = function() {
        $scope.$parent.popover.show();
    }
	
	$scope.cartChange = function(id) {
		if($scope.isChecked[id].checked){
			var query = "UPDATE ingredients SET cart = ? WHERE rowid = ?";
			$cordovaSQLite.execute(db, query, ['true', id]).then(function(res) {
				  //alert("insertId: " + res.insertId);
				}, function (err) {
				   //alert(err);
			});	
		}else{
			var query = "UPDATE ingredients SET cart = ? WHERE rowid = ?";
			$cordovaSQLite.execute(db, query, ['false', id]).then(function(res) {
				  //alert("insertId: " + res.insertId);
				}, function (err) {
				   //alert(err);
			});				
		}					
	};
  
     // Click clear cart
    $scope.clearCart = function(id){
		var query = "UPDATE ingredients SET cart = ? WHERE IDrecipe = ?";
		$cordovaSQLite.execute(db, query, ['false', id]).then(function(res) {
			$rootScope.isChecked = {};
			// Execute SELECT statement to load message from database.
			$cordovaSQLite.execute(db, "SELECT rowid, composition, unit, desc, cart FROM ingredients WHERE IDrecipe ="+id).then(function(res) {
				if (res.rows.length > 0) {
					for(var i = 0; i < res.rows.length; i++) {
					if(res.rows.item(i).cart == 'true'){
							$rootScope.isChecked[res.rows.item(i).rowid] = { checked: true };
						}else{
							$rootScope.isChecked[res.rows.item(i).rowid] = { checked: false };
						}
					}
				}
				
			},
			function(error) {
				//$scope.statusMessage = "Error on loading: " + error.message;
				}
			);
			}, function (err) {
				   //alert(err);
		});
	}
	// function to open the modal
	$scope.openModal = function (id) {
		
		$rootScope.requestDetail = [];
		// Execute SELECT statement to load message from database.
		$cordovaSQLite.execute(db, "SELECT id, menu, category, img, intro, times, servings, kcal, favorites FROM recipes WHERE id ="+id).then(function(res) {
			if (res.rows.length > 0) {		
				$rootScope.requestDetail.push({id: res.rows.item(0).id,times: res.rows.item(0).times, servings: res.rows.item(0).servings, kcal: res.rows.item(0).kcal, category: res.rows.item(0).category, menu: res.rows.item(0).menu, intro: res.rows.item(0).intro, img: res.rows.item(0).img});
				if(res.rows.item(0).favorites == 'true'){
					setTimeout( function(){
						var btn_like = angular.element(document.querySelector('.detail-like'));
						btn_like.find('i').addClass('active');
					}, 200);
				}else{
					setTimeout( function(){
						var btn_like = angular.element(document.querySelector('.detail-like'));
						btn_like.find('i').removeClass('active');
					}, 200);
				}				
			
			}
			$cordovaStatusbar.hide();
		},
		function(error) {
			//$scope.statusMessage = "Error on loading: " + error.message;
			}
		);
		
		$rootScope.isChecked = {};
		$rootScope.requestIngredient = [];
		// Execute SELECT statement to load message from database.
		$cordovaSQLite.execute(db, "SELECT rowid, composition, unit, desc, cart FROM ingredients WHERE IDrecipe ="+id).then(function(res) {
			if (res.rows.length > 0) {
				for(var i = 0; i < res.rows.length; i++) {
					$rootScope.requestIngredient.push({rowid: res.rows.item(i).rowid, composition: res.rows.item(i).composition, unit: res.rows.item(i).unit, desc: res.rows.item(i).desc, cart: res.rows.item(i).cart, id: id});
					if(res.rows.item(i).cart == 'true'){
						$rootScope.isChecked[res.rows.item(i).rowid] = { checked: true };
					}else{
						$rootScope.isChecked[res.rows.item(i).rowid] = { checked: false };
					}
				}
			}
			
		},
		function(error) {
			//$scope.statusMessage = "Error on loading: " + error.message;
			}
		);	
		
		$rootScope.requestInstruction = [];
		// Execute SELECT statement to load message from database.
		$cordovaSQLite.execute(db, "SELECT title, description FROM instruction WHERE IDrecipes ="+id).then(function(res) {
			if (res.rows.length > 0) {
				for(var i = 0; i < res.rows.length; i++) {
					$rootScope.requestInstruction.push({title: res.rows.item(i).title, description: res.rows.item(i).description, id: id});
				}
			}
			
		},
		function(error) {
			//$scope.statusMessage = "Error on loading: " + error.message;
			}
		);	
		
		$scope.modal.show();
	};

	// function to close the modal
	$scope.closeModal = function () {
		$scope.modal.hide();
		$cordovaStatusbar.show();
		$rootScope.loading();
		$rootScope.loadingHide(600);
	};

});