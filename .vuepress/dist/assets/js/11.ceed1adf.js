(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{356:function(t,s,a){t.exports=a.p+"assets/img/chain1.25b8d8cb.png"},357:function(t,s,a){t.exports=a.p+"assets/img/chain2.6f4eed82.png"},358:function(t,s,a){t.exports=a.p+"assets/img/chain3.1f3547be.png"},359:function(t,s,a){t.exports=a.p+"assets/img/202_fig1.94ff9819.png"},360:function(t,s,a){t.exports=a.p+"assets/img/202_fig2.ebe7a560.png"},476:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"链表典型应用场景-一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链表典型应用场景-一"}},[t._v("#")]),t._v(" 链表典型应用场景（一）")]),t._v(" "),n("h2",{attrs:{id:"场景一-环状链表-判断环状链表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#场景一-环状链表-判断环状链表"}},[t._v("#")]),t._v(" 场景一：环状链表=>判断环状链表")]),t._v(" "),n("h5",{attrs:{id:"描述-给定一个链表-判断链表中是否有环。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#描述-给定一个链表-判断链表中是否有环。"}},[t._v("#")]),t._v(" 描述：给定一个链表，判断链表中是否有环。")]),t._v(" "),n("p",[t._v("​\t内容： 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。")]),t._v(" "),n("p",[t._v("​\t如果链表中存在环，则返回 true 。 否则，返回 false 。")]),t._v(" "),n("h5",{attrs:{id:"思路一-使用哈希表-额外的存储区-存储已经遍历过的节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路一-使用哈希表-额外的存储区-存储已经遍历过的节点"}},[t._v("#")]),t._v(" 思路一 使用哈希表（额外的存储区）存储已经遍历过的节点")]),t._v(" "),n("p",[t._v("代码如下：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {ListNode} head\n * @return {boolean}\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用hash表来记录,目前复杂度为时间复杂度O(n),空间复杂度也是O(n)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("hasCycle")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cache "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果cache发现存在的元素，代表有环")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      cache "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    head "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h5",{attrs:{id:"思路二-双指针做法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路二-双指针做法"}},[t._v("#")]),t._v(" 思路二 双指针做法")]),t._v(" "),n("p",[t._v("​\t使用快慢指针 快指针一次向前2个节点 慢指针一次向前1个节点")]),t._v(" "),n("ul",[n("li",[t._v("有环的链表中 快指针和慢指针最终一定会在环中相遇")]),t._v(" "),n("li",[t._v("无环的链表中 快指针会率先访问到链表尾 从而终结检测过程")])]),t._v(" "),n("p",[t._v("代码如下：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {ListNode} head\n * @return {boolean}\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 目前时间复杂度为O(n)，空间复杂度为O(1)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("hasCycle")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" slow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" fast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 快节点一次走两个节点")]),t._v("\n    slow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 慢节点一次走一个节点")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" slow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"场景二-环状列表-返回链表开始入环的第一个节点。-如果链表无环-则返回-null。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#场景二-环状列表-返回链表开始入环的第一个节点。-如果链表无环-则返回-null。"}},[t._v("#")]),t._v(" 场景二：环状列表=>返回链表开始入环的第一个节点。 如果链表无环，则返回 "),n("code",[t._v("null")]),t._v("。")]),t._v(" "),n("h5",{attrs:{id:"描述-给定一个链表-返回链表开始入环的第一个节点。-如果链表无环-则返回-null。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#描述-给定一个链表-返回链表开始入环的第一个节点。-如果链表无环-则返回-null。"}},[t._v("#")]),t._v(" 描述：给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 "),n("code",[t._v("null")]),t._v("。")]),t._v(" "),n("h5",{attrs:{id:"解题思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路：")]),t._v(" "),n("p",[t._v("​\t这类链表题目一般都是使用双指针法解决的，例如寻找距离尾部第K个节点、寻找环入口、寻找公共尾部入口等。")]),t._v(" "),n("p",[n("strong",[t._v("算法流程：")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("首先还是通过快慢指针（其中快指针走两步，慢指针走一步），先判断当前链表是环形链表。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(356),alt:""}})])]),t._v(" "),n("li",[n("p",[t._v("找到快慢指针的相遇位置。针对图一环形链表，快慢指针相遇位置在5节点处。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(357),alt:""}})])]),t._v(" "),n("li",[n("p",[t._v("快慢指针相遇后，把其中一个节点放到头部节点，另一节点放到相遇节点，两个节点一起往后走，相遇点就是环的起始位置。")])]),t._v(" "),n("li",[n("p",[t._v("我们用数学思维来思考（其中p为慢指针，q为快指针，p一次走一步，q一次走两步）")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("首先假设链表的起始点距离环的起始点为a.")])]),t._v(" "),n("li",[n("p",[t._v("假设p走到环的起始点时，即p走了距离a，则q距离head应该走了2a的距离。")])]),t._v(" "),n("li",[n("p",[t._v("这个时候假设q已经在环里面了，假设环的长度为a+x，则环剩余的距离为x，现在p和q同时在环里面，p在环的起始位置，q在距离起始点a的距离，x轮后，q才能在环中追加p，p在环中走了x步。")])]),t._v(" "),n("li",[n("p",[t._v("则p距离相遇点的距离为x，则相遇点距离环起始点的位置为a。")]),t._v(" "),n("p",[t._v("如下图所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(358),alt:""}})])])])])]),t._v(" "),n("p",[t._v("代码如下：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {ListNode} head\n * @return {ListNode}\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("detectCycle")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" slow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" fast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      slow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n      fast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("slow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" fast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" fast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n          fast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fast\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"场景三-编写一个算法来判断一个数-n-是不是快乐数。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#场景三-编写一个算法来判断一个数-n-是不是快乐数。"}},[t._v("#")]),t._v(" 场景三：编写一个算法来判断一个数 "),n("code",[t._v("n")]),t._v(" 是不是快乐数。")]),t._v(" "),n("p",[t._v("描述「快乐数」定义为：")]),t._v(" "),n("ul",[n("li",[t._v("对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。")]),t._v(" "),n("li",[t._v("然后重复这个过程直到这个数变为 1，也可能是 "),n("strong",[t._v("无限循环")]),t._v(" 但始终变不到 1。")]),t._v(" "),n("li",[t._v("如果 "),n("strong",[t._v("可以变为")]),t._v("  1，那么这个数就是快乐数。")])]),t._v(" "),n("p",[t._v("如果 "),n("code",[t._v("n")]),t._v(" 是快乐数就返回 "),n("code",[t._v("true")]),t._v(" ；不是，则返回 "),n("code",[t._v("false")]),t._v(" 。")]),t._v(" "),n("p",[n("strong",[t._v("解题思路：")])]),t._v(" "),n("ol",[n("li",[t._v("我们举个例子：当输入值为7时，平方和就转换为：7 =>49=>97=>130=>10=>1;")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(359),alt:""}})]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[t._v("题目可以转化为：判断一个链表是否有环。如果遍历某个节点为1 ，说明没环，就是快乐数。如果遍历到重复的节点值，说明有环，就不是快乐数。")])]),t._v(" "),n("li",[n("p",[t._v("再举个例子，当输入值为116时，平方和构成的链表就是：如下图所示：\n"),n("img",{attrs:{src:a(360),alt:""}})])])]),t._v(" "),n("p",[t._v("代码实现如下：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number} n\n * @return {boolean}\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isHappy")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getNext")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" t\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);