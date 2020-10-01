import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import CourseList from './components/CourseList';

function App() {
  return (
    <Provide store={store}>
      <CourseList />
    </Provide>
  );
}

export default App;
