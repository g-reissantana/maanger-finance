import React from "react"
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from "react-native"

import { Header } from "../../components/Header"
import { Balance } from "../../components/Balance"


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

    const renderItemList = ({item}) => {

        return(
            <Text>
                {item.label}
            </Text>
        )
    }

    return (
        <View style={styles.container}>
            <Header name="gabriel reis" />

            <Balance earnings="3.550,00" outlay="2.000,00" />
            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList
                data={list}
                renderItem={renderItemList}
                keyExtractor={(item) => item.id}            
            />

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