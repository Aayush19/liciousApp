//@ts-nocheck
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from "../utils/colors";
import { Dime, ICON_SIZE } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";

function Headers ({title = 'Home',showBack=false,showFav=true,handleFavNav}){
    const navigation = useNavigation();
    const backHandler = ()=>{
        navigation.goBack()
      }
      
    return (
        <View style={styles.container}>
           {showBack && <TouchableRipple style={styles.touchableContainer} onPress={backHandler} hitSlop={{}}>
                <Icon name="keyboard-backspace" size={ICON_SIZE} color={COLORS.black} />
            </TouchableRipple>}
            <View style={{width:Dime().width/1.3,paddingHorizontal:5}}>
                <Text style={{fontWeight:"bold"}}>{title}</Text>
            </View>
           {showFav && <TouchableRipple style={[styles.touchableContainer,{alignSelf:"flex-end"}]} onPress={()=>handleFavNav} hitSlop={{}}>
                <Icon name="heart-outline" size={ICON_SIZE} color={COLORS.primary} />
            </TouchableRipple>}
        </View>
    );
};

export default Headers;
const styles = StyleSheet.create({
    container: {
        height: 50,
        alignItems: 'center',
        flexDirection:"row",
        paddingHorizontal:5,
    },
    touchableContainer:{
        padding:8,
        borderRadius:360,
    }
})