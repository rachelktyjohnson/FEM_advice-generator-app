const advice_number = document.querySelector('#advice-number');
const advice_text = document.querySelector("h1");
const new_advice = document.querySelector(".dice");

function fetchData(){
    fetch("https://api.adviceslip.com/advice")
        .then(data => data.json())
        .then((data) => {
            console.log(data.slip);
            advice_number.innerText = data.slip.id;
            advice_text.innerText = data.slip.advice;
        })
}

new_advice.addEventListener('click', ()=>{
    advice_number.innerText = "...";
    advice_text.innerText = "Loading..."
    fetchData();
});