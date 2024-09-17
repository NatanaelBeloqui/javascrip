function contar() {
    let ini = document.querySelector('input#txti') // Declaração da variável ini
    let fim = document.querySelector('input#txtf') // Declaração da variável fim
    let passo = document.querySelector('input#txtp') // Declaração da variável passo
    let res = document.querySelector('div#res') // Declaração da variável res

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { 
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
       res.innerHTML = 'Contando: '
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
        if(p < 0) {
            alert('Passo inválido!')
            res.innerHTML = 'Preparando a contagem...'
        } else if (p == 0) {
            res.innerHTML = 'Para andar, é necessário que coloque passos acima de 0'
        }
        else if (p>=0 && i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else if (p>=0 && i > f) {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            res.innerHTML = 'Você já está no fim. Não há a necessidade de dar passos.'
            // Define o tempo para a transição (exemplo: 2 segundos)
            setTimeout(() => {
                res.innerHTML += `\u{1F3C1}`; // Exibe o emoji da bandeira após 2 segundos
            }, 2000); // 2000 milissegundos = 2 segundos
        }
        
    }
}