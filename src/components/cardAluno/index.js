import React from "react";
import { Image, View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default function CardAlunos({data}) {
    return (
        <TouchableOpacity style={style.Container}>
            <Image style = {style.Imagem} source= {{ uri: data.imagem }}></Image>
            <Text>{data.nome}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    Container: {
        margin: 10,
        width: 150,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffff"
    },

    Imagem: {
        width: 120,
        height: 120
    }
})