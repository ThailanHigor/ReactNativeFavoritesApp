import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron
    .configure({ host: '192.168.29.67' })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  tron.clear();
  console.tron = tron;
};
