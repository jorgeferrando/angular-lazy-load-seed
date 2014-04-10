define(["app/customLazyLoader"], function (lazyLoader) {
    "use strict";
    return [{
        name: "root",
        state: {
            url: "/",
            views: {
                "mainView": {
                    templateUrl: "js/app/main.html"
                },
                "lazyView": {
                    template: "<h1>Initial Page</h1>"
                }
            }
        }
    }, {
        name: "test1",
        state: {
            url: "/test1",
            views: {
                "mainView": {
                    templateUrl: "js/app/main.html"
                },
                "lazyView": {
                    template: lazyLoader.template,
                    controller: function ($scope, $ocLazyLoad) {
                        lazyLoader.load($scope, $ocLazyLoad, 'TestModule', ['js/app/modules/test/testModule.js'], 'js/app/modules/test/partials/test-template.html');
                    }
                }
            }
        }
    }, {
        name: "test2",
        state: {
            url: "/test2",
            views: {
                "mainView": {
                    templateUrl: "js/app/main.html"
                },
                "lazyView": {
                    template: lazyLoader.template,
                    controller: function ($scope, $ocLazyLoad) {
                        lazyLoader.load($scope, $ocLazyLoad, 'TestModule', ['js/app/modules/test/testModule.js'], 'js/app/modules/test/partials/test-template2.html');
                    }
                }
            }
        }
    }];
});
