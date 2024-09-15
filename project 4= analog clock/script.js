const numberHours =document.querySelector('.number-hours');
const barSeconds =document.querySelector('.bar-seconds');

const numberElement =[];
const barElement =[];

for (let i=1; i<=12; i++)
{
    numberElement.push(
   ` <span style="--index:${i};"><p>${i}</p></span>`
    );
    // console.log(numberElement);
}

numberHours.insertAdjacentHTML("afterbegin",numberElement.join(""));


for (let i=1; i<=60; i++){
    barElement.push(
        ` <span style="--index:${i};"><p></p></span>`
         );
}

barSeconds.insertAdjacentHTML("afterbegin",barElement.join(""));

const handHours =document.querySelector('.hours');
const handMinutes =document.querySelector('.minutes');
const handSeconds =document.querySelector('.seconds');
console.log(handHours);


function getCurrentTime(){
    let date =new Date();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();
    let currentHours = date.getHours()*30+Math.round(currentMinutes/12);
    handHours.style.transform = `rotate(${currentHours}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
    
    
}

//call getCurrentTime to set clock hands every second
setInterval(getCurrentTime, 1000); //1000=1s
