import React from "react";
import {View, Text, image, Image, StyleSheet } from "react-native";
import logo from '../../../assets/logo.png';
//para carregar os dados apenas quando o componente estiver montado.
import { carregaTopo } from "../../../servicos/carregaDados";

//para ser um componente de classe, a classe precisa herdar de React.component
class Topo extends React.Component{
    state ={
        //objeto state está armazenando objetos que representam estados. Neles usaremos valores default, vazios.
        topo: {
            boasVindas: '',
            legenda: '',
        }
    }
    atualizaTopo(){
        const retorno = carregaTopo();
        //setando o estado topo
        this.setState({topo: retorno});
    }
    //método da classe React.component, esse método é executado assim que o componente for criado
    componentDidMount(){
        //pra chamar o método da classe utilizamos o this.
        this.atualizaTopo();
    }
    render() {
            return <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
        </View>
    }

}
const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    imagem: {
       width: 70,
       height: 28, 
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: 'black',
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
    }
});
export default Topo;