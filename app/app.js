//
// Define the 'app' module.
//
App = angular.module('app', [
    'ngAnimate',
    'ngRoute',
    'ngCookies',
    'ngSanitize',
    'mgcrea.ngStrap',
    //my directives
    'charts',

    //my controllers
    'loginController',
    'homeController',
    'articlesController',
    'chartsController',
    'settingsController',
    //my services
    'services'
]);

App.config(function ($httpProvider, $routeProvider, $locationProvider) {
        $routeProvider
            .when('/login', {templateUrl: '/views/login.html', controller: 'loginCtrl'})
            //menu home
            .when('/home', {templateUrl: '/views/home.html', controller: 'homeCtrl'})
            //menu articles
            .when('/articles', {templateUrl: '/views/articles.html', controller: 'articlesCtrl'})
            //menu charts
            .when('/charts', {templateUrl: '/views/charts.html', controller: 'chartsCtrl'})
            //menu settings
            .when('/settings', {templateUrl: '/views/settings.html', controller: 'settingsCtrl'})
            // Catch all
            .otherwise({redirectTo: '/home'});

        // Without server side support html5 must be disabled.
        //$locationProvider.html5Mode(false);

        $httpProvider.interceptors.push(function ($rootScope, $location, $q, $cookieStore) {
            return {
                'request': function (request) {
                    // if we're not logged-in to the AngularJS app, redirect to login page
//                    $rootScope.loggedIn = true; //for test
                    var user = $cookieStore.get('user')
                    if(!$rootScope.loggedIn && user){
                        $rootScope.loggedIn = true
                    }

                    if (!$rootScope.loggedIn && $location.path() != '/login') {
                        console.log('Not logined');
                        $location.path('/login');
                    }
                    return request;
                },
                'responseError': function (rejection) {
                    // if we're not logged-in to the web service, redirect to login page
                    if (rejection.status === 401 && $location.path() != '/login') {
                        $rootScope.loggedIn = false;
                        $location.path('/login');
                    }
                    return $q.reject(rejection);
                }
            };
        });
    }
)