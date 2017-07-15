var work_time = 25;
var break_time = 5;
var running = false;
var mode = "work"; //work or break

var time = work_time * 60;

function startClock() {
  running = true;
}

function stopClock() {
  running = false;
}

function updateWorkTime(num) {
  work_time = num;
  if (mode == "work") {
    updateTime(work_time * 60);
  }
}

function updateBreakTime(num) {
  break_time = num;
  if (mode == "break") {
    updateTime(break_time * 60);
  }
}

function updateTime(num) {
  time = num;
  updateClock();
}

//Either tick down the clock or switch it to the alternative
function tickTock() {
  if (running) {
    if (time > 0) {
      time -= 1;
      updateClock();
    } else if (mode == "work") {
      mode = "break";
      time = break_time * 60;
      updateClock();
    } else {
      mode = "work";
      time = work_time * 60;
      updateClock();
    }
  }
}

function updateClock() {
  $("#clock").text(getFormattedTime());
}

//Take the current time and format it as hh:mm:ss
function getFormattedTime() {
  var workingTime = time;

  var hours = "";
  if (workingTime >= 3600) {
    hours = makeTwoDigits(Math.floor(time/3600));
    hours = hours + ":";
    workingTime = time % 3600;
  }

  var mins = makeTwoDigits(Math.floor(workingTime/60));
  var secs = makeTwoDigits(workingTime % 60);
  return hours + mins + ":" + secs;
}

//Take a number and make sure it is 2 digits long
function makeTwoDigits(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}
