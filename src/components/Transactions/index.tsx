import { useState } from "react"

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"

import { MotiView, AnimatePresence, MotiText } from "moti"

export const Transactions = ({ data }: any) => {

    const [showValue, setShowValue] = useState(false)

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.date}>
                {data.date}
            </Text>

            <View style={styles.content}>
                <Text style={styles.label}>
                    {data.label}
                </Text>

                <TouchableOpacity
                    style={styles.handleShowValue}
                    onPress={e => setShowValue(!showValue)}
                >
                    {showValue ? (
                        <AnimatePresence exitBeforeEnter>
                            <MotiText
                                style={data.type === 1 ? styles.earnings : styles.outlay}
                                from={{
                                    translateX: 100
                                }}
                                animate={{
                                    translateX: 0
                                }}
                                transition={{
                                    type: "spring",
                                    
                                }}
                            >
                                {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                            </MotiText>
                        </AnimatePresence>
                    ) : (
                        <AnimatePresence exitBeforeEnter>
                            <MotiView
                                style={styles.skeleton}
                                from={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                transition={{ 
                                    type: "timing" ,
                                    duration: 100
                                }}
                            >
                            </MotiView>
                        </AnimatePresence>
                    )
                    }
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 8,
        paddingBottom: 6,
        borderBottomWidth: .5,
        borderBottomColor: "#DADADA"
    },
    date: {
        fontSize: 16,
        color: "#b4b4b4"
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000ae"
    },
    earnings: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2ecc71",
    },
    outlay: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#e74c3c",
    },
    skeleton: {
        width: 80,
        height: 20,
        borderRadius: 8,
        backgroundColor: "#DADADA",
    },
    handleShowValue: {
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    }
})