import React, {useState, useEffect} from 'react';
import { Text, TextInput, View, StyleSheet, Button, Image, Alert } from 'react-native';
import GS from "../../styles/global";
import LinearGradient from 'react-native-linear-gradient';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";

let imagePath = require("../img/chatIcon.png");

const Home4 = ({ navigation })=> {

  const [stateColor, setStateColor] = useState({
    count: 0, colorBottom: "#00FFAA", colorTop: "#00D2B7"
  });

  const incrementColor = (color, step) => {
    const intColor = parseInt(color.substr(1), 16);
    let newIntColor;
    if(stateColor.count < 80){
      newIntColor = (intColor + step).toString(16);
    } else {
      newIntColor = (intColor - step).toString(16);
    }
    
    return `#${'0'.repeat(6 - newIntColor.length)}${newIntColor}`;
  };

  useEffect(()=>{
    const interval = setInterval(() => {
      setStateColor({
        count: stateColor.count < 159 ? stateColor.count + 1 : 0,
        colorTop: stateColor.colorTop,
        colorBottom: incrementColor(stateColor.colorBottom, 1),
      });
    }, 50);

    return ()=> clearInterval(interval);
  });


  return(
    <LinearGradient 
      colors={[stateColor.colorTop, stateColor.colorBottom]} 
      style={[Styles.linearGradient, {justifyContent: 'center'}]}
    >
      <View style={Styles.backColor}>
        <Text style={[GS.normalTitle, {margin: RFPercentage(1), marginTop: RFPercentage(3)}]}>
          Muchas mas funcionalidades para ti
        </Text>
        <Text style={[GS.normalText, {margin: RFPercentage(1), marginTop: RFPercentage(3),}]}>
          MyChannel posee muchas otras funciones ideales para administrar tu canal, 
          presiona empezar para descubrirlas
        </Text>
        <View style={{width: RFPercentage(11), alignSelf: 'center', marginTop: RFPercentage(5)}}>
          <Button
            title="Empezar"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Home4;

const Styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 5,
  },
  backColor: {
    justifyContent: 'center', 
    backgroundColor: "#C47DF0", 
    paddingBottom: 30,
    elevation: 10,
    paddingHorizontal: 15
  }
})