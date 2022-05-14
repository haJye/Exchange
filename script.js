let value1 = document.querySelector("span").innerText;
let value2 = document.querySelectorAll("span")[5].innerText;

let inputFirst = document.querySelector("input");
let inputSecond = document.querySelectorAll("input")[1];

let footer = document.querySelectorAll("p")[2];
let footer1 = document.querySelectorAll("p")[4];

let errorMsg = document.querySelectorAll("p")[5];
console.log(errorMsg)
console.log(footer.innerHTML);
console.log(footer1.innerHTML);
// footer.innerHTML=`1${value1}=${value2}`

// let link = `https://api.exchangerate.host/latest?base=${value1}&symbols=${value2}`

//!First 4 value for change

inputFirst.value=0;
inputSecond.value=0;

let btn1 = [...document.querySelectorAll("span")];
btn1.slice(0, 4).forEach((item) => {
    item.addEventListener("click", (e) => {
        btn1.forEach((item) => {
            item.classList.remove("active1");
        });
        e.target.classList.add("active1");
        value1 = e.target.innerText;
        value2 = btn2.slice(4, 8).filter((item) => {
            return item.classList.contains("active2");
        });
        value2 = value2[0].innerText;
        console.log(value2);
        getData(value1, value2).then((res) => {
            // inputSecond.value = Number(res.rates[value2]);
            // inputFirst.value = (inputFirst.value * res.rates[value2]);
            console.log(res.rates[value2]);
            footer.innerHTML = `1 ${value1}  = ${res.rates[value2]}${value2}`;
            footer1.innerHTML = `1 ${value2} = ${res.rates[value2]}${value2}`;
        });
    });
});

//!Second 4 value for change

let btn2 = [...document.querySelectorAll("span")];
btn2.slice(4, 8).forEach((item) => {
    item.addEventListener("click", (e) => {
        btn2.forEach((item) => {
            item.classList.remove("active2");
        });
        e.target.classList.add("active2");
        value2 = e.target.innerText;
        console.log(value2);
        getData1(value1, value2).then((res) => {
            footer1.innerHTML = `1 ${value2} = ${res.rates[value1]}${value1}`;
        });
    });
});

//!Currency change for first tab

inputFirst.addEventListener("keyup", (e) => {
    if(value1===value2){
        inputFirst.value=inputFirst.value;
        inputSecond.value=inputFirst.value
    }
    else{
    getData(value1, value2).then((res) => {
        // console.log(res)
        inputSecond.value = (inputFirst.value * res.rates[value2]);
        // console.log(res.rates[value2])
    });
}
});

//!Currency change for second tab
inputSecond.addEventListener("keyup", (e) => {
    if(value1===value2){
        inputSecond.value=inputSecond.value
        inputFirst.value=inputSecond.value;
    }
    else{
    getData1(value1, value2).then((res) => {
        // console.log(res)

        inputFirst.value = (inputSecond.value * res.rates[value1]);
        // console.log(res.rates[value1])
    });
}
});
const getData = async (from, to) => {
    if(value1===value2){
        inputFirst.value=inputFirst.value;
        inputSecond.value=inputFirst.value
    }
    else{
    let data = await fetch(
        `https://api.exchangerate.host/latest?base=${from}&symbols=${to}`
    ).catch(err=>{
        console.log(err.message)
        errorMsg.innerHTML=`Please check your internet connection`
    })
    let response = await data.json();
    return response;
}};
const getData1 = async (from, to) => {
    if(value1===value2){
        inputSecond.value=inputSecond.value
        inputFirst.value=inputSecond.value;
    }
    else{
    let data = await fetch(
        `https://api.exchangerate.host/latest?base=${to}&symbols=${from}`
    ).catch(err=>{
        console.log(err.message)
        errorMsg.innerHTML=`Please check your internet connection`
    })
    let response = await data.json();
    return response;
}};
