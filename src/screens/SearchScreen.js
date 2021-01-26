import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('');
  const [result, searchApi, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return result.filter((res) => {
      return res.price === price;
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        searchInput={searchInput}
        onChangeSearchInput={(newVal) => setSearchInput(newVal)}
        searchSubmit={() => searchApi(searchInput)}
      />
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
