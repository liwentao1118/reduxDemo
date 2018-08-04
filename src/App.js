import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addGun, addGunAsync, removeGun} from './index.redux'



@connect(
    state=>({num:state.counter}),
    {addGun, removeGun, addGunAsync})

class App extends Component {
    render() {
        const num = this.props.num
        const addGun = this.props.addGun
        const removeGun = this.props.removeGun
        const addGunAsync = this.props.addGunAsync
        return (
            <div>
                <h2>现在有机枪{num}把</h2>
                <button onClick={addGun}>申请武器</button>
                <button onClick={removeGun}>上缴武器</button>
                <button onClick={addGunAsync}>拖几天再给</button>
            </div>
        );
    }
}


export default App;
