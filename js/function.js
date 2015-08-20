//*************************************************
//jQuery
//*************************************************

//Javascript and jQuery

/*Javascript is powerful but can be overwhelming. 
however, there are libraries of functions premade so 
that it is easier to implement JS into web pages. one
library is jQuery, which can be included into the 
html head as an external source. this library is held
in a CNS (content deliery network) with an absolute 
path*/

//how does a jQuery function look like?

//call
//$()

/*this is the way to call jQuery functions. the $() is 
actually the main jQuery function that contains the 
library. by using the $(), you can call other 
functions as well*/

//add element
//$(document)
/*elements to be used by the function go inside the
parentheses. the elements are in CSS syntax*/

//$("body");
//$("#icon");
//$(".thing"); 

/*Javascript is an object oriented language, so it 
manipulates objects. the Document Object Model 
(DOM) is a standard that helps with interaction with 
objects and using HTML elements as objects. jQuery 
uses this to select basically any HTML element and 
manipuate it easily, as shown above*/

//add snippet (check if document is ready)
//$(document).ready()

/*you can add events to make your elements have 
interactivity. for example, the .ready() checks the 
document to see if all the elements in the document 
are available. the code inside wont run until the 
document is ready.*/

/*these snippets, or methods, can take either a 
function or an argument*/

//add anonymous function
//$(document).ready(function(){
			//thing to be done
			//});

/*the anonymous function allows other functions to 
be executed. specifically, the anonymous function 
allows a function to be passed as an argument to 
another function*/

$(document).ready(function(){
	//$(element).snippet(function(){
		//$(element).snippet();
	//});
});

/*that's a full jQuery function! the document is 
checked to see if the elements are loaded. once it is, 
the code inside will run. this is good to use when you 
want to make sure certain elements are available to 
be used.*/

//*************************************************

//Some Sammple jQuery Functions

/*There are some jQuery functions that can do cool 
things*/

//.ready (only takes functions)
//checks to see if object has loaded

$(document).ready(function(){
	alert("jQuery is loaded");
});

//.fadeOut/.fadeIn 
//fades an object out or in (take time in 
//milliseconds)

$(document).ready(function(){
	$("#square").fadeOut(1500);
});

//.css (changes css, takes strings as
//[css properties in (“css property”)(“css value”)])
//changes css properties

$(document).ready(function(){
	$("#circle").css("background","black");
});

//.animate({property to animate: a value})
//animates an object

$(document).ready(function(){
	$("#rectangle").animate({top:"25px",},1000);
});

/*.ready is an object loading event. for a user 
event, something like .click is used*/

//.click
//when you click on an element, something happens

$(document).ready(function(){
	$("#new_square").click(function(){
		$("#new_square").fadeOut(2000);
		$("#new_square").fadeIn(2000);
	});
});


//.mouseOver
//when you mouse over an element, something happens

$(document).ready(function(){
	$("#new_circle").mouseover(function(){
		$("#new_circle").css("width","100px");
	});
});

//*************************************************

//jQuery Function Exercises

//*************************************************

//this moves a rectange to the left then to the 
//right
$(document).ready(function(){
	//beginning
	$("#new_rectangle").click(function(){
		$("#new_rectangle").animate({
			right:"100px",}, 3000);
		$("#new_rectangle").animate({
			right:"-500px",}, 1000);
	});
	//end
});

//*************************************************

//this presents 3 buttons

//original
$(document).ready(function(){
	//beginning of function

	//goat is 1, car is 0
	var goat=Math.round(Math.random());

	//flags
	var flag1=true;
	var flag2=true;
	var flag3=true;

	//triggers everything on button click on button 1
	/*i tried to get the function to work but i couldnt
	get the proper if statements to make it work. i will
	have to revisit this at another time.*/
	$(".button").click(function(){
		if (flag1) {
			//flags turn false
			flag1=false;
			flag2=false;
			flag3=false
			alert("Try Again!");
			console.log("try");
			//assigns value to the other buttons
			$(".button2").click(function(){
				if (goat===1) {
					alert("You Won a Goat!");
					console.log("goat1");
				}else{
					alert("You Won a Car!");
					console.log("car1");
				};
			});
		$(".button3").click(function(){
				if (goat===0) {
					alert("You Won a Goat!");
					console.log("goat2");
				}else{
					alert("You Won a Car!");
					console.log("car2");
				};
			});
		}else{
			alert("Already Tried!");
			console.log("did");
		};
	});

	//supposed to reset the flags but the button click
	//above repeats for each reset.
	$(".button4").click(function(){
		var goat=Math.round(Math.random());
		flag1=true;
		flag2=true;
		flag3=true;
		console.log("reset");
	});

});



//*************************************************

//this button makes a mini rave
$(document).ready(function(){
	//timer that stores the interval of the execution
	//of the swap color function
	var timer;
	var r, g, b, rc, gc, bc, color, word;
	var rave_on=true;

	//audio variable that stores airhorn
	var airhorn=document.createElement('audio');
	airhorn.setAttribute('src','sounds/airhorn.mp3');

	//click to start or stop rave
	$(".rave").click(function(){
		if (rave_on===true) {
		timer=setInterval( function(){
			swapColor();
		},100);
		rave_on=false;

	}else if(rave_on===false){
		//resets page to what it was before
		$("body").css("background","gray");
		$("body").css("color","white");
		$(".rave").val("Start The Rave Again!!!");
		//pauses audio and sets it to the beginning
		airhorn.pause();
		airhorn.currentTime=0
		rave_on=true;
		//stops the setInterval
		clearInterval(timer);
		};
	});

	//color swap function
	function swapColor(){
		//defining colors for the background
		r=Math.floor((Math.random()*255));
		g=Math.floor((Math.random()*255));
		b=Math.floor((Math.random()*255));
		//defining colors for the words
		rc=Math.floor((Math.random()*255));
		gc=Math.floor((Math.random()*255));
		bc=Math.floor((Math.random()*255));
		//combined colors in rgb format
		color="rgb("+r+","+g+","+b+")";
		word="rgb("+rc+","+gc+","+bc+")";
		//color changer
		airhorn.play();
		$("body").css("background",color);
		$("body").css("color",word);
		$(".rave").val("Stop The Rave...");
	}
});


//*************************************************

//this makes a blinking banana that stretches
$(document).ready(function(){
	$("#banana").mouseover(function(){
		$("#banana").animate({width:"+=100px"},1000);
		$("#banana").fadeIn(function(){
			$("#banana").css("border","2px solid black");
		});
	});
});

//*************************************************
//The End
//*************************************************