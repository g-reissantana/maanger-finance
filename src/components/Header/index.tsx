import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native'

// import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 32 : 64

type Props = {
    name: string
}

export const Header = ({ name }: Props) => {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>

                <TouchableOpacity style={styles.btnUser} activeOpacity={0.7}>
                    {/* <Feather
                        name="user"
                        size={28}
                        color="#fff"
                    /> */}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: statusBarHeight,
        paddingHorizontal: 16,
        paddingBottom: 54,
        backgroundColor: "#8000ff",
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    username: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    btnUser: {
        width: 48,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, .5)",
        borderRadius: 48 / 2,
    }
})