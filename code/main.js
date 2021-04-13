/*COMPLETE VARIABLE AND FUNCTION DEFINITIONS*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/*Create variables for text strings to be used as inputs for the program*/

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

let insertY = ["the soup kitchen", "Disneyland", "the White House"];

let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

/*EVENT LISTENER AND PARTIAL FUNCTION DEFINITION*/

randomize.addEventListener('click', result);

function result() {

/*Create a new variable called newStory, and set its value to equal storyText.*/

let newStory = storyText;

/*Create three new variables called xItem, yItem, and zItem, and make them equal to the result of calling randomValueFromArray() on your three arrays*/

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

  if(customName.value !== '') {
    let name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}

