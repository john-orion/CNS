const images = document.querySelectorAll('.image');

function toggleImage(imageIndex) {
  images.forEach((image, index) => {
    if (index === imageIndex - 1) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}
