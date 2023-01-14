const carouselTotal = 11;
const imagesTotal = 6;

function setupImages(carouselTotal) { // add same group of image nodes to each carousel
  let numOfCarousels = carouselTotal;
  for (let i = 1;  i < numOfCarousels+1; i++) {
      let string = "carousel" + i;
      var container = document.getElementById(string);
       for (var j = 1; j <= imagesTotal; j++) {
          var node = new Image();
          if (j === 2 && i === 4) { 
            node.src = 'img/0' + j + 'tall' + '.jpg'; 
          }
          else node.src = 'img/0' + j + '.jpg';
          switch (j) {
            case 1: node.alt = "A photo of the city Zahara de la Sierra in Spain."; break;
            case 2: node.alt = "A photo of a building in Malaga, Spain."; break;
            case 3: node.alt = "A photo of a bull statue in the city of Ronda, Spain."; break;
            case 4: node.alt = "A photo of gardens in the city of Granada, Spain."; break;
            case 5: node.alt = "A photo of houses in Ronda, Spain."; break;
          case 6: node.alt = "A photo of the city of Granada, Spain."; break;
          }
          
          container.appendChild(node);
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


}; 

// galleryInit is an asynchronous function that returns a promise of the images being loaded.
async function galleryInit() { return setupImages(carouselTotal) }

// The galleryInit call waits for the images to be loaded before running slick.
galleryInit().then(initCarousels()); 
