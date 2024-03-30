import React from "react";
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrelas({
    //parametros
    //propriedades das estrelas
    quantidade: quantidadeAntiga,
    editavel = true,
    grande = false, 
}){

    const estilos = estilosFuncao(grande);

    const RenderEstrelas = () =>{
        const listaEstrelas = [];
        for(let i =0; i<5; i++){
            listaEstrelas.push(
                <TouchableOpacity key={i}
                 onPress={() => {}}
                 disabled={!editavel}
                 >
                    
                    <Image style={estilos.estrela} source={estrela}></Image>
                </TouchableOpacity>
               
            )
        }
        return listaEstrelas;
    }
    return <View style={estilos.estrelas}>
        <RenderEstrelas></RenderEstrelas>
    </View>

}

const estilosFuncao =(grande)=> StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12
    },
    estrelas:{
        flexDirection: "row"
    }
    
});