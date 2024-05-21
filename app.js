
function palindrome(){
    var inputvalue = document.getElementById("inputvalue")
    var result = document.getElementById("result")
    var word = ''

    for(var i=inputvalue.value.length -1; i>=0; i--){
        word +=inputvalue.value[i]
    }
    if(word.toLowerCase() === inputvalue.value.toLowerCase()){
        result.style.display = "block"
        result.innerHTML = `Yes '${inputvalue.value}' is Palindrome Character`
        inputvalue.value =''
    }
    else{
        result.style.display = "block"
        result.innerHTML = `No '${inputvalue.value}' is not a Palindrome Character`
        inputvalue.value =''
    }

    
    

}

