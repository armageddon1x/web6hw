if (firstflag1===true) {
	//condition
	alert("first");
	if (firstflag2===true&&firstflag3===true){
		//condition inside
	};
}else if (firstflag2===true) {
	//condition
	alert("second");
	if (firstflag1===true&&firstflag3===true){
		//condition inside
	};
}else if (firstflag3===true) {
	//condition
	alert("third");
	if (firstflag2===true&&firstflag1===true){
		//condition inside
	};
}else{
	alert("last");
};

//trial
$(document).ready(function(){
	//beginning

	$(".button").click(function(){
		var firstflag1=false;
		var firstflag2=true;
		var firstflag3=true;s

		if (firstflag1===false) {
			//condition
			alert("first");
			alert("Try Again");
			if (firstflag2===true&&firstflag3===true){
				//condition inside
				alert("first inside");
			};
		}else if (firstflag2===false) {
			//condition
			alert("second");
			if (firstflag1===true&&firstflag3===true){
				//condition inside
				alert("second inside");
			};
		}else if (firstflag3===false) {
			//condition
			alert("third");
			if (firstflag2===true&&firstflag1===true){
				//condition inside
				alert("third inside");
			};
		}else{alert("last");};
	});

	$(".button2").click(function(){
		var firstflag2=false;
		var firstflag1=true;
		var firstflag3=true;

		if (firstflag1===false) {
			//condition
			alert("first");
			if (firstflag2===true&&firstflag3===true){
				//condition inside
			};
		}else if (firstflag2===false) {
			//condition
			alert("second");
			if (firstflag1===true&&firstflag3===true){
				//condition inside
			};
		}else if (firstflag3===false) {
			//condition
			alert("third");
			if (firstflag2===true&&firstflag1===true){
				//condition inside
			};
		}else{alert("last");};
	});

	$(".button3").click(function(){
		var firstflag3=false;
		var firstflag1=true;
		var firstflag2=true;

		if (firstflag1===false) {
			//condition
			alert("first");
			if (firstflag2===true&&firstflag3===true){
				//condition inside
			};
		}else if (firstflag2===false) {
			//condition
			alert("second");
			if (firstflag1===truew&&firstflag3===true){
				//condition inside
			};
		}else if (firstflag3===false) {
			//condition
			alert("third");
			if (firstflag2===true&&firstflag1===true){
				//condition inside
			};
		}else{alert("last");};
	});
//trial