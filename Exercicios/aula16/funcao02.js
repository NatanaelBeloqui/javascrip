function soma(n1=0, n2=0) { // Parâmetros formais
    return n1 + n2
}

console.log(soma(2,5)) // Parâmetros reais
// Se um dos parâmetros não forem preechidos, por padrão fica como undefined e dá erro no final. Para resolver isso, basta colocar os parâmetros formais iguais a zero.