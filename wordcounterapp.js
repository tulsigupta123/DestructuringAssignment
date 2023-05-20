let inputText = document.getElementById("inputText");
let wordCount = document.getElementById("word");
let charCount = document.getElementById("character");

inputText.addEventListener("input", inputHere);
function inputHere(){
    // Length of inputText's value will become total characters-
    let dataToDisplay = inputText.value.length;
    charCount.innerHTML = dataToDisplay;

    // After " " it will count a word and split() will break into an array and we will count it's length-
    let arrayOfWords = inputText.value.split(" "); 

    // To avoid spaces between words, we will filter this array-
    let finalArray = arrayOfWords.filter(function(elements){
        return elements != 0;
    });
    wordCount.innerHTML = finalArray.length;
}