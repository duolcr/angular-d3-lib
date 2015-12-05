var app = angular.module("app", ["d3", 'ngRoute']);
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller : 'homeController',
		templateUrl : 'partials/home.html'
	})
	.when('/bar-chart', {
			controller : 'barChartController',
			templateUrl : 'partials/bar-chart.html'
		})
	.otherwise({
		redirectTo : '/'
	});
});