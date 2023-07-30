import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function BoxAnimation() {
    const firstAnim = useRef(new Animated.Value(0.5)).current;
    const secondAnim = useRef(new Animated.Value(0.5)).current;
    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                Animated.timing(firstAnim, {
                    toValue: 1.5,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.delay(3000)
            ]),
            Animated.sequence([
                Animated.timing(secondAnim,{
                    toValue:1.5,
                    duration:2000,
                    useNativeDriver:true
                }),
                Animated.timing(secondAnim,{
                    toValue:1.1,
                    duration:500,
                    useNativeDriver:true
                })
            ])
        ])//parallel
        ).start()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Animation #4</Text>
            <View style={styles.body}>
                <Text style={styles.boxTitle}>Forward</Text>
                <Animated.View
                    style={[
                        styles.animDiv,
                        {
                            transform: [{ scale: firstAnim }],
                            backgroundColor: "#5AC9DF",
                        }
                    ]}>
                    <Text style={styles.firstDivText}>This scales and stays</Text>
                </Animated.View>
                <Text style={styles.boxTitle}>Mormal</Text>
                <Animated.View
                    style={[
                        styles.animDiv,
                        {
                            transform: [{ scale: secondAnim }],
                            backgroundColor: "#FDB03C",
                        }
                    ]}>
                    <Text style={styles.firstDivText}>This scales and goes back</Text>
                </Animated.View>
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
        color: "#FFFF",
    },
    body: {
        width: 250,
        height: 260,
        justifyContent: "center",
        alignItems: "center",
    },
    boxTitle: {
        fontSize: 15,
        color: "#BDBDBD",
        marginTop: 25,

    },
    animDiv: {
        width: 200,
        height: 35,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5AC9DF",
    },
    firstDivText: {
        fontSize: 13,
        color: "#ffff",
    }
})