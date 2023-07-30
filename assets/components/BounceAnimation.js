import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function BounceAnimation() {
    const textAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(textAnim, {
                    toValue: 3,
                    duration: 2500,
                    useNativeDriver: true
                }),
                Animated.timing(textAnim, {
                    toValue: 2.5,
                    duration: 200,
                    useNativeDriver: true
                }),
                Animated.delay(300)
            ])
        ).start()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Animation #1</Text>
            <View style={styles.body}>
                <Animated.Text
                    style={[
                        styles.text,
                        {
                            transform: [{ scale: textAnim }]
                        }
                    ]}
                >
                    BOUNCE IN
                </Animated.Text>
            </View>
        </View>
    )
}

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
        height: 250,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#3BB7FE",
        fontSize: 15,
        fontWeight: "bold"
    }
})