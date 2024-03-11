import { SafeAreaView, StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation,useRoute} from '@react-navigation/native'
import Headers from '../../components/Headers';
import  Axios  from 'axios';
import { COVERS_API, LARGE_COVERS_EXTENSION } from '../../utils/Apis';
import { Dime } from '../../utils/constants';
import FastImage from 'react-native-fast-image';
const Detail = () => {

  const [cover,setCover] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(()=>{
    // getCovers();
  },[])
  const {detail} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Headers showBack title={route.params?.detail?.title} />
      <FastImage
        style={{ height:Dime().height/2,width:Dime().width}}
        source={{
            uri: COVERS_API+detail?.cover_id+LARGE_COVERS_EXTENSION,
            priority: FastImage.priority.high,
            cache:'web'
        }}
        resizeMode={FastImage.resizeMode.stretch}
    />
    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})