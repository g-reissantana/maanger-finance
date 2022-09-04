import {
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native"

import { AntDesign } from "@expo/vector-icons"

export const Actions = () => {

    const listIcons = [
        {
            name: "addfolder",
            label: 'Entradas',
        },
        {
            name: 'tagso',
            label: 'Compras',
        },
        {
            name: 'creditcard',
            label: 'Carteira',
        },
        {
            name: 'barcode',
            label: 'Boletos',
        },
        {
            name: 'calendar',
            label: 'Agenda',
        },
        {
            name: 'setting',
            label: 'Conta',
        },
    ]

    return (
        <ScrollView
            style={styles.container}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >

            {listIcons.map((item: any, index: number) => (
                <TouchableOpacity style={styles.actionButton}>
                    <View style={styles.areaButton}>
                        <AntDesign name={item.name} size={26} color="#000" />
                    </View>

                    <Text style={styles.labelButton}>
                        {item.label}
                    </Text>
                </TouchableOpacity>
            ))}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginTop: 18,
        marginBottom: 12,
        paddingHorizontal: 16,
    },
    actionButton: {
        alignItems: "center",
        marginRight: 32
    },
    areaButton: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: "#ecf0f1",
    },
    labelButton: {
        marginTop: 8,
        textAlign: "center",
        fontWeight: "bold"
    },
})