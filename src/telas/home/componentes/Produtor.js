import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Estrelas from "../../../componentes/Estrelas";


export default function({nome, imagem, distancia, estrelas}){
    return <View style={estilos.cartao}>
        <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome}/>
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas quantidade={estrelas}/>
                {/* passando o valor de estrela para o parametro quantidade do compoente Estrela*/ }
            </View>
            <Text style={estilos.distancia}>{distancia}</Text>
        </View>
    </View>
}
const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#DCDCDC', 
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        //sombra
        elevation: 4
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    informacoes: {
        flex: 1, //faz o ocupar o resto do espaço
        flexDirection: "row",
        marginVertical: 16,
        marginLeft: 8,
        justifyContent: "space-between",
        marginRight: 16
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold"
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19
    }
});