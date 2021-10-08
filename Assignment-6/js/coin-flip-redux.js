var coinFlip;

for (var i = 0; i < 10 ; i++){
    coinFlip = Math.round((Math.random()));
    (coinFlip == 0) ? window.document.write("Heads"+"<br>") : window.document.write("Tails"+"<br>");
}