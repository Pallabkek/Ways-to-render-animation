function moveBoxForwardOnePixel(object) {
  let box = document.getElementById(object);
  let left = box.getBoundingClientRect().left;
  if(left >= 500) left = 0;
  box.style.left = (left + 1) + 'px';
};

function callback() {
  moveBoxForwardOnePixel("box1");
  requestAnimationFrame(callback);
};

callback();

function callbackByTimeout() {
  moveBoxForwardOnePixel("box2");
  setTimeout(callbackByTimeout, 0);
};

callbackByTimeout();
