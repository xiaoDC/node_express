define(function(require, exports, module){
	var b = function( r ){
		this._r = r||1;
	};

	b.prototype.area = function() {
		// body...
		return (this._r * this._r* this._r);
	};

	module.exports = b;
});