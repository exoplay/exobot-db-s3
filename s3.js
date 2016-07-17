require("source-map-support").install();
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("aws-sdk")):"function"==typeof define&&define.amd?define(["aws-sdk"],r):"object"==typeof exports?exports["s3.js"]=r(require("aws-sdk")):e["s3.js"]=r(e["aws-sdk"])}(this,function(e){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,r,t){Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=1)}([function(e,r){e.exports=require("aws-sdk")},function(e,r,t){"use strict";function n(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function n(o,u){try{var c=r[o](u),a=c.value}catch(i){return void t(i)}return c.done?void e(a):Promise.resolve(a).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}function o(e,r,t,o){var u=!(arguments.length<=4||void 0===arguments[4])&&arguments[4];return function(){var c=n(regeneratorRuntime.mark(function f(n){var c,p=this;return regeneratorRuntime.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.delegateYield(regeneratorRuntime.mark(function d(){var c;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!u){i.next=3;break}return i.next=3,s(e,r,t,o);case 3:return c=new a.a.S3({region:e,accessKeyId:r,secretAccessKey:t,params:{Bucket:o}}),i.abrupt("return",{v:new Promise(function(e,r){c.getObject({Bucket:o,Key:n},function(t,n){return t&&404===t.statusCode?e(""):t?r(t):e(n.Body.toString())})})});case 5:case"end":return i.stop()}},d,p)})(),"t0",2);case 2:if(c=f.t0,"object"!==("undefined"==typeof c?"undefined":i(c))){f.next=5;break}return f.abrupt("return",c.v);case 5:f.next=10;break;case 7:f.prev=7,f.t1=f["catch"](0),console.log(f.t1);case 10:case"end":return f.stop()}},f,this,[[0,7]])}));return function(e){return c.apply(this,arguments)}}()}function u(e,r,t,o){var u=!(arguments.length<=4||void 0===arguments[4])&&arguments[4];return function(){var c=n(regeneratorRuntime.mark(function f(n,c){var p,d=this;return regeneratorRuntime.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.delegateYield(regeneratorRuntime.mark(function v(){var i;return regeneratorRuntime.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(!u){f.next=3;break}return f.next=3,s(e,r,t,o);case 3:return i=new a.a.S3({region:e,accessKeyId:r,secretAccessKey:t,params:{Bucket:o,Key:n}}),f.abrupt("return",{v:new Promise(function(e,r){i.upload({Body:c},function(t,n){return t?r(t):void e(n)})})});case 5:case"end":return f.stop()}},v,d)})(),"t0",2);case 2:if(p=f.t0,"object"!==("undefined"==typeof p?"undefined":i(p))){f.next=5;break}return f.abrupt("return",p.v);case 5:f.next=10;break;case 7:f.prev=7,f.t1=f["catch"](0),console.log(f.t1);case 10:case"end":return f.stop()}},f,this,[[0,7]])}));return function(e,r){return c.apply(this,arguments)}}()}var c=t(0),a=c&&c.__esModule?function(){return c["default"]}:function(){return c};t.d(a,"a",a),r.readS3=o,r.writeS3=u,t.d(r,"createS3Bucket",function(){return s});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=function(){var e=n(regeneratorRuntime.mark(function r(e,t,n,o){var u;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,u=function(){var r=new a.a.S3({region:e,accessKeyId:t,secretAccessKey:n,params:{Bucket:o}});return{v:new Promise(function(e){return r.createBucket(e)})}}(),"object"!==("undefined"==typeof u?"undefined":i(u))){r.next=4;break}return r.abrupt("return",u.v);case 4:r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](0),console.log(r.t0);case 9:case"end":return r.stop()}},r,this,[[0,6]])}));return function(r,t,n,o){return e.apply(this,arguments)}}()}])});
//# sourceMappingURL=s3.js.map