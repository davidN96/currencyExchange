(this.webpackJsonpcurrency_app=this.webpackJsonpcurrency_app||[]).push([[0],{49:function(e,a,t){e.exports=t(59)},58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(7),o=t.n(c),l=t(10),u=t(38),i=t(86),s=t(89),m=Object(i.a)({root:{width:"96vw",marginLeft:"2vw"}}),d=function(e){var a=e.children,t=m();return n.a.createElement("div",{className:t.root},n.a.createElement(s.a,{container:!0,justify:"center"},a))},f=t(91),b=t(92),E=t(29),g=t(93),p=t(97),v=t(94),j=t(43),h=t.n(j),O=t(44),y=t.n(O),S=t(96),U=t(41),R=t.n(U),w=t(42),C=t.n(w),N=Object(i.a)({root:{textAlign:"center"},select:{borderRadius:"50%",border:"none",backgroundColor:"none"},icon:{fontSize:"3rem"},input:{width:"25%",textAlign:"center",marginLeft:"3vw",fontSize:"3rem"}}),D=function(e){var a=e.currency,t=e.isChanged,c=e.globalValue,o=e.updateValue,u=N(),i=Object(r.useState)(void 0),m=Object(l.a)(i,2),d=(m[0],m[1]);return n.a.createElement(s.a,{className:u.root,item:!0,xs:6},"USD"===a?n.a.createElement(R.a,{className:u.icon,color:t?"primary":"secondary"}):n.a.createElement(C.a,{className:u.icon,color:t?"primary":"secondary"}),n.a.createElement(S.a,{label:"USD"===a?"USD":"EUR",className:u.input,value:"USD"===a?c.usd?c.usd:"":c.eur?c.eur:"",color:"secondary",disabled:t,onChange:function(e){return a=(a=e.target.value).replace(/[^0-9]/g,""),d(a),void o(+a);var a}}))},x=t(18),L=Object(i.a)({root:{witdh:"70vw"},icon:{fontSize:"4rem",margin:"0 3vw 0 1vw"},title:{marginRight:"3vw"},header:{borderBottom:"1px solid rgba(0,0,0,0.15)",margin:"0 0 25px 0"},iconWrapper:{padding:"1vh",marginBottom:"3vh",cursor:"pointer"},valuePanel:{padding:"6vh 0"}}),V=function(e){var a=e.isLoaded,t=e.updateGlobal,c=e.globalCurrencies,o=L(),u=Object(r.useRef)(),i=Object(r.useRef)(),m=Object(r.useRef)(),d=Object(r.useState)(!1),j=Object(l.a)(d,2),O=j[0],S=j[1],U=Object(r.useState)({}),R=Object(l.a)(U,2),w=R[0],C=R[1];Object(r.useEffect)((function(){console.log("changed"),t(w)}),[w]);return n.a.createElement(s.a,{item:!0,md:6},n.a.createElement(f.a,{className:o.root},n.a.createElement(b.a,{className:o.header,avatar:n.a.createElement(h.a,{className:o.icon}),title:n.a.createElement(E.a,{variant:"h5",className:o.title},"Cash Converter"),subheader:"Calculate currency values"}),n.a.createElement(g.a,null,n.a.createElement(s.a,{container:!0},a?n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{container:!0,justify:"center"},n.a.createElement(p.a,{rootRef:m},n.a.createElement("div",{onClick:function(){x.a.from(m.current,{rotation:360,duration:.3}),S(!O),O?(x.a.to(u.current,{marginLeft:"0%"}),x.a.to(i.current,{marginLeft:"0%"})):(x.a.to(u.current,{marginLeft:"50%"}),x.a.to(i.current,{marginLeft:"-100%"}))},className:o.iconWrapper},n.a.createElement(y.a,{fontSize:"large"})))),n.a.createElement(p.a,{rootRef:u},n.a.createElement(D,{currency:"USD",isChanged:O,globalValue:c,updateValue:function(e){C({currency:O?"EUR":"USD",value:e})}})),n.a.createElement(p.a,{rootRef:i},n.a.createElement(D,{currency:"EUR",isChanged:!O,globalValue:c,updateValue:function(e){C({currency:O?"EUR":"USD",value:e})}}))):n.a.createElement(s.a,{container:!0,justify:"center"},n.a.createElement(p.a,{rootRef:m},n.a.createElement("div",{className:o.iconWrapper},n.a.createElement(v.a,{color:"secondary"})))))),n.a.createElement(g.a,{className:o.valuePanel})))},k=function(){var e=Object(r.useState)({usd:0,eur:0}),a=Object(l.a)(e,2),t=a[0],c=a[1],o=Object(r.useState)(!1),i=Object(l.a)(o,2),s=i[0],m=i[1],f=Object(r.useState)({usd:null,eur:null}),b=Object(l.a)(f,2),E=b[0],g=b[1],p=Object(r.useState)({currency:"USD",value:0}),v=Object(l.a)(p,2);v[0],v[1];return Object(r.useEffect)((function(){Object(u.a)("http://api.nbp.pl/api/exchangerates/tables/a/?format=json").then((function(e){var a=e[0].rates,t=a.filter((function(e){return"USD"===e.code}))[0].mid,r=a.filter((function(e){return"EUR"===e.code}))[0].mid;c({usd:t,eur:r})})).then((function(){return m(!0)}))}),[]),n.a.createElement(d,null,n.a.createElement(V,{isLoaded:s,changeVals:function(e){var a=e.usd,t=e.eur;g({usd:a,eur:t})},globalCurrencies:E,updateGlobal:function(e){return function(e){var a=e.currency,r=e.value,n=t.usd,c=t.eur;console.log(E),g("USD"===a?{usd:r,eur:+(r*(n/c)).toFixed(2)}:{eur:r,usd:+(r/(n/c)).toFixed(2)})}(e)}}))},z=(t(58),t(45)),B=Object(z.a)({palette:{primary:{main:"#000"}},bg:{backgroundColor:"#424242"}}),F=t(95);o.a.render(n.a.createElement(F.a,{theme:B},n.a.createElement(k,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.0a72e4c8.chunk.js.map