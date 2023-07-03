(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var a,s=c(8),n=c.n(s),r=c(5),l=c(2),i=c(10),o=c(3),d=c.n(o),j=c(1),u=(c(16),c(17),c(9)),b=c.n(u),h=c(0),O=function(e){var t=e.todos,c=e.errorMessage,a=e.handleClick,s=e.selectTodo;return Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:c?Object(h.jsx)("td",{children:c}):t.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"todo",children:[Object(h.jsx)("td",{className:"is-vcentered",children:e.id}),Object(h.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:b()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(e.id)},children:Object(h.jsx)("span",{className:"icon",children:s&&s.id===e.id?Object(h.jsx)("i",{className:"far fa-eye-slash"}):Object(h.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(a||(a={}));var m=function(e){var t=e.filterChange,c=e.textChange,s=Object(j.useState)(""),n=Object(l.a)(s,2),r=n[0],i=n[1];return Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){t(e.target.value)},children:[Object(h.jsx)("option",{value:a.ALL,children:"All"}),Object(h.jsx)("option",{value:a.ACTIVE,children:"Active"}),Object(h.jsx)("option",{value:a.COMPLETED,children:"Completed"})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:r,onChange:function(e){i(e.target.value),c(e.target.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:r&&Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){i(""),c("")},"aria-label":"delete"})})]})]})},x=(c(19),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})});function f(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var p,v=function(e){return f("/users/".concat(e))},N=function(e){var t=e.todo,c=e.handleClick,a=t.id,s=t.title,n=t.completed,i=t.userId,o=Object(j.useState)(null),u=Object(l.a)(o,2),b=u[0],O=u[1],m=Object(j.useState)("User not found"),f=Object(l.a)(m,2),p=f[0],N=f[1],y=Object(j.useState)(!0),C=Object(l.a)(y,2),g=C[0],E=C[1];return Object(j.useEffect)((function(){var e=function(){var e=Object(r.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(i);case 3:t=e.sent,O(t),E(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0 instanceof Error&&N(e.t0.message),E(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[i]),Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),g?Object(h.jsx)(x,{}):Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(h.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:s}),"User not found"===p&&b?Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[n?Object(h.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(h.jsx)("a",{href:"mailto:".concat(b.email),children:b.name})]}):Object(h.jsx)("p",{children:p})]})]})]})};!function(e){e[e.ALL=0]="ALL",e[e.ACTIVE=1]="ACTIVE",e[e.COMPLETED=2]="COMPLETED"}(p||(p={}));var y=function(){var e=Object(j.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(j.useState)(p.ALL),n=Object(l.a)(s,2),o=n[0],u=n[1],b=Object(j.useState)(""),v=Object(l.a)(b,2),y=v[0],C=v[1],g=Object(j.useState)(!0),E=Object(l.a)(g,2),L=E[0],T=E[1],k=Object(j.useState)(""),A=Object(l.a)(k,2),w=A[0],S=A[1],I=Object(j.useState)(null),M=Object(l.a)(I,2),P=M[0],D=M[1],V=Object(j.useState)(!1),_=Object(l.a)(V,2),B=_[0],q=_[1],J=Object(j.useCallback)(function(e,t){var c;return function(){for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];clearTimeout(c),c=setTimeout((function(){e.apply(void 0,s)}),t)}}(C,1e3),[]);Object(j.useEffect)((function(){var e=function(){var e=Object(r.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("/todos");case 3:t=e.sent,a(t),T(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0 instanceof Error&&S(e.t0.message),T(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var U=function(e,t){var c=t.sortType,a=t.query,s=Object(i.a)(e);return s=s.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())})),c===p.ALL?s:s=s.filter((function(e){switch(c){case p.ACTIVE:return!e.completed;case p.COMPLETED:return e.completed;default:return!0}}))}(c,{sortType:o,query:y});return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(m,{filterChange:function(e){switch(e){case p.ACTIVE:u(p.ACTIVE);break;case p.COMPLETED:u(p.COMPLETED);break;default:u(p.ALL)}},textChange:function(e){J(e)}})}),Object(h.jsxs)("div",{className:"block",children:[L&&Object(h.jsx)(x,{}),Object(h.jsx)(O,{errorMessage:w,todos:U,handleClick:function(e){q(!0);var t=c.find((function(t){return t.id===e}));t&&D(t)},selectTodo:P})]})]})})}),B&&P&&Object(h.jsx)(N,{todo:P,handleClick:function(){q(!1),D(null)}})]})};n.a.render(Object(h.jsx)(y,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.fbc89d3c.chunk.js.map