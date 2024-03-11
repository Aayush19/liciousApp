import { SafeAreaView, StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar  from '../../components/SearchBar';
import  Axios  from 'axios';
import {Card} from 'react-native-paper'
import { COVERS_API, MEDIUM_COVERS_EXTENSION, SEARCH_BOOK_API } from '../../utils/Apis';
import debounce from 'lodash/debounce';
import BookList from '../home/components/BookList';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Define the debounced API call function
  const debouncedSearch = debounce(async (term) => {
    try {
        if (term.length > 3) {
      // Make your API call using the debounced search term
      const url = SEARCH_BOOK_API+term;
      console.log('search url',url)
      const response = await Axios.get(url);
      const data =  response.data.docs;
console.log('response of search',data,response.data.docs)
      // Update the state with the results
      setSearchResults(data);
        }else{
            setSearchResults([]);
        }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, 1000); // Adjust the debounce delay as needed

  // Effect to trigger the debounced API call when the search term changes
  useEffect(() => {
    debouncedSearch(searchTerm);

    // Cleanup the debounce function on component unmount
    return () => debouncedSearch.cancel();
  }, [searchTerm, debouncedSearch]);
   
  const handleSearchChange = (newSearchTerm) => {
    
    setSearchTerm(newSearchTerm);

  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        value={searchTerm}
        setValue={handleSearchChange}
        />
        {searchResults.length>0 && <FlatList
        data={searchResults}
        keyExtractor={(item) => String(item?.cover_i)}
        numColumns={2}
        
        ItemSeparatorComponent={() => {
          return (
            <View style={{ height: 15 }} />
          )
        }}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item,index }) => {return(
            <Card key={item?.cover_i??index} style={{ width: '48%' }}>
            <Card.Cover resizeMethod='resize' resizeMode='stretch' source={{ uri: `${COVERS_API+item?.cover_i??''+MEDIUM_COVERS_EXTENSION}` }} />
            <Card.Title title={item?.title??''} titleNumberOfLines={2}  titleStyle={{fontSize:12,fontWeight:'bold'}} subtitleStyle={{fontSize:10}} subtitle={`by ${item?.author_name[0]??''}`} />
          </Card>
        )}}
      />}
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})