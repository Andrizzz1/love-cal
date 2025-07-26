const love_cal = document.querySelector('.js-calculate-love');



love_cal.addEventListener('click',()=>{
    const Username = document.querySelector('.UserName').value;
    const Crushname = document.querySelector('.CrushName').value;
    if(Username && Crushname){
        localStorage.setItem('Username',Username);
        localStorage.setItem('Crushname',Crushname);
        window.location.href = 'result.html';
    }else if (!Username || !Crushname){
        alert('Fields are empty')
    }
})
