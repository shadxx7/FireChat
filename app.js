var signInButton = document.getElementById('signin');

console.log(signInButton);

console.log(signInButton.id);

function buttonClicked() {
  console.log("Button Clicked");
  alert("Button clicked!");
}
function click(elementId, fn) {
  var element = document.getElementById(elementId);

  if (element) {
    element.addEventListener("click", fn);
  }
}

click("signin",function() {
  window.location = "chat.html";
});
