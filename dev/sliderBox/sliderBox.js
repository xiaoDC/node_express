// sliderBox.js
define(function(require, exports, module) {
	var sliderBox = function(selector, elId){
		if(!selector){
			selector = document;
		}
		if(!elId){
			elId = "sliderBox";
		}
		var oBox = selector.getElementById(elId);
		var oList = oBox.getElementsByTagName("ul")[0];
		var oImg = oBox.getElementsByTagName("img");
		var timer = null;
		var playTimer = null;
		var index = 0;
		var aTmp = []; //暂时存放数字按钮
		var aBtn = null;

		//生成数字按钮
		for (var i = 0, len = oImg.length; i < len; i++) {
			aTmp.push("<li>" + (i + 1) + "</li>")
		};

		//插入元素
		var oCount = document.createElement("ul");
		oCount.className = "count";
		oCount.innerHTML = aTmp.join("");
		oBox.appendChild(oCount);
		aBtn = oBox.getElementsByTagName("ul")[1].getElementsByTagName("li");

		// 初始化sliderBox状态
		cutOver();

		// 按钮点击切换
		for (var i = 0, len = aBtn.length; i < len; i++){
			aBtn[i].index = i;
			aBtn[i].onmouseover = function(){
				index = this.index;
				cutOver();
			}
		}

		function cutOver(){
			for (var i = 0, len = aBtn.length; i < len; i++) {
				aBtn[i].className = "";
			};
			aBtn[index].className = "current";
			startMove()
		}

		function startMove(iTarget){
			clearInterval(timer);
			timer = setInterval(function(){
				doMove(iTarget);
			}, 30);
		}

		function doMove(iTarget){
			var iSpeed = (iTarget - oList.offsetLeft) / 10;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			oList.offsetLeft == iTarget ? clearInterval(timer) : oList.style.left = oList.offsetLeft 
					+ iSpeed + "px";
		}

		function next(){

		}
	}
	module.exports = sliderBox;
});