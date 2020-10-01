import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CourseList(){

    const courses = useSelector(state => state.data);
    const dispatch = useDispatch();

    // function addCourseAction(title){
    //     return { type:'ADD_COURSE', title }
    // }

    function addCourse(){
        //use dispatch
        dispatch({ type: 'ADD_COURSE', title: 'GraphQL' })

        //addcourseaction
        // dispatch(addCourseAction('GraphQL))
    }

    return (
        <>
            <ul>
                {
                    courses.map(course => <li key={course}>{course}</li>)
                }
            </ul>
            <button type="button" onClick={addCourse}>Adicionar Curso</button>
        </>
    );
}