(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{335:function(t,e,n){},385:function(t,e,n){var s=n(0),o=n(3),r=n(103),i=[].slice,a=function(t){return function(e,n){var s=arguments.length>2,o=s?i.call(arguments,2):void 0;return t(s?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,n)}};s({global:!0,bind:!0,forced:/MSIE .\./.test(r)},{setTimeout:a(o.setTimeout),setInterval:a(o.setInterval)})},386:function(t,e,n){"use strict";var s=n(335);n.n(s).a},419:function(t,e,n){"use strict";n.r(e);n(92),n(385);var s={props:{showAfter:String},data:function(){var t=new Date,e=new Date(this.showAfter);return{showAfterDate:e,showAnswer:e<t}},mounted:function(){var t=this;if(!this.showAnswer){var e=new Date,n=this.showAfterDate-e;this.timeoutId=function(t,e){if(e<=2147483647)return setTimeout(t,e)}((function(){t.showAnswer=!0}),n)}},destroyed:function(){this.timeoutId&&clearTimeout(this.timeoutId)}},o=(n(386),n(40)),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answer"},[t.showAnswer?n("div",[t._t("default")],2):n("div",[t._v("\n\t\tA sample answer will be shown here "+t._s(t.showAfterDate.getFullYear())+"-"+t._s(t.showAfterDate.getMonth()+1)+"-"+t._s(t.showAfterDate.getDate())+" "+t._s(t.showAfterDate.getHours())+":"+t._s(t.showAfterDate.getMinutes())+".\n\t")])])}),[],!1,null,"22271491",null);e.default=r.exports}}]);