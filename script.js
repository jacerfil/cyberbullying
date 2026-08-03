function resposta(correta){

let resultado = document.getElementById("resultado");

if(correta){

resultado.innerHTML="🎉 Parabéns! Essa é a resposta correta. Nunca devemos compartilhar mensagens ofensivas.";

resultado.style.color="green";

}else{

resultado.innerHTML="❌ Resposta incorreta. Compartilhar ofensas também é cyberbullying.";

resultado.style.color="red";

}

}