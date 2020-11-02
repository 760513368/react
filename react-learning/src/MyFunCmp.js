import React from 'react'

export default function MyFunCmp(props) {
    console.log(props);
    // 父组件传递过来的数据不可变；
    // props.number = 10;
    return <h1>函数组件的内容:{props.number}</h1>
}