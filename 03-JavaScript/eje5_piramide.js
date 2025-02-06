
const crearPiramide =()=>{
    for (let i = 0; i < 6; i++) {
        let tamano = 11;
        let inicioAsterisco=Math.floor(tamano/2);
        for (let j = 0; j < tamano; j++) {
            let valorindice=j;
            if (valorindice===(inicioAsterisco-i)) {
               for(let k=valorindice;k<= (inicioAsterisco+i);k++){
                document.getElementById("output").innerText += "*";
               }
                

            }else{
                document.getElementById("output").innerText += "#";
            }
            
            
        }
        document.getElementById("output").innerText += "\n";
        console.log(i);
    }

}
    