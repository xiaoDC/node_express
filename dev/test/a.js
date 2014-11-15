define(function (require, exports, module) {

	var b = require('./b');
	var a = function( r ){
		b.call(this);
	};


	a.prototype = new b();
	a.prototype.constructor = a;
	a.prototype.tri_area = function() {
		// body...
		return (this._r * this._r * this._r * this._r);
	};

	module.exports = a;
});