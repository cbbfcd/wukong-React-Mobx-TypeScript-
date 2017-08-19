
/**
 * @description: App component
 */

declare var System: {
  import<T> (request: string): Promise<T>;
};

import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import LazyRoute from 'lazy-route';
import DevTools from 'mobx-react-devtools';


@inject('appState')
@observer
export default class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='index-wrapper'>
        {/*<DevTools />*/}
        <Route
          exact
          path = '/'
          render={(props) => <LazyRoute {...props} component={System.import('./example/Home')} />} />
        />
      </div>
    );
  }
}

