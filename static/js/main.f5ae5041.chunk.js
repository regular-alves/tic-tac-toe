(this["webpackJsonpreact-game"]=this["webpackJsonpreact-game"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var r=s(0),a=s(7),n=s.n(a),i=s(8),c=s(2),u=s(3),l=s(5),o=s(4),h=s(1),d=s.n(h);s(14);var j=function(e){return Object(r.jsx)("span",{className:"square",onClick:e.onClick,children:e.value})},b=(s(15),function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"renderSquare",value:function(e){var t=this;return Object(r.jsx)(j,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"board",children:[Object(r.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(r.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(r.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),s}(d.a.Component)),m=(s(16),function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var r;return Object(c.a)(this,s),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(u.a)(s,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),s=t[t.length-1].squares.slice();this.calculateWinner()||s[e]||(s[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:s}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"calculateWinner",value:function(){for(var e=this.state.history[this.state.stepNumber].squares,t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]],s=0;s<t.length;s++){var r=Object(i.a)(t[s],3),a=r[0],n=r[1],c=r[2];if(e[a]&&e[a]===e[n]&&e[a]===e[c])return e[a]}return null}},{key:"render",value:function(){var e=this,t=this.state.history,s=t[this.state.stepNumber],a=this.calculateWinner(),n=t.map((function(t,s){return Object(r.jsx)("li",{onClick:function(){return e.jumpTo(s)},children:Object(r.jsx)(b,{onClick:!1,squares:t.squares})},s)}));return Object(r.jsxs)("div",{className:"game",children:[Object(r.jsx)("div",{className:"game-board",children:Object(r.jsx)(b,{onClick:function(t){return e.handleClick(t)},squares:s.squares})}),Object(r.jsxs)("div",{className:"game-info",children:[Object(r.jsxs)("div",{className:"game-status",children:[Object(r.jsx)("div",{className:"phrase",children:a?"Winner":"Next player"}),Object(r.jsx)("div",{className:"player",children:a||(this.state.xIsNext?"X":"O")})]}),Object(r.jsx)("ol",{className:"history",children:n})]})]})}}]),s}(d.a.Component));s(17);n.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.f5ae5041.chunk.js.map