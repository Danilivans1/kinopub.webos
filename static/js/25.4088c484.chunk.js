(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[25],{1074:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n(11),c=n(2),a=n(32),u=n(930),o=n(888),i=n(928),l=n(3),s=function(){var e=Object(a.h)(),t=Object(a.i)().state||{},n=t.item,s=t.trailer,d=Object(c.useMemo)((function(){return{title:n.title,description:"\u0422\u0440\u0435\u0439\u043b\u0435\u0440",poster:n.posters.wide||n.posters.big,sources:Object(i.b)([s])}}),[n,s]),b=Object(c.useCallback)((function(){e.goBack()}),[e]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440: ".concat(n.title," - \u0422\u0440\u0435\u0439\u043b\u0435\u0440")}),Object(l.jsx)(u.a,Object(r.a)(Object(r.a)({},d),{},{onEnded:b}))]})}},888:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(11),c=n(893),a=n(3),u=function(e){return Object(a.jsx)(c.a,Object(r.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},897:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(11),c=n(57),a=n(2),u=n(52),o=n.n(u),i=n(257),l=n(251),s=n(3),d=["icon","iconOnly","children","autoFocus","className"],b=function(e){var t=e.icon,n=e.iconOnly,u=e.children,b=e.autoFocus,f=e.className,j=Object(c.a)(e,d),O=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;return b&&(e=requestAnimationFrame((function(){var e,t;null===(e=O.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[O,b]),Object(s.jsx)(l.a,Object(r.a)(Object(r.a)({},j),{},{ref:O,className:o()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",f),role:"button",children:Object(s.jsxs)("div",{className:"flex items-center",children:[t&&Object(s.jsx)(i.a,{className:o()({"mr-2":!n}),name:t}),!n&&u]})}))}},901:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(11),c=n(57),a=n(2),u=n(52),o=n.n(u),i=n(251),l=n(260),s=n(3),d=["defaultChecked","checked","onChange","className","children"],b=function(e){var t=e.defaultChecked,n=e.checked,u=e.onChange,b=e.className,f=e.children,j=Object(c.a)(e,d),O=Object(a.useRef)(null),v=Object(a.useCallback)((function(e){null===u||void 0===u||u(e.target.checked,e)}),[u]),k=Object(a.useCallback)((function(e){var t;Object(l.a)(e,"Enter")&&(null===(t=O.current)||void 0===t||t.click())}),[]);return Object(s.jsx)(i.a,{component:"label",className:o()("text-gray-200 p-2",b),onKeyPress:k,role:"button",children:Object(s.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(s.jsx)("input",Object(r.a)(Object(r.a)({type:"checkbox"},j),{},{ref:O,className:"inline-block w-4 h-4",defaultChecked:t,checked:n,onChange:v})),Object(s.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:f})]})})}},922:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(11),c=n(57),a=n(2),u=n(256),o=n.n(u),i=n(52),l=n.n(i),s=n(925),d=n.n(s),b=n(3),f=d()({enterTo:"default-element",defaultElement:".spottable",selector:".spottable",overflow:!0,preserveId:!0},(function(e){return Object(b.jsx)("div",Object(r.a)({},e))})),j=n(255),O=["visible","onClose","className"],v=function(e){var t=e.visible,n=e.onClose,u=e.className,i=Object(c.a)(e,O),s=Object(a.useMemo)((function(){return o.a.add({})}),[]),d=Object(a.useCallback)((function(){n(!1)}),[n]),v=Object(a.useCallback)((function(){if(t)return d(),!1}),[t,d]),k=Object(a.useCallback)((function(){if(!o.a.focus(s)){var e=o.a.getCurrent();e&&e.blur(),o.a.setActiveContainer(s),setTimeout((function(){o.a.setPointerMode(!1),o.a.focus(s)}),500)}}),[s]);return Object(j.a)("Back",v),Object(j.a)("Blue",v),Object(a.useEffect)((function(){t&&k()}),[t,k]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:l()("fixed z-999 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50",{hidden:!t}),onClick:d}),Object(b.jsx)(f,Object(r.a)(Object(r.a)({},i),{},{spotlightId:s,spotlightRestrict:"self-only",spotlightDisabled:!t,className:l()("fixed z-999 bottom-0 left-0 right-0 p-4 bg-black ring",{hidden:!t},u)}))]})}},924:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(11),c=(n(2),n(901)),a=n(3),u=function(e){return Object(a.jsx)(c.a,Object(r.a)(Object(r.a)({},e),{},{type:"radio"}))}},928:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return j}));var r=n(898),c=n.n(r),a=n(193),u=n.n(a),o=n(929),i=n.n(o),l=n(954),s=n.n(l),d=function(e){return e<10?"0".concat(e):e};function b(e){return u()(e,(function(e,t){var n,r,a,u,o,i,l;return{lang:e.lang,name:c()(["".concat(d(t+1),"."),(null===(n=e.type)||void 0===n?void 0:n.title)&&(null===(r=e.author)||void 0===r?void 0:r.title)?"".concat(null===(a=e.type)||void 0===a?void 0:a.title,"."):null===(u=e.type)||void 0===u?void 0:u.title,null===(o=e.author)||void 0===o?void 0:o.title,(null===(i=e.type)||void 0===i?void 0:i.title)||(null===(l=e.author)||void 0===l?void 0:l.title)?"(".concat(s()(e.lang),")"):s()(e.lang),"aac"!==e.codec&&s()(e.codec)]).join(" ")}}))}function f(e,t){return i()(u()(e,(function(e){var n="string"===typeof e.url?e.url:e.url[t]||e.url.http;return{src:n,name:e.quality,type:n.includes(".m3u8")?"application/x-mpegURL":"video/mp4"}})),(function(e){var t=e.name;return parseInt(t)}),"desc")}function j(e){return u()(e,(function(e,t){return{src:e.url,lang:e.lang,name:"".concat(s()(e.lang)," #").concat(d(t+1))}}))}},930:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var r=n(11),c=n(31),a=n.n(c),u=n(53),o=n(73),i=n(57),l=n(2),s=n.n(l),d=n(938),b=n.n(d),f=n(93),j=n(52),O=n.n(j),v=n(942),k=n.n(v),m=n(936),p=n.n(m),h=n(949),T=n.n(h),g=n(899),x=n.n(g),y=n(89),C=n(90),w=function(){function e(t){Object(y.a)(this,e),this.resource=void 0,this.objectURL=void 0,this.resource=t}return Object(C.a)(e,[{key:"blobToBuffer",value:function(){var e=this;return new Promise((function(t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(new Uint8Array(r))})),r.addEventListener("error",(function(){return n("Error while reading the Blob object")})),r.readAsArrayBuffer(e.resource)}))}},{key:"getURL",value:function(){var t=this;return new Promise((function(n,r){return t.resource instanceof Blob?FileReader?TextDecoder?e.blobToString(t.resource,(function(r){var c="WEBVTT FILE\r\n\r\n".concat(e.toVTT(r)),a=new Blob([c],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(a),n(t.objectURL)}),(function(){t.blobToBuffer().then((function(r){var c=new TextDecoder("utf-8").decode(r),a="WEBVTT FILE\r\n\r\n".concat(e.toVTT(c)),u=new Blob([a],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(u),n(t.objectURL)}))})):r("No TextDecoder constructor found"):r("No FileReader constructor found"):r("Expecting resource to be a Blob but something else found.")}))}},{key:"release",value:function(){URL.createObjectURL(this.objectURL)}}],[{key:"blobToString",value:function(e,t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(r)})),r.addEventListener("error",(function(){return n()})),r.readAsText(e)}},{key:"toVTT",value:function(e){return e.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}},{key:"toTypedArray",value:function(e){var t=[];return e.split("").forEach((function(e){t.push(parseInt("".concat(e.charCodeAt(0)),16))})),Uint8Array.from(t)}}]),e}();function S(){return(S=Object(u.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.blob();case 4:return n=e.sent,r=new w(n),e.abrupt("return",r.getURL());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=n(3),E=["autoPlay","audioTracks","sourceTracks","subtitleTracks","streamingType","onUpdate","className","mediaComponent"];function R(e){var t=e.autoPlay,n=e.audioTracks,r=e.sourceTracks,c=e.subtitleTracks,a=e.streamingType,u=Object(l.useRef)(null),i=Object(l.useRef)(null),s=Object(l.useRef)(0),d=Object(l.useState)(null===n||void 0===n?void 0:n[0]),b=Object(o.a)(d,2),f=b[0],j=b[1],O=Object(l.useState)(null===r||void 0===r?void 0:r[0]),v=Object(o.a)(O,2),m=v[0],h=v[1],g=Object(l.useState)(null),y=Object(o.a)(g,2),C=y[0],w=y[1],N=Object(l.useCallback)((function(){return"hls2"===a?[]:n}),[n,a]),E=Object(l.useCallback)((function(){return null===f||void 0===f?void 0:f.name}),[f]),R=Object(l.useCallback)((function(e){var t=null===n||void 0===n?void 0:n.find((function(t){return t.name===e}));t&&j(t)}),[n]),L=Object(l.useCallback)((function(){return x()(r,"src")}),[r]),A=Object(l.useCallback)((function(){return null===m||void 0===m?void 0:m.name}),[m]),P=Object(l.useCallback)((function(e){var t=null===r||void 0===r?void 0:r.find((function(t){return t.name===e}));t&&h(t)}),[r]),U=Object(l.useCallback)((function(){return c}),[c]),B=Object(l.useCallback)((function(){return null===C||void 0===C?void 0:C.name}),[C]),I=Object(l.useCallback)((function(e){var t=null===c||void 0===c?void 0:c.find((function(t){return t.name===e}));w(t||null)}),[c]),F=Object(l.useMemo)((function(){var e;return null!==(e=null===n||void 0===n?void 0:n.findIndex((function(e){return e.name===f.name})))&&void 0!==e?e:0}),[n,f]),M=Object(l.useMemo)((function(){return"hls"===a?null===m||void 0===m?void 0:m.src.replace(/master-v1a\d/,"master-v1a".concat(F+1)):null===m||void 0===m?void 0:m.src}),[a,F,null===m||void 0===m?void 0:m.src]),D=Object(l.useCallback)((function(){if(u.current){for(;u.current.firstChild;)u.current.lastChild.track.mode="disabled",u.current.removeChild(u.current.lastChild);if(i.current){var e=p()(i.current.audioTracks,(function(e){return e.name===(null===f||void 0===f?void 0:f.name)}));e&&(i.current.audioTrack=e.id)}else T()(u.current.audioTracks,(function(e,t){e.enabled=t===F}));if(s.current>0?(u.current.currentTime=s.current,u.current.pause()):t&&u.current.play(),C){var n=function(e){if(u.current){var t=document.createElement("track");u.current.appendChild(t),t.src=e,t.kind="captions",t.id=C.name,t.label=C.name,t.srclang=C.lang,t.track.mode="showing"}};C.src.endsWith(".srt")?function(e){return S.apply(this,arguments)}(C.src).then(n):n(C.src)}}}),[t,F,null===f||void 0===f?void 0:f.name,C]);return Object(l.useEffect)((function(){if(u.current)if(M.includes(".m3u8")&&k.a.isSupported()){var e=i.current=new k.a({enableWebVTT:!1,enableCEA708Captions:!1});e.attachMedia(u.current),e.on(k.a.Events.MEDIA_ATTACHED,(function(){e.loadSource(M),e.on(k.a.Events.MANIFEST_LOADED,D)}))}else u.current.src=M,u.current.addEventListener("loadeddata",D);return function(){u.current&&(s.current=u.current.currentTime,u.current.removeEventListener("loadeddata",D)),i.current&&(i.current.destroy(),i.current=null)}}),[M,u,s,D,a,f,m,C,F,n]),Object(l.useMemo)((function(){return{videoRef:u,getAudioTracks:N,getAudioTrack:E,setAudioTrack:R,getSourceTracks:L,getSourceTrack:A,setSourceTrack:P,getSubtitleTracks:U,getSubtitleTrack:B,setSubtitleTrack:I}}),[u,N,E,R,L,A,P,U,B,I])}var L=["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],A=s.a.forwardRef((function(e,t){var n=e.autoPlay,c=e.audioTracks,o=e.sourceTracks,s=e.subtitleTracks,d=e.streamingType,b=e.onUpdate,j=e.className,v=(e.mediaComponent,Object(i.a)(e,E)),k=Object(l.useCallback)((function(){null===b||void 0===b||b()}),[b]),m=Object(l.useMemo)((function(){return L.reduce((function(e,t){return Object(r.a)(Object(r.a)({},e),{},Object(f.a)({},t,(function(){var e;k();for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];null===(e=v[t])||void 0===e||e.call.apply(e,[v].concat(r))})))}),{})}),[v,k]),p=function(e,t){var n=R(t),r=n.videoRef,c=Object(l.useCallback)((function(){return r.current?r.current.currentTime:0}),[r]),o=Object(l.useCallback)((function(e){r.current&&(r.current.currentTime=e)}),[r]),i=Object(l.useCallback)((function(){return r.current?r.current.playbackRate:1}),[r]),s=Object(l.useCallback)((function(e){r.current&&(r.current.playbackRate=e)}),[r]),d=Object(l.useCallback)((function(){return!!r.current&&r.current.paused}),[r]),b=Object(l.useCallback)((function(){return r.current?r.current.duration:0}),[r]),f=Object(l.useCallback)((function(){return!!r.current&&r.current.networkState===r.current.NETWORK_NO_SOURCE}),[r]),j=Object(l.useCallback)((function(){return!r.current||r.current.readyState<r.current.HAVE_ENOUGH_DATA}),[r]),O=Object(l.useCallback)((function(){return r.current?r.current.buffered.length&&r.current.buffered.end(r.current.buffered.length-1)/r.current.duration:0}),[r]),v=Object(l.useCallback)((function(){return r.current?r.current.currentTime/r.current.duration:0}),[r]),k=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=r.current)||void 0===t?void 0:t.play();case 2:case"end":return e.stop()}}),e)}))),[r]),m=Object(l.useCallback)((function(){var e;null===(e=r.current)||void 0===e||e.pause()}),[r]),p=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d()){e.next=5;break}return e.next=3,k();case 3:e.next=6;break;case 5:m();case 6:case"end":return e.stop()}}),e)}))),[k,m,d]),h=Object(l.useCallback)((function(){var e;null===(e=r.current)||void 0===e||e.load()}),[r]),T=Object(l.useMemo)((function(){return{play:k,pause:m,playPause:p,load:h,get currentTime(){return c()},set currentTime(e){o(e)},get audioTracks(){return n.getAudioTracks()},get audioTrack(){return n.getAudioTrack()},set audioTrack(e){n.setAudioTrack(e)},get sourceTracks(){return n.getSourceTracks()},get sourceTrack(){return n.getSourceTrack()},set sourceTrack(e){n.setSourceTrack(e)},get subtitleTracks(){return n.getSubtitleTracks()},get subtitleTrack(){return n.getSubtitleTrack()},set subtitleTrack(e){n.setSubtitleTrack(e)},get playbackRate(){return i()},set playbackRate(e){s(e)},get paused(){return d()},get duration(){return b()},get error(){return f()},get loading(){return j()},get proportionLoaded(){return O()},get proportionPlayed(){return v()}}}),[n,k,m,p,h,c,o,i,s,d,b,f,j,O,v]);return Object(l.useImperativeHandle)(e,(function(){return T}),[T]),n}(t,{autoPlay:n,audioTracks:c,sourceTracks:o,subtitleTracks:s,streamingType:d});return Object(N.jsx)("video",Object(r.a)(Object(r.a)(Object(r.a)({},v),m),{},{autoPlay:!1,className:O()("w-screen h-screen",j),ref:p.videoRef}))})),P=n(250),U=n(255),B=n(193),I=n.n(B),F=n(897),M=n(922),D=n(924),V="NONE",W=function(e){var t=e.player,n=e.showButton,r=Object(l.useState)(!1),c=Object(o.a)(r,2),a=c[0],u=c[1],i=Object(l.useState)([]),s=Object(o.a)(i,2),d=s[0],b=s[1],f=Object(l.useState)(null),j=Object(o.a)(f,2),O=j[0],v=j[1],k=Object(l.useState)([]),m=Object(o.a)(k,2),p=m[0],h=m[1],T=Object(l.useState)(null),g=Object(o.a)(T,2),x=g[0],y=g[1],C=Object(l.useState)([]),w=Object(o.a)(C,2),S=w[0],E=w[1],R=Object(l.useState)(null),L=Object(o.a)(R,2),A=L[0],B=L[1],W=Object(l.useCallback)((function(e,n){t.current&&(t.current.getVideoNode()[e]=n)}),[t]),$=Object(l.useCallback)((function(e){return function(){v(e),W("audioTrack",e)}}),[W]),_=Object(l.useCallback)((function(e){return function(){y(e),W("sourceTrack",e)}}),[W]),z=Object(l.useCallback)((function(e){return function(){B(e),W("subtitleTrack",e)}}),[W]),H=Object(l.useCallback)((function(){if(t.current&&!a){var e=t.current.getVideoNode(),n=e.audioTracks,r=e.audioTrack,c=e.sourceTracks,o=e.sourceTrack,i=e.subtitleTracks,l=e.subtitleTrack;((null===n||void 0===n?void 0:n.length)>1||(null===c||void 0===c?void 0:c.length)>1||(null===i||void 0===i?void 0:i.length)>0)&&(b(n),v(r),h(c),y(o),E(i),B(l),t.current.pause(),u(!0))}}),[a,t]),K=Object(l.useCallback)((function(){u(!1),t.current&&t.current.play()}),[t]),q=Object(l.useCallback)((function(){!a&&H()}),[a,H]);return Object(U.a)("Blue",q),Object(U.a)("Play",K),Object(U.a)("ArrowUp",H),Object(N.jsxs)(N.Fragment,{children:[n&&Object(N.jsx)(F.a,{className:"absolute z-101 bottom-8 right-10",icon:"settings",iconOnly:!0,onClick:H}),Object(N.jsx)(M.a,{visible:a,onClose:K,children:Object(N.jsxs)("div",{className:"flex flex-col",children:[(null===d||void 0===d?void 0:d.length)>1&&Object(N.jsxs)("div",{className:"flex flex-col py-4",children:[Object(N.jsx)(P.a,{children:"\u0417\u0432\u0443\u043a"}),Object(N.jsx)("div",{className:"flex flex-wrap mt-2",children:I()(d,(function(e){var t=e.name;return Object(N.jsx)("div",{className:"w-1/2",children:Object(N.jsx)(D.a,{checked:t===O,onChange:$(t),children:t})},t)}))})]}),(null===p||void 0===p?void 0:p.length)>1&&Object(N.jsxs)("div",{className:"flex flex-col py-4",children:[Object(N.jsx)(P.a,{children:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(N.jsx)("div",{className:"flex flex-wrap mt-2",children:I()(p,(function(e){var t=e.name;return Object(N.jsx)("div",{className:"w-1/6",children:Object(N.jsx)(D.a,{checked:t===x,onChange:_(t),children:t})},t)}))})]}),(null===S||void 0===S?void 0:S.length)>0&&Object(N.jsxs)("div",{className:"flex flex-col py-4",children:[Object(N.jsx)(P.a,{children:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"}),Object(N.jsxs)("div",{className:"flex flex-wrap mt-2",children:[Object(N.jsx)("div",{className:"w-1/6",children:Object(N.jsx)(D.a,{checked:!A||A===V,onChange:z(V),children:"\u041d\u0435\u0442"})}),I()(S,(function(e){var t=e.name;return Object(N.jsx)("div",{className:"w-1/6",children:Object(N.jsx)(D.a,{checked:t===A,onChange:z(t),children:t})},t)}))]})]})]})})]})},$=function(e){var t=e.startTime,n=e.startInDelay,r=void 0===n?5:n,c=e.player,a=Object(l.useState)(!0),u=Object(o.a)(a,2),i=u[0],s=u[1],d=Object(l.useState)(r),b=Object(o.a)(d,2),f=b[0],j=b[1],O=Object(l.useMemo)((function(){return new Date(1e3*(t||0)).toISOString().substr(11,8).replace(/^00:/,"")}),[t]),v=Object(l.useCallback)((function(){c.current&&(s(!1),c.current.getVideoNode().currentTime=t)}),[t,c]),k=Object(l.useCallback)((function(){s(!1)}),[]);return Object(l.useEffect)((function(){var e;return i&&(e=setInterval((function(){j((function(e){var t=e-1;return t<=0&&v(),t}))}),1e3)),function(){clearInterval(e)}}),[i,v]),t&&i?Object(N.jsxs)("div",{className:"flex justify-center absolute w-full z-101 bottom-32",children:[Object(N.jsxs)(F.a,{onClick:v,children:["\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 ",O," \u0447\u0435\u0440\u0435\u0437 ",f]}),Object(N.jsx)(F.a,{autoFocus:!0,onClick:k,children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 \u043d\u0430\u0447\u0430\u043b\u0430"})]}):null},_=["title","description","poster","audios","sources","subtitles","startTime","timeSyncInterval","streamingType","onPlay","onPause","onEnded","onTimeSync"],z=function(e){var t=e.title,n=e.description,c=e.poster,s=e.audios,d=e.sources,f=e.subtitles,j=e.startTime,O=e.timeSyncInterval,v=void 0===O?30:O,k=e.streamingType,m=e.onPlay,p=e.onPause,h=e.onEnded,T=e.onTimeSync,g=Object(i.a)(e,_),x=Object(l.useRef)(),y=Object(l.useState)(!1),C=Object(o.a)(y,2),w=C[0],S=C[1],E=Object(l.useState)(!0),R=Object(o.a)(E,2),L=R[0],B=R[1],I=Object(l.useCallback)((function(){B(!1),null===m||void 0===m||m()}),[m]),F=Object(l.useCallback)((function(e){B(!0),null===p||void 0===p||p(e.currentTime)}),[p]),M=Object(l.useCallback)((function(e){null===h||void 0===h||h(e.target.currentTime)}),[h]),D=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x.current||!T){e.next=5;break}return t=x.current.getVideoNode(),n=t.currentTime,e.next=5,T(n);case 5:case"end":return e.stop()}}),e)}))),[T,x]),V=Object(l.useCallback)((function(){S(!0)}),[]);return Object(l.useEffect)((function(){var e;return L&&(e=setTimeout((function(){B(!1)}),5e3)),function(){e&&clearTimeout(e)}}),[L]),Object(l.useEffect)((function(){var e;return T&&(e=setInterval(D,1e3*v)),function(){e&&clearInterval(e)}}),[v,T,D]),Object(U.a)("Back",D),Object(N.jsxs)(N.Fragment,{children:[L&&Object(N.jsx)(P.a,{className:"p-4 absolute top-0 z-10",children:t}),Object(N.jsx)(W,{showButton:L,player:x}),w&&j>0&&Object(N.jsx)($,{startTime:j,player:x}),Object(N.jsx)(b.a,Object(r.a)(Object(r.a)({},g),{},{ref:x,title:n,poster:c,jumpBy:10,onPlay:I,onPause:F,onEnded:M,onLoadedMetadata:V,streamingType:k,audioTracks:s,sourceTracks:d,subtitleTracks:f,videoComponent:Object(N.jsx)(A,{})}))]})}}}]);
//# sourceMappingURL=25.4088c484.chunk.js.map