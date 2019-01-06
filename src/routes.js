import { createStackNavigator } from 'react-navigation';
import Main from 'pages/main';
import Favorites from 'pages/favorites';

const Routes = createStackNavigator({
  Main: { screen: Main },
  Favorites: { screen: Favorites },
});

export default Routes;
