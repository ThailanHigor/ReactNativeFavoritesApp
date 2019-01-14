import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Text, TextInput, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from 'store/ducks/favorites';

import styles from './styles';

class Main extends Component {

  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape),
      errorOnAdd: PropTypes.oneOfType([null, PropTypes.string]),
      loading: PropTypes.bool,
    }).isRequired,
  };

  state = {
    repoNameInput: '',
  };

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites');
  };

  addRepository = () => {
    if(!this.state.repoNameInput.length) return;
    this.props.addFavoriteRequest(this.state.repoNameInput);
  }

  render() {
    console.tron.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />

        <View style={styles.content}>
          <Text style={styles.title}>GitMark</Text>
          <Text style={styles.description}>
            Comece adicionando alguns repositórios aos seus favoritos
          </Text>

          <View style={styles.form}>
            { !!this.props.favorites.errorOnAdd && (
              <Text style={styles.error}>{ this.props.favorites.errorOnAdd }</Text>
            )}
            <TextInput
              style={styles.input}
              autoCaptalize="none"
              autoCorrect={false}
              placeholder="usuário/repositório"
              underlineColorAndroid="transparent"
              value={this.state.repoNameInput}
              onChangeText={repoNameInput => this.setState({ repoNameInput})}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={this.addRepository}
              activeOpacity={0.6}
            >
              { this.props.favorites.loading
                ? <ActivityIndicator size="small" color={styles.loading.color} />
                : <Text style={styles.buttonText}>Adicionar aos favoritos </Text>
              }

            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity  onPress={ this.navigateToFavorites }>
            <Text style={styles.footerLink}> Meus Favoritos ({ this.props.favorites.data.length }) </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  // forme melhor de fazer
  // favoritesCount: state.favorites.data.length,
  // error: state.favorites.error.add

  // outra forma
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
