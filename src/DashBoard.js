import React from 'react'
import {Route,Link,Redirect} from 'react-router-dom'
import App from "./App";
import {connect} from 'react-redux'
import {logout} from "./Auth.redux";

function Erying(){
    return <h2>二营</h2>
}
function Qibinglian(){
    return <h2>骑兵连</h2>
}
@connect(state=>state.auth,
    {logout})

class DashBoard extends React.Component{

    render(){
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = ( <div>
            <h2>独立团</h2>
            {this.props.isLogin?<button onClick={this.props.logout}>注销</button>:null }
            <ul>
                <li>
                    <Link to='/dashboard/'>一营</Link>
                </li>
                <li>
                    <Link to='/dashboard/erying'>二营</Link>

                </li>
                <li>
                    <Link to='/dashboard/qibinglian'>骑兵连</Link>
                </li>
            </ul>
            <Route path='/dashboard/' exact component={App}></Route>
            <Route path='/dashboard/erying' component={Erying}></Route>
            <Route path='/dashboard/qibinglian' component={Qibinglian}></Route>
        </div>)
        return this.props.isLogin?app:redirectToLogin
    }
}
export default DashBoard