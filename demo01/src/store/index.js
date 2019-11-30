import { createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';
import creatSageMiddleware from 'redux-saga';
import mySagas from './sagas';

const sageMiddleware = creatSageMiddleware();

//增强函数，createStore里只接收两个参数(thunk配置，官方没有说明)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));

const enhancer = composeEnhancers(applyMiddleware(sageMiddleware));

const store = createStore(reducer,enhancer);

sageMiddleware.run(mySagas);

export default store;