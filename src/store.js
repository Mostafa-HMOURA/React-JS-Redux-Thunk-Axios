import { createStore,compose,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import routeReducer from './reducers';

const initialState = {};
const store = createStore(
    routeReducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )  
);

export default store;