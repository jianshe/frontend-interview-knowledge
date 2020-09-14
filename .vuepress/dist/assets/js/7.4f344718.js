(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{363:function(t,s,a){t.exports=a.p+"assets/img/181635468939277.d9da7b9c.png"},364:function(t,s,a){t.exports=a.p+"assets/img/181637013624694.ffd75fde.png"},379:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"深入理解javascript原型和闭包-instanceof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#深入理解javascript原型和闭包-instanceof"}},[t._v("#")]),t._v(" 深入理解javascript原型和闭包—instanceof")]),t._v(" "),n("blockquote",[n("p",[t._v("对于值类型，你可以通过typeof判断，string/number/boolean都很清楚，但是typeof在判断引用类型的时候，返回值只有object/function，你不知道它到底是一个object对象，还是数组，还是new Number等等。")])]),t._v(" "),n("h4",{attrs:{id:"instanceof-可以清楚判断出引用类型的类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instanceof-可以清楚判断出引用类型的类型"}},[t._v("#")]),t._v(" instanceof 可以清楚判断出引用类型的类型")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(363),alt:"16f879b5b51541a1"}})]),t._v(" "),n("p",[t._v('上图中，f1这个对象是被Foo创建的，但是"f1 instanceof Object"为什么是true呢？')]),t._v(" "),n("h4",{attrs:{id:"instanceof-判断规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instanceof-判断规则"}},[t._v("#")]),t._v(" instanceof 判断规则")]),t._v(" "),n("p",[t._v("​\tInstanceof 运算符的第一个变量是一个对象，暂时称为A；第二个变量一般是一个函数，暂时称为B。")]),t._v(" "),n("p",[t._v("​\tInstanceof 的判断规则是："),n("strong",[t._v("沿着A的proto这条线来找，同时沿着B的prototype这条线来找，如果两条线能找到同一个引用，即同一个对象，那么就返回true。如果找到终点还未重合，则返回false。")])]),t._v(" "),n("p",[t._v("按照以上规则，很容易看出来，就是true。")]),t._v(" "),n("p",[t._v("通过以上规则，你可以理解很多比较怪异的现象，例如：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Function "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Function "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("p",[t._v("这些看似很混乱的东西，答案却都是true，这是为何？见下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(364),alt:"16f879b5b51541a1"}})]),t._v(" "),n("p",[t._v("看这个图片，千万不要嫌烦，必须一条线一条线挨着分析。")]),t._v(" "),n("p",[t._v("问题来了，Instanceof这样设计，到底有什么用？到底Instanceof想表达什么呢？")]),t._v(" "),n("p",[t._v("重点就这样被这位老朋友给引出来了--继承--原型链。")]),t._v(" "),n("p",[t._v("即，instanceof表示的就是一种继承关系，或者原型链的结构。")]),t._v(" "),n("blockquote",[n("p",[t._v("下节重点讲述继承和原型链")])])])}),[],!1,null,null,null);s.default=e.exports}}]);