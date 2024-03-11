import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import debounce from 'lodash.debounce';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Headers from '../../components/Headers';
import SearchBar from '../../components/SearchBar';
import { BOOK_DETAIL_API } from '../../utils/Apis';
import BookList from './components/BookList';
import {Card,Text} from 'react-native-paper'
const Home = () => {
  const [bookData, setBookData] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [allDataFetched, setAllDataFetched] = useState(false);
  
  //for using navigation
  const navigation = useNavigation();
  //Mounting the initial function
  useEffect(() => {
    getBooksData()
  }, [])

  //API call to get the data
  const getBooksData = async () => {
    if (isLoading || allDataFetched) {
      return;
    }
    setIsLoading(true);
    let offset = page == 0 ? page : page * 10
    const url = BOOK_DETAIL_API + offset;
    await Axios.get(url).then((res) => {
      if (page === 1) {
        setBookData(res.data.works);
        // setAllDataFetched(false);
      } else {
        setBookData((prevData) => [...prevData, ...res.data.works]);
      }
      if (res.data.works.length === 0) {
        setAllDataFetched(true);
      }
      setPage((prevPage) => prevPage + 1);
    }).catch((err) => {
      console.log('err', err)
      setBookData([])
    }).finally(() => {
      setIsLoading(false);
    });

  }

  //Empty View
  const renderEmpty = () => {
    return (
      <View>

      </View>
    )
  }
  const renderHeader = () => {
    return (
     <Card style={{padding:10,borderRadius:8,margin:10}} onPress={()=>navigation.navigate('Search')}>
      <Text>Search books here. . .</Text>
     </Card>
    )
  }
  const renderFooter = () => {
    return (
      <View>
        {isLoading ?
          <ActivityIndicator size={'small'} />
          : null}
      </View>
    )
  }
  const renderList = ({ item, index }) => {
    return (
      <BookList
        item={item}
        index={index}
      />
    )
  }
  const handleNextData = debounce(() => {
    getBooksData();
  }, 2000);
  const renderListComponent = () => {
    return (

      <FlatList
        data={bookData ?? []}
        renderItem={renderList}
        numColumns={2}
        ItemSeparatorComponent={() => {
          return (
            <View style={{ height: 15 }} />
          )
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
        keyExtractor={(_, index) => String(index)}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 10 }}
        onEndReached={handleNextData}
        onEndReachedThreshold={0.1}
      />

    )
  }
  const renderLoadingView = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Headers handleFavNav={() => navigation.navigate('Favourities')} />
      {renderHeader()}
      {page === 0 && isLoading ?
        renderLoadingView()
        : renderListComponent()}
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})