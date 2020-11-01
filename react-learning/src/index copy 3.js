import React from 'react';
import ReactDOM from 'react-dom';
// 在JSX中嵌入表达式，元素标签的显示
const content = '<h1>salf</h1><p>alsdflajkfjaznf;o</p>';
const div = (
  <div dangerouslySetInnerHTML = {
    {
      __html: content,
    }
  }></div>
);

ReactDOM.render(
  div,
  document.getElementById('root')
);


