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

		vm.message = "Books and resources are sorted alphabetically by each category";

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