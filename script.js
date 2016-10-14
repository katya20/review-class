var hello = ["Hello there!", "Nice to meet you!", "Hi", "I love you <3", "I am awesome!", "Click me!"]

$(".bubble").hide();
console.log(hello[Math.floor(Math.random() * 5)])

$("#pusheen").click(doSomething)

function doSomething() {
  console.log("clicked");
  $(".bubble").show();
}

