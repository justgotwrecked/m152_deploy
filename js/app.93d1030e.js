(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"1c0f":function(t,e){t.exports="data:video/mp4;base64,"},"22f6":function(t,e,n){},"26b1":function(t,e,n){"use strict";var a=n("5037"),i=n.n(a);i.a},2813:function(t,e,n){"use strict";var a=n("588d"),i=n.n(a);i.a},"4bbe":function(t,e,n){},5037:function(t,e,n){},5136:function(t,e,n){"use strict";var a=n("22f6"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Menubar",{staticStyle:{"background-color":"#5CDB95"},attrs:{model:t.items},scopedSlots:t._u([{key:"start",fn:function(){return[n("H1",[t._v("M152")])]},proxy:!0}])})],1)},o=[],l={name:"Header",data:function(){var t=this;return{items:[{label:"Impressum",command:function(){t.$router.push("Impressum")}},{label:"CSS3 Animationen",command:function(){t.$router.push("CssAnimations")}},{label:"HTML5 und Media",command:function(){t.$router.push("HtmlMedia")}},{label:"Zeitplan",command:function(){t.$router.push("/zeitplan")}}]}},methods:{someMethod:function(){alert("Dreckige Hs")}}},c=l,u=n("2877"),d=Object(u["a"])(c,s,o,!1,null,"051969e4",null),m=d.exports,f={name:"App",components:{Header:m}},p=f,h=(n("034f"),Object(u["a"])(p,i,r,!1,null,null,null)),v=h.exports,b=n("a0cd"),g=n.n(b),S=n("6549"),_=n.n(S),y=n("27f4"),T=n.n(y),x=n("8c4f"),w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Impressum")]),n("h2",[t._v("Kontakt")]),n("p",[t._v("E-Mail: sebastian@swoboda.ch")]),n("h2",[t._v("Quellen")]),n("h2",[t._v("Copyright")]),n("h2",[t._v("Lizenz")])])}],M={name:"Impressum"},k=M,C=Object(u["a"])(k,w,A,!1,null,"6365c33c",null),O=C.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{overflow:"hidden","text-align":"center"}},[a("h1",[t._v("CSS3 Animationen")]),a("img",{class:{startRotateAnimation:t.animationActive},staticStyle:{display:"inline-block"},attrs:{src:n("f035"),alt:"CS:GO Skeleton Knife Slaughter",id:"knifeImage"}}),a("br"),a("Button",{attrs:{label:t.buttonText,id:"animationStartButton"},on:{click:t.startAnimation}}),a("p",[t._v("CSS3 Animationen sind für einfache Animationen sehr einfach, aber sobald man irgendeine komplexere Animation will, muss man viel Zeit investieren.")]),a("SvgAnimations"),a("CanvasGraphic"),a("ScrollActivated"),a("Logo"),a("VueRoller")],1)},P=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center"}},[n("h1",[t._v("SVG Animationen")]),n("div",{staticClass:"ball"}),n("svg",{staticStyle:{display:"inline-block"},attrs:{width:"500",height:"350"}},[n("circle",{staticStyle:{display:"inline-block"},attrs:{id:"orange-circle",r:"30",cx:"50",cy:"50",fill:"orange"}}),n("animate",{attrs:{"xlink:href":"#orange-circle",attributeName:"cy",from:"50",to:"250",dur:"3s",begin:"0s",repeatCount:"indefinite",calcMode:"spline",values:"50; 250; 120; 250; 170; 250; 210; 250",keyTimes:"0; 0.15; 0.3; 0.45; 0.6; 0.75; 0.9; 1",keySplines:"0.42 0 1 1;\n                   0 0 0.59 1;\n                   0.42 0 1 1;\n                   0 0 0.59 1;\n                   0.42 0 1 1;\n                   0 0 0.59 1;\n                   0.42 0 1 1",fill:"freeze",id:"circ-anim"}})]),n("SvgPlanet",{staticStyle:{display:"inline-block"}}),n("p",[t._v("SVG Animationen zu erstellen finde ich ziemlich kompliziert. Man mus zuerst das SVG erstellen und danach jeden Schritt Animieren, was sehr viel Zeit braucht und mir gar nicht Spass macht.")])],1)},G=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"10%",height:"10%","text-align":"center"}},[n("svg",{staticStyle:{display:"inline-block"},attrs:{viewBox:"0 0 160 160",width:"160",height:"160"}},[n("circle",{attrs:{cx:"80",cy:"80",r:"50"}}),n("g",{attrs:{transform:" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)"}},[n("path",{attrs:{d:"M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z",fill:"orange"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"360 0 0",to:"0 0 0",dur:"1s",repeatCount:"indefinite"}})],1)]),n("path",{attrs:{d:"M 50,0 A 50,50 0 0,0 -50,0Z",transform:"matrix(0.866, -0.5, 0.5, 0.866, 80, 80)"}})])])},E=[],H={name:"SvgPlanet"},$=H,L=(n("5136"),Object(u["a"])($,z,E,!1,null,"74f8fc54",null)),V=L.exports,F={name:"SvgAnimations",components:{SvgPlanet:V},methods:{}},B=F,R=(n("2813"),Object(u["a"])(B,I,G,!1,null,"2e4df1a6",null)),K=R.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center"}},[n("h1",[t._v("HTML Canvas Grafik")]),n("canvas",{staticStyle:{display:"inline-block"},attrs:{id:"canvas",width:"300",height:"300"}},[t._v("Your browser does not support the HTML canvas tag. ")]),n("p",[t._v("Mit HTML Canvas Grafiken kann man sehr viel machen, ich habe dieses Beispiel im Internet gefunden und mir den JavaScript Code angeschaut. Für mich ist es einfacher eine schöne animierte Canvas Grafik zu erstellen, als eine Vektorgrafik.")])])}],D={name:"CanvasGraphic",mounted:function(){var t=new Image,e=new Image,n=new Image;function a(){t.src="https://mdn.mozillademos.org/files/1456/Canvas_sun.png",e.src="https://mdn.mozillademos.org/files/1443/Canvas_moon.png",n.src="https://mdn.mozillademos.org/files/1429/Canvas_earth.png",window.requestAnimationFrame(i)}function i(){var a=document.getElementById("canvas").getContext("2d");a.globalCompositeOperation="destination-over",a.clearRect(0,0,300,300),a.fillStyle="rgba(0, 0, 0, 0.4)",a.strokeStyle="rgba(0, 153, 255, 0.4)",a.save(),a.translate(150,150);var r=new Date;a.rotate(2*Math.PI/60*r.getSeconds()+2*Math.PI/6e4*r.getMilliseconds()),a.translate(105,0),a.fillRect(0,-12,50,24),a.drawImage(n,-12,-12),a.save(),a.rotate(2*Math.PI/6*r.getSeconds()+2*Math.PI/6e3*r.getMilliseconds()),a.translate(0,28.5),a.drawImage(e,-3.5,-3.5),a.restore(),a.restore(),a.beginPath(),a.arc(150,150,105,0,2*Math.PI,!1),a.stroke(),a.drawImage(t,0,0,300,300),window.requestAnimationFrame(i)}a()}},J=D,N=(n("26b1"),Object(u["a"])(J,Z,W,!1,null,"07c47686",null)),q=N.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Roller",{attrs:{text:"1234",transition:"5",charList:["a","b","c"]}})],1)},Q=[],U=n("92da"),X=n.n(U),tt={name:"VueRoller",components:{Roller:X.a}},et=tt,nt=Object(u["a"])(et,Y,Q,!1,null,"35a5fe5c",null),at=nt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("H1",[t._v("Scroll aktivierte Animationen")]),a("img",{attrs:{"data-aos":"fade","data-aos-offset":"300","data-aos-duration":"1000",src:n("f035"),alt:"Skeleton Knife"}}),a("br"),a("img",{attrs:{"data-aos":"flip-up","data-aos-duration":"1000",src:n("f035"),alt:"Skeleton Knife"}}),a("br"),a("img",{attrs:{"data-aos":"slide-up","data-aos-duration":"1000",src:n("f035"),alt:"Skeleton Knife"}}),a("br"),a("img",{attrs:{"data-aos":"zoom-in","data-aos-duration":"1000",src:n("f035"),alt:"Skeleton Knife"}})],1)},rt=[],st={name:"ScrollActivated"},ot=st,lt=Object(u["a"])(ot,it,rt,!1,null,"6401f1e2",null),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"500",height:"350",viewBox:"0 0 500 350"}},[n("path",{attrs:{id:"myPath",fill:"none",stroke:"#000000","stroke-miterlimit":"10",d:"M91.4,104.2c3.2-3.4,18.4-0.6,23.4-0.6c5.7,0.1,10.8,0.9,16.3,2.3\nc13.5,3.5,26.1,9.6,38.5,16.2c12.3,6.5,21.3,16.8,31.9,25.4c10.8,8.7,21,18.3,31.7,26.9c9.3,7.4,20.9,11.5,31.4,16.7\nc13.7,6.8,26.8,9.7,41.8,9c21.4-1,40.8-3.7,61.3-10.4c10.9-3.5,18.9-11.3,28.5-17.8c5.4-3.7,10.4-6.7,14.8-11.5\nc1.9-2.1,3.7-5.5,6.5-6.5"}}),n("text",[n("textpath",{attrs:{"xlink:href":"#myPath"}},[t._v(" Text laid out along a path. "),n("animate",{attrs:{attributeName:"startOffset",from:"0%",to:"100%",begin:"0s",dur:"5s",repeatCount:"indefinite",keyTimes:"0;1",calcMode:"spline",keySplines:"0.1 0.2 .22 1"}})])])])},dt=[],mt=n("1157"),ft=n.n(mt),pt={name:"Logo",mounted:function(){var t=ft.a.createElement("script");t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"),ft.a.head.appendChild(t)}},ht=pt,vt=(n("8c72"),Object(u["a"])(ht,ut,dt,!1,null,"4874e9a0",null)),bt=vt.exports,gt={name:"Css3Animations",components:{VueRoller:at,SvgAnimations:K,CanvasGraphic:q,ScrollActivated:ct,Logo:bt},data:function(){return{animationActive:!0,buttonText:"Stop"}},methods:{startAnimation:function(){this.animationActive?(this.animationActive=!1,this.buttonText="Start"):(this.animationActive=!0,this.buttonText="Stop")}}},St=gt,_t=(n("5e78"),Object(u["a"])(St,j,P,!1,null,"443db1b9",null)),yt=_t.exports,Tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("h1",[t._v("Bilder")]),a("img",{staticClass:"imageStyle",attrs:{src:n("5dc7"),alt:"Flumserberg"}}),a("p",[t._v(" HTML unterschtützt vielel verschidnene Formate. Das darüberstehende Bild ist ein JPEG-Bild. JPEG ist das meistverwendete Bild Format. HTML unterstützt auch: APNG, GIF, ICO, PNG und SVG ")])]),a("br"),a("h1",[t._v("Videos")]),a("video",{staticClass:"imageStyle",attrs:{controls:""}},[a("source",{attrs:{src:n("1c0f"),type:"video/mp4"}}),t._v(" Your browser does not support the video tag. ")]),a("p",[t._v("Dieses Video wurde im MP4 Format gespeichert und wird von HTML unterstützt. HTML unterstützt aber auch, WebM und Ogg")]),a("br"),a("h1",[t._v("Audio")]),a("audio",{attrs:{controls:""}},[a("source",{attrs:{src:n("c62b"),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")]),a("p",[t._v("Für dieses non Copyright Lied wurde das MP3 File Format verwendet. HTML unterstützt auch OGG und WAV. Im Edge Browser funktionieren aber WAV und OGG nicht und Safari unterstützt das OGG File Format nicht.")])])}],wt={name:"HtmlMedia"},At=wt,Mt=(n("7267"),Object(u["a"])(At,Tt,xt,!1,null,"048a3f44",null)),kt=Mt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("FullCalendar",{attrs:{events:t.events,options:t.options}})],1)},Ot=[],jt=n("3cdd"),Pt=n("3e32"),It=n("a20c"),Gt=n("e44e"),zt={name:"Calendar",Component:{},data:function(){return{options:{plugins:[jt["b"],Pt["a"],It["a"],Gt["a"]],initialView:"timeGridWeek"},events:[{id:1,title:"Modul Intro",start:"2020-05-15T13:00:00",end:"2020-05-15T14:30:00"},{id:2,title:"Erste Ideen",start:"2020-05-15T14:30:00",end:"2020-05-15T16:30:00"},{id:3,title:"Styleguide",start:"2020-05-29T14:30:00",end:"2020-05-29T15:30:00"},{id:4,title:"Wireframes",start:"2020-05-29T15:30:00",end:"2020-05-29T15:30:00"},{id:5,title:"Vue Projekt erstellen",start:"2020-06-05T14:30:00",end:"2020-06-05T16:30:00"},{id:6,title:"Css Animationen",start:"2020-06-12T14:30:00",end:"2020-06-05T15:30:00"},{id:7,title:"Vektor Animationen",start:"2020-06-12T15:30:00",end:"2020-06-12T16:30:00"},{id:8,title:"Canvas Animationen",start:"2020-06-19T13:30:00",end:"2020-06-19T15:30:00"},{id:9,title:"Scroll Activated",start:"2020-06-19T15:30:00",end:"2020-06-19T16:30:00"},{id:10,title:"HTML Video und Bilder",start:"2020-06-26T13:30:00",end:"2020-06-26T15:30:00"},{id:11,title:"HTML Audio",start:"2020-06-26T15:30:00",end:"2020-06-26T16:30:00"},{id:12,title:"Zeitplan, Wireframes und Styleguide hinzufügen",start:"2020-07-03T13:30:00",end:"2020-07-03T15:00:00"},{id:13,title:"Site testen",start:"2020-07-03T15:00:00",end:"2020-07-03T16:30:00"},{id:14,title:"Abgabe",start:"2020-07-07"}]}}},Et=zt,Ht=Object(u["a"])(Et,Ct,Ot,!1,null,"4b332b36",null),$t=Ht.exports;a["default"].use(x["a"]);var Lt=[{path:"/impressum",name:"impressum",title:"Impressum",component:O},{path:"/cssAnimations",name:"cssAnimations",title:"CSS3 Animationen",component:yt},{path:"/htmlMedia",name:"htmlMedia",title:"HTML und Media",component:kt},{path:"/zeitplan",name:"zeitplan",title:"Zeitplan",component:$t},{path:"*",redirect:{name:"cssAnimations"}}],Vt=new x["a"]({routes:Lt}),Ft=n("67b0"),Bt=n("f5af"),Rt=n.n(Bt);n("e829"),n("098b"),n("e1ae"),n("4121");a["default"].component("Menubar",g.a),a["default"].component("Button",_.a),a["default"].component("FullCalendar",T.a),a["default"].use(Ft["a"]),a["default"].config.productionTip=!1,new a["default"]({created:function(){Rt.a.init()},render:function(t){return t(v)},router:Vt}).$mount("#app")},"588d":function(t,e,n){},"5dc7":function(t,e,n){t.exports=n.p+"img/sebsSetup.5aba9d58.jpg"},"5e78":function(t,e,n){"use strict";var a=n("a79f"),i=n.n(a);i.a},"69eb":function(t,e,n){},7267:function(t,e,n){"use strict";var a=n("69eb"),i=n.n(a);i.a},"85ec":function(t,e,n){},"8c72":function(t,e,n){"use strict";var a=n("4bbe"),i=n.n(a);i.a},a79f:function(t,e,n){},c62b:function(t,e){t.exports="data:audio/mpeg;base64,"},f035:function(t,e,n){t.exports=n.p+"img/SkeletonKnife.aa2ea1b6.png"}});
//# sourceMappingURL=app.93d1030e.js.map