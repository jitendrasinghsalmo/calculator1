let inp = document.querySelector('input')
let btn = document.querySelectorAll('button')
// console.log(btn,"arr");
for(let button of btn){
    button.addEventListener('click',()=>{
        let  text = button.innerText
        if(text==="AC"){
            inp.value=''
        }
        else if(text==="="){
            inp.value=eval(inp.value)
        }
        else if(text==="DEL")
        {
            inp.value =(inp.value.slice(0,-1))
        } 
        else
        {
            inp.value = inp.value+text
        }

    })
}