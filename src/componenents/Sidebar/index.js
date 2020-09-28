//rsc - react stateless component
//compartilhamento de estado com connect

import React from 'react';
import { connect } from 'react-redux';

const Sidebar = ({ modules }) => {
    return (
        <div>
           <aside>
            { modules.map(module => (
                <div key={module.id}>
                    <strong>{module.title}</strong>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id}>{lesson.title}</li>
                        ))}
                    </ul>
                </div>
            ))}
            </aside>
        </div>
    );
};

export default connect(state => ({ modules: state }))(Sidebar);