declare var module: {
  hot: any
};
// declare var process: {
//    env: {
//        NODE_ENV: string
//    }
// };
declare var __PROD__: boolean;
declare var __DEV__: boolean;

import * as React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './assets/style/main.scss';
import 'babel-polyfill';
import rootStores from './store';

useStrict(true);
if (__PROD__) {
  console.info('[当前环境]: 生产环境');
}

if (__DEV__) {
  console.info('[当前环境]: 开发环境');
}

const MOUNT_NODE = document.getElementById('app');

const renderApp = (AppComponent) => {
  render(
    <AppContainer>
      <Router history={ createBrowserHistory }>
        <Provider { ...rootStores }>
          <AppComponent />
        </Provider>
      </Router>
    </AppContainer>,
		MOUNT_NODE
	);
};

renderApp(App);

if (module.hot) {
  module.hot.accept(() => renderApp(App));
}
