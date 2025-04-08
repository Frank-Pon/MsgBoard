const keyin = document.querySelector('.text');
const send = document.querySelector('.send');
const msgbox = document.querySelector('.msg_box');
const alldel = document.querySelector('.delall');



function add_msg(){
    if (keyin.value.trim() ===""){
        return;
    }
    const now = new Date();
    const time = now.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    const msg = document.createElement('li');
    const content = keyin.value.replace(/\n/g,'<br>')
    msg.innerHTML = `<div class='msg_content'><label class='label'>${content}</label></div><div class='msg_footer'><span class='timestamp'>${time}</span><button class='del'>🗑️</button></div>`
    msgbox.append(msg);
    keyin.style.height = 75 + 'px';
    const del = msg.querySelector('.del');
    del.addEventListener('click',function(){
        msg.remove();
    });
    keyin.value = '';
}

keyin.addEventListener('keydown',function(e){
    if(e.key==='Enter' && !e.shiftKey){ //*e.shiftKey(K要大寫)
        e.preventDefault(); //*
        if (keyin.value.trim() !==""){
            add_msg();
        }

    } 
});
alldel.addEventListener('click',function(){
    msgbox.innerHTML='';
});
send.addEventListener('click',add_msg);
keyin.addEventListener('input',function(){
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});

