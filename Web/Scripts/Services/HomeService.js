(function () {
    'use strict';

    console.log("Service loaded");

    angular.module(CutieHack).factory("homeService", HomeService);
    HomeService.$inject = ["$http", "$q"];

    function HomeService($http, $q) {
        var srv = {

        }
        return srv;

        

    }

})();