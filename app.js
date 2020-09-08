const hero=document.querySelector(".hero");
const slider=document.querySelector(".slider");
const logo=document.querySelector(".logo");
const hamburger=document.querySelector(".hamburger");
const headline=document.querySelector(".headline");

const t1=new TimelineMax();

if(screen.width>1000)
{
t1.fromTo(hero,1,{height: "0%"},{height: "80%",ease:Power2.easeInOut})
.fromTo(hero,1.2,{width:"100%"},{width:"80%",ease:Power2.easeInOut})
.fromTo(slider,1.2,{x:"-100%"},{x:"0%",ease:Power2.easeInOut},"-=1.2")
.fromTo(logo,0.2,{opacity:0,x: -30,y:20},{opacity:1,x:0,y:20,ease:Power2.easeInOut},"-=.45")
.fromTo(hamburger,0.2,{opacity:0,x: -30,y:10},{opacity:1,x:0,y:20,ease:Power2.easeInOut},"-=.4");
}

else{
    t1.fromTo(hero,1,{width: "0%"},{width: "80%",ease:Power2.easeInOut})
.fromTo(hero,1.2,{height:"100%"},{height:"50%",ease:Power2.easeInOut})
.fromTo(slider,1.2,{x:"-100%"},{x:"0%",ease:Power2.easeInOut},"-=1.2")
.fromTo(logo,0.2,{opacity:0,x: -30,y:20},{opacity:1,x:0,y:20,ease:Power2.easeInOut},"-=.45")
.fromTo(headline,0.2,{y:20,opacity: 0},{opacity: 1,y:20,ease:Power2.easeInOut},"-=1.2")
.fromTo(hamburger,0.2,{opacity:0,x: -30,y:10},{opacity:1,x:0,y:20,ease:Power2.easeInOut},"-=.4");

}

