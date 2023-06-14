console.log('ready3');



// on-off switch and how it is linked to on-off signal
var switchBorder = document.querySelector('.switch-border');
var checkBox = document.querySelector('#checkBox');
var onOffSignal = document.querySelector('.on-off-signal');
var gameScreen = document.querySelector('.game-screen');

// start button and controller
var startBtn = document.querySelector('#startBtn');
var gameBoy = document.querySelector('.game-boy');
var startWord = document.querySelector('.start-word');

function visibleScreen() {
  gameScreen.style.visibility = 'visible';
}

function hiddenScreen() {
  gameScreen.style.visibility = 'hidden';
}


/* if want to set on-off toggle to 0 */
function starting() {
  checkBox.checked = true;
  checkBoxStyle();
}



function checkBoxStyle() {
  if(checkBox.checked == true) {
      onOffSignal.style.setProperty('background-color', '#ff0000');
      startWord.style.color = "#f0ece5";
      setTimeout(visibleScreen, 300);
      startBtn.disabled = false;
      window.gameScreen.scrollTo(0,0);
      switchBorder.classList.remove('flashing');
    } else {
      onOffSignal.style.setProperty('background-color', '#702323');
      startWord.style.color = "black";
      startWord.textContent = "start";
      setTimeout(hiddenScreen, 300);
      gameBoy.style.display = 'none';
      startBtn.disabled = true;
      startBtn.checked = false;
      switchBorder.classList.add('flashing');
  }
}

checkBox.addEventListener('change', checkBoxStyle)


startBtn.addEventListener('change', function () {
  console.log('its on');
  // if checkBox is off (unchecked), startBtn shouldn't work
  // == 'false' && checkBox.checked == 'true'
  if(this.checked == true && checkBox.checked == true) {
      gameBoy.style.display="inline-block";
      startWord.style.backgroundColor="rgb(88, 88, 88)";
      startWord.textContent="close";
    } else {
      gameBoy.style.display="none";
      startWord.style.backgroundColor="#5d5b7e";
      startWord.textContent="start"
    }
  })




// function simulateScrollUp() {
//   var event = new KeyboardEvent('keydown', {
//     deltaY: -100, // Adjust this value as per your scrolling requirements
//     bubbles: true,
//     cancelable: true
//   });

//   window.gameScreen.dispatchEvent(event);
// }


var postCredit = document.querySelector('.post-credits');

window.gameScreen.addEventListener("scroll", function() {
  if(postCredit.getBoundingClientRect().bottom < 2500) {
    startWord.classList.add('flashing');
  } else {
    startWord.classList.remove('flashing');
  }
})




// var heroSection = document.querySelector('.hero-section');
// var scrollUp = document.querySelector('#scrollUp');
// var scrollDown = document.querySelector('#scrollDown');

// window.gameScreen.addEventListener("scroll", function() {
//   if(heroSection.getBoundingClientRect().top < 100) {
//     scrollUp.style.display="block";
//   } else {
//     scrollUp.style.display="none";
//   }
// })

// window.gameScreen.addEventListener("scroll", function() {
//   if(postCredit.getBoundingClientRect().bottom < 1500) {
//     scrollDown.style.display="none";
//   } else {
//     scrollDown.style.display="block";
//   }
// })


// Add an event listener to the button
// scrollUp.addEventListener('click', () => {
//   simulateScrollUp();
//   console.log('its working');
// });
