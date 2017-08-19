declare var __DEV__: boolean;

import Mock from 'mockjs';

// only use in development env
if(__DEV__){

	// login
	Mock.mock('/login', 'post', function(options){
		// get params
		let param = JSON.parse(options.body)

		if(param){
			return param.user === 'admin' && param.pwd === 'admin' ? {
				success: true,
				user: 'admin',
				message: '登录成功'
			} : {
				success: false,
				message:'请检查输入'
			}
		}

		return {
			success: false,
			message:'登录失败!'
		}
	})
}

export default Mock