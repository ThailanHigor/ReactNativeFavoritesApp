import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from 'store/actions/favorites';

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
              <Text style={styles.buttonText}>Adicionar aos favoritos </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity  onPress={ this.navigateToFavorites }>
            <Text style={styles.footerLink}> Meus Favoritos (3) </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(null, mapDispatchToProps )(Main);
