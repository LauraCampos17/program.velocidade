const frm = document.querySelector("form")  //obtém elementos da página
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let numContas = 0 //declara e inicializa contador...
let valTotal = 0 //...e acumulador (variáveis globais)
let resposta = "" //string com resposta a ser exibida

frm.addEventListener("submit", (e) => { //"escuta" evento submit do form
    e.preventDefault()      //evita envio do form

    const descricao = frm.inDescriicao.value    //obtém dados da conta
    const valor = Number(frm.inValor.value)

    numContas++      //adiciona vallores ao contador e acumulador
    valTotal = valTotal + valor

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"

    resp1.innerText = `${resposta}---------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescriicao.value =""     //limpa campos do form
    frm.inValor.value = "" 
    frm.inDescriicao.focus() //posiciona no Campo inDescricao do form
 })