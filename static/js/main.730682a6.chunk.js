(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(8),o=n.n(a),r=(n(13),n(6)),s=n(3),d=n(5),u=n(0);var j=function(t){var e=t.todo,n=t.toggleTask,c=t.removeTask,i=t.editTask;return Object(u.jsxs)("div",{className:"item-todo",children:[Object(u.jsx)("div",{className:e.complete?"item-text strike":"item-text",onClick:function(){return n(e.id)},children:e.task}),Object(u.jsx)("div",{className:"item-delete",onClick:function(){return c(e.id)},children:"X"}),Object(u.jsx)("div",{className:"item-edit",onClick:function(){return i(e)},children:"Edit"})]},e.id)};var l=function(t){var e=t.addTask,n=Object(c.useState)(""),i=Object(d.a)(n,2),a=i[0],o=i[1],r=function(t){t.preventDefault(),e(a),o("")};return Object(u.jsxs)("form",{onSubmit:r,children:[Object(u.jsx)("input",{value:a,type:"text",onChange:function(t){o(t.currentTarget.value)},onKeyDown:function(t){"Enter"===t.key&&r(t)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435..."}),Object(u.jsx)("button",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var b=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],i=e[1],a=function(t){i(Object(s.a)(n.filter((function(e){return e.id!==t}))))},o=function(t){var e=prompt("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",t.task);e&&(t.task=e,i(Object(s.a)(n)))},b=function(t){i(Object(s.a)(n.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{complete:!e.complete}):Object(r.a)({},e)}))))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{children:Object(u.jsxs)("h1",{children:["\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447: ",n.length]})}),Object(u.jsx)(l,{addTask:function(t){if(t){var e={id:Math.random().toString(36).substr(2,9),task:t,complete:!1};i([].concat(Object(s.a)(n),[e]))}}}),n.map((function(t){return Object(u.jsx)(j,{todo:t,toggleTask:b,removeTask:a,editTask:o},t.id)}))]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.730682a6.chunk.js.map