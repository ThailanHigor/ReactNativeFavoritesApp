import React, { Component } from 'react';
import { View, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import styles from './styles';
import FavoriteItem from './components/FavoriteItem';

class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus Favoritos',
  };

  static propTypes = {
    favorites: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
    })).isRequired,
  };

  renderList = () => (
    <FlatList
      data={this.props.favorites}
      keyExtractor={item =>String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />  }
    />
  );

  render() {
    return (
      <View style={styles.container} >
        { !this.props.favorites.length
          ? <Text style={styles.empty}>Nenhum favorito adicionado </Text>
          : this.renderList() }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites.data
});

export default connect(mapStateToProps)(Favorites);
