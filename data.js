document.title='依赖图'
n1 = node('右键访问JTopo\n分片数1\n0 0 1 1/1 * ? *', "http://www.jtopo.com/demo/node.html")
n2 = node('作业2\n分片数2\n0 0 1 1/1 * ? *', '')
n3 = node('作业3\n分片数1\n0 0 1 1/1 * ? *')
n4 = node('作业4\n分片数1\n0 0 1 1/1 * ? *')
n5 = node('作业5\n分片数1\n0 0 1 1/1 * ? *')
n6 = node('作业6\n分片数1\n0 0 1 1/1 * ? *', '')
link(n1, n2, '连线', 'http://www.jtopo.com/demo/link.html');
link(n1, n3, '1-n');
link(n3, n4, 'n-n');
link(n3, n5, '0-1');
link(n3, n6, '1-0');
var g1 = group("分组", 'http://www.jtopo.com/demo/container.html', '', [n1]);
var g2 = group("顶层分组写后面",'', '', [n3, n4, n6]);
g1.add(g2)