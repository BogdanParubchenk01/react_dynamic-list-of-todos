(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a,s=c(6),n=c.n(s),r=c(4),l=c(2),i=c(3),o=c.n(i),d=c(1),j=(c(13),c(14),c(7)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.errorMessage,a=e.handleClick,s=e.selectTodo;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:c?Object(b.jsx)("td",{children:c}):t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(e.id)},children:Object(b.jsx)("span",{className:"icon",children:s&&s.id===e.id?Object(b.jsx)("i",{className:"far fa-eye-slash"}):Object(b.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(a||(a={}));var O=function(e){var t=e.filterChange,c=e.textChange,s=Object(d.useState)(""),n=Object(l.a)(s,2),r=n[0],i=n[1];return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){t(e.target.value)},children:[Object(b.jsx)("option",{value:a.ALL,children:"All"}),Object(b.jsx)("option",{value:a.ACTIVE,children:"Active"}),Object(b.jsx)("option",{value:a.COMPLETED,children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:r,onChange:function(e){i(e.target.value),c(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:r&&Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){i(""),c("")},"aria-label":"delete"})})]})]})},m=(c(16),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})});function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var f=function(e){return x("/users/".concat(e))},p=function(e){var t=e.todo,c=e.handleClick,a=t.id,s=t.title,n=t.completed,i=t.userId,j=Object(d.useState)(null),u=Object(l.a)(j,2),h=u[0],O=u[1],x=Object(d.useState)("User not found"),p=Object(l.a)(x,2),v=p[0],N=p[1],y=Object(d.useState)(!0),g=Object(l.a)(y,2),C=g[0],k=g[1];return Object(d.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(i);case 3:t=e.sent,O(t),k(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0 instanceof Error&&N(e.t0.message),k(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[i]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),C?Object(b.jsx)(m,{}):Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:s}),"User not found"===v&&h?Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[n?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(h.email),children:h.name})]}):Object(b.jsx)("p",{children:v})]})]})]})};var v=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(d.useState)(a.ALL),i=Object(l.a)(n,2),j=i[0],u=i[1],f=Object(d.useState)(""),v=Object(l.a)(f,2),N=v[0],y=v[1],g=Object(d.useState)(!0),C=Object(l.a)(g,2),k=C[0],E=C[1],T=Object(d.useState)(""),L=Object(l.a)(T,2),w=L[0],S=L[1],A=Object(d.useState)(null),I=Object(l.a)(A,2),M=I[0],P=I[1],D=Object(d.useState)(!1),V=Object(l.a)(D,2),_=V[0],B=V[1],q=Object(d.useCallback)(function(e,t){var c;return function(){for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];clearTimeout(c),c=setTimeout((function(){e.apply(void 0,s)}),t)}}(y,1e3),[]);Object(d.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/todos");case 3:t=e.sent,s(t),E(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0 instanceof Error&&S(e.t0.message),E(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var J=function(e,t){var c,s=t.sortType,n=t.query;switch(s){case a.ACTIVE:c=e.filter((function(e){return!e.completed}));break;case a.COMPLETED:c=e.filter((function(e){return e.completed}));break;default:c=e}return n?c.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})):c}(c,{sortType:j,query:N});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(O,{filterChange:function(e){switch(e){case a.ACTIVE:u(a.ACTIVE);break;case a.COMPLETED:u(a.COMPLETED);break;default:u(a.ALL)}},textChange:function(e){q(e)}})}),Object(b.jsxs)("div",{className:"block",children:[k&&Object(b.jsx)(m,{}),Object(b.jsx)(h,{errorMessage:w,todos:J,handleClick:function(e){B(!0);var t=c.find((function(t){return t.id===e}));t&&P(t)},selectTodo:M})]})]})})}),_&&M&&Object(b.jsx)(p,{todo:M,handleClick:function(){B(!1),P(null)}})]})};n.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.213d26d8.chunk.js.map