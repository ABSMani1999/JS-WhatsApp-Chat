var msg = document.querySelector(".msg");

//change icon
msg.addEventListener('keydown',textMsg);

	function textMsg(e){
		let	show = e.target.value;
		//console.log(show);
		
		if(typeof show === "string" || typeof show ==="number"){
			let parentDiv = e.target.parentNode.parentNode.querySelector('.sendBtn');
				//console.log(parentDiv);
				parentDiv.style.display = "flex";
				
			let micDiv = e.target.parentNode.parentNode.querySelector('.mic');
			micDiv.style.display = "none";
		}	
	}
	
//send text
var send = document.querySelector(".sendBtn");
var body = document.querySelector('.body');

send.addEventListener('click',sendMsg);

	function sendMsg(e){
		
		let	textValue = msg.value;
		//console.log(textValue);

		let div = document.createElement("div");
		body.appendChild(div);
		div.classList.add("msgDiv");
		div.innerHTML = msg.value;
		
		textValue = "";
		msg.value = textValue;
		
		//time
		let pEle = document.createElement("p");
		div.appendChild(pEle); 
		pEle.classList.add("timer")
		let date = new Date();
		let dat = date.getHours();
		let min = date.getMinutes();
		pEle.innerHTML = `${dat}:${min}`;

}

//option
var dotsOption = document.querySelector(".dots");

	dotsOption.addEventListener("click",optionClick);
	
	function optionClick (e){
		var optionEle = e.target.parentNode.parentNode.querySelector(".option");
		console.log(optionEle);
		optionEle.style.visibility = 'visible';
	
//leave Element
var optionEle = e.target.parentNode.parentNode.querySelector(".option");

	optionEle.addEventListener("mouseleave",optionClick);
	
	function optionClick (e){
		console.log(optionEle);
		optionEle.style.visibility = 'hidden';
		}
	}

//clip 
var clip = document.querySelector('.clip');
	
	clip.addEventListener('click',openClip);
	
	function openClip(e){
		let smallClipDiv = e.target.querySelector('.clip-row');
			smallClipDiv.style.visibility = "visible";
			smallClipDiv.style.top = "-390px";
			smallClipDiv.style.transition = 'all 0.5s';
		// console.log(smallClipDiv);
	}
	
var closeClip = document.querySelector('.clip');

		closeClip.addEventListener('dblclick',closeClipDiv);
		
		function closeClipDiv(e){
			let closeClipDiv = e.target.querySelector('.clip-row');
			closeClipDiv.style.visibility = "hidden";
			closeClipDiv.style.top = "0px";
			closeClipDiv.style.transition = "all 0.5s";
			// console.log(closeClipDiv);
		}