const carouselTotal = 3;
const imagesTotal = 6;

function setupImages() { // add same group of image nodes to each carousel
  let numOfCarousels = 3;
  for (let i = 1;  i < numOfCarousels+1; i++) {
      let string = "carousel" + i;
      var container = document.getElementById(string);
       for (var j = 1; j < imagesTotal; j++) {
          var node = new Image();
          node.src = 'img/0' + j + '.jpg';
          container.appendChild(node);
        } 
  }
}

function initCarousels(numOfCarousels) { // run all slick carousels
  for (let i = 1;  i < numOfCarousels+1; i++) {
        node = '.carousel' + i;
          $(node).slick({});
  }
}

// galleryInit is an asynchronous function that returns a promise of the images being loaded.
async function galleryInit() { return setupImages() }

// The galleryInit call waits for the images to be loaded before running slick.
galleryInit().then(initCarousels(carouselTotal)); 
