/**
 * Created by Александр on 06.09.2015.
 */
(function() {
    'use strict';

    angular
        .module('company.service', [])
        .factory('companyService', companyService);

    companyService.$inject = ['$http'];

    function companyService($http) {
        var service = {
            getAll: getAllCompanies,
            showRating: showRating
        };

        return service;

        function getAllCompanies() {

            /*var companies = {};

             $http.get("data.json")
             .success(function (data) {
             companies = data.companies;
             alert("+++++++++++++");
             });
             return companies;
             */
            return $http.get("data/data.json");
        }

        function showRating() {
            jQuery(function () {
                jQuery(".ratebox").raterater({
                    submitFunction: 'rateAlert',
                    allowChange: false,
                    starWidth: 16,
                    spaceWidth: 0,
                    numStars: 5
                });
            });
        }
    }
})();