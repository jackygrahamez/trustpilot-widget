**UPDATE**
-- Font Stack Update, now using 'Helvetica Neue', Arial, Helvetica, sans-serif;

HOW I GOT HERE

Samantha King from Workbridge Associates sent this link
https://boards.greenhouse.io/trustpilot/jobs/48355#.VOuF5efjcXw

I opened came to a site with a link to follow the white rabbit. I clicked the link

There was a call to action “WAKE UP NEO …”
“The matrix has you...”

Then a large string of randomized characters

iVBORw0KGgoAAAANSUhEUgAAAlgAAAEsCAMAAAAo4z2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9i
…

I then decided there had to be some clue in the javascript. It was minified so I copied it and put it into a code beautifier http://jsbeautifier.org/

Once there I found a method window.whiterabbit which I called in the console window.whiterabbit()

The screen says “The rabbit is hiding, find it and I'll show you howdeep the rabbit-hole goes.”

I found a click event

            $(this).on("click", function() {
                if ($(this).hasClass("deep")) {
                    $(".rabbit-hole").remove();
                    $("body").append('<div class="deep-hole"><h3>You found a glitch in the matrix!</h3><p>Quickly use the <a href="' + a + '" target="_blank">glitch<a/> and see where it takes you.</div>');
                    setTimeout(function() {
                        $(".deep-hole").addClass("uncovered")
                    }, 100)
                } else {
                    alert("the rabbit hole is empty, try again...")
                }
            })

So in the console I entered  $(".deep").click();

The browser the browser then presents You found a glitch in the matrix!
Quickly use the glitch and see where it takes you.

Once I clicked the glitch link I got taken here http://followthewhiterabbit.trustpilot.com/fe/bottom-of-rabbit-hole.html

HOW THE WIDGET WORKS

Extract the jgs-widget-2015022402.zip

The root of this directory should be the document root in webserver such as Apache

The widget should be visible and the user should be able to look at a list of reviews and append reviews by first clicking the star ranking, then additional form fields will appear. Once user is ready to submit press submit button and their review will be pre-pended to the list. No validation is enabled.
