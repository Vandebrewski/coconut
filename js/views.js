angular.module("your_app_name.views", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/app/bookmarks.html","<ion-view class=\"bookmarks-view\">\n  <ion-nav-title>\n    <span>Bookmarks</span>\n  </ion-nav-title>\n  <ion-content>\n    <div ng-if=\"(bookmarks.wordpress.length == 0 && bookmarks.feeds.length == 0)\" class=\"row bookmarks-container\">\n      <div class=\"col col-center\">\n        <div class=\"empty-results\">\n          <i class=\"icon ion-bookmark\"></i>\n          <h3 class=\"no-bookmarks\">There\'s nothing here yet. Start exploring!</h3>\n        </div>\n      </div>\n    </div>\n    <ul ng-if=\"(bookmarks.wordpress.length > 0 || bookmarks.feeds.length > 0)\" class=\"bookmarks-list\">\n      <div ng-if=\"bookmarks.feeds.length > 0\" class=\"item item-divider\">\n        Feeds Bookmarks\n      </div>\n      <li class=\"bookmark-item\" ng-repeat=\"bookmark in bookmarks.feeds\">\n        <a ng-click=goToFeedPost(bookmark.link)>\n          <h2 class=\"post-title\" ng-bind-html=\"bookmark.title | rawHtml\"></h2>\n          <p class=\"post-date\">Posted <span class=\"post-time\" am-time-ago=\"bookmark.date\"></span></p>\n        </a>\n      </li>\n      <div ng-if=\"bookmarks.wordpress.length > 0\" class=\"item item-divider\">\n        &nbsp;&nbsp;Your bookmarks\n      </div>\n      <li class=\"bookmark-item\" ng-repeat=\"bookmark in bookmarks.wordpress\">\n        <a ng-click=goToWordpressPost(bookmark.id)>\n          <h2 class=\"post-title\" ng-bind-html=\"bookmark.title | rawHtml\"></h2>\n         \n        </a>\n      </li>\n    </ul>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/forms.html","<ion-view class=\"forms-view\">\n  <ion-nav-buttons side=\"left\">\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\n  </ion-nav-buttons>\n  <ion-nav-title>\n    <span>Forms</span>\n  </ion-nav-title>\n  <ion-content>\n    <ul class=\"list\">\n\n      <div class=\"item item-divider\">Inline Labels</div>\n      \n      <label class=\"item item-input\">\n        <span class=\"input-label\">First Name</span>\n        <input type=\"text\">\n      </label>\n      <label class=\"item item-input\">\n        <span class=\"input-label\">Last Name</span>\n        <input type=\"text\">\n      </label>\n      <label class=\"item item-input\">\n        <span class=\"input-label\">Email</span>\n        <input type=\"email\">\n      </label>\n\n      <div class=\"item item-divider\">Floating Labels</div>\n\n      <label class=\"item item-input item-floating-label\">\n        <span class=\"input-label\">Telephone</span>\n        <input type=\"tel\" placeholder=\"Your phone\">\n      </label>\n      <label class=\"item item-input item-floating-label\">\n        <span class=\"input-label\">Number</span>\n        <input type=\"number\" placeholder=\"Some number\">\n      </label>\n\n      <div class=\"item item-divider\">Stacked Labels</div>\n\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Birth date</span>\n        <input type=\"date\">\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Month</span>\n        <input type=\"month\">\n      </label>\n\n      <div class=\"item item-divider\">Placeholder Labels</div>\n\n      <label class=\"item item-input\">\n        <textarea placeholder=\"Description\"></textarea>\n      </label>\n      <label class=\"item item-input\">\n        <input type=\"password\" placeholder=\"Your password\">\n      </label>\n\n      <div class=\"item item-divider\">Inset Inputs</div>\n\n      <div class=\"item item-input-inset\">\n        <label class=\"item-input-wrapper\">\n          <input type=\"text\" placeholder=\"Search...\">\n        </label>\n        <button class=\"button button-small\">\n          Submit\n        </button>\n      </div>\n    </ul>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/profile.html","<ion-view class=\"profile-view\">\n  <ion-nav-title>\n    <span>Disclaimer</span>\n  </ion-nav-title>\n  <ion-content>\n    <div class=\"top-content row\">\n      <div class=\"profile-container\">\n        <div class=\"user-image-container\">\n          <pre-img ratio=\"_1_1\" helper-class=\"rounded-image\">\n            <img class=\"user-image\" ng-src=\"img/icon-green.png\" spinner-on-load>\n          </pre-img>\n        </div>\n        <div class=\"user-name\">Coconut oil</div>\n        <div class=\"user-twitter\">uses & benefits</div>\n      </div>\n      <div class=\"user-background-image-outer\">\n        <div multi-bg=\"[\'img/profile-back.jpg\']\"></div>\n      </div>\n    </div>\n    <div class=\"bottom-content\">\n      <div class=\"user-bio\">\n        <p><strong>No advice</strong><br /><br />\n\nThis app contains general information about medical conditions and treatments.  The information is not advice, and should not be treated as such.\n<br /><br />\n<strong>Limitation of warranties</strong>\n<br /><br />\nThe medical information on this app is provided “as is” without any representations or warranties, express or implied. This app makes no representations or warranties in relation to the medical information on this app.  \n<br /><br />\nWithout prejudice to the generality of the foregoing paragraph, this app does not warrant that:\n<br /><br />\n<li>the medical information on this app will be constantly available, or available at all; or</li>\n<li>the medical information on this app is complete, true, accurate, up-to-date, or non-misleading.</li>\n<br /><br />\n<strong>Professional assistance</strong>\n<br /><br />\nYou must not rely on the information on this app as an alternative to medical advice from your doctor or other professional healthcare provider.   \n<br />\nIf you have any specific questions about any medical matter you should consult your doctor or other professional healthcare provider.\n<br />\nIf you think you may be suffering from any medical condition you should seek immediate medical attention.  \n<br />\nYou should never delay seeking medical advice, disregard medical advice, or discontinue medical treatment because of information on this app.\n<br /><br />\n<strong>Liability</strong>\n<br /><br />\nNothing in this medical disclaimer will limit any of our liabilities in any way that is not permitted under applicable law, or exclude any of our liabilities that may not be excluded under applicable law.\n<br /><br />\n<strong>Credit</strong>\n<br /><br />\nThis document was created using a Contractology template available at http://www.freenetlaw.com\n<br /><br />Contact us: info@new-impulse.com\n</p>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/settings.html","<ion-view class=\"settings-view\">\n  <ion-nav-buttons side=\"left\">\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\n  </ion-nav-buttons>\n  <ion-nav-title>\n    <span>Settings</span>\n  </ion-nav-title>\n  <ion-content>\n    <ul class=\"list\">\n\n      <div class=\"item item-divider\">TOGGLE</div>\n\n      <ion-toggle ng-model=\"airplaneMode\" toggle-class=\"toggle-assertive\">Airplane Mode</ion-toggle>\n      <ion-toggle ng-model=\"wifi\" toggle-class=\"toggle-positive\">Wi-Fi</ion-toggle>\n      <ion-toggle ng-model=\"bluetooth\" toggle-class=\"toggle-calm\">Bluetooth</ion-toggle>\n      <ion-toggle ng-model=\"personalHotspot\" toggle-class=\"toggle-dark\">Personal Hotspot</ion-toggle>\n\n      <div class=\"item item-divider\">CHECKBOXES</div>\n\n      <ion-checkbox ng-model=\"checkOpt1\">Option 1</ion-checkbox>\n      <ion-checkbox ng-model=\"checkOpt2\">Option 2</ion-checkbox>\n      <ion-checkbox ng-model=\"checkOpt3\">Option 3</ion-checkbox>\n\n      <div class=\"item item-divider\">RADIO</div>\n\n      <ion-radio ng-model=\"radioChoice\" ng-value=\"\'A\'\">Choose A</ion-radio>\n      <ion-radio ng-model=\"radioChoice\" ng-value=\"\'B\'\">Choose B</ion-radio>\n      <ion-radio ng-model=\"radioChoice\" ng-value=\"\'C\'\">Choose C</ion-radio>\n\n      <div class=\"item item-divider\">RANGES</div>\n\n      <div class=\"range\">\n        <i class=\"icon ion-volume-low\"></i>\n        <input type=\"range\" name=\"volume\">\n        <i class=\"icon ion-volume-high\"></i>\n      </div>\n      <div class=\"item range range-positive\">\n        <i class=\"icon ion-ios-sunny-outline\"></i>\n        <input type=\"range\" name=\"volume\" min=\"0\" max=\"100\" value=\"33\">\n        <i class=\"icon ion-ios-sunny\"></i>\n      </div>\n\n      <div class=\"item item-divider\"></div>\n\n      <button class=\"button button-block button-assertive\" ng-click=\"showLogOutMenu()\">\n        Logout\n      </button>\n    </ul>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/side-menu.html","<ion-side-menus enable-menu-with-back-views=\"false\">\n  <ion-side-menu-content class=\"post-size-14px\">\n    <ion-nav-bar class=\"bar app-top-bar\">\n      <ion-nav-back-button>\n      </ion-nav-back-button>\n      <ion-nav-buttons side=\"left\">\n        <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\">\n        </button>\n      </ion-nav-buttons>\n    </ion-nav-bar>\n    <ion-nav-view name=\"menuContent\"></ion-nav-view>\n  </ion-side-menu-content>\n\n  <ion-side-menu side=\"left\" class=\"main-menu\" expose-aside-when=\"large\">\n    <ion-content>\n      <ion-list>\n        <ion-item class=\"heading-item item item-avatar\" nav-clear menu-close ui-sref=\"app.profile\">\n          <div class=\"user-image-container\">\n            <pre-img ratio=\"_1_1\" helper-class=\"rounded-image\">\n              <img class=\"user-image\" ng-src=\"img/icon.png\" spinner-on-load>\n          	</pre-img>\n          </div>\n          <h2 class=\"greeting\">Coconut Oil</h2>\n          <p class=\"message\">Uses & Benefits</p>\n        </ion-item>\n       \n        <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.wordpress\">\n          <i class=\"icon ion-medkit\"></i>\n          <h2 class=\"menu-text\">Health / Recipes</h2>\n        </ion-item>\n       \n        <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.wordpress2\">\n          <i class=\"icon ion-wand\"></i>\n          <h2 class=\"menu-text\">Beauty</h2>\n        </ion-item>\n        \n                <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.feeds-categories\">\n          <i class=\"icon ion-ios-flask\"></i>\n          <h2 class=\"menu-text\">Science</h2>\n        </ion-item>\n        \n                <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.bookmarks\">\n          <i class=\"icon ion-bookmark\"></i>\n          <h2 class=\"menu-text\">Saved for later</h2>\n        </ion-item>\n     \n        <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.profile\">\n          <i class=\"icon ion-android-warning\"></i>\n          <h2 class=\"menu-text\">Disclaimer</h2>\n        </ion-item>\n\n       <a class=\"item item-icon-left item-icon-right\" href=\"#\" ng-controller=\"AdsCtrl\" ng-click=\"manageAdMob()\">\n        <i class=\"icon ion-social-usd-outline\"></i>\n        <div>\n          <span class=\"title\">AdMob</span>\n          <p class=\"description\">Show Google AdMob mobile ads</p>\n        </div>\n      </a>\n      \n      \n\n    </ion-list>\n    </ion-content>\n  </ion-side-menu>\n</ion-side-menus>\n");
$templateCache.put("views/auth/auth.html","<ion-nav-view class=\"auth-outer\">\n	<div multi-bg=\"[\'img/start.jpg\']\"></div>\n	<!-- <div multi-bg=\"[\'img/bg-img.jpg\']\"></div> -->\n</ion-nav-view>\n");
$templateCache.put("views/auth/forgot-password.html","<ion-view class=\"forgot-password-view auth-view\" cache-view=\"false\">\n  <ion-content scroll=\"false\">\n    <div class=\"row\">\n      <div class=\"col col-center\">\n        <div class=\"card forgot-password-container\">\n          <form name=\"forgot_password_form\" class=\"\" novalidate>\n            <div class=\"item item-body\">\n              <label class=\"item item-input\">\n                <input type=\"email\" placeholder=\"Email\" name=\"user_email\" ng-model=\"user.email\" required>\n              </label>\n            </div>\n            <div class=\"item item-body bottom-content\">\n              <button type=\"submit\" class=\"button button-positive button-block\" ng-click=\"recoverPassword()\" ng-disabled=\"forgot_password_form.$invalid\">\n                Recover it\n              </button>\n            </div>\n          </form>\n        </div>\n        <div class=\"alternative-actions\">\n          <a class=\"log-in button button-small button-clear button-light\" ui-sref=\"auth.login\">\n            Log In\n          </a>\n          <a class=\"sign-up button button-small button-clear button-light\" ui-sref=\"auth.signup\">\n            Sign Up\n          </a>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/auth/login.html","<ion-view class=\"login-view auth-view\" cache-view=\"false\">\n  <ion-content scroll=\"false\">\n    <div class=\"row\">\n      <div class=\"col col-center\">\n        <div class=\"card login-container\" content-tabs tabsdata=\'tabsdata\'>\n          <form name=\"login_form\" class=\"\" novalidate ng-cloak>\n            <my-tabs>\n              <my-tab title=\"Email\">\n                <div class=\"list\">\n                  <label class=\"item item-input\">\n                    <input type=\"email\" placeholder=\"Email\" name=\"user_email\" ng-model=\"user.email\" required>\n                  </label>\n                  <label class=\"item item-input\" show-hide-container>\n                    <input type=\"password\" placeholder=\"Password\" name=\"user_password\" ng-model=\"user.password\" required show-hide-input>\n                  </label>\n                </div>\n              </my-tab>\n              <my-tab title=\"Phone\">\n                <div class=\"list\">\n                  <label class=\"item item-input\">\n                    <input type=\"text\" placeholder=\"Phone number\" name=\"user_phone\" ng-model=\"user.phone\" required>\n                  </label>\n                  <label class=\"item item-input\" show-hide-container>\n                    <input type=\"password\" placeholder=\"PIN\" name=\"user_pin\" ng-model=\"user.pin\" required valid-pin=\"user.pin\" show-hide-input>\n                  </label>\n                </div>\n              </my-tab>\n            </my-tabs>\n            <div class=\"item item-body bottom-content\">\n              <button type=\"submit\" class=\"button button-positive button-block\" ng-click=\"doLogIn()\" ng-disabled=\"(selected_tab==\'Email\') ? (login_form.user_email.$invalid || login_form.user_password.$invalid) : ((selected_tab==\'Phone\') ? (login_form.user_phone.$invalid || login_form.user_pin.$invalid) : false)\">\n                Log In\n              </button>\n            </div>\n          </form>\n        </div>\n        <div class=\"alternative-actions\">\n          <a class=\"forgot-password button button-small button-clear button-light\" ui-sref=\"auth.forgot-password\">\n            Forgot Password?\n          </a>\n          <a class=\"sign-up button button-small button-clear button-light\" ui-sref=\"auth.signup\">\n            Sign Up\n          </a>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/auth/signup.html","<ion-view class=\"signup-view auth-view\" cache-view=\"false\">\n  <ion-content scroll=\"false\">\n    <div class=\"row\">\n      <div class=\"col col-center\">\n        <div class=\"card sign-up-container\">\n          <form name=\"signup_form\" class=\"\" novalidate>\n            <div class=\"item item-body\">\n              <label class=\"item item-input\">\n                <input type=\"email\" placeholder=\"Email\" name=\"user_email\" ng-model=\"user.email\" required>\n              </label>\n              <label class=\"item item-input\" show-hide-container>\n                <input type=\"password\" placeholder=\"Password\" name=\"user_password\" ng-model=\"user.password\" required show-hide-input>\n              </label>\n            </div>\n            <div class=\"item item-body bottom-content\">\n              <button type=\"submit\" class=\"button button-assertive button-block\" ng-click=\"doSignUp()\" ng-disabled=\"signup_form.$invalid\">\n                Sign Up\n              </button>\n            </div>\n          </form>\n        </div>\n        <div class=\"alternative-actions\">\n          <a class=\"log-in button button-small button-clear button-light\" ui-sref=\"auth.login\">\n            Log In\n          </a>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/auth/walkthrough.html","<ion-view class=\"walkthrough-view\" cache-view=\"false\">\n  <ion-content scroll=\"false\">\n    <div class=\"top-content row\">\n      <div class=\"col col-center logo\">\n        <img ng-src=\"img/logo.png\">\n      </div>\n    </div>\n    <div class=\"bottom-content row\">\n      <div class=\"col col-center\">\n        <a class=\"login button button-block button-stable\" ui-sref=\"app.wordpress\">\n          Health / Recipes\n        </a>\n        <a class=\"sign-up button button-block button-stable\" ui-sref=\"app.wordpress2\">\n          Beauty\n        </a>\n                <a class=\"science button button-block button-stable\" ui-sref=\"app.feeds-categories\">\n          Science\n        </a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/common/ionic-youtube-video.html","<youtube-video video-id=\"videoId\" player=\"yt_video\" player-vars=\"playerVars\"></youtube-video>\n");
$templateCache.put("views/common/multi-bg.html","<div class=\"multi-bg-outer\" ng-class=\"{ \'finish-loading\': loaded }\">\n	<img bg class=\"multi-bg {{ helperClass }}\" ng-src=\"{{ bg_img }}\"/>\n	<span class=\"bg-overlay\"></span>\n	<ion-spinner ng-show=\"!loaded\" class=\"spinner-on-load\"></ion-spinner>\n	<!-- <span ng-show=\"!loaded\" class=\"spinner-on-load ion-load-c\"></span> -->\n	<ng-transclude></ng-transclude>\n</div>\n");
$templateCache.put("views/common/my-tab.html","<div class=\"tab-content ng-cloak ng-hide\" ng-cloak ng-show=\"selected\" ng-transclude></div>\n");
$templateCache.put("views/common/my-tabs.html","<div class=\"item item-divider card-heding\">\n	<div class=\"tabs-striped\">\n		<div class=\"tabs\">\n			<a ng-repeat=\"tab in tabs\" ng-click=\"select(tab)\" ng-class=\"{ active: tab.selected }\" class=\"tab-item\">{{tab.title}}</a>\n		</div>\n	</div>\n</div>\n<div class=\"item item-body\">\n	<div class=\"tabs-content\" ng-transclude></div>\n</div>\n");
$templateCache.put("views/common/pre-img.html","<div class=\"pre-img {{ratio}} {{ helperClass }}\" ng-class=\"{ \'finish-loading\': loaded }\">\n	<ion-spinner ng-show=\"!loaded\" class=\"spinner-on-load\"></ion-spinner>\n	<!-- <span ng-show=\"!loaded\" class=\"spinner-on-load ion-load-c\"></span> -->\n	<ng-transclude></ng-transclude>\n</div>\n");
$templateCache.put("views/common/show-hide-password.html","<div class=\"show-hide-input\" ng-transclude>\n</div>\n<a class=\"toggle-view-anchor\" on-touch=\"toggleType($event)\">\n	<span class=\"ion-eye-disabled\" ng-show=\"show\"></span>\n	<span class=\"ion-eye\" ng-show=\"!show\"></span>\n</a>\n");
$templateCache.put("views/app/feeds/category-feeds.html","<ion-view class=\"category-feeds-view\">\n  <ion-nav-title>\n    <span>{{categoryTitle}} feeds</span>\n  </ion-nav-title>\n  <ion-content>\n    <div class=\"list category-feeds\">\n      <a ng-repeat=\"source in category_sources\" class=\"item item-icon-right\" ui-sref=\"app.feed-entries({categoryId: categoryId, sourceId: (source.title | slugify)})\">\n        <div class=\"thumbnail-outer\">\n          <pre-img ratio=\"_1_1\" helper-class=\"\">\n            <img class=\"thumbnail\" ng-src=\"{{source.image}}\" spinner-on-load>\n          </pre-img>\n        </div>\n        <div>\n          <span class=\"title\">{{source.title}}</span>\n          <p class=\"description\">{{source.description}}</p>\n        </div>\n        <i class=\"icon ion-arrow-right-c\"></i>\n      </a>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/feeds/feed-entries.html","<ion-view class=\"feed-entries-view\">\n  <ion-nav-title>\n    <span>{{sourceTitle}}</span>\n  </ion-nav-title>\n  <ion-content>\n    <!-- Refresh to get the new posts -->\n    <ion-refresher pulling-text=\"Pull to refresh...\" on-refresh=\"doRefresh()\">\n    </ion-refresher>\n\n    <div class=\"entries-list\">\n      <div ng-repeat=\"entry in feed.entries\" class=\"list card entry-item\">\n        <div class=\"entry-heading item item-text-wrap\">\n          <h2 class=\"entry-title\" ng-bind-html=\"entry.title | rawHtml\"></h2>\n        </div>\n        <div class=\"entry-content item item-text-wrap\">\n          <p class=\"entry-excerpt\" dynamic-anchor-fix ng-bind-html=\"entry.contentSnippet | rawHtml\"></p>\n          <div class=\"entry-actions row\">\n            <div class=\"actions col col-center col-66\">\n              <a class=\"button button-icon icon ion-bookmark\" ng-click=\"bookmarkPost(entry)\"></a>\n            </div>\n            <div class=\"read-more col col-center col-33\" dynamic-anchor-fix>\n              <a class=\"button button-small button-block button-assertive\" ng-href=\"{{entry.link}}\">\n                Read more\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/feeds/feeds-categories.html","<ion-view class=\"feeds-categories-view\">\n  <ion-nav-buttons side=\"left\">\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\n  </ion-nav-buttons>\n  <ion-nav-title>\n    <span>Science</span>\n  </ion-nav-title>\n  <ion-content>\n    <div class=\"row categories-list\">\n      <div ng-repeat=\"category in feeds_categories\" class=\"col col-50\">\n        <a class=\"feed-category\" ui-sref=\"app.category-feeds({categoryId: (category.title | slugify)})\">\n          <pre-img ratio=\"_1_1\" helper-class=\"square-image\">\n            <img class=\"category-image\" ng-src=\"{{category.image}}\" spinner-on-load>\n          </pre-img>\n          <div class=\"category-bg\"></div>\n          <span class=\"category-title\">{{category.title}}</span>\n        </a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/layouts/layouts.html","<ion-view class=\"layouts-view\">\n  <ion-nav-buttons side=\"left\">\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\n  </ion-nav-buttons>\n  <ion-nav-title>\n    <span>Layouts</span>\n  </ion-nav-title>\n  <ion-content>\n    <div class=\"list layouts-functionalities\">\n      <a class=\"item item-icon-left item-icon-right\" ui-sref=\"app.tinder-cards\">\n        <i class=\"icon ion-happy-outline\"></i>\n        <div>\n          <span class=\"title\">Tinder Cards</span>\n          <p class=\"description\">Awesome Tinder Cards</p>\n        </div>\n        <i class=\"icon ion-arrow-right-c\"></i>\n      </a>\n      <a class=\"item item-icon-left item-icon-right\" ui-sref=\"app.slider\">\n        <i class=\"icon ion-arrow-swap\"></i>\n        <div>\n          <span class=\"title\">Slider</span>\n          <p class=\"description\">Example of sliding cards</p>\n        </div>\n        <i class=\"icon ion-arrow-right-c\"></i>\n      </a>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/layouts/slider.html","<ion-view class=\"slider-view\">\n  <ion-nav-title>\n    <span>Slider</span>\n  </ion-nav-title>\n  <ion-content scroll=\"false\">\n    <ion-slide-box show-pager=\"true\">\n      <ion-slide ng-repeat=\"i in [1,2,3,4,5]\">\n        <div class=\"list card\">\n          <div class=\"item item-image\">\n            <img ng-src=\"http://lorempixel.com/300/200/nature?v={{i}}\">\n          </div>\n          <div class=\"item item-body\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slide-box>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/layouts/tinder-cards.html","<ion-view class=\"tinder-cards-view\">\n  <ion-nav-title>\n    <span>Tinder Cards</span>\n  </ion-nav-title>\n  <ion-content scroll=\"false\">\n    <td-cards>\n      <td-card id=\"td-card\" ng-repeat=\"card in cards\"\n      on-transition-left=\"transitionLeft(card)\"\n      on-transition-right=\"transitionRight(card)\"\n      on-transition-out=\"transitionOut(card)\"\n      on-destroy=\"cardDestroyed($index)\"\n      on-swipe-left=\"cardSwipedLeft($index)\"\n      on-swipe-right=\"cardSwipedRight($index)\"\n      on-partial-swipe=\"cardPartialSwipe(amt)\">\n        <div class=\"image\">\n          <div class=\"no-text overlayBox\">\n            <div class=\"noBox boxed\">\n              Nope\n            </div>\n          </div>\n          <img ng-src=\"{{card.image}}\">\n          <div class=\"yes-text overlayBox\">\n            <div class=\"yesBox boxed\">\n              Yes\n            </div>\n          </div>\n        </div>\n        <div class=\"title\">\n          {{card.name}}\n        </div>\n      </td-card>\n    </td-cards>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/miscellaneous/image-picker.html","<ion-view class=\"image-picker-view\">\n  <ion-nav-title>\n    <span>Image picker</span>\n  </ion-nav-title>\n  <ion-content class=\"padding\">\n    <button class=\"button button-block button-dark\" ng-click=\"selImages()\">\n      Select Images\n    </button>\n    <button  ng-show=\"images.length > 0\" class=\"button button-block button-stable\" ng-click=\"shareAll()\">\n      Share All\n    </button>\n    <div class=\"list card\" ng-repeat=\"img in images\">\n      <div class=\"item item-image\">\n        <img ng-src=\"{{img}}\">\n      </div>\n      <div class=\"item tabs tabs-secondary tabs-icon-left\">\n        <a class=\"tab-item image-option\" href=\"#\" ng-click=\"shareImage(img)\">\n          <i class=\"icon ion-share\"></i>\n          Share\n        </a>\n        <a class=\"tab-item assertive image-option\" href=\"#\" ng-click=\"removeImage(img)\">\n          <i class=\"icon ion-trash-a assertive\"></i>\n          Remove\n        </a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/miscellaneous/maps.html","<ion-view class=\"maps-view\">\n  <ion-nav-title>\n    <span>Maps</span>\n  </ion-nav-title>\n  <ion-content scroll=\"false\">\n    <div class=\"mapWrap\"  data-tap-disabled=\"true\">\n      <div class=\"row center-map-action\">\n        <div class=\"col\">\n          <div class=\"list\">\n            <div class=\"item item-input-inset\">\n              <a class=\"button button-icon icon ion-pinpoint\" ng-click=\"centerOnMe()\"></a>\n              <label class=\"item-input-wrapper\">\n                <input type=\"text\" placeholder=\"My Location\" disabled ng-model=\"my_location\">\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <map center=\"{{center_position.lat}},{{center_position.lng}}\" zoom=\"15\">\n        <marker\n            position=\"{{current_position.lat}},{{current_position.lng}}\"\n            title=\"Hello Marker\"\n            visible=\"true\">\n        </marker>\n        <info-window id=\"1\" position=\"{{info_position.lat}},{{info_position.lng}}\" visible=\"true\">\n          <div ng-non-bindable=\"\">\n            <b>The best restaurant</b><br>\n            This is html so you can put whatever <br>\n            you want such as images and <a href=\"\">links</a> <br>\n            <img style=\" border-radius: 24px;\" src=\"http://lorempixel.com/50/50/food/?v=1\"></img>\n            <img style=\" border-radius: 24px;\" src=\"http://lorempixel.com/50/50/food/?v=2\"></img>\n            <img style=\" border-radius: 24px;\" src=\"http://lorempixel.com/50/50/food/?v=3\"></img>\n          </div>\n        </info-window>\n      </map>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/miscellaneous/miscellaneous.html","<ion-view class=\"miscellaneous-view\">\n  <ion-nav-buttons side=\"left\">\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\n  </ion-nav-buttons>\n  <ion-nav-title>\n    <span>Miscellaneous</span>\n  </ion-nav-title>\n  <ion-content>\n    <div class=\"list miscellaneous-functionalities\">\n      <div dynamic-anchor-fix>\n        <a class=\"item item-icon-left item-icon-right\" href=\"http://www.ionicthemes.com\">\n          <i class=\"icon ion-ios-browsers-outline\"></i>\n          <div>\n            <span class=\"title\">In App Browser</span>\n            <p class=\"description\">Show web browser view with external links</p>\n          </div>\n          <i class=\"icon ion-arrow-right-c\"></i>\n        </a>\n      </div>\n      <a class=\"item item-icon-left item-icon-right\" href=\"#\" ng-controller=\"AdsCtrl\" ng-click=\"manageAdMob()\">\n        <i class=\"icon ion-social-usd-outline\"></i>\n        <div>\n          <span class=\"title\">AdMob</span>\n          <p class=\"description\">Show Google AdMob mobile ads</p>\n        </div>\n      </a>\n      <a class=\"item item-icon-left item-icon-right\" href=\"#\" ng-controller=\"RateApp\" ng-click=\"rateApp()\">\n        <i class=\"icon ion-ios-star-half\"></i>\n        <div>\n          <span class=\"title\">Rate the app</span>\n          <p class=\"description\">Rate this app in Google and Apple stores</p>\n        </div>\n      </a>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/wordpress/wordpress.html","<ion-view class=\"wordpress-view\">\n  <ion-nav-buttons side=\"left\">\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\n  </ion-nav-buttons>\n  <ion-nav-title>\n    <span>Health / Recipes</span>\n  </ion-nav-title>\n  <ion-content overflow-scroll=\"true\">\n    <!-- Refresh to get the new posts -->\n    <ion-refresher pulling-text=\"Pull to refresh...\" on-refresh=\"doRefresh()\">\n    </ion-refresher>\n\n    <div class=\"posts-list\">\n      <div ng-repeat=\"post in posts\" class=\"list card post-item\">\n        <div class=\"post-heading item item-text-wrap\">\n          <h2 class=\"post-title\" ng-bind-html=\"post.title | rawHtml\"></h2>\n        </div>\n        <div class=\"post-content item item-text-wrap\" post-content>\n          <p class=\"post-excerpt\" dynamic-anchor-fix ng-bind-html=\"post.content | rawHtml\"></p>\n          <div class=\"post-actions row\">\n            <div class=\"actions col col-center col-66\">\n              <a class=\"button button-icon icon ion-bookmark\" ng-click=\"bookmarkPost(post)\"></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Infinit scroll -->\n    <ion-infinite-scroll ng-if=\"moreDataCanBeLoaded()\" on-infinite=\"loadMoreData()\" distance=\"1%\" icon=\"ion-loading-c\">\n    </ion-infinite-scroll>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/wordpress/wordpress2.html","<ion-view class=\"wordpress-view\">\n  <ion-nav-buttons side=\"left\">\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\n  </ion-nav-buttons>\n  <ion-nav-title>\n    <span>Beauty</span>\n  </ion-nav-title>\n  <ion-content>\n    <!-- Refresh to get the new posts -->\n    <ion-refresher pulling-text=\"Pull to refresh...\" on-refresh=\"doRefresh()\">\n    </ion-refresher>\n\n    <div class=\"posts-list\">\n      <div ng-repeat=\"post in posts\" class=\"list card post-item\">\n        <div class=\"post-heading item item-text-wrap\">\n          <h2 class=\"post-title\" ng-bind-html=\"post.title | rawHtml\"></h2>\n        </div>\n        <div class=\"post-content item item-text-wrap\" post-content>\n          <p class=\"post-excerpt\" dynamic-anchor-fix ng-bind-html=\"post.content | rawHtml\"></p>\n          <div class=\"post-actions row\">\n            <div class=\"actions col col-center col-66\">\n              <a class=\"button button-icon icon ion-bookmark\" ng-click=\"bookmarkPost(post)\"></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Infinit scroll -->\n    <ion-infinite-scroll ng-if=\"moreDataCanBeLoaded()\" on-infinite=\"loadMoreData()\" distance=\"1%\" icon=\"ion-loading-c\">\n    </ion-infinite-scroll>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/wordpress/wordpress_post.html","<ion-view class=\"post-view\">\n  <ion-content>\n    <div class=\"post-heading item item-text-wrap\">\n      <h1 class=\"post-title\">{{post.title}}</h1>\n\n    </div>\n    <div class=\"post-content item item-text-wrap\" post-content>\n      <p class=\"post-text\" dynamic-anchor-fix ng-bind-html=\"post.content | rawHtml\"></p>\n    </div>\n    <div class=\"post-tags item item-text-wrap\">\n      <span class=\"post-tag button button-small button-outline button-stable\" ng-repeat=\"category in post.categories\">{{category.title}}</span>\n    </div>\n  </ion-content>\n  <ion-footer-bar class=\"post-footer bar bar-footer bar-dark\">\n  </ion-footer-bar>\n</ion-view>\n");}]);