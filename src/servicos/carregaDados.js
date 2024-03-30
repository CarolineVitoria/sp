import produtores from "../mocks/produtores";
import topo from "../mocks/topo";
//criando um interface onde podemos chamar esses métodos para pegar esses dados. Simulando uma requisição.
export const carregaProdutores = () => {
    return produtores;
}
export const carregaTopo = () => {
    return topo;
}