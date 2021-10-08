var coinFlip = Math.ceil((Math.random() * 100));

var choice = window.prompt("Select 'Heads' or 'Tails'");

var result = "";
if (coinFlip > 50 ){
    result = "Heads";
}
else {
    result = "Tails";
}

if (result == "Heads" && choice == "Heads" ){
    alert("The flip was heads and you chose heads...you win!");
}
if ( result == "Heads" && choice == "Tails"){
    alert("The flip was heads but you chose tails...you lose!");
}
if ( result == "Tails" && choice == "Heads"){
    alert("The flip was tails but you chose heads...you lose!");
}
if ( result == "Tails" && choice == "Tails"){
    alert("The flip was tails and you chose tails...you win!");
}

(coinFlip > 50) ? result = true : result = false;

if(result && (choice == "Heads")) {
    alert("The flip was heads and you chose heads...you win!");
}

else if(result && (choice == "Tails")) {
    alert("The flip was heads but you chose tails...you lose!");
}

else if(!result && (choice == "Heads")) {
    alert("The flip was tails but you chose heads...you lose!");
}

else if(!result && (choice == "Tails")) {
    alert("The flip was tails and you chose tails...you win!");
}

