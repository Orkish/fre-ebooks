// inject ngRoute for all our routes
angular.module( 'routerRoutes', [ 'ngRoute' ])

	// config routes
	.config( function( $routeProvider, $locationProvider ) {
		$routeProvider

		// route for home page
		.when( '/', {
			templateUrl: 'views/pages/home.html'
			,controller: 'homeController'
			,controllerAs: 'home'
		})

		// route for about page
		.when( '/about', {
			templateUrl: 'views/pages/about.html'
			,controller: 'aboutController'
			,controllerAs: 'about'
		})

		// route for contact page
		.when( '/contact', {
			templateUrl: 'views/pages/contact.html'
			,controller: 'contactController'
			,controllerAs: 'contact'
		});

		$locationProvider.html5Mode( true );
	});