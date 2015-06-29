(function() {
	'use strict';

	function MyWidgetComponent($timeout) {
		var vm = this;
		vm.widget = 'Loading...';
		$timeout(function() {
			vm.widget = 'Widget for ' + vm.idComponent;
		}, 1000);
	}

	function myWidget() {
		return {
			restrict: 'E',
			scope: {
				idComponent: '='
			},
			controller: MyWidgetComponent,
			controllerAs: 'MyWidgetController',
			templateUrl: 'app/components/widget/widget.tmpl.html',
			bindToController: true
		};
	}

	angular.module('components.myWidget', [])
		.directive('myWidget', myWidget);
})();
