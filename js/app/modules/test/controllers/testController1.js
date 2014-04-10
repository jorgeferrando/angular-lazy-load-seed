define([
    "angular"
], function (angular) {
    "use strict";
    var ctrl = ['$scope',
        function ($scope) {
            $scope.testMessage1 = "Start from test 1 module!";
        }
    ];

    return ctrl;
});
