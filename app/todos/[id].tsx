import { useLocalSearchParams } from "expo-router";
import { Text, View, Pressable, StyleSheet } from "react-native";

export default function EditScreen() {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}