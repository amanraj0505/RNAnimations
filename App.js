import {useState, useEffect, useRef} from 'react';
import React from 'react';
import {SafeAreaView, useColorScheme, View, Animated} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [translation, setTranslation] = useState();
  const translation2 = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        setTranslation(i);
      }, 25 * i);
    }
  }, []);
  useEffect(() => {
    Animated.timing(translation2, {
      toValue: 50,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'red',
          transform: [{translateX: translation}],
        }}></View>
      <Animated.View
        style={{
          height: 100,
          width: 100,
          marginTop: 10,
          backgroundColor: 'red',
          transform: [{translateX: translation}],
        }}></Animated.View>
    </SafeAreaView>
  );
};
export default App;
