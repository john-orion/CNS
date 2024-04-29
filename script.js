const toggleButton7 = document.getElementById('button7');
const toggleButton6 = document.getElementById('button6');
const toggleButton5 = document.getElementById('button5');
const toggleButton4 = document.getElementById('button4');
const toggleButton3 = document.getElementById('button3');
const toggleButton2 = document.getElementById('button2');

const image7 = document.getElementById('img7');
const image6 = document.getElementById('img6');
const image5 = document.getElementById('img5');
const image4 = document.getElementById('img4');
const image3 = document.getElementById('img3');
const image2 = document.getElementById('img2');

toggleButton7.addEventListener('click', function() {
  if (image7.style.opacity === '0') {
    image7.style.opacity = '1';
  } else {
    image7.style.opacity = '0';
  }
});

toggleButton6.addEventListener('click', function() {
  if (image6.style.opacity === '0') {
    image6.style.opacity = '1';
  } else {
    image6.style.opacity = '0';
  }
});

toggleButton5.addEventListener('click', function() {
  if (image5.style.opacity === '0') {
    image5.style.opacity = '1';
  } else {
    image5.style.opacity = '0';
  }
});

toggleButton4.addEventListener('click', function() {
  if (image4.style.opacity === '0') {
    image4.style.opacity = '1';
  } else {
    image4.style.opacity = '0';
  }
});

toggleButton3.addEventListener('click', function() {
  if (image3.style.opacity === '0') {
    image3.style.opacity = '1';
  } else {
    image3.style.opacity = '0';
  }
});

toggleButton2.addEventListener('click', function() {
  if (image2.style.opacity === '0') {
    image2.style.opacity = '1';
  } else {
    image2.style.opacity = '0';
  }
});

//change button colour

let isDefaultColor2 = true;

toggleButton2.addEventListener('click', function() {
  if (isDefaultColor2) {
    toggleButton2.classList.remove('default');
    toggleButton2.classList.add('alt');
  } else {
    toggleButton2.classList.remove('alt');
    toggleButton2.classList.add('default');
  }
  
  isDefaultColor2 = !isDefaultColor2;
});

let isDefaultColor3 = true;

toggleButton3.addEventListener('click', function() {
  if (isDefaultColor3) {
    toggleButton3.classList.remove('default');
    toggleButton3.classList.add('alt');
  } else {
    toggleButton3.classList.remove('alt');
    toggleButton3.classList.add('default');
  }
  
  isDefaultColor3 = !isDefaultColor3;
});

let isDefaultColor4 = true;

toggleButton4.addEventListener('click', function() {
  if (isDefaultColor4) {
    toggleButton4.classList.remove('default');
    toggleButton4.classList.add('alt');
  } else {
    toggleButton4.classList.remove('alt');
    toggleButton4.classList.add('default');
  }
  
  isDefaultColor4 = !isDefaultColor4;
});

let isDefaultColor5 = true;

toggleButton5.addEventListener('click', function() {
  if (isDefaultColor5) {
    toggleButton5.classList.remove('default');
    toggleButton5.classList.add('alt');
  } else {
    toggleButton5.classList.remove('alt');
    toggleButton5.classList.add('default');
  }
  
  isDefaultColor5 = !isDefaultColor5;
});

let isDefaultColor6 = true;

toggleButton6.addEventListener('click', function() {
  if (isDefaultColor6) {
    toggleButton6.classList.remove('default');
    toggleButton6.classList.add('alt');
  } else {
    toggleButton6.classList.remove('alt');
    toggleButton6.classList.add('default');
  }
  
  isDefaultColor6 = !isDefaultColor6;
});

let isDefaultColor7 = true;

toggleButton7.addEventListener('click', function() {
  if (isDefaultColor7) {
    toggleButton7.classList.remove('default');
    toggleButton7.classList.add('alt');
  } else {
    toggleButton7.classList.remove('alt');
    toggleButton7.classList.add('default');
  }
  
  isDefaultColor7 = !isDefaultColor7;
});



