function saludo(edad){
    //let saludo;
    if(edad <= 18){

        let saludo = "que tranza"
    }
    else{
        var saludo = "Bienvenido"
    }
    if(saludo === undefined){
        console.log("No existe esta variable");
    }
    else{
        console.log(saludo);
    }
    
}
saludo(16);