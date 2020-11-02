import React from 'react'

export default class MyClassCmp extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render = function () {
    return <h2>类组件的内容: {this.props.number}</h2>
    }
}