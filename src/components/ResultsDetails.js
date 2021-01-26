import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export const ResultsDetails = ({ business }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: business.image_url }} style={styles.img} />
      <Text style={styles.title}>{business.name}</Text>
      <Text style={styles.subTitle}>
        {business.rating} Stars, {business.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  img: {
    width: 220,
    height: 170,
  },
  title: {
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  subTitle: {
    marginHorizontal: 10,
  },
});
