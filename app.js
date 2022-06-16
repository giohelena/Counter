//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//set function and conditions

btns.forEach(function (btn){
//select btn class
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')){
            count--;
        } else if(styles.contains('increase')){
            count++;
        } else{
            count = 0;
        }
//change colors
        if(count > 0){
            value.style.color = 'green';
        } else if(count < 0){
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})