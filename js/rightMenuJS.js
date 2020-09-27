var contextmenu = document.getElementById('contextmenu');

function handler(event, text, link) {
  document.getElementById('name').innerText = text
  var linkElement = document.getElementById('link');
  if (link === undefined || link.trim().length === 0) {
    linkElement.parentElement.hidden = true
  } else {
    linkElement.parentElement.hidden = false
    linkElement.href = link
  }
  if (event.button == 2) {// 右键
    // 当前位置弹出菜单（div）
    contextmenu.style.top = event.pageY + 'px';
    contextmenu.style.left = event.pageX + 'px';
    contextmenu.style.display = 'block';
  }
}

stage.click(function (event) {
  if (event.button == 0) {// 右键
    // 关闭弹出菜单（div）
    contextmenu.style.display = 'none';
  }
});

var currentNode = null;

contextmenu.childNodes[0].addEventListener('click', function(event){
  var text = $(this).text();
  switch (text) {
    case '跳过':
      break;
    case '重试':
      break;
    default:
      break;
  }
  contextmenu.style.display = 'none';
});


