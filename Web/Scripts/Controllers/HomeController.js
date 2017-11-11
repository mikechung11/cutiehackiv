(function () {
    'use strict'

    angular.module(CutieHack).controller("homeController", HomeController);
    HomeController.$inject = ["$scope", "homeService"];

    function HomeController($scope) {
        
        var vm = this;

        vm.$onInit = _init;
       

        function _init() {
            console.log('Controller loaded');
        }

        

        
    }
})();
