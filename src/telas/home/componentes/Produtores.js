import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, Text} from "react-native";

import { carregaProdutores } from "../../../servicos/carregaDados";
import Produtor from "./Produtor";

export default function Produtores() {
    //useState tem que ser declarado desde o começo da função.
    //A array vai receber o estado e logo após o método que altera esse estado.
    const [titulo, setTitulo] = useState('');
    //criando um novo estado
    const [lista, setLista] = useState([]);

    useEffect(()=>{
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
        console.log(retorno);
    }, []);
    const TopoLista = () =>{
        return <Text style={estilos.titulo}>{titulo}</Text>
    }
    //quando passsamos o array vazio ele(useState) funciona como o componentDidiMount. A função passada como parâmetro será executada assim que o componete for rederizado.
    //utilizando a variável volátil
    return <FlatList data={lista} 
    //vai renderizar cada item da lista
    //pra não criar todos os componentes do card produtores aqui, eles serão criados em outro arquivo(Produtor.js)
    renderItem={({item}) =><Produtor{...item}/>}
    //{...item} está fazendo uma desconsturção, passando cada valor de item como argumento para os parâmetros de Produtor
    keyExtractor={({nome})=>nome}
    ListHeaderComponent={TopoLista}
    />
}
const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 20,
        marginTop: 16,
        fontWeight: 'bold'
    }
})