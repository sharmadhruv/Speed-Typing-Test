window.addEventListener('load', init);

//available levels
const levels= {
	easy : 5,
	medium : 3,
	hard : 2
};
//to change levels
const currentLevel = levels.medium;
//globals
let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
'attach',
'belong',
'pale',
'thank',
'want',
'pricey',
'exchange',
'breathe',
'muscle',
'abandoned',
'sheet',
'plant',
'youthful',
'attach',
'deep',
'range',
'obsequious',
'functional',
'sense',
'recondite',
'well-made',
'idea',
'alarm',
'panoramic',
'space',
'partner',
'soap',
'swift',
'smoke',
'ashamed',
'truculent',
'gabby',
'standing',
'plan',
'kittens',
'surprise',
'show',
'utter',
'bubble',
'educate',
'spade',
'tail',
'ghost',
'toy',
'intelligent',
'undesirable',
'woebegone',
'smile',
'brash',
'notebook',
'upbeat',
'moaning',
'bed',
'vest'
];
//initialize game
function init() {
	//show number of seconds in ui
	seconds.innerHTML = currentLevel;
	//load word from the array
	showWord(words);
	//start matching from the array
	wordInput.addEventListener('input',startMatch);
	//call countdown every second
	setInterval(countdown, 1000);
	//game status
	setInterval(checkStatus,50);

}

//pck random word and show it
 function showWord(words){
 	//generate random array index
 	const randIndex = Math.floor(Math.random() * words.length);
 	//output the generated word
 	currentWord.innerHTML = words[randIndex];
 }
 //starts matching
 function startMatch(){
 	if(matchWords()){
 		isPlaying = true;
 		time = currentLevel + 1;
 		showWord(words);
 		wordInput.value='';
 		score++; 		
 	}
 	//if the score is -1 display 0
 	if(score===-1){
 		scoreDisplay.innerHTML=0;

 	}
 	else{
 	scoreDisplay.innerHTML=score;
 }
 }
//matches current word to the word input
function matchWords(){
	if(wordInput.value === currentWord.innerHTML){
 			message.innerHTML='Correct!! :D';
 			return true;
 		}
 		else {
 			message.innerHTML = '';
 			return false;
 		}

}
 //countdown timer
 function countdown(){
 	//make sure time is not run out
 	if(time > 0){
 		//decrement
 		time--;
 	}
 	else if(time===0){
 		//game over
 		isPlaying = false;
 	}
 	//show time
 	timeDisplay.innerHTML = time;
 }
 //check game status
 function checkStatus(){
 	if(!isPlaying && time===0){
 		message.innerHTML='Game Over!! :(';
 		score=-1;

 	}
 }

