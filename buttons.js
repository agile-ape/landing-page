// on-off switch and how it is linked to on-off signal
var switchBorder = document.querySelector('.switch-border');
var checkBox = document.querySelector('#checkBox');
var onOffSignal = document.querySelector('.on-off-signal');
var gameScreen = document.querySelector('.game-screen');

// start button and controller
var startBtn = document.querySelector('#startBtn');
var gameBoy = document.querySelector('.game-boy');
var startWord = document.querySelector('.start-word');

var startSound = document.querySelector("#startSound");

var topBtn = document.querySelector('#top-btn');
var bottomBtn = document.querySelector('#bottom-btn');
var middleBtn = document.querySelector('#middle-btn');
var leftBtn = document.querySelector('#left-btn');
var rightBtn = document.querySelector('#right-btn');

var prompt = document.querySelector('.prompt');
var tweetBtn = document.querySelector('#tweet-button');
var docsBtn = document.querySelector('#docs-button');

function visibleScreen() {
  gameScreen.style.visibility = 'visible';
}

function hiddenScreen() {
  gameScreen.style.visibility = 'hidden';
}

/* if want to set on-off toggle to 0 */
function starting() {
  checkBox.checked = false;
  checkBoxStyle();
}

topBtn.addEventListener('mouseover', function () {
  prompt.textContent = "scroll up";
})

bottomBtn.addEventListener('mouseover', function () {
  prompt.textContent = "scroll down";
})

middleBtn.addEventListener('mouseover', function () {
  prompt.textContent = "chat with us";
})

tweetBtn.addEventListener('mouseover', function () {
  prompt.textContent = "follow us";
})

docsBtn.addEventListener('mouseover', function () {
  prompt.textContent = "find out more";
})

leftBtn.addEventListener('mouseover', function () {
  prompt.textContent = "coming soon";
})

rightBtn.addEventListener('mouseover', function () {
  prompt.textContent = "coming soon";
})

topBtn.addEventListener('mouseout', function () {
  prompt.textContent = "game on";
})

bottomBtn.addEventListener('mouseout', function () {
  prompt.textContent = "game on";
})

middleBtn.addEventListener('mouseout', function () {
  prompt.textContent = "game on";
})

tweetBtn.addEventListener('mouseout', function () {
  prompt.textContent = "game on";
})

docsBtn.addEventListener('mouseout', function () {
  prompt.textContent = "game on";
})

leftBtn.addEventListener('mouseout', function () {
  prompt.textContent = "game on";
})

rightBtn.addEventListener('mouseout', function () {
  prompt.textContent = "game on";
})

topBtn.addEventListener('click', function () {
  window.gameScreen.scrollTop = 0;
})

bottomBtn.addEventListener('click', function () {
  window.gameScreen.scrollTop = gameScreen.scrollHeight;
})

function checkBoxStyle() {
  if(checkBox.checked == true) {
      onOffSignal.style.setProperty('background-color', '#ff0000');
      startWord.style.color = "#f0ece5";
      setTimeout(visibleScreen, 300);
      startBtn.disabled = false;
      window.gameScreen.scrollTo(0,0);
      switchBorder.classList.remove('flashing');
      startSound.play();
    } else {
      onOffSignal.style.setProperty('background-color', '#702323');
      startWord.style.color = "black";
      startWord.textContent = "start";
      setTimeout(hiddenScreen, 300);
      gameBoy.style.display = 'none';
      startBtn.disabled = true;
      startBtn.checked = false;
      switchBorder.classList.add('flashing');
      startSound.pause();
      startSound.currentTime = 0;
  }
}

checkBox.addEventListener('change', checkBoxStyle)

startBtn.addEventListener('change', function () {
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

var postCredit = document.querySelector('.post-credits');

window.gameScreen.addEventListener("scroll", function() {
  if(postCredit.getBoundingClientRect().bottom < 2500) {
    startWord.classList.add('flashing');
  } else {
    startWord.classList.remove('flashing');
  }
})
