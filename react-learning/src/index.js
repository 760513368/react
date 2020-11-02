import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from './components/StudentList';
import Modal from './components/Modal';


async function fetchAllStudents () {
    ReactDOM.render(<Modal></Modal>, document.getElementById('root'));

    const res = await fetch("http://open.duyiedu.com/api/student/findAll?appkey=eric_1590670407015")
        .then(resp => {
        return resp.json();
        }).then(resp => {
           return resp.data;
        });

        ReactDOM.render(<div>
            <StudentList students={res} />
        </div>, document.getElementById('root'));
}


fetchAllStudents();