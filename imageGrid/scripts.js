// Full-width images
function one() {
  var elements = document.getElementsByClassName("column");
  // Declare a "loop" variable
  var i;
  for (i = 0; i < elements.length; i++) {
      elements[i].style.flex = "100%"; 
  }
}

// Two images side by side
function two() {
  var elements = document.getElementsByClassName("column");
  // Declare a "loop" variable
  var i;
  for (i = 0; i < elements.length; i++) {
      elements[i].style.flex = "50%"; 
  }
}

// Four images side by side
function four() {
  var elements = document.getElementsByClassName("column");
  // Declare a "loop" variable
  var i;
  for (i = 0; i < elements.length; i++) {
      elements[i].style.flex = "25%"; 
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}