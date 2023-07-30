import { useMemo } from 'react';
import { StyleSheet, View, FlatList, } from 'react-native';
import BounceAnimation from './assets/components/BounceAnimation';
import BallAnimation from './assets/components/BallAnimation';
import HeartAnimation from './assets/components/HeartAnimation';
import BoxAnimation from './assets/components/BoxAnimation';
import RainyAnimation from './assets/components/RainyAnimation';
import AnimatedItem from './assets/components/AnimatedItem';

export default function App() {
  const animations = useMemo(() => {
    return [
      {
        item: <BounceAnimation />,
        id: "bounce"
      },
      {
        item: <BallAnimation />,
        id: "ball"
      },
      {
        item: <HeartAnimation />,
        id: "heart",
      },
      {
        item: <BoxAnimation />,
        id: "box"
      },
      {
        item: <RainyAnimation />,
        id: "rain"
      }
    ]

  }, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={animations}
        renderItem={({ item }) => <AnimatedItem children={item.item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#35168A',
    alignItems: 'center',
    padding: 5
  },
});
