(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[18],{516:function(e,n,t){"use strict";t.d(n,"b",(function(){return m})),t.d(n,"a",(function(){return p}));var c=t(6),r=t(31),i=t(20),u=t(0),o=t(525),a=t.n(o),l=t(21),b=t(46),s=t(38),j=function(e,n,t){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},r=n.onEnterViewport,i=n.onLeaveViewport,o=Object(u.useState)(),a=Object(b.a)(o,2),l=a[1],j=Object(u.useRef)(null),d=Object(u.useRef)(!1),O=Object(u.useRef)(!1),f=Object(u.useRef)(0),v=Object(u.useRef)(0),h=Object(u.useCallback)((function(){if(e.current&&j.current){var n=Object(s.findDOMNode)(e.current);n&&j.current.observe(n)}}),[e,j]),p=Object(u.useCallback)((function(){if(e.current&&j.current){var n=Object(s.findDOMNode)(e.current);n&&(j.current.unobserve(n),j.current.disconnect(),j.current=null)}}),[e,j]),m=Object(u.useCallback)((function(e){var n=e[0]||{},t=n.isIntersecting,u=n.intersectionRatio,o="undefined"!==typeof t?t:u>0;if(!O.current&&o)return O.current=!0,null===r||void 0===r||r(),f.current+=1,d.current=o,void l(o);O.current&&!o&&(O.current=!1,null===i||void 0===i||i(),c.disconnectOnLeave&&j.current&&j.current.disconnect(),v.current+=1,d.current=o,l(o))}),[j,c.disconnectOnLeave,r,i]),x=Object(u.useCallback)((function(){j.current||(j.current=new IntersectionObserver(m,t))}),[j,t,m]);return Object(u.useEffect)((function(){return x(),h(),function(){p()}}),[x,h,p]),{inViewport:d.current,enterCount:f.current,leaveCount:v.current}},d=t(723);var O,f=function(e){var n=Object(d.a)();return Object(u.useMemo)((function(){return"".concat(e,"-").concat(n)}),[e,n])},v=t(1),h=l.b.div(O||(O=Object(i.a)(["\n  height: 5rem;\n"]))),p=Object(u.createContext)({}),m=function(e){var n=e.children,t=e.onScrollToEnd,i=Object(r.a)(e,["children","onScrollToEnd"]),o=Object(u.useRef)(null),l=f("scrollable"),b=Object(u.useMemo)((function(){return{id:l}}),[l]);return j(o,{onEnterViewport:t}),Object(v.jsxs)(a.a,Object(c.a)(Object(c.a)({id:l,direction:"vertical",verticalScrollbar:"hidden",horizontalScrollbar:"hidden"},i),{},{children:[Object(v.jsx)(p.Provider,{value:b,children:n}),Object(v.jsx)(h,{ref:o})]}))}},518:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var c=t(6),r=t(0),i=t(526),u=t.n(i),o=t(516),a=t(1),l=function(e){var n=Object(r.useContext)(o.a).id;return Object(a.jsx)(u.a,Object(c.a)({once:!0,offset:100,scrollContainer:n&&"#".concat(n)},e))};var b=l},519:function(e,n,t){"use strict";var c=t(0),r=t(544),i=t(142);n.a=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),u=1;u<n;u++)t[u-1]=arguments[u];var o=Object(c.useMemo)((function(){return new i.c}),[]),a=Object(r.a)([e].concat(t),(function(){return o[e].apply(o,t)}));return a}},544:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var c=t(553),r=t(2),i=t(522);function u(e,n,t){var u=Object(r.l)(e,n,t);return Object(i.a)(u,c.a)}},582:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var c,r=t(6),i=t(31),u=t(20),o=t(0),a=t(599),l=t.n(a),b=t(21),s=t(1),j=b.b.div(c||(c=Object(u.a)(["\n  display: inline-flex;\n\n  > div {\n    width: 100%;\n  }\n"]))),d=function(e){var n=e.autoFocus,t=Object(i.a)(e,["autoFocus"]),c=Object(o.useRef)(null);return Object(o.useEffect)((function(){var e;return n&&(e=requestAnimationFrame((function(){var e,n;null===(e=c.current)||void 0===e||null===(n=e.querySelector("input"))||void 0===n||n.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[c,n]),Object(s.jsx)(j,{ref:c,children:Object(s.jsx)(l.a,Object(r.a)({},t))})}},721:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return S}));var c,r,i,u=t(46),o=t(20),a=t(0),l=t(21),b=t(78),s=t(102),j=t.n(s),d=t(513),O=t(524),f=t.n(O),v=t(518),h=t(5),p=t(1),m=Object(l.b)(v.a)(c||(c=Object(o.a)(["\n  display: inline-flex;\n  position: relative;\n  height: 20rem !important;\n  width: 20%;\n"]))),x=Object(l.b)(f.a)(r||(r=Object(o.a)(["\n  width: 100%;\n"]))),w=function(e){var n=e.collection,t=Object(d.e)(),c=Object(a.useCallback)((function(){(null===n||void 0===n?void 0:n.id)&&t.push(Object(h.b)(h.a.Collection,{collectionId:n.id}))}),[null===n||void 0===n?void 0:n.id,t]);return Object(p.jsx)(m,{height:"20rem",children:Object(p.jsx)(x,{source:null===n||void 0===n?void 0:n.posters.medium,caption:null===n||void 0===n?void 0:n.title,onClick:c})})},C=t(516),g=function(e){var n=e.collections,t=e.loading;return Object(p.jsxs)(C.b,{children:[j()(n,(function(e){return Object(p.jsx)(w,{collection:e},e.id)})),t&&j()(Object(b.a)(new Array(15)),(function(e,n){return Object(p.jsx)(w,{},n)}))]})},k=t(582),R=t(519),y=Object(l.b)(k.a)(i||(i=Object(o.a)(["\n  margin-bottom: 1rem;\n"]))),S=function(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(R.a)("collections",t,"watchers-"),i=r.data,o=r.isLoading,l=Object(a.useCallback)((function(e){var n=e.value;c(n)}),[c]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0431\u043e\u0440\u043a\u0438...",value:t,onChange:l}),Object(p.jsx)(g,{collections:null===i||void 0===i?void 0:i.items,loading:o})]})}}}]);
//# sourceMappingURL=18.3edbcc51.chunk.js.map