(window.webpackJsonp=window.webpackJsonp||[]).push([[45,12],{"0zqC":function(Tn,yn,e){"use strict";e.r(yn);var V=e("tJVT"),t=e("q1tI"),O=e.n(t),L=e("wx14"),fe=e("rePB"),z=e("ODXe"),Be=e("U8pU"),Ie=e("Ff2n"),ce=e("VTBJ"),Jn=e("TSYQ"),Ne=e.n(Jn),Bn=e("Zm9Q"),Kn=e("5Z9U"),Rn=e("6cGi"),pn=e("KQm4"),Qe=e("wgJM"),$n=e("t23M");function Mn(r){var s=Object(t.useRef)(),p=Object(t.useRef)(!1);function b(){for(var S=arguments.length,y=new Array(S),E=0;E<S;E++)y[E]=arguments[E];p.current||(Qe.a.cancel(s.current),s.current=Object(Qe.a)(function(){r.apply(void 0,y)}))}return Object(t.useEffect)(function(){return function(){p.current=!0,Qe.a.cancel(s.current)}},[]),b}function En(r){var s=Object(t.useRef)([]),p=Object(t.useState)({}),b=Object(z.a)(p,2),S=b[1],y=Object(t.useRef)(typeof r=="function"?r():r),E=Mn(function(){var w=y.current;s.current.forEach(function($){w=$(w)}),s.current=[],y.current=w,S({})});function D(w){s.current.push(w),E()}return[y.current,D]}var we=e("4IlW");function qn(r,s){var p,b=r.prefixCls,S=r.id,y=r.active,E=r.rtl,D=r.tab,w=D.key,$=D.tab,x=D.disabled,H=D.closeIcon,U=r.tabBarGutter,oe=r.tabPosition,Z=r.closable,k=r.renderWrapper,ue=r.removeAriaLabel,J=r.editable,ne=r.onClick,se=r.onRemove,q=r.onFocus,le="".concat(b,"-tab");t.useEffect(function(){return se},[]);var ee={};oe==="top"||oe==="bottom"?ee[E?"marginLeft":"marginRight"]=U:ee.marginBottom=U;var be=J&&Z!==!1&&!x;function re(ie){x||ne(ie)}function me(ie){ie.preventDefault(),ie.stopPropagation(),J.onEdit("remove",{key:w,event:ie})}var pe=t.createElement("div",{key:w,ref:s,className:Ne()(le,(p={},Object(fe.a)(p,"".concat(le,"-with-remove"),be),Object(fe.a)(p,"".concat(le,"-active"),y),Object(fe.a)(p,"".concat(le,"-disabled"),x),p)),style:ee,onClick:re},t.createElement("div",{role:"tab","aria-selected":y,id:S&&"".concat(S,"-tab-").concat(w),className:"".concat(le,"-btn"),"aria-controls":S&&"".concat(S,"-panel-").concat(w),"aria-disabled":x,tabIndex:x?null:0,onClick:function(Q){Q.stopPropagation(),re(Q)},onKeyDown:function(Q){[we.a.SPACE,we.a.ENTER].includes(Q.which)&&(Q.preventDefault(),re(Q))},onFocus:q},$),be&&t.createElement("button",{type:"button","aria-label":ue||"remove",tabIndex:0,className:"".concat(le,"-remove"),onClick:function(Q){Q.stopPropagation(),me(Q)}},H||J.removeIcon||"\xD7"));return k&&(pe=k(pe)),pe}var wn=t.forwardRef(qn),_n={width:0,height:0,left:0,top:0};function at(r,s,p){return Object(t.useMemo)(function(){for(var b,S=new Map,y=s.get((b=r[0])===null||b===void 0?void 0:b.key)||_n,E=y.left+y.width,D=0;D<r.length;D+=1){var w=r[D].key,$=s.get(w);if(!$){var x;$=s.get((x=r[D-1])===null||x===void 0?void 0:x.key)||_n}var H=S.get(w)||Object(ce.a)({},$);H.right=E-H.left-H.width,S.set(w,H)}return S},[r.map(function(b){return b.key}).join("_"),s,p])}var st={width:0,height:0,left:0,top:0,right:0};function A(r,s,p,b,S){var y=S.tabs,E=S.tabPosition,D=S.rtl,w,$,x;["top","bottom"].includes(E)?(w="width",$=D?"right":"left",x=Math.abs(s.left)):(w="height",$="top",x=-s.top);var H=s[w],U=p[w],oe=b[w],Z=H;return U+oe>H&&(Z=H-oe),Object(t.useMemo)(function(){if(!y.length)return[0,0];for(var k=y.length,ue=k,J=0;J<k;J+=1){var ne=r.get(y[J].key)||st;if(ne[$]+ne[w]>x+Z){ue=J-1;break}}for(var se=0,q=k-1;q>=0;q-=1){var le=r.get(y[q].key)||st;if(le[$]<x){se=q+1;break}}return[se,ue]},[r,x,Z,E,y.map(function(k){return k.key}).join("_"),D])}var F=e("Gytx"),N=e.n(F),d=e("Kwbf");function o(r,s){var p=r.prefixCls,b=r.invalidate,S=r.item,y=r.renderItem,E=r.responsive,D=r.registerSize,w=r.itemKey,$=r.className,x=r.style,H=r.children,U=r.display,oe=r.order,Z=r.component,k=Z===void 0?"div":Z,ue=Object(Ie.a)(r,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),J=E&&!U;function ne(be){D(w,be)}t.useEffect(function(){return function(){ne(null)}},[]);var se=y&&S!==void 0?y(S):H,q;b||(q={opacity:J?0:1,height:J?0:void 0,overflowY:J?"hidden":void 0,order:E?oe:void 0,pointerEvents:J?"none":void 0});var le={};J&&(le["aria-hidden"]=!0);var ee=t.createElement(k,Object(L.a)({className:Ne()(!b&&p,$),style:Object(ce.a)(Object(ce.a)({},q),x)},le,ue,{ref:s}),se);return E&&(ee=t.createElement($n.default,{onResize:function(re){var me=re.offsetWidth;ne(me)}},ee)),ee}var f=t.forwardRef(o);f.displayName="Item";var g=f;function C(){var r=Object(t.useState)({}),s=Object(z.a)(r,2),p=s[1],b=Object(t.useRef)([]),S=Object(t.useRef)(!1),y=0,E=0;Object(t.useEffect)(function(){return function(){S.current=!0}},[]);function D(w){var $=y;y+=1,b.current.length<$+1&&(b.current[$]=w);var x=b.current[$];function H(U){b.current[$]=typeof U=="function"?U(b.current[$]):U,Qe.a.cancel(E),E=Object(Qe.a)(function(){S.current||p({})})}return[x,H]}return D}var a=function(s,p){var b=t.useContext(T);if(!b){var S=s.component,y=S===void 0?"div":S,E=Object(Ie.a)(s,["component"]);return t.createElement(y,Object(L.a)({},E,{ref:p}))}var D=b.className,w=Object(Ie.a)(b,["className"]),$=s.className,x=Object(Ie.a)(s,["className"]);return t.createElement(T.Provider,{value:null},t.createElement(g,Object(L.a)({ref:p,className:Ne()(D,$)},w,x)))},l=t.forwardRef(a);l.displayName="RawItem";var i=l,T=t.createContext(null),K="responsive",R="invalidate";function u(r){return"+ ".concat(r.length," ...")}function j(r,s){var p=r.prefixCls,b=p===void 0?"rc-overflow":p,S=r.data,y=S===void 0?[]:S,E=r.renderItem,D=r.renderRawItem,w=r.itemKey,$=r.itemWidth,x=$===void 0?10:$,H=r.ssr,U=r.style,oe=r.className,Z=r.maxCount,k=r.renderRest,ue=r.renderRawRest,J=r.suffix,ne=r.component,se=ne===void 0?"div":ne,q=r.itemComponent,le=r.onVisibleChange,ee=Object(Ie.a)(r,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=C(),re=H==="full",me=be(null),pe=Object(z.a)(me,2),ie=pe[0],Q=pe[1],de=ie||0,ye=be(new Map),ge=Object(z.a)(ye,2),Ee=ge[0],We=ge[1],Oe=be(0),Se=Object(z.a)(Oe,2),Ke=Se[0],Te=Se[1],Fe=be(0),Pe=Object(z.a)(Fe,2),$e=Pe[0],_e=Pe[1],xe=be(0),Je=Object(z.a)(xe,2),He=Je[0],Le=Je[1],jn=Object(t.useState)(null),rn=Object(z.a)(jn,2),Xe=rn[0],ln=rn[1],bn=Object(t.useState)(null),On=Object(z.a)(bn,2),Ae=On[0],Ge=On[1],en=t.useMemo(function(){return Ae===null&&re?Number.MAX_SAFE_INTEGER:Ae||0},[Ae,ie]),Ze=Object(t.useState)(!1),Wn=Object(z.a)(Ze,2),Un=Wn[0],Ln=Wn[1],an="".concat(b,"-item"),Dn=Math.max(Ke,$e),un=y.length&&Z===K,Pn=Z===R,nn=un||typeof Z=="number"&&y.length>Z,sn=Object(t.useMemo)(function(){var ve=y;return un?ie===null&&re?ve=y:ve=y.slice(0,Math.min(y.length,de/x)):typeof Z=="number"&&(ve=y.slice(0,Z)),ve},[y,x,ie,Z,un]),Fn=Object(t.useMemo)(function(){return un?y.slice(en+1):y.slice(sn.length)},[y,sn,un,en]),mn=Object(t.useCallback)(function(ve,je){var Me;return typeof w=="function"?w(ve):(Me=w&&(ve==null?void 0:ve[w]))!==null&&Me!==void 0?Me:je},[w]),ke=Object(t.useCallback)(E||function(ve){return ve},[E]);function Ye(ve,je){Ge(ve),je||(Ln(ve<y.length-1),le==null||le(ve))}function zn(ve,je){Q(je.clientWidth)}function Gn(ve,je){We(function(Me){var tn=new Map(Me);return je===null?tn.delete(ve):tn.set(ve,je),tn})}function nt(ve,je){_e(je),Te($e)}function Cn(ve,je){Le(je)}function gn(ve){return Ee.get(mn(sn[ve],ve))}t.useLayoutEffect(function(){if(de&&Dn&&sn){var ve=He,je=sn.length,Me=je-1;if(!je){Ye(0),ln(null);return}for(var tn=0;tn<je;tn+=1){var Xn=gn(tn);if(Xn===void 0){Ye(tn-1,!0);break}if(ve+=Xn,tn===Me-1&&ve+gn(Me)<=de){Ye(Me),ln(null);break}else if(ve+Dn>de){Ye(tn-1),ln(ve-Xn-He+$e);break}else if(tn===Me){Ye(Me),ln(ve-He);break}}J&&gn(0)+He>de&&ln(null)}},[de,Ee,$e,He,mn,sn]);var Yn=Un&&!!Fn.length,Sn={};Xe!==null&&un&&(Sn={position:"absolute",left:Xe,top:0});var fn={prefixCls:an,responsive:un,component:q,invalidate:Pn},Hn=D?function(ve,je){var Me=mn(ve,je);return t.createElement(T.Provider,{key:Me,value:Object(ce.a)(Object(ce.a)({},fn),{},{order:je,item:ve,itemKey:Me,registerSize:Gn,display:je<=en})},D(ve,je))}:function(ve,je){var Me=mn(ve,je);return t.createElement(g,Object(L.a)({},fn,{order:je,key:Me,item:ve,renderItem:ke,itemKey:Me,registerSize:Gn,display:je<=en}))},In,Qn={order:Yn?en:Number.MAX_SAFE_INTEGER,className:"".concat(an,"-rest"),registerSize:nt,display:Yn};if(ue)ue&&(In=t.createElement(T.Provider,{value:Object(ce.a)(Object(ce.a)({},fn),Qn)},ue(Fn)));else{var dn=k||u;In=t.createElement(g,Object(L.a)({},fn,Qn),typeof dn=="function"?dn(Fn):dn)}var Nn=t.createElement(se,Object(L.a)({className:Ne()(!Pn&&b,oe),style:U,ref:s},ee),sn.map(Hn),nn?In:null,J&&t.createElement(g,Object(L.a)({},fn,{order:en,className:"".concat(an,"-suffix"),registerSize:Cn,display:!0,style:Sn}),J));return un&&(Nn=t.createElement($n.default,{onResize:zn},Nn)),Nn}var m=t.forwardRef(j);m.displayName="Overflow",m.Item=i,m.RESPONSIVE=K,m.INVALIDATE=R;var n=m,v=n,c=e("1OyB"),P=e("vuIU"),I=e("Ji7U"),W=e("LK+K"),X=e("bT9E"),G=e("YrtM"),Y=t.createContext(null);function Re(r,s){var p=Object(ce.a)({},r);return Object.keys(s).forEach(function(b){var S=s[b];S!==void 0&&(p[b]=S)}),p}function qe(r){var s=r.children,p=r.locked,b=Object(Ie.a)(r,["children","locked"]),S=t.useContext(Y),y=Object(G.a)(function(){return Re(S,b)},[S,b],function(E,D){return!p&&(E[0]!==D[0]||!N()(E[1],D[1]))});return t.createElement(Y.Provider,{value:y},s)}function cn(r,s,p,b){var S=t.useContext(Y),y=S.activeKey,E=S.onActive,D=S.onInactive,w={active:y===r};return s||(w.onMouseEnter=function($){p==null||p({key:r,domEvent:$}),E(r)},w.onMouseLeave=function($){b==null||b({key:r,domEvent:$}),D(r)}),w}function hn(r){var s=r.item,p=Object(Ie.a)(r,["item"]);return Object.defineProperty(p,"item",{get:function(){return Object(d.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),s}}),p}function h(r){var s=r.icon,p=r.props,b=r.children,S;return typeof s=="function"?S=t.createElement(s,Object(ce.a)({},p)):S=s,S||b||null}function B(r){var s=t.useContext(Y),p=s.mode,b=s.rtl,S=s.inlineIndent;if(p!=="inline")return null;var y=r;return b?{paddingRight:y*S}:{paddingLeft:y*S}}var M=[],he=t.createContext(null);function te(){return t.useContext(he)}var De=t.createContext(M);function Ve(r){var s=t.useContext(De);return t.useMemo(function(){return r!==void 0?[].concat(Object(pn.a)(s),[r]):s},[s,r])}var ze=t.createContext(null),Jt=t.createContext(null);function Ut(r,s){return r===void 0?null:"".concat(r,"-").concat(s)}function zt(r){var s=t.useContext(Jt);return Ut(s,r)}var br=function(r){Object(I.a)(p,r);var s=Object(W.a)(p);function p(){return Object(c.a)(this,p),s.apply(this,arguments)}return Object(P.a)(p,[{key:"render",value:function(){var S=this.props,y=S.title,E=S.attribute,D=S.elementRef,w=Object(Ie.a)(S,["title","attribute","elementRef"]),$=Object(X.a)(w,["eventKey"]);return Object(d.a)(!E,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(v.Item,Object(L.a)({},E,{title:typeof y=="string"?y:void 0},$,{ref:D}))}}]),p}(t.Component),Or=function(s){var p,b=s.style,S=s.className,y=s.eventKey,E=s.disabled,D=s.itemIcon,w=s.children,$=s.role,x=s.onMouseEnter,H=s.onMouseLeave,U=s.onClick,oe=s.onKeyDown,Z=s.onFocus,k=Object(Ie.a)(s,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ue=zt(y),J=t.useContext(Y),ne=J.prefixCls,se=J.onItemClick,q=J.disabled,le=J.overflowDisabled,ee=J.itemIcon,be=J.selectedKeys,re=J.onActive,me="".concat(ne,"-item"),pe=t.useRef(),ie=t.useRef(),Q=q||E,de=Ve(y),ye=function(xe){return{key:y,keyPath:de,item:pe.current,domEvent:xe}},ge=D||ee,Ee=cn(y,Q,x,H),We=Ee.active,Oe=Object(Ie.a)(Ee,["active"]),Se=be.includes(y),Ke=B(de.length),Te=function(xe){if(!Q){var Je=ye(xe);U==null||U(hn(Je)),se(Je)}},Fe=function(xe){if(oe==null||oe(xe),xe.which===we.a.ENTER){var Je=ye(xe);U==null||U(hn(Je)),se(Je)}},Pe=function(xe){re(y),Z==null||Z(xe)},$e={};return s.role==="option"&&($e["aria-selected"]=Se),t.createElement(br,Object(L.a)({ref:pe,elementRef:ie,role:$===null?"none":$||"menuitem",tabIndex:E?null:-1,"data-menu-id":le&&ue?null:ue},k,Oe,$e,{component:"li","aria-disabled":E,style:Object(ce.a)(Object(ce.a)({},Ke),b),className:Ne()(me,(p={},Object(fe.a)(p,"".concat(me,"-active"),We),Object(fe.a)(p,"".concat(me,"-selected"),Se),Object(fe.a)(p,"".concat(me,"-disabled"),Q),p),S),onClick:Te,onKeyDown:Fe,onFocus:Pe}),w,t.createElement(h,{props:Object(ce.a)(Object(ce.a)({},s),{},{isSelected:Se}),icon:ge}))};function Cr(r){var s=r.eventKey,p=te(),b=Ve(s);return t.useEffect(function(){if(p)return p.registerPath(s,b),function(){p.unregisterPath(s,b)}},[b]),p?null:t.createElement(Or,r)}var Dt=Cr;function Pt(r,s){return Object(Bn.a)(r).map(function(p,b){if(t.isValidElement(p)){var S=p.key;return S==null&&(S="tmp_key-".concat([].concat(Object(pn.a)(s),[b]).join("-"))),t.cloneElement(p,{key:S,eventKey:S})}return p})}function et(r){var s=t.useRef(r);s.current=r;var p=t.useCallback(function(){for(var b,S=arguments.length,y=new Array(S),E=0;E<S;E++)y[E]=arguments[E];return(b=s.current)===null||b===void 0?void 0:b.call.apply(b,[s].concat(y))},[]);return r?p:void 0}var Sr=function(s,p){var b=s.className,S=s.children,y=Object(Ie.a)(s,["className","children"]),E=t.useContext(Y),D=E.prefixCls,w=E.mode;return t.createElement("ul",Object(L.a)({className:Ne()(D,"".concat(D,"-sub"),"".concat(D,"-").concat(w==="inline"?"inline":"vertical"),b)},y,{"data-menu-list":!0,ref:p}),S)},Gt=t.forwardRef(Sr);Gt.displayName="SubMenuList";var Yt=Gt,Rr=e("uciX"),xn={adjustX:1,adjustY:1},Ht={topLeft:{points:["bl","tl"],overflow:xn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:xn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:xn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:xn,offset:[4,0]}},Er={topLeft:{points:["bl","tl"],overflow:xn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:xn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:xn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:xn,offset:[4,0]}},fa=Ht;function Qt(r,s,p){if(s)return s;if(p)return p[r]||p.other}var jr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(r){var s=r.prefixCls,p=r.visible,b=r.children,S=r.popup,y=r.popupClassName,E=r.popupOffset,D=r.disabled,w=r.mode,$=r.onVisibleChange,x=t.useContext(Y),H=x.getPopupContainer,U=x.rtl,oe=x.subMenuOpenDelay,Z=x.subMenuCloseDelay,k=x.builtinPlacements,ue=x.triggerSubMenuAction,J=x.forceSubMenuRender,ne=x.motion,se=x.defaultMotions,q=t.useState(!1),le=Object(z.a)(q,2),ee=le[0],be=le[1],re=U?Object(ce.a)(Object(ce.a)({},Er),k):Object(ce.a)(Object(ce.a)({},Ht),k),me=jr[w],pe=Qt(w,ne,se),ie=Object(ce.a)(Object(ce.a)({},pe),{},{leavedClassName:"".concat(s,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Q=t.useRef();return t.useEffect(function(){return Q.current=Object(Qe.a)(function(){be(p)}),function(){Qe.a.cancel(Q.current)}},[p]),t.createElement(Rr.a,{prefixCls:s,popupClassName:Ne()("".concat(s,"-popup"),Object(fe.a)({},"".concat(s,"-rtl"),U),y),stretch:w==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:re,popupPlacement:me,popupVisible:ee,popup:S,popupAlign:E&&{offset:E},action:D?[]:[ue],mouseEnterDelay:oe,mouseLeaveDelay:Z,onPopupVisibleChange:$,forceRender:J,popupMotion:ie},b)}var Pr=e("8XRh");function Fr(r){var s=r.id,p=r.open,b=r.keyPath,S=r.children,y="inline",E=t.useContext(Y),D=E.prefixCls,w=E.forceSubMenuRender,$=E.motion,x=E.defaultMotions,H=E.mode,U=t.useRef(!1);U.current=H===y;var oe=t.useState(!U.current),Z=Object(z.a)(oe,2),k=Z[0],ue=Z[1],J=U.current?p:!1;t.useEffect(function(){U.current&&ue(!1)},[H]);var ne=Object(ce.a)({},Qt(y,$,x));b.length>1&&(ne.motionAppear=!1);var se=ne.onVisibleChanged;return ne.onVisibleChanged=function(q){return!U.current&&!q&&ue(!0),se==null?void 0:se(q)},k?null:t.createElement(qe,{mode:y,locked:!U.current},t.createElement(Pr.default,Object(L.a)({visible:J},ne,{forceRender:w,removeOnLeave:!1,leavedClassName:"".concat(D,"-hidden")}),function(q){var le=q.className,ee=q.style;return t.createElement(Yt,{id:s,className:le,style:ee},S)}))}var Ir=function(s){var p,b=s.style,S=s.className,y=s.title,E=s.eventKey,D=s.disabled,w=s.internalPopupClose,$=s.children,x=s.itemIcon,H=s.expandIcon,U=s.popupClassName,oe=s.popupOffset,Z=s.onClick,k=s.onMouseEnter,ue=s.onMouseLeave,J=s.onTitleClick,ne=s.onTitleMouseEnter,se=s.onTitleMouseLeave,q=Object(Ie.a)(s,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),le=zt(E),ee=t.useContext(Y),be=ee.prefixCls,re=ee.mode,me=ee.openKeys,pe=ee.disabled,ie=ee.overflowDisabled,Q=ee.activeKey,de=ee.selectedKeys,ye=ee.itemIcon,ge=ee.expandIcon,Ee=ee.onItemClick,We=ee.onOpenChange,Oe=ee.onActive,Se=t.useContext(ze),Ke=Se.isSubPathKey,Te=Ve(),Fe="".concat(be,"-submenu"),Pe=pe||D,$e=t.useRef(),_e=t.useRef(),xe=x||ye,Je=H||ge,He=me.includes(E),Le=!ie&&He,jn=Ke(de,E),rn=cn(E,Pe,ne,se),Xe=rn.active,ln=Object(Ie.a)(rn,["active"]),bn=t.useState(!1),On=Object(z.a)(bn,2),Ae=On[0],Ge=On[1],en=function(Ye){Pe||Ge(Ye)},Ze=function(Ye){en(!0),k==null||k({key:E,domEvent:Ye})},Wn=function(Ye){en(!1),ue==null||ue({key:E,domEvent:Ye})},Un=t.useMemo(function(){return Xe||(re!=="inline"?Ae||Ke([Q],E):!1)},[re,Xe,Q,Ae,E,Ke]),Ln=B(Te.length),an=function(Ye){Pe||(J==null||J({key:E,domEvent:Ye}),re==="inline"&&We(E,!He))},Dn=et(function(ke){Z==null||Z(hn(ke)),Ee(ke)}),un=function(Ye){re!=="inline"&&We(E,Ye)},Pn=function(){Oe(E)},nn=le&&"".concat(le,"-popup"),sn=t.createElement("div",Object(L.a)({role:"menuitem",style:Ln,className:"".concat(Fe,"-title"),tabIndex:Pe?null:-1,ref:$e,title:typeof y=="string"?y:null,"data-menu-id":ie&&le?null:le,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":Pe,onClick:an,onFocus:Pn},ln),y,t.createElement(h,{icon:re!=="horizontal"?Je:null,props:Object(ce.a)(Object(ce.a)({},s),{},{isOpen:Le,isSubMenu:!0})},t.createElement("i",{className:"".concat(Fe,"-arrow")}))),Fn=t.useRef(re);if(re!=="inline"&&(Fn.current=Te.length>1?"vertical":re),!ie){var mn=Fn.current;sn=t.createElement(Dr,{mode:mn,prefixCls:Fe,visible:!w&&Le&&re!=="inline",popupClassName:U,popupOffset:oe,popup:t.createElement(qe,{mode:mn},t.createElement(Yt,{id:nn,ref:_e},$)),disabled:Pe,onVisibleChange:un},sn)}return t.createElement(qe,{onItemClick:Dn,mode:re==="horizontal"?"vertical":re,itemIcon:xe,expandIcon:Je},t.createElement(v.Item,Object(L.a)({role:"none"},q,{component:"li",style:b,className:Ne()(Fe,"".concat(Fe,"-").concat(re),S,(p={},Object(fe.a)(p,"".concat(Fe,"-open"),Le),Object(fe.a)(p,"".concat(Fe,"-active"),Un),Object(fe.a)(p,"".concat(Fe,"-selected"),jn),Object(fe.a)(p,"".concat(Fe,"-disabled"),Pe),p)),onMouseEnter:Ze,onMouseLeave:Wn}),sn,!ie&&t.createElement(Fr,{id:nn,open:Le,keyPath:Te},$)))};function Xt(r){var s=r.eventKey,p=r.children,b=Ve(s),S=Pt(p,b),y=te();t.useEffect(function(){if(y)return y.registerPath(s,b),function(){y.unregisterPath(s,b)}},[b]);var E;return y?E=S:E=t.createElement(Ir,r,S),t.createElement(De.Provider,{value:b},E)}var Nr=e("x/xZ");function Zt(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Nr.a)(r)){var p=r.nodeName.toLowerCase(),b=["input","select","textarea","button"].includes(p)||r.isContentEditable||p==="a"&&!!r.getAttribute("href"),S=r.getAttribute("tabindex"),y=Number(S),E=null;return S&&!Number.isNaN(y)?E=y:b&&E===null&&(E=0),b&&r.disabled&&(E=null),E!==null&&(E>=0||s&&E<0)}return!1}function kt(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=Object(pn.a)(r.querySelectorAll("*")).filter(function(b){return Zt(b,s)});return Zt(r,s)&&p.unshift(r),p}var mt=null;function pa(){mt=document.activeElement}function ha(){mt=null}function va(){if(mt)try{mt.focus()}catch(r){}}function ga(r,s){if(s.keyCode===9){var p=kt(r),b=p[s.shiftKey?0:p.length-1],S=b===document.activeElement||r===document.activeElement;if(S){var y=p[s.shiftKey?p.length-1:0];y.focus(),s.preventDefault()}}}var Ft=we.a.LEFT,It=we.a.RIGHT,Nt=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[Nt,ft,Ft,It];function Ar(r,s,p,b){var S,y,E,D,w="prev",$="next",x="children",H="parent";if(r==="inline"&&b===pt)return{inlineTrigger:!0};var U=(S={},Object(fe.a)(S,Nt,w),Object(fe.a)(S,ft,$),S),oe=(y={},Object(fe.a)(y,Ft,p?$:w),Object(fe.a)(y,It,p?w:$),Object(fe.a)(y,ft,x),Object(fe.a)(y,pt,x),y),Z=(E={},Object(fe.a)(E,Nt,w),Object(fe.a)(E,ft,$),Object(fe.a)(E,pt,x),Object(fe.a)(E,qt,H),Object(fe.a)(E,Ft,p?x:H),Object(fe.a)(E,It,p?H:x),E),k={inline:U,horizontal:oe,vertical:Z,inlineSub:U,horizontalSub:Z,verticalSub:Z},ue=(D=k["".concat(r).concat(s?"":"Sub")])===null||D===void 0?void 0:D[b];switch(ue){case w:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case x:return{offset:1,sibling:!1};default:return null}}function Tr(r){for(var s=r;s;){if(s.getAttribute("data-menu-list"))return s;s=s.parentElement}return null}function Br(r,s){for(var p=r||document.activeElement;p;){if(s.has(p))return p;p=p.parentElement}return null}function Kr(r,s){var p=kt(r,!0);return p.filter(function(b){return s.has(b)})}function er(r,s,p){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!r)return null;var S=Kr(r,s),y=S.length,E=S.findIndex(function(D){return p===D});return b<0?E===-1?E=y-1:E-=1:b>0&&(E+=1),E=(E+y)%y,S[E]}function Mr(r,s,p,b,S,y,E,D,w,$){var x=t.useRef(),H=t.useRef();H.current=s;var U=function(){Qe.a.cancel(x.current)};return t.useEffect(function(){return function(){U()}},[]),function(oe){var Z=oe.which;if([].concat(_t,[pt,qt]).includes(Z)){var k,ue,J,ne=function(){k=new Set,ue=new Map,J=new Map;var ye=y();return ye.forEach(function(ge){var Ee=document.querySelector("[data-menu-id='".concat(Ut(b,ge),"']"));Ee&&(k.add(Ee),J.set(Ee,ge),ue.set(ge,Ee))}),k};ne();var se=ue.get(s),q=Br(se,k),le=J.get(q),ee=Ar(r,E(le,!0).length===1,p,Z);if(!ee)return;_t.includes(Z)&&oe.preventDefault();var be=function(ye){if(ye){var ge=ye,Ee=ye.querySelector("a");(Ee==null?void 0:Ee.getAttribute("href"))&&(ge=Ee);var We=J.get(ye);D(We),U(),x.current=Object(Qe.a)(function(){H.current===We&&ge.focus()})}};if(ee.sibling||!q){var re;!q||r==="inline"?re=S.current:re=Tr(q);var me=er(re,k,q,ee.offset);be(me)}else if(ee.inlineTrigger)w(le);else if(ee.offset>0)w(le,!0),U(),x.current=Object(Qe.a)(function(){ne();var de=q.getAttribute("aria-controls"),ye=document.getElementById(de),ge=er(ye,k);be(ge)},5);else if(ee.offset<0){var pe=E(le,!0),ie=pe[pe.length-2],Q=ue.get(ie);w(ie,!1),be(Q)}}$==null||$(oe)}}var wr=Math.random().toFixed(5).toString().slice(2),nr=0;function Wr(r){var s=Object(Rn.a)(r,{value:r}),p=Object(z.a)(s,2),b=p[0],S=p[1];return t.useEffect(function(){nr+=1;var y="".concat(wr,"-").concat(nr);S("rc-menu-uuid-".concat(y))},[]),b}var ya=e("p8sG");function Lr(r){Promise.resolve().then(r)}var At="__RC_UTIL_PATH_SPLIT__",tr=function(s){return s.join(At)},$r=function(s){return s.split(At)},Tt="rc-menu-more";function xr(){var r=t.useState({}),s=Object(z.a)(r,2),p=s[1],b=Object(t.useRef)(new Map),S=Object(t.useRef)(new Map),y=t.useState([]),E=Object(z.a)(y,2),D=E[0],w=E[1],$=Object(t.useRef)(0),x=Object(t.useCallback)(function(J,ne){var se=tr(ne);S.current.set(se,J),b.current.set(J,se),$.current+=1;var q=$.current;Lr(function(){q===$.current&&p({})})},[]),H=Object(t.useCallback)(function(J,ne){var se=tr(ne);S.current.delete(se),b.current.delete(J)},[]),U=Object(t.useCallback)(function(J){w(J)},[]),oe=Object(t.useCallback)(function(J,ne){var se=b.current.get(J)||"",q=$r(se);return ne&&D.includes(q[0])&&q.unshift(Tt),q},[D]),Z=Object(t.useCallback)(function(J,ne){return J.some(function(se){var q=oe(se,!0);return q.includes(ne)})},[oe]),k=function(){var ne=Object(pn.a)(b.current.keys());return D.length&&ne.push(Tt),ne},ue=Object(t.useCallback)(function(J){var ne="".concat(b.current.get(J)).concat(At),se=new Set;return Object(pn.a)(S.current.keys()).forEach(function(q){q.startsWith(ne)&&se.add(S.current.get(q))}),se},[]);return{registerPath:x,unregisterPath:H,refreshOverflowKeys:U,isSubPathKey:Z,getKeyPath:oe,getKeys:k,getSubPathKeys:ue}}var ht=[],Vr=function(s){var p,b,S=s.prefixCls,y=S===void 0?"rc-menu":S,E=s.style,D=s.className,w=s.tabIndex,$=w===void 0?0:w,x=s.children,H=s.direction,U=s.id,oe=s.mode,Z=oe===void 0?"vertical":oe,k=s.inlineCollapsed,ue=s.disabled,J=s.disabledOverflow,ne=s.subMenuOpenDelay,se=ne===void 0?.1:ne,q=s.subMenuCloseDelay,le=q===void 0?.1:q,ee=s.forceSubMenuRender,be=s.defaultOpenKeys,re=s.openKeys,me=s.activeKey,pe=s.defaultActiveFirst,ie=s.selectable,Q=ie===void 0?!0:ie,de=s.multiple,ye=de===void 0?!1:de,ge=s.defaultSelectedKeys,Ee=s.selectedKeys,We=s.onSelect,Oe=s.onDeselect,Se=s.inlineIndent,Ke=Se===void 0?24:Se,Te=s.motion,Fe=s.defaultMotions,Pe=s.triggerSubMenuAction,$e=Pe===void 0?"hover":Pe,_e=s.builtinPlacements,xe=s.itemIcon,Je=s.expandIcon,He=s.overflowedIndicator,Le=He===void 0?"...":He,jn=s.getPopupContainer,rn=s.onClick,Xe=s.onOpenChange,ln=s.onKeyDown,bn=s.openAnimation,On=s.openTransitionName,Ae=Object(Ie.a)(s,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ge=Pt(x,ht),en=t.useState(!1),Ze=Object(z.a)(en,2),Wn=Ze[0],Un=Ze[1],Ln=t.useRef(),an=Wr(U),Dn=H==="rtl",un=t.useMemo(function(){return Z==="inline"&&k?["vertical",k]:[Z,!1]},[Z,k]),Pn=Object(z.a)(un,2),nn=Pn[0],sn=Pn[1],Fn=t.useState(0),mn=Object(z.a)(Fn,2),ke=mn[0],Ye=mn[1],zn=ke>=Ge.length-1||nn!=="horizontal"||J,Gn=Object(Rn.a)(be,{value:re,postState:function(_){return _||ht}}),nt=Object(z.a)(Gn,2),Cn=nt[0],gn=nt[1],Yn=t.useState(Cn),Sn=Object(z.a)(Yn,2),fn=Sn[0],Hn=Sn[1],In=nn==="inline",Qn=t.useRef(!1);t.useEffect(function(){In&&Hn(Cn)},[Cn]),t.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(In)gn(fn);else{var ae=[];gn(ae),Xe==null||Xe(ae)}},[In]);var dn=xr(),Nn=dn.registerPath,ve=dn.unregisterPath,je=dn.refreshOverflowKeys,Me=dn.isSubPathKey,tn=dn.getKeyPath,Xn=dn.getKeys,gt=dn.getSubPathKeys,wt=t.useMemo(function(){return{registerPath:Nn,unregisterPath:ve}},[Nn,ve]),Wt=t.useMemo(function(){return{isSubPathKey:Me}},[Me]);t.useEffect(function(){je(zn?ht:Ge.slice(ke+1).map(function(ae){return ae.key}))},[ke,zn]);var Lt=Object(Rn.a)(me||pe&&((p=Ge[0])===null||p===void 0?void 0:p.key),{value:me}),tt=Object(z.a)(Lt,2),yt=tt[0],ot=tt[1],bt=et(function(ae){ot(ae)}),$t=et(function(){ot(void 0)}),Ot=Object(Rn.a)(ge||[],{value:Ee,postState:function(_){return Array.isArray(_)?_:_==null?ht:[_]}}),Ct=Object(z.a)(Ot,2),rt=Ct[0],An=Ct[1],St=function(_){if(!!Q){var Ce=_.key,Ue=rt.includes(Ce),on;Ue?on=rt.filter(function(kn){return kn!==Ce}):ye?on=[].concat(Object(pn.a)(rt),[Ce]):on=[Ce],An(on);var Vn=Object(ce.a)(Object(ce.a)({},_),{},{selectedKeys:on});Ue?Oe==null||Oe(Vn):We==null||We(Vn)}},Rt=et(function(ae){rn==null||rn(hn(ae)),St(ae)}),lt=et(function(ae,_){var Ce=Cn.filter(function(on){return on!==ae});if(_)Ce.push(ae);else if(nn!=="inline"){var Ue=gt(ae);Ce=Ce.filter(function(on){return!Ue.has(on)})}N()(Cn,Ce)||(gn(Ce),Xe==null||Xe(Ce))}),Zn=et(jn),ut=function(_,Ce){var Ue=Ce!=null?Ce:!Cn.includes(_);lt(_,Ue)},dt=Mr(nn,yt,Dn,an,Ln,Xn,tn,ot,ut,ln);t.useEffect(function(){Un(!0)},[]);var Et=nn!=="horizontal"||J?Ge:Ge.map(function(ae,_){return t.createElement(qe,{key:ae.key,overflowDisabled:_>ke},ae)}),jt=t.createElement(v,Object(L.a)({id:U,ref:Ln,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:Dt,className:Ne()(y,"".concat(y,"-root"),"".concat(y,"-").concat(nn),D,(b={},Object(fe.a)(b,"".concat(y,"-inline-collapsed"),sn),Object(fe.a)(b,"".concat(y,"-rtl"),Dn),b)),dir:H,style:E,role:"menu",tabIndex:$,data:Et,renderRawItem:function(_){return _},renderRawRest:function(_){var Ce=_.length,Ue=Ce?Ge.slice(-Ce):null;return t.createElement(Xt,{eventKey:Tt,title:Le,disabled:zn,internalPopupClose:Ce===0},Ue)},maxCount:nn!=="horizontal"||J?v.INVALIDATE:v.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(_){Ye(_)},onKeyDown:dt},Ae));return t.createElement(Jt.Provider,{value:an},t.createElement(qe,{prefixCls:y,mode:nn,openKeys:Cn,rtl:Dn,disabled:ue,motion:Wn?Te:null,defaultMotions:Wn?Fe:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:rt,inlineIndent:Ke,subMenuOpenDelay:se,subMenuCloseDelay:le,forceSubMenuRender:ee,builtinPlacements:_e,triggerSubMenuAction:$e,getPopupContainer:Zn,itemIcon:xe,expandIcon:Je,onItemClick:Rt,onOpenChange:lt},t.createElement(ze.Provider,{value:Wt},jt),t.createElement(he.Provider,{value:wt},Ge)))},Jr=Vr,Ur=function(s){var p=s.className,b=s.title,S=s.eventKey,y=s.children,E=Object(Ie.a)(s,["className","title","eventKey","children"]),D=t.useContext(Y),w=D.prefixCls,$="".concat(w,"-item-group");return t.createElement("li",Object(L.a)({},E,{onClick:function(H){return H.stopPropagation()},className:Ne()($,p)}),t.createElement("div",{className:"".concat($,"-title"),title:typeof b=="string"?b:void 0},b),t.createElement("ul",{className:"".concat($,"-list")},y))};function zr(r){var s=r.children,p=Object(Ie.a)(r,["children"]),b=Ve(p.eventKey),S=Pt(s,b),y=te();return y?S:t.createElement(Ur,p,S)}function Gr(r){var s=r.className,p=r.style,b=t.useContext(Y),S=b.prefixCls,y=te();return y?null:t.createElement("li",{className:Ne()("".concat(S,"-item-divider"),s),style:p})}var it=Jr;it.Item=Dt,it.SubMenu=Xt,it.ItemGroup=zr,it.Divider=Gr;var Yr=it,Hr=e("eDIo");function Qr(r,s){var p=r.prefixCls,b=r.editable,S=r.locale,y=r.style;return!b||b.showAdd===!1?null:t.createElement("button",{ref:s,type:"button",className:"".concat(p,"-nav-add"),style:y,"aria-label":(S==null?void 0:S.addAriaLabel)||"Add tab",onClick:function(D){b.onEdit("add",{event:D})}},b.addIcon||"+")}var rr=t.forwardRef(Qr);function Xr(r,s){var p=r.prefixCls,b=r.id,S=r.tabs,y=r.locale,E=r.mobile,D=r.moreIcon,w=D===void 0?"More":D,$=r.moreTransitionName,x=r.style,H=r.className,U=r.editable,oe=r.tabBarGutter,Z=r.rtl,k=r.onTabClick,ue=Object(t.useState)(!1),J=Object(z.a)(ue,2),ne=J[0],se=J[1],q=Object(t.useState)(null),le=Object(z.a)(q,2),ee=le[0],be=le[1],re="".concat(b,"-more-popup"),me="".concat(p,"-dropdown"),pe=ee!==null?"".concat(re,"-").concat(ee):null,ie=y==null?void 0:y.dropdownAriaLabel,Q=t.createElement(Yr,{onClick:function(Se){var Ke=Se.key,Te=Se.domEvent;k(Ke,Te),se(!1)},id:re,tabIndex:-1,role:"listbox","aria-activedescendant":pe,selectedKeys:[ee],"aria-label":ie!==void 0?ie:"expanded dropdown"},S.map(function(Oe){return t.createElement(Dt,{key:Oe.key,id:"".concat(re,"-").concat(Oe.key),role:"option","aria-controls":b&&"".concat(b,"-panel-").concat(Oe.key),disabled:Oe.disabled},Oe.tab)}));function de(Oe){for(var Se=S.filter(function($e){return!$e.disabled}),Ke=Se.findIndex(function($e){return $e.key===ee})||0,Te=Se.length,Fe=0;Fe<Te;Fe+=1){Ke=(Ke+Oe+Te)%Te;var Pe=Se[Ke];if(!Pe.disabled){be(Pe.key);return}}}function ye(Oe){var Se=Oe.which;if(!ne){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Se)&&(se(!0),Oe.preventDefault());return}switch(Se){case we.a.UP:de(-1),Oe.preventDefault();break;case we.a.DOWN:de(1),Oe.preventDefault();break;case we.a.ESC:se(!1);break;case we.a.SPACE:case we.a.ENTER:ee!==null&&k(ee,Oe);break}}Object(t.useEffect)(function(){var Oe=document.getElementById(pe);Oe&&Oe.scrollIntoView&&Oe.scrollIntoView(!1)},[ee]),Object(t.useEffect)(function(){ne||be(null)},[ne]);var ge=Object(fe.a)({},Z?"marginLeft":"marginRight",oe);S.length||(ge.visibility="hidden",ge.order=1);var Ee=Ne()(Object(fe.a)({},"".concat(me,"-rtl"),Z)),We=E?null:t.createElement(Hr.default,{prefixCls:me,overlay:Q,trigger:["hover"],visible:ne,transitionName:$,onVisibleChange:se,overlayClassName:Ee,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(p,"-nav-more"),style:ge,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":re,id:"".concat(b,"-more"),"aria-expanded":ne,onKeyDown:ye},w));return t.createElement("div",{className:Ne()("".concat(p,"-nav-operations"),H),style:x,ref:s},We,t.createElement(rr,{prefixCls:p,locale:y,editable:U}))}var Zr=t.forwardRef(Xr),Bt=Object(t.createContext)(null),kr=.1,ar=.01,vt=20,sr=Math.pow(.995,vt);function qr(r,s){var p=Object(t.useState)(),b=Object(z.a)(p,2),S=b[0],y=b[1],E=Object(t.useState)(0),D=Object(z.a)(E,2),w=D[0],$=D[1],x=Object(t.useState)(0),H=Object(z.a)(x,2),U=H[0],oe=H[1],Z=Object(t.useState)(),k=Object(z.a)(Z,2),ue=k[0],J=k[1],ne=Object(t.useRef)();function se(me){var pe=me.touches[0],ie=pe.screenX,Q=pe.screenY;y({x:ie,y:Q}),window.clearInterval(ne.current)}function q(me){if(!!S){me.preventDefault();var pe=me.touches[0],ie=pe.screenX,Q=pe.screenY;y({x:ie,y:Q});var de=ie-S.x,ye=Q-S.y;s(de,ye);var ge=Date.now();$(ge),oe(ge-w),J({x:de,y:ye})}}function le(){if(!!S&&(y(null),J(null),ue)){var me=ue.x/U,pe=ue.y/U,ie=Math.abs(me),Q=Math.abs(pe);if(Math.max(ie,Q)<kr)return;var de=me,ye=pe;ne.current=window.setInterval(function(){if(Math.abs(de)<ar&&Math.abs(ye)<ar){window.clearInterval(ne.current);return}de*=sr,ye*=sr,s(de*vt,ye*vt)},vt)}}var ee=Object(t.useRef)();function be(me){var pe=me.deltaX,ie=me.deltaY,Q=0,de=Math.abs(pe),ye=Math.abs(ie);de===ye?Q=ee.current==="x"?pe:ie:de>ye?(Q=pe,ee.current="x"):(Q=ie,ee.current="y"),s(-Q,-Q)&&me.preventDefault()}var re=Object(t.useRef)(null);re.current={onTouchStart:se,onTouchMove:q,onTouchEnd:le,onWheel:be},t.useEffect(function(){function me(de){re.current.onTouchStart(de)}function pe(de){re.current.onTouchMove(de)}function ie(de){re.current.onTouchEnd(de)}function Q(de){re.current.onWheel(de)}return document.addEventListener("touchmove",pe,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),r.current.addEventListener("touchstart",me,{passive:!1}),r.current.addEventListener("wheel",Q),function(){document.removeEventListener("touchmove",pe),document.removeEventListener("touchend",ie)}},[])}function _r(){var r=Object(t.useRef)(new Map);function s(b){return r.current.has(b)||r.current.set(b,t.createRef()),r.current.get(b)}function p(b){r.current.delete(b)}return[s,p]}function ir(r,s){var p=t.useRef(r),b=t.useState({}),S=Object(z.a)(b,2),y=S[1];function E(D){var w=typeof D=="function"?D(p.current):D;w!==p.current&&s(w,p.current),p.current=w,y({})}return[p.current,E]}var or=function(s){var p=s.position,b=s.prefixCls,S=s.extra;if(!S)return null;var y,E=S;return p==="right"&&(y=E.right||!E.left&&E||null),p==="left"&&(y=E.left||null),y?t.createElement("div",{className:"".concat(b,"-extra-content")},y):null};function ea(r,s){var p,b=t.useContext(Bt),S=b.prefixCls,y=b.tabs,E=r.className,D=r.style,w=r.id,$=r.animated,x=r.activeKey,H=r.rtl,U=r.extra,oe=r.editable,Z=r.locale,k=r.tabPosition,ue=r.tabBarGutter,J=r.children,ne=r.onTabClick,se=r.onTabScroll,q=Object(t.useRef)(),le=Object(t.useRef)(),ee=Object(t.useRef)(),be=Object(t.useRef)(),re=_r(),me=Object(z.a)(re,2),pe=me[0],ie=me[1],Q=k==="top"||k==="bottom",de=ir(0,function(ae,_){Q&&se&&se({direction:ae>_?"left":"right"})}),ye=Object(z.a)(de,2),ge=ye[0],Ee=ye[1],We=ir(0,function(ae,_){!Q&&se&&se({direction:ae>_?"top":"bottom"})}),Oe=Object(z.a)(We,2),Se=Oe[0],Ke=Oe[1],Te=Object(t.useState)(0),Fe=Object(z.a)(Te,2),Pe=Fe[0],$e=Fe[1],_e=Object(t.useState)(0),xe=Object(z.a)(_e,2),Je=xe[0],He=xe[1],Le=Object(t.useState)(0),jn=Object(z.a)(Le,2),rn=jn[0],Xe=jn[1],ln=Object(t.useState)(0),bn=Object(z.a)(ln,2),On=bn[0],Ae=bn[1],Ge=Object(t.useState)(null),en=Object(z.a)(Ge,2),Ze=en[0],Wn=en[1],Un=Object(t.useState)(null),Ln=Object(z.a)(Un,2),an=Ln[0],Dn=Ln[1],un=Object(t.useState)(0),Pn=Object(z.a)(un,2),nn=Pn[0],sn=Pn[1],Fn=Object(t.useState)(0),mn=Object(z.a)(Fn,2),ke=mn[0],Ye=mn[1],zn=En(new Map),Gn=Object(z.a)(zn,2),nt=Gn[0],Cn=Gn[1],gn=at(y,nt,Pe),Yn="".concat(S,"-nav-operations-hidden"),Sn=0,fn=0;Q?H?(Sn=0,fn=Math.max(0,Pe-Ze)):(Sn=Math.min(0,Ze-Pe),fn=0):(Sn=Math.min(0,an-Je),fn=0);function Hn(ae){return ae<Sn?Sn:ae>fn?fn:ae}var In=Object(t.useRef)(),Qn=Object(t.useState)(),dn=Object(z.a)(Qn,2),Nn=dn[0],ve=dn[1];function je(){ve(Date.now())}function Me(){window.clearTimeout(In.current)}qr(q,function(ae,_){function Ce(Ue,on){Ue(function(Vn){var kn=Hn(Vn+on);return kn})}if(Q){if(Ze>=Pe)return!1;Ce(Ee,ae)}else{if(an>=Je)return!1;Ce(Ke,_)}return Me(),je(),!0}),Object(t.useEffect)(function(){return Me(),Nn&&(In.current=window.setTimeout(function(){ve(0)},100)),Me},[Nn]);function tn(){var ae=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x,_=gn.get(ae)||{width:0,height:0,left:0,right:0,top:0};if(Q){var Ce=ge;H?_.right<ge?Ce=_.right:_.right+_.width>ge+Ze&&(Ce=_.right+_.width-Ze):_.left<-ge?Ce=-_.left:_.left+_.width>-ge+Ze&&(Ce=-(_.left+_.width-Ze)),Ke(0),Ee(Hn(Ce))}else{var Ue=Se;_.top<-Se?Ue=-_.top:_.top+_.height>-Se+an&&(Ue=-(_.top+_.height-an)),Ee(0),Ke(Hn(Ue))}}var Xn=A(gn,{width:Ze,height:an,left:ge,top:Se},{width:rn,height:On},{width:nn,height:ke},Object(ce.a)(Object(ce.a)({},r),{},{tabs:y})),gt=Object(z.a)(Xn,2),wt=gt[0],Wt=gt[1],Lt=y.map(function(ae){var _=ae.key;return t.createElement(wn,{id:w,prefixCls:S,key:_,rtl:H,tab:ae,closable:ae.closable,editable:oe,active:_===x,tabPosition:k,tabBarGutter:ue,renderWrapper:J,removeAriaLabel:Z==null?void 0:Z.removeAriaLabel,ref:pe(_),onClick:function(Ue){ne(_,Ue)},onRemove:function(){ie(_)},onFocus:function(){tn(_),je(),H||(q.current.scrollLeft=0),q.current.scrollTop=0}})}),tt=Mn(function(){var ae,_,Ce,Ue,on,Vn,kn,xt,Vt,la=((ae=q.current)===null||ae===void 0?void 0:ae.offsetWidth)||0,ua=((_=q.current)===null||_===void 0?void 0:_.offsetHeight)||0,mr=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fr=((Ue=be.current)===null||Ue===void 0?void 0:Ue.offsetHeight)||0,da=((on=ee.current)===null||on===void 0?void 0:on.offsetWidth)||0,ca=((Vn=ee.current)===null||Vn===void 0?void 0:Vn.offsetHeight)||0;Wn(la),Dn(ua),sn(mr),Ye(fr);var pr=(((kn=le.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-mr,hr=(((xt=le.current)===null||xt===void 0?void 0:xt.offsetHeight)||0)-fr;$e(pr),He(hr);var vr=(Vt=ee.current)===null||Vt===void 0?void 0:Vt.className.includes(Yn);Xe(pr-(vr?0:da)),Ae(hr-(vr?0:ca)),Cn(function(){var gr=new Map;return y.forEach(function(ma){var yr=ma.key,ct=pe(yr).current;ct&&gr.set(yr,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),gr})}),yt=y.slice(0,wt),ot=y.slice(Wt+1),bt=[].concat(Object(pn.a)(yt),Object(pn.a)(ot)),$t=Object(t.useState)(),Ot=Object(z.a)($t,2),Ct=Ot[0],rt=Ot[1],An=gn.get(x),St=Object(t.useRef)();function Rt(){Qe.a.cancel(St.current)}Object(t.useEffect)(function(){var ae={};return An&&(Q?(H?ae.right=An.right:ae.left=An.left,ae.width=An.width):(ae.top=An.top,ae.height=An.height)),Rt(),St.current=Object(Qe.a)(function(){rt(ae)}),Rt},[An,Q,H]),Object(t.useEffect)(function(){tn()},[x,An,gn,Q]),Object(t.useEffect)(function(){tt()},[H,ue,x,y.map(function(ae){return ae.key}).join("_")]);var lt=!!bt.length,Zn="".concat(S,"-nav-wrap"),ut,dt,Et,jt;return Q?H?(dt=ge>0,ut=ge+Ze<Pe):(ut=ge<0,dt=-ge+Ze<Pe):(Et=Se<0,jt=-Se+an<Je),t.createElement("div",{ref:s,role:"tablist",className:Ne()("".concat(S,"-nav"),E),style:D,onKeyDown:function(){je()}},t.createElement(or,{position:"left",extra:U,prefixCls:S}),t.createElement($n.default,{onResize:tt},t.createElement("div",{className:Ne()(Zn,(p={},Object(fe.a)(p,"".concat(Zn,"-ping-left"),ut),Object(fe.a)(p,"".concat(Zn,"-ping-right"),dt),Object(fe.a)(p,"".concat(Zn,"-ping-top"),Et),Object(fe.a)(p,"".concat(Zn,"-ping-bottom"),jt),p)),ref:q},t.createElement($n.default,{onResize:tt},t.createElement("div",{ref:le,className:"".concat(S,"-nav-list"),style:{transform:"translate(".concat(ge,"px, ").concat(Se,"px)"),transition:Nn?"none":void 0}},Lt,t.createElement(rr,{ref:be,prefixCls:S,locale:Z,editable:oe,style:{visibility:lt?"hidden":null}}),t.createElement("div",{className:Ne()("".concat(S,"-ink-bar"),Object(fe.a)({},"".concat(S,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),t.createElement(Zr,Object(L.a)({},r,{ref:ee,prefixCls:S,tabs:bt,className:!lt&&Yn})),t.createElement(or,{position:"right",extra:U,prefixCls:S}))}var lr=t.forwardRef(ea);function na(r){var s=r.id,p=r.activeKey,b=r.animated,S=r.tabPosition,y=r.rtl,E=r.destroyInactiveTabPane,D=t.useContext(Bt),w=D.prefixCls,$=D.tabs,x=b.tabPane,H=$.findIndex(function(U){return U.key===p});return t.createElement("div",{className:Ne()("".concat(w,"-content-holder"))},t.createElement("div",{className:Ne()("".concat(w,"-content"),"".concat(w,"-content-").concat(S),Object(fe.a)({},"".concat(w,"-content-animated"),x)),style:H&&x?Object(fe.a)({},y?"marginRight":"marginLeft","-".concat(H,"00%")):null},$.map(function(U){return t.cloneElement(U.node,{key:U.key,prefixCls:w,tabKey:U.key,id:s,animated:x,active:U.key===p,destroyInactiveTabPane:E})})))}function ur(r){var s=r.prefixCls,p=r.forceRender,b=r.className,S=r.style,y=r.id,E=r.active,D=r.animated,w=r.destroyInactiveTabPane,$=r.tabKey,x=r.children,H=t.useState(p),U=Object(z.a)(H,2),oe=U[0],Z=U[1];t.useEffect(function(){E?Z(!0):w&&Z(!1)},[E,w]);var k={};return E||(D?(k.visibility="hidden",k.height=0,k.overflowY="hidden"):k.display="none"),t.createElement("div",{id:y&&"".concat(y,"-panel-").concat($),role:"tabpanel",tabIndex:E?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat($),"aria-hidden":!E,style:Object(ce.a)(Object(ce.a)({},k),S),className:Ne()("".concat(s,"-tabpane"),E&&"".concat(s,"-tabpane-active"),b)},(E||oe||p)&&x)}var dr=0;function ta(r){return Object(Bn.a)(r).map(function(s){if(t.isValidElement(s)){var p=s.key!==void 0?String(s.key):void 0;return Object(ce.a)(Object(ce.a)({key:p},s.props),{},{node:s})}return null}).filter(function(s){return s})}function ra(r,s){var p,b=r.id,S=r.prefixCls,y=S===void 0?"rc-tabs":S,E=r.className,D=r.children,w=r.direction,$=r.activeKey,x=r.defaultActiveKey,H=r.editable,U=r.animated,oe=U===void 0?{inkBar:!0,tabPane:!1}:U,Z=r.tabPosition,k=Z===void 0?"top":Z,ue=r.tabBarGutter,J=r.tabBarStyle,ne=r.tabBarExtraContent,se=r.locale,q=r.moreIcon,le=r.moreTransitionName,ee=r.destroyInactiveTabPane,be=r.renderTabBar,re=r.onChange,me=r.onTabClick,pe=r.onTabScroll,ie=Object(Ie.a)(r,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),Q=ta(D),de=w==="rtl",ye;oe===!1?ye={inkBar:!1,tabPane:!1}:oe===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ce.a)({inkBar:!0,tabPane:!1},Object(Be.a)(oe)==="object"?oe:{});var ge=Object(t.useState)(!1),Ee=Object(z.a)(ge,2),We=Ee[0],Oe=Ee[1];Object(t.useEffect)(function(){Oe(Object(Kn.a)())},[]);var Se=Object(Rn.a)(function(){var Ae;return(Ae=Q[0])===null||Ae===void 0?void 0:Ae.key},{value:$,defaultValue:x}),Ke=Object(z.a)(Se,2),Te=Ke[0],Fe=Ke[1],Pe=Object(t.useState)(function(){return Q.findIndex(function(Ae){return Ae.key===Te})}),$e=Object(z.a)(Pe,2),_e=$e[0],xe=$e[1];Object(t.useEffect)(function(){var Ae=Q.findIndex(function(en){return en.key===Te});if(Ae===-1){var Ge;Ae=Math.max(0,Math.min(_e,Q.length-1)),Fe((Ge=Q[Ae])===null||Ge===void 0?void 0:Ge.key)}xe(Ae)},[Q.map(function(Ae){return Ae.key}).join("_"),Te,_e]);var Je=Object(Rn.a)(null,{value:b}),He=Object(z.a)(Je,2),Le=He[0],jn=He[1],rn=k;We&&!["left","right"].includes(k)&&(rn="top"),Object(t.useEffect)(function(){b||(jn("rc-tabs-".concat(dr)),dr+=1)},[]);function Xe(Ae,Ge){me==null||me(Ae,Ge),Fe(Ae),re==null||re(Ae)}var ln={id:Le,activeKey:Te,animated:ye,tabPosition:rn,rtl:de,mobile:We},bn,On=Object(ce.a)(Object(ce.a)({},ln),{},{editable:H,locale:se,moreIcon:q,moreTransitionName:le,tabBarGutter:ue,onTabClick:Xe,onTabScroll:pe,extra:ne,style:J,panes:D});return be?bn=be(On,lr):bn=t.createElement(lr,On),t.createElement(Bt.Provider,{value:{tabs:Q,prefixCls:y}},t.createElement("div",Object(L.a)({ref:s,id:b,className:Ne()(y,"".concat(y,"-").concat(rn),(p={},Object(fe.a)(p,"".concat(y,"-mobile"),We),Object(fe.a)(p,"".concat(y,"-editable"),H),Object(fe.a)(p,"".concat(y,"-rtl"),de),p),E)},ie),bn,t.createElement(na,Object(L.a)({destroyInactiveTabPane:ee},ln,{animated:ye}))))}var cr=t.forwardRef(ra);cr.TabPane=ur;var aa=cr,sa=aa,Kt=e("MZF8"),vn=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Mt(r,s){var p,b=(p=r.match(/\.(\w+)$/))===null||p===void 0?void 0:p[1];return b||(b=s.tsx?"tsx":"jsx"),b}var oa=r=>{var s,p,b,S=Object(t.useRef)(),y=Object(t.useContext)(vn.context),E=y.locale,D=Object(vn.useLocaleProps)(E,r),w=Object(vn.useDemoUrl)(D.identifier),$=D.demoUrl||w,x=(Kt.a===null||Kt.a===void 0?void 0:Kt.a.location.hash)==="#".concat(D.identifier),H=Object.keys(D.sources).length===1,U=Object(vn.useCodeSandbox)((s=D.hideActions)!==null&&s!==void 0&&s.includes("CSB")?null:D),oe=Object(vn.useRiddle)((p=D.hideActions)!==null&&p!==void 0&&p.includes("RIDDLE")?null:D),Z=Object(vn.useMotions)(D.motions||[],S.current),k=Object(V.default)(Z,2),ue=k[0],J=k[1],ne=Object(vn.useCopy)(),se=Object(V.default)(ne,2),q=se[0],le=se[1],ee=Object(t.useState)("_"),be=Object(V.default)(ee,2),re=be[0],me=be[1],pe=Object(t.useState)(Mt(re,D.sources[re])),ie=Object(V.default)(pe,2),Q=ie[0],de=ie[1],ye=Object(t.useState)(Boolean(D.defaultShowCode)),ge=Object(V.default)(ye,2),Ee=ge[0],We=ge[1],Oe=Object(t.useState)(Math.random()),Se=Object(V.default)(Oe,2),Ke=Se[0],Te=Se[1],Fe=D.sources[re][Q]||D.sources[re].content,Pe=Object(vn.useTSPlaygroundUrl)(E,Fe),$e=Object(t.useRef)(),_e=Object(vn.usePrefersColor)(),xe=Object(V.default)(_e,1),Je=xe[0];Object(t.useEffect)(()=>{Te(Math.random())},[Je]);function He(Le){me(Le),de(Mt(Le,D.sources[Le]))}return O.a.createElement("div",{style:D.style,className:[D.className,"__dumi-default-previewer",x?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:D.identifier,"data-debug":D.debug||void 0,"data-iframe":D.iframe||void 0},D.iframe&&O.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),O.a.createElement("div",{ref:S,className:"__dumi-default-previewer-demo",style:{transform:D.transform?"translate(0, 0)":void 0,padding:D.compact||D.iframe&&D.compact!==!1?"0":void 0,background:D.background}},D.iframe?O.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(D.iframe).replace(/(\d)$/,"$1px")},key:Ke,src:$,ref:$e}):D.children),O.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":D.title},D.title&&O.a.createElement(vn.AnchorLink,{to:"#".concat(D.identifier)},D.title),D.description&&O.a.createElement("div",{dangerouslySetInnerHTML:{__html:D.description}})),O.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&O.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),oe&&O.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:oe}),D.motions&&O.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:J,onClick:()=>ue()}),D.iframe&&O.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Te(Math.random())}),!((b=D.hideActions)!==null&&b!==void 0&&b.includes("EXTERNAL"))&&O.a.createElement(vn.Link,{target:"_blank",to:$},O.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),O.a.createElement("span",null),O.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":le,onClick:()=>q(Fe)}),Q==="tsx"&&Ee&&O.a.createElement(vn.Link,{target:"_blank",to:Pe},O.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),O.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Ee?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Ee)})),Ee&&O.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&O.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:re,onChange:He},Object.keys(D.sources).map(Le=>O.a.createElement(ur,{tab:Le==="_"?"index.".concat(Mt(Le,D.sources[Le])):Le,key:Le}))),O.a.createElement("div",{className:"__dumi-default-previewer-source"},O.a.createElement(ia.a,{code:Fe,lang:Q,showCopy:!1}))))},Oa=yn.default=oa},"50YJ":function(Tn,yn,e){"use strict";e.r(yn);var V=e("q1tI"),t=e.n(V),O=e("dEAq"),L=e.n(O),fe=e("0zqC"),z=e("ZpkN"),Be=e("JjdP"),Ie=t.a.memo(Be.default["migrate2-demo"].component);yn.default=ce=>(t.a.useEffect(()=>{ce!=null&&ce.location.hash&&O.AnchorLink.scrollToAnchor(decodeURIComponent(ce.location.hash.slice(1)))},[]),t.a.createElement(t.a.Fragment,null,t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"\u6298\u4E2D\u8FC1\u79FB\u65B9\u6848"},t.a.createElement(O.AnchorLink,{to:"#\u6298\u4E2D\u8FC1\u79FB\u65B9\u6848","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u6298\u4E2D\u8FC1\u79FB\u65B9\u6848"),t.a.createElement("h3",{id:"\u80CC\u666F\u7B80\u8FF0"},t.a.createElement(O.AnchorLink,{to:"#\u80CC\u666F\u7B80\u8FF0","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u80CC\u666F\u7B80\u8FF0"),t.a.createElement("p",null,"0.x \u5230 1.x \u7248\u672C\u7684\u5347\u7EA7\u6700\u5927\u7684\u6539\u52A8\u662F formData \u4ECE\u5916\u7F6E\u53D8\u6210\u4E86\u5185\u7F6E\uFF0C\u597D\u5904\u662F\uFF1A"),t.a.createElement("ol",null,t.a.createElement("li",null,t.a.createElement("p",null,"\u8868\u5355\u63D0\u4EA4\u6536\u675F\u5230\u4E86 FR \u5185\u90E8\uFF0C\u786E\u4FDD\u670D\u52A1\u7AEF\u6821\u9A8C\u3001\u5F02\u6B65\u64CD\u4F5C\u3001\u63D0\u4EA4\u524D\u7684\u6570\u636E\u5904\u7406\u548C\u6027\u80FD\u4F18\u5316\u7B49\u4E00\u7CFB\u5217\u4E8B\u6210\u4E3A\u53EF\u80FD\uFF0C\u4E4B\u524D\u7684\u6784\u5EFA FR \u5B8C\u5168\u65E0\u6CD5\u611F\u77E5\u7528\u6237\u4F55\u65F6\u63D0\u4EA4\u4E86\u8868\u5355\uFF0C\u6240\u4EE5\u5B8C\u5168\u65E0\u6CD5\u5E72\u6D89")),t.a.createElement("li",null,t.a.createElement("p",null,"\u7528\u6237\u4E0D\u7528\u6BCF\u6B21\u90FD\u6A21\u677F\u5316\u5730\u53BB\u5199 formData\u3001onChange\u3001onValidate \u7B49 props\uFF0CshowValidate \u8FD9\u7C7B\u4E0D\u81EA\u7136\u7684 props \u4E5F\u76F4\u63A5\u6210\u4E3A\u5185\u90E8\u903B\u8F91\uFF0C\u800C\u4E0D\u9700\u8981\u7528\u6237\u64CD\u5FC3\u3002\u540C\u65F6\u4E5F\u907F\u514D\u4E86\u5BF9 onChange \u7684\u8BEF\u7528\uFF0C\u6709\u4E0D\u5C11 case \u7528\u6237\u5728 onChange \u91CC\u5199\u4E86\u975E\u5E38\u590D\u6742\u7684\u903B\u8F91\uFF0C\u6CE8\u610F\u8FD9\u4F1A\u5728\u6BCF\u6B21\u8868\u5355\u8F93\u5165\u65F6\u90FD\u89E6\u53D1\uFF0C\u662F\u975E\u5E38\u5F71\u54CD\u6027\u80FD\u7684")),t.a.createElement("li",null,t.a.createElement("p",null,"\u6709\u5F88\u591A\u7EC6\u8282\u4E0A\u7684\u8001\u5927\u96BE\u95EE\u9898\u5728\u65E7\u6A21\u5F0F\u4E0B\u662F\u65E0\u6CD5\u5904\u7406\u7684\uFF0C\u4F8B\u5982\u81EA\u7136\u5224\u65AD\u662F\u5426\u663E\u793A\u6821\u9A8C\u4FE1\u606F\uFF08\u56E0\u4E3A FR \u4E0D\u77E5\u9053\u5408\u9002\u63D0\u4EA4\u4E86\uFF09\uFF0C\u4F8B\u5982\u9690\u85CF\u503C\u3001\u7A7A\u503C\u5728\u63D0\u4EA4\u65F6\u53BB\u9664\uFF0C\u4F8B\u5982\u8F93\u5165\u5B57\u7B26\u4E32\u5E26\u524D\u540E\u7A7A\u683C\u63D0\u4EA4\u65F6 trim \u6389\uFF0C\u7B49\u7B49"))),t.a.createElement("h3",{id:"\u5F7B\u5E95\u8FC1\u79FB\u5728\u6709\u4E9B\u9879\u76EE\u4F1A\u5F88\u56F0\u96BE"},t.a.createElement(O.AnchorLink,{to:"#\u5F7B\u5E95\u8FC1\u79FB\u5728\u6709\u4E9B\u9879\u76EE\u4F1A\u5F88\u56F0\u96BE","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5F7B\u5E95\u8FC1\u79FB\u5728\u6709\u4E9B\u9879\u76EE\u4F1A\u5F88\u56F0\u96BE"),t.a.createElement("p",null,"\u5F7B\u5E95\u8FC1\u79FB\u5C31\u662F\u5C06\u66B4\u9732\u5728\u5916\u90E8\u7684 formData/onChange/onValidate \u65B9\u6CD5\u6536\u675F\u5230\u8868\u5355\u5185\u90E8\u81EA\u884C\u5904\u7406\uFF0C\u800C\u5728\u5916\u90E8\u7EDF\u4E00\u4F7F\u7528 form.getValues() \u548C form.setValues() \u6765\u66FF\u6362\u3002\u5F53\u66B4\u9732\u5728\u5916\u90E8\u7684 formData \u5B58\u653E\u5728 context/redux/dva \u91CC\u65F6\uFF0C\u8981\u627E\u5230\u6240\u6709\u5728\u5916\u90E8\u5BF9 formData \u7684\u4F7F\u7528\u548C\u64CD\u4F5C\u4F1A\u53D8\u6210\u8DE8\u591A\u4E2A\u6587\u4EF6\u7684\u201C\u5927\u5DE5\u7A0B\u201D\u3002\u6240\u4EE5\u5BF9\u4E8E\u6B64\u7C7B\u60C5\u51B5\u6211\u4EEC\u9700\u8981\u4E00\u4E2A"),t.a.createElement("h3",{id:"\u6298\u4E2D\u65B9\u6848"},t.a.createElement(O.AnchorLink,{to:"#\u6298\u4E2D\u65B9\u6848","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u6298\u4E2D\u65B9\u6848"),t.a.createElement("p",null,"\u7B14\u8005\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u7684\u6298\u4E2D\u5347\u7EA7\u65B9\u6848\uFF0C\u80FD\u591F\u5728\u6781\u5C0F\u7684\u6539\u52A8\u4E0B\u201C\u517C\u5BB9\u201D\u5B8C\u6210\u5347\u7EA7\uFF1A"),t.a.createElement("p",null,t.a.createElement("strong",null,"FormRender v0.x \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A")),t.a.createElement(z.a,{code:`import React, { useState } from 'react';
import FormRender from 'form-render/lib/antd';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
    },
  },
};

function Demo() {
  const [formData, setData] = useState({});
  const [valid, setValid] = useState([]);
  const [showValidate, setShowValidate] = useState(false);

  const onSubmit = () => {
    setShowValidate(true);
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };

  return (
    <div>
      <FormRender
        schema={schema}
        formData={formData}
        onChange={setData}
        onValidate={setValid}
        showValidate={showValidate}
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}

export default Demo;`,lang:"js"}),t.a.createElement("p",null,"\u8FC1\u79FB\u540E\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A")),t.a.createElement(fe.default,Be.default["migrate2-demo"].previewerProps,t.a.createElement(Ie,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("p",null,"\u6211\u4EEC\u770B\u5230\u57FA\u672C\u6539\u52A8\u5206\u4E24\u6B65"),t.a.createElement("ol",null,t.a.createElement("li",null,"formData/onChange/onValidate/showValidate \u4ECE FR \u7684 props \u53D8\u4E3A useForm \u7684\u5165\u53C2"),t.a.createElement("li",null,"\u5728\u7EC4\u4EF6\u52A0\u8F7D\u65F6\uFF0C\u8C03\u7528 form.init() \u65B9\u6CD5\u521D\u59CB\u5316")),t.a.createElement("h3",{id:"\u7ED3\u8BBA"},t.a.createElement(O.AnchorLink,{to:"#\u7ED3\u8BBA","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u7ED3\u8BBA"),t.a.createElement("p",null,"\u6298\u4E2D\u7684\u5347\u7EA7\u65B9\u6848\u4EE5\u7528\u65B0\u7248 FormRender \u4E3A\u58F3\uFF0C\u7EE7\u7EED\u8D70\u4E86 0.x \u7248\u7684\u72B6\u6001\u5916\u7F6E\u7684\u6A21\u5F0F\uFF0C\u6240\u4EE5\u5347\u7EA7\u6210\u672C\u5F88\u5C0F\uFF0C\u4F46\u540C\u65F6\u4E5F\u65E0\u6CD5\u4EAB\u53D7\u5230 100% \u7684\u65B0\u529F\u80FD\u3002\u6240\u4EE5\u7B14\u8005\u5EFA\u8BAE\u7684\u4F7F\u7528\u573A\u666F\u662F\u5927\u9762\u79EF\u7684\u65E7\u9879\u76EE\u5FEB\u901F\u5347\u7EA7\uFF0C\u4E14\u5F7B\u5E95\u5347\u7EA7\u65B9\u6848\u5F00\u9500\u8F83\u5927\u7684\u60C5\u51B5\u3002")))))},"80pN":function(Tn,yn,e){"use strict";(function(V){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var t=e("MgzW"),O=e("q1tI"),L=e("i8i4"),fe=e("QCnb");function z(h){for(var B="https://reactjs.org/docs/error-decoder.html?invariant="+h,M=1;M<arguments.length;M++)B+="&args[]="+encodeURIComponent(arguments[M]);return"Minified React error #"+h+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Be=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Be.hasOwnProperty("ReactCurrentDispatcher")||(Be.ReactCurrentDispatcher={current:null}),Be.hasOwnProperty("ReactCurrentBatchConfig")||(Be.ReactCurrentBatchConfig={suspense:null});function Ie(h){var B=h,M=h;if(h.alternate)for(;B.return;)B=B.return;else{h=B;do B=h,(B.effectTag&1026)!=0&&(M=B.return),h=B.return;while(h)}return B.tag===3?M:null}function ce(h){if(Ie(h)!==h)throw Error(z(188))}function Jn(h){var B=h.alternate;if(!B){if(B=Ie(h),B===null)throw Error(z(188));return B!==h?null:h}for(var M=h,he=B;;){var te=M.return;if(te===null)break;var De=te.alternate;if(De===null){if(he=te.return,he!==null){M=he;continue}break}if(te.child===De.child){for(De=te.child;De;){if(De===M)return ce(te),h;if(De===he)return ce(te),B;De=De.sibling}throw Error(z(188))}if(M.return!==he.return)M=te,he=De;else{for(var Ve=!1,ze=te.child;ze;){if(ze===M){Ve=!0,M=te,he=De;break}if(ze===he){Ve=!0,he=te,M=De;break}ze=ze.sibling}if(!Ve){for(ze=De.child;ze;){if(ze===M){Ve=!0,M=De,he=te;break}if(ze===he){Ve=!0,he=De,M=te;break}ze=ze.sibling}if(!Ve)throw Error(z(189))}}if(M.alternate!==he)throw Error(z(190))}if(M.tag!==3)throw Error(z(188));return M.stateNode.current===M?h:B}function Ne(){return!0}function Bn(){return!1}function Kn(h,B,M,he){this.dispatchConfig=h,this._targetInst=B,this.nativeEvent=M,h=this.constructor.Interface;for(var te in h)h.hasOwnProperty(te)&&((B=h[te])?this[te]=B(M):te==="target"?this.target=he:this[te]=M[te]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Ne:Bn,this.isPropagationStopped=Bn,this}t(Kn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var h=this.nativeEvent;h&&(h.preventDefault?h.preventDefault():typeof h.returnValue!="unknown"&&(h.returnValue=!1),this.isDefaultPrevented=Ne)},stopPropagation:function(){var h=this.nativeEvent;h&&(h.stopPropagation?h.stopPropagation():typeof h.cancelBubble!="unknown"&&(h.cancelBubble=!0),this.isPropagationStopped=Ne)},persist:function(){this.isPersistent=Ne},isPersistent:Bn,destructor:function(){var h=this.constructor.Interface,B;for(B in h)this[B]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Bn,this._dispatchInstances=this._dispatchListeners=null}}),Kn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(h){return h.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Kn.extend=function(h){function B(){}function M(){return he.apply(this,arguments)}var he=this;B.prototype=he.prototype;var te=new B;return t(te,M.prototype),M.prototype=te,M.prototype.constructor=M,M.Interface=t({},he.Interface,h),M.extend=he.extend,Qe(M),M},Qe(Kn);function Rn(h,B,M,he){if(this.eventPool.length){var te=this.eventPool.pop();return this.call(te,h,B,M,he),te}return new this(h,B,M,he)}function pn(h){if(!(h instanceof this))throw Error(z(279));h.destructor(),10>this.eventPool.length&&this.eventPool.push(h)}function Qe(h){h.eventPool=[],h.getPooled=Rn,h.release=pn}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Mn(h,B){var M={};return M[h.toLowerCase()]=B.toLowerCase(),M["Webkit"+h]="webkit"+B,M["Moz"+h]="moz"+B,M}var En={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionend:Mn("Transition","TransitionEnd")},we={},qn={};$n&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function wn(h){if(we[h])return we[h];if(!En[h])return h;var B=En[h],M;for(M in B)if(B.hasOwnProperty(M)&&M in qn)return we[h]=B[M];return h}var _n=wn("animationend"),at=wn("animationiteration"),st=wn("animationstart"),A=wn("transitionend"),F=null;function N(h){if(F===null)try{var B=("require"+Math.random()).slice(0,7);F=(V&&V[B])("timers").setImmediate}catch(M){F=function(he){var te=new MessageChannel;te.port1.onmessage=he,te.port2.postMessage(void 0)}}return F(h)}var d=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,o=d[11],f=d[12],g=L.unstable_batchedUpdates,C=Be.IsSomeRendererActing,a=typeof fe.unstable_flushAllWithoutAsserting=="function",l=fe.unstable_flushAllWithoutAsserting||function(){for(var h=!1;o();)h=!0;return h};function i(h){try{l(),N(function(){l()?i(h):h()})}catch(B){h(B)}}var T=0,K=!1,R=L.findDOMNode,u=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,j=u[0],m=u[4],n=u[5],v=u[6],c=u[7],P=u[8],I=u[9],W=u[10];function X(){}function G(h,B){if(!h)return[];if(h=Jn(h),!h)return[];for(var M=h,he=[];;){if(M.tag===5||M.tag===6||M.tag===1||M.tag===0){var te=M.stateNode;B(te)&&he.push(te)}if(M.child)M.child.return=M,M=M.child;else{if(M===h)return he;for(;!M.sibling;){if(!M.return||M.return===h)return he;M=M.return}M.sibling.return=M.return,M=M.sibling}}}function Y(h,B){if(h&&!h._reactInternalFiber){var M=""+h;throw h=Array.isArray(h)?"an array":h&&h.nodeType===1&&h.tagName?"a DOM node":M==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":M,Error(z(286,B,h))}}var Re={renderIntoDocument:function(h){var B=document.createElement("div");return L.render(h,B)},isElement:function(h){return O.isValidElement(h)},isElementOfType:function(h,B){return O.isValidElement(h)&&h.type===B},isDOMComponent:function(h){return!(!h||h.nodeType!==1||!h.tagName)},isDOMComponentElement:function(h){return!!(h&&O.isValidElement(h)&&h.tagName)},isCompositeComponent:function(h){return Re.isDOMComponent(h)?!1:h!=null&&typeof h.render=="function"&&typeof h.setState=="function"},isCompositeComponentWithType:function(h,B){return Re.isCompositeComponent(h)?h._reactInternalFiber.type===B:!1},findAllInRenderedTree:function(h,B){return Y(h,"findAllInRenderedTree"),h?G(h._reactInternalFiber,B):[]},scryRenderedDOMComponentsWithClass:function(h,B){return Y(h,"scryRenderedDOMComponentsWithClass"),Re.findAllInRenderedTree(h,function(M){if(Re.isDOMComponent(M)){var he=M.className;typeof he!="string"&&(he=M.getAttribute("class")||"");var te=he.split(/\s+/);if(!Array.isArray(B)){if(B===void 0)throw Error(z(11));B=B.split(/\s+/)}return B.every(function(De){return te.indexOf(De)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(h,B){if(Y(h,"findRenderedDOMComponentWithClass"),h=Re.scryRenderedDOMComponentsWithClass(h,B),h.length!==1)throw Error("Did not find exactly one match (found: "+h.length+") for class:"+B);return h[0]},scryRenderedDOMComponentsWithTag:function(h,B){return Y(h,"scryRenderedDOMComponentsWithTag"),Re.findAllInRenderedTree(h,function(M){return Re.isDOMComponent(M)&&M.tagName.toUpperCase()===B.toUpperCase()})},findRenderedDOMComponentWithTag:function(h,B){if(Y(h,"findRenderedDOMComponentWithTag"),h=Re.scryRenderedDOMComponentsWithTag(h,B),h.length!==1)throw Error("Did not find exactly one match (found: "+h.length+") for tag:"+B);return h[0]},scryRenderedComponentsWithType:function(h,B){return Y(h,"scryRenderedComponentsWithType"),Re.findAllInRenderedTree(h,function(M){return Re.isCompositeComponentWithType(M,B)})},findRenderedComponentWithType:function(h,B){if(Y(h,"findRenderedComponentWithType"),h=Re.scryRenderedComponentsWithType(h,B),h.length!==1)throw Error("Did not find exactly one match (found: "+h.length+") for componentType:"+B);return h[0]},mockComponent:function(h,B){return B=B||h.mockTagName||"div",h.prototype.render.mockImplementation(function(){return O.createElement(B,null,this.props.children)}),this},nativeTouchData:function(h,B){return{touches:[{pageX:h,pageY:B}]}},Simulate:null,SimulateNative:{},act:function(h){function B(){T--,C.current=M,f.current=he}K===!1&&(K=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),T++;var M=C.current,he=f.current;C.current=!0,f.current=!0;try{var te=g(h)}catch(De){throw B(),De}if(te!==null&&typeof te=="object"&&typeof te.then=="function")return{then:function(De,Ve){te.then(function(){1<T||a===!0&&M===!0?(B(),De()):i(function(ze){B(),ze?Ve(ze):De()})},function(ze){B(),Ve(ze)})}};try{T!==1||a!==!1&&M!==!1||l(),B()}catch(De){throw B(),De}return{then:function(De){De()}}}};function qe(h){return function(B,M){if(O.isValidElement(B))throw Error(z(228));if(Re.isCompositeComponent(B))throw Error(z(229));var he=m[h],te=new X;te.target=B,te.type=h.toLowerCase();var De=j(B),Ve=new Kn(he,De,te,B);Ve.persist(),t(Ve,M),he.phasedRegistrationNames?n(Ve):v(Ve),L.unstable_batchedUpdates(function(){c(B),W(Ve)}),P()}}Re.Simulate={};for(var cn in m)Re.Simulate[cn]=qe(cn);function hn(h,B){return function(M,he){var te=new X(h);t(te,he),Re.isDOMComponent(M)?(M=R(M),te.target=M,I(B,1,document,te)):M.tagName&&(te.target=M,I(B,1,document,te))}}[["abort","abort"],[_n,"animationEnd"],[at,"animationIteration"],[st,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[A,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(h){var B=h[1];Re.SimulateNative[B]=hn(B,h[0])}),V.exports=Re.default||Re}).call(this,e("hOG+")(Tn))},JjdP:function(Tn,yn,e){"use strict";e.r(yn);var V=e("9og8"),t=e("WmNS"),O=e.n(t),L=e("LtsZ"),fe=`import React, { useRef } from 'react';
import { CardList, Search, TableContainer, useTable } from 'card-render';
import {
  PlusOutlined,
  EllipsisOutlined,
  SettingOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import request from 'umi-request';

// \u53EF\u4EE5\u4F7F\u7528schema\u7F16\u8F91\u5668\u914D\u7F6E https://form-render.github.io/schema-generator/
const schema = {
  type: 'object',
  properties: {
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u72B6\u6001',
    dataIndex: 'state',
    enum: {
      open: '\u672A\u89E3\u51B3',
      closed: '\u5DF2\u89E3\u51B3',
    },
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: row => (
      <a
        href="https://x-render.gitee.io/form-render/"
        target="_blank"
        rel="noopener noreferrer"
      >
        \u67E5\u770B
      </a>
    ),
  },
];

const searchApi = params => {
  params.pageSize = 2;
  return request
    .get(
      'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/getCardList',
      { params }
    )
    .then(res => {
      console.log('response:', res);
      if (res && res.data) {
        return {
          rows: res.data,
          total: res.data.length,
          pageSize: res.data.pageSize || 2,
        }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
      }
    })
    .catch(e => console.log('Oops, error', e));
};

const searchArr = [
  {
    name: '\u6211\u7684\u6570\u636E',
    api: searchApi,
  },
  {
    name: '\u5168\u90E8\u6570\u636E',
    api: searchApi,
  },
];

// const cardRenderOptions = {
//   type: 'default',
//   header: {
//     title: 'title',
//     extra: (card, index) => (
//       <a
//         onClick={e => {
//           e.stopPropagation();
//         }}
//       >
//         action
//       </a>
//     ),
//   },
//   content: {
//     description: 'description',
//     list: ['creator', 'createTime'],
//     remark: 'remark',
//   },
// };

const cardRenderOptions = {
  type: 'image',
  cover: 'imgUrl',
  // cover: {
  //   dataIndex: 'imgUrl',
  //   width: 100,
  //   height: 100
  // },
  header: {
    title: (card, index) => card.title,
  },
  content: {
    description: (card, index) => card.description,
    // list: ['creator', 'createTime'],
    list: [
      {
        title: '\u521B\u5EFA\u4EBA',
        render: card => card.creator,
      },
      {
        title: '\u521B\u5EFA\u65F6\u95F4',
        dataIndex: 'createTime',
      },
    ],
    remark: 'remark',
  },
  footer: (card, idx) => [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ],
};

const Demo = () => {
  const tableRef = useRef();
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <TableContainer ref={tableRef} searchApi={searchArr}>
        <Search schema={schema} />
        <CardList
          // onCardClick={(item, idx) => alert(JSON.stringify(item))}
          cardRender={cardRenderOptions}
          paginationOptions={{ size: 'small' }}
          toolbarRender={() => [
            <Button
              key="primary"
              type="primary"
              onClick={() => alert('table-render\uFF01')}
            >
              <PlusOutlined />
              \u521B\u5EFA
            </Button>,
          ]}
          toolbarAction
        />
      </TableContainer>
    </div>
  );
};

export default Demo;`,z=`import { get, set, cloneDeep } from 'lodash-es';

// \u540E\u9762\u4E09\u4E2A\u53C2\u6570\u90FD\u662F\u5185\u90E8\u9012\u5F52\u4F7F\u7528\u7684\uFF0C\u5C06schema\u7684\u6811\u5F62\u7ED3\u6784\u6241\u5E73\u5316\u6210\u4E00\u5C42, \u6BCF\u4E2Aitem\u7684\u7ED3\u6784
// {
//   parent: '#',
//   schema: ...,
//   children: []
// }

// TODO: \u53D1\u5E03\u540E\u53BB\u6389
window.log1 = value => {
  console.log('%ccommon:', 'color: #00A7F7; font-weight: 500;', value);
};

window.log2 = value => {
  console.log('%cwarning:', 'color: #f50; font-weight: 500;', value);
};

window.log3 = value => {
  console.log('%csuccess:', 'color: #87d068; font-weight: 500;', value);
};

window.log4 = value => {
  console.log('%cspecial:', 'color: #722ed1; font-weight: 500;', value);
};

export function isUrl(string) {
  const protocolRE = /^(?:\\w+:)?\\/\\/(\\S+)$/;
  // const domainRE = /^[^\\s\\.]+\\.\\S{2,}$/;
  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}

export function isCheckBoxType(schema, readOnly) {
  if (readOnly) return false;
  if (schema.widget === 'checkbox') return true;
  if (schema && schema.type === 'boolean') {
    if (schema.enum) return false;
    if (schema.widget === undefined) return true;
    return false;
  }
}

// a[].b.c => a.b.c
function removeBrackets(string) {
  if (typeof string === 'string') {
    return string.replace(/\\[\\]/g, '');
  } else {
    return string;
  }
}

export function getParentPath(path) {
  if (typeof path === 'string') {
    const pathArr = path.split('.');
    if (pathArr.length === 1) {
      return '#';
    }
    pathArr.pop();
    return pathArr.join('.');
  }
  return '#';
}

export function getValueByPath(formData, path) {
  if (path === '#' || !path) {
    return formData || {};
  } else if (typeof path === 'string') {
    return get(formData, path);
  } else {
    console.error('path has to be a string');
  }
}

//  path: 'a.b[1].c[0]' => { id: 'a.b[].c[]'  dataIndex: [1,0] }
export function destructDataPath(path) {
  let id;
  let dataIndex;
  if (path === '#') {
    return { id: '#', dataIndex: [] };
  }
  if (typeof path !== 'string') {
    throw Error(\`path \${path} is not a string!!! Something wrong here\`);
  }
  const pattern = /\\[[0-9]+\\]/g;
  const matchList = path.match(pattern);
  if (!matchList) {
    id = path;
  } else {
    id = path.replace(pattern, '[]');
    // \u8FD9\u4E2A\u662Fmatch\u4E0B\u6765\u7684\u7ED3\u679C\uFF0C\u53EF\u5B89\u5168\u5904\u7406
    dataIndex = matchList.map(item =>
      Number(item.substring(1, item.length - 1))
    );
  }
  return { id, dataIndex };
}

// id: 'a.b[].c[]'  dataIndex: [1,0] =>  'a.b[1].c[0]'
export function getDataPath(id, dataIndex) {
  if (id === '#') {
    return id;
  }
  if (typeof id !== 'string') {
    throw Error(\`id \${id} is not a string!!! Something wrong here\`);
  }
  let _id = id;
  if (Array.isArray(dataIndex)) {
    // const matches = id.match(/\\[\\]/g) || [];
    // const count = matches.length;
    dataIndex.forEach(item => {
      _id = _id.replace(/\\[\\]/, \`[\${item}]\`);
    });
  }
  return removeBrackets(_id);
}

export function isObjType(schema) {
  return schema && schema.type === 'object' && schema.properties;
}

// TODO: \u652F\u6301\u975E\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u9879
export function isListType(schema) {
  return (
    schema &&
    schema.type === 'array' &&
    isObjType(schema.items) &&
    schema.enum === undefined
  );
}

// TODO: \u68C0\u9A8C\u662F\u5426\u4E22\u8FDB\u53BB\u5404\u79CDschema\u90FD\u80FD\u515C\u5E95\u4E0D\u4F1Acrash
export function flattenSchema(_schema = {}, name = '#', parent, result = {}) {
  const schema = clone(_schema); // TODO: \u662F\u5426\u9700\u8981deepClone\uFF0C\u8FD9\u4E2A\u82B1\u8D39\u662F\u4E0D\u662F\u6709\u70B9\u5927
  let _name = name;
  if (!schema.$id) {
    schema.$id = _name; // \u7ED9\u751F\u6210\u7684schema\u6DFB\u52A0\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6\uFF0C\u65B9\u4FBF\u4ECEschema\u4E2D\u76F4\u63A5\u8BFB\u53D6
  }
  const children = [];
  if (isObjType(schema)) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.properties = {};
  }
  if (isListType(schema)) {
    Object.entries(schema.items.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.items.properties = {};
  }

  const rules = Array.isArray(schema.rules) ? [...schema.rules] : [];
  if (['boolean', 'function', 'string'].indexOf(typeof schema.required) > -1) {
    rules.push({ required: schema.required }); // TODO: \u4E07\u4E00\u5185\u90E8\u5DF2\u7ECF\u7528\u91CD\u590D\u7684required\u89C4\u5219\uFF1F
  }

  if (schema.type) {
    // Check: \u4E3A\u5565\u4E00\u5B9A\u8981\u6709type\uFF1F
    // TODO: \u6CA1\u6709\u60F3\u597D validation \u7684\u90E8\u5206
    result[_name] = { parent, schema: schema, children, rules };
  }
  return result;
}

//////////   old

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

export const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u514B\u9686\u5BF9\u8C61
// function clone1(data) {
//   // data = functionToString(data);
//   try {
//     return JSON.parse(JSON.stringify(data));
//   } catch (e) {
//     return data;
//   }
// }

export const clone = cloneDeep;
// export const clone = clone1;

// export const functionToString = data => {
//   let result;
//   if (isObject(data)) {
//     result = {};
//     Object.keys(data).forEach(key => {
//       result[key] = functionToString(data[key]);
//     });
//     return result;
//   } else if (typeof data === 'function') {
//     return result.toString();
//   }
//   return data;
// };

// '3' => true, 3 => true, undefined => false
export function isLooselyNumber(num) {
  if (typeof num === 'number') return true;
  if (typeof num === 'string') {
    return !Number.isNaN(Number(num));
  }
  return false;
}

export function isCssLength(str) {
  if (typeof str !== 'string') return false;
  return str.match(/^([0-9])*(%|px|rem|em)$/i);
}

// \u6DF1\u5EA6\u5BF9\u6BD4
export function isDeepEqual(param1, param2) {
  if (param1 === undefined && param2 === undefined) return true;
  else if (param1 === undefined || param2 === undefined) return false;
  if (param1 === null && param2 === null) return true;
  else if (param1 === null || param2 === null) return false;
  else if (param1.constructor !== param2.constructor) return false;

  if (param1.constructor === Array) {
    if (param1.length !== param2.length) return false;
    for (let i = 0; i < param1.length; i++) {
      if (param1[i].constructor === Array || param1[i].constructor === Object) {
        if (!isDeepEqual(param1[i], param2[i])) return false;
      } else if (param1[i] !== param2[i]) return false;
    }
  } else if (param1.constructor === Object) {
    if (Object.keys(param1).length !== Object.keys(param2).length) return false;
    for (let i = 0; i < Object.keys(param1).length; i++) {
      const key = Object.keys(param1)[i];
      if (
        param1[key] &&
        typeof param1[key] !== 'number' &&
        (param1[key].constructor === Array ||
          param1[key].constructor === Object)
      ) {
        if (!isDeepEqual(param1[key], param2[key])) return false;
      } else if (param1[key] !== param2[key]) return false;
    }
  } else if (param1.constructor === String || param1.constructor === Number) {
    return param1 === param2;
  }
  return true;
}

// \u65F6\u95F4\u7EC4\u4EF6
export function getFormat(format) {
  let dateFormat;
  switch (format) {
    case 'date':
      dateFormat = 'YYYY-MM-DD';
      break;
    case 'time':
      dateFormat = 'HH:mm:ss';
      break;
    case 'dateTime':
      dateFormat = 'YYYY-MM-DD HH:mm:ss';
      break;
    case 'week':
      dateFormat = 'YYYY-w';
      break;
    case 'year':
      dateFormat = 'YYYY';
      break;
    case 'quarter':
      dateFormat = 'YYYY-Q';
      break;
    case 'month':
      dateFormat = 'YYYY-MM';
      break;
    default:
      // dateTime
      if (typeof format === 'string') {
        dateFormat = format;
      } else {
        dateFormat = 'YYYY-MM-DD';
      }
  }
  return dateFormat;
}

export function hasRepeat(list) {
  return list.find(
    (x, i, self) =>
      i !== self.findIndex(y => JSON.stringify(x) === JSON.stringify(y))
  );
}

// ----------------- schema \u76F8\u5173

// \u5408\u5E76propsSchema\u548CUISchema\u3002\u7531\u4E8E\u4E24\u8005\u7684\u903B\u8F91\u76F8\u5173\u6027\uFF0C\u5408\u5E76\u4E3A\u4E00\u4E2A\u5927schema\u80FD\u7B80\u5316\u5185\u90E8\u5904\u7406
export function combineSchema(propsSchema = {}, uiSchema = {}) {
  const propList = getChildren(propsSchema);
  const newList = propList.map(p => {
    const { name } = p;
    const { type, enum: options, properties, items } = p.schema;
    const isObj = type === 'object' && properties;
    const isArr = type === 'array' && items && !options; // enum + array \u4EE3\u8868\u7684\u591A\u9009\u6846\uFF0C\u6CA1\u6709sub
    const ui = name && uiSchema[p.name];
    if (!ui) {
      return p;
    }
    // \u5982\u679C\u662Flist\uFF0C\u9012\u5F52\u5408\u5E76items
    if (isArr) {
      const newItems = combineSchema(items, ui.items || {});
      return { ...p, schema: { ...p.schema, ...ui, items: newItems } };
    }
    // object\u9012\u5F52\u5408\u5E76\u6574\u4E2Aschema
    if (isObj) {
      const newSchema = combineSchema(p.schema, ui);
      return { ...p, schema: newSchema };
    }
    return { ...p, schema: { ...p.schema, ...ui } };
  });

  const newObj = {};
  newList.forEach(s => {
    newObj[s.name] = s.schema;
  });

  const topLevelUi = {};
  Object.keys(uiSchema).forEach(key => {
    if (typeof key === 'string' && key.substring(0, 3) === 'ui:') {
      topLevelUi[key] = uiSchema[key];
    }
  });
  if (isEmpty(newObj)) {
    return { ...propsSchema, ...topLevelUi };
  }
  return { ...propsSchema, ...topLevelUi, properties: newObj };
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// \u83B7\u5F97propsSchema\u7684children
function getChildren(schema) {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

// \u5408\u5E76\u591A\u4E2Aschema\u6811\uFF0C\u6BD4\u5982\u4E00\u4E2Aschema\u7684\u6811\u8282\u70B9\u662F\u53E6\u4E00\u4E2Aschema
export function combine() {}

// \u4EE3\u66FFeval\u7684\u51FD\u6570
export const parseString = string =>
  Function('"use strict";return (' + string + ')')();

// \u89E3\u6790\u51FD\u6570\u5B57\u7B26\u4E32\u503C
export const evaluateString = (string, formData, rootValue) =>
  Function(\`"use strict";
    const rootValue = \${JSON.stringify(rootValue)};
    const formData = \${JSON.stringify(formData)};
    return (\${string})\`)();

// \u5224\u65ADschema\u7684\u503C\u662F\u662F\u5426\u662F\u201C\u51FD\u6570\u201D
// JSON\u65E0\u6CD5\u4F7F\u7528\u51FD\u6570\u503C\u7684\u53C2\u6570\uFF0C\u6240\u4EE5\u4F7F\u7528"{{...}}"\u6765\u6807\u8BB0\u4E3A\u51FD\u6570\uFF0C\u4E5F\u53EF\u4F7F\u7528@\u6807\u8BB0\uFF0C\u4E0D\u63A8\u8350\u3002
export function isExpression(func) {
  // if (typeof func === 'function') {
  //   const funcString = func.toString();
  //   return (
  //     funcString.indexOf('formData') > -1 ||
  //     funcString.indexOf('rootValue') > -1
  //   );
  // }
  // \u4E0D\u518D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u4E86\uFF01
  if (typeof func !== 'string') return false;
  // \u8FD9\u6837\u7684pattern {{.....}}
  const pattern = /^{{(.+)}}$/;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (
    typeof func === 'string' &&
    func.match(pattern) &&
    !func.match(reg1) &&
    !func.match(reg2)
  ) {
    return true;
  }
  return false;
}

export function parseSingleExpression(func, formData = {}, dataPath) {
  const parentPath = getParentPath(dataPath);
  const parent = getValueByPath(formData, parentPath) || {};
  if (typeof func === 'string') {
    const funcBody = func.substring(2, func.length - 2);
    const str = \`
    return \${funcBody
      .replace(/formData/g, JSON.stringify(formData))
      .replace(/rootValue/g, JSON.stringify(parent))}\`;

    try {
      return Function(str)();
    } catch (error) {
      console.log(error, func, dataPath);
      return func;
    }
    // const funcBody = func.substring(2, func.length - 2);
    // //TODO: \u8FD9\u6837\u6709\u95EE\u9898\uFF0C\u4F8B\u5982 a.b.indexOf(), \u4F1A\u628A a.b.indexOf \u5F53\u505A\u503C
    // const match1 = /formData.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const match2 = /rootValue.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const str = \`
    // return (\${funcBody
    //   .replaceAll(match1, (v, m1) =>
    //     JSON.stringify(getValueByPath(formData, m1))
    //   )
    //   .replaceAll(match2, (v, m1) =>
    //     JSON.stringify(getValueByPath(parent, m1))
    //   )})\`;
    // try {
    //   return Function(str)();
    // } catch (error) {
    //   console.log(error);
    //   return func;
    // }
  } else return func;
}

export const schemaContainsExpression = (schema, shallow = true) => {
  if (isObject(schema)) {
    return Object.keys(schema).some(key => {
      const value = schema[key];
      if (typeof value === 'string') {
        return isExpression(value);
      } else if (
        typeof key === 'string' &&
        key.toLowerCase().indexOf('props') > -1
      ) {
        const propsObj = schema[key];
        if (isObject(propsObj)) {
          return Object.keys(propsObj).some(k => {
            return isExpression(propsObj[k]);
          });
        }
      } else if (!shallow && isObject(value)) {
        return schemaContainsExpression(value, false);
      }
      return false;
    });
  } else {
    return false;
  }
};

// TODO: \u4E24\u4E2A\u4F18\u5316\uFF0C1. \u53EF\u4EE5\u901A\u8FC7\u8868\u8FBE\u5F0F\u7684path\u6765\u5224\u65AD\uFF0C\u907F\u514D\u4E00\u4E9B\u91CD\u590D\u8BA1\u7B97
export const parseAllExpression = (_schema, formData, dataPath) => {
  const schema = clone(_schema);
  Object.keys(schema).forEach(key => {
    const value = schema[key];
    if (isObject(value)) {
      // TODO: dataPath \u8FD9\u8FB9\u8981\u5904\u7406\u4E00\u4E0B\uFF0C\u5426\u5219rootValue\u7C7B\u7684\u6CA1\u6709\u6548\u679C
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseSingleExpression(value, formData, dataPath);
      // console.log(
      //   formData.materialType,
      //   dataPath,
      //   parseSingleExpression(value, formData, dataPath)
      // );
    } else if (
      typeof key === 'string' &&
      key.toLowerCase().indexOf('props') > -1
    ) {
      // \u6709\u53EF\u80FD\u53EB xxxProps
      const propsObj = schema[key];
      if (isObject(propsObj)) {
        Object.keys(propsObj).forEach(k => {
          schema[key][k] = parseSingleExpression(
            propsObj[k],
            formData,
            dataPath
          );
        });
      }
    }
  });
  return schema;
};

// \u5224\u65ADschema\u4E2D\u662F\u5426\u6709\u5C5E\u6027\u503C\u662F\u51FD\u6570\u8868\u8FBE\u5F0F
export function isFunctionSchema(schema) {
  return Object.keys(schema).some(key => {
    if (typeof schema[key] === 'function') {
      return true;
    } else if (typeof schema[key] === 'string') {
      return isExpression(schema[key]);
    } else if (typeof schema[key] === 'object') {
      return isFunctionSchema(schema[key]);
    } else {
      return false;
    }
  });
}

// \u4F8B\u5982\u5F53\u524Ditem\u7684id = '#/obj/input'  propName: 'ui:labelWidth' \u5F80\u4E0A\u4E00\u76F4\u627E\uFF0C\u76F4\u5230\u627E\u5230\u7B2C\u4E00\u4E2A\u4E0D\u662Fundefined\u7684\u503C TODO: \u770B\u770B\u662F\u5426ok
export const getParentProps = (propName, id, flatten) => {
  try {
    const item = flatten[id];
    if (item.schema[propName] !== undefined) return item.schema[propName];
    if (item && item.parent) {
      const parentSchema = flatten[item.parent].schema;
      if (parentSchema[propName] !== undefined) {
        return parentSchema[propName];
      } else {
        return getParentProps(propName, item.parent, flatten);
      }
    }
  } catch (error) {
    return undefined;
  }
};

export const getSaveNumber = () => {
  const searchStr = localStorage.getItem('SAVES');
  if (searchStr) {
    try {
      const saves = JSON.parse(searchStr);
      const length = saves.length;
      if (length) return length + 1;
    } catch (error) {
      return 1;
    }
  } else {
    return 1;
  }
};

export function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ')')();
}

// \u83B7\u5F97propsSchema\u7684children
function getChildren2(schema) {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items.properties;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

export const oldSchemaToNew = schema => {
  if (schema && schema.propsSchema) {
    const { propsSchema, ...rest } = schema;
    return { schema: propsSchema, ...rest };
  }
  return schema;
};

export const newSchemaToOld = setting => {
  if (setting && setting.schema) {
    const { schema, ...rest } = setting;
    return { propsSchema: schema, ...rest };
  }
  return setting;
};

// from FR

export const getEnum = schema => {
  if (!schema) return undefined;
  const itemEnum = schema && schema.items && schema.items.enum;
  const schemaEnum = schema && schema.enum;
  return itemEnum ? itemEnum : schemaEnum;
};

export const getArray = (arr, defaultValue = []) => {
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};

export const isEmail = value => {
  const regex = '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$';
  if (value && new RegExp(regex).test(value)) {
    return true;
  }
  return false;
};

export function defaultGetValueFromEvent(valuePropName, ...args) {
  const event = args[0];
  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}

export const getKeyFromPath = path => {
  try {
    const keyList = path.split('.');
    const last = keyList.slice(-1)[0];
    return last;
  } catch (error) {
    console.error(error, 'getKeyFromPath');
    return '';
  }
};

// \u66F4\u591A\u7684\u503C\u83B7\u53D6
export const getDisplayValue = (value, schema) => {
  if (typeof value === 'boolean') {
    return value ? 'yes' : 'no';
  }
  if (isObjType(schema) || isListType(schema)) {
    return '-';
  }
  if (Array.isArray(schema.enum) && Array.isArray(schema.enumNames)) {
    try {
      return schema.enumNames[schema.enum.indexOf(value)];
    } catch (error) {
      return value;
    }
  }
  return value;
};

// \u53BB\u6389\u6570\u7EC4\u91CC\u7684\u7A7A\u5143\u7D20 {a: [null, {x:1}]} => {a: [{x:1}]}
export const removeEmptyItemFromList = formData => {
  let result = {};
  if (isObject(formData)) {
    Object.keys(formData).forEach(key => {
      result[key] = removeEmptyItemFromList(formData[key]);
    });
  } else if (Array.isArray(formData)) {
    result = formData.filter(item => {
      if (item && JSON.stringify(item) !== '{}') {
        return true;
      }
      return false;
    });
  } else {
    result = formData;
  }
  return result;
};

export const getDescriptorFromSchema = ({ schema, isRequired = true }) => {
  let result = {};
  let singleResult = {};
  if (schema.hidden === true) return { validator: () => true };
  if (isObjType(schema)) {
    result.type = 'object';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    result.fields = {};
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else if (isListType(schema)) {
    result.type = 'array';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    if (typeof schema.min === 'number') {
      result.min = schema.min;
    }
    if (typeof schema.max === 'number') {
      result.max = schema.max;
    }
    result.defaultField = { type: 'object', fields: {} }; // \u76EE\u524D\u5C31\u9ED8\u8BA4\u53EA\u6709object\u7C7B\u578B\u7684 TODO:
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.defaultField.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else {
    // \u5355\u4E2A\u7684\u903B\u8F91
    const processRule = item => {
      if (schema.type) return { ...item, type: schema.type };
      if (item.pattern && typeof item.pattern === 'string') {
        return { ...item, pattern: new RegExp(item.pattern) };
      }
      return item;
    };
    const { required, ...rest } = schema;

    ['type', 'pattern', 'min', 'max', 'len'].forEach(key => {
      if (Object.keys(rest).indexOf(key) > -1) {
        singleResult[key] = rest[key];
      }
    });

    switch (schema.type) {
      case 'range':
        // \u6682\u65F6\u5148\u53BB\u6389\uFF0C\u5E94\u8BE5\u6CA1\u4E8B\u4E86\uFF0C\u5728range\u7EC4\u4EF6\u7684\u6E90\u5934\u4E0A\u628A\u5947\u602A\u7684case\u5E72\u6389\u4E86
        // const rangeValidator = {
        //   validator: (rule, value) => {
        //     const rangeRequired = schema.required === true && isRequired;
        //     // range\u7EC4\u4EF6\u70B9\u51FBclear\uFF0C\u4F1A\u53D8\u6210 ['','']
        //     // range\u7EC4\u4EF6\u5BF9\u5E94\u7684\u503Cbind\u7684\u65F6\u5019\uFF0C\u4F1A\u53D8\u6210 [undefined,undefined]
        //     const notValid1 = value[0] === '' && value[1] === '';
        //     const notValid2 = value[0] === undefined && value[1] === undefined;
        //     if (rangeRequired) {
        //       if (!value) return false;
        //       if (Array.isArray(value)) {
        //         if (notValid1 || notValid2) {
        //           return false;
        //         }
        //         return true;
        //       }
        //       return true;
        //     } else {
        //       return true;
        //     }
        //   },
        //   type: 'array',
        //   message: '\${title}\u5FC5\u586B',
        // };
        // singleResult = rangeValidator;
        singleResult.type = 'array';
        break;
      case 'html':
        singleResult.type = 'string';
        break;
      default:
        break;
    }
    switch (schema.format) {
      case 'email':
      case 'url':
        singleResult.type = schema.format;
        break;
      default:
        break;
    }

    let requiredRule;
    if (isRequired && schema.required === true) {
      requiredRule = { required: true, type: singleResult.type || 'string' };
    }

    if (schema.rules) {
      if (Array.isArray(schema.rules)) {
        const _rules = [];
        schema.rules.forEach(item => {
          if (item.required === true) {
            if (isRequired) {
              requiredRule = item;
            }
          } else {
            _rules.push(processRule(item));
          }
        });
        result = [singleResult, ..._rules];
      } else if (isObject(schema.rules)) {
        // TODO: \u89C4\u8303\u4E0A\u4E0D\u5141\u8BB8rules\u662Fobject\uFF0C\u7701\u4E00\u70B9\u4E8B\u513F
        result = [singleResult, processRule(schema.rules)];
      } else {
        result = singleResult;
      }
    } else {
      result = singleResult;
    }

    if (requiredRule) {
      if (Array.isArray(result)) {
        result.push(requiredRule);
      } else if (isObject(result)) {
        result = [result, requiredRule];
      }
    }

    if (schema.format === 'image') {
      const imgValidator = {
        validator: (rule, value) => {
          const pattern = /([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;
          if (!value) return true; // \u8FD9\u91CC\u5224\u65AD\u5BBD\u4E00\u70B9\uFF0Cundefined\u3001null\u3001'' \u90FD\u5F53\u505A\u6CA1\u6709\u586B\u5199
          return !!pattern.exec(value) || isUrl(value);
        },
        message: '\${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage',
      };
      if (Array.isArray(result)) {
        result.push(imgValidator);
      } else if (isObject(result)) {
        result = [result, imgValidator];
      }
    }
  }
  return result;
};

// async-validator \u4EA7\u51FA\u7684path\u6CA1\u6CD5\u7528\uFF0C\u8F6C\u4E00\u4E0B
// "list.1.userName" => "list[1].userName"
export const formatPathFromValidator = err => {
  const errArr = err.split('.');
  return errArr
    .map(item => {
      if (isNaN(Number(item))) {
        return item;
      } else {
        return \`[\${item}]\`;
      }
    })
    .reduce((a, b) => {
      if (b[0] === '[' || a === '') {
        return a + b;
      } else {
        return a + '.' + b;
      }
    }, '');
};

// schema = {
//   type: 'object',
//   properties: {
//     x: {
//       type: 'object',
//       properties: {
//         y: {
//           type: 'string',
//           required: true,
//         },
//       },
//     },
//   },
// };
// path = 'x.y'
// return {required: true, message?: 'xxxx'}
export const isPathRequired = (path, schema) => {
  let pathArr = path.split('.');
  while (pathArr.length > 0) {
    let [_path, ...rest] = pathArr;
    _path = _path.split('[')[0];
    let childSchema;
    if (isObjType(schema)) {
      childSchema = schema.properties[_path];
    } else if (isListType(schema)) {
      childSchema = schema.items.properties[_path];
    }
    pathArr = rest;
    if (childSchema) {
      return isPathRequired(rest.join('.'), childSchema);
    }

    // \u5355\u4E2A\u7684\u903B\u8F91
    let result = { required: false };
    if (schema.required === true) {
      result.required = true;
    }
    if (schema.rules) {
      const requiredItem = schema.rules.find(item => item.required);
      if (requiredItem) {
        result = requiredItem;
      }
    }
    return result;
  }
};

// _path \u53EA\u4F9B\u5185\u90E8\u9012\u5F52\u4F7F\u7528
export const generateDataSkeleton = (schema, formData, _path = '') => {
  let result = {};
  let _formData = clone(formData);
  result = _formData;
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(key => {
      const childSchema = schema.properties[key];
      const childData = _formData[key];
      const childResult = generateDataSkeleton(
        childSchema,
        childData,
        \`\${_path}.\${key}\`
      );
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    // result = _formData;
  } else {
    if (schema.default !== undefined) {
      result = clone(schema.default);
    } else if (schema.type === 'boolean') {
      // result = false;
      result = undefined;
    } else {
      result = undefined;
    }
  }
  return result;
};

export const translateMessage = (msg, schema) => {
  if (typeof msg !== 'string') {
    return '';
  }
  if (!schema) return msg;
  msg = msg.replace('\${title}', schema.title);
  msg = msg.replace('\${type}', schema.format || schema.type);
  // \u517C\u5BB9\u4EE3\u7801
  if (typeof schema.min === 'number') {
    msg = msg.replace('\${min}', schema.min);
  }
  if (typeof schema.max === 'number') {
    msg = msg.replace('\${max}', schema.max);
  }
  if (schema.rules) {
    const minRule = schema.rules.find(r => r.min !== undefined);
    if (minRule) {
      msg = msg.replace('\${min}', minRule.min);
    }
    const maxRule = schema.rules.find(r => r.max !== undefined);
    if (maxRule) {
      msg = msg.replace('\${max}', maxRule.max);
    }
    const lenRule = schema.rules.find(r => r.len !== undefined);
    if (lenRule) {
      msg = msg.replace('\${len}', lenRule.len);
    }
    const patternRule = schema.rules.find(r => r.pattern !== undefined);
    if (patternRule) {
      msg = msg.replace('\${pattern}', patternRule.pattern);
    }
  }
  return msg;
};

// "objectName": {
//   "title": "\u5BF9\u8C61",
//   "description": "\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",
//   "type": "object",
//   "properties": {

//   }
// }

// "listName": {
//   "title": "\u5BF9\u8C61\u6570\u7EC4",
//   "description": "\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",
//   "type": "array",
//   "items": {
//     "type": "object",
//     "properties": {

//     }
//   }
// }

const changeSchema = (_schema, singleChange) => {
  let schema = clone(_schema);
  schema = singleChange(schema);
  if (isObjType(schema)) {
    let requiredKeys = [];
    if (Array.isArray(schema.required)) {
      requiredKeys = schema.required;
      delete schema.required;
    }
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      if (requiredKeys.indexOf(key) > -1) {
        item.required = true;
      }
      schema.properties[key] = changeSchema(item, singleChange);
    });
  } else if (isListType(schema)) {
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      schema.items.properties[key] = changeSchema(item, singleChange);
    });
  }
  return schema;
};

export const updateSchemaToNewVersion = schema => {
  return changeSchema(schema, updateSingleSchema);
};

const updateSingleSchema = schema => {
  try {
    schema.rules = schema.rules || [];
    schema.props = schema.props || {};
    if (schema['ui:options']) {
      schema.props = schema['ui:options'];
      delete schema['ui:options'];
    }
    if (schema.pattern) {
      const validItem = { pattern: schema.pattern };
      if (schema.message && schema.message.pattern) {
        validItem.message = schema.message.pattern;
      }
      schema.rules.push(validItem);
      delete schema.pattern;
      delete schema.message;
    }
    // min / max
    if (schema.minLength) {
      schema.min = schema.minLength;
      delete schema.minLength;
    }
    if (schema.maxLength) {
      schema.max = schema.maxLength;
      delete schema.maxLength;
    }
    if (schema.minItems) {
      schema.min = schema.minItems;
      delete schema.minItems;
    }
    if (schema.maxItems) {
      schema.max = schema.maxItems;
      delete schema.maxItems;
    }
    if (schema.step) {
      schema.props.step = schema.step;
      delete schema.step;
    }
    // ui:xxx
    if (schema['ui:className']) {
      schema.className = schema['ui:className'];
      delete schema['ui:className'];
    }
    if (schema['ui:hidden']) {
      schema.hidden = schema['ui:hidden'];
      delete schema['ui:hidden'];
    }
    if (schema['ui:readonly']) {
      schema.readOnly = schema['ui:readonly']; // \u6539\u6210\u9A7C\u5CF0\u4E86
      delete schema['ui:readonly'];
    }
    if (schema['ui:disabled']) {
      schema.disabled = schema['ui:disabled'];
      delete schema['ui:disabled'];
    }
    if (schema['ui:width']) {
      schema.width = schema['ui:width'];
      delete schema['ui:width'];
    }
    if (schema['ui:displayType']) {
      schema.displayType = schema['ui:displayType'];
      delete schema['ui:displayType'];
    }
    if (schema['ui:column']) {
      schema.column = schema['ui:column'];
      delete schema['ui:column'];
    }
    if (schema['ui:widget']) {
      schema.widget = schema['ui:widget'];
      delete schema['ui:widget'];
    }
    if (schema['ui:labelWidth']) {
      schema.labelWidth = schema['ui:labelWidth'];
      delete schema['ui:labelWidth'];
    }
    if (schema.rules && schema.rules.length === 0) {
      delete schema.rules;
    }
    if (JSON.stringify(schema.props) === '{}') {
      delete schema.props;
    }
    return schema;
  } catch (error) {
    console.error('schema\u8F6C\u6362\u5931\u8D25\uFF01', error);
    return schema;
  }
};

// \u65E7\u7248schema\u8F6C\u65B0\u7248schema
export const parseExpression = (schema, formData) => {
  let schema1 = parseRootValue(schema);
  let schema2 = replaceParseValue(schema1);
};

// \u68C0\u9A8C\u4E00\u4E2Astring\u662F function\uFF08\u4F20\u7EDF\u6D3B\u7BAD\u5934\u51FD\u6570\uFF09
export const parseFunctionString = string => {
  if (typeof string !== 'string') return false;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (string.match(reg1)) {
    return string.match(reg1)[1];
  }
  if (string.match(reg2)) {
    return string.match(reg2)[1];
  }
  return false;
};

export const completeSchemaWithTheme = (schema = {}, theme = {}) => {
  let result = {};
  if (isObject(schema)) {
    if (schema.theme && theme[schema.theme]) {
      result = { ...schema, ...theme[schema.theme] };
    }
    Object.keys(schema).forEach(key => {
      result[key] = completeSchemaWithTheme(schema[key], theme);
    });
  } else {
    result = schema;
  }
  return result;
};

export const cleanEmpty = obj => {
  if (Array.isArray(obj)) {
    return obj
      .map(v => (v && isObject(v) ? cleanEmpty(v) : v))
      .filter(v => !(v == undefined));
  } else if (isObject(obj)) {
    return Object.entries(obj)
      .map(([k, v]) => [k, v && isObject(v) ? cleanEmpty(v) : v])
      .reduce((a, [k, v]) => (v == undefined ? a : ((a[k] = v), a)), {});
  } else {
    return obj;
  }
};

export const removeHiddenFromResult = (data, flatten) => {
  Object.keys(flatten).forEach(key => {
    const hidden = flatten[key].schema && flatten[key].schema.hidden === true; // Remark: \u6709\u8868\u8FBE\u5F0F\u7684\u60C5\u51B5, \u6682\u65F6\u4E0D\u53BB\u6389\u4E86\uFF08\u6709\u4E1A\u52A1\u53CD\u800C\u662F\u5E0C\u671B\u7559\u4E0B\u7684\uFF09\uFF0C\u5C31\u53BB\u6389 hidden = true \u7684
    if (get(data, key) !== undefined && hidden) {
      set(data, key, undefined);
    }
  });
  return data;
};`,Be=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Ie=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,ce=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,Jn=`export const basic = {
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email\u8F93\u5165\u6846',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};

export const expression = {
  type: 'object',
  properties: {
    input: {
      title: '{{formData.config.title || "\u8F93\u5165\u6846"}}',
      type: 'string',
      placeholder: '{{formData.config.placeholder}}',
      props: {
        size: '{{formData.config.size}}',
      },
      hidden: '{{formData.config.hidden === true}}',
      readOnly: '{{formData.config.readOnly === true}}',
      disabled: '{{formData.config.disabled === true}}',
    },
    rate: {
      title: 'rate',
      type: 'number',
      widget: 'rate',
    },
    config: {
      title: '\u914D\u7F6E',
      type: 'object',
      properties: {
        title: {
          title: 'title',
          type: 'string',
        },
        placeholder: {
          title: 'placeholder',
          type: 'string',
        },
        size: {
          title: 'input\u5927\u5C0F',
          type: 'string',
          enum: ['large', 'middle', 'small'],
          enumNames: ['\u5927', '\u4E2D', '\u5C0F'],
          widget: 'radio',
        },
        hidden: {
          title: '\u662F\u5426\u9690\u85CF',
          type: 'boolean',
        },
        readOnly: {
          title: '\u662F\u5426\u53EA\u8BFB',
          type: 'boolean',
        },
        disabled: {
          title: '\u662F\u5426\u7F6E\u7070',
          type: 'boolean',
        },
      },
    },
  },
  required: [],
};

export const titleTrick = {
  displayType: 'row',
  type: 'object',
  properties: {
    inputName1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      width: '50%',
    },
    desc: {
      type: 'html',
      bind: false,
      default: "\u8865\u5145\u8BF4\u660E <span style='color:red'>hello<span>",
      width: '50%',
    },
  },
};`,Ne=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Slider } from 'antd';
import './index.css';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,Bn=`import React, { useState, useEffect } from 'react';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import MonacoEditor from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema.schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => { }}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <MonacoEditor
              value={schemaStr}
              onChange={handleCodeChange}
            />
          </TabPane>
          <TabPane tab="Data" key="2">
            <MonacoEditor
              value={schema2str(form.getValues())}
              options={{ readOnly: true }}
            />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,Kn=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string",
        "required": true
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      }
    }
  }
}`,Rn=`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, options: uiOptions } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...uiOptions}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,pn=`import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { valueMap, keySuggestions } from './suggestionsMap';

const Demo = ({ value, onChange, options }) => {

  const editorWillMount = (monaco) => {
    monaco.languages.registerCompletionItemProvider('json', {
      provideCompletionItems: (model, position) => {

        // \u5F97\u5230\u5192\u53F7\u4E4B\u524D\u7684\u6587\u672C
        var textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column
        });

        const word = model.getWordUntilPosition(position);
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn
        };

        let propKey = '';
        const match = textUntilPosition.match(/[a-z]+(?=["][:])/)
        if (match && match.length) {
          propKey = match[0];
        }

        const suggestions = propKey ? (valueMap(range)[propKey] || []) : keySuggestions(range)

        return { suggestions }

      },
      triggerCharacters: ['"']
    });
  }

  return (
    <MonacoEditor
      height="800px"
      language="json"
      value={value}
      onChange={onChange}
      editorWillMount={editorWillMount}
      options={options}
    />
  );
};

export default Demo;`,Qe=`import { monaco } from 'react-monaco-editor'

const valueMap = (range) => {
  return {
    widget: [
      {
        label: 'input',
        insertText: 'input',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u8F93\u5165\u6846'
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u591A\u884C\u8F93\u5165\u6846'
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u7EC4\u4EF6'
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u7EC4\u4EF6'
      },
      {
        label: 'dateRange',
        insertText: 'dateRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u8303\u56F4'
      },
      {
        label: 'timeRange',
        insertText: 'timeRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u8303\u56F4'
      },
      {
        label: 'checkbox',
        insertText: 'checkbox',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u662F\u5426\u9009\u62E9'
      },
      {
        label: 'select',
        insertText: 'select',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u5355\u9009'
      },
      {
        label: 'radio',
        insertText: 'radio',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u5355\u9009'
      },
      {
        label: 'multiSelect',
        insertText: 'multiSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u591A\u9009\u6846'
      },
      {
        label: 'checkboxes',
        insertText: 'checkboxes',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u591A\u9009\u6846'
      },
      {
        label: 'cascader',
        insertText: 'cascader',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u7EA7\u8054\u9009\u62E9'
      },
      {
        label: 'treeSelect',
        insertText: 'treeSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6811\u5F62\u9009\u62E9'
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u989C\u8272\u9009\u62E9'
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0A\u4F20\u7EC4\u4EF6'
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09'
      },
      {
        label: 'slider',
        insertText: 'slider',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6ED1\u52A8\u8F93\u5165\u6761'
      },
      {
        label: 'rate',
        insertText: 'rate',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E94\u661F\u8BC4\u5206'
      },
      {
        label: 'map',
        insertText: 'map',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5BF9\u8C61'
      },
      {
        label: 'list0',
        insertText: 'list0',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u590D\u6742\u7ED3\u6784\uFF0C\u4F46item\u6570\u91CF\u4E0D\u5927)'
      },
      {
        label: 'list1',
        insertText: 'list1',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67091-2\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)'
      },
      {
        label: 'list2',
        insertText: 'list2',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67093-5\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)'
      },
      {
        label: 'list3',
        insertText: 'list3',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742)'
      },
    ],
    type: [
      {
        label: 'string',
        insertText: 'string',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'string'
      },
      {
        label: 'number',
        insertText: 'number',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'number'
      },
      {
        label: 'boolean',
        insertText: 'boolean',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'boolean'
      },
      {
        label: 'array',
        insertText: 'array',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'array'
      },
      {
        label: 'object',
        insertText: 'object',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'object'
      },
      {
        label: 'range',
        insertText: 'range',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'range'
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'html'
      },
    ],
    format: [
      {
        label: 'image',
        insertText: 'image',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'image'
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'textarea'
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'color'
      },
      {
        label: 'email',
        insertText: 'email',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'email'
      },
      {
        label: 'url',
        insertText: 'url',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'url'
      },
      {
        label: 'dateTime',
        insertText: 'dateTime',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'dateTime'
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'date'
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'time'
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'upload'
      },
    ],
    displayType: [
      {
        label: 'row',
        insertText: 'row',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5E76\u6392\u5C55\u793A'
      },
      {
        label: 'column',
        insertText: 'column',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E24\u6392\u5C55\u793A'
      },
    ]
  }
}

const keySuggestions =(range) => [
  {
    label: 'title',
    insertText: 'title',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F'
  },
  {
    label: 'description',
    insertText: 'description',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F'
  },
  {
    label: 'type',
    insertText: 'type',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u503C\u7684\u6570\u636E\u7C7B\u578B'
  },
  {
    label: 'format',
    insertText: 'format',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8F93\u5165\u6846\u7684\u683C\u5F0F'
  },
  {
    label: 'default',
    insertText: 'default',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C'
  },
  {
    label: 'required',
    insertText: 'required',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u5FC5\u586B'
  },
  {
    label: 'placeholder',
    insertText: 'placeholder',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'placeholder'
  },
  {
    label: 'bind',
    insertText: 'bind',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'bind'
  },
  {
    label: 'min',
    insertText: 'min',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5C0F\u503C'
  },
  {
    label: 'max',
    insertText: 'max',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5927\u503C'
  },
  {
    label: 'disabled',
    insertText: 'disabled',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u7981\u7528'
  },
  {
    label: 'readOnly',
    insertText: 'readOnly',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u53EA\u8BFB'
  },
  {
    label: 'hidden',
    insertText: 'hidden',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u9690\u85CF'
  },
  {
    label: 'displayType',
    insertText: 'displayType',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u5E03\u5C40'
  },
  {
    label: 'width',
    insertText: 'width',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6'
  },
  {
    label: 'labelWidth',
    insertText: 'labelWidth',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'label \u7684\u5BBD\u5EA6'
  },
  {
    label: 'className',
    insertText: 'className',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'className'
  },
  {
    label: 'widget',
    insertText: 'widget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6E32\u67D3'
  },
  {
    label: 'readOnlyWidget',
    insertText: 'readOnlyWidget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3'
  },
  {
    label: 'extra',
    insertText: 'extra',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F'
  },
  {
    label: 'properties',
    insertText: 'properties',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027(\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\u4E2D\u4F7F\u7528)'
  },
  {
    label: 'items',
    insertText: 'items',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u5217\u8868\u4E2D\u6BCF\u4E2Aitem\u7684\u7ED3\u6784(\u53EA\u5728\u5217\u8868\u4E2D\u4F7F\u7528)'
  },
  {
    label: 'enum',
    insertText: 'enum',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C'
  },
  {
    label: 'enumNames',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u6587\u6848'
  },
  {
    label: 'rules',
    insertText: 'rules',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6821\u9A8Crules'
  },
  {
    label: 'props',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u989D\u5916\u7EC4\u4EF6\u5C5E\u6027'
  },
]

export { valueMap, keySuggestions }`,$n=`.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,Mn=`import React from 'react';
import { Table, Search, TableProvider, useTable } from 'table-render';
import { Tag, Space, Menu, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  return (
    <TableProvider>
      <TableBody />
    </TableProvider>
  );
};

const TableBody = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => message.success('\u590D\u5236\u6210\u529F\uFF01')}>\u590D\u5236</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => message.warning('\u786E\u5B9A\u5220\u9664\u5417\uFF1F')}>\u5220\u9664</div>
      </Menu.Item>
    </Menu>
  );

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi,
          },
        ]}
      />
      <Table
        // size="small"
        columns={columns}
        // headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default Demo;`,En=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const templates = [
  {
    text: '\u6A21\u677F1',
    name: 'something',
    schema: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        inputName: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
        },
        selectName: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
        dateName: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator ref={genRef} defaultValue={schema} templates={templates} />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,we=`import React from 'react';
import Generator, {
  defaultSettings,
  defaultCommonSettings,
  defaultGlobalSettings,
} from 'fr-generator';

const NewWidget = ({ value = 0, onChange }) => (
  <button onClick={() => onChange(value + 1)}>{value}</button>
);

const Demo = () => {
  console.log(defaultSettings, defaultCommonSettings, defaultGlobalSettings);

  return (
    <div style={{ height: '50vh' }}>
      <Generator
        widgets={{ NewWidget }}
        settings={[
          {
            title: '\u4E2A\u4EBA\u4FE1\u606F',
            widgets: [
              {
                text: '\u8BA1\u6570\u5668',
                name: 'asyncSelect',
                schema: {
                  title: '\u8BA1\u6570\u5668',
                  type: 'number',
                  widget: 'NewWidget',
                },
                setting: {
                  api: { title: 'api', type: 'string' },
                },
              },
              {
                text: '\u59D3\u540D',
                name: 'name',
                schema: {
                  title: '\u8F93\u5165\u6846',
                  type: 'string',
                },
                setting: {
                  maxLength: { title: '\u6700\u957F\u5B57\u6570', type: 'number' },
                },
              },
              {
                text: 'object',
                name: 'object',
                schema: {
                  title: '\u5BF9\u8C61',
                  type: 'object',
                  properties: {},
                },
                setting: {},
              },
              {
                text: 'array',
                name: 'array',
                schema: {
                  title: '\u6570\u7EC4',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {},
                  },
                },
                setting: {},
              },
            ],
          },
        ]}
        commonSettings={{
          description: {
            title: '\u81EA\u5B9A\u4E49\u5171\u901A\u7528\u7684\u5165\u53C2',
            type: 'string',
          },
        }}
      />
    </div>
  );
};

export default Demo;`,qn=`import React from 'react';
import Generator from 'fr-generator';
import './index.less';

const {
  Provider,
  Sidebar,
  Canvas,
  Settings,
} = Generator;

const Demo = () => {
  return (
    <div className="fr-generator-playground" style={{ height: '40vh' }}>
      <Provider
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      >
        <div className="fr-generator-container">
          <Settings />
          <Canvas />
          <Sidebar />
        </div>
      </Provider>
    </div>
  );
};

export default Demo;`,wn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,_n=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    array: {
      key: 'array',
      type: 'array',
      name: 'array',
      title: 'Name',
      'x-component': 'arraytable',
      items: {
        type: 'object',
        properties: {
          aa: {
            key: 'aa',
            type: 'string',
            name: 'aa',
            title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
            enum: [
              {
                label: '\u663E\u793A',
                value: true,
              },
              {
                label: '\u9690\u85CF',
                value: false,
              },
            ],
            'x-component': 'input',
          },
          bb: {
            key: 'bb',
            type: 'string',
            name: 'bb',
            title: 'BB',
            'x-component': 'input',
          },
        },
      },
    },
    cc: {
      key: 'cc',
      type: 'string',
      name: 'cc',
      title: 'CC',
      'x-component': 'input',
      'x-component-props': { min: 1 },
    },
  },
};

const stringContains = (str, text) => {
  return str.indexOf(text) > -1;
}

const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u83B7\u5F97 propsSchema \u7684 children
const getChildren2 = (schema) => {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items.properties;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

// formily Schema => FRG schema
const transformFrom = (mySchema, parent = null) => {
  const isObj = mySchema.type === 'object' && mySchema.properties;
  const isList =
    mySchema.type === 'array' && mySchema.items && mySchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (mySchema.enum && Array.isArray(mySchema.enum)) {
      const list = mySchema.enum;
      if (
        isObject(list[0]) &&
        list[0].label !== undefined &&
        list[0].value !== undefined
      ) {
        const _enumNames = list.map(i => i.label);
        const _enum = list.map(i => i.value);
        mySchema.enum = _enum;
        mySchema.enumNames = _enumNames;
      }
    }
  } else {
    const childrenList = getChildren2(mySchema);
    childrenList.map(item => {
      if (isObj) {
        mySchema.properties[item.name] = transformFrom(item.schema, mySchema);
      }
      if (isList) {
        mySchema.items.properties[item.name] = transformFrom(
          item.schema,
          mySchema
        );
      }
    });
  }
  if (mySchema['x-component']) {
    mySchema['widget'] = mySchema['x-component'];
  }
  if (mySchema['x-component-props']) {
    mySchema['props'] = mySchema['x-component-props'];
  }
  if (parent && mySchema.required) {
    if (parent.required && Array.isArray(parent.required)) {
      parent.required.push(mySchema.name);
    } else {
      parent.required = [mySchema.name];
    }
  }
  delete mySchema.key;
  delete mySchema.name;
  delete mySchema.required;
  delete mySchema['x-component'];
  delete mySchema['x-component-props'];
  return mySchema;
};

// FRG schema => formily Schema
const transformTo = (frSchema, parent = null, key = null) => {
  const isObj = frSchema.type === 'object' && frSchema.properties;
  const isList =
    frSchema.type === 'array' && frSchema.items && frSchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (
      frSchema.enum &&
      Array.isArray(frSchema.enum) &&
      frSchema.enumNames &&
      Array.isArray(frSchema.enumNames)
    ) {
      const list = frSchema.enum.map((item, idx) => ({
        value: item,
        label: frSchema.enumNames[idx],
      }));
      frSchema.enum = list;
    }
  } else {
    const childrenList = getChildren2(frSchema);
    childrenList.map(item => {
      if (isObj) {
        frSchema.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
      if (isList) {
        frSchema.items.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
    });
  }
  if (frSchema['widget']) {
    frSchema['x-component'] = frSchema['widget'];
  }
  if (frSchema['props']) {
    frSchema['x-component-props'] = frSchema['props'];
  }
  delete frSchema['widget'];
  delete frSchema['props'];
  delete frSchema['enumNames'];
  if (key) {
    frSchema.name = key;
    frSchema.key = key;
  }
  if (parent && key && parent.required && Array.isArray(parent.required)) {
    if (parent.required.indexOf(key) > -1) {
      frSchema.required = true;
    }
  }
  return frSchema;
};

const fromFormily = schema =>  transformFrom(schema);
const toFormily = schema => transformTo(schema);

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator
          ref={genRef}
          defaultValue={schema}
          transformer={{
            from: fromFormily,
            to: toFormily,
          }}
        />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,at=`import React, { useState, useRef } from 'react';
import { useHistory } from 'umi';
import Generator from 'fr-generator';
import './index.less';

const Demo = () => {
  const ref = useRef();

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        extraButtons={[
          { text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground },
        ]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,st=yn.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l;return O.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return a=function(R,u){if(!u&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var j=C(u);if(j&&j.has(R))return j.get(R);var m={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in R)if(v!=="default"&&Object.prototype.hasOwnProperty.call(R,v)){var c=n?Object.getOwnPropertyDescriptor(R,v):null;c&&(c.get||c.set)?Object.defineProperty(m,v,c):m[v]=R[v]}return m.default=R,j&&j.set(R,m),m},C=function(R){if(typeof WeakMap!="function")return null;var u=new WeakMap,j=new WeakMap;return(C=function(n){return n?j:u})(R)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=a,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,f=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 15:return g=T.sent,l=function(){var R=(0,f.useState)("Line"),u=(0,o.default)(R,2),j=u[0],m=u[1],n={Line:g.Line,Column:g.Column,PivotTable:g.PivotTable}[j];return f.default.createElement("div",null,f.default.createElement("div",{style:{marginBottom:10}},f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),f.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},T.abrupt("return",l);case 18:case"end":return T.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable } from 'chart-render';

export default () => {
  const [component, setComponent] = useState('Line');
  const ChartRender = { Line, Column, PivotTable }[component];

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Line')}
        >
          \u6298\u7EBF\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Column')}
        >
          \u67F1\u72B6\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('PivotTable')}
        >
          \u4EA4\u53C9\u8868
        </button>
      </div>

      <ChartRender
        meta={[
          { id: 'date', name: '\u65E5\u671F', isDim: true },
          { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false },
          { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false },
        ]}
        data={[
          { date: '20200101', pv: 100, uv: 50 },
          { date: '20200102', pv: 120, uv: 60 },
          { date: '20200103', pv: 140, uv: 70 },
          { date: '20200104', pv: 160, uv: 80 },
        ]}
      />
    </div>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    inverted
    label={{
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    }}
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20, pv: 120 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120, pv: 1120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21, pv: 121 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121, pv: 1121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15, pv: 115 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115, pv: 1115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40, pv: 140 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140, pv: 1140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31, pv: 131 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131, pv: 1131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32, pv: 132 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132, pv: 1132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30, pv: 130 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return o.default.createElement(f.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(T,K,R){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(K).length]}},T),o.default.createElement("p",null,JSON.stringify(K)),o.default.createElement("p",null,JSON.stringify(R)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p
          style={{
            color: ['red', 'orange', 'yellow', 'green', 'blue'][
              Object.keys(dimRecord).length
            ],
          }}
        >
          {val}
        </p>
        <p>{JSON.stringify(dimRecord)}</p>
        <p>{JSON.stringify(indId)}</p>
      </div>
    )}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l;return O.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return a=function(R,u){if(!u&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var j=C(u);if(j&&j.has(R))return j.get(R);var m={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in R)if(v!=="default"&&Object.prototype.hasOwnProperty.call(R,v)){var c=n?Object.getOwnPropertyDescriptor(R,v):null;c&&(c.get||c.set)?Object.defineProperty(m,v,c):m[v]=R[v]}return m.default=R,j&&j.set(R,m),m},C=function(R){if(typeof WeakMap!="function")return null;var u=new WeakMap,j=new WeakMap;return(C=function(n){return n?j:u})(R)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=a,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,f=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 15:return g=T.sent,l=function(){var R=(0,f.useState)(!1),u=(0,o.default)(R,2),j=u[0],m=u[1];return f.default.createElement(f.default.Fragment,null,f.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",f.default.createElement("input",{type:"checkbox",value:j,onChange:function(){return m(!j)}})),f.default.createElement(g.PivotTable,{leftExpandable:j,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},T.abrupt("return",l);case 18:case"end":return T.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>
        \u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A
        <input
          type="checkbox"
          value={expandable}
          onChange={() => setExpandable(!expandable)}
        />
      </label>
      <PivotTable
        leftExpandable={expandable}
        showSubtotal={false}
        meta={[
          { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
          { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
          { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
          { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
          { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
          { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
        ]}
        data={[
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 782,
            valueB: 0.566,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 856,
            valueB: 0.403,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 886,
            valueB: 0.555,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 555,
            valueB: 0.444,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 444,
            valueB: 0.333,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 922,
            valueB: 0.778,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 888,
            valueB: 0.887,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 879,
            valueB: 0.87,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 800,
            valueB: 0.723,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 813,
            valueB: 0.789,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 500,
            valueB: 0.463,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 833,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 821,
            valueB: 0.442,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 834,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 803,
            valueB: 0.7,
          },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i,T,K,R,u,j,m;return O.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return R=function(P,I){if(!I&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var W=K(I);if(W&&W.has(P))return W.get(P);var X={},G=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Y in P)if(Y!=="default"&&Object.prototype.hasOwnProperty.call(P,Y)){var Re=G?Object.getOwnPropertyDescriptor(P,Y):null;Re&&(Re.get||Re.set)?Object.defineProperty(X,Y,Re):X[Y]=P[Y]}return X.default=P,W&&W.set(P,X),X},K=function(P){if(typeof WeakMap!="function")return null;var I=new WeakMap,W=new WeakMap;return(K=function(G){return G?W:I})(P)},d=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=d,v.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,o=(0,v.t0)(v.t1),v.t2=d,v.next=13,e.e(82).then(e.bind(null,"fWQN"));case 13:return v.t3=v.sent,f=(0,v.t2)(v.t3),v.t4=d,v.next=18,e.e(83).then(e.bind(null,"mtLc"));case 18:return v.t5=v.sent,g=(0,v.t4)(v.t5),v.t6=d,v.next=23,e.e(73).then(e.bind(null,"yKVA"));case 23:return v.t7=v.sent,C=(0,v.t6)(v.t7),v.t8=d,v.next=28,e.e(71).then(e.bind(null,"879j"));case 28:return v.t9=v.sent,a=(0,v.t8)(v.t9),v.t10=d,v.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return v.t11=v.sent,l=(0,v.t10)(v.t11),v.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 37:return i=v.sent,v.t12=R,v.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return v.t13=v.sent,T=(0,v.t12)(v.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},j=function(c){(0,C.default)(I,c);var P=(0,a.default)(I);function I(){return(0,f.default)(this,I),P.apply(this,arguments)}return(0,g.default)(I,[{key:"render",value:function(){var X=this.props.form;return l.default.createElement("div",null,l.default.createElement(T.default,{form:X,schema:u}),l.default.createElement(o.default,{type:"primary",onClick:X.submit},"\u63D0\u4EA4"))}}]),I}(l.default.Component),m=(0,T.connectForm)(j),v.abrupt("return",m);case 47:case"end":return v.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
// import 'antd/dist/antd.css';    \u5982\u679C\u9879\u76EE\u6CA1\u6709\u5BF9antd\u3001less\u505A\u4EFB\u4F55\u914D\u7F6E\u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

class Demo extends React.Component {
  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i,T,K;return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=a(n);if(v&&v.has(m))return v.get(m);var c={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in m)if(I!=="default"&&Object.prototype.hasOwnProperty.call(m,I)){var W=P?Object.getOwnPropertyDescriptor(m,I):null;W&&(W.get||W.set)?Object.defineProperty(c,I,W):c[I]=m[I]}return c.default=m,v&&v.set(m,c),c},a=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(a=function(P){return P?v:n})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,f=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,C=(0,u.t4)(u.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(){var m=(0,C.useForm)();return f.default.createElement("div",null,f.default.createElement(C.default,{form:m,schema:i}),f.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},K=T,u.abrupt("return",K);case 27:case"end":return u.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i,T,K;return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=a(n);if(v&&v.has(m))return v.get(m);var c={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in m)if(I!=="default"&&Object.prototype.hasOwnProperty.call(m,I)){var W=P?Object.getOwnPropertyDescriptor(m,I):null;W&&(W.get||W.set)?Object.defineProperty(c,I,W):c[I]=m[I]}return c.default=m,v&&v.set(m,c),c},a=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(a=function(P){return P?v:n})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,f=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,C=(0,u.t4)(u.t5),i={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},T=function(){var m=(0,C.useForm)(),n=function(c,P){P.length>0?alert("errors:"+JSON.stringify(P)):alert("formData:"+JSON.stringify(c,null,2))};return f.default.createElement("div",null,f.default.createElement(C.default,{form:m,schema:i,onFinish:n}),f.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},K=T,u.abrupt("return",K);case 27:case"end":return u.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  displayType: 'row',
  labelWidth: 60,
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    siteUrl: {
      title: '\u7F51\u5740',
      type: 'string',
      placeholder: '\u6B64\u5904\u5FC5\u586B',
      required: true,
      props: {
        addonBefore: 'https://',
        addonAfter: '.com',
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    if (errors.length > 0) {
      alert('errors:' + JSON.stringify(errors));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i;return O.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return l=function(){var u=(0,f.useForm)(),j=function(n,v){v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(n))};return o.default.createElement("div",null,o.default.createElement(f.default,{form:u,schema:a,onFinish:j}),o.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},C=function(u,j){if(!j&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=g(j);if(m&&m.has(u))return m.get(u);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in u)if(c!=="default"&&Object.prototype.hasOwnProperty.call(u,c)){var P=v?Object.getOwnPropertyDescriptor(u,c):null;P&&(P.get||P.set)?Object.defineProperty(n,c,P):n[c]=u[c]}return n.default=u,m&&m.set(u,n),n},g=function(u){if(typeof WeakMap!="function")return null;var j=new WeakMap,m=new WeakMap;return(g=function(v){return v?m:j})(u)},d=e("K+nK"),K.t0=d,K.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return K.t1=K.sent,o=(0,K.t0)(K.t1),K.t2=C,K.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return K.t3=K.sent,f=(0,K.t2)(K.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},i=l,K.abrupt("return",i);case 17:case"end":return K.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const form = useForm(); // 2. \u83B7\u53D6 form \u5B9E\u4F8B\uFF0C\u73B0\u5728\u6240\u6709\u8868\u5355\u65B9\u6CD5\u90FD\u6302\u5728\u4E0A\u9762
  // 3 onSubmit \u7684\u5165\u53C2
  const onSubmit = (formData, valid) => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        form={form} // 4 \u8865\u4E0A
        schema={schema}
        onFinish={onSubmit} // 5. \u8865\u4E0A
        // formData={formData} // 6. \u5E72\u6389
        // onChange={setData}
        // onValidate={setValid}
      />
      <button onClick={form.submit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i,T,K,R,u,j;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return T=function(c,P){if(!P&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var I=i(P);if(I&&I.has(c))return I.get(c);var W={},X=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in c)if(G!=="default"&&Object.prototype.hasOwnProperty.call(c,G)){var Y=X?Object.getOwnPropertyDescriptor(c,G):null;Y&&(Y.get||Y.set)?Object.defineProperty(W,G,Y):W[G]=c[G]}return W.default=c,I&&I.set(c,W),W},i=function(c){if(typeof WeakMap!="function")return null;var P=new WeakMap,I=new WeakMap;return(i=function(X){return X?I:P})(c)},d=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=d,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.t2=d,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=d,n.next=20,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=T,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=n.sent,n.next=32,Promise.all([e.e(67),e.e(78)]).then(e.bind(null,"7t+U"));case 32:return l=n.sent,K=g.default.TextArea,R={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},u=function(){var c=(0,C.useState)(JSON.stringify(R)),P=(0,f.default)(c,2),I=P[0],W=P[1],X=(0,C.useState)({}),G=(0,f.default)(X,2),Y=G[0],Re=G[1],qe=function(){try{var B=(0,l.updateSchemaToNewVersion)(JSON.parse(I));Re(B)}catch(M){console.log(M)}},cn=function(B){W(B.target.value)},hn=function(){W(JSON.stringify(JSON.parse(I),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(K,{style:{minHeight:400,marginTop:12,marginBottom:12},value:I,onChange:cn}),C.default.createElement(o.default,{style:{marginRight:12},onClick:hn},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(o.default,{type:"primary",onClick:qe},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(K,{style:{minHeight:400,marginTop:12},value:JSON.stringify(Y,null,2)}))},j=u,n.abrupt("return",j);case 38:case"end":return n.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../packages/form-render/src/utils.js';
const TextArea = Input.TextArea;

const old = {
  type: 'object',
  properties: {
    number: {
      title: '\u6570\u5B57\u8F93\u5165\u6846',
      type: 'number',
      'ui:disabled': true,
    },
    checkbox: {
      title: '\u662F\u5426\u9009\u62E9',
      type: 'boolean',
      'ui:widget': 'switch',
    },
  },
  required: ['number'],
};

const Translator = () => {
  const [oldSchema, setOld] = useState(JSON.stringify(old));
  const [newSchema, setNew] = useState({});

  const handleClick = () => {
    try {
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
      setNew(_newSchema);
    } catch (err) {
      console.log(err);
    }
  };

  const onOldChange = e => {
    setOld(e.target.value);
  };

  const formatOld = () => {
    setOld(JSON.stringify(JSON.parse(oldSchema), null, 2));
  };

  return (
    <div>
      <div>\u586B\u5165\u65E7\u7248schema\uFF1A</div>
      <TextArea
        style={{ minHeight: 400, marginTop: 12, marginBottom: 12 }}
        value={oldSchema}
        onChange={onOldChange}
      />
      <Button style={{ marginRight: 12 }} onClick={formatOld}>
        \u683C\u5F0F\u5316\u65E7schema
      </Button>
      <Button type="primary" onClick={handleClick}>
        \u751F\u6210\u65B0\u7248schema
      </Button>
      <TextArea
        style={{ minHeight: 400, marginTop: 12 }}
        value={JSON.stringify(newSchema, null, 2)}
      />
    </div>
  );
};

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:z}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i,T;return O.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return i=function(){var j=(0,f.useState)({}),m=(0,o.default)(j,2),n=m[0],v=m[1],c=(0,f.useState)([]),P=(0,o.default)(c,2),I=P[0],W=P[1],X=(0,f.useState)(!1),G=(0,o.default)(X,2),Y=G[0],Re=G[1],qe=(0,g.useForm)({formData:n,onChange:v,onValidate:W,showValidate:Y});(0,f.useEffect)(function(){qe.init()},[]);var cn=function(){Re(!0),I.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(I))):alert(JSON.stringify(n))};return f.default.createElement("div",null,f.default.createElement(g.default,{form:qe,schema:l}),f.default.createElement("button",{onClick:cn},"\u63D0\u4EA4"))},a=function(j,m){if(!m&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var n=C(m);if(n&&n.has(j))return n.get(j);var v={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in j)if(P!=="default"&&Object.prototype.hasOwnProperty.call(j,P)){var I=c?Object.getOwnPropertyDescriptor(j,P):null;I&&(I.get||I.set)?Object.defineProperty(v,P,I):v[P]=j[P]}return v.default=j,n&&n.set(j,v),v},C=function(j){if(typeof WeakMap!="function")return null;var m=new WeakMap,n=new WeakMap;return(C=function(c){return c?n:m})(j)},d=e("K+nK"),R.t0=d,R.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return R.t1=R.sent,o=(0,R.t0)(R.t1),R.t2=a,R.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return R.t3=R.sent,f=(0,R.t2)(R.t3),R.t4=a,R.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 17:return R.t5=R.sent,g=(0,R.t4)(R.t5),l={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},T=i,R.abrupt("return",T);case 22:case"end":return R.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const [formData, setData] = useState({});
  const [valid, setValid] = useState([]);
  const [showValidate, setShowValidate] = useState(false);

  const form = useForm({
    formData,
    onChange: setData,
    onValidate: setValid,
    showValidate,
  }); // 1. formData\u3001onChange \u548C onValidate \u4F5C\u4E3A useForm \u7684\u5165\u53C2\u4F20\u5165

  useEffect(() => {
    form.init();
  }, []);

  const onSubmit = () => {
    setShowValidate(true);
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };

  return (
    <div>
      <FormRender
        form={form} // 3. \u8865\u4E0A
        schema={schema}
        // formData={formData} // 4. \u5168\u653E\u5230 useForm \u91CC\u4E86
        // onChange={setData}
        // onValidate={setValid}
        // showValidate={showValidate}
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),g=function(T){return{type:"object",displayType:T,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(f.default,{schema:g("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(f.default,{schema:g("column")}))},l.abrupt("return",C);case 14:case"end":return l.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = displayType => ({
  type: 'object',
  displayType: displayType,
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    objectName: {
      title: '\u5BF9\u8C61',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
});

export default () => (
  <div>
    <h2>display: row</h2>
    <Form schema={schema('row')} />
    <h2>display: column</h2>
    <Form schema={schema('column')} />
  </div>
);`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),g={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},C=function(){return o.default.createElement(f.default,{schema:g})},l.abrupt("return",C);case 14:case"end":return l.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'inline',
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return o.default.createElement(f.default,{readOnly:!0,schema:g})},l.abrupt("return",C);case 14:case"end":return l.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return o.default.createElement(f.default,{labelWidth:"200",schema:g})},l.abrupt("return",C);case 14:case"end":return l.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
          width: '50%',
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
          width: '50%',
          labelWidth: 6,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return o.default.createElement(f.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'list0',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return o.default.createElement(f.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list1',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return o.default.createElement(f.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list2',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return o.default.createElement(f.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list3',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'list1',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i,T,K,R,u,j;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return R=function(c,P){if(!P&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var I=K(P);if(I&&I.has(c))return I.get(c);var W={},X=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in c)if(G!=="default"&&Object.prototype.hasOwnProperty.call(c,G)){var Y=X?Object.getOwnPropertyDescriptor(c,G):null;Y&&(Y.get||Y.set)?Object.defineProperty(W,G,Y):W[G]=c[G]}return W.default=c,I&&I.set(c,W),W},K=function(c){if(typeof WeakMap!="function")return null;var P=new WeakMap,I=new WeakMap;return(K=function(X){return X?I:P})(c)},d=e("K+nK"),n.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=d,n.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=d,n.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=d,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=d,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.t8=R,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,a=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return l=n.sent,n.t10=R,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,i=(0,n.t10)(n.t11),n.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return T=n.sent,u=function(){var c=(0,i.useForm)(),P=(0,a.useState)({}),I=(0,C.default)(P,2),W=I[0],X=I[1],G=function(){(0,T.fakeApi)("xxx/getForm").then(function(qe){c.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,T.delay)(1e3).then(function(Re){X({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var Y=function(qe,cn){cn.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(cn.map(function(hn){return hn.name}))):(0,T.fakeApi)("xxx/submit",qe).then(function(hn){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(i.default,{form:c,schema:W,onFinish:Y}),a.default.createElement(o.default,null,a.default.createElement(f.default,{onClick:G},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(f.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},j=u,n.abrupt("return",j);case 48:case"end":return n.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  useEffect(() => {
    // \u5F02\u6B65\u52A0\u8F7D\u8868\u5355
    delay(1000).then(_ => {
      setSchema({
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      });
    });
  }, []);

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Ie}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i,T,K,R,u,j;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return K=function(c,P){if(!P&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var I=T(P);if(I&&I.has(c))return I.get(c);var W={},X=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in c)if(G!=="default"&&Object.prototype.hasOwnProperty.call(c,G)){var Y=X?Object.getOwnPropertyDescriptor(c,G):null;Y&&(Y.get||Y.set)?Object.defineProperty(W,G,Y):W[G]=c[G]}return W.default=c,I&&I.set(c,W),W},T=function(c){if(typeof WeakMap!="function")return null;var P=new WeakMap,I=new WeakMap;return(T=function(X){return X?I:P})(c)},d=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=d,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.t2=d,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=d,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=d,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=n.sent,n.t8=K,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,l=(0,n.t8)(n.t9),n.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return i=n.sent,R={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var c=(0,l.useForm)(),P=function(X,G){G.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(Y){return Y.name}))):(0,i.fakeApi)("xxx/submit",X).then(function(Y){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},I=function(X){var G=X.data,Y=X.errors,Re=X.schema,qe=(0,f.default)(X,["data","errors","schema"]);return(0,i.fakeApi)("xxx/validation").then(function(cn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(l.default,{form:c,schema:R,beforeFinish:I,onFinish:P}),C.default.createElement(o.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},j=u,n.abrupt("return",j);case 42:case"end":return n.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  // \u670D\u52A1\u7AEF\u6821\u9A8C\u5728\u8FD9\u91CC\u505A
  const beforeFinish = ({ data, errors, schema, ...rest }) => {
    return fakeApi('xxx/validation').then(_ => {
      return { name: 'select1', error: ['\u5916\u90E8\u6821\u9A8C\u9519\u8BEF'] };
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Ie}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i,T,K,R,u,j;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return K=function(c,P){if(!P&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var I=T(P);if(I&&I.has(c))return I.get(c);var W={},X=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in c)if(G!=="default"&&Object.prototype.hasOwnProperty.call(c,G)){var Y=X?Object.getOwnPropertyDescriptor(c,G):null;Y&&(Y.get||Y.set)?Object.defineProperty(W,G,Y):W[G]=c[G]}return W.default=c,I&&I.set(c,W),W},T=function(c){if(typeof WeakMap!="function")return null;var P=new WeakMap,I=new WeakMap;return(T=function(X){return X?I:P})(c)},d=e("K+nK"),n.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=d,n.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=d,n.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=d,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=d,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 31:return a=n.sent,n.t8=K,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,l=(0,n.t8)(n.t9),n.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return i=n.sent,R={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var c=(0,l.useForm)(),P=function(X,G){G.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(Y){return Y.name}))):(0,i.fakeApi)("xxx/submit",X).then(function(Y){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},I=function(){(0,i.fakeApi)("xxx/getForm").then(function(X){c.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(l.default,{form:c,schema:R,onFinish:P}),C.default.createElement(o.default,null,C.default.createElement(f.default,{onClick:I},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),C.default.createElement(f.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},j=u,n.abrupt("return",j);case 44:case"end":return n.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message, Space } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F\u8303\u56F4',
      type: 'range',
      format: 'date',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ startDate: '2020-04-04', endDate: '2020-04-24' });
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Ie}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i,T,K,R,u;return O.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return T=function(v,c){if(!c&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var P=i(c);if(P&&P.has(v))return P.get(v);var I={},W=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var X in v)if(X!=="default"&&Object.prototype.hasOwnProperty.call(v,X)){var G=W?Object.getOwnPropertyDescriptor(v,X):null;G&&(G.get||G.set)?Object.defineProperty(I,X,G):I[X]=v[X]}return I.default=v,P&&P.set(v,I),I},i=function(v){if(typeof WeakMap!="function")return null;var c=new WeakMap,P=new WeakMap;return(i=function(W){return W?P:c})(v)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,o=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=d,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,f=(0,m.t2)(m.t3),m.t4=T,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,g=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 24:return C=m.sent,m.t6=T,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,a=(0,m.t6)(m.t7),m.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return l=m.sent,K={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},R=function(){var v=(0,a.useForm)(),c=function(){v.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},P=function(W,X){X.length>0?f.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(X.map(function(G){return G.name}))):f.default.info(JSON.stringify(W))};return g.default.createElement("div",{style:{width:"400px"}},g.default.createElement(a.default,{form:v,schema:K,onMount:c,onFinish:P}),g.default.createElement(o.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=R,m.abrupt("return",u);case 37:case"end":return m.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          widget: 'select',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setSchemaByPath('obj1.select1', {
      enum: ['east', 'south', 'west', 'north'],
      enumNames: ['\u4E1C', '\u5357', '\u897F', '\u5317'],
    });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.info(JSON.stringify(data));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        onMount={onMount}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Ie}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i;return O.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return C=function(u,j){if(!j&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=g(j);if(m&&m.has(u))return m.get(u);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in u)if(c!=="default"&&Object.prototype.hasOwnProperty.call(u,c)){var P=v?Object.getOwnPropertyDescriptor(u,c):null;P&&(P.get||P.set)?Object.defineProperty(n,c,P):n[c]=u[c]}return n.default=u,m&&m.set(u,n),n},g=function(u){if(typeof WeakMap!="function")return null;var j=new WeakMap,m=new WeakMap;return(g=function(v){return v?m:j})(u)},d=e("K+nK"),K.t0=d,K.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return K.t1=K.sent,o=(0,K.t0)(K.t1),K.t2=C,K.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return K.t3=K.sent,f=(0,K.t2)(K.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var u=(0,f.useForm)();return o.default.createElement(f.default,{form:u,schema:a})},i=l,K.abrupt("return",i);case 17:case"end":return K.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    select1: {
      title: '\u5355\u9009',
      description: '\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D',
      type: 'string',
      enum: ['a', 'b'],
      enumNames: ['\u9690\u85CF\u8F93\u5165\u6846', '\u663E\u793A\u8F93\u5165\u6846'],
      disabled: '{{rootValue.input1.length > 5}}',
      default: 'a',
    },
    input1: {
      title: '\u8F93\u5165\u6846',
      description: '\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26',
      type: 'string',
      hidden: '{{formData.select1 == "a"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=l.sent,C=function(){return o.default.createElement(f.default,{schema:g.expression})},l.abrupt("return",C);case 16:case"end":return l.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Jn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i,T;return O.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return C=function(j,m){if(!m&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var n=g(m);if(n&&n.has(j))return n.get(j);var v={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in j)if(P!=="default"&&Object.prototype.hasOwnProperty.call(j,P)){var I=c?Object.getOwnPropertyDescriptor(j,P):null;I&&(I.get||I.set)?Object.defineProperty(v,P,I):v[P]=j[P]}return v.default=j,n&&n.set(j,v),v},g=function(j){if(typeof WeakMap!="function")return null;var m=new WeakMap,n=new WeakMap;return(g=function(c){return c?n:m})(j)},R.t0=C,R.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return R.t1=R.sent,d=(0,R.t0)(R.t1),R.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return o=R.sent,R.t2=C,R.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return R.t3=R.sent,f=(0,R.t2)(R.t3),a=function(j){return new Promise(function(m){return setTimeout(m,j)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},i=function(){var j=(0,f.useForm)(),m=function(){j.setValues({input1:"hello world"}),a(3e3).then(function(v){j.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(f.default,{form:j,schema:l,onMount:m})},T=i,R.abrupt("return",T);case 20:case"end":return R.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const delay = ms => new Promise(res => setTimeout(res, ms));

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u4E0B\u62C9\u9009\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'select',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setValues({ input1: 'hello world' });

    delay(3000).then(_ => {
      form.setSchemaByPath('select1', {
        description: '',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      });
    });
  };

  return <FormRender form={form} schema={schema} onMount={onMount} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return o.default.createElement(f.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'list0',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return o.default.createElement(f.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list1',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return o.default.createElement(f.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list2',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return o.default.createElement(f.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list3',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'list1',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),window.hello=function(T){var K=T.value;console.log(K)},g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return o.default.createElement(f.default,{schema:g})},a=C,i.abrupt("return",a);case 16:case"end":return i.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

window.hello = ({ value }) => {
  console.log(value);
};

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list4',
      itemProps: {
        buttons: [
          {
            callback: 'hello',
            text: '\u590D\u5236',
          },
        ],
      },
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i;return O.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return C=function(u,j){if(!j&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=g(j);if(m&&m.has(u))return m.get(u);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in u)if(c!=="default"&&Object.prototype.hasOwnProperty.call(u,c)){var P=v?Object.getOwnPropertyDescriptor(u,c):null;P&&(P.get||P.set)?Object.defineProperty(n,c,P):n[c]=u[c]}return n.default=u,m&&m.set(u,n),n},g=function(u){if(typeof WeakMap!="function")return null;var j=new WeakMap,m=new WeakMap;return(g=function(v){return v?m:j})(u)},K.t0=C,K.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return K.t1=K.sent,d=(0,K.t0)(K.t1),K.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return o=K.sent,K.t2=C,K.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return K.t3=K.sent,f=(0,K.t2)(K.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var u=(0,f.useForm)(),j={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){u.setValueByPath("input2",n)}};return d.default.createElement(f.default,{form:u,schema:a,watch:j})},i=l,K.abrupt("return",i);case 19:case"end":return K.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const watch = {
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      form.setValueByPath('input2', val);
    },
  };

  return <FormRender form={form} schema={schema} watch={watch} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i,T,K;return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=a(n);if(v&&v.has(m))return v.get(m);var c={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in m)if(I!=="default"&&Object.prototype.hasOwnProperty.call(m,I)){var W=P?Object.getOwnPropertyDescriptor(m,I):null;W&&(W.get||W.set)?Object.defineProperty(c,I,W):c[I]=m[I]}return c.default=m,v&&v.set(m,c),c},a=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(a=function(P){return P?v:n})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=l,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,f=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,C=(0,u.t4)(u.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},T=function(){var m=(0,C.useForm)(),n=function(P,I){I.length>0?alert("errorFields:"+JSON.stringify(I)):alert("formData:"+JSON.stringify(P,null,2))},v={input1:function(P){P.length>2?m.setSchemaByPath("obj1.select",function(I){var W=I.enumNames;return{enumNames:W.map(function(X){return X+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return f.default.createElement("div",null,f.default.createElement(C.default,{form:m,schema:i,onFinish:n,watch:v}),f.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),f.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},K=T,u.abrupt("return",K);case 27:case"end":return u.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          widget: 'radio',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  const watch = {
    input1: val => {
      if (val.length > 2) {
        form.setSchemaByPath('obj1.select', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
      } else {
        form.setSchemaByPath('obj1.select', { enumNames: ['\u65E9', '\u4E2D', '\u665A'] });
      }
    },
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        watch={watch}
      />
      <Button
        type=""
        style={{ marginRight: 8 }}
        onClick={() =>
          form.setSchemaByPath('input2', {
            title: '\u7F16\u8F91\u6846',
            format: 'textarea',
          })
        }
      >
        \u5C06 input \u6539\u4E3A textarea
      </Button>
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i,T,K,R,u,j;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return T=function(c,P){if(!P&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var I=i(P);if(I&&I.has(c))return I.get(c);var W={},X=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in c)if(G!=="default"&&Object.prototype.hasOwnProperty.call(c,G)){var Y=X?Object.getOwnPropertyDescriptor(c,G):null;Y&&(Y.get||Y.set)?Object.defineProperty(W,G,Y):W[G]=c[G]}return W.default=c,I&&I.set(c,W),W},i=function(c){if(typeof WeakMap!="function")return null;var P=new WeakMap,I=new WeakMap;return(i=function(X){return X?I:P})(c)},d=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=d,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=d,n.next=15,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.t4=d,n.next=20,e.e(84).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=T,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=n.sent,n.t8=T,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,l=(0,n.t8)(n.t9),K={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},R=function(c){return console.log("widget props:",c),C.default.createElement(f.default,(0,g.default)({addonBefore:"http://",addonAfter:".com"},c))},u=function(){var c=(0,l.useForm)(),P=function(){};return C.default.createElement("div",null,C.default.createElement(l.default,{readOnly:!0,form:c,schema:K,widgets:{site:R},onFinish:function(W){return alert(JSON.stringify(W,null,2))}}),C.default.createElement(o.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},j=u,n.abrupt("return",j);case 40:case"end":return n.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import Form, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: '\u5355\u9009',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
    },
  },
};

const SiteInput = props => {
  console.log('widget props:', props);
  return <Input addonBefore="http://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  const handleSubmit = () => {};
  return (
    <div>
      <Form
        readOnly
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=l.sent,C=function(){return o.default.createElement(f.default,{schema:g.basic})},l.abrupt("return",C);case 16:case"end":return l.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Jn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=l.sent,C=function(){return o.default.createElement(f.default,{schema:g.titleTrick})},l.abrupt("return",C);case 16:case"end":return l.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Jn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:Ne},"main.js":{import:"./main",content:Bn},"json/simplest.json":{import:"./json/simplest.json",content:Kn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Rn},"monaco/index.js":{import:"./monaco",content:pn},"suggestionsMap.js":{import:"./suggestionsMap",content:Qe},"index.css":{import:"./index.css",content:$n}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.5.8"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{tsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a,l,i,T;return O.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return d=e("K+nK"),R.t0=d,R.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return R.t1=R.sent,o=(0,R.t0)(R.t1),R.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(65)]).then(e.bind(null,"P2DI"));case 8:for(f=R.sent,g=[],C=0;C<6;C++)g.push({id:C.toString(),title:"\u6807\u9898".concat(C+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(j,m){return o.default.createElement("a",{onClick:function(){return alert(j.title)}},"\u7F16\u8F91")}}],i=function(){var j=function(){return{rows:g,total:g.length}};return o.default.createElement(f.TableProvider,null,o.default.createElement(f.Search,{schema:a,api:j}),o.default.createElement(f.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},T=i,R.abrupt("return",T);case 16:case"end":return R.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, TableProvider } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u6807\u9898',
      type: 'string',
      width: '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '30%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const Wrapper = () => {
  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };
  return (
    <TableProvider>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </TableProvider>
  );
};

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){var d,o,f,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(64)]).then(e.bind(null,"nYSz"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),g={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},C=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(f.default,{defaultValue:g}))},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:En}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"SOdT"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:wn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:_n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var A=Object(V.a)(O.a.mark(function N(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},N)}));function F(){return A.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:at},"index.less":{import:"./index.less",content:wn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Tn,yn,e){},Zs1V:function(Tn){Tn.exports=JSON.parse("{}")},p8sG:function(Tn,yn,e){"use strict";Tn.exports=e("80pN")}}]);