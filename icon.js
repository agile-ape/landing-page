const word1 = document.querySelector('#word1')
const word2 = document.querySelector('#word2')
const word3 = document.querySelector('#word3')
const word4 = document.querySelector('#word4')
const word5 = document.querySelector('#word5')


const icon1 = document.querySelector('#icon1')
const icon2a = document.querySelector('#icon2a')
const icon2b = document.querySelector('#icon2b')
const icon2c = document.querySelector('#icon2c')
const icon2d = document.querySelector('#icon2d')
const icon2e = document.querySelector('#icon2e')
const icon2f = document.querySelector('#icon2f')

const icon3a = document.querySelector('#icon3a')
const icon3b = document.querySelector('#icon3b')
const icon3c = document.querySelector('#icon3c')
const icon3d = document.querySelector('#icon3d')
const icon3e = document.querySelector('#icon3e')
const icon3f = document.querySelector('#icon3f')
const icon3g = document.querySelector('#icon3g')
const icon3h = document.querySelector('#icon3h')
const icon3i = document.querySelector('#icon3i')
const icon3j = document.querySelector('#icon3j')
const icon3k = document.querySelector('#icon3k')
const icon3l = document.querySelector('#icon3l')

const icon4a = document.querySelector('#icon4a')
const icon4b = document.querySelector('#icon4b')
const icon4c = document.querySelector('#icon4c')
const icon4d = document.querySelector('#icon4d')
const icon4e = document.querySelector('#icon4e')
const icon4f = document.querySelector('#icon4f')
const icon4g = document.querySelector('#icon4g')
const icon4h = document.querySelector('#icon4h')
const icon4i = document.querySelector('#icon4i')
const icon4j = document.querySelector('#icon4j')
const icon4k = document.querySelector('#icon4k')
const icon4l = document.querySelector('#icon4l')
const icon4m = document.querySelector('#icon4m')
const icon4n = document.querySelector('#icon4n')
const icon4o = document.querySelector('#icon4o')
const icon4p = document.querySelector('#icon4p')
const icon4q = document.querySelector('#icon4q')
const icon4r = document.querySelector('#icon4r')

const icon5a = document.querySelector('#icon5a')
const icon5b = document.querySelector('#icon5b')
const icon5c = document.querySelector('#icon5c')
const icon5d = document.querySelector('#icon5d')
const icon5e = document.querySelector('#icon5e')
const icon5f = document.querySelector('#icon5f')
const icon5g = document.querySelector('#icon5g')
const icon5h = document.querySelector('#icon5h')
const icon5i = document.querySelector('#icon5i')
const icon5j = document.querySelector('#icon5j')
const icon5k = document.querySelector('#icon5k')
const icon5l = document.querySelector('#icon5l')
const icon5m = document.querySelector('#icon5m')
const icon5n = document.querySelector('#icon5n')
const icon5o = document.querySelector('#icon5o')
const icon5p = document.querySelector('#icon5p')
const icon5q = document.querySelector('#icon5q')
const icon5r = document.querySelector('#icon5r')
const icon5s = document.querySelector('#icon5s')
const icon5t = document.querySelector('#icon5t')
const icon5u = document.querySelector('#icon5u')
const icon5v = document.querySelector('#icon5v')
const icon5w = document.querySelector('#icon5w')
const icon5x = document.querySelector('#icon5x')
const icon5y = document.querySelector('#icon5y')

const introSection = document.querySelector('.intro');
const logoW = document.querySelector('#logo-w-e');
const logo3 = document.querySelector('#logo-3-e');
const logoM = document.querySelector('#logo-m-e');
const logoE = document.querySelector('#logo-e-e');

const viewportHeight = window.gameScreen.innerHeight || document.documentElement.clientHeight;
const viewportCenter = viewportHeight / 2;
const wordDisappear = viewportHeight / 10 * 4;

window.gameScreen.addEventListener("scroll", function() {
  if(introSection.getBoundingClientRect().top < viewportHeight / 2) {
    logoW.style.transform = 'rotate(-90deg)';
    logo3.style.transform = 'rotate(180deg)';
    logoM.style.transform = 'rotate(90deg)';
  } else {
    logoW.style.transform = 'none';
    logo3.style.transform = 'none';
    logoM.style.transform = 'none';
  }
})

// word1
window.gameScreen.addEventListener("scroll", function() {
  if(word1.getBoundingClientRect().top < viewportHeight / 2) {
    word1.classList.add('hidden');
  } else {
    word1.classList.remove('hidden');
  }
})

// icon1

window.gameScreen.addEventListener("scroll", function() {
  if(word1.getBoundingClientRect().top < viewportCenter) {
    icon1.classList.remove('hidden');
    icon1.classList.add('visible');
  } else {
    icon1.classList.remove('visible');
    icon1.classList.add('hidden');
  }
})


// word2
window.gameScreen.addEventListener("scroll", function() {
  if(word2.getBoundingClientRect().top < wordDisappear) {
    word2.classList.add('hidden');
  } else {
    word2.classList.remove('hidden');
  }
})

// icon2
window.gameScreen.addEventListener("scroll", function() {
  if(word2.getBoundingClientRect().top < viewportCenter) {
    icon2a.classList.remove('hidden');
    icon2a.classList.add('visible');
  } else {
    icon2a.classList.remove('visible');
    icon2a.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word2.getBoundingClientRect().top < viewportCenter/6*5) {
    icon2b.classList.remove('hidden');
    icon2b.classList.add('visible');
  } else {
    icon2b.classList.remove('visible');
    icon2b.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word2.getBoundingClientRect().top < viewportCenter/6*4) {
    icon2c.classList.remove('hidden');
    icon2c.classList.add('visible');
  } else {
    icon2c.classList.remove('visible');
    icon2c.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word2.getBoundingClientRect().top < viewportCenter/6*3) {
    icon2d.classList.remove('hidden');
    icon2d.classList.add('visible');
  } else {
    icon2d.classList.remove('visible');
    icon2d.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word2.getBoundingClientRect().top < viewportCenter/6*2) {
    icon2e.classList.remove('hidden');
    icon2e.classList.add('visible');
  } else {
    icon2e.classList.remove('visible');
    icon2e.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word2.getBoundingClientRect().top < viewportCenter/6*1) {
    icon2f.classList.remove('hidden');
    icon2f.classList.add('visible');
  } else {
    icon2f.classList.remove('visible');
    icon2f.classList.add('hidden');
  }
})


// word3
window.gameScreen.addEventListener("scroll", function() {
  if(word3.getBoundingClientRect().top < wordDisappear) {
    word3.classList.add('hidden');
  } else {
    word3.classList.remove('hidden');
  }
})


// icon3
window.gameScreen.addEventListener("scroll", function() {
  if(word3.getBoundingClientRect().top < viewportCenter) {
    icon3a.classList.remove('hidden');
    icon3a.classList.add('visible');
  } else {
    icon3a.classList.remove('visible');
    icon3a.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word3.getBoundingClientRect().top < viewportCenter/12*11) {
    icon3b.classList.remove('hidden');
    icon3b.classList.add('visible');
  } else {
    icon3b.classList.remove('visible');
    icon3b.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word3.getBoundingClientRect().top < viewportCenter/12*10) {
    icon3c.classList.remove('hidden');
    icon3c.classList.add('visible');
  } else {
    icon3c.classList.remove('visible');
    icon3c.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word3.getBoundingClientRect().top < viewportCenter/12*9) {
    icon3d.classList.remove('hidden');
    icon3d.classList.add('visible');
  } else {
    icon3d.classList.remove('visible');
    icon3d.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word3.getBoundingClientRect().top < viewportCenter/12*8) {
    icon3e.classList.remove('hidden');
    icon3e.classList.add('visible');
  } else {
    icon3e.classList.remove('visible');
    icon3e.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word3.getBoundingClientRect().top < viewportCenter/12*7) {
    icon3f.classList.remove('hidden');
    icon3f.classList.add('visible');
  } else {
    icon3f.classList.remove('visible');
    icon3f.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word3.getBoundingClientRect().top < viewportCenter/12*6) {
    icon3g.classList.remove('hidden');
    icon3g.classList.add('visible');
  } else {
    icon3g.classList.remove('visible');
    icon3g.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word3.getBoundingClientRect().top < viewportCenter/12*5) {
    icon3h.classList.remove('hidden');
    icon3h.classList.add('visible');
  } else {
    icon3h.classList.remove('visible');
    icon3h.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word3.getBoundingClientRect().top < viewportCenter/12*4) {
    icon3i.classList.remove('hidden');
    icon3i.classList.add('visible');
  } else {
    icon3i.classList.remove('visible');
    icon3i.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word3.getBoundingClientRect().top < viewportCenter/12*3) {
    icon3j.classList.remove('hidden');
    icon3j.classList.add('visible');
  } else {
    icon3j.classList.remove('visible');
    icon3j.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word3.getBoundingClientRect().top < viewportCenter/12*2) {
    icon3k.classList.remove('hidden');
    icon3k.classList.add('visible');
  } else {
    icon3k.classList.remove('visible');
    icon3k.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word3.getBoundingClientRect().top < viewportCenter/12*1) {
    icon3l.classList.remove('hidden');
    icon3l.classList.add('visible');
  } else {
    icon3l.classList.remove('visible');
    icon3l.classList.add('hidden');
  }
})


// word4
window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < wordDisappear) {
    word4.classList.add('hidden');
  } else {
    word4.classList.remove('hidden');
  }
})

// icon4
window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter) {
    icon4a.classList.remove('hidden');
    icon4a.classList.add('visible');
  } else {
    icon4a.classList.remove('visible');
    icon4a.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*17) {
    icon4b.classList.remove('hidden');
    icon4b.classList.add('visible');
  } else {
    icon4b.classList.remove('visible');
    icon4b.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*16) {
    icon4c.classList.remove('hidden');
    icon4c.classList.add('visible');
  } else {
    icon4c.classList.remove('visible');
    icon4c.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*15) {
    icon4d.classList.remove('hidden');
    icon4d.classList.add('visible');
  } else {
    icon4d.classList.remove('visible');
    icon4d.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*14) {
    icon4e.classList.remove('hidden');
    icon4e.classList.add('visible');
  } else {
    icon4e.classList.remove('visible');
    icon4e.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*13) {
    icon4f.classList.remove('hidden');
    icon4f.classList.add('visible');
  } else {
    icon4f.classList.remove('visible');
    icon4f.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*12) {
    icon4g.classList.remove('hidden');
    icon4g.classList.add('visible');
  } else {
    icon4g.classList.remove('visible');
    icon4g.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*11) {
    icon4h.classList.remove('hidden');
    icon4h.classList.add('visible');
  } else {
    icon4h.classList.remove('visible');
    icon4h.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*10) {
    icon4i.classList.remove('hidden');
    icon4i.classList.add('visible');
  } else {
    icon4i.classList.remove('visible');
    icon4i.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*9) {
    icon4j.classList.remove('hidden');
    icon4j.classList.add('visible');
  } else {
    icon4j.classList.remove('visible');
    icon4j.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*8) {
    icon4k.classList.remove('hidden');
    icon4k.classList.add('visible');
  } else {
    icon4k.classList.remove('visible');
    icon4k.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*7) {
    icon4l.classList.remove('hidden');
    icon4l.classList.add('visible');
  } else {
    icon4l.classList.remove('visible');
    icon4l.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*6) {
    icon4m.classList.remove('hidden');
    icon4m.classList.add('visible');
  } else {
    icon4m.classList.remove('visible');
    icon4m.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*5) {
    icon4n.classList.remove('hidden');
    icon4n.classList.add('visible');
  } else {
    icon4n.classList.remove('visible');
    icon4n.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*4) {
    icon4o.classList.remove('hidden');
    icon4o.classList.add('visible');
  } else {
    icon4o.classList.remove('visible');
    icon4o.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*3) {
    icon4p.classList.remove('hidden');
    icon4p.classList.add('visible');
  } else {
    icon4p.classList.remove('visible');
    icon4p.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*2) {
    icon4q.classList.remove('hidden');
    icon4q.classList.add('visible');
  } else {
    icon4q.classList.remove('visible');
    icon4q.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word4.getBoundingClientRect().top < viewportCenter/18*1) {
    icon4r.classList.remove('hidden');
    icon4r.classList.add('visible');
  } else {
    icon4r.classList.remove('visible');
    icon4r.classList.add('hidden');
  }
})


// word5
window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < wordDisappear) {
    word5.classList.add('hidden');
  } else {
    word5.classList.remove('hidden');
  }
})

// row5
window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter)) {
    icon5a.classList.remove('hidden');
    icon5a.classList.add('visible');
  } else {
    icon5a.classList.remove('visible');
    icon5a.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*24)) {
    icon5b.classList.remove('hidden');
    icon5b.classList.add('visible');
  } else {
    icon5b.classList.remove('visible');
    icon5b.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*23)) {
    icon5c.classList.remove('hidden');
    icon5c.classList.add('visible');
  } else {
    icon5c.classList.remove('visible');
    icon5c.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*22)) {
    icon5d.classList.remove('hidden');
    icon5d.classList.add('visible');
  } else {
    icon5d.classList.remove('visible');
    icon5d.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*21)) {
    icon5e.classList.remove('hidden');
    icon5e.classList.add('visible');
  } else {
    icon5e.classList.remove('visible');
    icon5e.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*20)) {
    icon5f.classList.remove('hidden');
    icon5f.classList.add('visible');
  } else {
    icon5f.classList.remove('visible');
    icon5f.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*19)) {
    icon5g.classList.remove('hidden');
    icon5g.classList.add('visible');
  } else {
    icon5g.classList.remove('visible');
    icon5g.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*18)) {
    icon5h.classList.remove('hidden');
    icon5h.classList.add('visible');
  } else {
    icon5h.classList.remove('visible');
    icon5h.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*17)) {
    icon5i.classList.remove('hidden');
    icon5i.classList.add('visible');
  } else {
    icon5i.classList.remove('visible');
    icon5i.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*16)) {
    icon5j.classList.remove('hidden');
    icon5j.classList.add('visible');
  } else {
    icon5j.classList.remove('visible');
    icon5j.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*15)) {
    icon5k.classList.remove('hidden');
    icon5k.classList.add('visible');
  } else {
    icon5k.classList.remove('visible');
    icon5k.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*14)) {
    icon5l.classList.remove('hidden');
    icon5l.classList.add('visible');
  } else {
    icon5l.classList.remove('visible');
    icon5l.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*13)) {
    icon5m.classList.remove('hidden');
    icon5m.classList.add('visible');
  } else {
    icon5m.classList.remove('visible');
    icon5m.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*12)) {
    icon5n.classList.remove('hidden');
    icon5n.classList.add('visible');
  } else {
    icon5n.classList.remove('visible');
    icon5n.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*11)) {
    icon5o.classList.remove('hidden');
    icon5o.classList.add('visible');
  } else {
    icon5o.classList.remove('visible');
    icon5o.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*10)) {
    icon5p.classList.remove('hidden');
    icon5p.classList.add('visible');
  } else {
    icon5p.classList.remove('visible');
    icon5p.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*9)) {
    icon5q.classList.remove('hidden');
    icon5q.classList.add('visible');
  } else {
    icon5q.classList.remove('visible');
    icon5q.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*8)) {
    icon5r.classList.remove('hidden');
    icon5r.classList.add('visible');
  } else {
    icon5r.classList.remove('visible');
    icon5r.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*7)) {
    icon5s.classList.remove('hidden');
    icon5s.classList.add('visible');
  } else {
    icon5s.classList.remove('visible');
    icon5s.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*6)) {
    icon5t.classList.remove('hidden');
    icon5t.classList.add('visible');
  } else {
    icon5t.classList.remove('visible');
    icon5t.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*5)) {
    icon5u.classList.remove('hidden');
    icon5u.classList.add('visible');
  } else {
    icon5u.classList.remove('visible');
    icon5u.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*4)) {
    icon5v.classList.remove('hidden');
    icon5v.classList.add('visible');
  } else {
    icon5v.classList.remove('visible');
    icon5v.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*3)) {
    icon5w.classList.remove('hidden');
    icon5w.classList.add('visible');
  } else {
    icon5w.classList.remove('visible');
    icon5w.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*2)) {
    icon5x.classList.remove('hidden');
    icon5x.classList.add('visible');
  } else {
    icon5x.classList.remove('visible');
    icon5x.classList.add('hidden');
  }
})

window.gameScreen.addEventListener("scroll", function() {
  if(word5.getBoundingClientRect().top < (viewportCenter/25*1)) {
    icon5y.classList.remove('hidden');
    icon5y.classList.add('visible');
  } else {
    icon5y.classList.remove('visible');
    icon5y.classList.add('hidden');
  }
})
