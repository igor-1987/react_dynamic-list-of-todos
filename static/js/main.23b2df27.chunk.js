(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(5),r=c(2),l=c(3),d=c.n(l),o=c(1),i=(c(13),c(14),c(4)),j=c.n(i),u=c(0),b=function(e){var t=e.todos,c=e.selectedTodoId,s=e.setSelectedTodoId,a=e.setIsLoadedUser;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,n=e.title,r=e.completed;return Object(u.jsxs)("tr",{"data-cy":"todo",className:j()({"has-background-info-light":t===c}),children:[Object(u.jsx)("td",{className:"is-vcentered",children:t}),Object(u.jsx)("td",{className:"is-vcentered",children:r&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-danger":!r,"has-text-success":r}),children:n})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(t),void a(!1)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()("far",{"fa-eye":c!==t},{"fa-eye-slash":c===t})})})})})]},t)}))})]})},h=function(e){var t=e.filterType,c=e.setFilterType,s=e.query,a=e.setQuery;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){c(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:" control is-expanded has-icons-left has-icons-right ",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},m=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})});function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x,f=function(e){return O("/users/".concat(e))},p=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=e.isLoadedUser,a=e.setIsLoadedUser,l=Object(o.useState)(null),i=Object(r.a)(l,2),b=i[0],h=i[1],O=t.id,x=t.title,p=t.completed,v=t.userId;return Object(o.useEffect)((function(){var e=function(){var e=Object(n.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(v);case 3:t=e.sent,h(t),a(!0),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error("User not found!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),s?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(O)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(0)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:x}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(u.jsx)("strong",{className:j()({"has-text-success":p},{"has-text-danger":!p}),children:p?"Done":"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(null===b||void 0===b?void 0:b.email),children:null===b||void 0===b?void 0:b.name})]})]})]}):Object(u.jsx)(m,{})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(x||(x={}));var v=function(){var e,t=Object(o.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],l=Object(o.useState)(0),i=Object(r.a)(l,2),j=i[0],f=i[1],v=Object(o.useState)(!1),N=Object(r.a)(v,2),y=N[0],g=N[1],T=Object(o.useState)(!1),k=Object(r.a)(T,2),w=k[0],L=k[1],S=Object(o.useState)(""),E=Object(r.a)(S,2),I=E[0],C=E[1],U=Object(o.useState)(x.ALL),A=Object(r.a)(U,2),_=A[0],P=A[1],B=function(e,t,c){var s=function(e){return e.toLocaleLowerCase()},a=t.filter((function(t){return s(t.title).includes(s(e))}));switch(c){case x.ACTIVE:return a.filter((function(e){return!e.completed}));case x.COMPLETED:return a.filter((function(e){return e.completed}));default:return a}}(I,s,_);return Object(o.useEffect)((function(){var e=function(){var e=Object(n.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("/todos");case 3:t=e.sent,a(t),L(!0),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Error of loading todos!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{query:I,setQuery:C,filterType:_,setFilterType:P})}),Object(u.jsx)("div",{className:"block",children:w?Object(u.jsx)(b,{todos:B,selectedTodoId:j,setSelectedTodoId:f,setIsLoadedUser:g}):Object(u.jsx)(m,{})})]})})}),0!==j&&Object(u.jsx)(p,{selectedTodo:(e=j,s.find((function(t){return t.id===e}))||s[0]),setSelectedTodo:f,isLoadedUser:y,setIsLoadedUser:g})]})};a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.23b2df27.chunk.js.map