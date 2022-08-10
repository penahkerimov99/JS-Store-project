const colors = document.querySelectorAll('.div');
const submit = document.querySelector('button');
const shoe = document.querySelector('img');
const shoeBody = document.querySelectorAll('.shoebody');

colors.forEach(item => {
    item.style.background = item.getAttribute("data-color")
    item.addEventListener('click',(e)=>{
        colors.forEach(itm => {
            itm.style.border = "none";
        });
        item.style.border = "4px solid black";
        shoe.src = `images/${e.target.getAttribute("data-color")}.png`;
        submit.style.background = e.target.getAttribute("data-color");
    })
});

submit.addEventListener('click', myFunc);

function myFunc(){
    const myS = document.querySelector('#myS');
    myS.style.visibility = "visible";
}

shoeBody.forEach(el => {
    el.addEventListener('click', yFunc)

    function yFunc(){
        const myP1 = document.querySelector('#myP1');
        const myP2 = document.querySelector('#myP2');
        
        myP1.textContent = 'Köhnə qiyməti: 55 AZN';
        myP2.textContent = 'Yeni qiyməti: 25 AZN'
    }
});