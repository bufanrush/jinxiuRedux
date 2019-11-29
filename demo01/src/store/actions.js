import {CHANGE_INPUT , ADD_ITEM , DELETE_ITEM , GET_LIST}  from './actionTypes';
import axios from 'axios';

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data)=>({
    type:GET_LIST,
    data
})

export const getTodoList = ()=>{
    return ()=>{
        axios.get('https://www.easy-mock.com/mock/5de16a3b8f1dc0598860f95b/redux/redux').then((res)=>{
            const data = res.data;
            console.log(data);
            
            // const action = getListAction(data);
            // store.dispatch(action);
        })
    }
}