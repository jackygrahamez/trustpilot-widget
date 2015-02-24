'use strict';

/**
 * @ngdoc overview
 * @name trustpilotWidgetApp
 * @description
 * # trustpilotWidgetApp
 *
 * Main module of the application.
 */
angular
  .module('trustpilotWidgetApp', [
    'ngAnimate',
    'ngSanitize',
    'truncate'
  ]).filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
});
