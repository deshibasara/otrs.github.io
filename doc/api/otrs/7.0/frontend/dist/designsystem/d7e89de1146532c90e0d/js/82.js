(window.webpackJsonp=window.webpackJsonp||[]).push([[82,115],{Iptl:function(t,e,n){"use strict";var a=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(116).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(7).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(8).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(a.b)(this.doc,"summary")},version:function(){return Object(a.b)(this.doc,"version")},description:function(){return Object(a.b)(this.doc,"description")},props:function(){return Object(a.a)(this.doc,"prop")},slots:function(){return Object(a.a)(this.doc,"slot")},events:function(){return Object(a.a)(this.doc,"event")},methods:function(){return Object(a.a)(this.doc,"method")}}}},QGlj:function(t,e,n){"use strict";var a=n("pmD6");n.n(a).a},VLjf:function(t,e,n){"use strict";n.r(e);var a=n("Iptl"),s=n("9va6"),i={name:"LayoutSubPageHeader",components:{CommonBreadcrumb:n("W0aG").default},props:{title:{type:String,required:!0},variant:{type:String,default:"secondary"},breadcrumb:{type:Object,default:function(){return{items:[]}}},navigation:{type:Array,default:function(){return[]}},button:{type:Object,default:function(){return{title:null,to:null}}}},data:function(){return{currentNavigation:this.cloneNavigation()}},computed:{buttonClass:function(){return"PageHeader--BackgroundSecondary"===this.backgroundVariant?"Button--Secondary":"Button--PrimaryInverted"},backgroundVariant:function(){return"primary"===this.variant?"PageHeader--BackgroundPrimary":"PageHeader--BackgroundSecondary"}},watch:{navigation:function(){this.currentNavigation=this.cloneNavigation()}},methods:{setCurrentNav:function(t){var e=this;if(!t.active){var n=null;this.currentNavigation.forEach(function(a,s){a.name===t.name?(a.active=!0,n=e.navigation[s]):a.active=!1}),this.$emit("change-tab",n)}},cloneNavigation:function(){var t=Object(s.cloneDeep)(this.navigation),e=!1;return t.forEach(function(t){Object.prototype.hasOwnProperty.call(t,"active")||(t.active=!1),t.active&&(e=!0)}),!e&&t.length&&(t[0].active=!0),t}}},o=(n("QGlj"),n("psIG")),r=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"mb-5 PageHeader",class:t.backgroundVariant,attrs:{fluid:""}},[n("b-container",[t.breadcrumb.items.length?n("b-row",[n("b-col",{staticClass:"px-0 px-xl-3"},[n("b-nav",{attrs:{tag:"nav","aria-label":"breadcrumb"}},[n("CommonBreadcrumb",{staticClass:"px-0 mt-3 mb-2",attrs:{items:t.breadcrumb.items,size:t.breadcrumb.size}})],1)],1)],1):t._e(),t._v(" "),n("b-row",[n("b-col",{staticClass:"d-flex justify-content-start px-0 px-xl-3",attrs:{md:"10"}},[n("h1",{staticClass:"PageHeader__Title"},[t._v(t._s(t._f("translate")(t.title)))])]),t._v(" "),n("b-col",{staticClass:"col text-right pr-0 px-xl-3"},[t.button.title?n("b-button",{staticClass:"mt-1 mt-md-0 PageHeader__Button Button",class:t.buttonClass,attrs:{to:t.button.to,size:"lg"}},[t._v("\n                    "+t._s(t._f("translate")(t.button.title))+"\n                ")]):t._e()],1)],1),t._v(" "),t.currentNavigation.length>1?n("b-row",[n("b-col",{staticClass:"pt-2 pt-xl-0 px-0 px-xl-3"},[n("b-nav",{staticClass:"PageHeaderNav"},t._l(t.currentNavigation,function(e){return n("b-nav-item",{key:e.name,staticClass:"PageHeaderNav__Item",attrs:{active:e.active,to:e.link,"active-class":"PageHeaderNav--Active"},on:{click:function(n){t.setCurrentNav(e)}}},[t._v("\n                        "+t._s(t._f("translate")(e.name))+"\n                    ")])}))],1)],1):t._e()],1)],1)},[],!1,null,null,null);r.options.__file="index.vue";var c=r.exports,l={name:"LayoutSubPageHeader",mixins:[a.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Layout/LayoutSubPageHeader",component:c,example:{title:{type:"input",default:"Test Title"},variant:{default:"primary",type:"select",options:[{value:"primary",text:"primary"},{value:"secondary",text:"secondary"}]},breadcrumb:{default:{items:[{name:"HomePage",link:"#"},{name:"Library",link:"#"},{name:"Data",active:!0}],size:"sm"}},button:{default:{title:"Home",to:{name:"Home"}}},navigation:{default:[{name:"Knowledge Base",link:"#"},{name:"Services",link:"#"},{name:"CustomLink",link:"#",active:!0},{name:"CustomLink2",link:"#"}]}}}}},u=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),t._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[t._v("Header Level 2")]),t._v(" "),n("ol",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),n("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Do")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),t._v(" "),n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Don't")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),t._v(" "),n("h3",{staticClass:"design-system"},[t._v("Header Level 3")]),t._v(" "),n("ul",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])])],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);u.options.__file="LayoutSubPageHeader.vue";e.default=u.exports},W0aG:function(t,e,n){"use strict";n.r(e);var a={name:"CommonBreadcrumb",props:{items:{type:Array,required:!0},size:{type:String}},computed:{sizeClass:function(){return"sm"===this.size?"Breadcrumb--Smaller":""}}},s=(n("aFWd"),n("psIG")),i=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("b-breadcrumb",{staticClass:"Breadcrumb",class:t.sizeClass},t._l(t.items,function(e,a){return n("b-breadcrumb-item",{key:a,staticClass:"Breadcrumb__Item",attrs:{text:t._f("translate")(e.name),to:e.link,active:e.active,"aria-current":e.active?"page":null}})})):t._e()},[],!1,null,null,null);i.options.__file="index.vue";e.default=i.exports},aFWd:function(t,e,n){"use strict";var a=n("heo6");n.n(a).a},heo6:function(t,e,n){},pmD6:function(t,e,n){}}]);