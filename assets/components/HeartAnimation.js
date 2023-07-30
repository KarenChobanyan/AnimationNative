import { Animated, StyleSheet, Text, View } from "react-native";
import { useEffect, useRef } from "react";
import Heart from "../static/images/Heart.png"
  export default function HeartAnimation() {
    const heartAnim = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(heartAnim, {
                    toValue: 1.3,
                    duration: 700,
                    useNativeDriver: true,
                }),
                Animated.timing(heartAnim, {
                    toValue: 1,
                    duration: 700,
                    useNativeDriver: true,
                })
            ])
        ).start()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Animation #3</Text>
            <View style={styles.body}>
                <Animated.Image
                    source={Heart}
                    style={[
                        styles.heart,
                        {
                            transform: [{ scale: heartAnim }]
                        }
                    ]}
                ></Animated.Image>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 300,
        alignItems: "center",
        borderBottomColor: "#3BB7FE",
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#FFFF"
    },
    body: {
        width: 250,
        height: 260,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    heart: {
        width: 150,
        height: 150,

    }
})