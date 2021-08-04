(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[14],{1052:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return S}));var c=t(26),a=t.n(c),i=t(88),l=t(45),r=t(14),s=t(61),u=t(1),o=t(894),d=t.n(o),j=t(932),b=t.n(j),f=t(171),O=t.n(f),v=t(234),h=t(897),x=t(905),m=t(943),p=t(942),k=t(915),g=t(2),N=function(e){var n=e.label,t=e.options,c=e.defaultValue,a=e.value,i=e.onChange,l=e.closeOnChange,r=Object(u.useState)(!1),o=Object(s.a)(r,2),d=o[0],j=o[1],b=Object(k.a)(a||c),f=Object(s.a)(b,2),v=f[0],h=f[1],x=Object(u.useMemo)((function(){return Array.isArray(t)?t.map((function(e,n){return"string"===typeof e?{title:e,value:n}:e})):[]}),[t]),N=Object(u.useMemo)((function(){return x.find((function(e){return e.value===v}))}),[x,v]),C=Object(u.useCallback)((function(e){h(e),null===i||void 0===i||i(e),l&&j(!1)}),[h,i,l]),y=Object(u.useCallback)((function(e){return function(n){n&&C(e.value)}}),[C]);return Object(g.jsx)(m.a,{open:d,onToggle:j,title:n,subtitle:null===N||void 0===N?void 0:N.title,children:Object(g.jsx)("div",{className:"flex flex-col",children:O()(x,(function(e){return Object(g.jsx)(p.a,{checked:e.value===v,onChange:y(e),children:e.title},e.value)}))})})},C=t(235),y=t(888),w=t(176),M=t(354),A=function(e){var n=e.setting,t=e.onChange;return Object(g.jsx)(x.a,{className:"w-full",defaultChecked:n.value===v.a.True,onChange:t,children:n.label})},F=function(e){var n=e.setting,t=e.onChange,c=Object(u.useMemo)((function(){return O()(n.value,(function(e){return"".concat(e.label," ").concat(e.description?"(".concat(e.description,")"):"")}))}),[n.value]);return Object(g.jsx)(N,{defaultValue:b()(n.value,(function(e){return e.selected===v.a.True})),label:n.label,onChange:t,options:c,closeOnChange:!0})},S=function(){var e,n,t=Object(y.a)("user").data,c=Object(y.a)("deviceInfo").data,o=Object(w.a)("saveDeviceSettings").saveDeviceSettingsAsync,j=Object(w.a)("deactivate").deactivate,b=Object(u.useState)({}),f=Object(s.a)(b,2),v=f[0],x=f[1],m=Object(M.a)(),p=m.software,k=m.hardware,N=Object(u.useMemo)((function(){var e;return d()(O()(null===c||void 0===c||null===(e=c.device)||void 0===e?void 0:e.settings,(function(e,n){return Object(r.a)(Object(r.a)({},e),{},{key:n})})),(function(e){return"undefined"===typeof e.type}))}),[null===c||void 0===c||null===(e=c.device)||void 0===e?void 0:e.settings]),S=Object(u.useMemo)((function(){var e;return d()(O()(null===c||void 0===c||null===(e=c.device)||void 0===e?void 0:e.settings,(function(e,n){return Object(r.a)(Object(r.a)({},e),{},{key:n})})),(function(e){return"list"===e.type}))}),[null===c||void 0===c||null===(n=c.device)||void 0===n?void 0:n.settings]),T=Object(u.useCallback)((function(e){return function(){var n=Object(l.a)(a.a.mark((function n(t){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:x(Object(r.a)(Object(r.a)({},v),{},Object(i.a)({},e.key,t)));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}),[v]),D=Object(u.useCallback)((function(e){return function(n){x(Object(r.a)(Object(r.a)({},v),{},Object(i.a)({},e.key,e.value[n].id)))}}),[v]),E=Object(u.useCallback)(Object(l.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o([null===c||void 0===c?void 0:c.device.id,v]);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)}))),[v,null===c||void 0===c?void 0:c.device,o]),J=Object(u.useCallback)((function(){j([])}),[j]);return Object(g.jsxs)("div",{className:"h-screen relative",children:[Object(g.jsx)(C.a,{className:"m-1 mb-3",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"}),Object(g.jsx)("div",{className:"flex flex-col",children:(null===c||void 0===c?void 0:c.device)&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"flex flex-wrap pb-4",children:O()(N,(function(e){return Object(g.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(g.jsx)(A,{setting:e,onChange:T(e)})},e.key)}))},"bool-".concat(null===c||void 0===c?void 0:c.device.updated)),Object(g.jsx)("div",{className:"flex flex-wrap pb-4",children:O()(S,(function(e){return Object(g.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(g.jsx)(F,{setting:e,onChange:D(e)})},e.key)}))},"list-".concat(null===c||void 0===c?void 0:c.device.updated))]}),Object(g.jsx)("div",{className:"flex my-8",children:Object(g.jsx)(h.a,{icon:"done",onClick:E,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})}),Object(g.jsxs)("div",{className:"flex justify-between absolute bottom-0 left-0 right-0 py-2",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(C.a,{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),Object(g.jsxs)("div",{className:"flex items-center",children:[(null===t||void 0===t?void 0:t.user)&&Object(g.jsxs)(C.a,{className:"mr-4",children:[t.user.profile.name||t.user.username," (",Math.floor(t.user.subscription.days)," \u0434\u043d.)"]}),Object(g.jsx)(h.a,{icon:"logout",onClick:J,children:"\u0412\u044b\u0445\u043e\u0434"})]})]}),Object(g.jsxs)("div",{className:"flex flex-col items-end pr-4",children:[Object(g.jsx)(C.a,{children:k}),Object(g.jsx)(C.a,{children:p})]})]})]})}},888:function(e,n,t){"use strict";var c=t(90),a=t(1),i=t(895),l=t(234);n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,r=Object(a.useMemo)((function(){return new l.c}),[]),s=Object(i.a)([e].concat(Object(c.a)(n)),(function(){return r[e].apply(r,Object(c.a)(n))}),t);return s}},897:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var c=t(14),a=t(47),i=t(1),l=t(41),r=t.n(l),s=t(238),u=t(233),o=t(2),d=["icon","iconOnly","children","autoFocus","className"],j=function(e){var n=e.icon,t=e.iconOnly,l=e.children,j=e.autoFocus,b=e.className,f=Object(a.a)(e,d),O=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e;return j&&(e=requestAnimationFrame((function(){var e,n;null===(e=O.current)||void 0===e||null===(n=e.node)||void 0===n||n.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[O,j]),Object(o.jsx)(u.a,Object(c.a)(Object(c.a)({},f),{},{ref:O,className:r()("text-primary whitespace-nowrap cursor-pointer rounded px-2 py-1",b),role:"button",children:Object(o.jsxs)("div",{className:"flex items-center",children:[n&&Object(o.jsx)(s.a,{className:r()({"mr-2":!t}),name:n}),!t&&l]})}))}},905:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var c=t(14),a=t(47),i=t(1),l=t(41),r=t.n(l),s=t(233),u=t(241),o=t(2),d=["defaultChecked","checked","onChange","className","children"],j=function(e){var n=e.defaultChecked,t=e.checked,l=e.onChange,j=e.className,b=e.children,f=Object(a.a)(e,d),O=Object(i.useRef)(null),v=Object(i.useCallback)((function(e){null===l||void 0===l||l(e.target.checked,e)}),[l]),h=Object(i.useCallback)((function(e){Object(u.b)(e)&&O.current&&O.current.click()}),[O]);return Object(o.jsx)(s.a,{component:"label",className:r()("text-primary p-2",j),onKeyPress:h,children:Object(o.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(o.jsx)("input",Object(c.a)(Object(c.a)({type:"checkbox"},f),{},{ref:O,className:"inline-block w-4 h-4",defaultChecked:n,checked:t,onChange:v})),Object(o.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:b})]})})}},915:function(e,n,t){"use strict";var c=t(61),a=t(1);n.a=function(e){var n=Object(a.useState)(e),t=Object(c.a)(n,2),i=t[0],l=t[1];return Object(a.useEffect)((function(){l(e)}),[e]),[i,l]}},942:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var c=t(14),a=(t(1),t(905)),i=t(2),l=function(e){return Object(i.jsx)(a.a,Object(c.a)(Object(c.a)({},e),{},{type:"radio"}))}},943:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var c=t(61),a=t(1),i=t(41),l=t.n(i),r=t(238),s=t(233),u=t(235),o=t(915),d=t(2),j=function(e){var n=e.open,t=e.onToggle,i=e.title,j=e.subtitle,b=e.className,f=e.children,O=Object(o.a)(n),v=Object(c.a)(O,2),h=v[0],x=v[1],m=Object(a.useCallback)((function(){x((function(e){var n=!e;return null===t||void 0===t||t(n),n}))}),[x,t]);return Object(d.jsxs)("div",{className:"flex flex-col w-full",children:[Object(d.jsx)(s.a,{onClick:m,className:l()("p-1 cursor-pointer",b),children:Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)(u.a,{children:i}),Object(d.jsx)(r.a,{name:h?"expand_less":"expand_more"})]}),!h&&j&&Object(d.jsx)(u.a,{className:"mt-2",children:j})]})}),h&&f]})}}}]);
//# sourceMappingURL=14.326efb2c.chunk.js.map