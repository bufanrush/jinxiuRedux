import React, { Component } from 'react';
import TodoListUi from './TodoListUi';
import store from './store';
import {changeInputAction , addItemAction ,deleteItemAction,getTodoList,getMyListAction} from './store/actions';

class TodoList extends Component {
constructor(props){
    super(props)
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.storeChange = this.storeChange.bind(this);
    //订阅
    store.subscribe(this.storeChange);
}

    componentDidMount(){
        // const action = getTodoList();
        // store.dispatch(action);

        const action = getMyListAction();
        store.dispatch(action);
    }

    render() { 
        return ( 
            <TodoListUi
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
         );
    }

    storeChange(){
        this.setState(store.getState());
    }

    changeInputValue(e){
        const action = changeInputAction(e.target.value);
        store.dispatch(action);     
    }

    clickBtn(){
        const action = addItemAction();
       store.dispatch(action);
    }

    deleteItem(index){
        const action = deleteItemAction(index);
        store.dispatch(action);
    }

}
 
export default TodoList;