import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Todoapp from './reducers'
// pages para spa
import Home from './pages/Home'
import Contact from './pages/Contact'
import Location from './pages/Location'
const createStoreWithMiddleware = applyMiddleware()(createStore)
const app = document.getElementById('root')
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Todoapp)}>
    <Router history={hashHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='Contact' name='Contact' component={Contact} ></Route>
        <Route path='Location' name='Location' component={Location} ></Route>
      </Route>
    </Router>
  </Provider>
  , app)
registerServiceWorker()
