var result = document.getElementById("result");
result.value = "0";
function getNum(num){
    if(result.value == 0){
        result.value = "";
    }    
    result.value += num;
}
function clearResult(){
    result.value = "0";
}
function getResult(){
    console.log(document.getElementById("result").value);
    result.value = eval(result.value);
}
