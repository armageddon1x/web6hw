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

//add document
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

/*this snippets, or methods, can take either a 
function or an argument*/

//add anonymous function
//$(document).ready(function(){
			//thing to be done
			//});

/*that's a full jQuery function! the document is 
checked to see if the elements are loaded. once it is, 
the code inside will run. this is good to use when you 
want to make sure certain elements are available to 
be used.*/

//*************************************************

//jQuery Functions

/*There are some jQuery functions that can do cool 
things*/

//.fadeOut/.fadeIn 
//fades an object out or in (take time in 
//milliseconds)

$("#square").fadeOut(1500);

//.ready (only takes functions)
//checks to see if object has loaded

//.css (changes css, takes strings as
//[css properties in (“css property”)(“css value”)])
//changes css properties

//.animate({property to animate: a value})
//animates an object

/*.ready is an object loading event. for a user event,
something like .click is used*/

//.click
//when you click on an element, something happens

//.mouseOver
//when you mouse over an element, something happens

//.keyUp
//when you press a key up in an element, something 
//happens

//*************************************************
//*************************************************
//*************************************************
//*************************************************

//*************************************************
//The End
//*************************************************