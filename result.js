const Username = localStorage.getItem('Username');
const Crushname = localStorage.getItem('Crushname');

let LoveScore = Math.random() * 100;

LoveScore = Math.floor(LoveScore)+1;




if(LoveScore <=30){
    document.querySelector('.show-img').innerHTML = 
    `<p>${Username} & ${Crushname} ${LoveScore}%</p> <img src="IMG/Sad Anthony Anderson GIF.gif" alt="cry" <br> <p> Sorry, but it seems like there's not much of a chance. 😢"</p>`
}else if (LoveScore <= 40){
    document.querySelector('.show-img').innerHTML = 
    `<p>${Username} & ${Crushname} ${LoveScore}%</p><img src="IMG/Sad Tobey Maguire GIF.gif" alt="cry"> <br> <p>There's a slight connection. It could grow, but it's uncertain. 💭</p>`
}else if (LoveScore <= 60){
    document.querySelector('.show-img').innerHTML = 
    `<p>${Username} & ${Crushname} ${LoveScore}%</p> <img src="IMG/Sad Cry GIF by Hollyoaks.gif" alt="cry" ><br> <p> There's something here! A little effort might go a long way. 🌱</p>`
}else if (LoveScore <=70){
    document.querySelector('.show-img').innerHTML = ` 
    <p>${Username} & ${Crushname} ${LoveScore}%</p><img src="IMG/Jack Black Smile GIF.gif" alt="cry"> <br> <p>It's looking pretty good! You two might really click. 😊</p> `
}else if (LoveScore <= 80){
    document.querySelector('.show-img').innerHTML = ` 
    <p>${Username} & ${Crushname} ${LoveScore}%</p><img src="IMG/Happy If You Say So GIF.gif" alt="cry"> <br> <p>Strong chemistry detected! This could turn into something special. 💞</p> `
}else if (LoveScore <=100){
    document.querySelector('.show-img').innerHTML = `
    <p>${Username} & ${Crushname} ${LoveScore}%</p> <img src="IMG/Excited Happy Birthday GIF.gif" alt="cry"> <br> <p>  You're almost soulmates. Love is definitely in the air! 💘</p>`
}

