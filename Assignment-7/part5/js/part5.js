function displayMessage() {
    window.alert("I have been clicked.");
}

// Element Property
window.onload = function () {
    var myElement = document.getElementById("button1")
        myElement.onclick = function () {
        window.alert("I have been clicked.");
    }
}

// User Defined
function btnOnClick() {
    window.alert("I have been clicked.")
}
window.addEventListener("load", function(){
    var myOtherButton = window.document.getElementById("button2")
    myOtherButton.addEventListener("click", btnOnClick);
});

// Call-Back Function
window.addEventListener("load", function(){
    var myOtherButton2 = window.document.getElementById("button3")
        myOtherButton2.addEventListener("click", function() {
        window.alert("I have been clicked.")
    });


})