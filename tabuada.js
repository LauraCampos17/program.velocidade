const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//ouvinte
frm.addEventListener("submit", (e) =>{
   e.preventDefault()

   const número = Number (frm.inNumero.value)
   let resposta = ""   //variável do tipo String, para concatenar a resposta
//cria laço de repetição
    for(let i = 1; i <=10; i++){
        resposta = resposta + número + " x " + i + " = " + (número * i) + "\n"
    }
    resp.innerText = resposta  

})