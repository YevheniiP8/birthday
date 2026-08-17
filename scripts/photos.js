document.addEventListener('DOMContentLoaded', function () {
  class PhotoItem {
    constructor(imgPath, altText) {
      this.imgPath = imgPath;
      this.altText = altText;
    }
  }

  const photoItems = [
    new PhotoItem('./assets/images/photo_1.jpg', 'Photo 1'),
    new PhotoItem('./assets/images/photo_2.jpg', 'Photo 2'),
    new PhotoItem('./assets/images/photo_3.jpg', 'Photo 3'),
    new PhotoItem('./assets/images/photo_4.jpg', 'Photo 4'),
    new PhotoItem('./assets/images/photo_5.jpg', 'Photo 5'),
    new PhotoItem('./assets/images/photo_6.jpg', 'Photo 6'),
    new PhotoItem('./assets/images/photo_7.jpg', 'Photo 7'),
    new PhotoItem('./assets/images/photo_8.jpg', 'Photo 8'),
    new PhotoItem('./assets/images/photo_9.jpg', 'Photo 9'),
    new PhotoItem('./assets/images/photo_10.jpg', 'Photo 10'),
    new PhotoItem('./assets/images/photo_11.jpg', 'Photo 11'),
    new PhotoItem('./assets/images/photo_12.jpg', 'Photo 12'),
    new PhotoItem('./assets/images/photo_13.jpg', 'Photo 13'),
    new PhotoItem('./assets/images/photo_14.jpg', 'Photo 14'),
    new PhotoItem('./assets/images/photo_15.jpg', 'Photo 15'),
  ];

  const photoItemTemplate = document.getElementById(
    'photo-item-template',
  ).content;
  const carousel = document.getElementById('carousel');

  photoItems.forEach((photoItem) => {
    const photoItemElement = photoItemTemplate.cloneNode(true);
    const imgElement = photoItemElement.querySelector('img');
    imgElement.src = photoItem.imgPath;
    imgElement.alt = photoItem.altText;
    carousel.appendChild(photoItemElement);
  });
});
