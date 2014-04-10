define([
    "angular",
    "app/modules/test/controllers/testController1",
    "app/modules/test/controllers/testController2",
], function (angular,ctr1,ctr2) {

    var app = angular.module("TestModule", ['oc.lazyLoad'])
        .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                asyncLoader: requirejs
            });
        }])
        .controller("testController1", ctr1)
        .controller("testController2", ctr2);


    return app;
});
