(function() {
    'use strict';

    angular
        .module('spaceAfterFirstChar.filter', [])
        .filter('spaceAfterFirstChar', spaceAfterFirstChar);

    /**
     * Adds space after first character
     *
     * @returns {Function}
     */
    function spaceAfterFirstChar() {
        return function (input) {
            var inputVal = input.toString();

            var firstChar = inputVal.slice(0, 1);
            var afterFirstChar = inputVal.slice(1, input.length);

            return firstChar + " " + afterFirstChar;
        }
    }

})();
