import React from 'react'
import ReactDom from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import reducers from './reducer'
import thunk from 'redux-thunk'
import{Provider} from 'react-redux'
import {BrowserRouter,Route,Link,Switch,Redirect} from 'react-router-dom'
import Auth from "./Auth";
import DashBoard from "./DashBoard";


const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))
console.log(store.getState())
ReactDom.render(
    ( <Provider store ={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Auth}></Route>
                <Route path='/dashboard' component={DashBoard}></Route>
                <Redirect to='/dashboard'></Redirect>
            </Switch>
        </BrowserRouter>

        </Provider>)
        ,document.getElementById('root')
)