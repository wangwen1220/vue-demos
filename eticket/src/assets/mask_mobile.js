try{

var canvas, ctx;
var x1, y1, a = 10, timeout, totimes = 100, distance = 5;
var saveDot = [];
var end = false;
var sendNumber = 0;

function init(id){
  canvas=null;
  ctx=null;
  x1=0;
  y1=0;
  a = 10;
  timeout=null;
  totimes = 100; 
  distance = 5;
  saveDot = [];
  end = false;
  sendNumber = 0;
  canvas = document.getElementById(id);
  /*canvas.style.width = document.body.offsetHeight*0.640625+'px';
  canvas.style.height = document.body.offsetHeight*0.1179577464788732+'px';
  canvas.style.marginLeft = (document.body.offsetHeight*0.640625)/2 +'px';*/
  var bodyWidth = $('body').width()>640?640:$('body').width();
  $(canvas).attr('width',Math.round(bodyWidth*0.44375)+'px');
  $(canvas).attr('height',Math.round(bodyWidth*0.0625)+'px');
  ctx = canvas.getContext("2d");
  tapClip();
}

function textBG(){
  var w = Math.ceil(canvas.width/40)+2;
  var h = Math.ceil(canvas.height/40)+2;
  for(var i=-2;i<w;i++){
    for(var j=-2;j<h;j++){
      ctx.fillStyle = "#c4c4c4";
      ctx.font="26px Arial";
      ctx.textBaseline = 'top'; 
      ctx.save();
      ctx.translate(canvas.width/2,canvas.height/2);
      ctx.rotate(-Math.PI/6);
      ctx.translate(-canvas.width/2,-canvas.height/2);
      ctx.fillText("奖",i*40,j*40);
      ctx.restore();
    }
  }
}
  

  function getClipArea(e, hastouch){
    var x = hastouch ? e.targetTouches[0].pageX : e.clientX;
    var y = hastouch ? e.targetTouches[0].pageY : e.clientY;
    var ndom = canvas;
    
    x = x - canvas.getBoundingClientRect().left ; 
    y = y - canvas.getBoundingClientRect().top ; 
    //document.documentElement.clientTop;  // 非IE为0，IE为2   兼容IE
    //document.documentElement.clientLeft; // 非IE为0，IE为2
    if(document.documentElement){
      x -=  document.documentElement.clientTop;
      y -=  document.documentElement.clientLeft;
    }

    x -= $(document.body).scrollLeft();
    y -= $(document.body).scrollTop();
    
    return {
      x: x,
      y: y
    }
  }

  //通过修改globalCompositeOperation来达到擦除的效果
  function tapClip() {
    var hastouch = "ontouchstart" in window ? true : false,
      tapstart = hastouch ? "touchstart" : "mousedown",
      tapmove = hastouch ? "touchmove" : "mousemove",
      tapend = hastouch ? "touchend" : "mouseup";

    var area;
    var x2,y2;

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = a * 2;
    //ctx.globalCompositeOperation = "destination-out";
    ctx.globalCompositeOperation = "destination-over";

    canvas.removeEventListener(tapstart, start);
    canvas.addEventListener(tapstart, start);

    function start(e){
      clearTimeout(timeout);
      e.preventDefault();

      area = getClipArea(e, hastouch);

      x1 = area.x;
      y1 = area.y;

      drawLine(x1, y1);

      canvas.removeEventListener(tapmove, tapmoveHandler);
      canvas.addEventListener(tapmove, tapmoveHandler);

      canvas.removeEventListener(tapend, removeTapHandler);
      canvas.addEventListener(tapend,removeTapHandler);

      function removeTapHandler() {
        canvas.removeEventListener(tapmove, tapmoveHandler);
      }

      function tapmoveHandler(e) {
        clearTimeout(timeout);
        e.preventDefault();

        area = getClipArea(e, hastouch);
        x2 = area.x;
        y2 = area.y;
        drawLine(x1, y1, x2, y2);

        x1 = x2;
        y1 = y2;
      }
    }
  }

  function drawLine(x1, y1, x2, y2){
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#b2b2b2';
    ctx.strokeStyle="#b2b2b2";
    if(arguments.length==2){
      ctx.arc(x1, y1, a, 0, 2 * Math.PI);
      ctx.fill();
    }else {
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    ctx.restore();
  }
}catch(e){
       fnMSG && fnMSG(e);
}