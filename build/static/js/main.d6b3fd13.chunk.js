(this["webpackJsonpascii-billing"]=this["webpackJsonpascii-billing"]||[]).push([[0],{15:function(e,t,a){e.exports=a(27)},20:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(3),o=a.n(i),r=(a(20),a(4)),u=a(5),s=a(9),m=a(8),c=a(7),v=a(2),h=a(6),_=a.n(h),p=_()(),E={kpl:Number(1),tuote:"",veroton:Number(0),alv:Number(0)},d={nimi:"",osoiterivi1:"",osoiterivi2:"",osoiterivi3:"",ytunnus:""};_.a.locale("fi");var g=function(){function e(){var t=this;if(Object(r.a)(this,e),this.nimi="",this.ytun="",this.osr1="",this.osr2="",this.osr3="",this.iban="",this.bic="",this.day=_()(p).format("DD.MM.YYYY"),this.maks=Number(14),this.viiv=Number(9),this.huom=Number(7),this.viit="",this.valu="EUR",this.mnimi="",this.mytun="",this.mosr1="",this.mosr2="",this.mosr3="",this.selite="",this.tuotteet=[],this.maksaja=[],this.valittuMaksaja=0,this.teema="musta",this.logo=!1,this.w=function(e,t){return(e=e.toString()).length>=t?e.slice(0,t):e+" ".repeat(t-e.length)},this.x=function(e,t){e=e.toString();var a=Math.round(t/2),n=Math.floor(t/2),l=" ".repeat(a-Math.round(e.length/2)),i=" ".repeat(n-Math.floor(e.length/2));return e.length>=t?e.slice(0,t):l+e+i},this.ma=function(e,a){return t.w(e+" vrk netto",a)},this.vi=function(e,a){return t.w(e+"%",a)},this.hu=function(e,a){return t.w(e+" vrk",a)},this.lisaaTuote=function(){t.tuotteet.push(E)},this.poistaTuote=function(e){t.tuotteet.length>1&&t.tuotteet.splice(e,1)},this.lisaaMaksaja=function(){t.maksaja.push({nimi:t.mnimi,osoiterivi1:t.mosr1,osoiterivi2:t.mosr2,osoiterivi3:t.mosr3,ytunnus:t.mytun}),t.valittuMaksaja+=1},this.poistaMaksaja=function(){t.maksaja.length>1&&0!==t.valittuMaksaja&&(t.maksaja.splice(t.valittuMaksaja,1),t.valittuMaksaja-=1)},this.vaihdaMaksaja=function(e){t.valittuMaksaja=e.target.value,t.mnimi=t.maksaja[t.valittuMaksaja].nimi,t.mosr1=t.maksaja[t.valittuMaksaja].osoiterivi1,t.mosr2=t.maksaja[t.valittuMaksaja].osoiterivi2,t.mosr3=t.maksaja[t.valittuMaksaja].osoiterivi3,t.mytun=t.maksaja[t.valittuMaksaja].ytunnus},this.lisaaTyhjaMaksaja=function(){t.maksaja.push(d)},this.vero=function(e,t,a){return(e*t+e*t*a/100).toFixed(2)},this.bodyClass=Object(v.d)((function(){document.body.removeAttribute("class"),"musta"===t.teema&&document.body.classList.add("musta"),"valkoinen"===t.teema&&document.body.classList.add("valkoinen"),"vihre\xe4"===t.teema&&document.body.classList.add("vihre\xe4")})),this.lisaaTuote(),this.lisaaTyhjaMaksaja(),localStorage.laskuStorage2){var a=JSON.parse(localStorage.laskuStorage2);this.nimi=a.nimi,this.ytun=a.ytun,this.osr1=a.osr1,this.osr2=a.osr2,this.osr3=a.osr3,this.iban=a.iban,this.bic=a.bic,this.day=a.day,this.viiv=a.viiv,this.huom=a.huom,this.maks=a.maks,this.viit=a.viit,this.valu=a.valu,this.mnimi=a.mnimi,this.mytun=a.mytun,this.mosr1=a.mosr1,this.mosr2=a.mosr2,this.mosr3=a.mosr3,this.maksaja=a.maksaja,this.valittuMaksaja=a.valittuMaksaja,this.tuote=a.tuote,this.tuotteet=a.tuotteet,this.selite=a.selite,this.teema=a.teema,this.logo=a.logo}Object(v.d)((function(){var e={name:"Laskun tiedot",timestamp:Math.floor(Date.now()/1e3),nimi:t.nimi,ytun:t.ytun,osr1:t.osr1,osr2:t.osr2,osr3:t.osr3,iban:t.iban,bic:t.bic,day:t.day,viiv:t.viiv,huom:t.huom,maks:t.maks,viit:t.viit,valu:t.valu,mnimi:t.mnimi,mytun:t.mytun,mosr1:t.mosr1,mosr2:t.mosr2,mosr3:t.mosr3,maksaja:t.maksaja,valittuMaksaja:t.valittuMaksaja,tuote:t.tuote,tuotteet:t.tuotteet,selite:t.selite,teema:t.teema,logo:t.logo};localStorage.setItem("laskuStorage2",JSON.stringify(e))}))}return Object(u.a)(e,[{key:"erap",get:function(){return _()(this.day).add(this.maks,"days").format("DD.MM.YYYY")}}]),e}();Object(v.h)(g,{nimi:v.m,ytun:v.m,osr1:v.m,osr2:v.m,osr3:v.m,iban:v.m,bic:v.m,day:v.m,viiv:v.m,huom:v.m,maks:v.m,viit:v.m,valu:v.m,mnimi:v.m,mytun:v.m,mosr1:v.m,mosr2:v.m,mosr3:v.m,tuote:v.m,tuotteet:v.m,selite:v.m,erap:v.e,teema:v.m,logo:v.m,maksaja:v.m,valittuMaksaja:v.m});var k=new g,b=Object(c.a)(function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"inputs"},l.a.createElement("div",{className:"blokki"},l.a.createElement("h3",null,"( Asetukset )"),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"V\xe4riteema: "),l.a.createElement("select",{value:k.teema,onChange:function(e){return k.teema=e.target.value}},l.a.createElement("option",{value:"valkoinen"},"Valkoinen"),l.a.createElement("option",{defaultValue:!0,value:"musta"},"Musta"),l.a.createElement("option",{value:"vihre\xe4"},"Vihre\xe4"))),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Logo: "),l.a.createElement("input",{type:"checkbox",value:k.logo,onChange:function(e){return k.logo=!k.logo}}))),l.a.createElement("div",{className:"blokki"},l.a.createElement("h3",null,"( Laskuttajan tiedot )"),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Nimi: "),l.a.createElement("input",{type:"text",placeholder:"[................]",value:k.nimi,onChange:function(e){return k.nimi=e.target.value},maxLength:"36"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Osoiterivi 1: "),l.a.createElement("input",{type:"text",placeholder:"[................]",value:k.osr1,onChange:function(e){return k.osr1=e.target.value},maxLength:"76"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Osoiterivi 2: "),l.a.createElement("input",{type:"text",placeholder:"[................]",value:k.osr2,onChange:function(e){return k.osr2=e.target.value},maxLength:"76"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Osoiterivi 3: "),l.a.createElement("input",{type:"text",placeholder:"[................]",value:k.osr3,onChange:function(e){return k.osr3=e.target.value},maxLength:"76"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Y-tunnus: "),l.a.createElement("input",{type:"text",placeholder:"[................]",value:k.ytun,onChange:function(e){return k.ytun=e.target.value},maxLength:"66"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"IBAN: "),l.a.createElement("input",{type:"text",value:k.iban,onChange:function(e){return k.iban=e.target.value},placeholder:"[................]",maxLength:"30"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"BIC: "),l.a.createElement("input",{type:"text",value:k.bic,onChange:function(e){return k.bic=e.target.value},placeholder:"[................]",maxLength:"30"}))),l.a.createElement("div",{className:"blokki"},l.a.createElement("h3",null,"( Laskun tiedot )"),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"P\xe4iv\xe4m\xe4\xe4r\xe4: "),l.a.createElement("input",{type:"date",value:k.day,onChange:function(e){return k.day=e.target.value},required:!0})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Viiv\xe4styskorko: "),l.a.createElement("div",{className:"suffixed"},l.a.createElement("input",{type:"number",value:k.viiv,step:"0.01",onChange:function(e){return k.viiv=e.target.value}}),l.a.createElement("div",{style:{position:"absolute",left:8*k.viiv.toString().length+2+"px",top:"1px",pointerEvents:"none"}},"%"))),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Huomautus: "),l.a.createElement("div",{className:"suffixed"},l.a.createElement("input",{type:"number",value:k.huom,onChange:function(e){return k.huom=e.target.value}}),l.a.createElement("div",{style:{position:"absolute",left:8*k.huom.toString().length+10+"px",top:"1px",pointerEvents:"none"}},"vrk"))),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Maksuehdot: "),l.a.createElement("div",{className:"suffixed"},l.a.createElement("input",{type:"number",value:k.maks,onChange:function(e){return k.maks=e.target.value}}),l.a.createElement("div",{style:{position:"absolute",left:8*k.maks.toString().length+10+"px",top:"1px",pointerEvents:"none"}},"vrk netto"))),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Viitenumero: "),l.a.createElement("input",{type:"text",value:k.viit,onChange:function(e){return k.viit=e.target.value},placeholder:"[................]",maxLength:"21"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Valuutta: "),l.a.createElement("input",{type:"text",value:k.valu,onChange:function(e){return k.valu=e.target.value},placeholder:"[................]"}))),l.a.createElement("div",{className:"blokki"},l.a.createElement("h3",null,"( Maksajan tiedot )"),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Maksaja: "),l.a.createElement("select",{value:k.valittuMaksaja,onChange:function(e){return k.vaihdaMaksaja(e)}},k.maksaja.map((function(e,t){return l.a.createElement("option",{key:t,value:t},k.maksaja[t].nimi)})))),l.a.createElement("div",{className:"inputRow"},l.a.createElement("button",{style:{marginLeft:"16px"},onClick:k.lisaaMaksaja},"( Lis\xe4\xe4 maksaja + )"),l.a.createElement("button",{style:{marginLeft:"16px"},onClick:k.poistaMaksaja},"( Poista maksaja + )"),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Nimi: "),l.a.createElement("input",{type:"text",placeholder:"[................]",value:k.mnimi,onChange:function(e){return k.mnimi=e.target.value},maxLength:"36"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Osoiterivi 1: "),l.a.createElement("input",{type:"text",placeholder:"[................]",value:k.mosr1,onChange:function(e){return k.mosr1=e.target.value},maxLength:"36"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Osoiterivi 2: "),l.a.createElement("input",{type:"text",placeholder:"[................]",value:k.mosr2,onChange:function(e){return k.mosr2=e.target.value},maxLength:"36"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Osoiterivi 3: "),l.a.createElement("input",{type:"text",placeholder:"[................]",value:k.mosr3,onChange:function(e){return k.mosr3=e.target.value},maxLength:"36"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Y-tunnus: "),l.a.createElement("input",{type:"text",placeholder:"[................]",value:k.mytun,onChange:function(e){return k.mytun=e.target.value},maxLength:"36"}))),l.a.createElement("div",{className:"blokki"},l.a.createElement("h3",null,"( Tuotteet )"),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Selite: "),l.a.createElement("input",{type:"text",placeholder:"[................]",value:k.selite,onChange:function(e){return k.selite=e.target.value},maxLength:"228"})),k.tuotteet.map((function(e,t){return l.a.createElement("div",{className:"blokki",key:t},l.a.createElement("h3",null,"( Tuote ",t+1," )"),l.a.createElement("button",{className:"poistaTuote",style:{display:k.tuotteet.length<=1?"none":"inline-block"},onClick:function(e){return k.poistaTuote(t)}},"(X)"),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Selite: "),l.a.createElement("input",{type:"text",placeholder:"[................]",value:k.tuotteet[t].tuote,onChange:function(e){return k.tuotteet[t].tuote=e.target.value},maxLength:"108"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Kappalem\xe4\xe4r\xe4: "),l.a.createElement("input",{type:"number",placeholder:"[................]",value:k.tuotteet[t].kpl,onChange:function(e){return k.tuotteet[t].kpl=e.target.value},maxLength:"5"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Veroton hinta: "),l.a.createElement("input",{type:"number",placeholder:"[................]",value:k.tuotteet[t].veroton,onChange:function(e){return k.tuotteet[t].veroton=e.target.value},maxLength:"10"})),l.a.createElement("div",{className:"inputRow"},l.a.createElement("label",null,"Alv: "),l.a.createElement("div",{className:"suffixed"},l.a.createElement("input",{type:"number",value:k.tuotteet[t].alv,step:"0.5",onChange:function(e){return k.tuotteet[t].alv=e.target.value}}),l.a.createElement("div",{style:{position:"absolute",left:8*k.tuotteet[t].alv.toString().length+2+"px",top:"1px",pointerEvents:"none"}},"%"))))})),l.a.createElement("button",{style:{marginLeft:"16px"},onClick:k.lisaaTuote},"( Lis\xe4\xe4 tuote + )")))}}]),a}(n.Component)),f=Object(c.a)(function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"logotop",value:function(){return k.logo?l.a.createElement("pre",null,"            _____         _____        ________    ________   ____\n -  -- --- <    /___   __<___  \\__  __/__     /\\__/__     /\\_/ __/_ --- -   - -\n         / /   / __/  /    </    /\\<   </   _/ <   </   _/ <      /\\ \\\n      / / /   __   \xaf\\/          <__/   \\     \\ /   \\     \\  \\     \\ \\ \\ \\\n   / / / /____/     /\\____/       /____/     //____/     /\\//     /\\/ / / / /\n   \\ \\ \\ \\   /_____/  \\  \\_______/\\ ___\\____/ \\____\\____/  X_____/  \\ \\ \\\n        \\ \\__X    /\\__/\\/\xaf      /\\_/   >\\   \\ /__     /\\\\ <___  \\__ / /\n       - - --/   / __/_/    \\   \\<  \xaf\xaf\xaf\xaf/\\_<\xaf\xaf </   _/ /\xaf\xaf\xaf </    /\\- -  -\n          / /   __   \xaf\\    //    \\\\     \\  /   \\     \\/          <__\\ \\\n       / / /____/     /\\         //     /\\/____/     /\\____/       /\\> \\ \\\n    \xaf  \\ \\ \\   /_____/  \\_______//_____/  \\   /_____/  \\  \\_______/  \\  > > > -\n          \\ \\__\\     \\  /\\      \\\\     \\  /\\__\\     \\  /\\__\\      \\  / /\n.- -  - - -- ---\\_____\\/--\\______\\\\_____\\/-----\\_____\\/-----\\______\\/--- - -  -.\n"):l.a.createElement("pre",null,".----------------------------------( LASKU )-----------------------------------.")}},{key:"render",value:function(){for(var e=k.tuotteet.map((function(e,t){var a=k.tuotteet[t].tuote,n=k.w(k.tuotteet[t].kpl,5).toString(),i=k.w(k.vero(k.tuotteet[t].veroton,1,0),10),o=k.w(k.tuotteet[t].alv+"%",5),r=k.w(k.vero(k.tuotteet[t].veroton,k.tuotteet[t].kpl,k.tuotteet[t].alv),11);return a.length<=36?l.a.createElement("pre",{key:t},"| ",k.w(k.tuotteet[t].tuote,36)," : ",n,": ",i," : ",o,": ",r,"| |                                      :      :            :      :            |"):a.length>=36&&a.length<=72?l.a.createElement("pre",{key:t},"| ",k.w(k.tuotteet[t].tuote,36)," : ",n,": ",i," : ",o,": ",r,"| | ",k.w(k.tuotteet[t].tuote.slice(36,72),36)," :      :            :      :            | |                                      :      :            :      :            |"):a.length>=72?l.a.createElement("pre",{key:t},"| ",k.w(k.tuotteet[t].tuote,36)," : ",n,": ",i," : ",o,": ",r,"| | ",k.w(k.tuotteet[t].tuote.slice(36,72),36)," :      :            :      :            | | ",k.w(k.tuotteet[t].tuote.slice(72,108),36)," :      :            :      :            | |                                      :      :            :      :            |"):void 0})),t=Number(0),a=0,n=k.tuotteet.length;a<n;a++)t+=Number(k.vero(k.tuotteet[a].veroton,k.tuotteet[a].kpl,k.tuotteet[a].alv));var i=k.w(t.toFixed(2)+" "+k.valu,14),o=_()(k.day).format("DD.MM.YYYY");return l.a.createElement("div",{className:"render"},this.logotop(),l.a.createElement("pre",null,"|                                                                              | | ",k.w(k.nimi,76)," | | Y-tunnus: ",k.w(k.ytun,66)," | |                                                                              | | ",k.w(k.osr1,76)," | | ",k.w(k.osr2,76)," | | ",k.w(k.osr3,76)," | :----------( MAKSAJAN TIEDOT )---------.-----------( LASKUN TIEDOT )-----------: |                                      :                                       | | ",k.w(k.mnimi,36)," :     Laskun pvm: ",k.w(o,21)," | | ",k.w(k.mytun,36)," :    Viitenumero: ",k.w(k.viit,21)," | | ",k.w(k.mosr1,36)," :      Maksuehto: ",k.ma(k.maks,21)," | | ",k.w(k.mosr2,36)," :      Huomautus: ",k.hu(k.huom,21)," | | ",k.w(k.mosr3,36)," : Viiv\xe4styskorko: ",k.vi(k.viiv,21)," | |                                      :                                       | :--------------------------------------\xb7---------------------------------------: |                                                                              |",k.selite.length<=76?l.a.createElement("pre",null,"| ",k.w(k.selite,76)," |"):k.selite.length>=76&&k.selite.length<=152?l.a.createElement("pre",null,"| ",k.w(k.selite,76)," | | ",k.w(k.selite.slice(76,152),76)," |"):k.selite.length>=152?l.a.createElement("pre",null,"| ",k.w(k.selite,76)," | | ",k.w(k.selite.slice(76,152),76)," | | ",k.w(k.selite.slice(152,228),76)," |"):void 0,"|                                                                              | :--------------------------------------.------.------------.------.------------: | kuvaus                               : kpl  : veroton    : alv% : verollinen | :--------------------------------------:------:------------:------:------------:"),e,l.a.createElement("pre",null,":--------------------------------------\xb7------\xb7------------\xb7------\xb7------------: |                                                       Yhteens\xe4 ",i,"| |                                                                              | |                                                                              | :-------------( SAAJA )----------------.------------( TILISIIRTO )-------------: |                                      :                                       | | ",k.w(k.nimi,36)," : Viitenumero: ",k.w(k.viit,24)," | |                                      :                                       | |                                      : Er\xe4p\xe4iv\xe4: ",k.w(k.erap,27)," | | IBAN: ",k.w(k.iban,30)," :                                       | | BIC:  ",k.w(k.bic,30)," : Summa: ",i,"                 | |                                      :                                       | `--------------------------------------\xb7---------------------------------------'"))}}]),a}(n.Component)),y=(a(23),a(14)),w=Object(c.a)(function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).exportPDF=function(){e.lasku.save()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"inputsWrapper"},l.a.createElement("div",{className:"blokki"},l.a.createElement("button",{onClick:this.exportPDF},"( Lataa PDF )")),l.a.createElement(b,null)),l.a.createElement(y.a,{paperSize:"A4",fileName:k.viit+"_"+k.nimi+"_"+k.mnimi+".pdf",title:k.viit+"_"+k.nimi+"_"+k.mnimi+".pdf",subject:k.viit+"_"+k.nimi+"_"+k.mnimi+".pdf",scale:.9,margin:"3mm",ref:function(t){return e.lasku=t}},l.a.createElement("div",{style:{background:"musta"===k.teema||"vihre\xe4"===k.teema?"black":"white"}},l.a.createElement(f,null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d6b3fd13.chunk.js.map