let btn1 = [...document.querySelectorAll("span")]

btn1.slice(0,4).forEach(item=>{
    item.addEventListener("click",(e)=>{
      
       btn1.forEach(item=>{
                item.classList.remove('active1')
       })
        e.target.classList.add('active1')
    })
})
let btn2 = [...document.querySelectorAll("span")]
btn2.slice(4,8).forEach(item=>{
    item.addEventListener("click",(e)=>{
      
       btn2.forEach(item=>{
                item.classList.remove('active2')
       })
        e.target.classList.add('active2')
    })
})

