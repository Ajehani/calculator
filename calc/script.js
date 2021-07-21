const display=document.querySelector('#text')
let signal=0
let saved
const seven=document.getElementById('7')
seven.addEventListener('click',function(){
    display.textContent+='7'
})
const eight=document.getElementById('8')
eight.addEventListener('click',function(){
    display.textContent+='8'
})
const nine=document.getElementById('9')
nine.addEventListener('click',function(){
    display.innerHTML+='9'
})
const four=document.getElementById('4')
four.addEventListener('click',function(){
    display.textContent+='4'
})
const five=document.getElementById('5')
five.addEventListener('click',function(){
    display.textContent+='5'
})
const six=document.getElementById('6')
six.addEventListener('click',function(){
    display.textContent+='6'
})
const one=document.getElementById('1')
one.addEventListener('click',function(){
    display.textContent+='1'
})
const two=document.getElementById('2')
two.addEventListener('click',function(){
    display.textContent+='2'
})
const three=document.getElementById('3')
three.addEventListener('click',function(){
    display.textContent+='3'
})
const zero=document.getElementById('0')
zero.addEventListener('click',function(){
    display.textContent+='0'
})
const dot=document.getElementById('dot')
dot.addEventListener('click',function(){
    display.textContent+='.'
})
const clear=document.getElementById('clear')
clear.addEventListener('click',function(){
    display.textContent=''
    // saved=''
})

//Operators
const d=document.getElementById('÷')
d.addEventListener('click',function(){
    saved=display.textContent
    display.textContent=''
    saved=+saved
    signal=1
});

const m=document.getElementById('x')
m.addEventListener('click',function(){
    saved=display.textContent
    display.textContent=''
    saved=+saved
    signal=2
});
const s=document.getElementById('-')
s.addEventListener('click',function(){
    saved=display.textContent
    display.textContent=''
    saved=+saved
    signal=3
});

const a=document.getElementById('+')
a.addEventListener('click',function(){
    saved=display.textContent
    display.textContent=''
    saved=+saved
    signal=4
});

const equal=document.getElementById('equal')
equal.addEventListener('click',function(){
   if(signal===4){
       display.textContent=parseFloat(display.textContent)+saved
   }
   if(signal===3){
    display.textContent=saved-parseFloat(display.textContent)
}
if(signal===2){
    display.textContent=parseFloat(display.textContent)*saved
}
if(signal===1){
    if(display.textcontent===0){
      alert("you know what you've done")
    }
    display.textContent=saved/parseFloat(display.textContent)
    display.textContent=parseFloat(display.textContent).toPrecision(3)
    
}
});


