var r="'''Twitter''' ({{IPAc-en|ˈ|t|w|ɪ|t|ər}}) is an online [[social networking service|social networking]] service that enables users to send and read short 140-[[character (computing)|character]] messages called tweets. Registered users can read and post tweets, but those who are unregistered can only read them. Users access Twitter through the website interface, [[Short Message Service|SMS]] or mobile device [[Application software|app]].<ref>[http://support.twitter.com/groups/34-apps-sms-and-mobile/topics/153-twitter-via-sms/articles/14014-twitter-via-sms-faq# Twitter via SMS FAQ] Retrieved April 13, 2012.</ref> Twitter Inc. is based in [[San Francisco]] and has more than 25 offices around the world.<ref>[https://about.twitter.com/company About Twitter] Retrieved April 24, 2014.</ref>"


theUrl="https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&titles=Stack_Overflow"
var xmlHttp = new XMLHttpRequest();
q=""
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            q=xmlHttp.responseText;
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
q=JSON.parse(q)
q=q.replace(/\r?\n|\r/g, "")
ans="";
for(i=0;i<q.length;i++){
	if(q[i]=="&"){
		console.log("qqqq");
		if(i+5<q.length)
		{
			if(q.substr(i,i+5)=="&amp;"){ //check
				conole.log("www")
				i=i+4;
				ans=ans+"&";
			}
		}
	}
else if(q[i]=='\\'){
	if(i+1<q.length){
	if(q[i+1]=='n'){
		i++;
		continue;
	}
}
}
else if(q[i]=='"'){

}
else if(q[i]=="<"){
	itr=1;
	while(itr>0){
		i++;
		if(q[i]==">"){
			itr--;
		}
		else if(q[i]=="<"){
			itr++;
		}
	}
	continue;
}
else{
	ans=ans+q[i];
}
}
