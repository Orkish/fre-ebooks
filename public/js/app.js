angular.module( 'mainApp', [ 'routerRoutes', 'ngAnimate' ])

	.controller( 'mainController', function() {
		var vm = this;

		vm.welcomeMsg = 'Welcome to the Fre-ebooks!';
	})

	// homepage controller
	.controller( 'homeController', function() {
		var vm = this;

		vm.message = "this is the Home Page!";
	})

	// about controller
	.controller( 'aboutController', function() {
		var vm = this;

		vm.message = "this is the About Page!";
	})

	// contact controller
	.controller( 'contactController', function() {
		var vm = this;

		vm.message = "Fill the form out below to contact me!";
	});