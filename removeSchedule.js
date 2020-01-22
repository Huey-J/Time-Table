function deleteS(temp) {    //스케줄 삭제
  var tag = document.getElementById(temp);
  var parent = tag.parentNode;

  // parent.removeChild(tag);    //태그 삭제
  tag.style.visibility="hidden";    //태그 안보이게
  var num = parseInt(temp[4]);
  var day = schedules[num].day;
  //
  // if(day == "월") {
  //   console.log("delete monday schedule");
  //   mon_cnt -= schedules[num].timediff/109;
  // }
  // else if(day == "화") {
  //   console.log("delete tuesday schedule");
  //   tue_cnt -= schedules[num].timediff/109;
  // }
  // else if(day == "수") {
  //   console.log("delete wednesday schedule");
  //   wed_cnt -= schedules[num].timediff/109;
  // }
  // else if(day == "목") {
  //   console.log("delete thursday schedule");
  //   thu_cnt -= schedules[num].timediff/109;
  // }
  // else if(day == "금") {
  //   console.log("delete friday schedule");
  //   fri_cnt -= schedules[num].timediff/109;
  // }
  // else if(day == "토") {
  //   console.log("delete saturday schedule");
  //   sat_cnt -= schedules[num].timediff/109;
  // }
  // else if(day == "일") {
  //   console.log("delete sunday schedule");
  //   sun_cnt -= schedules[num].timediff/109;
  // }
  schedules[num].day = "";
}
