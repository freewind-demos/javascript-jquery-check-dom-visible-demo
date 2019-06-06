JavaScript Click Check Dom Visible Demo
===========================================

使用jquery来检查一个元素是否为visible：只要render了，不论长宽是多少，都视为visible

Jquery中代码：

```
jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};
```

```
open index.html
```
