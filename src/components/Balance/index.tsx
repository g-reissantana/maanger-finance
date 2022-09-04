import React, { useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native"

type Props = {
    earnings: string,
    outlay: string
}

import { MotiView, MotiText } from 'moti'


export const Balance = ({ earnings, outlay }: Props) => {

    const [showEarnings, setShowEarnings] = useState(false)
    const [showOutlay, setShowOutlay] = useState(false)

    return (
        <MotiView
            style={styles.container}
            from={{
                rotateX: "-120deg",
                opacity: 0
            }}
            animate={{
                rotateX: "0deg",
                opacity: 1
            }}
            transition={{
                type: "timing",
                duration: 900,
                delay: 300
            }}
        >

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <TouchableOpacity
                    onPress={e => setShowEarnings(!showEarnings)}
                    style={styles.handleShowValue}
                >
                    <View style={styles.content}>
                        <Text style={styles.currencySymbol}>R$</Text>

                        {showEarnings ? (
                            <Text style={styles.earnings}>{earnings}</Text>
                        ) : (
                            <View style={styles.skeleton}>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <TouchableOpacity
                    onPress={e => setShowOutlay(!showOutlay)}
                    style={styles.handleShowValue}
                >
                    <View style={styles.content}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        {showOutlay ? (
                            <Text style={styles.outlay}>{outlay}</Text>
                        ) : (
                            <View style={styles.skeleton}>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
            </View>
        </MotiView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: -28,
        flexDirection: "row",
        marginHorizontal: 16,
        paddingHorizontal: 24,
        paddingVertical: 28,
        justifyContent: "space-between",
        borderRadius: 6,
        zIndex: 2,
        backgroundColor: "#FFF",
    },
    item: {
        maxWidth: 120
    },
    itemTitle: {
        fontSize: 26,
        color: "#DADADA",
        marginBottom: 3,
        fontWeight: "bold"

    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        height: "80%",
    },
    currencySymbol: {
        color: "#DADADA",
        marginRight: 6
    },
    earnings: {
        fontSize: 26,
        color: "#2ecc71"
    },
    outlay: {
        fontSize: 26,
        color: "#e74c3c",
    },
    skeleton: {
        width: 100,
        height: 20,
        borderRadius: 8,
        backgroundColor: "#DADADA",
    },
    handleShowValue: {
        height: 30,
        width: 120,
        justifyContent: "center",
    }
})