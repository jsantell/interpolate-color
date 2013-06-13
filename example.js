var interpolate = require('interpolate-color');
var body = document.getElementsByTagName('body')[0];
var progressText = document.getElementById('progress-text');
var progressBlock = document.getElementById('mover');

var colorA = {
  block: document.getElementById('from-block'),
  text: document.getElementById('from-text')
};

var colorB = {
  block: document.getElementById('to-block'),
  text: document.getElementById('to-text')
};

resetColor(colorA);
resetColor(colorB);

var percent = 0;
setInterval(function () {
  var color = interpolate(colorA.color, colorB.color, percent++/100);
  body.style.backgroundColor = color;
  progressText.innerHTML = color;
  progressBlock.style.left = percent + '%';

  if (percent <= 100) return;
  resetColor(colorA);
  resetColor(colorB);
  percent = 0;
}, 100);


function resetColor (colorObj) {
  colorObj.color = randomColor();
  colorObj.block.style.backgroundColor = colorObj.color;
  colorObj.text.innerHTML = colorObj.color;
}

function randomColor () {
  var
    h = Math.random() * 360,
    s = Math.random() * 100,
    l = Math.random() * 100;
  return 'hsl(' + ~~h + ', ' + ~~s + '%, ' + ~~l + '%)';
}
