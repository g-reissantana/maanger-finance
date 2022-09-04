import React from "react"
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ListRenderItemInfo
} from "react-native"

import { Header } from "../../components/Header"
import { Balance } from "../../components/Balance"
import { Transactions } from "../../components/Transactions"
import { Actions } from "../../components/Actions"

const list: any = [
    {
        id: 1,
        date: '17/08/2022',
        label: "Boleto conta de água",
        type: 0, // outlay
        value: '180'
    },
    {
        id: 2,
        date: '21/08/2022',
        label: "Boleto conta de de luz",
        type: 0, // outlay
        value: '220'
    },
    {
        id: 3,
        date: '22/08/2022',
        label: "Salário",
        type: 1, // earnings
        value: '4.500'
    },
]


export function Home() {

    const renderItemList = ({item}: any) => {

        return(
            <Transactions data={item} />
        )
    }

    return (
        <View style={styles.container}>
            <Header name="gabriel reis" />

            <Balance earnings="4.100,00" outlay="400" />

            <Actions />

            <Text style={styles.title}>Últimas movimentações</Text>
            <FlatList
                data={list}
                renderItem={renderItemList}
                keyExtractor={(item) => String(item.id)}            
                style={styles.list}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 16
    },
    list: {

    }
})