

function clicar(){
    let input1=document.getElementById("input-1").value;
    let input2=document.getElementById("input-2").value;
    let input3=document.getElementById("input-3").value;
    var resultado = parseInt(input1) /parseInt(input2);
    var res = parseInt (input3)* parseInt (resultado);
     document.getElementById("resultado").innerHTML=
     `voce ira gastar o total de ${resultado.toFixed(0)} litros e ira gastar  R$${res} reais`;

     if(input1=="" || input2=="" || input3==""){
        alert("Preencha todos os campos");
        document.getElementById("resultado").innerHTML="";
        
         }
}

