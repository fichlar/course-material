(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{325:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));t(42),t(43),t(66),t(91),t(9),t(24),t(29);var o=t(54);function n(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=Object(o.a)(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,l=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw l}}}}},326:function(e,r,t){},374:function(e,r,t){var o=t(0),n=t(375),i=t(94);o({target:"Array",proto:!0},{fill:n}),i("fill")},375:function(e,r,t){"use strict";var o=t(11),n=t(95),i=t(13);e.exports=function(e){for(var r=o(this),t=i(r.length),l=arguments.length,a=n(l>1?arguments[1]:void 0,t),c=l>2?arguments[2]:void 0,u=void 0===c?t:n(c,t);u>a;)r[a++]=e;return r}},376:function(e,r,t){"use strict";var o=t(326);t.n(o).a},412:function(e,r,t){"use strict";t.r(r);t(374);var o=t(325),n=[{numberOfWeeks:7,title:"Study Period 1",color:"blue"},{numberOfWeeks:1,title:"Exam Period 1",color:"blue"},{numberOfWeeks:8,title:"Study Period 2",color:"green"},{numberOfWeeks:1,title:"Exam Period 2",color:"green"},{numberOfWeeks:2,title:"Winter Holidays",color:"purple"},{numberOfWeeks:.5,title:"Re-exam Period 1",color:"blue"},{numberOfWeeks:.5,title:"Re-exam Period 4",color:"red"},{numberOfWeeks:4,title:"Study Period 3",color:"yellow"},{numberOfWeeks:1,title:"Re-exam Period 2",color:"green"},{numberOfWeeks:4,title:"Study Period 3",color:"yellow"},{numberOfWeeks:1,title:"Exam Period 3",color:"yellow"},{numberOfWeeks:9,title:"Study Period 4",color:"red"},{numberOfWeeks:1,title:"Exam Period 4",color:"red"},{numberOfWeeks:1,title:"Re-exam Period 3",color:"yellow"},{numberOfWeeks:9,title:"Summer Holidays",color:"purple"},{numberOfWeeks:.5,title:"Re-exam Period 1",color:"blue"},{numberOfWeeks:.5,title:"Re-exam Period 2",color:"green"},{numberOfWeeks:.5,title:"Re-exam Period 3",color:"yellow"},{numberOfWeeks:.5,title:"Re-exam Period 4",color:"red"}],i={mounted:function(){var e=this.$refs.canvas,r=e.getContext("2d"),t=e.clientWidth,i=t/2,l=e.clientHeight/2,a=t/2-4;r.strokeStyle="black",r.lineWidth=5;var c,u=2*Math.PI*(34/52-.25),s=Object(o.a)(n);try{for(s.s();!(c=s.n()).done;){var d=c.value,f=2*Math.PI*(d.numberOfWeeks/52);"purple"!=d.color&&(r.fillStyle=d.color,r.beginPath(),r.moveTo(i,l),r.arc(i,l,a,u,u+f),r.lineTo(i,l),r.stroke(),r.fill()),u+=f}}catch(e){s.e(e)}finally{s.f()}}},l=(t(376),t(40)),a=Object(l.a)(i,(function(){var e=this.$createElement,r=this._self._c||e;return r("Figure",{attrs:{caption:"Study periods and re-exam periods in an academic year. Big circular sectors are study periods, small circular sectors are (re-)exam periods. Blue circle sectors are part of period 1. Green circle sectors are part of period 2. Yellow circle sectors are part of period 3. Red circle sectors are part of period 4."}},[r("canvas",{ref:"canvas",attrs:{width:"350",height:"350"}})])}),[],!1,null,"6f57dbad",null);r.default=a.exports}}]);