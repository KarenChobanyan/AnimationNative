import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Animated, StyleSheet, Text, View,Button, ScrollView } from 'react-native';
import BounceAnimation from './assets/components/BounceAnimation';
import BallAnimation from './assets/components/BallAnimation';
import HeartAnimation from './assets/components/HeartAnimation';
import BoxAnimation from './assets/components/BoxAnimation';
import RainyAnimation from './assets/components/RainyAnimation';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
     <BounceAnimation/>
     <BallAnimation/>
     <HeartAnimation/>
     <BoxAnimation/>
     <RainyAnimation/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#35168A',
    alignItems: 'center',
    padding:5
  },
});
