import { useWindowDimensions } from "react-native";

export const Dime = ()=>{
    const {height,width} = useWindowDimensions();
    return {height,width};
}

export const ICON_SIZE = 25;