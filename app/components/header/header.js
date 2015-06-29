(function() {
	'use strict';

	function MyHeaderComponent($state) {
		var vm = this;

		vm.isActive = isActive;

		function isActive(state) {
			return {
				active: $state.includes(state)
			};
		}
	}

	function MyHeader() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/header/header.tmpl.html',
			controller: MyHeaderComponent,
			controllerAs: 'MyHeaderController',
			scope: true
		};
	}

	angular.module('components.myHeader', ['ui.router'])
		.directive('myHeader', MyHeader);
})();