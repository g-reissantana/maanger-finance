import React from "react"
import {
    Text,
    View,
    StyleSheet,
} from "react-native"

type Props = {
    earnings: string,
    outlay: string
}

export const Balance = ({ earnings, outlay }: Props) => {

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.earnings}>{earnings}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.outlay}>{outlay}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: -24,
        flexDirection: "row",
        marginHorizontal: 16,
        paddingHorizontal: 15,
        paddingVertical: 28,
        justifyContent: "space-between",
        borderRadius: 6,
        zIndex: 99,
        backgroundColor: "#FFF",
    },
    item: {

    },
    itemTitle: {
        fontSize: 24,
        color: "#DADADA",
        marginBottom: 3,
        fontWeight: "bold"

    },
    content: {
        flexDirection: "row",
        alignItems: "center",
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
    }
})