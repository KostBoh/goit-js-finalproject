import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

function createMarkup(items) {
  return items
    .map(
      ({ preview, original, description }, index) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
            </a>
        </li>`
    )
    .join("");
}

galleryList.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
galleryList.addEventListener("click", handlerGaleryClick);

function handlerGaleryClick(evt) {
  evt.preventDefault();
  if (evt.currentTarget === evt.target) {
    return;
  }
  const clickedImageSrc = evt.target.getAttribute("data-source");
  const clickedImageObject = galleryItems.find(
    (item) => item.original === clickedImageSrc
  );

  console.log(clickedImageObject);
}
