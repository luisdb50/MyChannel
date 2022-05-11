import React, {useState, useEffect} from 'react';
import { 
  Text, 
  TextInput, 
  View, 
  StyleSheet, 
  Button, 
  Image, 
  Alert, 
} from 'react-native';
import GS from "../../styles/global";
import LinearGradient from 'react-native-linear-gradient';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";

let imagePath = require("../../img/addChannelIcon.png");

const Home = ({ navigation })=> {

  const [stateColor, setStateColor] = useState({
    count: 0, colorBottom: "#0000DD", colorTop: "#136FFF"
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
        colorBottom: incrementColor(stateColor.colorBottom, 512),
      });
    }, 50);

    return ()=> clearInterval(interval);
  });


  return(
    <LinearGradient 
      colors={[stateColor.colorTop, stateColor.colorBottom]} 
      style={[Styles.linearGradient,]}
    >
      <View style={{ height: RFPercentage(78), justifyContent: 'space-between' }}>
        <Text style={[GS.normalTitle, {margin: RFPercentage(1), marginTop: RFPercentage(3)}]}>
          Crea un canal adaptado para tus necesidades
        </Text>
        <Image source={imagePath} style={GS.welcomeImage} />
        <Text style={[GS.normalText, {margin: RFPercentage(1), marginTop: RFPercentage(3)}]}>
          MyChannel te permite crear un canal para ti, con una configuracion
          de tu preferencia.
        </Text>
      </View>
      <View style={{width: 120, alignSelf: 'center', marginTop: RFPercentage(10)}}>
        <Button
          title="Siguiente"
          onPress={() => navigation.navigate('Home2')}
        />
      </View>
      
    </LinearGradient>
  );
};

export default Home;

const Styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
})