import React from 'react';
import './App.css';
// , { Component }
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//引入组件
import Home from "./components/Home";
import Find from "./components/Find";
import Order from "./components/Order";
import My from "./components/My";
import Detail from "./components/Detail";


//配置路由
const App = () => (
  <Router>
    <div >
      <Route exact path="/" component={Home}/>
      <Route path="/find" component={Find}/>
      <Route path="/order" component={Order}/>
      <Route path="/my" component={My}/>
      <Route path="/detail/:id" component={Detail}/>
      <ul className="foot">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/find">Find</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/my">My</Link></li>
      </ul>     
    </div>
  </Router>
)


export default App;
