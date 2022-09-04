import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native'

import { Feather } from '@expo/vector-icons'
import { MotiView, MotiText } from 'moti'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 32 : 64

type Props = {
    name: string
}

export const Header = ({ name }: Props) => {

    return (
        <View style={styles.container}>
            <MotiView 
                style={styles.content}
                from={{
                    translateY: -150,
                    opacity: 0
                }}
                animate={{
                    translateY: 0,
                    opacity: 1
                }}
                transition={{
                    type: "timing",
                    duration: 900,
                    delay: 300
                }}
            >

                <MotiText 
                    style={styles.username}
                    from={{
                        translateX: -300
                    }}
                    animate={{
                        translateX: 0
                    }}
                    transition={{
                        type: "timing",
                        duration: 800,
                        delay: 200
                    }}
                >
                    {name}
                </MotiText>

                <TouchableOpacity style={styles.btnUser} activeOpacity={0.7}>
                    <Feather
                        name="user"
                        size={28}
                        color="#fff"
                    />
                </TouchableOpacity>
                
            </MotiView>
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