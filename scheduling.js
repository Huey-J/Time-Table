var schedules = []; //빈 스케줄 배열 선언

function saveValue() {    //스케줄 저장
  var sname = document.getElementById("inputText").value;
  var sday = document.getElementById("inputDay").value;
  var stime1 = document.getElementById("inputStartTime").value;
  var stime2 = document.getElementById("inputEndTime").value;
  var smemo = document.getElementById("inputMemo").value;

  var stimediff = timeCalculation();    //시간 차이 계산
  printingSchedule(sname, sday, stime1, stime2, smemo, stimediff);
  if(sname == '') {   //내용을 입력하지 않았을 때 경고문
    alert("내용을 입력하세요");
    return;
  }

  schedules.push({name : sname, day : sday, time1 : stime1, time2 : stime2, memo : smemo, timediff : stimediff}); //배열 푸시

  // for(var key in schedules) {
  //   console.log(schedules);
  //   document.write(schedules[key].name);
  //   document.write(schedules[key].day);
  //   document.write(schedules[key].time1);
  //   document.write(schedules[key].time2);
  //   document.write(schedules[key].memo);
  //   document.write(schedules[key].timediff);
  // }
  console.log(schedules);
}

function timeCalculation() {    //시간 차이를 초로 계산해서 반환
  var a = document.getElementById("inputStartTime").value;
  var b = document.getElementById("inputEndTime").value;
  var diff = 0;

  a = convertToSeconds(a);
  b = convertToSeconds(b);
  diff = Math.abs(a-b);

  // document.write('time diff is : ' + secondsTohhmmss(diff));

  return(diff);
}
function convertToSeconds(time) {   //초로 바꾸기
  var splitTime = time.split(":");
  return splitTime[0] * 3600 + splitTime[1] * 60;
}
// function secondsTohhmmss(secs) {
//   var hours = parseInt(secs / 3600);
//   var seconds = parseInt(secs % 3600);
//   var minutes = parseInt(seconds / 60) ;
//   return hours + "hours : " + minutes + "minutes ";
// }


function printingSchedule(sname, sday, stime1, stime2, smemo, stimediff) {


  var div = document.createElement("div");
  div.style.background = "red";
  div.style.height = "75px";
  div.style.position = "relative";
  div.style.top = "30px";
  div.innerHTML = sname;

  if(sday == "월") {
    document.getElementById("mondayGrid").appendChild(div);
  }
  else if(sday == "화") {
    document.getElementById("tuesdayGrid").appendChild(div);
  }
  else if(sday == "수") {
    document.getElementById("wednesdayGrid").appendChild(div);
  }
  else if(sday == "목") {
    document.getElementById("thursdayGrid").appendChild(div);
  }
  else if(sday == "금") {
    document.getElementById("fridayGrid").appendChild(div);
  }
  else if(sday == "토") {
    document.getElementById("saturdayGrid").appendChild(div);
  }
  else if(sday == "일") {
    document.getElementById("sundayGrid").appendChild(div);
  }
}
