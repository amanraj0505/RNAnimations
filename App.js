import {useState, useEffect, useRef} from 'react';
import React from 'react';
import {
  Animated,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const App = () => {
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
  const moveball = () => {
    Animated.timing(value, {
      toValue: {
        x: 100,
        y: 100,
      },
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <SafeAreaView>
      <Animated.View style={value.getLayout()}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'red',
          }}></View>
      </Animated.View>
      <TouchableOpacity onPress={moveball}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default App;
