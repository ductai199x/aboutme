(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3218)}])},3218:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return O}});var i=a(5893),n=a(4184),o=a.n(n),r=a(7294),l=a(5675),s=a.n(l);let c={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*Math.abs(t-e))+e},f=(e,t)=>"rgba(".concat(255*(1-e),",").concat(255*(1-e),",").concat(255*e,")"),h=(e,t,a)=>{let i=[];for(let o=0;o<a;o++){i.push([]);for(var n=0;n<t;n++)i[i.length-1].push(f((Math.sin((e+n/t)*(e+o/a)*2*Math.PI)+1)/2,0))}return i},u=(e,t)=>{let a;return/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)?(3==(a=e.substring(1).split("")).length&&(a=[a[0],a[0],a[1],a[1],a[2],a[2]]),"rgba("+[(a="0x"+a.join(""))>>16&255,a>>8&255,255&a].join(",")+",".concat(t,")")):"rgba(0,0,0,".concat(t,")")},m=e=>{let t=e.split("(")[1].split(")")[0].split(","),a="#";for(let e=0;e<3;e++){let i=parseInt(t[e].trim()).toString(16);1==i.length&&(i="0"+i),a+=i}return a},g=e=>void 0!==c[e.toLowerCase()]?c[e.toLowerCase()]:null;var b=a(4163);let p={className:"matrix-rain",drawTimerMs:50,fgColor:"#00ff00",bgColor:"#000000",tipColor:"#FFFFFF",fontSize:13,bgAlpha:.1,rainbow:!0,maxCycle:100,yVelocity:2,maxTrailLength:10,minTrailLength:3,word:"",spawnChance:.11},x=(e,t,a)=>({columns:Math.floor(e/a)+1,rows:Math.floor(t/a)+1}),y=()=>String.fromCodePoint(d(65381,65440)),_=function(e,t,a,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=n;""===o&&(o=y()),i.fillStyle=a,i.fillText(o,e,t)},v=e=>{let t="",a=""!==e.word?e.word:e.firstChar;if(e.trailLength>a.length){if(""===e.fullText){let i="";for(let t=0;t<e.trailLength-a.length;t++)i+=y();t=a+i}else{let i=y()+e.fullText.substring(a.length,e.fullText.length-1);t=a+i}}else t=e.word;return t},w=e=>{let t,a;e={...p,...e};let{theme:n}=(0,r.useContext)(b.ThemeCtx),l=(0,r.useRef)(null),s=null,c=()=>s.canvas.width,f=()=>s.canvas.height,w=()=>x(c(),f(),e.fontSize),k=[],A=0,j=0,C=!0,S=(t,a)=>({xPos:t,yPos:a,firstChar:y(),word:e.word,trailLength:d(e.minTrailLength,e.maxTrailLength),fullText:""}),N=()=>{let t=w();for(let a=0;a<t.columns;a++){let i=d(0,t.rows*e.fontSize),n=S(a*e.fontSize,i);k.push(n)}},M=()=>{let t=w();for(let a=0;a<t.columns;a++)if(Math.random()<=e.spawnChance){let t=S(a*e.fontSize,0);k.push(t)}},P=()=>{let t=w(),a=[];for(let i in k){let n=k[i];n.yPos+=e.yVelocity,n.yPos<(t.rows+7)*e.fontSize&&a.push(n)}k=a},R=(t,a,i)=>{i.font=e.fontSize+"px Helvetica";let n=Math.max(t.trailLength,t.word.length),o=e.fgColor;if(e.rainbow){let i=Math.floor(t.xPos/e.fontSize),n=Math.floor(t.yPos/e.fontSize),r="";try{r=a[n][i],void 0!==r&&""!==r&&(o=m(r))}catch(e){}}let r=u(o,1),l=t.fullText;(C||""===l)&&(l=v(t),t.fullText=l);for(let a=0;a<n;a++){let s=""!==e.tipColor&&0===a?e.tipColor:r,c=t.yPos-a*e.fontSize;c>0&&_(t.xPos,c,s,i,l[a]),0!==a&&(r=u(o,1-a/n))}},T=()=>{if(l.current){a=window.devicePixelRatio;let e=l.current.parentElement.getBoundingClientRect().width,t=l.current.parentElement.getBoundingClientRect().height;l.current.width=Math.floor(e),l.current.height=Math.floor(t),null===s?s=l.current.getContext("2d"):s.scale(a,a)}},z=()=>{if(T(),null!==s){s.fillStyle="light"==n?"white":"black",s.fillRect(0,0,c(),f()),s.beginPath(),0===k.length&&N(),C&&M();let t=w(),a=h((Math.sin(A/e.maxCycle*2*Math.PI)+1)/2,t.columns,t.rows);for(let e in k)R(k[e],a,s);P(),A++,A%=e.maxCycle,j+=e.yVelocity,C=0===(j=j>=e.fontSize?0:j)}},D=()=>{t&&L(),t=setInterval(z,e.drawTimerMs)},L=()=>{t&&clearInterval(t)};return(0,r.useEffect)(()=>(D(),()=>{L()})),(0,r.useEffect)(()=>{"light"==n?(e.fgColor=g("black"),e.bgColor=g("white"),e.tipColor=g("black")):"dark"==n&&(e.fgColor=g("white"),e.bgColor=g("black"),e.tipColor=g("white"))},[n]),(0,i.jsx)("canvas",{className:o()(e.className,n),ref:l})};var k=a(2489),A=a(6915),j=a.n(A),C=a(3924),S=a(355),N=a(762),M=a(2609),P=a(3024);let R={facebook:{href:"https://facebook.com/ductai199x",icon:P.neY},linkedin:{href:"https://linkedin.com/in/tai-duc-nguyen",icon:P.D9H},github:{href:"https://github.com/ductai199x",icon:P.zhw},gmail:{href:"mailto:taiducnguyen.drexel@gmail.com",icon:P.xYR}},T=new Date().getFullYear(),z=[T-1998+" years old","PhD student","Drexel University"],D="Python",L="CSS, HTML",E="Bash",I=[{role:"AI Researcher",where:"MISL Lab @ Drexel University",date:"03/20 - Present",tech:[D,"C++","Tensorflow","Pytorch"],desc:[{task_desc:"Improved camera model source identification by designing and implementing a Constrained Convolutional Neural Network specifically tailored for extracting generic forensic traces in images.",type:"Publication",link:"https://ieeexplore.ieee.org/document/8335799"},{task_desc:"Researched and developed VideoFACT, the first deep learning algorithm for detecting and localizing generic content forgeries in modern videos using self-attention, forensic traces, and context.",type:"Publication",link:"https://arxiv.org/abs/2211.15775"},{task_desc:"Devised an algorithm to defend against puppeteering attacks on low-bandwidth AI-based videoconferencing systems.",type:"Publication",link:"Publishing soon in CVPR Workshop on Multimedia Forensics"},{task_desc:"Developed a novel deep learning algorithm for open-set synthetic image source attribution and detection, utilizing metric learning via ProxyNCA++ combined with information retrieval/ranking through clustering.",type:"Publication",link:"Publishing soon"},{task_desc:"Led and collaborated on the development and open-sourcing of a comprehensive suite of forensic tools in Python and PyTorch, designed for a wide range of tasks in both image and video forensics.",type:"Project",link:"Publishing soon on github"}]},{role:"AI Researcher",where:"DISCO Lab @ Drexel University",date:"09/19 - 09/20",tech:["C","C++","CARLSim"],desc:[{task_desc:"Explored the inner workings of Spiking Neural Networks (SNN). Architected and demoed a gender classification machine (with SNN) using audio data. The machine’s accuracy is higher than ConvNet, while consuming 35 times less energy. Future developments are to achieve the accuracy & efficiency of the human brain.",type:"Project",link:"https://github.com/ductai199x/CARLsim4"}]},{role:"DevOps Engineer",where:"Dell Boomi",date:"04/19 - 10/19",tech:["Linux","Ansible",D,E,"Splunk","AWS RDS, EC2, Route53"],desc:[{task_desc:"Automated and maintained the creation/retirement of complex cloud platforms with 75 of components in AWS.",type:"Project",link:""},{task_desc:"Led the effort to built a stable, cloud-distributed monitoring security/logging solution using Splunk Enterprise.",type:"Project",link:""},{task_desc:"Achieved the “Frontier Award” for creating “Smart Garage” to manage future autonomous taxies during company's annual Green Day.",type:"Project",link:""}]},{role:"AI Researcher",where:"Vertically Integrated Program @ Drexel University",tech:[D,"C++"],date:"04/18 - 07/19",desc:[{task_desc:"Researched and developed intelligent communication protocols at the transport/networking layer that can tackle the “Spectrum Scarcity” problem in the field of Cognitive Radios. Introduced machine learning and optimization in the Intelligent Queueing System, Adaptive Modulation Control System, and Automative Repeat Request System.",type:"Project",link:""}]},{role:"Co-Founder and Tech Lead",where:"Seeds Vietnam",date:"01/18 - 03/19",tech:[D,"ReactJS","NodeJS",L,"Firebase"],desc:[{task_desc:"Created a serverless web-application for blogging on studying abroad and new technologies with subscription, authentication, email notification and real-time like/comment system using ReactJS, NodeJS and Google Firebase. Working on implementing machine learning for content recommendation and hackathon demos.",type:"Project",link:"https://github.com/ductai199x/SeedsVietnam"}]},{role:"Software Engineer",where:"Bristol-Myers Squibb",date:"04/18 - 10/18",tech:["Java","Javascript",L,E,"JDBC","MySql"],desc:[{task_desc:"Developed and deployed real-time global provisioning applications with AWS EC2, S3, MySql RDS, Route53, Lambda and a web-client that uses Java Spring MVC framework. The applications are used by 1000+ employees worldwide.",type:"Project",link:""},{task_desc:"Supervised and assisted in patching the company’s provisioning database with dozens of connected tables and tens of millions of rows. ",type:"Project",link:""}]}];var q={src:"/aboutme/_next/static/media/myface.f62746f6.png",height:1254,width:1254,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAv0lEQVR42mP4++/f////b9y6U9fWffnqdSD779+/QJIBiD9++tyR6rO4yKkxxubm7TsQOZDE23fvNzXEP9o0YX2Zy45NG8ASfxiABv388ePEnJajfSVnphW/uXYGKPHnzx+G/2Dw8vzBG9MLry+u+/7pA0SE4cXz5zt27lqzZOGVld139q7o6+xYvHDRrZs3GfSVVBgYGNqamnds3nT88OHE2EQGCLAwNlWXU+1sadu8YdOe7TuiQiJd7F2szCwBFNiFhVdV3JoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};let V=e=>{let{src:t,width:a,quality:i}=e;return"".concat(t,"?w=").concat(a,"&q=").concat(i||75)},F=()=>{let{theme:e}=(0,r.useContext)(b.ThemeCtx),[t,a]=(0,r.useState)(!1),[n,l]=(0,r.useState)(null),c=()=>{a(!t)},d=e=>{console.log(e),c(),l(e)};return(0,i.jsxs)("div",{className:o()(j()["about-me"],e),children:[(0,i.jsxs)("div",{className:j()["cool-picture"],children:[(0,i.jsx)(w,{className:j()["matrix-rain"]}),(0,i.jsx)(s(),{className:j()["overlay-photo"],src:q,loader:V,alt:""}),(0,i.jsxs)("div",{className:j().intro,children:[(0,i.jsx)("div",{className:j().name,children:(0,i.jsx)("h1",{children:(0,i.jsx)("b",{children:"Tai D. Nguyen"})})}),(0,i.jsx)("div",{className:j().jobs,children:"AI Researcher, Computer & Software Engineer"}),(0,i.jsx)("div",{className:j().social,children:(0,i.jsx)("ul",{className:j()["social-list"],children:Object.keys(R).map((e,t)=>(0,i.jsx)("li",{id:e,children:(0,i.jsx)("a",{href:R[e].href,children:(0,i.jsx)(k.G,{icon:R[e].icon})})},e))})})]})]}),(0,i.jsxs)("div",{className:o()(j().resume,e),children:[(0,i.jsxs)("div",{className:j()["short-desc"],children:[(0,i.jsx)("div",{className:j().desc,children:(0,i.jsx)("b",{children:"about me"})}),(0,i.jsx)("div",{className:j()["desc-list"],children:z.map((e,t)=>(0,i.jsx)("div",{className:j()["desc-item"],children:e},e))}),(0,i.jsx)("div",{className:j()["desc-para"],children:"Compassionate, humble, responsible, persistent and knowledgeable are the words people use to describe me because I have always “stayed hungry and stayed foolish”"}),(0,i.jsx)("hr",{className:"hr1"})]}),(0,i.jsxs)("div",{className:j()["tech-knowledge"],children:[(0,i.jsx)("div",{className:j().desc,children:(0,i.jsx)("b",{children:"my experience"})}),(0,i.jsxs)("div",{className:j()["exp-list"],children:[(0,i.jsx)(C.aV,{isOpen:t,onClose:c,transitionDuration:100,className:o()(S.iEm,j()["exp-overlay"]),children:null!=n?(0,i.jsxs)(C.Zb,{className:o()(j()["exp-card"],j()["exp-overlay-card"]),interactive:!1,elevation:N.u.TWO,children:[(0,i.jsx)(C.zx,{className:j()["overlay-close-btn"],onClick:c,intent:M.S.WARNING,text:"X"}),(0,i.jsx)("div",{id:j()["exp-role"],children:n.role}),(0,i.jsx)("div",{id:j()["exp-where"],children:n.where}),(0,i.jsx)("ul",{id:j()["exp-tech"],children:n.tech.map((e,t)=>(0,i.jsx)("li",{children:e},"overlay_tech_"+t))}),(0,i.jsx)("ul",{children:n.desc.map((e,t)=>(0,i.jsx)("li",{children:e.task_desc},"overlay_desc_"+t))})]}):(0,i.jsx)("div",{})}),I.map((e,t)=>(0,i.jsxs)(C.Zb,{className:o()(j()["exp-card"],j()["exp-card-elevation"]),interactive:!1,onClick:t=>d(e),children:[(0,i.jsx)("div",{id:j()["exp-role"],children:e.role}),(0,i.jsx)("div",{id:j()["exp-where"],children:e.where}),(0,i.jsx)("ul",{id:j()["exp-tech"],children:e.tech.map((e,a)=>(0,i.jsx)("li",{children:e},t+"_"+a))}),(0,i.jsx)("p",{id:j()["exp-desc"],children:e.desc.map(e=>e.task_desc).join(" //\n")})]},t))]})]})]})]})};var B=a(9034),G=a.n(B);let J=()=>{let{theme:e}=(0,r.useContext)(b.ThemeCtx);return(0,i.jsx)("main",{className:o()(G().main,e),children:(0,i.jsx)(F,{})})};var O=J},6915:function(e){e.exports={"about-me":"AboutMe_about-me__uqGc4","cool-picture":"AboutMe_cool-picture__WYQ92","overlay-photo":"AboutMe_overlay-photo__U3Os_","matrix-rain":"AboutMe_matrix-rain__JcjnD",intro:"AboutMe_intro__bY7oI",name:"AboutMe_name__igJop",jobs:"AboutMe_jobs__n3Gfs",social:"AboutMe_social__xlvJT","social-list":"AboutMe_social-list__1dpr9",resume:"AboutMe_resume__3_zJf","exp-card":"AboutMe_exp-card__NYZlj","short-desc":"AboutMe_short-desc__i1SX2",desc:"AboutMe_desc__9dk_t","desc-list":"AboutMe_desc-list__HZDHw","desc-item":"AboutMe_desc-item__JBKlS","desc-para":"AboutMe_desc-para__eFdgV","tech-knowledge":"AboutMe_tech-knowledge__5Z45t","exp-list":"AboutMe_exp-list___pmo0","exp-role":"AboutMe_exp-role__s_6kG","exp-where":"AboutMe_exp-where__z05x4","exp-tech":"AboutMe_exp-tech__BOS0B","exp-desc":"AboutMe_exp-desc__TOL8Z","exp-overlay":"AboutMe_exp-overlay__qzmWq","exp-overlay-card":"AboutMe_exp-overlay-card__nlZRt","overlay-close-btn":"AboutMe_overlay-close-btn__dgAeB"}},9034:function(e){e.exports={main:"Home_main__nLjiQ"}}},function(e){e.O(0,[948,924,634,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);