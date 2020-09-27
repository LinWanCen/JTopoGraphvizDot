// https://github.com/darknessjs/jtopo-unit/blob/master/jtopp%E8%BF%9E%E7%BA%BF%E6%96%87%E5%AD%97%E6%97%8B%E8%BD%AC.html
var paintTextAndRotate = function (a, b) {
  var c = b[0],
      d = b[b.length - 1];
  if (4 == b.length && (c = b[1], d = b[2]), this.text && this.text.length > 0) {
    var e = (d.x + c.x) / 2 + this.textOffsetX
    var f = (d.y + c.y) / 2 + this.textOffsetY;
    var deltaY = d.y - c.y;
    var deltaX = d.x - c.x;
    var shouldRotate = Math.atan(deltaY / deltaX);
    a.save()
    a.beginPath()
    a.translate(e, f);
    a.rotate(shouldRotate);
    e = 0;
    f = 0;
    a.font = this.font;
    var g = a.measureText(this.text).width
    var h = a.measureText("田").width
    if (a.fillStyle = "rgba(" + this.fontColor + ", " + this.alpha + ")", this.nodeA === this.nodeZ) {
      var j = this.bundleGap * (this.nodeIndex + 1) / 2;
      var e = this.nodeA.x + j * Math.cos(i);
      var f = this.nodeA.y + j * Math.sin(i);
      a.fillText(this.text, e, f)
    } else {
      if (d.x === c.x) {
        g = 0
      } else if (d.x > c.x) {
        if (d.y > c.y) {
          // 右下角
          g = g / 4
        } else {
          // 右上角
          g = -g / 4
        }
      } else {
        g = -g
      }
      a.fillText(this.text, e + g, f - h / 2);
    }
    a.stroke()
    a.closePath()
    a.restore()
  }
}