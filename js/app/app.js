define(["angular", "ui.router", "oc.lazyLoad", "app/customLazyLoader", "app/states"], function (angular, router, ocLazyLoad, lazyLoader, states) {
    "use strict";
    var app = angular.module("app", ['ui.router', "oc.lazyLoad"]);
    app
        .config([
            "$stateProvider", "$locationProvider", "$urlRouterProvider",
            function ($stateProvider, $locationProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/');
                states.forEach(function (state) {
                    $stateProvider.state(state.name, state.state);
                });
                // Without server side support html5 must be disabled.
                return $locationProvider.html5Mode(false);
            }
        ])
        .config(['$ocLazyLoadProvider',
            function ($ocLazyLoadProvider) {
                $ocLazyLoadProvider.config({
                    asyncLoader: require
                });
            }
        ]);

    return app;
});
