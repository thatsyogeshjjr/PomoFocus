timer = document.getElementById("timer");
start_btn = document.getElementById("start-btn");
timer_text = timer.innerHTML.split(":");

//  These variables are to be loaded from user settings file
focusTime = 25; // orig val = 25
shortBreakTime = 5; // orid val = 5
longBreakTime = 15; // orig val = 15

// end user-variables

// debuggin variables - start
count_focus = 0;
count_longbreak = 0;
count_shortbreak = 0;
// debuggin variables - end

let setIntervalFunction;
starting_min = focusTime;
starting_sec = 00;
isBreak = false;

function check_timer_text() {
  timer_text = timer.innerHTML.split(":");
  starting_min = parseInt(timer_text[0]);
  starting_sec = parseInt(timer_text[1]);
  console.log(starting_min + ":" + starting_sec);
}

workCount = 0;

function startTimer() {
  check_timer_text();
  minute = starting_min;
  second = starting_sec;
  workCount = 1;

  // minute = starting_min - 1;

  let timerFunction = () => {
    timer.innerHTML = ("0" + minute).slice(-2) + ":" + ("0" + second).slice(-2);
    /* second -= 1;if (second === 0) {minute -= 1;if (minute === -1) {if (workCount % 4 == 0) {longBreak();} else {shortBreak();}}second = 59;}*/
    second--;
    if (second <= 0) {
      second = 59;
      minute -= 1;
      if (minute <= -1) {
        if (!isBreak) {
          if (workCount != 0 && workCount % 4 == 0) {
            // long break
            count_longbreak += 1;
            document.getElementById("debug-text").innerHTML = "long break";
            isBreak = true;
            minute = longBreakTime;
            second = 0;
          } else {
            // short break
            count_shortbreak += 1;
            document.getElementById("debug-text").innerHTML = "short break";
            isBreak = true;
            minute = shortBreakTime;
            second = 0;
          }
        } else {
          count_focus += 1;
          document.getElementById("debug-text").innerHTML = "focus time";
          isBreak = false;
          workCount += 1;
          minute = focusTime;
          second = 0;
        }
      }
    }
    // change timer
  };
  setIntervalFunction = setInterval(timerFunction, 1000);
}

function stopTimer() {
  check_timer_text();
  clearInterval(setIntervalFunction);
}

start_btn.addEventListener("click", () => {
  if (start_btn.innerHTML == "Start") {
    // Starting the Timer
    start_btn.innerHTML = "Pause";
    check_timer_text();
    startTimer();
  } else {
    // Pausing the Timer
    start_btn.innerHTML = "Start";
    check_timer_text();
    stopTimer();
  }
});
