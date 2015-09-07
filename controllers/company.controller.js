(function () {
    'use strict';

    angular
        .module('company.controller', ['company.service', 'company.directive'])
        .controller("companiesController", ["companyService", "$scope", function (companyService, $scope) {

            companyService.getAll().then(function (data) {
                $scope.companies = data.data.companies;
            });

            $scope.$on('onRepeatLast', function () {
                companyService.showRating();
            });
        }]);
})();
