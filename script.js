let wordCounter = 0;
let currentWord = "";
//Generates a random word
function chooseWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex]; // Assign the random word to the global variable
    const displayWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1).toLowerCase();

    document.getElementById("word-display").innerText = displayWord;
    wordCounter++;
    console.log(wordCounter, displayWord);
    return currentWord;
}



function define(){
    if(currentWord === "" || currentWord === undefined){
        document.getElementById("definition-display").innerText = "N/A";
    }else{
        document.getElementById("definition-display").innerText = currentWord + ": Definition";
    }
}