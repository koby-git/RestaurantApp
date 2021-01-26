import React from 'react';
import { withNavigation } from 'react-navigation';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ResultsDetails } from './ResultsDetails';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(res) => res.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('ResultsShowScreen', {
                  id: item.id,
                });
              }}
            >
              <ResultsDetails business={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 7,
    borderBottomWidth: 0.2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default withNavigation(ResultsList);
