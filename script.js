const keyin = document.querySelector('.text');
const send = document.querySelector('.send');
const msgbox = document.querySelector('.msg_box');
const alldel = document.querySelector('.delall');


function add_msg(){
    if (keyin.value ===""){
        return;
    }
    const msg = document.createElement('li');
    const content = keyin.value.replace(/\n/g,'<br>')
    msg.innerHTML = `<label class='label'>${content}</label><button class='del'>🗑️</button>`
    msgbox.append(msg);
    const del = msg.querySelector('.del');
    del.addEventListener('click',function(){
        msg.remove();
    });
    keyin.value = '';
}
keyin.addEventListener('keyup',function(e){
    if(e.key==='Enter' && !e.shiftKey){ //*e.shiftKey(K要大寫)
        e.preventDefault(); //*
        add_msg();
    } 
});
alldel.addEventListener('click',function(){
    msgbox.innerHTML='';
});
send.addEventListener('click',add_msg);

