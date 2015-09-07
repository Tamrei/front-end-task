(function() {
    'use strict';

    angular
        .module('company.directive', [])
        .directive('onLastRepeat', onLastRepeat);

    onLastRepeat().$inject = ['$emit', '$last'];

    function onLastRepeat() {
        return function (scope, element, attrs) {
            if (scope.$last) setTimeout(function () {
                scope.$emit('onRepeatLast', element, attrs);
            }, 1);
        };
    }

})();