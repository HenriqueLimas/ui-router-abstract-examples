(function() {
	'use strict';

	function MyGraphComponent($timeout) {
		var vm = this;
		vm.graph = 'Loading...';

		$timeout(function() {
			vm.graph = 'Graph for ' + vm.idComponent;
		}, 1500);
	}

	function MyGraph() {
		return {
			restrict: 'E',
			controller: MyGraphComponent,
			controllerAs: 'MyGraphController',
			templateUrl: 'app/components/graph/graph.tmpl.html',
			scope: {
				idComponent: '='
			},
			bindToController: true
		};
	}

	angular.module('components.myGraph', [])
		.directive('myGraph', MyGraph);
})();
