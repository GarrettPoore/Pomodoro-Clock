$(document).ready(function() {
  updateClock();
  setInterval(tickTock, 1000);
  $("#work_length").val(work_time);
  $("#break_length").val(break_time);

  //Start or stop the clock
  $("#clock").click(function() {
    if (running) {
      running = false;
    } else {
      running = true;
    }
  });

  //When the break_length text is changed
  $("#break_length").on("input propertychange paste", function(event) {
    var val = event.target.value;
    if (!running) {
      if (!isNaN(val)) {
        //Is a number
        val = Math.floor(val);
        //Validation between 1 and 999
        if (val === 0) {
          val = 1;
        } else if (val/1000 > 1) {
          val = break_time;
          alert("Please enter a number between 1 and 999");
        }
        updateBreakTime(val);
      }
    }
    $("#break_length").val(break_time);
  });

  //When the work_length text is changed
  $("#work_length").on("input propertychange paste", function(event) {
    var val = event.target.value;
    if (!running) {
      if (!isNaN(val)) {
        //Is a number
        val = Math.floor(val);
        //Validation between 1 and 999
        if (val === 0) {
          val = 1;
        } else if (val/1000 > 1) {
          val = work_time;
          alert("Please enter a number between 1 and 999");
        }
        updateWorkTime(val);
      }
    }
    $("#work_length").val(work_time);
  });

  //Click either increase button
  $(".increase_time").click(function(event) {
    var val = event.target.value;
    if (!running) {
      if (val == "work") {
        updateWorkTime(work_time + 1);
        $("#work_length").val(work_time);
      } else {
        updateBreakTime(break_time + 1);
        $("#break_length").val(break_time);
      }
    }
  });

  //Click either decrease button
  $(".decrease_time").click(function(event) {
    var val = event.target.value;
    if (!running) {
      if (val == "work") {
        if (work_time > 1) {
          updateWorkTime(work_time - 1);
          $("#work_length").val(work_time);
        }
      } else {
        if (break_time > 1) {
          updateBreakTime(break_time - 1);
          $("#break_length").val(break_time);
        }
      }
    }
  });
});
