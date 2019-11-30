import {takeEvery,put} from 'redux-saga/effects';
import {GET_MY_LIST} from './actionTypes';
import {getListAction} from './actions';
import axios from 'axios';

//generator
function* mySaga(){
    yield takeEvery(GET_MY_LIST,getList)
}

function* getList(){
    //这样写问题是页面上显示不出来数据(解决：用genertor的规则改写)
    // axios.get('https://www.easy-mock.com/mock/5de16a3b8f1dc0598860f95b/redux/redux').then((res)=>{
    //         const data = res.data;
    //         const action = getListAction(data);
    //         put(action);
    //     })

    const res = yield axios.get('https://www.easy-mock.com/mock/5de16a3b8f1dc0598860f95b/redux/redux');
    const action = getListAction(res.data);
    yield put(action);
}

export default mySaga;