function myFunction() {
  var x = document.querySelector(".list-non-bullets .nav-pills");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let hamNav = document.querySelector(".navIcon");

hamNav.addEventListener("click", myFunction)