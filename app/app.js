(function() {
	'use strict';

	angular.module('app', ['ui.router', 'components',
			'app.homepage',
			'app.first',
			'app.second'
		])
		.config(function($stateProvider, $urlRouterProvider) {
			var TEMPLATE_URL = 'app';

			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('main', {
					abstract: true,
					url: '/',
					views: {
						'@': {
							templateUrl: TEMPLATE_URL + '/main.html'
						}
					}
				});
		})
		.run(function($rootScope, $state) {
			$rootScope.$state = $state;
		});
})();
