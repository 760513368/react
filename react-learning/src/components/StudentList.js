import React, { Component } from 'react';
import Student from './Student';

export default class StudentList extends Component {
    
    render() {
        console.log(this.props);
        const s = this.props.students.map(item => <Student {...item} key={item.id}></Student>)
        return (
            <ul>
                {s}
            </ul>
        )
    }
}
