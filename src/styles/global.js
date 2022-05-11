import {StyleSheet} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const GlobalStyles = StyleSheet.create({
    normalTitle: {
        color: "#DCE1EA",
        fontFamily: 'Jost-VariableFont',
        fontSize: RFPercentage(3.2),
        fontWeight: 'bold',
        fontStyle: "italic",
        textShadowColor: "#777",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },
    normalText: {
        color: "#DCE1EA",
        fontFamily: 'Jost-VariableFont',
        fontSize: RFPercentage(2.4),
        textShadowColor: "#777",
        textShadowOffset: {width: 0.5, height: 0.5},
        textShadowRadius: 1,
    },
    fillContentCenter: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeImage: {
        alignSelf: 'center', 
        width: RFPercentage(30), 
        height: RFPercentage(30)
    }
})

export default GlobalStyles;