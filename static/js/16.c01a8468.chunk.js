(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[16],{517:function(t,e,n){"use strict";var r=n(76),i=n(0),o=n(537),u=n(142);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,s=Object(i.useMemo)((function(){return new u.c}),[]),c=Object(o.a)([t].concat(Object(r.a)(e)),(function(){return s[t].apply(s,Object(r.a)(e))}),n);return c}},518:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r,i=n(20),o=n(521),u=n.n(o),s=n(21),c=Object(s.b)(u.a)(r||(r=Object(i.a)([""])))},520:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0),i=n.n(r),o=n(12);function u(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var s=i.a.createContext(u()),c=n(151);function a(t,e){var n=i.a.useRef(!1),r=i.a.useState(0)[1],u=Object(c.b)(),a=i.a.useContext(s),l=u.defaultQueryObserverOptions(t);l.optimisticResults=!0,l.onError&&(l.onError=o.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=o.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=o.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(a.isReset()||(l.retryOnMount=!1));var d=i.a.useRef();d.current||(d.current=new e(u,l));var h=d.current.getOptimisticResult(l);if(i.a.useEffect((function(){n.current=!0,a.clearReset();var t=d.current.subscribe(o.a.batchCalls((function(){n.current&&r((function(t){return t+1}))})));return d.current.updateResult(),function(){n.current=!1,t()}}),[a]),i.a.useEffect((function(){d.current.setOptions(l,{listeners:!1})}),[l]),l.suspense&&h.isLoading)throw d.current.fetchOptimistic(l).then((function(t){var e=t.data;null==l.onSuccess||l.onSuccess(e),null==l.onSettled||l.onSettled(e,null)})).catch((function(t){a.clearReset(),null==l.onError||l.onError(t),null==l.onSettled||l.onSettled(void 0,t)}));if((l.suspense||l.useErrorBoundary)&&h.isError)throw h.error;return"tracked"===l.notifyOnChangeProps&&(h=d.current.trackResult(h)),h}},537:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(548),i=n(2),o=n(520);function u(t,e,n){var u=Object(i.k)(t,e,n);return Object(o.a)(u,r.a)}},547:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(6),i=n(31),o=n(0),u=n(558),s=n.n(u),c=n(146),a=n(1),l=function(t){var e=t.visible,n=t.onVisibilityChange,u=Object(i.a)(t,["visible","onVisibilityChange"]),l=Object(o.useCallback)((function(){n(!0)}),[n]),d=Object(o.useCallback)((function(){n(!1)}),[n]);return Object(o.useEffect)((function(){var t=function(t){Object(c.b)(t)&&e&&(t.stopPropagation(),n(!1))};return window.addEventListener("keydown",t,!0),function(){window.removeEventListener("keydown",t,!0)}}),[e,n]),Object(a.jsx)(s.a,Object(r.a)(Object(r.a)({},u),{},{open:e,onShow:l,onClose:d}))}},548:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(4),i=n(13),o=n(2),u=n(12),s=n(60),c=n(34),a=n(81),l=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.options=n,r.trackedProps=[],r.previousSelectError=null,r.bindMethods(),r.setOptions(n),r}Object(i.a)(e,t);var n=e.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),d(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&f(t,e));var t,e},n.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&f(t,e));var t,e},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(t,e){var n=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();var i=this.hasListeners();i&&h(this.currentQuery,r,this.options,n)&&this.executeFetch(),this.updateResult(e),!i||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.staleTime===n.staleTime||this.updateStaleTimeout(),!i||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.refetchInterval===n.refetchInterval||this.updateRefetchInterval()},n.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,e);return this.createResult(n,e)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(t){var e=this,n={};return Object.keys(t).forEach((function(r){Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:function(){var n=r;return e.trackedProps.includes(n)||e.trackedProps.push(n),t[n]}})})),n},n.getNextResult=function(t){var e=this;return new Promise((function(n,r){var i=e.subscribe((function(e){e.isFetching||(i(),e.isError&&(null==t?void 0:t.throwOnError)?r(e.error):n(e))}))}))},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(t){return this.fetch(t)},n.fetchOptimistic=function(t){var e=this,n=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.fetch().then((function(){return e.createResult(r,n)}))},n.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},n.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(o.h)),e},n.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!o.d&&!this.currentResult.isStale&&Object(o.e)(this.options.staleTime)){var e=Object(o.q)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},n.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!o.d&&!1!==this.options.enabled&&Object(o.e)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||s.a.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},n.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},n.createResult=function(t,e){var n,r,i=this.currentQuery,u=this.options,s=this.currentResult,c=this.currentResultState,l=this.currentResultOptions,v=t!==i,b=v?t.state:this.currentQueryInitialState,p=v?this.currentResult:this.previousQueryResult,O=t.state,j=O.dataUpdatedAt,m=O.error,y=O.errorUpdatedAt,T=O.isFetching,k=O.status,g=!1,R=!1;if(e.optimisticResults){var w=this.hasListeners(),S=!w&&d(t,e),E=w&&h(t,i,e,u);(S||E)&&(T=!0,j||(k="loading"))}if(e.keepPreviousData&&!O.dataUpdateCount&&(null==p?void 0:p.isSuccess)&&"error"!==k)n=p.data,j=p.dataUpdatedAt,k=p.status,g=!0;else if(e.select&&"undefined"!==typeof O.data)if(s&&O.data===(null==c?void 0:c.data)&&e.select===(null==l?void 0:l.select)&&!this.previousSelectError)n=s.data;else try{n=e.select(O.data),!1!==e.structuralSharing&&(n=Object(o.m)(null==s?void 0:s.data,n)),this.previousSelectError=null}catch(x){Object(a.a)().error(x),m=x,this.previousSelectError=x,y=Date.now(),k="error"}else n=O.data;"undefined"!==typeof e.placeholderData&&"undefined"===typeof n&&"loading"===k&&("undefined"!==typeof(r=(null==s?void 0:s.isPlaceholderData)&&e.placeholderData===(null==l?void 0:l.placeholderData)?s.data:"function"===typeof e.placeholderData?e.placeholderData():e.placeholderData)&&(k="success",n=r,R=!0));return{status:k,isLoading:"loading"===k,isSuccess:"success"===k,isError:"error"===k,isIdle:"idle"===k,data:n,dataUpdatedAt:j,error:m,errorUpdatedAt:y,failureCount:O.fetchFailureCount,isFetched:O.dataUpdateCount>0||O.errorUpdateCount>0,isFetchedAfterMount:O.dataUpdateCount>b.dataUpdateCount||O.errorUpdateCount>b.errorUpdateCount,isFetching:T,isLoadingError:"error"===k&&0===O.dataUpdatedAt,isPlaceholderData:R,isPreviousData:g,isRefetchError:"error"===k&&0!==O.dataUpdatedAt,isStale:f(t,e),refetch:this.refetch,remove:this.remove}},n.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var n=this.options,r=n.notifyOnChangeProps,i=n.notifyOnChangePropsExclusions;if(!r&&!i)return!0;if("tracked"===r&&!this.trackedProps.length)return!0;var o="tracked"===r?this.trackedProps:r;return Object.keys(t).some((function(n){var r=n,u=t[r]!==e[r],s=null==o?void 0:o.some((function(t){return t===n})),c=null==i?void 0:i.some((function(t){return t===n}));return u&&!c&&(!o||s)}))},n.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(o.o)(this.currentResult,e)){var n={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(n.listeners=!0),this.notify(Object(r.a)({},n,t))}},n.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},n.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},n.notify=function(t){var e=this;u.a.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})}))},e}(c.a);function d(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&f(t,e))}(t,e)}function h(t,e,n,r){return!1!==n.enabled&&(t!==e||!1===r.enabled)&&f(t,n)}function f(t,e){return t.isStaleByTime(e.staleTime)}},559:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h}));var r=n(523),i=n.n(r),o=n(102),u=n.n(o),s=n(579),c=n.n(s),a=function(t){return t<10?"0".concat(t):t};function l(t){return u()(t,(function(t,e){var n,r,o,u,s,l,d;return{lang:t.lang,name:i()(["".concat(a(e+1),"."),(null===(n=t.type)||void 0===n?void 0:n.title)&&(null===(r=t.author)||void 0===r?void 0:r.title)?"".concat(null===(o=t.type)||void 0===o?void 0:o.title,"."):null===(u=t.type)||void 0===u?void 0:u.title,null===(s=t.author)||void 0===s?void 0:s.title,(null===(l=t.type)||void 0===l?void 0:l.title)||(null===(d=t.author)||void 0===d?void 0:d.title)?"(".concat(c()(t.lang),")"):c()(t.lang),"aac"!==t.codec&&c()(t.codec)]).join(" ")}}))}function d(t,e){return u()(t,(function(t){return{src:"string"===typeof t.url?t.url:t.url[e]||t.url.http,name:t.quality}}))}function h(t){return u()(t,(function(t,e){return{src:t.url,lang:t.lang,name:"".concat(c()(t.lang)," #").concat(a(e+1))}}))}},560:function(t,e,n){"use strict";n.d(e,"a",(function(){return et}));var r=n(6),i=n(46),o=n(31),u=n(20),s=n(0),c=n(570),a=n.n(c),l=n(21),d=n(42),h=n(43),f=n(583),v=n(113),b=n(85),p=n(84),O=n(554),j=n.n(O),m=n(575),y=n.n(m),T=n(576),k=n.n(T),g=n(532),R=n.n(g),w=n(15),S=n.n(w),E=n(29),x=function(){function t(e){Object(d.a)(this,t),this.resource=void 0,this.objectURL=void 0,this.resource=e}return Object(h.a)(t,[{key:"blobToBuffer",value:function(){var t=this;return new Promise((function(e,n){var r=new FileReader;r.addEventListener("loadend",(function(t){var n,r=null===(n=t.target)||void 0===n?void 0:n.result;e(new Uint8Array(r))})),r.addEventListener("error",(function(){return n("Error while reading the Blob object")})),r.readAsArrayBuffer(t.resource)}))}},{key:"getURL",value:function(){var e=this;return new Promise((function(n,r){return e.resource instanceof Blob?FileReader?TextDecoder?t.blobToString(e.resource,(function(r){var i="WEBVTT FILE\r\n\r\n".concat(t.toVTT(r)),o=new Blob([i],{type:"text/vtt"});return e.objectURL=URL.createObjectURL(o),n(e.objectURL)}),(function(){e.blobToBuffer().then((function(r){var i=new TextDecoder("utf-8").decode(r),o="WEBVTT FILE\r\n\r\n".concat(t.toVTT(i)),u=new Blob([o],{type:"text/vtt"});return e.objectURL=URL.createObjectURL(u),n(e.objectURL)}))})):r("No TextDecoder constructor found"):r("No FileReader constructor found"):r("Expecting resource to be a Blob but something else found.")}))}},{key:"release",value:function(){URL.createObjectURL(this.objectURL)}}],[{key:"blobToString",value:function(t,e,n){var r=new FileReader;r.addEventListener("loadend",(function(t){var n,r=null===(n=t.target)||void 0===n?void 0:n.result;e(r)})),r.addEventListener("error",(function(){return n()})),r.readAsText(t)}},{key:"toVTT",value:function(t){return t.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}},{key:"toTypedArray",value:function(t){var e=[];return t.split("").forEach((function(t){e.push(parseInt("".concat(t.charCodeAt(0)),16))})),Uint8Array.from(e)}}]),t}();function C(){return(C=Object(E.a)(S.a.mark((function t(e){var n,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return t.next=4,t.sent.blob();case 4:return n=t.sent,r=new x(n),t.abrupt("return",r.getURL());case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var U,I,Q,L,A,F,P,D=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).hls=void 0,t.media=void 0,t.state=void 0,t.props=void 0,t}return Object(h.a)(n,[{key:"load",value:function(t){var e=this;this.destroy();var n=this.media;if(this.setState({src:t}),t.includes(".m3u8")&&y.a.isSupported()){var r=this.hls=new y.a;return r.attachMedia(n),void r.on(y.a.Events.MEDIA_ATTACHED,(function(){r.loadSource(t),r.on(y.a.Events.MANIFEST_PARSED,(function(){e.play()}))}))}n.src=t,n.addEventListener("loadedmetadata",(function(){e.play()}))}},{key:"audioTracks",get:function(){var t;return this.hls?k()(this.hls.audioTracks.map((function(t){return t.name}))):null===(t=this.props.audioTracks)||void 0===t?void 0:t.map((function(t){return t.name}))}},{key:"audioTrack",get:function(){var t,e,n,r=this;if(this.hls)return null===(n=this.hls.audioTracks.find((function(t){var e;return t.id===(null===(e=r.hls)||void 0===e?void 0:e.audioTrack)})))||void 0===n?void 0:n.name;var i=Array.from(this.media.audioTracks||[]).findIndex((function(t){return t.enabled}));return null===(t=this.props.audioTracks)||void 0===t||null===(e=t[i])||void 0===e?void 0:e.name},set:function(t){if(this.hls){var e=this.hls.audioTracks.find((function(e){return e.name===t}));e&&(this.hls.audioTrack=e.id)}else{var n,r=Array.from(this.media.audioTracks||[]),i=null===(n=this.props.audioTracks)||void 0===n?void 0:n.findIndex((function(e){return e.name===t}));(!i||i>r.length-1)&&(i=0),r.forEach((function(t,e){t.enabled=e===i}))}}},{key:"sourceTracks",get:function(){return R()(this.props.sourceTracks,"src").map((function(t){return t.name}))}},{key:"sourceTrack",get:function(){var t,e=this;return null===(t=this.props.sourceTracks.find((function(t){return t.src===e.state.src})))||void 0===t?void 0:t.name},set:function(t){var e=this.props.sourceTracks.find((function(e){return e.name===t}));e&&this.load(e.src)}},{key:"subtitleTracks",get:function(){var t;return this.hls?this.hls.subtitleTracks.map((function(t){return t.name})):null===(t=this.props.subtitleTracks)||void 0===t?void 0:t.map((function(t){return t.name}))}},{key:"subtitleTrack",get:function(){var t,e,n=this;return this.hls?null===(e=this.hls.subtitleTracks.find((function(t){var e;return t.id===(null===(e=n.hls)||void 0===e?void 0:e.subtitleTrack)})))||void 0===e?void 0:e.name:null===(t=Array.from(this.media.textTracks||[]).find((function(t){return"showing"===t.mode})))||void 0===t?void 0:t.label},set:function(t){if(this.hls){var e,n;this.hls.subtitleTrack=null!==(e=null===(n=this.hls.subtitleTracks.find((function(e){return e.name===t})))||void 0===n?void 0:n.id)&&void 0!==e?e:-1}else{var r=Array.from(this.media.textTracks||[]);r.forEach((function(t){t.mode="disabled"}));var i=r.find((function(e){return e.label===t}));if(i)i.mode="showing";else{var o,u=null===(o=this.props.subtitleTracks)||void 0===o?void 0:o.find((function(e){return e.name===t}));if(u){var s=document.createElement("track");s.kind="captions",s.id=u.name,s.srclang=u.lang,s.label=u.name;var c=function(t){s.src=t,s.track.mode="showing"};u.src.endsWith(".srt")?function(t){return C.apply(this,arguments)}(u.src).then(c):c(u.src),this.media.appendChild(s)}}}}},{key:"destroy",value:function(){this.hls?this.hls.destroy():this.media.src=""}},{key:"componentDidMount",value:function(){var t;this.load(this.props.sourceTracks[0].src),null===(t=Object(f.a)(Object(v.a)(n.prototype),"componentDidMount",this))||void 0===t||t.call(this)}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){var t;this.destroy(),null===(t=Object(f.a)(Object(v.a)(n.prototype),"componentWillUnmount",this))||void 0===t||t.call(this)}}]),n}(j.a),M=n(518),B=n(549),N=n.n(B),V=n(102),W=n.n(V),q=n(547),$=n(146),J=n(1),K="NONE",_=l.b.div(U||(U=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),z=l.b.div(I||(I=Object(u.a)(["\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: column;\n"]))),H=Object(l.b)(M.a)(Q||(Q=Object(u.a)(["\n  width: 5rem;\n"]))),G=l.b.div(L||(L=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),X=l.b.div(A||(A=Object(u.a)(["\n  width: ",";\n  padding-right: 1rem;\n  box-sizing: border-box;\n"])),(function(t){return t.width})),Y=function(t){var e=t.player,n=Object(s.useState)(!1),r=Object(i.a)(n,2),o=r[0],u=r[1],c=Object(s.useState)([]),a=Object(i.a)(c,2),l=a[0],d=a[1],h=Object(s.useState)(null),f=Object(i.a)(h,2),v=f[0],b=f[1],p=Object(s.useState)([]),O=Object(i.a)(p,2),j=O[0],m=O[1],y=Object(s.useState)(null),T=Object(i.a)(y,2),k=T[0],g=T[1],R=Object(s.useState)([]),w=Object(i.a)(R,2),S=w[0],E=w[1],x=Object(s.useState)(null),C=Object(i.a)(x,2),U=C[0],I=C[1],Q=Object(s.useCallback)((function(t,n){if(e.current){var r=e.current.getVideoNode(),i=r.currentTime;r[t]=n,setTimeout((function(){r.currentTime=i-1}),500)}}),[e]),L=Object(s.useCallback)((function(t){return function(){b(t),Q("audioTrack",t)}}),[Q]),A=Object(s.useCallback)((function(t){return function(){g(t),Q("sourceTrack",t)}}),[Q]),F=Object(s.useCallback)((function(t){return function(){I(t),Q("subtitleTrack",t)}}),[Q]),P=Object(s.useCallback)((function(t){u(t),e.current&&!t&&e.current.play()}),[e]);return Object(s.useEffect)((function(){var t=function(t){if(Object($.a)(t)){if(e.current){var n=e.current.getVideoNode(),r=n.audioTracks,i=n.audioTrack,o=n.sourceTracks,s=n.sourceTrack,c=n.subtitleTracks,a=n.subtitleTrack;((null===r||void 0===r?void 0:r.length)>1||(null===o||void 0===o?void 0:o.length)>1||(null===c||void 0===c?void 0:c.length)>0)&&(d(r),b(i),m(o),g(s),E(c),I(a),e.current.pause(),u(!0))}}else Object($.c)(t)&&u(!1)};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[o,e]),Object(J.jsx)(q.a,{visible:o,onVisibilityChange:P,children:Object(J.jsxs)(_,{children:[(null===l||void 0===l?void 0:l.length)>1&&Object(J.jsxs)(z,{children:[Object(J.jsx)(H,{children:"\u0417\u0432\u0443\u043a"}),Object(J.jsx)(G,{children:W()(l,(function(t){return Object(J.jsx)(X,{width:"50%",children:Object(J.jsx)(N.a,{selected:t===v,onToggle:L(t),children:t})},t)}))})]}),(null===j||void 0===j?void 0:j.length)>1&&Object(J.jsxs)(z,{children:[Object(J.jsx)(H,{children:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(J.jsx)(G,{children:W()(j,(function(t){return Object(J.jsx)(X,{width:"15%",children:Object(J.jsx)(N.a,{selected:t===k,onToggle:A(t),children:t})},t)}))})]}),(null===S||void 0===S?void 0:S.length)>0&&Object(J.jsxs)(z,{children:[Object(J.jsx)(H,{children:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"}),Object(J.jsxs)(G,{children:[Object(J.jsx)(X,{width:"15%",children:Object(J.jsx)(N.a,{selected:!U||U===K,onToggle:F(K),children:"\u041d\u0435\u0442"})}),W()(S,(function(t){return Object(J.jsx)(X,{width:"15%",children:Object(J.jsx)(N.a,{selected:t===U,onToggle:F(t),children:t})},t)}))]})]})]})})},Z=l.b.div(F||(F=Object(u.a)(["\n  video {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n"]))),tt=Object(l.b)(M.a)(P||(P=Object(u.a)(["\n  position: absolute;\n  padding: 0 1rem;\n  z-index: 1;\n  visibility: ",";\n"])),(function(t){return t.visible?"visible":"hidden"})),et=function(t){var e=t.title,n=t.description,u=t.poster,c=t.audios,l=t.sources,d=t.subtitles,h=t.startTime,f=t.timeSyncInterval,v=void 0===f?30:f,b=t.onPlay,p=t.onPause,O=t.onEnded,j=t.onTimeSync,m=Object(o.a)(t,["title","description","poster","audios","sources","subtitles","startTime","timeSyncInterval","onPlay","onPause","onEnded","onTimeSync"]),y=Object(s.useRef)(),T=Object(s.useState)(!0),k=Object(i.a)(T,2),g=k[0],R=k[1],w=Object(s.useCallback)((function(){R(!1),null===b||void 0===b||b()}),[b]),S=Object(s.useCallback)((function(t){R(!0),null===p||void 0===p||p(t.currentTime)}),[p]),E=Object(s.useCallback)((function(t){null===O||void 0===O||O(t.target.currentTime)}),[O]);return Object(s.useEffect)((function(){var t;return g&&(t=setTimeout((function(){R(!1)}),5e3)),function(){t&&clearTimeout(t)}}),[g]),Object(s.useEffect)((function(){var t;return j&&(t=setInterval((function(){if(y.current){var t=y.current.getVideoNode().currentTime;j(t)}}),1e3*v)),function(){t&&clearInterval(t)}}),[v,j,y]),Object(s.useEffect)((function(){var t;return h&&(t=setTimeout((function(){if(y.current){var t=y.current.getVideoNode();1-h/t.duration>.01&&(t.currentTime=h)}}),500)),function(){t&&clearTimeout(t)}}),[h,y]),Object(J.jsxs)(Z,{children:[Object(J.jsx)(tt,{visible:g,children:e}),Object(J.jsx)(Y,{player:y}),Object(J.jsx)(a.a,Object(r.a)(Object(r.a)({},m),{},{ref:y,title:n,poster:u,jumpBy:10,onPlay:w,onPause:S,onEnded:E,audioTracks:c,sourceTracks:l,subtitleTracks:d,videoComponent:D}))]})}},581:function(t,e,n){"use strict";function r(t,e,n){return n?"".concat(null===t||void 0===t?void 0:t.title," (s").concat(n.number,"e").concat((null===e||void 0===e?void 0:e.number)||1,")"):null===t||void 0===t?void 0:t.title}n.d(e,"a",(function(){return r}))},735:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var r=n(6),i=n(46),o=n(0),u=n(513),s=n(560),c=n(517),a=n(112),l=n(162),d=n(581),h=n(559),f=n(1),v=function(t,e,n){var r=function(t,e,n){return Object(o.useMemo)((function(){var r,i,o=null===(r=t.videos||(null===e||void 0===e?void 0:e.episodes))||void 0===r?void 0:r.find((function(t){return t.number===n.number+1}));if(o)return o;var u=null===(i=t.seasons)||void 0===i?void 0:i.find((function(t){return t.number===e.number+1}));return u?u.episodes[0]:void 0}),[t,e,n])}(t,e,n);return[function(t,e,n){return Object(o.useMemo)((function(){var r,i,o=null===(r=t.videos||(null===e||void 0===e?void 0:e.episodes))||void 0===r?void 0:r.find((function(t){return t.number===n.number-1}));if(o)return o;var u=null===(i=t.seasons)||void 0===i?void 0:i.find((function(t){return t.number===e.number-1}));return u?u.episodes[u.episodes.length-1]:void 0}),[t,e,n])}(t,e,n),r]},b=function(){var t=Object(u.e)(),e=Object(u.f)(),n=Object(a.a)("watchingMarkTime").watchingMarkTime,b=Object(l.a)("streaming_type"),p=Object(i.a)(b,1)[0],O=e.state,j=O.item,m=O.video,y=O.season,T=Object(o.useState)(m),k=Object(i.a)(T,2),g=k[0],R=k[1],w=v(j,y,g),S=Object(i.a)(w,2),E=S[0],x=S[1],C=Object(c.a)("itemMediaLinks",[g.id]),U=Object(o.useCallback)((function(t,e){var r=t.number;n([j.id,e,r,null===y||void 0===y?void 0:y.number])}),[n,j,y]),I=Object(o.useMemo)((function(){return(null===C||void 0===C?void 0:C.data)?{title:Object(d.a)(j,g,y),description:g.title,poster:j.posters.wide||j.posters.big,audios:Object(h.a)(g.audios),sources:Object(h.b)(C.data.files,p),subtitles:Object(h.c)(C.data.subtitles),startTime:g.watching.time}:null}),[j,y,g,null===C||void 0===C?void 0:C.data,p]),Q=Object(o.useCallback)((function(t){U(g,t)}),[U,g]),L=Object(o.useCallback)((function(e){U(g,e),x?R(x):t.goBack()}),[U,t,g,x]),A=Object(o.useCallback)((function(t){var e=t.currentTime;U(g,e),E&&R(E)}),[U,g,E]),F=Object(o.useCallback)((function(t){var e=t.currentTime;U(g,e),x&&R(x)}),[U,g,x]),P=Object(o.useCallback)((function(t){U(g,t)}),[U,g]);return Object(f.jsx)(f.Fragment,{children:I&&Object(f.jsx)(s.a,Object(r.a)(Object(r.a)({},I),{},{onPause:Q,onEnded:L,onJumpBackward:A,onJumpForward:F,onTimeSync:P}),g.id)})}}}]);
//# sourceMappingURL=16.c01a8468.chunk.js.map