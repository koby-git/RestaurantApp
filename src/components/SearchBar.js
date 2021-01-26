import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ searchInput, onChangeSearchInput, searchSubmit }) => {
  return (
    <View style={styles.container}>
      <Entypo
        style={styles.magnifyingGlass}
        name="magnifying-glass"
        size={24}
        color="black"
      />
      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        value={searchInput}
        onChangeText={onChangeSearchInput}
        onEndEditing={searchSubmit}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#61dafb',
    flexDirection: 'row',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
  },
  magnifyingGlass: {
    margin: 5,
  },
});

export default SearchBar;
