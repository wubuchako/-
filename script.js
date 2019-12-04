'use strict'

{
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        // const n = Math.floor(Math.random()*3);
        // btn.textContent = n;

        // switch(n) {
        //     case 0:
        //         btn.textContent = "Great Blessing";
        //         break;
        //     case 1:
        //         btn.textContent = "Middle Blessing";
        //         break;
        //     case 2:
        //         btn.textContent = "Small Blessing";
        //         break;       
        // }
    　　// 短く書きます
    const results = ['大吉', '中吉', '小吉', '末吉'];
    // const n = Math.floor(Math.random()* results.length);
    // btn.textContent = results[n];
    btn.textContent = results[Math.floor(Math.random()* results.length)];

    //確率の出し方
    //     const n = Math.random();
    //     if(n < 0.05) {
    //         btn.textContent = "大吉"； //80%
    //     }else if (n < 0.2){
    //         btn.textContent = '中吉'; //15%
    //     }
    //     else {
    //         btn.textContent = '小吉'; //5%
    //     }
    });
}