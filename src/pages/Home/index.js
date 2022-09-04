import React from "react"
import {
    View,
    Text,
    StyleSheet,
} from "react-native"

const list = [
    {
        id: 1,
        date: '17/08/2022',
        label: "Boleto conta de água",
        type: 0, // outlay
        value: '300'
    },
    {
        id: 2,
        date: '21/08/2022',
        label: "Boleto conta de de luz",
        type: 0, // outlay
        value: '3450'
    },
    {
        id: 3,
        date: '22/08/2022',
        label: "Pix Luiza",
        type: 1, // earnings
        value: '450'
    },
]


export function Home() {

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Últimas movimentações</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 16,
        marginTop: 16
    },
    list: {

    }
})