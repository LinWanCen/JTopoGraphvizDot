// https://github.com/darknessjs/jtopo-unit/blob/master/jTOPO%20%E6%8D%A2%E8%A1%8Cdemo.html
CanvasRenderingContext2D.prototype.wrapText = function (str, x, y) {
  var textArray = str.split('\n');
  if (textArray == undefined || textArray == null) return false;

  maxText = textArray[0];
  var maxLength = 0;
  for (var i = 0; i < textArray.length; i++) {
    var nowText = textArray[i], textLength = nowText.length;
    if (textLength >= maxLength) {
      maxLength = textLength;
      maxText = nowText;
    }
  }
  var maxWidth = this.measureText(maxText).width;
  var lineHeight = this.measureText("元").width;
  y = lineHeight * 9 / 10;
  for (var j = 0; j < textArray.length; j++) {
    var words = textArray[j];
    this.fillText(words, -(maxWidth / 2), y - textArray.length * lineHeight / 2);
    y += lineHeight;
  }
};
JTopo.Node.prototype.paintText = function (a) {
  var b = this.text;
  if (null != b && "" != b) {
    a.beginPath()
    a.font = this.font;
    var c = a.measureText(b).width,
        d = a.measureText("田").width;
    a.fillStyle = "rgba(" + this.fontColor + ", " + this.alpha + ")";
    var e = this.getTextPostion(this.textPosition, c, d);
    a.wrapText(b, e.x, e.y)
    a.closePath()
  }
}