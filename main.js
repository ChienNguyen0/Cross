window.addEventListener("scroll", slideDown);
window.addEventListener("scroll", slideIn);
window.addEventListener("scroll", slideUp);
window.addEventListener("scroll", slideInRight);
window.addEventListener("scroll", growUp);

function slideDown() {
  var slideDowns = document.querySelectorAll(".slideDown");

  for (var i = 0; i < slideDowns.length; i++) {
    var windowHeight = window.innerHeight;
    var slideDownTop = slideDowns[i].getBoundingClientRect().top;
    var slideDownPoint = 150;

    if (slideDownTop < windowHeight - slideDownPoint) {
      slideDowns[i].classList.add("active");
    } else {
      slideDowns[i].classList.remove("active");
    }
  }
}
function slideIn() {
  var slideIns = document.querySelectorAll(".slideIn");

  for (var i = 0; i < slideIns.length; i++) {
    var windowHeight = window.innerHeight;
    var slideInTop = slideIns[i].getBoundingClientRect().top;
    var slideInPoint = 150;

    if (slideInTop < windowHeight - slideInPoint) {
      slideIns[i].classList.add("active");
    } else {
      slideIns[i].classList.remove("active");
    }
  }
}

function slideInRight() {
  var slideInRights = document.querySelectorAll(".slideInRight");

  for (var i = 0; i < slideInRights.length; i++) {
    var windowHeight = window.innerHeight;
    var slideInTop = slideInRights[i].getBoundingClientRect().top;
    var slideInRightPoint = 150;

    if (slideInTop < windowHeight - slideInRightPoint) {
      slideInRights[i].classList.add("active");
    } else {
      slideInRights[i].classList.remove("active");
    }
  }
}

function growUp() {
  var growUps = document.querySelectorAll(".growUp");

  for (var i = 0; i < growUps.length; i++) {
    var windowHeight = window.innerHeight;
    var growUpTop = growUps[i].getBoundingClientRect().top;
    var growUpPoint = 200;

    if (growUpTop < windowHeight - growUpPoint) {
      growUps[i].classList.add("active");
    } else {
      growUps[i].classList.remove("active");
    }
  }
}

function slideUp() {
  var slideUps = document.querySelectorAll(".slideUp");

  for (var i = 0; i < slideUps.length; i++) {
    var windowHeight = window.innerHeight;
    var slideUpTop = slideUps[i].getBoundingClientRect().top;
    var slideUpPoint = 200;

    if (slideUpTop < windowHeight - slideUpPoint) {
      slideUps[i].classList.add("active");
    } else {
      slideUps[i].classList.remove("active");
    }
  }
}

// custom cursor
// let innerCursor = document.querySelector(".inner-cursor");
// let outerCursor = document.querySelector(".outer-cursor");

// document.addEventListener("mousemove", moveCursor);

// function moveCursor(e) {
//   let x = e.clientX;
//   let y = e.clientY;

//   //   console.log(x, y);

//   innerCursor.style.left = `${x}px`;
//   innerCursor.style.top = `${y}px`;
//   outerCursor.style.left = `${x}px`;
//   outerCursor.style.top = `${y}px`;
// }

// let links = Array.from(document.querySelectorAll("a"));
// console.log(links);

// links.forEach((link) => {
//   link.addEventListener("mouseover", () => {
//     innerCursor.classList.add("grow");
//   });
//   link.addEventListener("mouseleave", () => {
//     innerCursor.classList.remove("grow");
//   });
// });
