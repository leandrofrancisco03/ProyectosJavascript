const displaly = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick=()=>{
        if (item.id == 'clear') {
            displaly.innerText=''
        }else if(item.id == 'backspace'){
            let string = display.innerText.toString()
            displaly.innerText=string.substr(0,string.length-1)
        }else if(displaly.innerText !='' && item.id=='equal'){
            displaly.innerText= eval(displaly.innerText)
        }else if(displaly.innerText=='' && item.id=='equal'){
            displaly.innerText = 'Null'
            setTimeout(()=>(displaly.innerText=''),2000)
        }else{
            displaly.innerText+=item.id;
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler')
const calculator = document.querySelector('.calculator')
let isDark = true;
themeToggleBtn.onclick = () =>{
    calculator.classList.toggle('dark')
    themeToggleBtn.classList.toggle('active')
    isDark = !isDark
}