const LOGIN = 'LOGIN'
const LOGOUT= 'LOGOUT'

export function auth (state={isLogin:false,user:'liyunlong'},action){
    switch (action.type){
        case 'LOGIN':
            return {...state,isLogin:true}
        case 'LOGOUT':
            return {...state,isLogin:false}
        default:
            return state
    }
}

export function login (){
    return {type:LOGIN}
}
export function logout(){
    return {type:LOGOUT}
}