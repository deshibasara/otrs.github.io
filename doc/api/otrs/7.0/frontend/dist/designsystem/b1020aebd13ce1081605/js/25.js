(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"3J6x":function(t,e,s){"use strict";var n=s("YoL2");s.n(n).a},Iptl:function(t,e,s){"use strict";var n=s("nS/B");e.a={components:{CommonNotice:function(){return s.e(107).then(s.bind(null,"mkLc"))},DocsExample:function(){return s.e(6).then(s.bind(null,"GD02"))},DocsComponentAPI:function(){return s.e(7).then(s.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(n.b)(this.doc,"summary")},version:function(){return Object(n.b)(this.doc,"version")},description:function(){return Object(n.b)(this.doc,"description")},props:function(){return Object(n.a)(this.doc,"prop")},slots:function(){return Object(n.a)(this.doc,"slot")},events:function(){return Object(n.a)(this.doc,"event")},methods:function(){return Object(n.a)(this.doc,"method")}}}},YoL2:function(t,e,s){},"w+cV":function(t,e,s){"use strict";s.r(e);var n=s("Iptl"),i={name:"CommonPills",props:{items:{type:Array,required:!0},default:{type:String,required:!1}},data:function(){return{activeItem:null}},mounted:function(){this.default.length&&(this.activeItem=this.default)},methods:{switchPills:function(t){this.activeItem!==t&&(this.activeItem=t,this.$emit("change",{id:t}))}}},o=(s("3J6x"),s("psIG")),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-nav",{staticClass:"Pills",attrs:{pills:""}},t._l(t.items,function(e){return s("b-nav-item",{key:e.key,staticClass:"Pills__Item",attrs:{active:t.activeItem===e.key,"active-class":"active Pills__Item--Active"},on:{click:function(s){t.switchPills(e.key)}}},[t._v("\n        "+t._s(t._f("translate")(e.value))+"\n    ")])}))},[],!1,null,null,null).exports,c={name:"CommonPills",mixins:[n.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonPills",component:a,example:{items:{default:[{key:"item1",value:"All Tickets"},{key:"item2",value:"Closed Tickets"}],type:"object"},default:{default:"item1",type:"input"}}}}},r=Object(o.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),s("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),s("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[s("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),s("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),t._v(" "),s("b-tabs",{staticClass:"tab-content"},[s("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[s("CommonNotice",{attrs:{type:"Warning",title:"Prop 'items' not changeable",text:"Please be aware that the component expects an array of objects in prop 'items'.\n                Changing the default values is not possible in the DesignSystem!"}}),t._v(" "),s("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),s("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[s("h2",{staticClass:"design-system"},[t._v("Header Level 2")]),t._v(" "),s("ol",{staticClass:"design-system"},[s("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),s("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),s("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[s("b-row",[s("b-col",{attrs:{sm:"6"}},[s("div",[s("h5",{staticClass:"design-system"},[t._v("Do")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),t._v(" "),s("b-col",{attrs:{sm:"6"}},[s("div",[s("h5",{staticClass:"design-system"},[t._v("Don't")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),t._v(" "),s("h3",{staticClass:"design-system"},[t._v("Header Level 3")]),t._v(" "),s("ul",{staticClass:"design-system"},[s("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),s("li",[t._v("Aliquam tincidunt mauris eu risus.")])])],1),t._v(" "),s("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[s("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=r.exports}}]);