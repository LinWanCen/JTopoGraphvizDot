var data = {
  "title": "依赖图",
  "node": [
    {"key": "n1", "text": "右键访问JTopo\n分片数1\n0 0 1 1/1 * ? *", "url": "http://www.jtopo.com/demo/node.html", "color": ""},
    {"key": "n2", "text": "作业2\n分片数2\n0 0 1 1/1 * ? *", "url": "", "color": "255,255,255"},
    {"key": "n3", "text": "作业3\n分片数1\n0 0 1 1/1 * ? *", "url": "", "color": ""},
    {"key": "n4", "text": "作业4\n分片数1\n0 0 1 1/1 * ? *", "url": "", "color": ""},
    {"key": "n5", "text": "作业5\n分片数1\n0 0 1 1/1 * ? *", "url": "", "color": ""},
    {"key": "n6", "text": "作业6\n分片数1\n0 0 1 1/1 * ? *", "url": "", "color": ""}
  ],
  "link": [
    {"key": "l1", "from": "n1", "to": "n2", "text": "连线", "url": "http://www.jtopo.com/demo/link.html", "color": ""},
    {"key": "l2", "from": "n1", "to": "n3", "text": "1-n", "url": "", "color": "0,0,0"},
    {"key": "l3", "from": "n3", "to": "n4", "text": "n-n", "url": "", "color": ""},
    {"key": "l4", "from": "n3", "to": "n5", "text": "0-1", "url": "", "color": ""},
    {"key": "l5", "from": "n3", "to": "n6", "text": "1-0", "url": "", "color": ""}
  ],
  "group": [
    {"key": "g1", "text": "分组", "sub": ["n1", "g2"], "url": "http://www.jtopo.com/demo/container.html", "color": ""},
    {"key": "g2", "text": "顶层分组写后面", "sub": ["n3", "n4", "n6"], "url": "", "color": "255,0,0"}
  ]
}

document.title = data.title
dataMap = {}
for (var i = 0, len = data.node.length; i < len; i++) {
  var n = data.node[i];
  dataMap[n.key] = node(n.text, n.url, n.color);
}
if (data.link !== undefined) {
  for (var i = 0, len = data.link.length; i < len; i++) {
    var l = data.link[i];
    dataMap[l.key] = link(dataMap[l.from], dataMap[l.to], l.text, l.url, l.color)
  }
}
if (data.group !== undefined) {
  for (var i = 0, len = data.group.length; i < len; i++) {
    var g = data.group[i];
    dataMap[g.key] = group(g.text, g.url, g.color);
  }
  for (var i = 0, len = data.group.length; i < len; i++) {
    var g = data.group[i];
    for (var i2 = 0, len2 = g.sub.length; i2 < len2; i2++) {
      dataMap[g.key].add(dataMap[g.sub[i2]])
    }
  }
}
