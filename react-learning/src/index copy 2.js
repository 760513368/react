import React from 'react';
import ReactDOM from 'react-dom';
const imgurl = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=387865052,2523002394&fm=26&gp=0.jpg';
const cls = 'image';
const div = (
  <div>
    <img src={imgurl} className={cls} style={{
      margin: '20px 100px',
      border: '5px dashed',
    }} alt="" />
  </div>
);

ReactDOM.render(
  div,
  document.getElementById('root')
);


