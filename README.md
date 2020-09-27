# 可交互的作业依赖图
用于程序生成批量作业依赖图，支持分组，可拖拽搜索，右键复制与打开链接，全屏可缩放并带缩略图

* 使用 Jtopo 插件，去 jq，支持 IE
* 原理是使用 HTML5 的画布 canvas 绘制的像素图\
  不能像 [Graphviz]（[dot]）、[PlantUML]、[dagre-d3] 那样生成 SVG 矢量图\
  若您有转换 svg 的例子请在 [issues] 给我链接或提交代码（尝试过[html5-canvas-to-svg]没成功）

[Graphviz]:http://www.graphviz.org/
[dot]:https://www.jianshu.com/p/58333e9314ff
[PlantUML]:https://www.jianshu.com/p/73197a724c62
[dagre-d3]:https://github.com/dagrejs/dagre-d3
[issues]:https://github.com/LinWanCen/JTopoGraphvizDot/issues
[html5-canvas-to-svg]:https://stackoverflow.com/questions/8571294/method-to-convert-html5-canvas-to-svg


## 在线体验
github.io:\
[https://linwancen.github.io/JTopoGraphvizDot/](https://linwancen.github.io/JTopoGraphvizDot/)

gitee.io:\
[http://linwancen.gitee.io/JTopoGraphvizDot/](http://linwancen.gitee.io/JTopoGraphvizDot)

因为域名污染进不了 xxx.github.io 的同学请修改 DNS 后刷新缓存，参考： 
[https://www.zhihu.com/question/411565676](https://www.zhihu.com/question/411565676)



## 说明

### jtopo-0.4.8-min.js
官方原版
[http://www.jtopo.com/download.html](http://www.jtopo.com/download.html)

### jtopo-init.js
* 初始化 JTopo，设置滚轮缩放、缩略图
* 适应窗口大小
* 支持右键复制与链接
* 颜色区间随机
* 创建自适应高度的节点、连接线、分组工具方法

## jsonData.js
* JSON 方式创建图形与解析代码
* 为了能本地查看不会跨域失败，这里未使用 AJAX，若用于在线项目可以稍微改下

## data.js
代码方式创建图形

### rightMenuJS.js
* 来自官网[http://www.jtopo.com/demo/right-menu.html](http://www.jtopo.com/demo/right-menu.html)
* 官方原版的基础上去 jq，分离到 rightMenu.css
* 同时精简了菜单功能
* 跳过、重试等功能未启用，建议链接到系统

### toolbarJS.js
* 官方原版的基础上去 jq，分离到 index.html
* 去掉了不能用的导出功能
* 默认鼠标缩放
* 查找输入框放最左边方便 TAB 键选中
* 查找输入框支持左右方向键选择
* 查找输入框支持正则表达式
* 查找按键支持多次点击时轮询查到所查的对象

### wrap.js
* 来自[https://github.com/darknessjs/jtopo-unit](https://github.com/darknessjs/jtopo-unit)
* 百度贴吧也有相关代码
* 修正了高度不对的问题

### rotate.js
* 来源同上
* 修正了没有居中的问题



## 已知问题
jtopo的问题，暂未解决
* 边框与色块重叠导致边框颜色不对
* 使用重排按钮位置偏移



## 关于Jtopo

JTopo 官网：\
[http://www.jtopo.com/](http://www.jtopo.com/)

旧的源码：\
[https://github.com/tuanjie54188/jtopo](https://github.com/tuanjie54188/jtopo)

在Gitee：\
[https://gitee.com/huangxiaoyong/jtopo](https://gitee.com/huangxiaoyong/jtopo)

ES 6 版本：\
[https://github.com/oo2o/jtopo](https://github.com/oo2o/jtopo)

拖动修复等(未使用)：\
[https://github.com/aaaLf/JTopo](https://github.com/aaaLf/JTopo)