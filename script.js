let value1=document.querySelector("span").innerText
let value2=document.querySelectorAll("span")[5].innerText

let inputFirst=document.querySelector("input");
let inputSecond =document.querySelectorAll("input")[1];

console.log(inputFirst,inputSecond)

let link = `https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`
fetch(link)
.then(res =>{
    return res.json()
})
.then(data=>{
    inputFirst.value=1;
    inputSecond.value=Number(data.rates.USD)
    console.log(data.rates.USD)
})
let btn1 = [...document.querySelectorAll("span")]

btn1.slice(0,4).forEach(item=>{
    item.addEventListener("click",(e)=>{
      
       btn1.forEach(item=>{
                item.classList.remove('active1')
       })
        e.target.classList.add('active1')
        value1=e.target.innerText
        console.log(value1);
    })
})
let btn2 = [...document.querySelectorAll("span")]
btn2.slice(4,8).forEach(item=>{
    item.addEventListener("click",(e)=>{
      
       btn2.forEach(item=>{
                item.classList.remove('active2')
       })
        e.target.classList.add('active2')
        value2=e.target.innerText
        console.log(value2)
    })
})
inputFirst.addEventListener('keyup',(e)=>{
fetch(link)
.then(res =>{
    return res.json()
})
.then(data=>{
    // inputSecond.value=Number(data.rates.USD)
   inputSecond.value=e.target.value*data.rates[value2]
})

})
inputSecond.addEventListener('keyup',(e)=>{
    fetch(link)
    .then(res =>{
        return res.json()
    })
    .then(data=>{
        // inputSecond.value=Number(data.rates.USD)
       inputFirst.value=e.target.value*data.rates[value1]
    })
})

