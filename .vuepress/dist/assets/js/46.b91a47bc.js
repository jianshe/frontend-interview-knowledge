(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{483:function(s,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos安装nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos安装nodejs"}},[s._v("#")]),s._v(" CentOS安装NodeJS")]),s._v(" "),a("blockquote",[a("p",[s._v("CentOS上安装NodeJS")])]),s._v(" "),a("p",[s._v("1、从官网下载最新的nodejs，"),a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nodejs.org/en/download/"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("strong",[s._v("历史版本可从https://nodejs.org/dist/下载")])]),s._v(" "),a("p",[s._v("2、通过ftp工具上传到linux服务，解压安装包")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tar -xvf node-v10.16.0-linux-x64.tar.xz\n")])])]),a("p",[s._v("3、移动并改名文件夹（不改名也行）")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\nmv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ftp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pub"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//后面的.表示移动到当前目录")]),s._v("\nmv node"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" nodejs\n")])])]),a("p",[s._v("4、让npm和node命令全局生效")]),s._v(" "),a("p",[s._v("方式一：环境变量方式（这种方式似乎只对登录用户有效？）")]),s._v(" "),a("p",[s._v("1）、加入环境变量，在 /etc/profile 文件末尾增加配置")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vi /ect/profile\nexport PATH=$PATH:/usr/local/nodejs/bin\n")])])]),a("p",[s._v("2）、执行命令使配置文件生效")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("source /etc/profile\n")])])]),a("p",[s._v("方式二：软链接方式（推荐）")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ln -s /usr/local/nodejs/bin/npm /usr/local/bin/\nln -s /usr/local/nodejs/bin/node /usr/local/bin/\n")])])]),a("p",[s._v("5、查看nodejs是否安装成功")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("node -v\nnpm -v\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);