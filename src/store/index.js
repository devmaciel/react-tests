//store que fica nossos bang pra compartilha, api etc states.
//so bota o provider.

import { createStore } from 'redux';

const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: "Iniciando com React",
            lessons: [
                { id: 1, title: "Primeira aula" },
                { id: 2, title: "Segunda aula" }
            ],
        },
        {
            id: 2,
            title: "Aprendendo Redux",
            lessons: [
                { id: 3, title: "Terceira aula"},
                { id: 4, title: "Quarta aula"}
            ]
        }
    ]
}

function reducer(state = INITIAL_STATE, action){

    // console.log(state)
    // console.log(action)

    if( action.type === 'TOGGLE_LESSON' ){
        return { 
            ...state, 
            activeLesson: action.lesson, 
            activeModule: action.module
        };
    }

    return state;

}

const store = createStore(reducer);

export default store;