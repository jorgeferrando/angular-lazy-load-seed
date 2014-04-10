define([], function () {
    "use strict";
    function lazyLoad(scope, loader, moduleName, files, viewPath) {
        loader.load({
            name: moduleName,
            files: files
        }).then(function () {
            scope.partialUrl = viewPath;
        });
    }
    var containerTemplate = "<div data-ng-include='partialUrl'>";
    return {
        load: lazyLoad,
        template: containerTemplate
    };
});
