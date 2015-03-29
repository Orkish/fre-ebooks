var express = require( 'express' )
		,app = express()
		,bodyParser = require( 'body-parser' )
		,path = require( 'path' )
		,fs = require( 'fs' )
		,md = require("node-markdown").Markdown
		,jsdom = require('jsdom');

// public folder to serve public assets
app.use( express.static( __dirname + '/public' ));
app.set('port', 3000);

// route to index.html
app.get( '*', function( req, res ) {
	console.log( __dirname, path.join( __dirname + '/public/views/index.html' ) );
	res.sendFile( path.join( __dirname + '/public/index.html' ));
});

// fs.readFile( 'booklist.md', function( err, data ) {
// 	if( err )
// 		throw err;
// 	var parsed = md( data.toString() );
// 	var jstr = JSON.stringify( parsed );
// 	var writeObj = JSON.parse( jstr );

// 	jsdom.env(
// 		  writeObj,
// 		  ["http://code.jquery.com/jquery.js"],
// 		  function (errors, window) {
// 		    console.log("contents of a.the-link:", window.$("a.the-link").text());
// 		    var h3s = window.$('h3');
// 		    var uls = window.$('ul');

// 		    var div = window.$('<div></div>');
// 		    div.addClass('wrapper');
// 		    var leftCol = window.$('<div></div>');
// 		    leftCol.addClass('left');
// 		    var rightCol = window.$('<div></div>');
// 		    rightCol.addClass('right');

// 		    [].slice.call( h3s ).forEach(function(el,idx){
// 		    	leftCol.append( el );
// 		    });
// 		    [].slice.call( uls ).forEach(function(el,idx){
// 		    	rightCol.append( el );
// 		    });

// 		    div.append(leftCol);
// 		    div.append(rightCol);
		    
// 		    fs.appendFile(
// 		    	'public/views/pages/view2.html'
// 		    	, div.html()
// 		    	, function (err) {
// 					  if (err) throw err;
// 					  // console.log( writeObj );

// 				});
// 		  }
// 	);
	
// });
var port = process.env.PORT || 3000;

app.listen( port );
console.log( 'Magical shit happening now on ', port );