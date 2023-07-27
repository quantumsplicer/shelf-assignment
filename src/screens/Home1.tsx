import {
  Animated,
  Button,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';

export const Home1 = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const screenHeight = useWindowDimensions().height;
  const windowHeight = Dimensions.get('screen').height;
  const release = useRef<boolean>(false);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderGrant: () => {
        pan.addListener(({x, y}) => {
          if (x > -10 && x < 10 && y > -575 && y < -525) {
            release.current = true;
          } else {
            release.current = false;
          }
        });
      },
      onPanResponderRelease: () => {
        release.current
          ? pan.setValue({x: 0, y: -550})
          : pan.setValue({x: 0, y: 0});
        pan.extractOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.toBox}>
          <View style={styles.setContainer}></View>
        </View>
        <Text style={styles.text}>
          Drop the box below into the position above!!
        </Text>
        <View style={{marginTop: 10}}>
          <Button
            onPress={() => {
              if (release) {
                pan.setValue({x: 0, y: 550});
                pan.extractOffset();
              }
            }}
            title="Retry"></Button>
        </View>
        <Animated.View
          style={{
            ...styles.dragContainer,
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          }}
          {...panResponder.panHandlers}>
          <Text style={{color: 'white'}}>Home1</Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  setContainer: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 100,
  },
  toBox: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  dragContainer: {
    height: 50,
    width: 100,
    borderRadius: 10,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  text: {
    marginTop: 10,
  },
});
