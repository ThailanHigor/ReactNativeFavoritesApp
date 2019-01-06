import { createStackNavigator } from 'react-navigation';
import Main from 'pages/main';

const Routes = createStackNavigator({
  Main: { screen: Main },
});

export default Routes;
