import u from"./8d48302d.js";function p(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?p=function(t){return typeof t}:p=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(e)}function b(e){return $(e)||w(e)||P()}function $(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function w(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function P(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var l=typeof window<"u";function _(e){return Array.isArray(e)||p(e)==="object"?Object.freeze(e):e}function O(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.reduce(function(r,n){var s=n.passengers[0],a=typeof s=="function"?s(t):n.passengers;return r.concat(a)},[])}function x(e,t){return e.map(function(r,n){return[n,r]}).sort(function(r,n){return t(r[1],n[1])||r[0]-n[0]}).map(function(r){return r[1]})}function h(e,t){return t.reduce(function(r,n){return e.hasOwnProperty(n)&&(r[n]=e[n]),r},{})}var g={},I={},A={},z=u.extend({data:function(){return{transports:g,targets:I,sources:A,trackInstances:l}},methods:{open:function(t){if(l){var r=t.to,n=t.from,s=t.passengers,a=t.order,i=a===void 0?1/0:a;if(!(!r||!n||!s)){var f={to:r,from:n,passengers:_(s),order:i},v=Object.keys(this.transports);v.indexOf(r)===-1&&u.set(this.transports,r,[]);var d=this.$_getTransportIndex(f),c=this.transports[r].slice(0);d===-1?c.push(f):c[d]=f,this.transports[r]=x(c,function(S,T){return S.order-T.order})}}},close:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=t.to,s=t.from;if(!(!n||!s&&r===!1)&&this.transports[n])if(r)this.transports[n]=[];else{var a=this.$_getTransportIndex(t);if(a>=0){var i=this.transports[n].slice(0);i.splice(a,1),this.transports[n]=i}}},registerTarget:function(t,r,n){l&&(this.trackInstances&&!n&&this.targets[t]&&console.warn("[portal-vue]: Target ".concat(t," already exists")),this.$set(this.targets,t,Object.freeze([r])))},unregisterTarget:function(t){this.$delete(this.targets,t)},registerSource:function(t,r,n){l&&(this.trackInstances&&!n&&this.sources[t]&&console.warn("[portal-vue]: source ".concat(t," already exists")),this.$set(this.sources,t,Object.freeze([r])))},unregisterSource:function(t){this.$delete(this.sources,t)},hasTarget:function(t){return!!(this.targets[t]&&this.targets[t][0])},hasSource:function(t){return!!(this.sources[t]&&this.sources[t][0])},hasContentFor:function(t){return!!this.transports[t]&&!!this.transports[t].length},$_getTransportIndex:function(t){var r=t.to,n=t.from;for(var s in this.transports[r])if(this.transports[r][s].from===n)return+s;return-1}}}),o=new z(g),B=1,m=u.extend({name:"portal",props:{disabled:{type:Boolean},name:{type:String,default:function(){return String(B++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(Math.random()*1e7))}}},created:function(){var t=this;this.$nextTick(function(){o.registerSource(t.name,t)})},mounted:function(){this.disabled||this.sendUpdate()},updated:function(){this.disabled?this.clear():this.sendUpdate()},beforeDestroy:function(){o.unregisterSource(this.name),this.clear()},watch:{to:function(t,r){r&&r!==t&&this.clear(r),this.sendUpdate()}},methods:{clear:function(t){var r={from:this.name,to:t||this.to};o.close(r)},normalizeSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},normalizeOwnChildren:function(t){return typeof t=="function"?t(this.slotProps):t},sendUpdate:function(){var t=this.normalizeSlots();if(t){var r={from:this.name,to:this.to,passengers:b(t),order:this.order};o.open(r)}else this.clear()}},render:function(t){var r=this.$slots.default||this.$scopedSlots.default||[],n=this.tag;return r&&this.disabled?r.length<=1&&this.slim?this.normalizeOwnChildren(r)[0]:t(n,[this.normalizeOwnChildren(r)]):this.slim?t():t(n,{class:{"v-portal":!0},style:{display:"none"},key:"v-portal-placeholder"})}}),y=u.extend({name:"portalTarget",props:{multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},data:function(){return{transports:o.transports,firstRender:!0}},created:function(){var t=this;this.$nextTick(function(){o.registerTarget(t.name,t)})},watch:{ownTransports:function(){this.$emit("change",this.children().length>0)},name:function(t,r){o.unregisterTarget(r),o.registerTarget(t,this)}},mounted:function(){var t=this;this.transition&&this.$nextTick(function(){t.firstRender=!1})},beforeDestroy:function(){o.unregisterTarget(this.name)},computed:{ownTransports:function(){var t=this.transports[this.name]||[];return this.multiple?t:t.length===0?[]:[t[t.length-1]]},passengers:function(){return O(this.ownTransports,this.slotProps)}},methods:{children:function(){return this.passengers.length!==0?this.passengers:this.$scopedSlots.default?this.$scopedSlots.default(this.slotProps):this.$slots.default||[]},noWrapper:function(){var t=this.slim&&!this.transition;return t&&this.children().length>1&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),t}},render:function(t){var r=this.noWrapper(),n=this.children(),s=this.transition||this.tag;return r?n[0]:this.slim&&!s?t():t(s,{props:{tag:this.transition&&this.tag?this.tag:void 0},class:{"vue-portal-target":!0}},n)}}),j=0,C=["disabled","name","order","slim","slotProps","tag","to"],D=["multiple","transition"],M=u.extend({name:"MountingPortal",inheritAttrs:!1,props:{append:{type:[Boolean,String]},bail:{type:Boolean},mountTo:{type:String,required:!0},disabled:{type:Boolean},name:{type:String,default:function(){return"mounted_"+String(j++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(Math.random()*1e7))}},multiple:{type:Boolean,default:!1},targetSlim:{type:Boolean},targetSlotProps:{type:Object,default:function(){return{}}},targetTag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},created:function(){if(!(typeof document>"u")){var t=document.querySelector(this.mountTo);if(!t){console.error("[portal-vue]: Mount Point '".concat(this.mountTo,"' not found in document"));return}var r=this.$props;if(o.targets[r.name]){r.bail?console.warn("[portal-vue]: Target ".concat(r.name,` is already mounted.
        Aborting because 'bail: true' is set`)):this.portalTarget=o.targets[r.name];return}var n=r.append;if(n){var s=typeof n=="string"?n:"DIV",a=document.createElement(s);t.appendChild(a),t=a}var i=h(this.$props,D);i.slim=this.targetSlim,i.tag=this.targetTag,i.slotProps=this.targetSlotProps,i.name=this.to,this.portalTarget=new y({el:t,parent:this.$parent||this,propsData:i})}},beforeDestroy:function(){var t=this.portalTarget;if(this.append){var r=t.$el;r.parentNode.removeChild(r)}t.$destroy()},render:function(t){if(!this.portalTarget)return console.warn("[portal-vue] Target wasn't mounted"),t();if(!this.$scopedSlots.manual){var r=h(this.$props,C);return t(m,{props:r,attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}var n=this.$scopedSlots.manual({to:this.to});return Array.isArray(n)&&(n=n[0]),n||t()}});function k(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e.component(t.portalName||"Portal",m),e.component(t.portalTargetName||"PortalTarget",y),e.component(t.MountingPortalName||"MountingPortal",M)}var N={install:k};export{M as MountingPortal,m as Portal,y as PortalTarget,o as Wormhole,N as default};
