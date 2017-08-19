import * as React from 'react';
import { inject, observer } from 'mobx-react';

@observer
export default class AboutWuKong extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='example-body'>
        <div className='example-title'>
          <h1>WelCome to WuKong(TypeScript)</h1>
          <h3>a more simple react boilerplate</h3>
        </div>
        <div className='example-img' />
      </div>
    );
  }
}
