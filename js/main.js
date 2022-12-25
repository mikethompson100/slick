const carouselTotal = 3;
const imagesTotal = 6;

function setupImages() { // add same group of image nodes to each carousel
  let numOfCarousels = 3;
  for (let i = 1;  i < numOfCarousels+1; i++) {
      let string = "carousel" + i;
      var container = document.getElementById(string);
       for (var j = 1; j <= imagesTotal; j++) {
          var node = new Image();
          node.src = 'img/0' + j + '.jpg';
          switch (j) {
            case 1: node.alt = "A photo of the city Zahara de la Sierra in Spain."; break;
            case 2: node.alt = "A photo of a building in Malaga, Spain." + j; break;
            case 3: node.alt = "A photo of a bull statue in the city of Ronda, Spain." + j; break;
            case 4: node.alt = "A photo of gardens in the city of Granada, Spain." + j; break;
            case 5: node.alt = "A photo of houses in Ronda, Spain." + j; break;
            case 6: node.alt = "A photo of the city of Granada, Spain." + j; break;
          }
          
          container.appendChild(node);
        } 
  }
}

function initCarousels(numOfCarousels) { // run all slick carousels
  for (let i = 1;  i <= numOfCarousels; i++) {
        node = '.carousel' + i;
          $(node).slick({});
  }
}

// galleryInit is an asynchronous function that returns a promise of the images being loaded.
async function galleryInit() { return setupImages() }

// The galleryInit call waits for the images to be loaded before running slick.
galleryInit().then(initCarousels(carouselTotal)); 
