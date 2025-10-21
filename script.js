var Score=document.querySelector('.score');
    var button=document.querySelector('#btn');
    let number=0;
    button.addEventListener("click", function(){      
    number++;
    Score.textContent="Score:"+number;
    })