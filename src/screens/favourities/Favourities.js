import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Favourities = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Favourities</Text>
    </SafeAreaView>
  )
}

export default Favourities

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})