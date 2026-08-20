document.addEventListener('DOMContentLoaded', function () {
  class PhotoItem {
    constructor(imgPath, altText) {
      this.imgPath = imgPath;
      this.altText = altText;
    }
  }

  const photoItems = [
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=1ixIAkg3Vxya4-B_bYAaQIWjTdytlykud&sz=w720',
      'Photo 1',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=135GQjEqHYslawM4B4Y-B2HJtVfeGyGXc&sz=w720',
      'Photo 2',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=1WFIjcjdFJLVyMv1CN8ofy_CyHFcH0nee&sz=w720',
      'Photo 3',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=1nH6po4Z-QcWa7DPV140VwtoT3AxcslXi&sz=w720',
      'Photo 4',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=1Up-Xw16wrKKGW2h8hSr33zdLZczTfDO7&sz=w720',
      'Photo 5',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=1-cGov8SNHZP_3he_gVnUvQGqug0iqmoN&sz=w720',
      'Photo 6',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=1NveKuFVfWtdI9lANY6nZl5oZLMiTLtn6&sz=w720',
      'Photo 7',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=1KH3gYSG-INiLuTFHlrPyMMIYA8sXOVQg&sz=w720',
      'Photo 8',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=1U201FbxBqUDD4zhJzN14UgzkPVzaw4hh&sz=w720',
      'Photo 9',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=1gKMaaQb-gp2e3Lti2CCLiKSHz8Ueizee&sz=w720',
      'Photo 10',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=1x_7IZkoEnWbVAhaIEErHKLtE2ZVQIEas&sz=w720',
      'Photo 11',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=14viUxoWtM3hzYcQyNLT78dXduEknH92M&sz=w720',
      'Photo 12',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=11L8UtuMsKskDYZDzSqdKDchdWOVnCtHD&sz=w720',
      'Photo 13',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=16KJuE7R-nK6C3E6CBt0v2ehbktPnLQr_&sz=w720',
      'Photo 14',
    ),
    new PhotoItem(
      'https://drive.google.com/thumbnail?id=1i1BkHsKWcxjGN2T125h1g0jft0NQfVRI&sz=w720',
      'Photo 15',
    ),
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
