I started this project doing some research about Material Design, and I decided to switch from Bootstrap (a framework I'm really used to) to Materialize. Materialize is easy to learn and it has and shares a very similar structure with Bootstrap when writing code. (http://materializecss.com/)

I had to change the styling of some of the components but it can be easily done using the same selector from the Materialize.css file in the project's own stylesheet.  

Also decided to use Jquery, which made my JS file much shorter and easy to write. (https://jquery.com/) 

I started writing the HTML document and CSS stylesheet at the same time, but I think it's better to focus first in the HTML document and then do the styling. I used the height of the rows to set the correct alignments, trying to give them all the same sizing, with a few necessary exceptions. 

I did the form validation last. It's triggered by the submit button, and it shows a number of divs which contains the error messages; this required some CSS adjustments.  

Then, I added the animations and effects, including a "reset()" function that makes the errors' divs disappear when the user focus each input. 

In the end, I wrote the media query for mobile devices, changing some aspects of the original design meant for PC screens. 