//rsc - react stateless component
//compartilhamento de estado com connect

import React from 'react';
import { connect } from 'react-redux';

import * as CourseActions from '../../store/actions/course';
import { bindActionCreators } from 'redux';

const Sidebar = ({ modules, toggleLesson }) => {
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
                                <button onClick={() => toggleLesson(module, lesson)}>Selecionar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            </aside>
        </div>
    );
};

const mapStateToProps = state => ({
    modules: state.course.modules
});

// Sem BindCreator
// const mapDispatchToProps = dispatch => ({
//     toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
// })

//Com BindCreator, mesmo nome que a action
const mapDispatchToProps = dispatch => 
    bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);