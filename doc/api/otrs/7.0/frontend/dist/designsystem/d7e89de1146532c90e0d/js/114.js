(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{"9iYM":function(t,e,n){"use strict";n.r(e);var i={name:"CommonLink",mixins:[n("MHmu").a],props:{link:{type:[String,Object]},isExternal:{type:Boolean,default:!1},isRoute:{type:Boolean,default:!1},active:{type:Boolean,default:!1},activeClass:{type:String},append:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactActiveClass:{type:String},rel:{type:String},replace:{type:Boolean,default:!1},routerTag:{type:String},target:{type:String}},computed:{isInternalLink:function(){return!this.isExternal&&(!!this.isRoute||this.isRouteLink(this.link))}},methods:{click:function(t){this.$emit("click",t)}}},a=n("psIG"),r=Object(a.a)(i,function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-link",{attrs:{active:t.active,"active-class":t.activeClass,append:t.append,disabled:t.disabled,exact:t.exact,"exact-active-class":t.exactActiveClass,href:t.isInternalLink?null:t.link,rel:t.rel,replace:t.replace,"router-tag":t.routerTag,target:t.target,to:t.isInternalLink?t.link:null},on:{click:t.click}},[t._t("default")],2)},[],!1,null,null,null);r.options.__file="CommonLink.vue";e.default=r.exports},L3zo:function(t,e,n){"use strict";n.r(e);var i={name:"CommonAlert",components:{CommonLink:n("9iYM").default},props:{title:{type:String,required:!0},description:{type:String},link:{type:[String,Object]},linkText:{type:String,default:"Please follow this link"},dismissible:{type:Boolean},variant:{type:String,default:"info"},show:{type:Boolean}},computed:{variantClass:function(){switch(this.variant){case"success":return"Alert--Success";case"danger":return"Alert--Danger";case"warning":return"Alert--Warning";default:return"Alert--Neutral"}}}},a=(n("TEtD"),n("psIG")),r=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-alert",{staticClass:"Alert",class:[t.variantClass],attrs:{show:t.show,variant:t.variant,dismissible:t.dismissible,"dismiss-label":t._f("translate")("Dismiss this alert")}},[n("p",[n("strong",[t._v(t._s(t._f("translate")(t.title)))]),t._v(" "),t.description?[t._v("\n            "+t._s(t._f("translate")(t.description))+"\n        ")]:t._e(),t._v(" "),t.link?n("CommonLink",{attrs:{link:t.link}},[t._v("\n            "+t._s(t._f("translate")(t.linkText))+"\n        ")]):t._e()],2),t._v(" "),n("div",{staticClass:"Alert__Actions"},[t._t("action")],2)])},[],!1,null,null,null);r.options.__file="index.vue";e.default=r.exports},MHmu:function(t,e,n){"use strict";var i=n("wv3L"),a=n.n(i);e.a={methods:{isRouteLink:function(t){if("object"===(void 0===t?"undefined":a()(t)))return!0;if(!this.$router)return!1;var e=this.$router.resolve({path:t});return!!(e.route&&e.route.matched&&e.route.matched.length&&"ErrorPage"!==e.route.matched[0].name&&"LayoutError"!==e.route.matched[0].name)}}}},TEtD:function(t,e,n){"use strict";var i=n("f/Kf");n.n(i).a},"f/Kf":function(t,e,n){}}]);