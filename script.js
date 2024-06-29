document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementsByClassName("timer")[0].style.display = "flex";
    Image(index);
    console.log("Image Displayed");
  }, 2000);
});

let index = 0;
let slide_show_interval = null;

document.getElementsByClassName("timer")[0].style.display = "none";
document.getElementsByClassName("timer")[1].style.display = "none";

function MoveSlides(n) {
  index += n;
  console.log(`${index} is index value`);
  Image(n);
}

function select_Image(n) {
  index = n - 1;
  Image(n);
}

function Image(n) {
  let i;
  let slide = document.getElementsByClassName("Image_Slide");
  let nav = document.getElementsByClassName("manual_navigation");
  if (index > slide.length - 1) {
    console.log("Reset");
    index = 0;
  }
  if (index < 0) {
    console.log("Swithed to Last");
    index = slide.length - 1;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  for (i = 0; i < nav.length; i++) {
    nav[i].className = nav[i].className.replace(" active", "");
  }

  slide[index].style.display = "block";
  nav[index].className += " active";
  console.log(`${index} is index value`);
}

function show_timer() {
  console.log("Show timer triggered");
  document.getElementsByClassName("timer")[0].style.display = "none";
  document.getElementsByClassName("timer")[1].style.display = "flex";
}

function set_timer() {
  const number = document.getElementById("timerValue");
  const value = number.value;
  const IntValue = parseFloat(value);
  console.log(`Slideshow timer set to ${IntValue} sec`);
  // console.log( );
  if (isNaN(IntValue)) {
    alert("Enter Valid Value.");
  } else {
    console.log("SlideShow started");
    Slide_show(IntValue);
  }
}

function Slide_show(time) {
  console.log("SlideShow Reset");
  clearInterval(slide_show_interval);
  if (time <= 3) {
    for (i = 1; i <= 3; i++) {
      document.getElementById(i).className = document
        .getElementById(i)
        .className.replace("button_clicked", "");
    }
    document.getElementById(time).className += "button_clicked";
  }
  slide_show_interval = setInterval(() => {
    console.log("Triggered");
    MoveSlides(1);
  }, time * 1000);
}
