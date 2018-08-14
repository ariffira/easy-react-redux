import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from "./App";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*import { createStore } from 'redux';

const reducerName = (state, action) => {
    switch (action.type) {
        case "ADD_NUMBER":
            state = state + action.payload;
            break;
    }
    return state;
}

const store = createStore(reducerName, 5); // 5 is inititalState here

store.subscribe( () => { // this will show us the result or what we have in store on action call
    console.log('Updated Store Data:', store.getState());
});
// This dispatch will dispatch the action from its type and send payload data to the reducers
// this part i will do from action creators from later
store.dispatch({
    type: "ADD_NUMBER", // type of action to find in reducer
    payload: 95 //this number will send to reducer
});*/
