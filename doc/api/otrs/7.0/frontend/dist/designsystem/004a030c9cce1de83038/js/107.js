(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{"433n":function(e,t,a){"use strict";a.r(t);a("GkPX"),a("K/PF"),a("75LO"),a("W1QL");var l={name:"FormUpload",directives:{focus:{inserted:function(e,t){t.value&&e.querySelector("input").focus()}}},mixins:[a("A86J").a],props:{name:{type:String},formId:{type:String,required:!0},uploadPath:{type:String,required:!0},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1},placeholder:{type:String,default:"Select or drop files here."},multiple:{type:Boolean,default:!0},testMode:{type:Boolean,default:!1},fileIcon:{type:String,default:"file"},displayValue:{type:Object},value:{type:[Array,Object]}},data:function(){return{files:[],uploads:{},localValue:{}}},computed:{fieldId:function(){return"formUpload-".concat(this._uid)},hasUploadError:function(){var e=this,t=!1;return Object.keys(this.uploads).forEach(function(a){"danger"===e.uploads[a].variant&&(t=!0)}),t}},watch:{localValue:function(e){this.$emit("input",e)},displayValue:function(){this.uploads={}}},mounted:function(){this.initSelectedFiles()},methods:{uploadFiles:function(){var e=this,t=this.files;Array.isArray(t)||(t=[],null!==this.files&&t.push(this.files)),t.length&&(this.multiple||Object.keys(this.uploads).forEach(function(t){var a=e.uploads[t];e.deleteFile(a.fieldId,a.filename)}),t.forEach(function(t){if(e.$set(e.uploads,t.name,{filename:t.name,fileId:null,progress:0,variant:""}),e.testMode)return e.$nextTick(function(){e.uploads[t.name].progress=100}),Math.floor(2*Math.random())?e.uploadFileDisplay(Object.keys(e.uploads).length+1,t.name):(e.$refs.uploadFile.reset(),e.uploads[t.name].variant="danger"),void(e.files=[]);var a=new FormData;a.append("Upload",t),a.append("Disposition","attachment"),e.clientSendRequest({Path:"".concat(e.uploadPath,"/").concat(e.formId),Method:"post",Body:a},{xhr:!0,responseType:"json",responseTimeout:0,onUploadProgress:function(a){a.lengthComputable?e.uploads[t.name].progress=100*a.loaded/a.total:e.uploads[t.name].variant="warning"}}).then(function(a){e.uploadFileDisplay(a.Body.FileID,t.name),e.files=[]}).catch(function(a){e.$log.error(a),e.$refs.uploadFile.reset(),e.uploads[t.name].variant="danger",e.files=[]})}))},uploadFileDisplay:function(e,t){this.$refs.uploadFile.reset(),this.$set(this.uploads[t],"fileId",e),this.$set(this.uploads[t],"variant","success"),this.$set(this.localValue,e,t),this.$emit("input",this.localValue)},deleteFile:function(e,t){var a=this;if(e&&!this.testMode)this.clientSendRequest({Path:"".concat(this.uploadPath,"/").concat(this.formId),Method:"delete",Body:{Filename:t}}).then(function(){a.$delete(a.uploads,t),a.$delete(a.localValue,e)}).catch(function(e){a.$log.error(e),a.uploads[t].variant="danger"});else if(e)this.$delete(this.uploads,t),this.$delete(this.localValue,e);else{var l=this.uploads[t].fileId;this.$delete(this.uploads,t),this.localValue[l]&&this.$delete(this.localValue,l)}},reset:function(){this.files=[],this.$refs.uploadFile.reset(),this.uploads={},this.localValue={}},initSelectedFiles:function(){var e=this,t=this.value;t&&(Array.isArray(t)||(t=[t]),t.forEach(function(t){t&&Object.keys(t).forEach(function(a){var l=a,i=t[a];e.$set(e.uploads,i,{fileId:l,filename:i,variant:"success",progress:100}),e.$set(e.localValue,l,i)})}))}}},i=a("psIG"),s=Object(i.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[a("b-form-file",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"uploadFile",attrs:{id:e.fieldId,name:e.name,placeholder:e._f("translate")(e.placeholder),multiple:e.multiple},on:{input:function(t){e.uploadFiles()}},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),e._v(" "),a("div",{staticClass:"container-fluid"},[e.hasUploadError?a("small",{staticClass:"form-text Form--Danger Form__Help"},[a("CommonIcon",{attrs:{icon:"exclamation-circle"}}),e._v("\n            "+e._s(e._f("translate")("Something went wrong, please try again later."))+"\n        ")],1):e._e(),e._v(" "),e.displayValue?a("b-row",[a("b-col",{staticClass:"FormUpload__CurrentValue"},e._l(e.displayValue,function(t,l){return a("div",{key:"file-"+l},[a("CommonIcon",{attrs:{icon:e.fileIcon}}),e._v(" "+e._s(t)+"\n                ")],1)}))],1):e._e(),e._v(" "),e._l(e.uploads,function(t){return a("b-row",{key:t.filename,staticClass:"mt-2",attrs:{"align-v":"center"}},[a("b-col",[a("b-progress",{staticClass:"Form__Progress",attrs:{max:100}},[a("b-progress-bar",{staticClass:"Form__ProgressBar",attrs:{value:t.progress,variant:t.variant,label:t.filename}})],1)],1),e._v(" "),a("b-col",{attrs:{cols:"0"}},[a("CommonLink",{staticClass:"Form__UploadDelete",on:{click:function(a){e.deleteFile(t.fileId,t.filename)}}},[a("CommonIcon",{attrs:{icon:"times",size:"md"}})],1)],1)],1)})],2)],1)},[],!1,null,null,null);s.options.__file="FormUpload.vue";t.default=s.exports},A86J:function(e,t,a){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}}}]);