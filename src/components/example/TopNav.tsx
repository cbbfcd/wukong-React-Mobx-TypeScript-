import * as React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import AppState from '../../store/AppState';

interface propsType{
    appState?: AppState;
}

interface propsState{
    isAuthenticated: boolean;
    user: string;
    login: (user: string, pwd: string) => any;
    logout: () => any;
}

interface inputTrouble{
    username?: HTMLInputElement;
    password?: HTMLInputElement;
}

@inject('appState')
@observer
export default class TopNav extends React.Component<propsType, propsState> {

    inputs: inputTrouble = {};

    constructor(props) {
        super(props);
    }

    public handleLogin(): void{
        let param = {
            user: this.inputs.username.value,
            pwd: this.inputs.password.value
        };

        let { login } = this.props.appState;

        login(param);
    }

    public handleLogOut(){
        this.props.appState.logout();
    }

    render() {
        let { isAuthenticated } = this.props.appState;
        const ifLog = <div className='nav-container'>
                <div className='nav-btn'>
                    <a href='https://github.com/cbbfcd/wukong.git'>Start</a>
                </div>
                <div className='nav-btn'>
                    <a href='https://github.com/cbbfcd/wukong/blob/master/docs/doc.mdown'>Document</a>
                </div>
                <div className='nav-btn'>
                    <a>Example</a>
                </div>
                <div className='nav-btn'>
                    <a onClick={ this.handleLogOut.bind(this) }>Logout</a>
                </div>
            </div>;

        const logNav = <div className='login-center'>
                    <input type='text' ref={a => this.inputs.username = a} placeholder='username...'/>
                    <input type='text' ref={a => this.inputs.password = a} placeholder='password...'/>
                    <a onClick={ this.handleLogin.bind(this) }>Login</a>
                </div>;
        return (
            <div className='example-nav'>
                {
                    isAuthenticated ? ifLog : logNav
                }
            </div>
        );
    }
}
