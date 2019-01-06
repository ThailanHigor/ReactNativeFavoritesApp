import { createStackNavigator } from 'react-navigation';
import Main from 'pages/main';
import Favorites from 'pages/favorites';
import { colors } from 'styles';

const Routes = createStackNavigator({
  Main: { screen: Main },
  Favorites: { screen: Favorites },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primaryDark,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  },
});

export default Routes;
