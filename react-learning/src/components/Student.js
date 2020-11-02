import React from 'react'

export default function Student(props) {
    return (
        <li>
            {/* 显示学生的信息 */}
            [name]: {props.name}，
            [email]: {props.email}，
            [sex]: {props.sex === 1 ? '男' : '女'}
        </li>
    )
}
