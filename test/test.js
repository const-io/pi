'use strict';

// MODULES //

var test = require( 'tape' );
var pi = require( './../lib' );


// TESTS //

test( 'main export is a number', function test( t ) {
	t.ok( typeof pi === 'number', 'main export is a number' );
	t.end();
});

test( 'export is a double-precision floating-point number equal to 3.141592653589793', function test( t ) {
	t.equal( pi, 3.141592653589793, 'equals 3.141592653589793' );
	t.end();
});
