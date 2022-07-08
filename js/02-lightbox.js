import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  list: document.querySelector(".gallery"),
};
const imagesMarkup = createImagesMarkup(galleryItems);
console.log(imagesMarkup);

refs.list.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__items">
      <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}" 
        alt="${description}"
        title="${description}" />
    </a>
    </li>`;
    })
    .join("");
}
const gallery = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionData: "title",
  captionPosition: "bottom",
  captionDelay: 250,
});
