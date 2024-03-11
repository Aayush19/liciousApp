import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Card, TouchableRipple } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ICON_SIZE } from "../utils/constants";
import { COLORS } from "../utils/colors";
interface SearchBar {
    value: string,
    setValue(),
    showFav: boolean
}

function SearchBar({ value = 'Home', setValue, showFav = true }: SearchBar) {
    const navigation = useNavigation();
    const backHandler = () => {
        navigation.goBack()
    }
    return (
        <Card contentStyle={{flexDirection:"row"}} style={styles.container}>
            <TouchableRipple style={styles.touchableContainer} onPress={backHandler} hitSlop={{}}>
                <Icon name="keyboard-backspace" size={ICON_SIZE} color={COLORS.black} />
            </TouchableRipple>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder="Search Books Here. . ."
                style={styles.inputContainer}
            />
        </Card>
    );
};

export default SearchBar;
const styles = StyleSheet.create({
    container: {
        height: 50,
        alignSelf:"center",
        justifyContent:"center",
        paddingHorizontal: 5,
        width: "95%",
        marginVertical:10

    },
    inputContainer: {
        padding: 8,
        
        fontSize: 12
    },
    touchableContainer: {
        padding: 8,
        borderRadius: 360,
    }
})