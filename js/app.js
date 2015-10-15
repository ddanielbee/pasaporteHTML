$(document).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 240, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  $(".collapsible-body").find("ul").find("li").click(function(){
      $('.button-collapse').sideNav('hide');
  });
});

var app = angular
  .module('app', [    
    'ngRoute',
    'ngAnimate' 
  ]) 
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.mobileTitle = "HTML 5";
            }
        }        
      })
      .when('/html', {
        templateUrl: 'views/html.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 1;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/css', {
        templateUrl: 'views/css.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 1;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/teorico-css', {
        templateUrl: 'views/teorico-css.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 1;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/practico-css', {
        templateUrl: 'views/practico-css.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 1;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/todo-first', {
        templateUrl: 'views/todo-first.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 1;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/javascript-intro', {
        templateUrl: 'views/javascript-intro.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 2;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/javascript-functions', {
        templateUrl: 'views/javascript-functions.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 2;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/javascript-objects', {
        templateUrl: 'views/javascript-objects.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 2;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/javascript-teorico', {
        templateUrl: 'views/javascript-teorico.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 2;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/javascript-practico', {
        templateUrl: 'views/javascript-practico.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 2;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/angular-intro', {
        templateUrl: 'views/angular-intro.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 3;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/angular-mvc', {
        templateUrl: 'views/angular-mvc.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 3;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/angular-routes', {
        templateUrl: 'views/angular-routes.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 3;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/angular-controllers', {
        templateUrl: 'views/angular-controllers.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 3;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/todo-second', {
        templateUrl: 'views/todo-second.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 3;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/baas-intro', {
        templateUrl: 'views/baas-intro.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 4;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/firebase', {
        templateUrl: 'views/firebase.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 4;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .when('/todo-third', {
        templateUrl: 'views/todo-third.html',
        resolve:{
          "check":function($location, $rootScope){   //function to be resolved, accessFac and $location Injected
              $rootScope.activeView = $location.path();
              $rootScope.activeMenu = 4;
              $rootScope.mobileTitle = $location.path().replace("/", "");
            }
        }       
      })
      .otherwise({
        redirectTo: '/'
      });
  });
