//rsc - react stateless component
//compartilhamento de estado com connect

import React from 'react';
import { connect } from 'react-redux';

function toggleLesson(module, lesson){
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson,
    };
}

const Sidebar = ({ modules, dispatch }) => {
    return (
        <div>
           <aside>
            { modules.map(module => (
                <div key={module.id}>
                    <strong>{module.title}</strong>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id}>
                                {lesson.title}
                                <button onClick={() => dispatch(toggleLesson(module, lesson))}>Selecionar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            </aside>
        </div>
    );
};

export default connect(state => ({ modules: state.course.modules }))(Sidebar);