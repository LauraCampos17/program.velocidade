const form = document.querySelector("form")
const resp = document.querySelector("#outResp")
const resp1 = document.querySelector("#ouResp1")

//ouvinte

frm = addEventListener("submit", (e) =>{
    e.preventDefault()

    const ladoA = Number(form.inLadoA.value)
    const ladoB = Number(form.inLadoB.value)
    let ladoC = Number (form.inLadoC.value)

    if((ladoA> ladoB+ladoC) || (ladoB>ladoA+ladoC) || (ladoC>ladoA+ladoB)) {
        alert("Essas medidas não podem formar um triângulo. Um dos lados não pode ser maior que a soma dos outros dois")
        form.inLadoA.focus()
        form.inLadoB.focus()
        form.inLadoC.focus()
        return
        resp.innerText = `Situação: Sem multa`

    } 
        resp.innerText = `Lados podem formar um triângulo`
                                                           //três lados são iguais
    if(ladoA == ladoB && ladoA == ladoC){
        resp.innerText = `Tipo: Equilátero`
    }else if((ladoA == ladoB) || (ladoA)

    } else{
        resp.innerText = `Situação: Multa grave`
    }
})