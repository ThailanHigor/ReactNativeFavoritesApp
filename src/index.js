import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Routes from 'routes';
import 'config/ReactotronConfig';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
