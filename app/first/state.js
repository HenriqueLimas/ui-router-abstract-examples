(function() {
	'use strict';

	angular.module('app.first', ['ui.router', 'components'])
		.config(function($stateProvider) {
			var TEMPLATE_URL = 'app/first';

			$stateProvider
				.state('main.first', {
					abstract: true,
					url: 'first/:id',
					views: {
						'@main': {
							templateUrl: TEMPLATE_URL + '/first.html'
						},
						'widget@main.first': {
							templateUrl: TEMPLATE_URL + '/widget.html'
						}
					}
				})
				.state('main.first.index', {
					url: '',
					views: {
						'content': {
							templateUrl: TEMPLATE_URL + '/index/index.content.html'
						}
					}
				})
				.state('main.first.details', {
					url: '/details',
					views: {
						'content': {
							templateUrl: TEMPLATE_URL + '/details/details.content.html'
						}
					}
				});
		});
})();
