function showFile(x) {
  var filex = x;
    document.getElementById('yameteIndrico').style.backgroundColor = 'rgba(0,0,0,0.7)';
    document.getElementById('yameteIndrico').style.zIndex = '3';
    document.getElementById('fileCross').style.zIndex = '3';
    document.getElementById(x).style.zIndex = '4';
    document.getElementById(x).style.display = 'block';
    document.getElementById('fileCross').style.display = 'block';
    document.getElementById('fileCross').onclick = function closeFile(x){
        document.getElementById('yameteIndrico').style.backgroundColor = 'rgba(0,0,0,0)';
        document.getElementById('yameteIndrico').style.zIndex = '-1';
        document.getElementById('fileCross').style.zIndex = '-1';
        document.getElementById('fileCross').style.display = 'none';
        document.getElementById(filex).style.display = 'none';
    };
}

function play(x) {
    document.getElementById('musicName').innerHTML = x.slice(6);
    ;
    document.getElementById('audio').setAttribute("src", x)
    var audio = document.getElementById("audio");
    document.getElementById('musicP').style.display = 'block';

    document.getElementById('playBut').onclick = function playM(x){
      audio.play();
    }
    document.getElementById('pauseBut').onclick = function pauseM(x){
      audio.pause();
    }
    document.getElementById('closeBut').onclick = function stopM(x){
      document.getElementById('musicP').style.display = 'none';
      audio.pause();
      audio.currentTime= 0;
    }
}

dragElement(document.getElementById("musicP"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}