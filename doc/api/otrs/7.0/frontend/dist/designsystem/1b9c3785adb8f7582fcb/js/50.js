(window.webpackJsonp=window.webpackJsonp||[]).push([[50,100],{"+J7U":function(e,t,n){var i,r,s=n("We69"),o=n("4feL"),a=0,c=0;e.exports=function(e,t,n){var l=t&&n||0,d=t||[],u=(e=e||{}).node||i,m=void 0!==e.clockseq?e.clockseq:r;if(null==u||null==m){var f=s();null==u&&(u=i=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==m&&(m=r=16383&(f[6]<<8|f[7]))}var h=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:c+1,p=h-a+(v-c)/1e4;if(p<0&&void 0===e.clockseq&&(m=m+1&16383),(p<0||h>a)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=h,c=v,r=m;var b=(1e4*(268435455&(h+=122192928e5))+v)%4294967296;d[l++]=b>>>24&255,d[l++]=b>>>16&255,d[l++]=b>>>8&255,d[l++]=255&b;var y=h/4294967296*1e4&268435455;d[l++]=y>>>8&255,d[l++]=255&y,d[l++]=y>>>24&15|16,d[l++]=y>>>16&255,d[l++]=m>>>8|128,d[l++]=255&m;for(var g=0;g<6;++g)d[l+g]=u[g];return t||o(d)}},"3m03":function(e,t,n){"use strict";n.r(t);n("W1QL"),n("K/PF"),n("75LO");var i=n("e+GP"),r=n.n(i),s=n("SDJZ"),o=n.n(s),a=n("NToG"),c=n.n(a),l=new(function(){function e(){o()(this,e)}return c()(e,[{key:"validate",value:function(e){return e&&"object"===r()(e)?Boolean(Object.keys(e).length):Boolean(e)}},{key:"errorMessage",value:function(){return"This field is required."}}]),e}());t.default=l},"4feL":function(e,t){for(var n=[],i=0;i<256;++i)n[i]=(i+256).toString(16).substr(1);e.exports=function(e,t){var i=t||0,r=n;return[r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]]].join("")}},"6/sB":function(e){e.exports=[{name:"DataType.js"},{name:"DateTime.js"},{name:"FileUpload.js"},{name:"Pattern.js"},{name:"Required.js"}]},Iptl:function(e,t,n){"use strict";n("GkPX");var i=n("nS/B");t.a={components:{CommonNotice:function(){return n.e(115).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(12).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(11).then(n.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")}}}},OvAC:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},RF5L:function(e,t,n){"use strict";n.r(t);n("4aJ6"),n("9ovy");var i=n("SDJZ"),r=n.n(i),s=n("NToG"),o=n.n(s),a=new(function(){function e(){r()(this,e)}return o()(e,[{key:"validate",value:function(e){return!!e.toString().match(/^\d{4}-\d{1,2}-\d{1,2}T\d{1,2}:\d{1,2}:\d{1,2}(.+)$/i)||!!e.toString().match(/^(\d{4})-(\d{1,2})-(\d{1,2})(\s(\d{1,2}):(\d{1,2})(:(\d{1,2}))?)?$/)}},{key:"errorMessage",value:function(){return"This field must contain a date in a valid format."}}]),e}());t.default=a},We69:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var i=new Uint8Array(16);e.exports=function(){return n(i),i}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},"e+GP":function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=i=function(e){return n(e)}:e.exports=i=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},i(t)}e.exports=i},e1y0:function(e,t,n){"use strict";n.r(t);n("W1QL"),n("K/PF"),n("75LO");var i=n("e+GP"),r=n.n(i),s=(n("4aJ6"),n("9ovy"),n("SDJZ")),o=n.n(s),a=n("NToG"),c=n.n(a),l=new(function(){function e(){o()(this,e)}return c()(e,[{key:"validate",value:function(e,t){if(0===t.length)return!0;var n=t[0];return"Int"===n?e.toString().match(/^[+-]?[\d]+$/):"PositiveInt"===n?e.toString().match(/^\+?[\d]+$/):"NegativeInt"===n?e.toString().match(/^-[\d]+$/):"Num"===n?e.toString().match(/^[+-]?[\d]+\.?[\d]*$/):"PositiveNum"===n?e.toString().match(/^\+?[\d]+\.?[\d]*$/):"NegativeNum"===n?e.toString().match(/^-[\d]+\.?[\d]*$/):"Str"===n?"string"==typeof e:"StrWithData"===n?"string"==typeof e&&""!==e:"PerlPackage"===n||("MD5"===n?e.toString().match(/^[a-f0-9]{32}$/i):"SHA1"===n?e.toString().match(/^[a-f0-9]{40}$/i):"SHA256"===n?e.toString().match(/^[a-f0-9]{64}$/i):"UUID"===n?e.toString().match(/^[0-9A-F]{8}-[0-9A-F]{4}-[12345][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i):"IPv4"===n?e.toString().match(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/m):"IPv6"===n?e.toString().match(/^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/):"HashRef"===n?"object"===r()(e):"HashRefWithData"===n?"object"===r()(e)&&Object.keys(e).length>0:"ArrayRefWithData"===n?e instanceof Array&&e.length>0:"EmailAddress"!==n||"string"==typeof e&&e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))}},{key:"errorMessage",value:function(e){if(0===e.length)return"";var t=e[0];return"Int"===t?"This field must be an integer.":"PositiveInt"===t?"This field must be a positive integer.":"NegativeInt"===t?"This field must be a negative integer.":"Num"===t?"This field must be a number.":"PositiveNum"===t?"This field must be a positive number.":"NegativeNum"===t?"This field must be a negative number.":"Str"===t?"This field must be a string.":"StrWithData"===t?"This field must be a non-empty string.":"PerlPackage"===t?"":"MD5"===t?"This field must be a valid MD5 hash.":"SHA1"===t?"This field must be a valid SHA1 hash.":"SHA256"===t?"This field must be a valid SHA256 hash.":"UUID"===t?"This field must be a valid UUID value.":"IPv4"===t?"This field must be a valid IPv4 address.":"IPv6"===t?"This field must be a valid IPv6 address.":"HashRef"===t?"This field must be a hash reference.":"HashRefWithData"===t?"This field must be a hash reference with data.":"ArrayRefWithData"===t?"This field must be an array reference with data.":"EmailAddress"===t?"This field must be a valid email address.":"This field contains an invalid value."}}]),e}());t.default=l},gki9:function(e,t,n){var i=n("OvAC");e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}},jKEF:function(e,t,n){"use strict";n.r(t);var i=n("Iptl"),r=(n("GkPX"),n("75LO"),n("W1QL"),n("K/PF"),n("gki9")),s=n.n(r),o=n("+J7U"),a=n.n(o),c=n("9va6"),l=(n("Z8gF"),n("J8hF"),n("R8iU")),d=n.n(l),u=n("6/sB"),m=function(){return function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.forEach(function(t){if(RegExp(/\.js$/).test(t.name)||t.items)if(t.items)s=e(t.items,i,"".concat(r).concat(t.name,"/"),s);else{var o=d.a.basename(t.name,".js");if("index"===o&&(o=d.a.basename(r.replace(/\/index\.js$/,"")),r=r.substr(0,r.length-o.length-1)),i&&!new RegExp("^".concat(i)).test(r))return;s[o]=n("ngLd")("./".concat(r).concat(o)).default}}),s}(u,"")},f={name:"Form",components:{CommonAlert:function(){return n.e(119).then(n.bind(null,"L3zo"))},FormGroup:function(){return n.e(120).then(n.bind(null,"yFPx"))}},props:{url:{type:String},params:{type:Object},propOverride:{type:Object},testMode:{type:Boolean,default:!1}},data:function(){return{schema:{},schemaId:null,values:{},errors:{},serverErrors:{},clientValidators:m(),formId:a()(),testSchema:{Fields:[{Name:"FormInput",Label:"Input field",Type:"FormInput",Placeholder:"This is a placeholder",Description:"This is an input field description.",Required:!0,Validators:["Required"]},{Name:"FormSelect",Label:"Select field",Type:"FormSelect",Placeholder:"Select...",Description:"This is a select field description.",Props:{Options:[{id:1,label:"Option 1"},{id:2,label:"Option 2"},{id:3,label:"Option 3"}]}},{Name:"FormTextArea",Label:"Text field",Type:"FormTextArea",Placeholder:"This is a placeholder",Description:"This is a text field description.",Required:!0,Validators:["Required"]},{Name:"FormCheckbox",Label:"Checkbox field",Type:"FormCheckbox",Description:"This is a checkbox field description."},{Name:"FormRadio",Label:"Radio field",Type:"FormRadio",Description:"This is a radio field description.",Props:{Options:[{text:"First choice",value:1},{text:"Second choice",value:2}]}}]}}},computed:{localPropOverride:function(){return s()({},this.propOverride,{formId:this.formId})},body:function(){return s()({},this.params,this.values,{FormID:this.formId})}},watch:{url:function(){this.getSchema()}},mounted:function(){this.getSchema()},methods:{setValue:function(e,t,n){var i=this.values[t];this.values[t]=n;var r=this.validateField(e,t,n);e.SubmitForm?r&&this.clientValidation(this.schema)&&this.submit():(e.UpdateForm&&this.getSchema({ChangedField:{Name:t,NewValue:n,OldValue:i}}),this.$emit("changed",this.body,{fullName:t,newValue:n,oldValue:i}))},getSchema:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.testMode?this.processSchema(this.testSchema):this.clientSendRequest({Path:this.url,Method:"post",Body:s()({},this.body,{Meta:t})}).then(function(t){e.processSchema(t.Body.Schema)}).catch(function(t){e.$log.error(t)})},processSchema:function(e){var t=this,n=e;this.schemaId=window.performance.now(),this.values={},this.initValues({Name:"",Fields:n.Fields}),this.schema=n,n.Fields.length&&this.$nextTick(function(){t.$emit("ready",t.body)}),this.errors&&this.clientValidation(this.schema,null,!0),this.$nextTick(function(){t.$test.setFlag("Form::Update",t.url)})},initValues:function(e){var t=this,n=e.Name.length>0?"".concat(e.Name,"."):"";e.Fields.forEach(function(e){"FormGroup"!==e.Type?t.$set(t.values,"".concat(n).concat(e.Name),e.Value):t.initValues({Name:n+e.Name,Fields:e.Config.Fields})})},submit:function(){var e=this;Object.keys(this.body).map(function(t){return void 0===e.body[t]&&(e.body[t]=null),e.body}),this.testMode?this.$emit("valid",this.body):this.clientSendRequest({Path:this.url,Method:"post",Body:this.body,Headers:{"X-OTRS-API-ValidateFormData":1}}).then(function(){e.$set(e,"errors",{}),e.$emit("valid",e.body),e.$nextTick(function(){e.$test.setFlag("Form::Valid",e.url)})}).catch(function(t){var n=t.response;n.Body.Errors&&(e.serverErrors=n.Body.Errors),n.Body.Schema&&(e.schema=n.Body.Schema,e.initValues({Name:"",Fields:e.schema.Fields})),422===n.Code&&e.showServerErrors(),e.$emit("invalid",t),e.$nextTick(function(){e.$test.setFlag("Form::Invalid",e.url)})})},showServerErrors:function(){var e=this;this.$set(this,"errors",{}),Object.keys(this.serverErrors).forEach(function(t){var n=Object(c.upperFirst)(Object(c.camelCase)(e.serverErrors[t].Validator)),i=e.clientValidators[n];if(i&&"function"==typeof i.errorMessage){var r=i.errorMessage(e.serverErrors[t].Attributes.Arguments);r&&e.$set(e.errors,t,r)}else e.serverErrors[t].Message&&e.$set(e.errors,t,[e.serverErrors[t].Message,e.serverErrors[t].Data])})},clientValidation:function(e,t,n){var i=this,r=!0;return e.Fields.forEach(function(e){var s;s=t?"".concat(t,".").concat(e.Name):e.Name,"FormGroup"===e.Type?i.clientValidation(e.Config,s,n)||(r=!1):n?i.errors[s]&&(i.validateField(e,s,i.values[s])||(r=!1)):i.validateField(e,s,i.values[s])||(r=!1)}),r},validateField:function(e,t,n){var i=this;if(this.errors[t]&&this.$delete(this.errors,t),void 0===e.Validators)return!0;var r=!1;return e.Validators.forEach(function(s){if(!r&&(e.Required||null!==n&&void 0!==n&&""!==n)){var o=[],a=s;s instanceof Object&&(a=s.Validator,o=s.Arguments),a=Object(c.upperFirst)(Object(c.camelCase)(a));var l=i.clientValidators[a];if(l&&"function"==typeof l.validate&&!l.validate(n,o)&&(r=!0,"function"==typeof l.errorMessage)){var d=l.errorMessage(o);d&&i.$set(i.errors,t,d)}}}),!r},resetForm:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&this.$set(this,"schema",{}),this.$set(this,"values",{}),this.formId=a()(),t&&this.getSchema(),this.$nextTick(function(){e.$set(e,"errors",{})})},onSubmit:function(){this.clientValidation(this.schema)&&this.submit()}}},h=n("psIG"),v=Object(h.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.schema.Fields?n("b-form",{key:e.schemaId,on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._t("before-form-fields"),e._v(" "),n("FormGroup",{attrs:{"set-value":e.setValue,fields:e.schema.Fields,errors:e.errors,"prop-override":e.localPropOverride},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}}),e._v(" "),e._t("after-form-fields"),e._v(" "),e._t("submit-buttons")],2):e._e()},[],!1,null,null,null);v.options.__file="index.vue";var p=v.exports,b={name:"Form",mixins:[i.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form",value:void 0,component:p,example:{url:{type:"input",default:"path/to/form/endpoint"},testMode:{default:!0}}}}},y=Object(h.a)(b,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v(e._s(e.version))])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),e._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[e._v("Header Level 2")]),e._v(" "),n("ol",{staticClass:"design-system"},[n("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),n("li",[e._v("Aliquam tincidunt mauris eu risus.")])]),e._v(" "),n("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[e._v("Do")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),e._v(" "),n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[e._v("Don't")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),e._v(" "),n("h3",{staticClass:"design-system"},[e._v("Header Level 3")]),e._v(" "),n("ul",{staticClass:"design-system"},[n("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),n("li",[e._v("Aliquam tincidunt mauris eu risus.")])])],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);y.options.__file="Form.vue";t.default=y.exports},ngLd:function(e,t,n){var i={"./DataType":"e1y0","./DataType.js":"e1y0","./DateTime":"RF5L","./DateTime.js":"RF5L","./FileUpload":"xibV","./FileUpload.js":"xibV","./Pattern":"wGFV","./Pattern.js":"wGFV","./Required":"3m03","./Required.js":"3m03","./directory-index":"6/sB","./directory-index.json":"6/sB"};function r(e){var t=s(e);return n(t)}function s(e){var t=i[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id="ngLd"},wGFV:function(e,t,n){"use strict";n.r(t);n("4aJ6"),n("9ovy"),n("J8hF");var i=n("SDJZ"),r=n.n(i),s=n("NToG"),o=n.n(s),a=new(function(){function e(){r()(this,e)}return o()(e,[{key:"validate",value:function(e,t){if(0===t.length)return!0;var n;try{n=new RegExp(t[0])}catch(e){return!0}return e.toString().match(n)}},{key:"errorMessage",value:function(e){return e&&0!==e.length?["This field must match the configured pattern: %s",e]:"This field must match the configured pattern."}}]),e}());t.default=a},xibV:function(e,t,n){"use strict";n.r(t);var i=n("SDJZ"),r=n.n(i),s=n("NToG"),o=n.n(s),a=new(function(){function e(){r()(this,e)}return o()(e,[{key:"errorMessage",value:function(){return"This field must contain a valid file upload."}}]),e}());t.default=a}}]);