(function() {
	'use strict';

	function AppHomepageComponent() {}

	function appHomepage() {
		return {
			restrict: 'E',
			controller: AppHomepageComponent,
			controllerAs: 'AppHomepageController',
			templateUrl: 'app/homepage/homepage.tmpl.html'
		};
	}

	angular.module('app.homepage')
		.directive('appHomepage', appHomepage);
})();