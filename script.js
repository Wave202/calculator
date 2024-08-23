const result = document.getElementById('result');
// result.textContent = 42-5
// console.log(result.textContent)

const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const submitBtn = document.getElementById("submit")
const plusbtn =document.getElementById('plus')  
const minusbtn =document.getElementById('minus')  
let action = "";

plusbtn.onclick = function(){
     action = "+";
}

minusbtn.onclick = function(){
    action = "-";
}


function printResult(result){
    if(result < 0 ){
        result.style.color = "red"
    } else{
        result.style.color = "green"
    }

    result.textContent = result;
}
submitBtn.addEventListener("click", ()=>{
    if(action == "+"){
        const summa = Number(input1.value) + Number(input2.value)
        printResult(summa)
       
        
    }else if(action == "-"){
        const summa = Number(input1.value) - Number(input2.value)
        printResult(summa)
    }
        
            
    
   

   
});