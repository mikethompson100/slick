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

Notes: 1/31/23: Carousel 16 with draggable/easing is finished. Also finished example of edgeFriction on Carousel 17.

Notes: 2/2/23 - 2/4/23: Created Carousel 18 for lazyLoad. There was a lot to learn about on this one. 

 (1) The default 'on demand' needs to be used: lazyLoad:'ondemand'
 (2) For each image in the carousel, an attribute called "data-lazy" needs to be added (instead of src) containing the path to the image file (ex: <img data-lazy="img/002.jpg">). When the image is loaded on demand, the image tag's "data-lazy" attribute is converted to the usual src. 
 (3) One catch is that the image tags need to be surrounded with parent tags (divs) in order for it to work correctly with lazyLoad. 

I also noticed that the first slide image is loaded at page load and also the last one for some reason. Still learning.

Notes: 2/4/23: Built Carousel 19 showcasing the lazyloaded and lazyLoadError events. Still in progress.

Notes: 2/12/23: Built Carousel 20 showcasing mobileFirst and initialSlide.

Notes: 2/18/23: Built Carousel 21 showcasing pauseOnFocus, pauseOnHover & pauseOnDotsHover.

Notes: 2/19/23: Continuing work on the navigation area.

Notes: 2/20/23: Started Carousel 22 and respondTo.

Notes: 2/26/23: Reworking Carousel 22/respondTo code. 

Notes: 3/5/23: Finished Carousel 22 but need to revisit it because I'm not fully understanding how I can demonstrate this effectively. The three values are 'window', 'slider' and 'min'. My internet research has not revealed many examples or cases where this would be used.

Notes: 3/5/23: Finished Carousel 23 demonstrating rows and slidesPerRow.

Notes: 3/5/23: Starting Carousel 24, 'slide'.

Notes: 3/7/23: Changed Carousel 24 to use slidesToShow/slidesToScroll instead. 

Notes: 3/7/23: Created Carousel 25 demonstrating swipe/swipeToSlide.



