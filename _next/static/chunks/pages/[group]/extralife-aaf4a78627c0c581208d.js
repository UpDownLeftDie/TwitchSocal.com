(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{7791:function(e,t,r){"use strict";var a=r(5988),i=(r(7294),r(5893));t.Z=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("i",{"aria-hidden":!0,className:"jsx-1671109066 fad fa-spinner-third fa-spin"}),(0,i.jsx)(a.default,{id:"1671109066",children:[".fad.jsx-1671109066{display:block;}",".fad.fa-spinner-third.jsx-1671109066:after{position:relative;top:4.4px;}",".fad.jsx-1671109066:before{top:4.4px;}"]})]})}},3578:function(e,t,r){"use strict";var a=r(5988),i=r(5893),n=function(e){var t=e.text,r=e.color,n=e.leftSide,s=n?"left":"right";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:a.default.dynamic([["655659265",[r,n?"-":"",s]]]),children:t}),(0,i.jsx)(a.default,{id:"655659265",dynamic:[r,n?"-":"",s],children:[".__jsx-style-dynamic-selector{background:".concat(r,";-webkit-filter:drop-shadow(0px 5px 3px rgba(0,0,0,0.6));filter:drop-shadow(0px 5px 3px rgba(0,0,0,0.6));-webkit-transform:rotate(").concat(n?"-":"","45deg);-ms-transform:rotate(").concat(n?"-":"","45deg);transform:rotate(").concat(n?"-":"","45deg);position:absolute;z-index:1;").concat(s,":-31px;top:32px;text-align:center;width:150px;-webkit-clip-path:polygon(16% 0%,84% 0%,107% 150%,-7% 150%);clip-path:polygon(16% 0%,84% 0%,107% 150%,-7% 150%);}")]})]})};n.defaultProps={color:"#ec0000",leftSide:!1},t.Z=n},5747:function(e,t,r){"use strict";var a=r(5988),i=(r(7294),r(5893)),n={twitter:"https://www.twitter.com",twitch:"https://www.twitch.tv",guilded:"http://guilded.gg/i",discord:"https://discord.gg",instagram:"https://www.instagram.com"};t.Z=function(e){var t=e.links,r=e.groupName,s=Object.entries(t).map((function(e){return(0,i.jsx)("a",{href:"".concat(n[e[0]],"/").concat(e[1]),"aria-label":"".concat(r,"'s ").concat(e[0]),title:e[0].charAt(0).toUpperCase()+e[0].slice(1),target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("i",{className:"fab fa-".concat(e[0])})},e[0])}));return(0,i.jsxs)("div",{className:"jsx-4084517449 socialicons",children:[s,(0,i.jsx)(a.default,{id:"4084517449",children:[".socialicons.jsx-4084517449{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;font-size:36px;padding:10px;}","@supports not (-ms-ime-align:auto){.jsx-4084517449{-webkit-box-pack:space-evenly !important;-webkit-justify-content:space-evenly !important;-ms-flex-pack:space-evenly !important;justify-content:space-evenly !important;}}",".socialicons.jsx-4084517449 a{color:#fff;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:-webkit-transform 150ms cubic-bezier(0,0,0.2,1);-webkit-transition:transform 150ms cubic-bezier(0,0,0.2,1);transition:transform 150ms cubic-bezier(0,0,0.2,1);}",".socialicons.jsx-4084517449 a:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);}","@media (max-width:900px){.socialicons.jsx-4084517449{padding:0 10px;}}"]})]})}},2318:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return ee},default:function(){return te}});var a=r(5660),i=r(266),n=r(2809),s=r(5988),o=r(809),c=r.n(o),l=r(7294),d=r(1163),m=r(9008),u=r(1664),p=r(3144),x=r.n(p),f=r(5893),h=function(e){var t=e.progress,r=e.goal,a=e.height,i=e.progressText,n=e.goalText,o=e.inlineText,c=e.isMoney,d=e.displayProgress,m=e.displayPercent,u=e.width,p=e.loading,x=Number((t/r*100).toFixed(1))||0,h=p||null===t||null===r,g=i||""===i,b=n||""===n,w=null,j=null,y=(0,l.useRef)();(0,l.useEffect)((function(){y.current.animate([{width:"0%"},{width:"".concat(x,"%")}],{duration:1500})}),[x]),g&&(w="".concat(i," "),w+=c?"$".concat(Math.floor(t)):t),b&&(j="".concat(n," "),j+=c?"$".concat(Math.floor(r)):r);var v=null;d&&(v="".concat(x,"%"),m||(v=t,c&&(v="$".concat(Math.floor(t))))),h&&(g&&(w=(0,f.jsx)(f.Fragment,{children:"\xa0"})),b&&(j=(0,f.jsx)(f.Fragment,{children:"\xa0"})),d&&(v="??"));var k=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:s.default.dynamic([["3817900371",[o?"absolute":"relative",o?"absolute":"relative"]]])+" progressText",children:w}),(0,f.jsx)("div",{className:s.default.dynamic([["3817900371",[o?"absolute":"relative",o?"absolute":"relative"]]])+" goalText",children:j}),(0,f.jsx)(s.default,{id:"3817900371",dynamic:[o?"absolute":"relative",o?"absolute":"relative"],children:[".progressText.__jsx-style-dynamic-selector{position:".concat(o?"absolute":"relative",";font-size:1rem;margin-left:10px;z-index:1;justify-self:start;}"),".goalText.__jsx-style-dynamic-selector{position:".concat(o?"absolute":"relative",";font-size:1rem;margin-right:10px;z-index:1;justify-self:end;}")]})]});return(0,f.jsxs)("div",{className:s.default.dynamic([["1324568485",[u,a,x,a/2,a/2,a]]])+" "+"wrapper ".concat(o?"inlineText":""),children:[o?null:k,(0,f.jsxs)("div",{className:s.default.dynamic([["1324568485",[u,a,x,a/2,a/2,a]]])+" progressBar",children:[o?k:null,d&&(0,f.jsx)("span",{style:{position:"absolute"},className:s.default.dynamic([["1324568485",[u,a,x,a/2,a/2,a]]]),children:v}),(0,f.jsx)("div",{ref:y,className:s.default.dynamic([["1324568485",[u,a,x,a/2,a/2,a]]])+" progress"})]}),(0,f.jsx)(s.default,{id:"1324568485",dynamic:[u,a,x,a/2,a/2,a],children:[".wrapper.__jsx-style-dynamic-selector{width:".concat(u,"%;min-width:180px;max-width:800px;position:relative;display:grid;grid-template: 'a b' 'bar bar';}"),".wrapper.inlineText.__jsx-style-dynamic-selector{display:block;}",".progressBar.__jsx-style-dynamic-selector{position:relative;grid-area:bar;background:#1a4c6d;overflow:hidden;height:".concat(a,"px;border-radius:300px;width:100%;display:grid;place-items:center;font-size:90%;color:#fff;text-shadow:0 0 5px black;}"),".progress.__jsx-style-dynamic-selector{width:".concat(x,"%;background:#26c2eb;height:100%;text-align:right;justify-self:start;background-image:linear-gradient( -45deg, rgba(255,255,255,0.17) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.17) 50%, rgba(255,255,255,0.17) 75%, transparent 75% );background-size:").concat(a/2,"px ").concat(a/2,"px;overflow:hidden;-webkit-animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;}"),"@-webkit-keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:".concat(a,"px 0;}}"),"@keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:".concat(a,"px 0;}}")]})]})};h.defaultProps={progress:null,goal:null,height:40,progressText:null,goalText:null,inlineText:!1,isMoney:!1,width:100,displayProgress:!1,displayPercent:!0,loading:!1};var g=h,b=r(7791),w=r(3578),j=function(e){var t=e.children,r=e.loading,a=e.backgroundImage,i=e.ribbon,n=e.isGlowing,o=e.isPulsing,c=a?"background-img: url(".concat(a,");"):"",l=r?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:"jsx-3014015982 loadingIcon",children:(0,f.jsx)(b.Z,{})}),(0,f.jsx)(s.default,{id:"3014015982",children:[".loadingIcon.jsx-3014015982{position:absolute;font-size:100px;top:50%;right:50%;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);}"]})]}):t,d="card";return n?d+=" glow":o&&(d+=" pulse"),(0,f.jsxs)("span",{className:s.default.dynamic([["2636800904",[r?"#444":"#fff",c]]])+" "+(d||""),children:[(0,f.jsxs)("span",{className:s.default.dynamic([["2636800904",[r?"#444":"#fff",c]]]),children:[function(e){var t=e.text,r=e.color,a=e.leftSide,i=void 0!==a&&a;return t?(0,f.jsx)(w.Z,{text:t,color:r,leftSide:i}):null}(i),l,(0,f.jsx)("span",{className:s.default.dynamic([["2636800904",[r?"#444":"#fff",c]]])+" cardBackground"})]}),(0,f.jsx)(s.default,{id:"2636800904",dynamic:[r?"#444":"#fff",c],children:["a.__jsx-style-dynamic-selector:link{-webkit-text-decoration:none;text-decoration:none;}",".card.__jsx-style-dynamic-selector{position:relative;padding:15px;margin:10px;color:#fff;z-index:1;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 150ms,-webkit-transform 150ms cubic-bezier(0,0,0.2,1);-webkit-transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4)) drop-shadow(0 -4px 3px rgba(0,0,0,0.3));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4)) drop-shadow(0 -4px 3px rgba(0,0,0,0.3));border-radius:20px word-break:break-word;}",".glow.__jsx-style-dynamic-selector{-webkit-animation:fadein-__jsx-style-dynamic-selector 1.5s ease-out infinite alternate;animation:fadein-__jsx-style-dynamic-selector 1.5s ease-out infinite alternate;}",'.pulse.__jsx-style-dynamic-selector::before{content:" ";position:absolute;width:100%;height:100%;-webkit-animation:pulse-__jsx-style-dynamic-selector 2s infinite;animation:pulse-__jsx-style-dynamic-selector 2s infinite;box-sizing:border-box;top:0;left:0;border:15px solid red;z-index:-300;border-radius:20px;}',"@-webkit-keyframes fadein-__jsx-style-dynamic-selector{from{-webkit-filter:drop-shadow(0 0 15px rgba(255,255,255,0.2));filter:drop-shadow(0 0 15px rgba(255,255,255,0.2));}to{-webkit-filter:drop-shadow(0 0 25px rgba(255,255,255,1));filter:drop-shadow(0 0 25px rgba(255,255,255,1));}}","@keyframes fadein-__jsx-style-dynamic-selector{from{-webkit-filter:drop-shadow(0 0 15px rgba(255,255,255,0.2));filter:drop-shadow(0 0 15px rgba(255,255,255,0.2));}to{-webkit-filter:drop-shadow(0 0 25px rgba(255,255,255,1));filter:drop-shadow(0 0 25px rgba(255,255,255,1));}}","@-webkit-keyframes pulse-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0.5,0.5);-ms-transform:scale(0.5,0.5);transform:scale(0.5,0.5);opacity:0;}50%{-webkit-transform:scale(1.03,1.12);-ms-transform:scale(1.03,1.12);transform:scale(1.03,1.12);opacity:1;}90%{opacity:0;}100%{-webkit-transform:scale(1.08,1.22);-ms-transform:scale(1.08,1.22);transform:scale(1.08,1.22);opacity:0;}}","@keyframes pulse-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0.5,0.5);-ms-transform:scale(0.5,0.5);transform:scale(0.5,0.5);opacity:0;}50%{-webkit-transform:scale(1.03,1.12);-ms-transform:scale(1.03,1.12);transform:scale(1.03,1.12);opacity:1;}90%{opacity:0;}100%{-webkit-transform:scale(1.08,1.22);-ms-transform:scale(1.08,1.22);transform:scale(1.08,1.22);opacity:0;}}",".card.__jsx-style-dynamic-selector::after{content:'';border-radius:20px;position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3)) drop-shadow(0 0px 6px rgba(0,0,0,0.2));filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3)) drop-shadow(0 0px 6px rgba(0,0,0,0.2));opacity:0;-webkit-transition:all 150ms,-webkit-transform 150ms cubic-bezier(0,0,0.2,1);-webkit-transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);}",".card.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-font-smoothing:subpixel-antialiased;}",".card.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector::after{opacity:1;}",".cardBackground.__jsx-style-dynamic-selector{background:".concat(r?"#444":"#fff",";").concat(c," background-size:cover;background-position:center;width:100%;height:100%;position:absolute;left:0;border-radius:20px;z-index:-100;top:0;}"),".cardBackground.__jsx-style-dynamic-selector::before{content:'';position:absolute;height:100%;width:100%;border-radius:20px;}"]})]})};j.defaultProps={loading:!1,backgroundImage:"",ribbon:{},isGlowing:!1,isPulsing:!1};var y=j,v=function(e,t){return(0,f.jsxs)("a",{href:e,target:"_blank",rel:"noreferrer",className:"jsx-1776074381 "+"memberButton ".concat(t),children:[t,(0,f.jsx)(s.default,{id:"1776074381",children:[".memberButton.jsx-1776074381{width:100%;height:100%;padding:5px;border-radius:8px;box-sizing:border-box;min-height:40px;place-items:center;font-weight:bold;display:grid;background:#26c2eb;color:#ffffff;-webkit-text-decoration:none !important;text-decoration:none !important;}",".Twitch.jsx-1776074381{background:#772ce8;}",".Twitch.jsx-1776074381:hover,.Twitch.jsx-1776074381:focus{background:#541da5;}",".Donate.jsx-1776074381{background:#7fd836;}",".Donate.jsx-1776074381:hover{background:#47b200;}"]})]})},k=function(e){var t=e.links,r=e.streamIsLive,a=e.columnLayout;if((null===t||void 0===t||!t.donate)&&(null===t||void 0===t||!t.stream))return null;var i,n=null!==t&&void 0!==t&&t.donate?(i=t.donate,v(i,"Donate")):null,o=null;if(!r&&null!==t&&void 0!==t&&t.stream){var c=t.stream.match(/channel=(.*)/);null!==c&&void 0!==c&&c[1]&&(o=function(e){return v(e,"Twitch")}("https://www.twitch.tv/".concat(c[1])))}return(0,f.jsxs)("div",{className:"jsx-3857369737 "+"buttonContainer ".concat(a?"column":""),children:[o,n,(0,f.jsx)(s.default,{id:"3857369737",children:[".buttonContainer{margin-top:5px;width:100%;display:grid;grid-auto-columns:1fr 1fr;grid-auto-flow:column;grid-row:1;grid-column-gap:7px;height:100%;}",".buttonContainer.column{grid-gap:7px;grid-auto-flow:row;}"]})]})};k.defaultProps={links:{},streamIsLive:!1,columnLayout:!1};var _=k;function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=function(e){var t=e.children,r=e.links,a=e.streamIsLive,i=e.twitchUsername;if(null!==r&&void 0!==r&&r.page){var n=r.page;return a&&i&&(n="https://www.twitch.tv/".concat(i)),(0,f.jsxs)("a",{href:n,target:"_blank",rel:"noreferrer",className:"jsx-3625122276",children:[t,(0,f.jsx)(s.default,{id:"3625122276",children:[".jsx-3625122276{display:grid;-webkit-text-decoration:none;text-decoration:none;place-items:center;min-height:200px;color:#444;}"]})]})}return t};S.defaultProps={links:{},streamIsLive:!1,twitchUsername:""};var O=function(e){var t=e.avatarImageURL,r=e.displayName,a=e.fundraisingGoal,i=e.isTeamCaptain,n=e.links,o=e.streamIsLive,c=e.twitchUsername,l=e.sumDonations,d={};return i&&(d=T(T({},d),{},{text:"Team Captain",color:"#e0bd00"})),o&&(d=T(T({},d),{},{color:void 0,text:"Live now!",leftSide:!0})),(0,f.jsx)(y,{ribbon:d,isGlowing:o,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"jsx-3231930272 teamMemberCard",children:[(0,f.jsxs)(S,{links:n,streamIsLive:o,twitchUsername:c,children:[(0,f.jsx)("img",{src:t,alt:"".concat(r,"'s profile"),className:"jsx-3231930272"}),(0,f.jsx)("div",{className:"jsx-3231930272 name",children:r}),(0,f.jsx)(g,{progress:l||0,goal:a,height:20,isMoney:!0,displayProgress:!0,displayPercent:!1})]}),(0,f.jsx)(_,{links:n,streamIsLive:o})]}),(0,f.jsx)(s.default,{id:"3231930272",children:[".teamMemberCard{width:200px;box-sizing:border-box;color:#000;}","img.jsx-3231930272{border-radius:50%;width:100px;height:100px;box-shadow:0px 4px 8px rgba(0,0,0,0.5);margin:0 10px 10px;}",".name.jsx-3231930272{font-size:1.1rem;line-height:1;text-align:center;font-weight:bold;-webkit-align-self:baseline;-ms-flex-item-align:baseline;align-self:baseline;}"]})]})})};O.defaultProps={isTeamCaptain:!1,links:{},streamIsLive:!1,sumDonations:0,twitchUsername:null};var L=O,D=function(e){var t=e.teamMembers.map((function(e){var t=e.displayName,r=e.avatarImageURL,a=e.fundraisingGoal,i=e.isTeamCaptain,n=e.links,s=e.streamIsLive,o=e.sumDonations,c=e.twitchUsername;return(0,f.jsx)(L,{displayName:t,avatarImageURL:r,fundraisingGoal:a,isTeamCaptain:i,links:n,streamIsLive:s,sumDonations:o,twitchUsername:c},e.displayName)}))||[];return(0,f.jsxs)("div",{className:"jsx-448011369",children:[t,(0,f.jsx)(s.default,{id:"448011369",children:[".jsx-448011369{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:40px;}"]})]})},P=function(e){var t=e.title;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{className:"jsx-2852931680",children:t}),(0,f.jsx)(s.default,{id:"2852931680",children:["h1.jsx-2852931680{font-size:38px;font-size:max(2.5em,3vw);padding:0;margin:0;line-height:1;}"]})]})};function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=(0,l.useState)({width:0,height:0}),r=t[0],a=t[1];return(0,l.useLayoutEffect)((function(){function t(){a({width:e.innerWidth,height:e.innerHeight})}return e.addEventListener("resize",t),t(),function(){return e.removeEventListener("resize",t)}}),[e]),r}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=function(e){var t,r,a=e.avatarImageURL,i=e.fundraisingGoal,n=e.links,o=e.streamer,c=e.streamIsLive,l=e.sumDonations,d=e.timeEnd,m=e.timeStart,u=e.twitchUsername,p=E(window).width<600,x={hour:"numeric",minute:"numeric",weekday:"short",month:"short",day:"numeric"},h=new Date(m),b=new Date(d);t=h.toLocaleDateString(void 0,x),r=b.toLocaleDateString(void 0,x);var w={};return c&&p&&(w=C(C({},w),{},{text:"Live now!"})),(0,f.jsxs)("div",{className:"jsx-378736845 "+"cardWrapper".concat(c?" isLive":""),children:[(0,f.jsx)(y,{isPulsing:c,ribbon:w,children:(0,f.jsxs)("div",{className:"jsx-378736845 streamCard",children:[(0,f.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.twitch.tv/".concat(u),className:"jsx-378736845",children:[(0,f.jsx)("img",{src:a,alt:"".concat(o,"'s profile"),className:"jsx-378736845 streamerAvatar"}),(0,f.jsxs)("div",{className:"jsx-378736845 center",children:[(0,f.jsx)("h3",{className:"jsx-378736845",children:o}),(0,f.jsxs)("div",{className:"jsx-378736845 times",children:[(0,f.jsxs)("div",{className:"jsx-378736845",children:[(0,f.jsx)("b",{className:"jsx-378736845",children:"Starts: "}),(0,f.jsx)("u",{className:"jsx-378736845",children:t})]}),(0,f.jsxs)("div",{className:"jsx-378736845",children:[(0,f.jsx)("b",{className:"jsx-378736845",children:"\xa0Till: "}),(0,f.jsx)("u",{className:"jsx-378736845",children:r})]})]}),i?(0,f.jsx)(g,{progress:l,goal:i,goalText:"",progressText:"",inlineText:!0,isMoney:!0,width:75,height:30,displayProgress:!0}):null]})]}),(0,f.jsx)(_,{streamIsLive:c,links:{donate:n.donate},columnLayout:!p})]})}),(0,f.jsx)(s.default,{id:"378736845",children:["a.jsx-378736845{color:black;-webkit-text-decoration:none;text-decoration:none;}",".cardWrapper.jsx-378736845{display:grid;position:relative;width:85%;min-width:280px;box-sizing:border-box;}",".streamCard.jsx-378736845{border-radius:20px;box-sizing:border-box;display:grid;grid-template-columns:auto 100px;grid-auto-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;grid-column-gap:20px;-webkit-column-gap:20px;column-gap:20px;}",".isLive.jsx-378736845{width:100%;}","a.jsx-378736845{display:grid;grid-template-columns:100px auto;grid-auto-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".streamerAvatar.jsx-378736845{border-radius:50%;border:#000 solid 3px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:start;object-fit:cover;width:100px;max-height:100%;}",".isLive.jsx-378736845 .streamerAvatar.jsx-378736845{border:red solid 3px;}",".center.jsx-378736845{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;place-items:center;}",".times.jsx-378736845{margin:5px 0 5px 0;}","h3.jsx-378736845{padding:0;margin:0;}","@media (max-width:".concat(600,"px){a.jsx-378736845,.streamCard.jsx-378736845,.center.jsx-378736845{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;place-items:center;width:100%;}}")]})]})};Z.defaultProps={streamIsLive:!1,sumDonations:0,avatarImageURL:"https://assets.donordrive.com/clients/extralife/img/avatar-constituent-default.gif",fundraisingGoal:0,links:{}};var I=Z;function U(e,t){var r=new Date;return new Date(e)<r&&r<new Date(t)}var M=function(e){var t=e.schedule,r=e.teamMembers;if(!t)return null;var a=t.reduce((function(e,t){var a=r.find((function(e){var r;return t.streamer.trim().toLowerCase()===(null===e||void 0===e||null===(r=e.twitchUsername)||void 0===r?void 0:r.toLowerCase())}))||{},i=t.timeStart,n=t.timeEnd,s=t.streamer,o=a.twitchUsername,c=a.avatarImageURL,l=a.links,d=a.sumDonations,m=a.fundraisingGoal,u=U(i,n);return e.push((0,f.jsx)(I,{twitchUsername:o||s,timeStart:i,timeEnd:n,streamIsLive:u,streamer:s,avatarImageURL:c,links:l,sumDonations:d,fundraisingGoal:m},s)),e}),[]);return(0,f.jsxs)("div",{className:"jsx-3382547516",children:[a,(0,f.jsx)(s.default,{id:"3382547516",children:[".jsx-3382547516{display:grid;grid-row-gap:10px;row-gap:10px;padding:10px 30px;box-sizing:border-box;width:100%;justify-items:center;}"]})]})},G=function(e){var t,r=e.children,a=e.isCollapsed,i=(0,l.useRef)(),n=(0,l.useRef)(),o=(0,l.useState)("auto"),c=o[0],d=o[1],m=E(window);return(0,l.useLayoutEffect)((function(){var e;if(null!==(e=n.current)&&void 0!==e&&e.offsetHeight){var t=n.current.offsetHeight;setTimeout((function(){return d("".concat(t,"px"))}),250)}}),[m.width,null===(t=n.current)||void 0===t?void 0:t.offsetHeight]),(0,f.jsxs)("div",{ref:i,className:s.default.dynamic([["2805845805",[c]]])+" "+"collapsible ".concat(a?"collapsed":""),children:[(0,f.jsx)("div",{ref:n,className:s.default.dynamic([["2805845805",[c]]])+" measure",children:r}),(0,f.jsx)(s.default,{id:"2805845805",dynamic:[c],children:[".collapsible.__jsx-style-dynamic-selector{-webkit-transition:height 350ms;transition:height 350ms;overflow:hidden;box-sizing:border-box;height:".concat(c,";}"),".collapsed.__jsx-style-dynamic-selector{height:0px;}"]})]})},R=function(e){var t=e.isCollapsed,r=(0,l.useState)(0),a=r[0],i=r[1],n=(0,l.useRef)();return(0,l.useEffect)((function(){if(t&&!a||!t&&a){var e=0,r=-90;t&&!a?i(-90):!t&&a&&(e=-90,r=0,i(0)),n.current.animate([{transform:"rotate(".concat(e,"deg)")},{transform:"rotate(".concat(r,"deg)")}],{duration:300,easing:"linear"})}}),[t]),(0,f.jsxs)("span",{ref:n,className:s.default.dynamic([["3361832461",[a]]]),children:[(0,f.jsx)("i",{title:"Collapse/Expand",className:s.default.dynamic([["3361832461",[a]]])+" fas fa-angle-down"}),(0,f.jsx)(s.default,{id:"3361832461",dynamic:[a],children:[".__jsx-style-dynamic-selector{display:inline-block;-webkit-transform:rotate(".concat(a,"deg);-ms-transform:rotate(").concat(a,"deg);transform:rotate(").concat(a,"deg);}")]})]})};R.defaultProps={isCollapsed:!1};var F=R,A=r(5747),B=r(7180),W=function(e){var t=e.url,r=e.hashtags,a=e.viaAccount,i=e.text;return(0,f.jsxs)("span",{className:"jsx-3755076847",children:[(0,f.jsx)("a",{href:"https://twitter.com/intent/tweet","data-show-count":"false","data-text":i,"data-url":t,"data-hashtags":r,"data-via":a,target:"_blank",rel:"noreferrer",className:"jsx-3755076847 twitter-mention-button",children:"Tweet"}),(0,f.jsx)(s.default,{id:"3755076847",children:[".jsx-3755076847{margin:0 10px;vertical-align:middle;}"]})]})};W.defaultProps={hashtags:[],url:void 0,viaAccount:void 0};var H=W,J=function(e){var t=e.twitchUsername,r=e.twitter,a=e.groupTwitter,i=e.hashtags,n=r?"@".concat(r):t,o="I'm watching ".concat(n," stream for Extra Life raising money for charity! Come and support!"),c="https://twitch.tv/".concat(t),l=a;return(0,f.jsxs)("div",{className:"jsx-2199518114 twitchWrapper",children:[(0,f.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charSet:"utf-8",className:"jsx-2199518114"}),(0,f.jsx)("h2",{className:"jsx-2199518114",children:"LIVE NOW:"}),"  ",(0,f.jsxs)("h3",{className:"jsx-2199518114",children:[(0,f.jsx)("a",{href:"https://www.twitch.tv/".concat(t),target:"_blank",rel:"noreferrer",className:"jsx-2199518114",children:t}),(0,f.jsx)(H,{text:o,hashtags:i,url:c,viaAccount:l})]}),(0,f.jsx)("div",{className:"jsx-2199518114 twitchEmbedWrapper",children:(0,f.jsx)(B.ZT,{channel:t,theme:"dark",width:"100%",height:"100%",withChat:!1})}),(0,f.jsx)(s.default,{id:"2199518114",children:["h2.jsx-2199518114,h3.jsx-2199518114{display:inline-block;vertical-align:middle;}","a.jsx-2199518114{color:white;}",".twitchWrapper.jsx-2199518114{margin:40px 0 0 0;width:100%;max-width:622px;}",".twitchEmbedWrapper.jsx-2199518114{height:100%;width:100%;height:350px;border-radius:20px;overflow:hidden;box-shadow:0 8px 10px rgba(0,0,0,0.7);}"]})]})};J.defaultProps={twitter:null,groupTwitter:null,hashtags:[]};var Y=J;function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=r(9918),V="https://www.extra-life.org",K="".concat(V,"/api");function Q(e){return e.sort((function(e,t){if(e.streamIsLive&&!t.streamIsLive)return-1;if(t.streamIsLive&&!e.streamIsLive)return 1;var r=t.sumDonations-e.sumDonations;return 0===r?e.displayName.localeCompare(t.displayName):r})).map((function(e){var t,r=X({},e);if(null!==e&&void 0!==e&&null!==(t=e.links)&&void 0!==t&&t.stream){var a=e.links.stream.match(/channel=(.*)/);if(null!==a&&void 0!==a&&a[1])return r=X(X({},r),{},{twitchUsername:a[1]})}return r}))}var ee=!0,te=function(e){var t,r,n,o=e.name,p=e.groupInfo,h=(0,d.useRouter)(),w=h.query.group,j=q[w],y=null!==j&&void 0!==j&&null!==(t=j.schedule)&&void 0!==t&&t.length?function(e){return e.filter((function(e){return new Date<new Date(e.timeEnd)})).sort((function(e,t){return new Date(e.timeStart).getTime()-new Date(t.timeStart).getTime()}))}(j.schedule):[],v=(0,l.useState)({name:o}),k=v[0],_=v[1],N=(0,l.useState)(!(null!==k&&void 0!==k&&k.participants)),T=N[0],S=N[1],O=(0,l.useState)(!1),L=O[0],E=O[1],z=(0,l.useState)(!1),C=z[0],Z=z[1],I=(null===k||void 0===k?void 0:k.name)||o,R=function(){Z(!C),E(!1)};(0,l.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=(0,i.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x()("".concat(K,"/teams/").concat(j.id));case 3:if(!((t=e.sent).status<200||t.status>299)){e.next=6;break}return e.abrupt("return",{});case 6:return e.next=8,t.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:return e.prev=12,e.t0=e.catch(0),console.log("Error fetching team"),e.abrupt("return",{});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function r(){return n.apply(this,arguments)}function n(){return(n=(0,i.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x()("".concat(K,"/teams/").concat(j.id,"/participants"));case 3:if(!((t=e.sent).status<200||t.status>299)){e.next=6;break}return e.abrupt("return",[]);case 6:return e.next=8,t.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:return e.prev=12,e.t0=e.catch(0),console.log("Error fetching fetchTeamMembers"),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function s(){return(s=(0,i.Z)(c().mark((function t(){var i,n,s,o,l,d,m,u,p,x,f;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i="".concat(w,"-extralife"),n=JSON.parse(localStorage.getItem(i)||"{}"),s=new Date(Date.now()-3e5),o=null===n||void 0===n?void 0:n.updatedAt,l=n.team,o&&!(new Date(o)<s)){t.next=16;break}return t.next=8,Promise.all([e(),r()]);case 8:d=t.sent,m=(0,a.Z)(d,2),u=m[0],p=m[1],x=Q(p),Object.keys(u).length>0&&u.constructor===Object&&p.length>0&&(l=X(X({},u),{},{participants:x})),f={team:l,updatedAt:Date.now()},localStorage.setItem(i,JSON.stringify(f));case 16:_(l),S(!1);case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}null!==j&&void 0!==j&&j.id&&function(){s.apply(this,arguments)}()}),[w,j]);var B="".concat(I," Extra Life Team | Cali Creators"),W="".concat(I," Extra Life Team Page. We're raising money to help our local children's hospital!"),J="https://calicreators.com",$="".concat(J).concat(h.asPath),ee=(0,f.jsxs)(m.default,{children:[(0,f.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,f.jsx)("title",{children:B},"title"),(0,f.jsx)("meta",{property:"og:title",content:B},"og:title"),(0,f.jsx)("meta",{property:"og:description",content:W},"og:description"),(0,f.jsx)("meta",{name:"Description",content:"".concat(I," ").concat(W)},"description"),(0,f.jsx)("meta",{property:"og:url",content:$},"og:url"),(0,f.jsx)("meta",{property:"og:image",content:"".concat(J,"/extralife-icon.png")},"og:image"),(0,f.jsx)("meta",{property:"og:image:width",content:"255"},"og:image:width"),(0,f.jsx)("meta",{property:"og:image:height",content:"255"},"og:image:height"),(0,f.jsx)("link",{rel:"preconnect",href:V}),(0,f.jsx)("script",{src:"https://embed.twitch.tv/embed/v1.js"})]}),te=(0,f.jsxs)("div",{className:"jsx-1295781539",children:[(0,f.jsx)(b.Z,{}),(0,f.jsx)(s.default,{id:"1295781539",children:[".jsx-1295781539{margin-top:0px;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:grid;place-items:center;font-size:10rem;}"]})]}),re=!1,ae=!1,ie=function(e){return e&&e.length?{start:new Date(e[0].timeStart),end:new Date(e[e.length-1].timeEnd)}:{}}(y)||{};if(null!==y&&void 0!==y&&y.length){var ne=new Date(ie.start-864e5);re=U(ie.start,ie.end),ae=re||Date.now()>ne}var se,oe={hour:"numeric",minute:"numeric",month:"numeric",day:"numeric",timeZoneName:"short"},ce=null===ie||void 0===ie||null===(r=ie.start)||void 0===r?void 0:r.toLocaleDateString(void 0,oe),le=null===ie||void 0===ie||null===(n=ie.end)||void 0===n?void 0:n.toLocaleDateString(void 0,oe),de=function(){var e="".concat(ce," to ").concat(le),t="upcoming",r="Upcoming Schedule - ".concat(e," "),a=null,i=null;return ae&&re&&(t="live",r="Live Schedule ",a=(0,f.jsx)(Y,{twitchUsername:y[0].streamer,twitter:y[0].twitter,groupTwitter:p.links.twitter,hashtags:j.hashtags})),re||(i=(0,f.jsxs)("div",{className:"shareContainer",children:["Share and support:\xa0",(0,f.jsx)(H,{text:"Check out the upcoming ExtraLife charity event for @".concat(p.links.twitter," on ").concat(ce),hashtags:j.hashtags,url:"https://calicreators.com/".concat(w,"/extralife")})]})),(0,f.jsxs)(f.Fragment,{children:[a,(0,f.jsxs)("div",{className:"jsx-782857760 "+"streamerSchedule ".concat(t),children:[i,(0,f.jsx)("h2",{className:"jsx-782857760",children:(0,f.jsxs)("button",{type:"button",onClick:R,className:"jsx-782857760",children:[r,(0,f.jsx)(F,{isCollapsed:C})]})}),(0,f.jsx)(G,{isCollapsed:C,children:(0,f.jsx)(M,{schedule:y,teamMembers:k.participants})})]}),(0,f.jsx)(s.default,{id:"782857760",children:[".streamerSchedule.jsx-782857760{margin-top:20px;width:100%;max-width:800px;}",".upcoming.jsx-782857760{text-align:center;}",".upcoming.jsx-782857760 h2.jsx-782857760{margin-top:0;}",".shareContainer.jsx-782857760{justify-self:center;}","@media (max-width:600px){.streamerSchedule.upcoming.jsx-782857760 h2.jsx-782857760{text-align:center;margin-left:0;}}"]})]})};T||(te=(0,f.jsxs)(f.Fragment,{children:[(null===y||void 0===y?void 0:y.length)>0&&ae&&de(),null!==k&&void 0!==k&&null!==(se=k.links)&&void 0!==se&&se.page?(0,f.jsxs)("div",{className:"jsx-3566424869 teamMembers",children:[(0,f.jsx)("a",{href:k.links.page,className:"jsx-3566424869 teamLink",children:"Join Team"}),(0,f.jsx)("h2",{className:"jsx-3566424869 sectionHeader",children:(0,f.jsxs)("button",{type:"button",onClick:function(){E(!L),Z(!1)},className:"jsx-3566424869",children:["Team Members\xa0",(0,f.jsx)(F,{isCollapsed:L})]})}),(0,f.jsx)(G,{isCollapsed:L,children:(0,f.jsx)(D,{teamMembers:k.participants})})]}):null,(null===y||void 0===y?void 0:y.length)>0&&!ae&&de(),(0,f.jsx)(s.default,{id:"3566424869",children:[".teamLink.jsx-3566424869{color:#fff;padding:15px;border-radius:8px;font-size:24px;background:#26c2eb;-webkit-text-decoration:none;text-decoration:none;font-weight:bold;}",".teamLink.jsx-3566424869:hover{background:#13a2c8;}",".teamMembers.jsx-3566424869{margin-top:40px;text-align:center;position:relative;}",".sectionHeader.jsx-3566424869{margin-bottom:-30px;}","h2 button{font-family:inherit;font-size:inherit;line-height:inherit;margin:0;font-weight:inherit;background:inherit;border:inherit;color:inherit;}","h2 button:focus:not(:focus-visible){outline:none;}"]})]}));return(0,f.jsxs)(f.Fragment,{children:[ee,(0,f.jsxs)("div",{className:"jsx-3055029280 page",children:[(0,f.jsx)(P,{title:I}),(0,f.jsx)("h2",{className:"jsx-3055029280 subheader",children:"Extra Life Team"}),(0,f.jsx)("div",{style:{width:"200px"},className:"jsx-3055029280",children:(0,f.jsx)(A.Z,{groupName:p.name,links:p.links})}),(0,f.jsx)(u.default,{href:"/",children:(0,f.jsx)("a",{className:"jsx-3055029280 homeLink",children:"Cali Creators Home"})}),null!==k&&void 0!==k&&k.fundraisingGoal?(0,f.jsx)(g,{progress:k.sumDonations,goal:k.fundraisingGoal,progressText:"Raised",goalText:"Goal",isMoney:!0,width:80,displayProgress:!0,isLoading:!0}):null,te,(0,f.jsx)(s.default,{id:"3055029280",children:[".page.jsx-3055029280{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:50px 16px 0 16px;}",".subheader.jsx-3055029280{padding:0;margin:0;}",".homeLink.jsx-3055029280{color:#fff;font-size:18px;}"]})]})]})}},2086:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[group]/extralife",function(){return r(2318)}])},9918:function(e){"use strict";e.exports=JSON.parse('{"oc":{"url":"https://www.extra-life.org/team/ocstreamers","id":"55866","hashtags":["OCStreamersForChoc","ExtraLife"],"schedule":[{"streamer":"PhunGuy","twitter":"phunguy8624","timeStart":"2020-11-07T12:00:00.000Z","timeEnd":"2020-11-07T15:30:00.000Z"},{"streamer":"that_guy_nibbs","twitter":"That_Guy_Nibbs","timeStart":"2020-11-07T15:30:00.000Z","timeEnd":"2020-11-07T19:00:00.000Z"},{"streamer":"Reizna","twitter":"reiznacosplay","timeStart":"2020-11-07T19:00:00.000Z","timeEnd":"2020-11-07T22:30:00.000Z"},{"streamer":"ThaRealMcCoy77","timeStart":"2020-11-07T22:30:00.000Z","timeEnd":"2020-11-08T02:00:00.000Z"},{"streamer":"gongjulee","twitter":"lunar_reim","timeStart":"2020-11-08T02:00:00.000Z","timeEnd":"2020-11-08T05:30:00.000Z"},{"streamer":"UpDownLeftDie","twitter":"UpDownLeftDie","timeStart":"2020-11-08T05:30:00.000Z","timeEnd":"2020-11-08T09:00:00.000Z"},{"streamer":"Rawstarr","rawstarr":"rawstarr","timeStart":"2020-11-08T09:00:00.000Z","timeEnd":"2020-11-08T12:30:00.000Z"},{"streamer":"BillySundown","twitter":"BillySundown","timeStart":"2020-11-08T12:30:00.000Z","timeEnd":"2020-11-08T16:00:00.000Z"},{"streamer":"Ganza","twitter":"Ganza731","timeStart":"2020-11-08T16:00:00.000Z","timeEnd":"2020-11-08T19:30:00.000Z"},{"streamer":"SituaShaun","twitter":"SituaShaun_","timeStart":"2020-11-08T19:30:00.000Z","timeEnd":"2020-11-08T23:00:00.000Z"}]},"sd":{"url":"https://www.extra-life.org/team/TwitchSanDiego","id":"50770","schedule":[]}}')}},function(e){e.O(0,[774,812,888,179],(function(){return t=2086,e(e.s=t);var t}));var t=e.O();_N_E=t}]);