let words = [
    {
        word: "cooking", hint: "The art or practice of preparing food"
    },
    {
        word: "ground", hint: "The solid surface of the earth"
    },
    {
        word: "sunrise", hint: "The ascent of the sun"
    },
    {
        word: "average",  hint: "A quantity that represents the arithmetic mean"
    },
    {
        word: "tumble", hint: "To fall helplessly down"
    },
    {
        word: "garden",  hint: "A plot of ground where flowers and vegetables are cultivated"
    },
    {
        word: "jewel",  hint: "A cut or polished gemstone"
    },
    {
        word: "establish", hint: "To found, institute, or build"
    },
    {
        word: "cucumber", hint: "A cylindrical edible plant"
    },
    {
        word: "sandwich", hint: "Two or more slices of bread with meat, cheese, etc between them"
    }  
]



//global variables pulled from html
const wordVal = document.getElementById("word-val");
const hintVal = document.getElementById("hint-val");
const checkWordBtn = document.getElementById("check-word");
const newWordBtn = document.getElementById("new-word");
const userWord = document.getElementById("userWord");




let correctWord;
let randVal=0;
let randWord="";


const start = () => {
   randVal = Math.floor(Math.random() * words.length);
   //get a random word from the word list and split the word into different letters
    randWord = words[randVal];
    wordArray = randWord.word.split("");

    //mix up the letters of the word using a for loop
    for (let i = 0; i<wordArray.length - 1;  i++) {
       let j = Math.floor(Math.random() * (i + 1));
       [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
   
    //display the word and the hint
    wordVal.innerText = wordArray.join("");
    hintVal.innerText=randWord.hint;
    
}
start();

function checkWord() {

   guessWord = userWord.value.toLowerCase();
   
  correctWord = randWord.word.toLowerCase();
    //Check the word the user entered (guessWord). If it is blank, tell the user to enter a word
    //if the guess word is incorrect, tell the students they did not enter the word correctly
    //if the word is correct, tell the user the word is correct
    if(!guessWord) 
    {
        return alert("Please enter a word.");
    }
    if(guessWord !== correctWord) 
    { 
        return alert(`Sorry! ${guessWord} is not a correct word`);
    }
   
    alert(`Congrats! ${correctWord} is the correct word`);

    
}
function newWord()
{
    //Refresh with new word
    userWord.value="";
    start();
}
function showAnswer()
{
    //Show answer and refresh with new word
    alert("The answer is "+randWord.word+". Try another word.");
    newWord();
}


