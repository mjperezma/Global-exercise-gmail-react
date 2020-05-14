(this["webpackJsonpejercicio-global-gmail"]=this["webpackJsonpejercicio-global-gmail"]||[]).push([[0],{25:function(e,t,a){e.exports=a(37)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),i=a(3),o=a(23),s=a(10),m=a(1);var u=function(e){return l.a.createElement("form",{className:"text-align-right"},l.a.createElement("button",{className:"form__btn",onClick:function(t){t.preventDefault(),e.handleInboxFilter()}},l.a.createElement("span",{className:"fas fa-inbox mr-1"}),"Recibidos"),l.a.createElement("button",{className:"form__btn",onClick:function(t){t.preventDefault(),e.handleDeleteFilter()}},l.a.createElement("span",{className:"fas fa-trash mr-1"}),"Papelera"),l.a.createElement("input",{className:"form__input-text",type:"text",placeholder:"Buscar un correo",value:e.textFilter,onChange:function(t){t.preventDefault();var a={value:t.target.value};e.handleTextFilter(a)}}))};var d=function(e){var t=e.showInbox?"recibidos":"borrados",a=""===e.textFilter?"y sin filtrar.":l.a.createElement("span",null,"y filtrando por ",l.a.createElement("span",{className:"text--bold"},e.textFilter),".");return l.a.createElement("p",{className:"mb-1"},"La usuaria est\xe1 visualizando los emails ",l.a.createElement("span",{className:"text--bold"},t)," ",a)};var f=function(e){return l.a.createElement("header",null,l.a.createElement("div",{className:"col2 mb-1"},l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},l.a.createElement(i.b,{to:"/",className:"text--decoration--none"},l.a.createElement("span",{className:"fas fa-envelope-open-text mr-1"}),"Gmail"))),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(u,{textFilter:e.textFilter,handleInboxFilter:e.handleInboxFilter,handleDeleteFilter:e.handleDeleteFilter,handleTextFilter:e.handleTextFilter})))),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(d,{showInbox:e.showInbox,textFilter:e.textFilter}))))};a(35);var E=function(e){var t=function(t){return l.a.createElement("td",{className:"email--cell"},l.a.createElement(i.b,{className:"email--link text--decoration--none",to:"email/".concat(e.id)},e.from))},a=!0===e.deleted?"text--decoration--through":"",n=!1===e.read?"text--bold":"",r=e.deleted?"fa-trash-restore":"fa-trash";return l.a.createElement("tr",{className:"cursor-pointer ".concat(a," ").concat(n)},t(e.from),t(e.subject),t(e.time),l.a.createElement("td",{className:"text-align-right"},l.a.createElement("button",{className:"form__btn fas ".concat(r),onClick:function(t){t.stopPropagation(),e.handleDeleteEmail(e.id,!e.deleted)}})))};var p=function(e){var t=e.emails.map((function(t){return l.a.createElement(E,{key:t.id,id:t.id,from:t.fromName,subject:t.subject,time:t.date,read:t.read,deleted:t.deleted,handleDeleteEmail:e.handleDeleteEmail})}));return l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,t))},b=a(20),h=a(21),x=a(12),v=a(22),N=a(24),g=function(e){Object(N.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).handleDeleteEmail=n.handleDeleteEmail.bind(Object(x.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.handleReadEmail(this.props.id,!this.props.deleted)}},{key:"handleDeleteEmail",value:function(){this.props.handleDeleteEmail(this.props.id)}},{key:"render",value:function(){var e=this.props.deleted?"fa-trash-restore":"fa-trash";return l.a.createElement("div",null,l.a.createElement("div",{className:"col2 mt-1 pt-1"},l.a.createElement("div",null,l.a.createElement("h2",{className:"title--meidum mb-1"},this.props.subject),l.a.createElement("h3",{className:"title--small"},l.a.createElement("span",{className:"text--bold display-inline-block mr-1"},this.props.fromName),l.a.createElement("span",{className:"text-normal display-inline-block"},"<",this.props.fromEmail,">"))),l.a.createElement("div",{className:"text-align-right"},l.a.createElement(i.b,{className:"fas fa-times-circle form__btn",to:"/"}),l.a.createElement(i.b,{className:"form__btn fas ".concat(e),to:"/",onClick:this.handleDeleteEmail}))),l.a.createElement("p",null,this.props.body),l.a.createElement("div",{className:"mt-1"},l.a.createElement("button",{className:"form__btn"},l.a.createElement("span",{className:"fas fa-reply mr-1"}),"Responder"),l.a.createElement("button",{className:"form__btn"},l.a.createElement("span",{className:"fas fa-reply-all mr-1"}),"Responder a todos"),l.a.createElement("button",{className:"form__btn"},l.a.createElement("span",{className:"fas fa-share mr-1"}),"Reenviar a todos")))}}]),a}(l.a.Component),j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"title--medium pb-1"},"Pol\xedtica de privacidad:"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus voluptates nulla assumenda hic, molestiae at quibusdam repudiandae magnam accusantium sed accusamus amet sunt molestias explicabo natus eum temporibus. Eum."),l.a.createElement(i.b,{to:"/"},l.a.createElement("span",{title:"Volver",className:"btn--close fas fa-times-circle text--decoration--none"})))},F=function(){return l.a.createElement("div",null,l.a.createElement("h4",{className:"title--medium pb-1"},"Cookies:"),l.a.createElement("p",null,"Esta web no usa cookies, pero s\xed que usa un poquito de local storage ;)"),l.a.createElement(i.b,{to:"/"},l.a.createElement("span",{title:"Volver",className:"btn--close fas fa-times-circle text--decoration--none"})))},y=function(){var e=function(e,t){return l.a.createElement(i.b,{className:"nav__link text--decoration--none",to:t},e)};return l.a.createElement("div",{className:"col2"},l.a.createElement("small",{className:"text--primary-light"},e("Pol\xedtica de privacidad","/privacy")," / ",e("Cookies","/cookies"),l.a.createElement(m.a,{path:"/",children:function(t){return!1===t.match.isExact?l.a.createElement(l.a.Fragment,null,"/ ",e("Ir a la home","/")):null}})),l.a.createElement("small",{className:"text--primary-light text-align-right"},"Ejercicio de React / Desarrollado con \u2764 en clases de Adalab"))},_=(a(36),function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/cookies"},l.a.createElement(F,null)),l.a.createElement(m.a,{path:"/privacy"},l.a.createElement(j,null)),l.a.createElement(m.a,null,l.a.createElement(y,null))))}),k=function(e){return e.loading?l.a.createElement("div",{className:"loading mt-1"}):null},D=function(){return fetch("//beta.adalab.es/ejercicios-extra/api/emails/v01.json").then((function(e){return e.json()})).then((function(e){return e.results}))},O=function(e,t){var a=JSON.parse(localStorage.getItem(e));return null===a?t:a},I=function(e,t){localStorage.setItem(e,JSON.stringify(t))},w=function(e,t,a){var n=t.toLowerCase();return e.filter((function(e){return!0===a?!e.deleted:e.deleted})).filter((function(e){return e.fromName.toLowerCase().includes(n)||e.subject.toLowerCase().includes(n)||e.body.toLowerCase().includes(n)}))},C=function(){var e=O("emailFilters",{textFilter:"",showInbox:!0}),t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(e.textFilter),u=Object(s.a)(i,2),d=u[0],E=u[1],b=Object(n.useState)(e.showInbox),h=Object(s.a)(b,2),x=h[0],v=h[1],N=Object(n.useState)(!0),j=Object(s.a)(N,2),F=j[0],y=j[1];Object(n.useEffect)((function(){D().then((function(e){return c(e)})).then((function(){return y(!1)}))}),[]),Object(n.useEffect)((function(){I("emailFilters",{textFilter:d,showInbox:x})}));var C=function(e){return R(e,"read",!0)},S=function(e,t){return R(e,"deleted",t)},R=function(e,t,a){r.find((function(t){return t.id===e}))[t]=a,c(Object(o.a)(r))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{textFilter:d,showInbox:x,handleInboxFilter:function(){return v(!0)},handleDeleteFilter:function(){return v(!1)},handleTextFilter:function(e){return E(e.value)}}),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/email/:emailId",render:function(e){var t=r.find((function(t){return t.id===e.match.params.emailId}));return void 0!==t?l.a.createElement(g,{id:t.id,fromName:t.fromName,fromEmail:t.fromEmail,subject:t.subject,body:t.body,deleted:t.deleted,handleReadEmail:C,handleDeleteEmail:S}):l.a.createElement("p",null,"Email no encontrado")}}),l.a.createElement(m.a,{path:"/"},l.a.createElement(p,{emails:w(r,d,x),handleDeleteEmail:S}))),l.a.createElement(k,{loading:F}),l.a.createElement(_,null))};c.a.render(l.a.createElement(i.a,null,l.a.createElement(C,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.58c0423e.chunk.js.map