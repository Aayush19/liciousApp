import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';
import { COVERS_API, MEDIUM_COVERS_EXTENSION } from '../../../utils/Apis';
import { useNavigation } from '@react-navigation/native'
const BookList = ({item,index}) => {
    const navigation = useNavigation();
  return (
    <Card onPress={()=>navigation.navigate('Detail',{detail:item})} style={{ width: '48%' }}>
        <Card.Cover resizeMethod='resize' resizeMode='stretch' source={{ uri: `${COVERS_API+item?.cover_id+MEDIUM_COVERS_EXTENSION}` }} />
        <Card.Title title={item.title} titleNumberOfLines={2}  titleStyle={{fontSize:12,fontWeight:'bold'}} subtitleStyle={{fontSize:10}} subtitle={`by ${item?.authors[0]?.name}`} />
      </Card>
  )
}

export default BookList

const styles = StyleSheet.create({})