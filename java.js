function Classificar(){
    let lado1 =document.getElementById("lado1").value 
    let lado2 =document.getElementById("lado2").value 
    let lado3 =document.getElementById("lado3").value 

    if(lado1 == lado2 & lado3 == lado2 & lado1 == lado3){
        alert("Triangulo Equilátero")
    }

    if(lado1 !== lado2 & lado3 !== lado2 & lado1 !== lado3){
        alert("Triangulo Escaleno Isóceles" )
    }

    if(lado1 == lado2 || lado3 == lado2 || lado3 == lado1 || lado3 == lado1){
        alert("Triangulo Isóceles " )
    }

    
}