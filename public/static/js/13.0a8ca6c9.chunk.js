(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[13],{100:function(e,t,a){},101:function(e,t,a){},105:function(e,t,a){},121:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n={natural:"Natural",historical:"Historical",outdoor:"Outdoor",touristic:"Touristic"},r=[{name:"natural",title:"Natural"},{name:"historical",title:"Historical"},{name:"outdoor",title:"Outdoor"},{name:"touristic",title:"Touristic"}]},131:function(e,t,a){},154:function(e,t,a){},156:function(e,t,a){},158:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a(16),c=a.n(r),l=a(22),s=a(3),o=a(0),i=a.n(o),u=(a(154),a(99)),m=a(13),p=a(4),d=(a(131),a(96)),f=a(98),h=a(155),E=a.n(h),b=(a(156),a(157),function(e){var t=Object(o.useState)(null),a=Object(s.a)(t,2),n=a[0],r=a[1],c=Object(o.useRef)(null),l=e.center,u=e.zoom;return Object(o.useEffect)((function(){E.a.accessToken="pk.eyJ1IjoiYWxpa2FkaGltIiwiYSI6ImNrNnVqZmY2YTA1bnQzZW9hOGl5c3owd3gifQ.0nam2ATvhX9r9KW4G36mSg";n||function(e){var t=e.setMap,a=e.mapContainer,n=new E.a.Map({container:a.current,style:"mapbox://styles/mapbox/streets-v11",center:l,zoom:u});n.on("load",(function(){t(n),n.resize()}))}({setMap:r,mapContainer:c})}),[n,l,u]),i.a.createElement("div",{className:"map ".concat(e.className),ref:function(e){return c.current=e},style:e.style})}),v=a(97),k=a(10),O=a(35),g=a(121),j=a(219),y=function(e){var t=e.place,a=e.onDeletePlace,n=Object(O.a)(),r=n.error,h=n.sendRequest,E=n.clearError,y=Object(o.useContext)(k.a),N=Object(o.useState)(!1),x=Object(s.a)(N,2),C=x[0],w=x[1],S=Object(o.useState)(!1),I=Object(s.a)(S,2),_=I[0],A=I[1],T=Object(o.useState)(),D=Object(s.a)(T,2),L=D[0],z=D[1],P=Object(o.useState)(),B=Object(s.a)(P,2),F=B[0],J=B[1],W=Object(o.useState)(),H=Object(s.a)(W,2),M=H[0],R=H[1],Y=Object(o.useState)(!0),q=Object(s.a)(Y,2),G=q[0],V=q[1],K=Object(o.useState)(!1),Q=Object(s.a)(K,2),U=Q[0],Z=Q[1],X=function(){return w(!1)},$=t.id,ee=t.image,te=t.name,ae=t.title,ne=t.address,re=t.description,ce=t.location,le=t.tags,se=Object(m.g)();Object(o.useEffect)((function(){(function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("".concat("https://placesharer.herokuapp.com/api","/places/evaluation/").concat($));case 3:t=e.sent,z(t.place),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[F,M,$,h]);var oe=function(){var e=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y.isLoggedIn){e.next=13;break}return e.prev=1,t={likes:y.userId},e.next=5,h("".concat("https://placesharer.herokuapp.com/api","/places/like/").concat($),"POST",JSON.stringify(t),{Authorization:"Bearer "+y.token,"Content-Type":"application/json"});case 5:a=e.sent,J(a),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:e.next=14;break;case 13:se.push("/auth");case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y.isLoggedIn){e.next=13;break}return e.prev=1,t={disLike:y.userId},e.next=5,h("".concat("https://placesharer.herokuapp.com/api","/places/dislike/").concat($),"POST",JSON.stringify(t),{Authorization:"Bearer "+y.token,"Content-Type":"application/json"});case 5:a=e.sent,R(a),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:e.next=14;break;case 13:se.push("/auth");case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){A(!1)},me=function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!1),e.prev=1,e.next=4,h("".concat("https://placesharer.herokuapp.com/api","/places/").concat($),"DELETE",null,{Authorization:"Bearer "+y.token});case 4:a($),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,V(!1),e.next=4,h("".concat("https://placesharer.herokuapp.com/api","/user/bucketlist/").concat($),"PATCH",null,{Authorization:"Bearer "+y.token});case 4:Z(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),V(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),de=Object(o.useState)(),fe=Object(s.a)(de,2),he=fe[0],Ee=fe[1];Object(o.useEffect)((function(){(function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("".concat("https://placesharer.herokuapp.com/api","/users"));case 3:t=e.sent,Ee(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[h]);var be=function(e){return!!y.userId&&0!==e.find((function(e){return e._id===y.userId})).bucketList.filter((function(e){return e.id===$})).length};return i.a.createElement(o.Fragment,null,i.a.createElement(v.a,{error:r,onClear:E}),i.a.createElement(f.a,{show:C,onCancel:X,header:ne,contentClass:"place-item__modal-content",footerClass:"place-item__actions",footer:i.a.createElement(d.a,{onClick:X},"Close")},i.a.createElement("div",{className:"map-container no-select"},i.a.createElement("h2",null,"THE MAP!"),i.a.createElement(b,{center:ce,zoom:16}))),i.a.createElement(f.a,{show:_,onCancel:ue,header:"Are you sure?",className:"place-item__modal-actions",footer:i.a.createElement(o.Fragment,null,i.a.createElement(d.a,{inverse:!0,onClick:ue},"CANCEL"),i.a.createElement(d.a,{danger:!0,onClick:me},"DELETE"))},i.a.createElement("p",null,"Do you want to proceed and delete this place? note that it can't be undone thereafter.")),he&&i.a.createElement("li",{className:"place-item fade-in"},i.a.createElement(u.a,{className:"place-item__content"},i.a.createElement("div",{className:"place-item__image"},i.a.createElement("img",{src:ee.imageUrl,alt:te})),i.a.createElement("div",{className:"place-item__info"},i.a.createElement("div",{className:"evaluation no-select"},L&&i.a.createElement("div",{className:"like"},i.a.createElement("p",{className:"like-count"},L.likes>=1e3?L.likes.length/1e3+"k":L.likes.length),i.a.createElement("i",{className:"fas fa-thumbs-up fa-2x",onClick:oe,style:{color:L.likes.includes(y.userId)&&"green"}})),L&&i.a.createElement("div",{className:"dislike"},i.a.createElement("p",{className:"dislike-count"},L.disLike>=1e3?L.disLike.length/1e3+"k":L.disLike.length),i.a.createElement("i",{className:"fas fa-thumbs-down fa-2x",onClick:ie,style:{color:L.disLike.includes(y.userId)&&"red"}})))," ",i.a.createElement("p",null,JSON.stringify()),i.a.createElement("h2",null,ae),i.a.createElement("h3",null,ne),i.a.createElement("p",null,re),i.a.createElement("div",null,le.map((function(e){return i.a.createElement(j.a,{key:e,className:"tag-chip",variant:"outlined",color:"primary",size:"small",label:g.b[e]})})))),i.a.createElement("div",{className:"place-item__actions"},i.a.createElement(d.a,{inverse:!0,onClick:function(){return w(!0)}},"VIEW ON MAP"),i.a.createElement(p.b,{to:"/places/".concat($)},i.a.createElement(d.a,null,"DETAILS")),t.creator===y.userId&&i.a.createElement(d.a,{to:"/places/".concat($,"/edit")},"EDIT"),t.creator===y.userId&&i.a.createElement(d.a,{danger:!0,onClick:function(){A(!0)}},"DELETE"),y.token&&t.creator!==y.userId&&G&&!be(he)&&i.a.createElement(d.a,{onClick:pe},"ADD TO BUCKET LIST"),be(he)&&y.userId&&i.a.createElement("span",{className:"animated"},"Already in your bucket"," ",i.a.createElement("span",{role:"img","aria-label":"already-in your bucket","aria-hidden":!1},"\u2705")),U&&i.a.createElement("span",{className:" fadeOut animated"},"Added"," ",i.a.createElement("span",{role:"img","aria-label":"added","aria-hidden":!1},"\u2705"))))))},N=function(e){var t=e.items,a=e.onDeletePlace;return 0===t.length?i.a.createElement("div",{className:"place-list center"},i.a.createElement(u.a,null,i.a.createElement("h2",null,"No places found, maybe create one ?"),i.a.createElement(d.a,{to:"/places/new"},"Share place"))):i.a.createElement("ul",{className:"place-list"},t.map((function(e){return i.a.createElement(y,{key:e.id,place:e,onDeletePlace:a})})))},x=(a(158),a(203)),C=a(171),w=a(199),S=a(196),I=a(207),_=a(216),A=a(195),T=a(217),D=a(152),L=a(204),z=a(140),P=a.n(z),B=a(198),F=Object(B.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:5},centerd:{display:"flex",justifyContent:"center"},end:{display:"flex",justifyContent:"flex-end"},selectStyle:{background:"white",width:"100%",padding:"4px",borderRadius:"4px"}}}));t.default=function(){var e=F(),t=Object(m.h)().userId,a=Object(o.useContext)(k.a),r=Object(O.a)(),u=r.isLoading,p=r.error,f=r.sendRequest,h=r.clearError,E=Object(o.useState)(),b=Object(s.a)(E,2),j=b[0],y=b[1],z=Object(o.useState)(""),B=Object(s.a)(z,2),J=B[0],W=B[1],H=Object(o.useState)(""),M=Object(s.a)(H,2),R=M[0],Y=M[1],q=Object(o.useState)([]),G=Object(s.a)(q,2),V=G[0],K=G[1],Q=Object(o.useState)(),U=Object(s.a)(Q,2),Z=U[0],X=U[1],$=function(){var e=Object(l.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("".concat("https://placesharer.herokuapp.com/api","/places/user/").concat(t,"/?sortBy=").concat(R,"&tagFilter=").concat(V.join(",")));case 3:a=e.sent,y(a.userWithPlaces),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){$()}),[f,t,R,V]);var ee,te=function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("".concat("https://placesharer.herokuapp.com/api","/places/?search=").concat(t));case 3:a=e.sent,y(a.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(e){var t=e.target.name,a=e.target.checked;K(a?function(e){return e.includes(t)?e:[].concat(Object(n.a)(e),[t])}:function(e){return e.includes(t)?e.filter((function(e){return e!==t})):e})};if(p)return i.a.createElement(v.a,{error:(ee=p,j||a.userId===t?j||a.userId!==t?i.a.createElement("h2",null,ee):i.a.createElement(o.Fragment,null,i.a.createElement("h2",{className:"center gray-text fade-in-faster"},"No shared places yet, maybe add one?"),i.a.createElement("div",{className:"center fade-in-faster"},i.a.createElement(d.a,{inverse:!0,to:"/places/new"},"ADD A PLACE"))):i.a.createElement("h2",{className:"center gray-text fade-in-faster"},"No places shared!")),header:"Hello there!",onClear:h});var ne=[];g.a.forEach((function(e){var t=V.includes(e.name),a=i.a.createElement(x.a,{key:e.name,control:i.a.createElement(C.a,{checked:t,onChange:ae,name:e.name}),label:e.title});ne.push(a)}));return i.a.createElement("div",{className:"place-overlay-container fade-in"},i.a.createElement(v.a,{error:p,onClear:h}),!u&&j&&i.a.createElement(w.a,{maxWidth:"md"},i.a.createElement(S.a,{className:e.centerd,container:!0,spacing:3},i.a.createElement(S.a,{item:!0,md:4,xs:12,sm:3},i.a.createElement(I.a,{onChange:function(e){var t=e.target.value;"rate"===t&&Y("rate"),"title"===t&&Y("title"),"created_at"===t&&Y("created_at"),X(t)},defaultValue:"none",className:e.selectStyle,value:Z},i.a.createElement(_.a,{value:"none",disabled:!0},"Sort by"),i.a.createElement(_.a,{value:"rate"},"Rate"),i.a.createElement(_.a,{value:"title"},"Title"),i.a.createElement(_.a,{value:"created_at"},"Adding Date"))),i.a.createElement(S.a,{item:!0,md:4,xs:12,sm:3},i.a.createElement(A.a,{component:"form",className:e.root,onSubmit:function(e){e.preventDefault(),te(J)}},i.a.createElement(T.a,{className:e.input,placeholder:"Search places",inputProps:{"aria-label":""},value:J,onChange:function(e){W(e.target.value)}}),i.a.createElement(D.a,{type:"submit",className:e.iconButton,"aria-label":"search"},i.a.createElement(P.a,null)))),i.a.createElement(L.a,null,i.a.createElement(A.a,null,ne)),i.a.createElement(N,{items:j,onDeletePlace:function(e){y((function(t){return t.filter((function(t){return t.id!==e}))}))}}))))}},96:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(4);a(101);t.a=function(e){return e.href?r.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?r.a.createElement(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):r.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,id:e.id},e.children)}},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(98),l=a(96);t.a=function(e){var t=e.error,a=e.onClear,n=e.header;return r.a.createElement(c.a,{onCancel:a,header:n||"An Error Occurred!!!",show:!!t,footer:r.a.createElement(l.a,{onClick:a},"Okay")},r.a.createElement("div",null,t))}},98:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(12),l=a.n(c),s=(a(100),a(93)),o=a(37),i=function(e){var t=r.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return l.a.createPortal(t,document.getElementById("modal-hook"))};t.a=function(e){return r.a.createElement(n.Fragment,null,e.show&&r.a.createElement(o.a,{onClick:e.onCancel}),r.a.createElement(s.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(i,e)))}},99:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(105);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}}}]);
//# sourceMappingURL=13.0a8ca6c9.chunk.js.map