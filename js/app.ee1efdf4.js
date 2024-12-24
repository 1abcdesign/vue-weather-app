(function(){"use strict";var t={7856:function(t,e,n){var a=n(9242),o=n(3396),i=n(7139);const s={class:"wrapper"},l=(0,o._)("img",{src:"bg.jpg",alt:"Background"},null,-1),r=(0,o._)("div",{id:"header"},[(0,o._)("h1",{style:{background:"url('./bg.jpg')","background-clip":"text","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}," Weather app ")],-1),c=(0,o._)("a",{href:"http://vadim4web.github.io"},"vadim4web",-1);function d(t,e,n,a,d,m){const u=(0,o.up)("DataTable");return(0,o.wg)(),(0,o.iD)("div",s,[l,(0,o._)("header",null,[r,(0,o.Wm)(u)]),(0,o._)("footer",null,[(0,o._)("h3",null,[(0,o.Uk)(" (č) 2022 - "+(0,i.zw)((new Date).getFullYear())+" Vadim (",1),c,(0,o.Uk)(") Chervoniak ")])])])}const m=t=>((0,o.dD)("data-v-4c342213"),t=t(),(0,o.Cn)(),t),u={class:"table"},h={class:"clickable"},y={class:"navigation clickable"},_=m((()=>(0,o._)("b",null," + ",-1))),p=[_],C=m((()=>(0,o._)("td",{class:"hovered"},[(0,o._)("b",null,"City")],-1))),g=m((()=>(0,o._)("td",{class:"hovered"},[(0,o._)("b",null,"Latitude")],-1))),v={class:"hovered"},f={class:"hovered addAble"},b={class:"hovered addAble"},w={class:"hovered addAble"},k=m((()=>(0,o._)("div",null,null,-1)));function x(t,e,n,s,l,r){const c=(0,o.up)("d");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("div",null,[(0,o._)("table",{onContextmenu:e[13]||(e[13]=(0,a.iM)(((...e)=>t.openMenu&&t.openMenu(...e)),["prevent"]))},[(0,o._)("tr",h,[(0,o._)("th",{onClick:e[0]||(e[0]=t=>r.sortList("city")),class:"cities"},"City"),(0,o._)("th",{onClick:e[1]||(e[1]=t=>r.sortList("day_min")),class:"mins"},"MinTemp"),(0,o._)("th",{onClick:e[2]||(e[2]=t=>r.sortList("day_max")),class:"maxs"},"MaxTemp")]),(0,o._)("tr",y,[(0,o._)("td",{onClick:e[3]||(e[3]=t=>r.sortList("city")),class:"city cities chosen"},[(0,o.wy)((0,o._)("span",{class:(0,i.C_)([l.sortedbyASC?"normalVertSpan":"mirrorVertSpan"])},"V",2),[[a.F8,"city"===l.chosenColumn]]),(0,o.Uk)(" by city "),(0,o.wy)((0,o._)("span",{class:(0,i.C_)([l.sortedbyASC?"normalVertSpan":"mirrorVertSpan"])},"V",2),[[a.F8,"city"===l.chosenColumn]])]),(0,o._)("td",{onClick:e[4]||(e[4]=t=>r.sortList("day_min")),class:"day_min mins"},[(0,o.wy)((0,o._)("span",{class:(0,i.C_)([l.sortedbyASC?"normalVertSpan":"mirrorVertSpan"])},"V",2),[[a.F8,"day_min"===l.chosenColumn]]),(0,o.Uk)(" by min "),(0,o.wy)((0,o._)("span",{class:(0,i.C_)([l.sortedbyASC?"normalVertSpan":"mirrorVertSpan"])},"V",2),[[a.F8,"day_min"===l.chosenColumn]])]),(0,o._)("td",{onClick:e[5]||(e[5]=t=>r.sortList("day_max")),class:"day_max maxs"},[(0,o.wy)((0,o._)("span",{class:(0,i.C_)([l.sortedbyASC?"normalVertSpan":"mirrorVertSpan"])},"V",2),[[a.F8,"day_max"===l.chosenColumn]]),(0,o.Uk)(" by max "),(0,o.wy)((0,o._)("span",{class:(0,i.C_)([l.sortedbyASC?"normalVertSpan":"mirrorVertSpan"])},"V",2),[[a.F8,"day_max"===l.chosenColumn]])])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.collected,((t,n)=>((0,o.wg)(),(0,o.iD)("tr",{key:n},[(0,o._)("td",{onDblclick:e[6]||(e[6]=(...t)=>r.removeFromGeo&&r.removeFromGeo(...t)),class:"cities removeAble"},(0,i.zw)(t.city),33),(0,o._)("td",{onDblclick:e[7]||(e[7]=(...t)=>r.removeFromGeo&&r.removeFromGeo(...t)),class:"mins removeAble"},(0,i.zw)(t.day_min),33),(0,o._)("td",{onDblclick:e[8]||(e[8]=(...t)=>r.removeFromGeo&&r.removeFromGeo(...t)),class:"maxs removeAble"},(0,i.zw)(t.day_max),33)])))),128)),(0,o._)("tr",null,[(0,o._)("td",{onClick:e[9]||(e[9]=(...t)=>r.addCity&&r.addCity(...t)),class:"clickable"},p),(0,o._)("td",{onClick:e[10]||(e[10]=(...t)=>r.addCity&&r.addCity(...t)),class:"clickable"},"..."),(0,o._)("td",{onClick:e[11]||(e[11]=(...t)=>r.addCity&&r.addCity(...t)),class:"clickable"},"...")]),(0,o.wy)((0,o._)("tr",null,[C,g,(0,o._)("td",v,[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Longitude")])),_:1})])],512),[[a.F8,l.adding]]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.add,((t,n)=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("tr",{key:n,onClick:e[12]||(e[12]=t=>r.addToGeo(t))},[(0,o._)("td",f,(0,i.zw)(t.city),1),(0,o._)("td",b,(0,i.zw)(t.lat),1),(0,o._)("td",w,(0,i.zw)(t.lon),1)])),[[a.F8,l.adding]]))),128))],32)]),k])}n(7658);var S={geo:[{city:"Kyiv",lat:50.45,lon:30.52},{city:"Berlin",lat:52.52,lon:13.41},{city:"Paris",lat:48.85,lon:2.35},{city:"London",lat:51.51,lon:-.13},{city:"Washington",lat:38.9,lon:-77.04}],add:[{city:"Copenhagen",lat:55.68,lon:12.57},{city:"Oslo",lat:59.91,lon:10.75},{city:"Ottawa",lat:45.41,lon:-75.7},{city:"Tokyo",lat:35.69,lon:139.69}]},A={name:"DataTable",components:{},data(){return{geo:S.geo,add:S.add,collected:[],sortedbyASC:!0,adding:!1,chosenColumn:"city"}},watch:{geo:{deep:!0,handler:function(t){const e="https://api.open-meteo.com/v1/forecast?",n="&timezone=auto&daily=temperature_2m_max,temperature_2m_min";this.collected=[];for(let a in t)fetch(e+`latitude=${t[a].lat}&longitude=${t[a].lon}`+n).then((t=>t.json())).then((e=>{let n={};n.city=t[a].city,n.day_min=Math.min(...e.daily.temperature_2m_min),n.day_max=Math.max(...e.daily.temperature_2m_max),this.collected.push(n)}))}}},mounted(){const t="https://api.open-meteo.com/v1/forecast?",e="&timezone=auto&daily=temperature_2m_max,temperature_2m_min";for(let n in this.geo)fetch(t+`latitude=${this.geo[n].lat}&longitude=${this.geo[n].lon}`+e).then((t=>t.json())).then((t=>{let e={};e.city=this.geo[n].city,e.day_min=Math.min(...t.daily.temperature_2m_min),e.day_max=Math.max(...t.daily.temperature_2m_max),this.collected.push(e)}))},methods:{sortList(t){let e=[];"city"===t&&(this.chosenColumn="city",document.getElementsByClassName("city")[0].classList.add("chosen"),document.getElementsByClassName("day_min")[0].classList.remove("chosen"),document.getElementsByClassName("day_max")[0].classList.remove("chosen")),"day_min"===t&&(this.chosenColumn="day_min",document.getElementsByClassName("day_min")[0].classList.add("chosen"),document.getElementsByClassName("city")[0].classList.remove("chosen"),document.getElementsByClassName("day_max")[0].classList.remove("chosen")),"day_max"===t&&(this.chosenColumn="day_max",document.getElementsByClassName("day_max")[0].classList.add("chosen"),document.getElementsByClassName("city")[0].classList.remove("chosen"),document.getElementsByClassName("day_min")[0].classList.remove("chosen")),this.sortedbyASC?(e=this.collected.sort(((e,n)=>e[t]>n[t]?-1:1)),this.sortedbyASC=!1):(e=this.collected.sort(((e,n)=>e[t]<n[t]?-1:1)),this.sortedbyASC=!0),this.collected=e},addCity(){this.adding=!this.adding},showAdd(){this.adding=!0,setTimeout((()=>{this.adding=!1}),3500)},addToGeo(t){let e=t.target.parentElement.firstElementChild.innerText;for(let n in this.add)this.add[n].city===e&&(this.geo.push(this.add[n]),this.add.splice(n,1));this.addCity(),this.reload()},reload(){this.$forceUpdate()},removeFromGeo(t){let e=t.target.parentElement.firstElementChild.innerText;for(let n in this.geo)this.geo[n].city===e&&(this.add.push(this.geo[n]),this.geo.splice(n,1));this.showAdd(),this.reload()}}},L=n(89);const V=(0,L.Z)(A,[["render",x],["__scopeId","data-v-4c342213"]]);var F=V,D={name:"App",components:{DataTable:F}};const E=(0,L.Z)(D,[["render",d]]);var O=E;(0,a.ri)(O).mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,i){if(!a){var s=1/0;for(d=0;d<t.length;d++){a=t[d][0],o=t[d][1],i=t[d][2];for(var l=!0,r=0;r<a.length;r++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[r])}))?a.splice(r--,1):(l=!1,i<s&&(s=i));if(l){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[a,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,i,s=a[0],l=a[1],r=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(r)var d=r(n)}for(e&&e(a);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(d)},a=self["webpackChunkvue_weather_app"]=self["webpackChunkvue_weather_app"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7856)}));a=n.O(a)})();
//# sourceMappingURL=app.ee1efdf4.js.map