var express = require( 'express' )
		,app = express()
		,bodyParser = require( 'body-parser' )
		,path = require( 'path' )
		,fs = require( 'fs' )
		,md = require("node-markdown").Markdown;

// public folder to serve public assets
app.use( express.static( __dirname + '/public' ));
app.set('port', 3000);

// route to index.html
app.get( '*', function( req, res ) {
	res.sendFile( path.join( __dirname + '/public/views/index.html' ));
});

// fs.readFile( 'booklist.md', function( err, data ) {
// 	if( err )
// 		throw err;
// 	var parsed = md( data.toString() );
// 	var jstr = JSON.stringify( parsed );
// 	var writeObj = JSON.parse( jstr );

// 	fs.appendFile('public/views/pages/view.html', writeObj, function (err) {
// 	  if (err) throw err;
// 	  // console.log( writeObj );
// 	});
// });
var port = process.env.PORT || 3000;

app.listen( port );
console.log( 'Magical shit happening now on ', port );