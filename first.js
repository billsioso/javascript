let gratis = true;

let entrada = (hora) =>{
    let edad = prompt("Qué edad tenés?");
    
    if (edad < 18){
       alert("no pasas");
    }
    else{
        if(edad >=18 && hora== 2 && gratis == true){
            alert ("que suerte, sos el primero y no pagás, pasas nomás");
            gratis = false;
        }
            
        else if (edad >=18){
            alert("pasas pero pagas");
        }
    }

}

entrada(3);
entrada(2);
entrada(2);