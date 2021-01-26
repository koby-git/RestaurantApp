import React, { useState, useEffect } from 'react';
import { Text, Image, View, FlatList, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResults] = useState(null);
  const id = navigation.getParam('id');

  const searchByIdApi = async (term) => {
    try {
      const res = await yelp.get(`/${term}`);
      setResults(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchByIdApi(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result ? result.name : 'No results'}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(res) => res.id}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.img} />;
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
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 5,
    textAlign: 'center',
  },
  img: {
    width: 220,
    height: 170,
  },
});
export default ResultsShowScreen;
