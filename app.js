'use strict';

// Declare app level module which depends on views, and components
angular.module('movecat', [
  'ngRoute',
  'moviecat.services.http',

  'movecat.in_theater',
  'movecat.comming_soon',
  'movecat.top250'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theater'});
}]);

