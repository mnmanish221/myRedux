import { createStore, applyMiddleware , compose} from "redux";
import reducer from './rootReducder';
import thunk from 'redux-thunk';

const composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,    
   composerEnhancers(applyMiddleware(thunk))
);

export default store;