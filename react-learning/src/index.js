import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import src1 from './assets/1.jpg';
import src2 from './assets/2.jpg';
import src3 from './assets/3.jpg';

const srcs = [src1, src2, src3];
let index = 0;
let timer = null;

ReactDOM.render(
  <img src={srcs[0]} alt=''></img>,
  document.getElementById('root')
);

/**
 * 根据index显示图片
 */
function render () {

  ReactDOM.render(
    <img src={srcs[index]} alt=''></img>,
    document.getElementById('root')
  );

}
    
function start () {
    clearInterval(timer);
    timer = setInterval(() => {
    index = (index + 1) % srcs.length;
    render();
  }, 1000);
  console.log(timer);

}
start();


document.getElementById('root').onmouseenter = function () {
  clearInterval(timer);
}
document.getElementById('root').onmouseout = function () {
  start();
}
    

