(this["webpackJsonpfortune-teller"]=this["webpackJsonpfortune-teller"]||[]).push([[0],{12:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(6),u=c.n(r),j=c(2),s=c(4),i=c(0);function o(e){return Object(i.jsx)("div",{onClick:function(){e.fortuneGen(),e.cloudPart(-250,250)},children:Object(i.jsx)("svg",{width:"200",height:"200",children:Object(i.jsx)("circle",{cx:"100",cy:"100",r:"100",fill:"#D4F4F2"})})})}c(5);function l(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{id:"cloud-circle",style:{boxShadow:"".concat(e.cloudX,"px 450px 60px 0px #fff")},ref:e.cloudRef}),Object(i.jsx)("svg",{width:"0",height:"0",children:Object(i.jsxs)("filter",{id:"filter",children:[Object(i.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:".01",numOctaves:"10"}),Object(i.jsx)("feDisplacementMap",{in:"SourceGraphic",scale:"10"})]})})]})}function d(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),r=c[0],u=c[1],d=Object(n.useState)(""),f=Object(j.a)(d,2),a=f[0],b=f[1],x=Object(n.useState)(""),O=Object(j.a)(x,2),h=O[0],p=O[1],v=Object(n.useState)(""),m=Object(j.a)(v,2),S=m[0],g=m[1],w=Object(n.useRef)(null),y=Object(n.useRef)(null);return Object(n.useEffect)((function(){fetch("data/fortuneText.json").then((function(e){return e.json()})).then((function(e){u(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)(o,{fortuneGen:function(){b(r[0].text[R(3)]),p(r[1].text[R(3)]),g(r[2].text[R(3)])},cloudPart:function(e,t){s.a.to(w.current,{x:e}),s.a.to(y.current,{x:t})}}),Object(i.jsx)("div",{id:"message",children:Object(i.jsxs)("p",{children:[a+" ",h+" ",S]})}),Object(i.jsx)(l,{cloudX:"250",cloudRef:w}),Object(i.jsx)(l,{cloudX:"550",cloudRef:y})]});function R(e){return Math.floor(Math.random()*e)}}function f(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(d,{})})}var a=document.getElementById("root");u.a.render(Object(i.jsx)(n.StrictMode,{children:Object(i.jsx)(f,{})}),a)},5:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.47df2e40.chunk.js.map