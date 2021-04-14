/*COMPLETE VARIABLE AND FUNCTION DEFINITIONS*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/*Create variables for text strings to be used as inputs for the program*/

let storyText = "It was 94 fahrenheit outside, so  went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

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

/*Replace the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz: — with the strings stored in xItem, yItem, and zItem.*/

newStory = newStory.replace(":insertx:", xItem);
newStory = newStory.replace(":insertx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace (":insertz:", zItem);




  if(customName.value !== '') {
    let name = customName.value;
    /*Add another string replacement method call to replace the name 'Bob' found in the newStory string with the name variable.*/
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}

