(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{367:function(a,t,s){"use strict";s.r(t);var e=s(42),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux常用命令"}},[a._v("#")]),a._v(" linux常用命令")]),a._v(" "),s("ul",[s("li",[a._v("tar")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" cvf etcbak.tar etc/ // 打包一个tar\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" xvf etcbak.tar // 解压一个tar\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" cvzf etcbak.tar.gz etc/ // 打包压缩一个tar\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zxvf etcbak.tar.gz // 解压一个tar\n")])])]),s("ul",[s("li",[a._v("cp [options] 源文件(source) 目标文件(destination)")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-a "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 相当于dpr参数组合，至于dpr请参考下列说明；（常用）\n-d "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 若源文件为链接文件的属性（link file）,则复制链接文件属性而不是文件本身\n-f, --force "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 若目标文件已经存在，则直接覆盖且没有提示；\n-i,--interactive 与-f选项不同，在覆盖目标文件之前先给出提示，要求用户予以确定。回答y时目标文件将被覆盖。\n-p: 除复制源文件的内容外，还将其修改时间和存取权限也复制到新文件中。\n-R,-r： 递归复制目录，即将源目录下的所有文件及其各级子目录都复制到目标位置。\n-l: 不复制，而是创建指向源文件的链接文件，链接文件名由目标文件给出。  \n")])])]),s("ul",[s("li",[s("p",[a._v("rm命令 rm [选项] 文件列表")]),a._v(" "),s("p",[s("strong",[a._v("该命令删除指定的文件，默认情况下，它不能删除目录。如果没有给出选项-f或--force，该命令删除文件之前会提示用户是否删除该文件；如果用户没有回答y或者Y，则不删除文件")])])])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-f,--force 忽略不存的的文件，并且不给出提示信息。\n-r, -R, --recursive 递归地删除指定目录及其下属的各级子目录和相应的文件。\n-i 交互式删除文件。\n")])])]),s("ul",[s("li",[a._v("mv命令 mv [选项] source target")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-i,--interactive 交互式操作。如果源文件与目标文件或目标目录中的文件同名，则询问用户是否覆盖目标文件。用户输入y，表示将覆盖目标文件；输入n,表示取消对源文件的移动。这样可以避免误将文件覆盖。\n-f 与-i相反，它禁止交互式操作。在覆盖已有的目录文件时，不给出任何提示；\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);