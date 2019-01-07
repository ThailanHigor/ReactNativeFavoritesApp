import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 34,
    height: 34,
  },

  info: {
    marginLeft: metrics.baseMargin,
  },

  title: {
    color: colors.darker,
    fontWeight: 'bold',
  },

  description: {
    color: colors.dark,
    marginTop: 3,
    fontSize: 12,
  },
});

export default styles;
