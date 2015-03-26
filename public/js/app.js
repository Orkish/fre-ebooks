var app = angular.module( 'mainApp', [ 'routerRoutes', 'ngAnimate' ]);

app.controller( 'mainController', function() {
		var vm = this;

		vm.welcomeMsg = 'Welcome to the Fre-ebooks!';
	})

	// homepage controller
	.controller( 'homeController', function() {
		var vm = this;

		vm.message = "this is the Home Page!";
	})

	// view controller
	.controller( 'viewController', function( $http ) {
		var vm = this;

		vm.message = "this is the view Page!";

		// $http.get( "http://api.github.com/repos/vhf/free-programming-books/readme" )
		// $http.get( "http://api.github.com/repos/vhf/free-programming-books/contents/free-programming-books.md" )
		// .success( function( data ) {
		// 	var dataContent = data.content;
		// 	console.log( 'this is dataContent:', dataContent.length );
		// 	var decoded = $base64.decode( dataContent );
		// 	console.log( 'this is data:', decoded );
		// });
	})

	// contact controller
	.controller( 'contactController', function() {
		var vm = this;

		vm.message = "Fill the form out below to contact me!";
	});