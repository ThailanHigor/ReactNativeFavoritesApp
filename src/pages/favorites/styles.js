import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  empty: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 12,
    marginTop: metrics.basePadding,
  }
});

export default styles;
