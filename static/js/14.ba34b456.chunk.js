(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[14],{516:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return y}));var r=n(6),c=n(31),o=n(20),u=n(0),i=n(525),a=n.n(i),l=n(21),d=n(46),s=n(38),b=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},c=t.onEnterViewport,o=t.onLeaveViewport,i=Object(u.useState)(),a=Object(d.a)(i,2),l=a[1],b=Object(u.useRef)(null),f=Object(u.useRef)(!1),O=Object(u.useRef)(!1),j=Object(u.useRef)(0),p=Object(u.useRef)(0),v=Object(u.useCallback)((function(){if(e.current&&b.current){var t=Object(s.findDOMNode)(e.current);t&&b.current.observe(t)}}),[e,b]),y=Object(u.useCallback)((function(){if(e.current&&b.current){var t=Object(s.findDOMNode)(e.current);t&&(b.current.unobserve(t),b.current.disconnect(),b.current=null)}}),[e,b]),m=Object(u.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,u=t.intersectionRatio,i="undefined"!==typeof n?n:u>0;if(!O.current&&i)return O.current=!0,null===c||void 0===c||c(),j.current+=1,f.current=i,void l(i);O.current&&!i&&(O.current=!1,null===o||void 0===o||o(),r.disconnectOnLeave&&b.current&&b.current.disconnect(),p.current+=1,f.current=i,l(i))}),[b,r.disconnectOnLeave,c,o]),x=Object(u.useCallback)((function(){b.current||(b.current=new IntersectionObserver(m,n))}),[b,n,m]);return Object(u.useEffect)((function(){return x(),v(),function(){y()}}),[x,v,y]),{inViewport:f.current,enterCount:j.current,leaveCount:p.current}},f=n(723);var O,j=function(e){var t=Object(f.a)();return Object(u.useMemo)((function(){return"".concat(e,"-").concat(t)}),[e,t])},p=n(1),v=l.b.div(O||(O=Object(o.a)(["\n  height: 5rem;\n"]))),y=Object(u.createContext)({}),m=function(e){var t=e.children,n=e.onScrollToEnd,o=Object(c.a)(e,["children","onScrollToEnd"]),i=Object(u.useRef)(null),l=j("scrollable"),d=Object(u.useMemo)((function(){return{id:l}}),[l]);return b(i,{onEnterViewport:n}),Object(p.jsxs)(a.a,Object(r.a)(Object(r.a)({id:l,direction:"vertical",verticalScrollbar:"hidden",horizontalScrollbar:"hidden"},o),{},{children:[Object(p.jsx)(y.Provider,{value:d,children:t}),Object(p.jsx)(v,{ref:i})]}))}},517:function(e,t,n){"use strict";var r=n(76),c=n(0),o=n(537),u=n(142);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,i=Object(c.useMemo)((function(){return new u.c}),[]),a=Object(o.a)([e].concat(Object(r.a)(t)),(function(){return i[e].apply(i,Object(r.a)(t))}),n);return a}},518:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r,c=n(20),o=n(521),u=n.n(o),i=n(21),a=Object(i.b)(u.a)(r||(r=Object(c.a)([""])))},519:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(6),c=n(0),o=n(526),u=n.n(o),i=n(516),a=n(1),l=function(e){var t=Object(c.useContext)(i.a).id;return Object(a.jsx)(u.a,Object(r.a)({once:!0,offset:100,scrollContainer:t&&"#".concat(t)},e))};var d=l},521:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BodyTextDecorator=t.BodyTextBase=t.BodyText=t.default=void 0;var r=b(n(10)),c=b(n(3)),o=b(n(25)),u=b(n(528)),i=b(n(62)),a=n(78),l=b(n(24)),d=b(n(530)),s=n(1);function b(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var v=(0,a.MarqueeDecorator)(u.default),y=(0,r.default)({name:"BodyText",propTypes:{centered:c.default.bool,css:c.default.object,noWrap:c.default.bool,size:c.default.oneOf(["small","large"])},defaultProps:{noWrap:!1,size:"large"},styles:{css:d.default,publicClassNames:"bodyText"},computed:{className:function(e){var t=e.noWrap,n=e.size;return e.styler.append(n,{noWrap:t})}},render:function(e){var t=e.centered,n=e.css,r=e.noWrap,c=p(e,["centered","css","noWrap"]);return delete c.size,r?(0,s.jsx)(v,O(O({component:"div",marqueeOn:"render"},c),{},{alignment:t?"center":null,centered:t,css:n})):(0,s.jsx)(u.default,O(O({},c),{},{centered:t,css:n}))}});t.BodyTextBase=y;var m=(0,o.default)(i.default,l.default);t.BodyTextDecorator=m;var x=m(y);t.BodyText=x;var g=x;t.default=g},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r,c,o,u=n(76),i=n(0),a=n(102),l=n.n(a),d=n(516),s=n(20),b=n(513),f=n(524),O=n.n(f),j=n(21),p=n(519),v=n(5),y=n(1),m=Object(j.b)(p.a)(r||(r=Object(s.a)(["\n  display: inline-flex;\n  position: relative;\n  height: 20rem !important;\n  width: 20%;\n"]))),x=Object(j.b)(O.a)(c||(c=Object(s.a)(["\n  width: 100%;\n"]))),g=j.b.div(o||(o=Object(s.a)(["\n  position: absolute;\n  background: var(--main-color);\n  right: 0;\n  z-index: 1;\n  padding: 0 0.5em;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  margin-right: 0.25rem;\n"]))),h=function(e){var t=e.item,n=Object(b.e)(),r=Object(i.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&n.push(Object(v.b)(v.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,n]);return Object(y.jsxs)(m,{height:"20rem",children:[Object(y.jsx)(g,{children:null===t||void 0===t?void 0:t.new}),Object(y.jsx)(x,{source:null===t||void 0===t?void 0:t.posters.medium,caption:null===t||void 0===t?void 0:t.title,onClick:r})]})},w=function(e){var t=e.items,n=e.loading,r=e.onScrollToEnd,c=e.scrollable,o=void 0===c||c,i=Object(y.jsxs)(y.Fragment,{children:[l()(t,(function(e){return Object(y.jsx)(h,{item:e},e.id)})),n&&l()(Object(u.a)(new Array(15)),(function(e,t){return Object(y.jsx)(h,{},t)}))]});return o?Object(y.jsx)(d.b,{onScrollToEnd:r,children:i}):i}},528:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BodyTextDecorator=t.BodyTextBase=t.BodyText=t.default=void 0;var r=l(n(22)),c=l(n(10)),o=l(n(3)),u=l(n(30)),i=l(n(529)),a=n(1);function l(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var f=(0,c.default)({name:"ui:BodyText",propTypes:{centered:o.default.bool,component:r.default.renderable,componentRef:r.default.ref,css:o.default.object},defaultProps:{centered:!1,component:"p"},styles:{css:i.default,className:"bodyText",publicClassNames:!0},computed:{className:function(e){var t=e.centered;return e.styler.append({centered:t})}},render:function(e){var t=e.component,n=e.componentRef,r=b(e,["component","componentRef"]);return delete r.centered,(0,a.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({ref:n},r))}});t.BodyTextBase=f;var O=(0,u.default)({prop:"componentRef"});t.BodyTextDecorator=O;var j=O(f);t.BodyText=j;var p=j;t.default=p},529:function(e,t,n){e.exports={bodyText:"BodyText_bodyText__op4Xd",centered:"BodyText_centered__2Rx9j"}},530:function(e,t,n){e.exports={bodyText:"BodyText_bodyText__3GyCY",small:"BodyText_small__fci8d",centered:"BodyText_centered__3UeW5",noWrap:"BodyText_noWrap__3A4eY"}},537:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(548),c=n(2),o=n(520);function u(e,t,n){var u=Object(c.k)(e,t,n);return Object(o.a)(u,r.a)}},727:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));n(0);var r=n(513),c=n(522),o=n(518),u=n(517),i=n(1),a=function(){var e=Object(r.g)().collectionId,t=Object(u.a)("collectionItems",[e]),n=t.data,a=t.isLoading;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.a,{children:null===n||void 0===n?void 0:n.collection.title}),Object(i.jsx)(c.a,{items:null===n||void 0===n?void 0:n.items,loading:a})]})}}}]);
//# sourceMappingURL=14.ba34b456.chunk.js.map