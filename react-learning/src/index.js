import React from 'react';
import ReactDOM from 'react-dom';
let num = 0;
// react对象内容只读，不可修改，只能重新创建react对象并渲染；
setInterval(function(){
  num++;
  const div = (
    <div>{num}</div>
    );
    console.log(div.props);
    // div.props.children = 2;
    ReactDOM.render(
      div,
      document.getElementById('root')
    );
},1000);

