function myFunction() {
    var x = document.getElementById("small_nav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }