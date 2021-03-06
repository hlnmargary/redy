function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date("May 27,2019 10:00:00")));
initializeClock('clockdiv', deadline);

import Rellax from "rellax";

var rellax = new Rellax('.rellax', {
  center: false,
});

/* Transition */
// TODO: Uncomment at the end

/* let linkConcept = document.querySelector('.menu__link--concept');
let transitionIndex = document.querySelector('.bloc__transition');

linkConcept.addEventListener( 'click', () => {
  transitionIndex.classList.add( 'is-visible' );
  transitionIndex.style.zIndex = '666';
  setTimeout( () => {
    location.href = `/pages/info.html`;
  }, 1000);
} ); */



