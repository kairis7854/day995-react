import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Login from './contaners/login'
import Admin from './contaners/admin'
import Test from './contaners/test/test.jsx'
import './App.less';

export default class App extends Component{
  render(){
    return(
      <div className='app'>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/test' component={Test}/>
          <Redirect to='/admin/home'/>
        </Switch>
      </div>
    )
  }
}