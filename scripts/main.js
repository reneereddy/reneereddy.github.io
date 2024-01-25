let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/B36F6042-FFCB-46F0-B3CD-B3131185772D.JPG') {
    myImage.setAttribute('src', 'images/DFE769D7-9580-4D54-8E6B-7F14B9ACE4D1.JPG');
  } else if (mySrc === 'images/DFE769D7-9580-4D54-8E6B-7F14B9ACE4D1.JPG') {
    myImage.setAttribute('src', 'images/B36F6042-FFCB-46F0-B3CD-B3131185772D.JPG');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('p');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "Hi, " + myName + "! My name is Renee. I am a data science and economics major with a minor in business " + 
    "analytics. I have a passion for nail art, as you can see in the photo. Some more things I might want to add to the website include:";
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = "Hi, " + storedName + "! My name is Renee. I am a data science and economics major with a minor in business " + 
  "analytics. I have a passion for nail art, as you can see in the photo. Some more things I might want to add to the website include:";
}

myButton.onclick = function() {
  setUserName();
}
