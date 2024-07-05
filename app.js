
// let btn = document.querySelectorAll(".num");
let btn = document.querySelectorAll(".num");
let input = document.getElementById('calDisplay');
let equal = document.getElementById("equalTo");
// console.log(btn)
btn.forEach(el =>{
    el.addEventListener("click", function(){
        input.value += el.textContent;
        console.log(el.textContent);
    })
})
function clearCalc(){
    input.value = "";
}
function clearEl(){
    // input.value="";
    let len = input.value.length;
    let part = input.value.slice(0, len - 1);
    input.value = `${part}`;
}


equal.addEventListener("click", function(){
    if (input.value){
        let exp = input.value;
        try {
            let result = eval(exp);
            input.value = result;
        } 
        catch (error) {
            alert("Invalid Input")
        };
    }
})
