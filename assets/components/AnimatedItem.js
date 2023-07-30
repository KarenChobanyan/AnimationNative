import { StyleSheet, View } from "react-native";
export default function AnimatedItem({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 300,
        marginTop: 20,
    }
})