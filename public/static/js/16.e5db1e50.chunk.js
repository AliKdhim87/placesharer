(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[16],{100:function(e,t,a){},101:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(16),c=a.n(n),r=a(22),o=a(3),l=a(0),s=a.n(l),i=a(13),u=a(4),m=a(96),d=a(98),p=a(10),h=a(35),f=(a(159),a(36)),b=a(97),E=function(e){var t=e.bucket,a=e.deleteBucket,n=Object(l.useState)(!1),E=Object(o.a)(n,2),k=E[0],v=E[1],N=Object(l.useState)(t.isVisited),w=Object(o.a)(N,2),x=w[0],C=w[1],O=Object(l.useContext)(p.a),y=Object(h.a)(),g=y.isLoading,j=y.error,_=y.sendRequest,S=y.clearError,I=t.id,z=Object(i.h)().userId,B=function(){v(!1)},D=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_("".concat("https://placesharer.herokuapp.com/api","/user/bucketlist/").concat(t.id._id),"DELETE",null,{Authorization:"Bearer "+O.token});case 3:a(t.id._id),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_("".concat("https://placesharer.herokuapp.com/api","/user/bucketlist/").concat(t.id._id),"PUT",null,{"Content-Type":"application/json",Authorization:"Bearer "+O.token});case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return j?s.a.createElement(b.a,{error:j,onClear:S}):s.a.createElement(l.Fragment,null,g&&s.a.createElement(f.a,{asOverlay:!0}),s.a.createElement("div",{className:"bucket-list-item no-select"},s.a.createElement(d.a,{show:k,onCancel:B,header:t.name,contentClass:"place-item__modal-content",footerClass:"place-item__actions",footer:s.a.createElement(m.a,{onClick:B},"Close")},s.a.createElement("div",{className:"detail-item"},s.a.createElement("div",{className:"bucket-image"},s.a.createElement("img",{style:{width:"100%"},src:I.image.imageUrl,alt:"bucket-place"})),s.a.createElement("div",{className:"bucket-info"},s.a.createElement("p",{style:{fontSize:"1.5em"}},I.title),s.a.createElement("p",null,I.description),s.a.createElement("p",null,"Address: ",I.address),s.a.createElement("p",{className:"bucket-creator"}," ",s.a.createElement("strong",null,"Shared by:")," ",s.a.createElement(u.b,{to:"/".concat(I.creator,"/places")},t.createdBy))))),s.a.createElement("p",{style:{textDecoration:x?"line-through":"none"}},t&&t.id.title),z===O.userId&&s.a.createElement(m.a,{size:"mobile",danger:!0,onClick:function(){D()}},"Delete"),s.a.createElement(m.a,{size:"mobile",onClick:function(){v(!0)}},"Show Details"),z===O.userId&&s.a.createElement(m.a,{size:"mobile",inverse:!0,onClick:function(){C(!x),L()}},x?"Not Visited":"Visited")))};a(160),t.default=function(){var e=Object(h.a)(),t=e.isLoading,a=e.error,n=e.sendRequest,m=e.clearError,d=Object(l.useState)(),k=Object(o.a)(d,2),v=k[0],N=k[1],w=Object(i.h)().userId,x=Object(l.useContext)(p.a),C=function(e){N((function(t){return t.filter((function(t){return t.id._id!==e}))}))};Object(l.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("".concat("https://placesharer.herokuapp.com/api","/user/bucketlist?q=").concat(w));case 3:t=e.sent,N(t.userWithBucketList),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n,w]);var O=Object(l.useState)(),y=Object(o.a)(O,2),g=y[0],j=y[1];return Object(l.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("".concat("https://placesharer.herokuapp.com/api","/users/").concat(w,"/"));case 3:t=e.sent,j(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n,w]),a?s.a.createElement(b.a,{error:a,onClear:m,header:"Hey!"}):t?s.a.createElement("div",{className:"center"},s.a.createElement(f.a,null)):s.a.createElement("div",null,w===x.userId&&s.a.createElement("div",{className:"share-box  no-select"},s.a.createElement("div",{className:"share-button"},s.a.createElement("a",{href:"https://twitter.com/intent/tweet?url=".concat(encodeURIComponent("".concat("https://placesharer.herokuapp.com","/").concat(w,"/bucketlist")),"&text=My+Travel+Bucket+List%2C+Connect+and+Explore.&hashtags=travelling,wanderlust,yourplacesapp")},s.a.createElement("i",{className:"fab fa-twitter-square"})),s.a.createElement("a",{href:"https://www.facebook.com/sharer.php?u=".concat(encodeURIComponent("".concat("https://placesharer.herokuapp.com","/").concat(w,"/bucketlist")))},s.a.createElement("i",{className:"fab fa-facebook-square"}))),s.a.createElement("p",null,"SHARE")),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"bucket-list-content"},s.a.createElement("div",{className:"m-b-2"},s.a.createElement("h2",{className:" white-text fade-in no-select center"},"Bucket List of ",s.a.createElement("span",{className:"m-05 yellow-text"}," ",g&&g.user.name)," ")),v&&0===v.length&&x.userId===w&&s.a.createElement("h2",{className:"center white-text fade-in",style:{flexDirection:"column"}},"No places in your bucket list, check some?",s.a.createElement(u.b,{to:"/"}," Go to home")),x.userId!==w&&v&&0===v.length&&s.a.createElement("h2",{className:"center white-text fade-in"},"No places added!"),v&&v.map((function(e,t){return s.a.createElement(E,{bucket:e,key:t,index:t,deleteBucket:C})})))))}},96:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(4);a(101);t.a=function(e){return e.href?c.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?c.a.createElement(r.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):c.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,id:e.id},e.children)}},97:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(98),o=a(96);t.a=function(e){var t=e.error,a=e.onClear,n=e.header;return c.a.createElement(r.a,{onCancel:a,header:n||"An Error Occurred!!!",show:!!t,footer:c.a.createElement(o.a,{onClick:a},"Okay")},c.a.createElement("div",null,t))}},98:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(12),o=a.n(r),l=(a(100),a(93)),s=a(37),i=function(e){var t=c.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},c.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},c.a.createElement("h2",null,e.header)),c.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},c.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),c.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return o.a.createPortal(t,document.getElementById("modal-hook"))};t.a=function(e){return c.a.createElement(n.Fragment,null,e.show&&c.a.createElement(s.a,{onClick:e.onCancel}),c.a.createElement(l.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},c.a.createElement(i,e)))}}}]);
//# sourceMappingURL=16.e5db1e50.chunk.js.map