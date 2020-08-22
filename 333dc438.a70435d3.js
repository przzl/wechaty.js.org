(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,y=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(y,i(i({ref:t},p),{},{components:n})):o.a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(141)),c={title:"Concepts"},i={unversionedId:"introduction/concepts",id:"introduction/concepts",isDocsHomePage:!1,title:"Concepts",description:"This page will helps you to build a deeper understanding of the underlying technology.",source:"@site/docs/introduction/concepts.md",permalink:"/docs/introduction/concepts",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/introduction/concepts.md",lastUpdatedBy:"przzl",lastUpdatedAt:1598083586,sidebar:"docs",previous:{title:"Wechaty Puppet",permalink:"/docs/introduction/puppet"},next:{title:"Motivation",permalink:"/docs/introduction/motivations"}},l=[{value:"Wechaty",id:"wechaty",children:[]},{value:"See Also",id:"see-also",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This page will helps you to build a deeper understanding of the underlying technology."),Object(a.b)("h2",{id:"wechaty"},"Wechaty"),Object(a.b)("p",null,"The bot class that you always start with."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const bot = new Wechaty()\nawait wechaty.start()\n")),Object(a.b)("h2",{id:"see-also"},"See Also"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.google.com/hangouts/chat/concepts/"}),"Hangouts Chat API")),Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},"BO vs BT: Bot Originated/Terminated")))),Object(a.b)("p",null,"This is basically the whole idea of Wechaty."))}u.isMDXComponent=!0}}]);