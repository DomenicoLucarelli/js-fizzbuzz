/* 
-creo una variabile in cui recupero l'elemento container dall'html
-creo un ciclo for che parte da 0 e arriva a 99 quindi fa 100 cicli {
 -ogni volta che il ciclo si ripete mi crea un nuovo nodo
 -ogni volta il nodo lo appende nel container 
 -ogni volta il suo innerhtml( che è i) aumenterà del valore che ha i

 SE i è divisibile per 3 e non per 5 allor stampa fizz
 ALTRIMENTI SE i è divisibile per 5 e non per 3 stampa Buzz
 ALTRIMENTI SE i è divisibile per 3 e 5 stampa FizzBuzz
}
*/




let containerEl = document.getElementById("container");


for(i=1; i<101; i++){

    let newDiv = document.createElement("div");
    
    newDiv.innerHTML =  i ;
    
    containerEl.append(newDiv);

    if(  (i % 3 == 0) && (i % 5 != 0 )){

        newDiv.innerHTML = "Fizz"
        
        newDiv.style.backgroundColor = "#d62828"
    
    }else if( (i % 3 != 0) && (i % 5 == 0 ) ){

        newDiv.innerHTML = "Buzz"

        newDiv.style.backgroundColor = "#fcbf49"


    }else if ( (i % 3 == 0) && (i % 5 == 0 ) ){

        newDiv.innerHTML = "FizzBuzz"

        newDiv.style.backgroundColor = "#6a040f"


    }else{

        newDiv.style.backgroundColor = "#f77f00"


    }
    
    
}