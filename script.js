const result = document.getElementById('result');
// result.textContent = 42-5
// console.log(result.textContent)

const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const submitBtn = document.getElementById("submit")
const plusbtn =document.getElementById('plus')  
const minusbtn =document.getElementById('minus')  
const btnX = document.getElementById("times")
const dilen = document.getElementById('dillenya')

let action = "";

plusbtn.onclick = function(){
     action = "+";
}

minusbtn.onclick = function(){
    action = "-";
}

btnX.onclick = function(){
    action = "*"
}

dilen.onclick = function(){
    action = "/"
}


function printResult(resultat){
    if(result < 0 ){
        result.style.color = "red"
    } else{
        result.style.color = "green"
    }

    result.textContent = resultat;
}
submitBtn.addEventListener("click", ()=>{
    if(action == "+"){
        const sum = (Number(input1.value) + Number(input2.value))
        printResult(sum)
       
        
    }else if(action == "-"){
       const sum = (Number(input1.value) - Number(input2.value))
        printResult(sum)
    }else if(action == "*"){
        const sum = (Number(input1.value) * Number(input2.value))
        printResult(sum)
    }else if(action == "/"){
        const sum = (Number(input1.value) / Number(input2.value))
        printResult(sum)
    }

    
        
            
    
   

   
});

   
