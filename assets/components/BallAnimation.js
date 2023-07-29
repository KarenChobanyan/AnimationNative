import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function BallAnimation() {
    const firstBallTypeStandAnim = useRef(new Animated.Value(0)).current;
    const firstBallTypeFadeAnim = useRef(new Animated.Value(0)).current;
    const secondBallTypeStandAnim = useRef(new Animated.Value(0)).current;
    const secondBallTypeFadeAnim = useRef(new Animated.Value(0)).current;
    const thirdBallTypeStandAnim = useRef(new Animated.Value(0)).current;
    const thirdBallTypeFadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.parallel([
                        Animated.timing(firstBallTypeStandAnim, {
                            toValue: 230,
                            duration: 1000,
                            useNativeDriver: true
                        }),
                        Animated.timing(firstBallTypeFadeAnim, {
                            toValue: 1,
                            duration: 1000,
                            useNativeDriver: true
                        })
                    ]),
                    Animated.delay(300),
                    Animated.timing(firstBallTypeStandAnim, {
                        toValue: 215,
                        duration: 150,
                        useNativeDriver: true,
                    }),
                    Animated.timing(firstBallTypeStandAnim, {
                        toValue: 230,
                        duration: 200,
                        useNativeDriver: true,
                    })

                ]),
                Animated.sequence([
                    Animated.parallel([
                        Animated.timing(secondBallTypeStandAnim, {
                            toValue: 230,
                            duration: 1500,
                            useNativeDriver: true
                        }),
                        Animated.timing(secondBallTypeFadeAnim, {
                            toValue: 1,
                            duration: 1500,
                            useNativeDriver: true
                        })
                    ]),
                    Animated.delay(200),
                    Animated.timing(secondBallTypeStandAnim, {
                        toValue: 215,
                        duration: 150,
                        useNativeDriver: true,
                    }),
                    Animated.timing(secondBallTypeStandAnim, {
                        toValue: 230,
                        duration: 200,
                        useNativeDriver: true,
                    })
                ]),
                Animated.sequence([
                    Animated.parallel([
                        Animated.timing(thirdBallTypeStandAnim, {
                            toValue: 230,
                            duration: 2000,
                            useNativeDriver: true
                        }),
                        Animated.timing(thirdBallTypeFadeAnim, {
                            toValue: 1,
                            duration: 2000,
                            useNativeDriver: true
                        })
                    ]),
                    Animated.timing(thirdBallTypeStandAnim, {
                        toValue: 215,
                        duration: 250,
                        useNativeDriver: true,
                    }),
                    Animated.timing(thirdBallTypeStandAnim, {
                        toValue: 230,
                        duration: 300,
                        useNativeDriver: true,
                    })
                ])
            ])).start()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Animation #2</Text>
            <View style={styles.body}>
                <Animated.View
                    style={[
                        styles.ball,
                        {
                            backgroundColor: "#1E52FD",
                            transform: [{ translateY: firstBallTypeStandAnim }],
                            opacity: firstBallTypeFadeAnim
                        }
                    ]}
                />
                <Animated.View
                    style={[
                        styles.ball,
                        {
                            backgroundColor: "#FD1E26",
                            transform: [{ translateY: secondBallTypeStandAnim }],
                            opacity: secondBallTypeFadeAnim
                        }
                    ]}
                />
                <Animated.View
                    style={[
                        styles.ball,
                        {
                            backgroundColor: "#90F40D",
                            transform: [{ translateY: thirdBallTypeStandAnim }],
                            opacity: thirdBallTypeFadeAnim
                        }
                    ]}
                />
                <Animated.View
                    style={[
                        styles.ball,
                        {
                            backgroundColor: "#FA1BFA",
                            transform: [{ translateY: secondBallTypeStandAnim }],
                            opacity: secondBallTypeFadeAnim
                        }
                    ]}
                />
                <Animated.View
                    style={[
                        styles.ball,
                        {
                            backgroundColor: "#FE8801",
                            transform: [{ translateY: firstBallTypeStandAnim }],
                            opacity: firstBallTypeFadeAnim
                        }
                    ]}
                />
                <Animated.View
                    style={[
                        styles.ball,
                        {
                            backgroundColor: "#03930C",
                            transform: [{ translateY: thirdBallTypeStandAnim }],
                            opacity: thirdBallTypeFadeAnim
                        }
                    ]}
                />
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
        marginTop: 20
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
        justifyContent:"center", 
    },
    ball: {
        width: 25,
        height: 25,
        borderRadius: 50,
        marginRight: 10,
    }
})