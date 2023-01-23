(function(){"use strict";var e={8651:function(e,a,n){var t=n(9242),o=n(3396),s=n(4870);const r={class:"flexbox-column"};function l(e,a){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}var i=n(89);const u={},f=(0,i.Z)(u,[["render",l],["__scopeId","data-v-db257cd6"]]);var p=f,c=n(7139),d={__name:"FlexBlokRow",props:{fW:Boolean},setup(e){const a=e;return(e,n)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,c.C_)(["flexbox-row",{flexWrap:a.fW}])},[(0,o.WI)(e.$slots,"default")],2))}};const _=(0,i.Z)(d,[["__scopeId","data-v-7660f699"]]);var m=_;const v=e=>((0,o.dD)("data-v-b3f6150a"),e=e(),(0,o.Cn)(),e),g=v((()=>(0,o._)("label",{for:"input__file"},[(0,o._)("input",{name:"file",type:"file",id:"input__file",class:"input input__file"}),(0,o._)("span",{class:"input__deception"},"Выберите файл")],-1))),w=[g];var b={__name:"InputFile",props:{mR:Boolean,mT:Boolean},setup(e){const a=e;return(n,t)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,c.C_)(["input",{marginRight20:a.mR,marginTop10:e.mT}])},w,2))}};const h=(0,i.Z)(b,[["__scopeId","data-v-b3f6150a"]]);var y=h,C={__name:"MyButton",props:{red:Boolean,green:Boolean,mT:Boolean,tepeBtn:String},setup(e){const a=e;return(n,t)=>((0,o.wg)(),(0,o.iD)("button",{class:(0,c.C_)({red:a.red,green:e.green,marginTop10:e.mT})},[(0,o.WI)(n.$slots,"default")],2))}};const W=(0,i.Z)(C,[["__scopeId","data-v-0ff4cb95"]]);var D=W;const I=(0,o._)("h2",{class:"avatar-form__title"},"Ваш аватар:",-1),k=["src"];var S={__name:"AvatarBlok",props:{avatar:Object},setup(e){const a=e;return(e,n)=>((0,o.wg)(),(0,o.iD)("form",{onSubmit:n[1]||(n[1]=(0,t.iM)((()=>{}),["prevent"])),class:"avatar-form"},[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[I,(0,o.Wm)(m,{fW:""},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{mR:"",mT:""}),(0,o.Wm)(D,{onClick:n[0]||(n[0]=a=>e.$emit("clearAvatar","")),type:"reset",red:"",mT:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Удалить аватар")])),_:1})])),_:1})])),_:1}),(0,o._)("img",{class:"avatar-form__image",src:a.avatar.avatar?a.avatar.avatar:a.avatar.defaultAvatar},null,8,k)])),_:1})],32))}};const P=S;var x=P;function B(e,a){return(0,o.wg)(),(0,o.iD)("input")}const O={},z=(0,i.Z)(O,[["render",B]]);var T=z;const j=e=>{let a=e.target.value;a=a.replace(/[^\d]/g,"");let n="",t=0;for(let o=0;o<a.length;o++)0===t?n+="+":(1===t||4===t||7===t)&&(n+="-"),n+=a[o],t++;e.target.value=n.slice(0,15)},$={class:"info-form__elem"},q=(0,o._)("label",{class:"info-form__label"},[(0,o.Uk)("ФИО"),(0,o._)("span",null,"*")],-1),A={class:"info-form__data"},F={class:"info-form__elem"},L=(0,o._)("label",{class:"info-form__label"},"Дата рождения",-1),U={class:"info-form__data"},H={class:"info-form__elem"},M=(0,o._)("label",{class:"info-form__label"},[(0,o.Uk)("E-mail"),(0,o._)("span",null,"*")],-1),R={class:"info-form__data"},Z={class:"info-form__elem"},N=(0,o._)("label",{class:"info-form__label"},"Город",-1),E={class:"info-form__data"},K={class:"info-form__elem"},Y=(0,o._)("label",{class:"info-form__label"},"Номер телефона",-1),G={class:"info-form__input"},J=["value"],Q=["value"],V={class:"info-form__data"},X={class:"info-form__elem"},ee=(0,o._)("label",{class:"info-form__label",for:"languages"},"Владение языками",-1),ae=["value"],ne=["value"],te=["value"],oe={class:"info-form__data"};var se={__name:"PersonalInfo",props:{personalInfo:{fullName:String,birthDate:String,email:String,city:String,phone:String,selectedCountryCode:String,selectedLanguages:String,countryCodes:Array,languages:Array}},setup(e){const a=e,n=e=>{const a=e.target,n=new FormData(a);return n},r=e=>e.target.value;return(l,i)=>((0,o.wg)(),(0,o.iD)("form",{onSubmit:i[1]||(i[1]=(0,t.iM)((e=>l.$emit("sendData",n(e))),["prevent"])),class:"info-form"},[(0,o._)("div",$,[q,(0,o.Wm)(T,{class:"info-form__input",name:"name",type:"text",required:""}),(0,o._)("p",A,(0,c.zw)(a.personalInfo.fullName),1)]),(0,o._)("div",F,[L,(0,o.Wm)(T,{placeholder:"дд.мм.гггг",class:"info-form__input",name:"birthDate",type:"date"}),(0,o._)("p",U,(0,c.zw)(e.personalInfo.birthDate),1)]),(0,o._)("div",H,[M,(0,o.Wm)(T,{class:"info-form__input",name:"email",type:"email",required:""}),(0,o._)("p",R,(0,c.zw)(e.personalInfo.email),1)]),(0,o._)("div",Z,[N,(0,o.Wm)(T,{class:"info-form__input",name:"city",type:"text"}),(0,o._)("p",E,(0,c.zw)(e.personalInfo.city),1)]),(0,o._)("div",K,[Y,(0,o._)("div",G,[(0,o._)("select",{class:"bg",onChange:i[0]||(i[0]=e=>l.$emit("sendCountryCode",r(e)))},[(0,o._)("option",{value:e.personalInfo.selectedCountryCode},"+7",8,J),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.personalInfo.countryCodes,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e,value:e},(0,c.zw)(e),9,Q)))),128))],32),(0,o.Wm)(T,{value:e.personalInfo.selectedCountryCode,name:"phone",type:"text",class:"bg",onInput:(0,s.SU)(j),inside:""},null,8,["value","onInput"])]),(0,o._)("p",V,(0,c.zw)(e.personalInfo.phone),1)]),(0,o._)("div",X,[ee,(0,o._)("select",{name:"selectedLanguages",value:e.personalInfo.selectedLanguages,class:"info-form__input",id:"languages"},[(0,o._)("option",{disabled:"",value:e.personalInfo.selectedLanguages}," Выбирете варианты: ",8,ne),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.personalInfo.languages,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e,value:e},(0,c.zw)(e),9,te)))),128))],8,ae),(0,o._)("p",oe,[(0,o._)("span",null,(0,c.zw)(e.personalInfo.selectedLanguages),1)])]),(0,o.Wm)(D,{green:"",class:(0,c.C_)({marginBottom15:!0})},{default:(0,o.w5)((()=>[(0,o.Uk)("Cохранить изменения")])),_:1})],32))}};const re=se;var le=re;const ie={key:0,class:"password-form__absent"},ue=(0,o._)("h2",{class:"password-form__title"},"Создать Пароль:",-1),fe={key:1,class:"password-form__present"},pe=(0,o._)("h2",{class:"password-form__title"},"Поменять Пароль:",-1);var ce={__name:"PasswordBlok",props:{password:String},setup(e){const a=e,n=(0,s.iH)(""),r=e=>{const t=e.target,o=new FormData(t),s=o.get("newPassword");if(!a.password)if(s.length<8)n.value="Пароль должен быть минимум 8 символов";else if(/\d/.test(s)){if(/[!@#$%^&*]/.test(s))return n.value="",s;n.value="Пароль должен содержать как минимум 1 спец символ"}else n.value="Пароль должен содержать как минимум 1 цифру";const r=o.get("oldPass"),l=o.get("newPasswordFirst"),i=o.get("newPasswordSecond");if(a.password)return r!==a.password?(n.value="Вы ввели не правильный пароль",a.password):l.length<8?(n.value="Новый пароль должен быть минимум 8 символов",a.password):/\d/.test(l)?/[!@#$%^&*]/.test(l)?l!==i?(n.value="Ваши пароли не совпадают",a.password):(n.value="",l):(n.value="Новый пароль должен содержать как минимум 1 спец символ",a.password):(n.value="Новый пароль должен содержать как минимум 1 цифру",a.password)};return(s,l)=>((0,o.wg)(),(0,o.iD)("form",{onSubmit:l[0]||(l[0]=(0,t.iM)((e=>s.$emit("sendPass",r(e))),["prevent"])),class:"password-form"},[a.password?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ie,[ue,(0,o._)("p",null,(0,c.zw)(n.value),1),(0,o.Wm)(T,{type:"password",name:"newPassword",class:"password-form__input bg",required:""}),(0,o.Wm)(D,{green:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Cохранить изменения")])),_:1})])),e.password?((0,o.wg)(),(0,o.iD)("div",fe,[pe,(0,o._)("p",null,(0,c.zw)(n.value),1),(0,o.Wm)(T,{type:"password",name:"oldPass",placeholder:"Cтарый пароль",class:"password-form__input bg",required:""}),(0,o.Wm)(T,{type:"password",name:"newPasswordFirst",placeholder:"Новый пароль",class:"password-form__input bg",required:""}),(0,o.Wm)(T,{type:"password",name:"newPasswordSecond",placeholder:"Повторите новый пароль",class:"password-form__input bg",required:""}),(0,o.Wm)(D,{green:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Cохранить изменения")])),_:1})])):(0,o.kq)("",!0)],32))}};const de=ce;var _e=de;const me={class:"wrapper"};var ve={__name:"App",setup(e){const a=(0,s.iH)({avatar:"https://klike.net/uploads/posts/2020-06/1593063514_1.jpg",defaultAvatar:"https://hornews.com/upload/images/blank-avatar.jpg"}),n=(0,s.iH)({fullName:"",birthDate:"",email:"",city:"",phone:"",selectedCountryCode:"+7",countryCodes:["+1","+3"],selectedLanguages:"",languages:["English","French","Spanish"]});let t=(0,s.iH)("");const r=e=>{a.value.avatar=e},l=e=>{n.value.fullName=e.get("name"),n.value.birthDate=e.get("birthDate"),n.value.email=e.get("email"),n.value.city=e.get("city"),n.value.phone=e.get("phone"),n.value.selectedLanguages=e.get("selectedLanguages")},i=e=>{console.log(e),t.value=e},u=e=>{n.value.selectedCountryCode=e};return(e,f)=>((0,o.wg)(),(0,o.iD)("div",me,[(0,o.Wm)(x,{onClearAvatar:r,avatar:a.value},null,8,["avatar"]),(0,o.Wm)(le,{onSendCountryCode:u,onSendData:l,personalInfo:n.value},null,8,["personalInfo"]),(0,o.Wm)(_e,{onSendPass:i,password:(0,s.SU)(t)},null,8,["password"])]))}};const ge=ve;var we=ge;const be=(0,t.ri)(we);be.mount("#app")}},a={};function n(t){var o=a[t];if(void 0!==o)return o.exports;var s=a[t]={exports:{}};return e[t](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(a,t,o,s){if(!t){var r=1/0;for(f=0;f<e.length;f++){t=e[f][0],o=e[f][1],s=e[f][2];for(var l=!0,i=0;i<t.length;i++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](t[i])}))?t.splice(i--,1):(l=!1,s<r&&(r=s));if(l){e.splice(f--,1);var u=o();void 0!==u&&(a=u)}}return a}s=s||0;for(var f=e.length;f>0&&e[f-1][2]>s;f--)e[f]=e[f-1];e[f]=[t,o,s]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var o,s,r=t[0],l=t[1],i=t[2],u=0;if(r.some((function(a){return 0!==e[a]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(i)var f=i(n)}for(a&&a(t);u<r.length;u++)s=r[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(f)},t=self["webpackChunkmy_profile"]=self["webpackChunkmy_profile"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(8651)}));t=n.O(t)})();
//# sourceMappingURL=app.baa0ac89.js.map
