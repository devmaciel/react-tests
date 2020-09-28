//store que fica nossos bang pra compartilha, api etc states.
//so bota o provider.

import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;