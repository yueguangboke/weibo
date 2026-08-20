//版权信息
document.write('<a href="/archives/1.html">联系我们</a> ┊ <a href="/archives/2414.html">投放广告</a> ┊ 版权所有：深圳市南山区月光博客信息咨询部 ┊ 备案号：<a href="http://beian.miit.gov.cn/" rel="nofollow">粤ICP备16102788号-1</a>┊ Powered by：Z-Blog ');


$.fn.smartFloat = function() {
var position = function(element) {
var top = element.position().top, pos = element.css("position");
$(window).scroll(function() {
var scrolls = $(this).scrollTop();
if (scrolls > top) {
if (window.XMLHttpRequest) {
element.css({
position: "fixed",
top: 0
});
} else {
element.css({
top: scrolls
});
}
}else {
element.css({
position: pos,
top: top
});
}
});
};
return $(this).each(function() {
position($(this));
});
};

//绑定
$("#float").smartFloat();

