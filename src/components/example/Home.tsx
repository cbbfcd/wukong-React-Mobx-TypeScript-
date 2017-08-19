import * as React from 'react';
import { inject, observer } from 'mobx-react';
import TopNav from './TopNav';
import AboutWuKong from './AboutWuKong';

@observer
export default class Home extends React.Component<any, any>{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				<TopNav />
        		<AboutWuKong />
			</div>
		);
	}
}