/*

//Declara a função
function soma(num1, num2){
    console.log(num1+num2)
}

//Chama a função
soma(7 , 3)

*/

//Utilizando função anônima
const formulario = document.getElementById("form-resultado")

const app = document.getElementById("app")
function conta(num1, num2, sinal, funcao) {
    if(sinal == '+') {
       let result = num1 + num2
       funcao(result)
    }
    else if(sinal == '-') {
    let result = num1 - num2
       funcao(result)
    }
    else if(sinal == '*') {
    let result = num1 * num2
       funcao(result)
    }
    else if(sinal == '/') {
    let result = num1 / num2
       funcao(result)
    }
    else {
        let result = "Caractére Inválido, por favor utilize (+ - * ou /)"
        funcao(result)
    }
}

formulario.addEventListener("submit", function(event){
    event.preventDefault()
    const numero1 = parseInt(document.getElementById("numero1").value)
    const numero2 = parseInt(document.getElementById("numero2").value)
    const sinal = document.getElementById("sinal").value

    conta(numero1, numero2, sinal, function(resultado)
{
    app.innerHTML = resultado
})

})

/*
//Arrow function
const multiplica = (num1, num2) => num1 * num2

app.innerHTML = multiplica(numero1, numero2)

})
*/