var canvas = document.getElementById('canvas');
var stage = new JTopo.Stage(canvas);
var scene = new JTopo.Scene(stage);
// stage.zoomIn(0.7)
var font = '16px 微软雅黑';
stage.wheelZoom = 1.2
stage.eagleEye.visible = true;
scene.clear()

// 颜色区间随机
function randomColor(m, n) {
  return Math.floor(255 * (m + Math.random() * (n - m)))
      + "," + Math.floor(255 * (m + Math.random() * (n - m)))
      + "," + Math.floor(255 * (m + Math.random() * (n - m)))
}

// 节点
function node(text, link, fillColor) {
  var node = new JTopo.Node();
  node.text = text;
  node.textPosition = 'Middle_Center';
  node.font = font;
  node.fontColor = "0,0,0"
  node.borderRadius = 5;
  node.borderWidth = 1;
  node.borderColor = JTopo.util.randomColor();
  if (fillColor === undefined || fillColor.trim().length === 0) {
    node.fillColor = randomColor(0.65, 0.99);
  } else {
    node.fillColor = fillColor;
  }
  // node.alpha = 0.7; //透明度

  var textArray = text.split('\n');
  var ctx = scene.stage.canvas.getContext("2d")
  ctx.font = node.font
  var width = ctx.measureText(textArray[0]).width
  for (var i = 1; i < textArray.length; i++) {
    var w = ctx.measureText(textArray[i]).width
    if (w >= width) {
      width = w;
    }
  }
  var height = ctx.measureText('田').width * (textArray.length);
  node.setSize(width + 10, height + 10);
  if (scene.layoutWidth === undefined || width + 10 > scene.layoutWidth) {
    scene.layoutWidth = width + 10
  }
  if (scene.layoutHeight === undefined || height * 3 > scene.layoutHeight) {
    scene.layoutHeight = height * 3
  }
  node.addEventListener('mouseup', function (event) {
    currentNode = this;
    handler(event, text, link);
  });
  scene.add(node);
  return node;
}

// 连接线
function link(nodeA, nodeZ, text, _link, fillColor) {
  var link = new JTopo.Link(nodeA, nodeZ, text);
  link.paintText = paintTextAndRotate;
  link.fontColor = "0,0,0"
  link.font = font;
  link.lineWidth = 3;
  link.arrowsRadius = 10;
  if (fillColor === undefined || fillColor.trim().length === 0) {
    link.strokeColor = randomColor(0.5, 0.95);
  } else {
    link.strokeColor = fillColor;
  }
  link.addEventListener('mouseup', function (event) {
    currentNode = this;
    handler(event, text, _link);
  });
  scene.add(link);
  return link;
}

// 分组（IE不支持...可变参数，所以elements用数组）
function group(text, link, fillColor, elements) {
  var container = new JTopo.Container(text);
  container.textPosition = 'Top_Right';
  container.fontColor = '0,0,0';
  container.font = font;
  container.borderRadius = 5;
  container.borderWidth = 5;
  container.borderColor = JTopo.util.randomColor();
  if (fillColor === undefined || fillColor.trim().length === 0) {
    container.fillColor = randomColor(0.75, 0.99);
  } else {
    container.fillColor = fillColor;
  }
  // container.alpha = 0.7; //透明度
  if (Array.isArray(elements)) {
    for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].borderWidth = 3;
      elements[i].borderColor = container.borderColor;
      container.add(elements[i])
    }
  }
  container.addEventListener('mouseup', function (event) {
    currentNode = this;
    handler(event, text, link);
  });
  scene.add(container);
  return container;
}

// 适应窗口大小
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.onresize = resizeCanvas;
resizeCanvas();