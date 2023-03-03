var urlstr = location.href;
function getnfpath(){
	if(urlstr.indexOf("tags") != -1){
		return(1);
	}
	if(urlstr.indexOf("video") != -1){
		return(2);
	}
	if(urlstr.indexOf("help") != -1){
		return(3);
	}
	if(urlstr.indexOf("ws") != -1){
		return(4);
	}
	return(-1);
}
function hrefToPathNF(){
	var path;
	path = getnfpath();
	if(path == 1){
		window.location.href="tags/404.html";
	}
	if(path == 2){
		window.location.href="video/404.html";
	}
	if(path == 3){
		window.location.href="help/404.html";
	}
	if(path == 4){
		window.location.href="ws/403.html"
	}
	if(path == -1){
		window.location.getE
	}
}