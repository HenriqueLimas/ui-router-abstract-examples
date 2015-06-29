(function() {
	'use strict';

	angular.module('app.homepage', ['ui.router', 'components'])
		.config(function($stateProvider) {
			var TEMPLATE_URL = 'app/homepage';

			$stateProvider
				.state('main.homepage', {
					url: '',
					templateUrl: TEMPLATE_URL + '/homepage.html'
				});
		});
})();
