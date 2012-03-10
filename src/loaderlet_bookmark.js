(function(window){
	if(typeof(lodrlt)==="undefined"){
	var l = document.createElement('script');
	//l.setAttribute('type', 'text/javascript');
	l.setAttribute('charset', 'UTF-8');
	l.setAttribute('src', 'https://raw.github.com/sairion/Loaderlet/master/src/loaderlet_v0_01_min.js' + Math.random() * 99999999);
	document.body.appendChild(l);
	}
	else{lodrlt();}
})(window);