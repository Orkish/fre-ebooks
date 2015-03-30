var app = angular.module( 'mainApp', [ 'routerRoutes', 'ngAnimate' ]);

app.controller( 'mainController', function() {
		var vm = this;

		// vm.welcomeMsg = 'Welcome to the Fre-ebooks!';
	})

	// homepage controller
	.controller( 'homeController', function() {
		var vm = this;

		vm.message = "The contents of this page is not my own and is graciously hosted on Github and maintained by the public community ";
		vm.clickOut = "https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md";
	})

	// view controller
	.controller( 'viewController', function( $http ) {
		var vm = this;

		vm.message = "Books and resources are sorted alphabetically by each category. Please use cmd/ctrl + f to search for keywords";
	})

	// contact controller
	.controller( 'contactController', function( $scope ) {
		var vm = this;

		vm.message = "Feel free to send me suggestions, ideas, questions or just to troll me";

		$scope.toggling = true;
	});