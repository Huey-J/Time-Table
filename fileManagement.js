function download() {     //파일 로컬에 저장
  var filename = "timeTable";
  var text = "";
  var element = document.createElement('a');

  for(var i=0; i<schedules.length; i++) {
    if(schedules[i].day != "") {
      text += (schedules[i].name + "/@/");
      text += (schedules[i].day + "/@/");
      text += (schedules[i].time1 + "/@/");
      text += (schedules[i].time2 + "/@/");
      text += (schedules[i].memo + "/@/");
      text += (schedules[i].timediff + "/@/");
      text += "*@*";
    }
  }

  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
}

function upload() {     //파일 로컬에서 불러오기
  var input = document.createElement("input");

  input.type = "file";
  input.accept = "text/plain";    //txt파일만 읽어올 수 있음

  input.onchange = function (event) {
    processFile(event.target.files[0]);
  };

  input.click();
}

function processFile(file) {
  var reader = new FileReader();
  var readedText = "";

  schedules = [];   //기존 스케줄 배열 초기화


  reader.onload = function () {
    // output.innerText = reader.result;
    readedText = reader.result;

    var split = readedText.split('*@*');

    for(var i in split) {
      var innerData = split[i].split('/@/');
      schedules.push({name : innerData[0], day : innerData[1], time1 : innerData[2], time2 : innerData[3], memo : innerData[4], timediff : innerData[5]}); //배열 푸시
      printingSchedule(schedules[i].name, schedules[i].day, schedules[i].time1, schedules[i].memo, schedules[i].timediff)
    }
  };

  reader.readAsText(file, "utf-8");   /*
                                      *utf-8로 읽어온다.
                                      *<meta charset="utf-8">로 설정했기 때문에
                                      *저장되는 txt파일도 utf-8로 저장된다.
                                      */
}
