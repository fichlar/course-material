(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{314:function(t,e,a){},315:function(t,e,a){},363:function(t,e,a){"use strict";var i=a(314);a.n(i).a},364:function(t,e,a){"use strict";var i=a(315);a.n(i).a},403:function(t,e,a){"use strict";a(354);var i=a(356),n=a(404),s=a(405),l=a(348),o=(a(363),a(40)),r=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":this.$site.themeConfig.logo}},[this._v("\n\t"+this._s(this.$parent.$page.courseSettings&&this.$parent.$page.courseSettings.name||this.$parent.$page.frontmatter.navbarTitle||this.$parent.$page.frontmatter.title)+"\n")])}),[],!1,null,null,null).exports;function c(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var h={components:{SidebarButton:s.a,NavLinks:l.a,SearchBox:n.a,AlgoliaSearchBox:i.a,NavbarTitle:r},data:function(){return{linksWrapMaxWidth:null,course:""}},mounted:function(){var t=this,e=parseInt(c(this.$el,"paddingLeft"))+parseInt(c(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},u=(a(364),Object(o.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),a("NavbarTitle"),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));e.a=u.exports}}]);