(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(3),s=n.n(r),i=n(4),o=n(5),d=n(6),b=n(11),u=n(10),l=n(0),j=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:t}),n]})},h=["good","neutral","bad"],f=n(7),v=n.n(f),O=function(e){var t=e.feedback,n=e.onLeaveFeedback;return Object(l.jsx)("button",{type:"button",className:v.a.button,"data-feedback":t,onClick:n,children:t})},k=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(l.jsx)(O,{feedback:e,onLeaveFeedback:n},e)}))},x=function(e){var t=e.massage;return Object(l.jsx)("h3",{children:t})},g=n(8),p=n.n(g),F=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(l.jsxs)(l.Fragment,{children:[c>0&&Object(l.jsxs)("ul",{className:p.a.statistics,children:[Object(l.jsxs)("li",{children:["Good: ",t]}),Object(l.jsxs)("li",{children:["Neutral: ",n]}),Object(l.jsxs)("li",{children:["Bad: ",a]}),Object(l.jsxs)("li",{children:["Total: ",c]}),Object(l.jsxs)("li",{children:["Positive Feedback: ",r,"%"]})]}),0===c&&Object(l.jsx)(x,{massage:"No feedback given"})]})},m=n(9),_=n.n(m),P=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var n=t.target.dataset.feedback;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e.countFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositivePercentage=function(){var t=e.state.good,n=e.countFeedback();return n?Math.round(t/n*100):0},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countFeedback(),r=this.countPositivePercentage();return Object(l.jsxs)("div",{className:_.a.container,children:[Object(l.jsx)(j,{title:"Please leave feedback",children:Object(l.jsx)(k,{options:h,onLeaveFeedback:this.handleFeedback})}),Object(l.jsx)(j,{title:"Statistics",children:Object(l.jsx)(F,{good:t,neutral:n,bad:a,total:c,positivePercentage:r})})]})}}]),n}(a.Component);n(17);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={button:"Feedback_button__1E_-H"}},8:function(e,t,n){e.exports={statistics:"Statistics_statistics__2QFok"}},9:function(e,t,n){e.exports={container:"App_container__1MQN3"}}},[[18,1,2]]]);
//# sourceMappingURL=main.01871bca.chunk.js.map