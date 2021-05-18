(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{62:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var a,c,r,o,i,s=n(0),l=n(11),b=n.n(l),d=n(14),p=n(3),u=n(8),j=n.n(u),x=n(17),h=n(18),f=n(12),O=n(13),m=n(16),g=n(15),v=n(6),C=n(7),y=C.a.label(a||(a=Object(v.a)(["\n\n width:400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: flex-start;\n    border-color: black;\n    padding: 15px;\n    border-radius: 2px;\n    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);\n    margin-top: 50px;\n margin-bottom: 50px;\n\n\n"]))),k=n(1),w=function(t){Object(m.a)(n,t);var e=Object(g.a)(n);function n(){var t;Object(f.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onHandleSubmit=function(e){e.preventDefault(),t.props.checkDublicateName(t.state.name)?alert("".concat(t.state.name," already exist")):(t.props.addContact(t.state),t.setState({name:"",number:""}))},t.onHandleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t}return Object(O.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("form",{onSubmit:this.onHandleSubmit,children:[Object(k.jsxs)(y,{children:["Name",Object(k.jsx)("input",{type:"text",onChange:this.onHandleChange,value:this.state.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(k.jsxs)(y,{children:["Number",Object(k.jsx)("input",{type:"tel",onChange:this.onHandleChange,value:this.state.number,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(k.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),n}(s.Component),A=C.a.div(c||(c=Object(v.a)(["\n\n    width:400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: flex-start;\n    border-color: black;\n    padding: 15px;\n    border-radius: 2px;\n    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);\n    margin-top: 50px;\n\n"]))),D=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(k.jsx)(A,{children:Object(k.jsx)("div",{className:"card",children:Object(k.jsx)("ul",{className:"contactItem",children:e.map((function(t){return Object(k.jsxs)("li",{children:[Object(k.jsx)("p",{children:t.name}),Object(k.jsx)("p",{children:t.number}),Object(k.jsx)("button",{type:"button",onClick:n,id:t.id,children:"Delete"})]},t.id)}))})})})},F=C.a.div(r||(r=Object(v.a)(["\n\nborder: 1px solid black;\npadding:10px;\nh2{\n    color: red ;\n}\n\n"]))),N=function(t){var e=t.title,n=t.children;t.style;return Object(k.jsxs)(F,{children:[Object(k.jsx)("h2",{children:e}),n]})},z=C.a.div(o||(o=Object(v.a)(["\n width:400px;\n\n    justify-content: space-evenly;\n    align-items: flex-start;\n    border-color: black;\n    padding: 15px;\n    border-radius: 2px;\n    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);\n    margin-top: 50px;\n    \n    input {\n    width: 60%;\n  padding: 12px 10px;\n margin-left: 10px;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  border: 1px solid #ccc8c8;\n  transition: .3s border-color;\n\n\n}\n    "]))),H=function(t){var e=t.filter,n=t.setFilter;return Object(k.jsx)(z,{children:Object(k.jsxs)("label",{children:["Filter:",Object(k.jsx)("input",{type:"text",value:e,onChange:n})]})})},S=n(19),J=n.n(S),Z=n(5),q=Object(Z.b)("contacts/addContact"),B=Object(Z.b)("contacts/deleteContact"),I=Object(Z.b)("contacts/getAllContacts"),L=Object(Z.b)("contacts/filterContacts"),M=function(t){Object(m.a)(n,t);var e=Object(g.a)(n);function n(){var t;Object(f.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:{items:[],filter:""}},t.addContact=function(){var e=Object(h.a)(j.a.mark((function e(n){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.post("https://phonebook-d0d0b-default-rtdb.firebaseio.com/contacts.json",n);case 3:a=e.sent,c=a.data,t.props.addContact(Object(x.a)(Object(x.a)({},n),{},{id:c.name})),console.log(c),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),t.onDeleteContact=function(){var e=Object(h.a)(j.a.mark((function e(n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n.target.id,e.next=4,J.a.delete("https://phonebook-d0d0b-default-rtdb.firebaseio.com/contacts/".concat(a,".json"));case 4:t.props.deleteContact(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),t.checkDublicateName=function(e){return t.props.contacts.some((function(t){return t.name===e}))},t.setFilter=function(e){var n=e.target.value;t.props.filterContacts(n)},t.getFilteredClients=function(){return console.log(t.props),t.props.contacts.filter((function(e){return e.name.toLowerCase().includes(t.props.filter.toLowerCase())}))},t}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(j.a.mark((function t(){var e,n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J.a.get("https://phonebook-d0d0b-default-rtdb.firebaseio.com/contacts.json");case 3:e=t.sent,(n=e.data)&&(a=Object.keys(n).map((function(t){return Object(x.a)({id:t},n[t])})),this.props.getAllContacts(a)),console.log(n),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(N,{title:"Phonebook",children:Object(k.jsx)(w,{addContact:this.addContact,checkDublicateName:this.checkDublicateName})}),Object(k.jsx)(N,{title:"Find contact by name",children:Object(k.jsx)(H,{filter:this.props.filter,setFilter:this.setFilter})}),Object(k.jsx)(N,{title:"Contacts",children:Object(k.jsx)(D,Object(p.a)({contacts:this.props.contacts,onDeleteContact:this.onDeleteContact},"contacts",this.getFilteredClients()))})]})}}]),n}(s.Component),E=Object(d.b)((function(t){return{contacts:t.contacts,filter:t.filter}}),(function(t){return{addContact:function(e){t(q(e))},deleteContact:function(e){t(B(e))},getAllContacts:function(e){t(I(e))},filterContacts:function(e){t(L(e))}}}))(M),P=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(E,{})})},$=(n(62),n(4)),G=n(21),K=Object(Z.c)([],(i={},Object(p.a)(i,q,(function(t,e){var n=e.payload;return[].concat(Object(G.a)(t),[n])})),Object(p.a)(i,B,(function(t,e){var n=e.payload;return Object(G.a)(t.filter((function(t){return t.id!==n})))})),Object(p.a)(i,I,(function(t,e){return e.payload})),i)),Q=Object(Z.c)("",Object(p.a)({},L,(function(t,e){return e.payload}))),R=Object($.b)({contacts:K,filter:Q}),T=Object(Z.a)({reducer:R});b.a.render(Object(k.jsx)(d.a,{store:T,children:Object(k.jsx)(P,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.82e84cba.chunk.js.map