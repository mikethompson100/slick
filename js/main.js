const carouselTotal = 29;
const imagesTotal = 6;

function standardAltTags(j, node) {
  switch (j) {
    case 1: node.alt = "A photo of the city Zahara de la Sierra in Spain."; break;
    case 2: node.alt = "A photo of a building in Malaga, Spain."; break;
    case 3: node.alt = "A photo of a bull statue in the city of Ronda, Spain."; break;
    case 4: node.alt = "A photo of gardens in the city of Granada, Spain."; break;
    case 5: node.alt = "A photo of houses in Ronda, Spain."; break;
    case 6: node.alt = "A photo of the city of Granada, Spain."; break;
  }
}

function setupImages(carouselTotal) { // add same group of image nodes to each carousel
   let numOfCarousels = carouselTotal;
  for (let i = 1;  i < numOfCarousels+1; i++) {
    let string = "carousel" + i;
    var container = document.getElementById(string);
     for (var j = 1; j <= imagesTotal; j++) {
        var node = new Image();
        if (i === 26) { 
            //skip this carousel for slide: 'div' example 
           }
        else if (i === 18 || i === 19) {  // lazyLoad special carousel/images
              switch (j) {
                case 1: node.alt = "White, red and yellow sports cars at a car show."; break;
                case 2: node.alt = "Red sports car at a car show."; break;
                case 3: node.alt = "Yellow Lamborghini at a car show."; break;
                case 4: node.alt = "Row of cars at a car show."; break;
                case 5: node.alt = "Car show."; break;
                case 6: node.alt = "Car show."; break;
              }
              let imgPath = 'img/00' + j + '.jpg';
              if (i === 19 && j === 3) {
                imgPath = 'img/00' + j + 'a' + '.jpg';
              }
              else {
                imgPath = 'img/00' + j + '.jpg';
              }              
              node.setAttribute("data-lazy", imgPath);
              container.appendChild(node);
              node.outerHTML = '<div>' + node.outerHTML + '</div>';
        }
        else if (j === 2 && i === 4) { //Carousel 4 showcasing adaptiveHeight tall image
              node.src = 'img/0' + j + 'tall' + '.jpg';           
              container.appendChild(node);
              standardAltTags(j,node);
        }
        else {  // all other carousels
              node.src = 'img/0' + j + '.jpg';
              container.appendChild(node);
              standardAltTags(j,node);
        }
      } 
  } 
 } 

function initCarousels() { // run all slick carousels
  
$('#carousel1').slick({});

$('#carousel2').slick({
  slidesToShow: 2, 
  slidesToScroll: 2, 
  dots: true, 
  infinite: false
});

$('#carousel3').slick({
  slidesToScroll: 1, 
  variableWidth: true
}); 

$('#carousel4').slick({
  adaptiveHeight: true, 
  dots: true,
  fade:true,
  speed: 4000
}); 

$('#carousel5').slick({
  autoplay: true, 
  autoplaySpeed: 1000
}); 

$('#carousel6').slick({
  asNavFor: "#carousel7",
  dots: true,
  arrows: false
}); 
$("#carousel7").slick({
  slidesToShow: 3,
  asNavFor: "#carousel6"
});

$('#carousel8').slick({
  asNavFor: "#carousel9",
  arrows: false,
  fade: true
}); 
$("#carousel9").slick({
  slidesToShow: 3,
  asNavFor: "#carousel8",
  centerMode: true,
  focusOnSelect: true
});

$("#carousel10").slick({
  slidesToShow: 3,
  arrows: true,
  appendArrows: '.appendArrowsDesktop',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        arrows: true,
        appendArrows: '.appendArrowsMobile'
      }
    }
  ]
});

$('#carousel11').slick({
  slidesToShow: 3,
  dots: true,
  appendDots: '.appendDots',
  arrows: true,
  prevArrow: '.previous',
  nextArrow: '.next'
}); 

$('#carousel12').slick({
  centerMode: true,
  centerPadding: '20px'
}); 

$('#carousel13').slick({
  speed: 1500,
  cssEase: 'steps(5)'
}); 

$('#carousel14').slick({
  speed: 1000,
  cssEase: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)'
}); 

$('#carousel15').slick({
  dots: true,
  customPaging : function(slider, i) {
      return $('<img src="img/0' + (i+1) + 'dots.svg">').text(i + 1);
  }
});

$('#carousel16').slick({  
    draggable: false,
    speed: 3000
});

$('#carousel17').slick({
   edgeFriction: .5,
   infinite: false
}); 
 
$('#carousel18').slick({
  lazyLoad:'ondemand',
  speed: 100
});


$('#carousel19').slick({
  lazyLoad:'ondemand',
  speed: 100,
  infinite: false
});

      $('#carousel19').on('lazyLoaded', function (e, slider, image, imageSource) {
          var messageLocation = document.getElementById("demo");
          const node = document.createElement("h5");
          node.classList.add('green');
          node.innerHTML = imageSource + " loaded on the page.";
          messageLocation.appendChild(node);
      });

      $('#carousel19').on('lazyLoadError', function (e, slider, image, imageSource) {
        var messageLocation = document.getElementById("demo");
        const node = document.createElement("h5");
        node.classList.add('red');
        node.innerHTML = imageSource + " failed to load successfully.";
        messageLocation.appendChild(node);
      });


$('#carousel20').slick({
  mobileFirst: true,
  initialSlide: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        initialSlide: 0
      }
    }
   ]
});

$('#carousel21').slick({
  autoplay: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  dots: true,
  pauseOnDotsHover: true
});

$('#carousel22').slick({
  respondTo: 'slider',
  dots: false,
  slidesToShow: 2, 
  slidesToScroll: 2, 
  responsive: [
    {
      breakpoint: 767, // mobile 400-767
      settings: {        
        respondTo: 'window',        
        slidesToShow: 1, 
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 400, // mobile 400
      settings: {        
        respondTo: 'min',        
        slidesToShow: 1, 
        slidesToScroll: 1,
        dots: true
      }
    }
   ]
});

$('#carousel23').slick({
     mobileFirst: true,
     rows: 2,
     slidesPerRow: 1,
     responsive: [
      {
        breakpoint: 1200,
        settings: {
          rows: 2,
          slidesPerRow: 2
        }
      }
     ]
});


$('#carousel24').slick({
  slidesToShow: 3, 
  slidesToScroll: 3
});

$('#carousel25').slick({
  swipe: true,
  swipeToSlide: true,
  slidesToScroll: 2,
  slidesToShow: 2
});

$('#carousel26').slick({
  slide: 'div.test',
  rows: 0
});

$('#carousel27').slick({
  touchMove: true,
  touchThreshold: 20
});

$('#carousel28').slick({ 
  useCSS: false,
  easing: 'easeOutElastic',
  speed: 4000
});

$('#carousel29').slick({ 

});

}; 


// galleryInit is an asynchronous function that returns a promise of the images being loaded.
async function galleryInit() { return setupImages(carouselTotal) }

// The galleryInit call waits for the image nodes to be created before running slick.
galleryInit().then(initCarousels()); 
