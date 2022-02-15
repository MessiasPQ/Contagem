function contar() {

    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var msg = document.getElementById("mensagem")
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    msg.innerHTML = "Contando: <br>"

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Faltam dados!")
        msg.innerHTML = "Impossivel contar."
    }else{
        if(p <= 0){
             window.alert("Passo inválido! Considerando Passo = 1")
             p = 1
        }
        if(i < f){
            //Contagem crescente
            while(i <= f){
                msg.innerText += ` ${i} \u{1F449}`
                i += p 
            }   
        }else{
             //Contagem regressiva
            while(i >= f){
                msg.innerText += ` ${i} \u{1F449}`
                i -= p
            } 
         }
         msg.innerText += `\u{2705}`
    }
           
}