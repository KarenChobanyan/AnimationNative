import { Animated, Image, StyleSheet, Text, View } from "react-native";
import Heart from "../static/images/Sun.png";
import Cloud from "../static/images/cloud.png";
import { useEffect, useRef } from "react";
export default function RainyAnimation() {
    const sunScaleAnim = useRef(new Animated.Value(1)).current;
    const sunFadeAnim = useRef(new Animated.Value(0)).current;
    const cloudScaleAnim = useRef(new Animated.Value(1)).current;
    const cloudFadeAnim = useRef(new Animated.Value(0)).current;
    const firstRainFadeAnim = useRef(new Animated.Value(0)).current;
    const secondRainFadeAnim = useRef(new Animated.Value(0)).current;
    const thirdRainFadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(sunFadeAnim, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(sunScaleAnim, {
                        toValue: 1.2,
                        duration: 500,
                        useNativeDriver: true,
                    }),

                ]),
                Animated.timing(sunScaleAnim, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.parallel([
                    Animated.timing(cloudFadeAnim, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(cloudScaleAnim, {
                        toValue: 1.2,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.timing(cloudScaleAnim, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(firstRainFadeAnim, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }),
                Animated.timing(secondRainFadeAnim, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }),
                Animated.timing(thirdRainFadeAnim, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }),
                Animated.delay(1000)
            ])
        ).start()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Animation #5</Text>
            <View style={styles.body}>
                <Animated.Image
                    source={Heart}
                    style={[
                        styles.sunImg,
                        {
                            opacity: sunFadeAnim,
                            transform: [{ scale: sunScaleAnim }]
                        }
                    ]}
                />
                <Animated.Image
                    source={Cloud}
                    style={[
                        styles.cloudImg,
                        {
                            opacity: cloudFadeAnim,
                            transform: [{ scale: cloudScaleAnim }]
                        }
                    ]}
                />
                <View style={styles.rainDiv}>
                    <Animated.Text
                        style={[
                            styles.rain,
                            {
                                opacity: firstRainFadeAnim,
                            }
                        ]}>
                        /
                    </Animated.Text>
                    <Animated.Text
                        style={[
                            styles.rain,
                            {
                                opacity: secondRainFadeAnim,
                            }
                        ]}>
                        /
                    </Animated.Text>
                    <Animated.Text
                        style={[
                            styles.rain,
                            {
                                opacity: thirdRainFadeAnim,
                            }
                        ]}
                    >
                        /
                    </Animated.Text>
                </View>
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
        marginTop: 20,
        width: 250,
        height: 250,
        alignItems: "center",
        position: "relative",
    },
    sunImg: {
        width: 100,
        height: 100,
        top: 20,
        position: "absolute",
    },
    cloudImg: {
        width: 200,
        height: 200,
        left: 60,
        bottom: 50,
        position: "absolute",
    },
    rainDiv: {
        width: 120,
        height: 80,
        left: 30,
        flexDirection: "row",
        top: 150,
    },
    rain: {
        fontSize: 40,
        fontWeight: "900",
        color: "#4097D1",
        marginLeft: 10,
    }
})
