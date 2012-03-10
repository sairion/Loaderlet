(function(window){
	if(lodrlt){
	var l = document.createElement('script');
	//l.setAttribute('type', 'text/javascript');
	l.setAttribute('charset', 'UTF-8');
	l.setAttribute('src', 'http://' + Math.random() * 99999999);
	document.body.appendChild(l);
	}
	else{lodrlt();}
})(window);