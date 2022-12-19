import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgGallery = document.querySelector('.gallery');
const imgsMarcup = createImageItems(galleryItems);

imgGallery.insertAdjacentHTML('beforeend', imgsMarcup);
imgGallery.addEventListener('click', onImgGalleryClick);

function createImageItems(gallery) {
    return gallery
    .map(({preview,original,description}) => {
        return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>`
        }).join('');
};


function onImgGalleryClick(evt) {
  evt.preventDefault();

  if(!evt.target.classList.contains('gallery__image')) {
      return;
    }
  
  };
  
  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    navText:	['54','56'],
    captionsDelay: 250,
})



// function onImgGalleryClick(evt) {
//   evt.preventDefault();

//   if(!evt.target.classList.contains('gallery__image')) {
//       return;
//     }
    
//     let gallery = new SimpleLightbox('.gallery a');
//     gallery.on('show.simplelightbox', function () {
//     console.log('shoese')
// });
//   };
  
 

