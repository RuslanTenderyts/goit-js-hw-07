import { galleryItems } from './gallery-items.js';
// Change code below this line



console.log(galleryItems);


const imgGallery = document.querySelector('.gallery');
const imgsMarcup = createImageItems(galleryItems);

imgGallery.insertAdjacentHTML('beforeend', imgsMarcup);
imgGallery.addEventListener('click', onImgGalleryClick);

let imgHref 

function createImageItems(gallery) {
    return gallery
    .map(({preview,original,description}) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img 
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`
        }).join('');
};

function onImgGalleryClick(evt) {
    evt.preventDefault();

    if(!evt.target.classList.contains('gallery__image')) {
        return;
    }

    const hrefImage = evt.target.dataset.source;
        
    const instance = basicLightbox.create(`
    <img src="${hrefImage}" width="800" height="600">`)

    instance.show()
};

