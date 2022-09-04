import React, { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native"

import { Header } from "../../components/Header"
import { Balance } from "../../components/Balance"
import { Transactions } from "../../components/Transactions"
import { Actions } from "../../components/Actions"

import Modal from "react-native-modal"

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

    const [showModal, setShowModal] = useState(false)

    const renderItemList = ({ item }: any) => {

        return (
            <Transactions data={item} />
        )
    }

    return (
        <View style={styles.container}>
            <Modal isVisible={showModal}>
                <View
                    style={{
                        backgroundColor: "#FFF",
                        height: "50%",
                        borderRadius: 10,
                        alignItems: "center",
                        paddingVertical: 40
                    }}
                >
                    <Text style={{ fontSize: 100, textAlign: "center", color: "#ff1b1b" }}>
                        ⚠
                    </Text>
                    <Text style={{ fontSize: 40, textAlign: "center", marginVertical: 20 }}>
                        Funcionalidade em desenvolvimento
                    </Text>
                    <Text style={{ fontSize: 20, marginBottom: 15 }}>
                        Peço desculpas, logo estará pronta!
                        👋
                    </Text>

                    <TouchableOpacity
                        style={{ width: 100, height: 40, backgroundColor: "#000", justifyContent: "center", alignItems: "center", borderRadius: 4 }}
                        onPress={e => setShowModal(!showModal)}
                    >
                        <Text style={{ fontWeight: "bold", color: "#fff" }}>Fechar</Text>
                    </TouchableOpacity>

                </View>
            </Modal>

            <Header name="gabriel reis" />

            <Balance earnings="4.100,00" outlay="400" />

            <Actions toggleModal={setShowModal} />

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