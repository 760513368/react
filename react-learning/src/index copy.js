import React from 'react';
import ReactDOM from 'react-dom';
const a = 2;
const b = 3;
const arr = new Array(30);
arr.fill(0);
const lis = arr.map((item, i) => {
  return <li key={i}>{i}</li>;
});
console.log(lis);
const h1 = (
  <div>
      <h1>second cli {a * b}</h1>
      {/* null undefined false true 不显示内容 */}
      <div>{null}</div>
      <div>{undefined}</div>
      <div>{false}</div>
      <div>{true}</div>

      <div>{0}</div>
      <div>null</div>

      {/* 内部不能放置普通对象 */}
      {/* {{a: 1, b: 2}} */}
      {[1,2,3,4,5]}
      {lis}
  </div>
);

ReactDOM.render(
  h1,
  document.getElementById('root')
);


