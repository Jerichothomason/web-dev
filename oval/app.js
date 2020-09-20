const nav=document.querySelector(".navbar");

document.addEventListener('keydown',joel);

function joel(e){

if(e.keyCode==65)
{console.log("u press ed space");
nav.classList.toggle("scrolls");
}



function scroollist(e){

}
}


console.log(window.scrollY);
var pos=window.scrollY;

window.addEventListener('scroll',function(){
    // console.log("huraay scroll detected");
    var scroll=window.scrollY;
    // console.log(window.scrollY);
    
    if(scroll>pos)
        {//down we went
        // console.log("down");
        
nav.classList.add("scrolls");
            
        }
    if(scroll<nav.offsetHeight)
    {console.log("home");
nav.classList.remove("scrolls");

}

    pos=scroll;
    })