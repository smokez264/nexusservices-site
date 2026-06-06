function snow(){
 const s=document.createElement('div');
 s.innerHTML='❄';
 s.style.position='fixed';
 s.style.left=Math.random()*window.innerWidth+'px';
 s.style.top='-20px';
 s.style.opacity=Math.random();
 s.style.color='white';
 document.body.appendChild(s);
 let y=-20;
 const t=setInterval(()=>{
   y+=2;
   s.style.top=y+'px';
   if(y>window.innerHeight){clearInterval(t);s.remove();}
 },20);
}
setInterval(snow,250);