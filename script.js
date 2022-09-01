
window.onload = fetchAdvice();

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice').then((data) => {
        // console.log(data);
        return data.json();
    }).then((adviceData) => {
        // console.log(adviceData.slip.id);
        document.getElementById('advice-id').innerHTML = adviceData.slip.id;
        // console.log(adviceData.slip.advice);
        document.getElementById('advice-box').innerHTML = adviceData.slip.advice;

    })
}
