import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItemsMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class='gallery__item'><a class='gallery__link' href='${original}'><img class='gallery__image' src ='${preview}' data-sourse='${original}' alt='${description}'/></a></li>`;
    })
    .join("");
}

galleryList.addEventListener('click', onLinkClick);

function onLinkClick(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src='${event.target.dataset.sourse}'/>
`)
    instance.show();

document.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
        instance.close();
}
})
    
}


console.log(galleryItems);
