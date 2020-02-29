var x = document.querySelector("#hide");
var show = document.querySelector(".show");
x.style.display = 'none';
function myFunction() {
    if (x.style.display !== "none") {
      x.style.display = "none";
      show.innerHTML = "show more";
      
    } else {
      x.style.display = "block";
      show.innerHTML = "show less";
    }
  }
