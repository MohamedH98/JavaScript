let input = parseInt(prompt("Give a number: "));
while (!input) {
    input = parseInt(prompt("Enter a valid number"));
}
const rand = Math.floor(Math.random() * input) + 1;


let guess = parseInt(prompt("Enter guess: "));
while (!guess) {
    guess = parseInt(prompt("Enter a valid guess"));
}
let attempts = 1;

while (parseInt(guess) !== rand) {
    if (guess === "q") break;
    attempts++;
    if (guess < rand) {
        guess = prompt("Too low, guess again: ");
    }
    else {
        guess = prompt("Too high, guess again: ");
    }
}

if (guess === "q") {
    alert("Quit game");
} else {
    alert(`Well done, it took you ${attempts} tries`)
}





