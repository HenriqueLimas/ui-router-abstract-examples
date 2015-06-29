(function() {
	'use strict';

	function myApp() {
		return {
			restrict: 'E',
			template: [
				'<div class="container">',
				'	<div ui-view></div>',
				'</div>',
			].join('\n')
		}
	}

	angular.module('app')
		.directive('myApp', myApp);
})();
