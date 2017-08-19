import { observable, action, runInAction, autorun, computed, reaction,useStrict } from "mobx";

useStrict(true);


export interface paramType{
	user: string;
	pwd: string;
}

export default class AppState {
	// 声明被观察者
	@observable public isAuthenticated: boolean;
	@observable public user: string;
	
	// 初始化被观察者
	constructor() {
		this.isAuthenticated = false;
		this.user = 'Jack';
	}

	// 登录方法
	@action.bound public login(param: paramType){
		if(param.user === 'admin' && param.pwd === 'admin'){
			this.isAuthenticated = true;
			this.user = param.user;
		}else{
			alert('不是这儿错就是哪儿错')
		}
	}

	// 登出
	@action.bound public logout(): void{
		this.isAuthenticated = false;
		this.user = '';
	}
}
