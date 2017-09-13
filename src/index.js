import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from "redux";
import reducerObj from "./reducers/reducer";
import {Provider} from "react-redux"; //组件


//redux部分

//创建store，store中包含reducer
const reducer = combineReducers(reducerObj)
const store = createStore(reducer)

//设置监听
const renderPage = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}
renderPage();
store.subscribe(renderPage)


//设置rem
document.documentElement.style.fontSize = document.documentElement.clientWidth/10 + 'px'

registerServiceWorker();



