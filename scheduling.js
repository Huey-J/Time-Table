var schedules = []; //빈 스케줄 배열 선언
var cnt = 0;
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
    ];  //색 배열
var mon_cnt=0, tue_cnt=0, wed_cnt=0, thu_cnt=0, fri_cnt=0, sat_cnt=0, sun_cnt=0;

function saveValue() {    //스케줄 저장
  var sname = document.getElementById("inputText").value;
  var sday = document.getElementById("inputDay").value;
  var stime1 = document.getElementById("inputStartTime").value;
  var stime2 = document.getElementById("inputEndTime").value;
  var smemo = document.getElementById("inputMemo").value;

  var stimediff = timeCalculation(stime1, stime2);    //시간 차이 계산
  if(sname == '') {
    alert("내용을 입력하세요");
    return;
  }
  if(stime1 == '' || stime2 == '') {
    alert("시간을 입력하세요");
    return;
  }
  if(convertToSeconds(stime1)<21600 || convertToSeconds(stime2)<21600) {
    alert("오전 6시보다 크게 입력하세요");
    return;
  }
  if(convertToSeconds(stime1) > convertToSeconds(stime2)) {
    alert("시작시간이 더 큽니다");
    return;
  }

  printingSchedule(sname, sday, stime1, smemo, stimediff);
  schedules.push({name : sname, day : sday, time1 : stime1, time2 : stime2, memo : smemo, timediff : stimediff}); //배열 푸시

  console.log(schedules);
}

function timeCalculation(time1, time2) {    //시간 차이를 초로 계산해서 반환
  var a = convertToSeconds(time1)
  var b = convertToSeconds(time2)
  var diff = 0;

  diff = Math.abs(a-b);
  return(diff);
}

function convertToSeconds(time) {   //초로 바꾸기
  var splitTime = time.split(":");
  return splitTime[0] * 3600 + splitTime[1] * 60;
}


function printingSchedule(sname, sday, stime1, smemo, stimediff) {      //스케줄 표에 뿌리기
  var div = document.createElement("div");    //<div>만들기
  div.style.background = colorArray[Math.floor(Math.random()*colorArray.length)];   //색 랜덤값
  div.style.opacity = "0.8";                //배경 투명도
  div.style.height = (stimediff/109)+"px";  //시간차이만큼 높이값 조절
  div.style.position = "relative";
  div.style.fontWeight = "bold";  div.style.color = "black";
  div.style.align = "center";
  div.style.fontSize = "16px";

  div.id = "temp"+cnt;     cnt++;             //스케줄 번호 저장 (삭제할 때 사용)

  div.innerHTML = '<div id="delete_btn" onclick="deleteS(this.parentElement.id)">x <span id="deleteTooltip">삭제</span></div><div id="memoView_btn" value="# "># <span id="memoTooltip">'
  + smemo +'</span></div><br>' + sname;

  var sPoint = findStartTimeGrid(stime1);

  if(sday == "월") {
    div.style.top = sPoint + (-mon_cnt) + "px";
    mon_cnt += stimediff/109;
    document.getElementById("mondayGrid").appendChild(div);   //만든 div태그 위치 설정
  }
  else if(sday == "화") {
    div.style.top = sPoint + (-tue_cnt) + "px";
    tue_cnt += stimediff/109;
    document.getElementById("tuesdayGrid").appendChild(div);
  }
  else if(sday == "수") {
    div.style.top = sPoint + (-wed_cnt) + "px";
    wed_cnt += stimediff/109;
    document.getElementById("wednesdayGrid").appendChild(div);
  }
  else if(sday == "목") {
    div.style.top = sPoint + (-thu_cnt) + "px";
    thu_cnt += stimediff/109;
    document.getElementById("thursdayGrid").appendChild(div);
  }
  else if(sday == "금") {
    div.style.top = sPoint + (-fri_cnt) + "px";
    fri_cnt += stimediff/109;
    document.getElementById("fridayGrid").appendChild(div);
  }
  else if(sday == "토") {
    div.style.top = sPoint + (-sat_cnt) + "px";
    sat_cnt += stimediff/109;
    document.getElementById("saturdayGrid").appendChild(div);
  }
  else if(sday == "일") {
    div.style.top = sPoint + (-sun_cnt) + "px";
    sun_cnt += stimediff/109;
    document.getElementById("sundayGrid").appendChild(div);
  }
}

function findStartTimeGrid(time) {
  var a = convertToSeconds(time);
  a -= 21600;   //오전6시 = 21600
  a /= 109;     //위치 계산
  return a;
  console.log(a);
}
