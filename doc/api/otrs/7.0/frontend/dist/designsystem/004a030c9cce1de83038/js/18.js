(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{GNaB:function(t,n,e){"use strict";e.r(n);var o=e("Iptl"),a=e("QC6T"),s=e.n(a),r=function(t,n){var e=s()(t),o=e.lightness()+n;return o>100&&(o=100),s.a.hsl([e.hue(),e.saturationl(),o]).hex()},c=function(t){var n=t,e=r(t,20);return{background:[e,"-moz-linear-gradient(top, ".concat(e," 0%, ").concat(n," 100%)"),"-webkit-gradient(linear, left top, left bottom, color-stop(0%, ".concat(e,"), color-stop(100%, ").concat(n,"))"),"-webkit-linear-gradient(top, ".concat(e," 0%, ").concat(n," 100%)"),"-o-linear-gradient(top, ".concat(e," 0%, ").concat(n," 100%)"),"-ms-linear-gradient(top, ".concat(e," 0%, ").concat(n," 100%)"),"linear-gradient(to bottom, ".concat(e," 0%, ").concat(n," 100%)")]}},i={name:"CommonHero",components:{FormInput:function(){return e.e(14).then(e.bind(null,"CJfq"))}},props:{background:{type:String,default:"BackgroundGradient"},backgroundImage:{type:String},backgroundColor:{type:String,default:"#04a1db"},title:{type:String,default:"How can we help you?"}},computed:{style:function(){var t,n,e,o,a={},i="/api/frontend/external/homepage/image";if("Background"===this.background)this.backgroundImage?(a.backgroundImage='url("'.concat(i,"?Path=").concat(this.backgroundImage,'")'),a.backgroundSize="cover"):a.backgroundColor=this.backgroundColor;else if("BackgroundGradient"===this.background)a.background=c(this.backgroundColor).background;else if("BackgroundMix"===this.background)if(this.backgroundImage){var l="".concat(i,"?Path=").concat(this.backgroundImage);a.background=(t=this.backgroundColor,n=l,e=s()(t).rgb().array(),o=s()(r(t,20)).rgb().array(),{background:["rgb(".concat(o,")"),"-moz-linear-gradient(top, rgba(".concat(o,", .2) 0%, rgba(").concat(e,", .5) 100%), url(").concat(n,")"),"-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(".concat(o,", .2)), ")+"color-stop(100%, rgba(".concat(e,", .5))), url(").concat(n,")"),"-webkit-linear-gradient(top, rgba(".concat(o,", .2) 0%, rgba(").concat(e,", .5) 100%), url(").concat(n,")"),"-o-linear-gradient(top, rgba(".concat(o,", .2) 0%, rgba(").concat(e,", .5) 100%), url(").concat(n,")"),"-ms-linear-gradient(top, rgba(".concat(o,", .2) 0%, rgba(").concat(e,", .5) 100%), url(").concat(n,")"),"linear-gradient(to bottom, rgba(".concat(o,", .2) 0%, rgba(").concat(e,", .5) 100%), url(").concat(n,")")]}).background,a.backgroundSize="cover"}else a.background=c(this.backgroundColor).background;return a}}},l=(e("tBds"),e("psIG")),u=Object(l.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-jumbotron",{staticClass:"text-center d-flex align-items-center",class:t.background,style:t.style,attrs:{fluid:""}},[e("h2",{staticClass:"Search__Title"},[t._v(t._s(t._f("translate")(t.title)))]),t._v(" "),t._t("search")],2)},[],!1,null,null,null);u.options.__file="index.vue";var d=u.exports,m={name:"CommonHero",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Common/CommonHero",component:d,example:{background:{type:"input"},title:{default:"How can we help you?",type:"input"},slots:{search:{content:"    \x3c!-- SEARCH FIELD CONTENT GOES HERE --\x3e",render:function(t){return function(){return t("b-input",{class:{"py-3":!0,"rounded-0":!0,"border-0":!0,"no-rounded-bottom":!0,"col-md-6":!0,"mx-auto":!0,shadow:!0,Search__Item:!0},props:{placeholder:"Search something...",type:"text",size:"lg"}})}}}}}}}},p=Object(l.a)(m,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),e("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),e("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[e("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),e("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),t._v(" "),e("b-tabs",{staticClass:"tab-content"},[e("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[e("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),e("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[e("h2",{staticClass:"design-system"},[t._v("Header Level 2")]),t._v(" "),e("ol",{staticClass:"design-system"},[e("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),e("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),e("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{sm:"6"}},[e("div",[e("h5",{staticClass:"design-system"},[t._v("Do")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),t._v(" "),e("b-col",{attrs:{sm:"6"}},[e("div",[e("h5",{staticClass:"design-system"},[t._v("Don't")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),t._v(" "),e("h3",{staticClass:"design-system"},[t._v("Header Level 3")]),t._v(" "),e("ul",{staticClass:"design-system"},[e("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),e("li",[t._v("Aliquam tincidunt mauris eu risus.")])])],1),t._v(" "),e("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[e("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);p.options.__file="CommonHero.vue";n.default=p.exports},Iptl:function(t,n,e){"use strict";e("GkPX");var o=e("nS/B");n.a={components:{CommonNotice:function(){return e.e(115).then(e.bind(null,"mkLc"))},DocsExample:function(){return e.e(12).then(e.bind(null,"GD02"))},DocsComponentAPI:function(){return e.e(11).then(e.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}}}},Z1Ru:function(t,n,e){},tBds:function(t,n,e){"use strict";var o=e("Z1Ru");e.n(o).a}}]);