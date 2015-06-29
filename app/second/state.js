(function() {
	'use strict';

	angular.module('app.second', ['ui.router', 'components'])
		.config(function($stateProvider) {
			var TEMPLATE_URL = 'app/second';

			$stateProvider
				.state('main.second', {
					abstract: true,
					url: 'second/:id',
					views: {
						'@main': {
							templateUrl: TEMPLATE_URL + '/second.html'
						},
						'graph@main.second': {
							templateUrl: TEMPLATE_URL + '/graph.html'
						},
						'widget@main.second': {
							templateUrl: TEMPLATE_URL + '/widget.html'
						}
					}
				})
				.state('main.second.index', {
					url: '',
					views: {
						'content': {
							templateUrl: TEMPLATE_URL + '/index/index.content.html'
						}
					}
				});
		});
})();
