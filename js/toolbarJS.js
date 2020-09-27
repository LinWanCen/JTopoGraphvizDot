// 用到jq，Radio选中不知道怎么用js实现
//显示工具栏
showJTopoToobar(stage);
function showJTopoToobar(stage) {
  // 工具栏按钮处理
  var modeRadios = document.getElementsByName('modeRadio');
  window.onload = function () {
    for (var i = 0, len = modeRadios.length; i < len; i++) {
      modeRadios[i].addEventListener('click', function(event){
        stage.mode = event.target.value;
      });
      if (modeRadios[i].checked === true) {
        stage.mode = modeRadios[i].value;
      }
    }
  }
  document.getElementById('centerButton').addEventListener('click', function(event){
    stage.centerAndZoom();
  });
  document.getElementById('zoomOutButton').addEventListener('click', function(event){
    stage.zoomOut();
  });
  document.getElementById('zoomInButton').addEventListener('click', function(event){
    stage.zoomIn();
  });
  document.getElementById('pngButton').addEventListener('click', function(event){
    stage.saveImageInfo();
  });
  // document.getElementById('svgButton').addEventListener('click', function(event){
  //
  // });
  var zoomCheckbox = document.getElementById('zoomCheckbox');
  zoomCheckbox.addEventListener('click', function(event){
    if (zoomCheckbox.checked) {
      stage.wheelZoom = 1.2; // 设置鼠标缩放比例
    } else {
      stage.wheelZoom = null; // 取消鼠标缩放比例
    }
  });
  document.getElementById('fullScreenButton').addEventListener('click', function(event){
    runPrefixMethod(stage.canvas, "RequestFullScreen")
  });
  document.getElementById('layoutButton').addEventListener('click', function(event){
    scene.doLayout(JTopo.layout.TreeLayout('down', scene.layoutWidth, scene.layoutHeight));
  });

  window.enterPressHandler = function (event) {
    if (event.keyCode == 13 || event.which === 13) {
      document.getElementById('findButton').click();
    } else if (event.keyCode == 37 && event.target.selectionEnd > 0) {
      event.target.selectionEnd = event.target.selectionEnd - 1
    } else if (event.keyCode == 39) {
      event.target.selectionStart = event.target.selectionStart + 1
    }
  };

  var lastText = '';
  var centAndFlashIndex = 0;
  // 查询
  document.getElementById('findButton').addEventListener('click', function(event){
    var text = document.getElementById('findText').value.trim();
    //var nodes = stage.find('node[text="'+text+'"]');
    var scene = stage.childs[0];
    nodes = scene.childs.filter(function (e) {
      return e instanceof JTopo.Node;
    });
    nodes = nodes.filter(function (e) {
      if (e.text == null) return false;
      return new RegExp(text, 'i').test(e.text);
    });
    if (text !== lastText) {
      centAndFlashIndex = 0;
    }
    lastText = text;
    if (nodes.length > 0) {
      if (centAndFlashIndex >= nodes.length) {
        centAndFlashIndex = 0;
      }
      var node = nodes[centAndFlashIndex];
      centAndFlashIndex++;
      node.selected = true;
      var location = node.getCenterLocation();
      // 查询到的节点居中显示
      stage.setCenter(location.x, location.y);

      function nodeFlash(node, n) {
        if (n == 0) {
          node.selected = false;
          return;
        }
        ;
        node.selected = !node.selected;
        setTimeout(function () {
          nodeFlash(node, n - 1);
        }, 300);
      }

      // 闪烁几下
      nodeFlash(node, 6);
    }
  });
}

var runPrefixMethod = function (element, method) {
  var usablePrefixMethod;
  ["webkit", "moz", "ms", "o", ""].forEach(function (prefix) {
        if (usablePrefixMethod) return;
        if (prefix === "") {
          // 无前缀，方法首字母小写
          method = method.slice(0, 1).toLowerCase() + method.slice(1);
        }
        var typePrefixMethod = typeof element[prefix + method];
        if (typePrefixMethod + "" !== "undefined") {
          if (typePrefixMethod === "function") {
            usablePrefixMethod = element[prefix + method]();
          } else {
            usablePrefixMethod = element[prefix + method];
          }
        }
      }
  );

  return usablePrefixMethod;
};
/*
runPrefixMethod(this, "RequestFullScreen");
if (typeof window.screenX === "number") {
var eleFull = canvas;
eleFull.addEventListener("click", function() {
	if (runPrefixMethod(document, "FullScreen") || runPrefixMethod(document, "IsFullScreen")) {
		runPrefixMethod(document, "CancelFullScreen");
		this.title = this.title.replace("退出", "");
	} else if (runPrefixMethod(this, "RequestFullScreen")) {
		this.title = this.title.replace("点击", "点击退出");
	}
});
} else {
alert("浏览器不支持");
}*/
