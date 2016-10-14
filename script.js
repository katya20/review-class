console.log("What now?")

$("#pusheen").click(doSomething)

function doSomething() {
  console.log("clicked");
  $("#pusheen").rotate(45);
}