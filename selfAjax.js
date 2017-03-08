function ajax(url,type,param,dataType,callback){
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest;
	}else{
		xhr = new ActiveXObject('Microsoft.XMLHttp');
	} 
	if(type == 'get'){
		url += '?'+param;
	}
	xhr.open(type,url,true);
	var data = null;
	if(type == 'post'){
		data = param;
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	}
	xhr.send(data);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status ==200){
				if(dataType == 'json'){
					var dataStr = xhr.responseText;
					var data = JSON.parse(dataStr);
					callback(data);
				}else if(dataType == 'xml'){
					var data = xhr.responseXML;
					callback(data);
				}else{
					var data = xhr.responseText;
					callback(data);
				}
			}
		}
	}
}
