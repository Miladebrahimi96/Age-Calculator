const dataEl = document.querySelector('#date');
const monthEl = document.querySelector('#month');
const yearEl = document.querySelector('#year');
const btn = document.querySelector('button');
const showAge = document.querySelector('p');

showAge.style.display = "none";


const current = new Date();



const birthDate = new Date(`${year}-${month}-${date}`)


btn.addEventListener('click', e => {
    e.preventDefault();
    let day = dataEl.value;
    let month = monthEl.value;
    let year = yearEl.value;
    let monthDays = [31,31,31,31,31,31,30,30,30,30,30,29]
    let currentDay = current.getDate();
    let currentMonth = current.getMonth() + 1;
    let currentYear = current.getFullYear();
    
    if(currentDay < day){
        currentDay = currentDay + monthDays[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }
    if(currentMonth < month){
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }

    let finalDay = currentDay - day;
    let finalMonth = currentMonth - month;
    let finalYear = currentYear - year;

    showAge.innerText = `You are ${finalYear} years, ${finalMonth} months & ${finalDay} days old!`
    showAge.style.display = "block"
})

