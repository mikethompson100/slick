This project contains Slick js carousel examples based off of Ken Wheeler's library here:
https://github.com/kenwheeler/slick/

I will be teaching myself slick over the next month or so, learning all of the different features and applying them to the examples that I create for reference purposes for myself and others.

Notes: 12/18/22 - Refactored the code to consolidate repetitive lines like the carousel image tags and slick calls. After doing that, I also needed to create an asynchronous function to make sure that the slick carousels ran after the dynamic image code ran so slick had elements to act upon.
 
Notes: 1/2/23: Replaced the javascript that looped through each carousel to activate it with individual calls using the slick data from the HTML data-slick attribute of each carousel.
Still in the process of converting over all carousels, at Carousel 6/7.

Notes: 1/3/23: Created new carousels (8/9) to demonstrate how to use centerMode and focusOnSelect with asNavFor. Updated styles to make applicable features stand out. 

Notes: 1/11/23: Finished setting up carousel 10 demonstrating the use of appendArrows and responsive. Created two separate arrow sections, one for mobile and one for desktop. Added some styling.

Notes: 1/14/23: Finished setting up new carousel 11 demonstrating prevArrow/nextArrow and also appendDots. Displaying different options for arrows (text, text arrows, css arrow, image arrow).

Notes: 1/19/23: Cleaning up structure of scss file. 

Notes: 1/21/23: Setup Carousel 12 for centerPadding. Added styles to highlight padding area.
Setup Carousel 13 with cssEase: 'steps(5)'.
Setup Carousel 14 with cssEase: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)'.

Notes: 1/28/23: Built carousel 15 to include customPaging for the dots area. Also started Carousel 16.




