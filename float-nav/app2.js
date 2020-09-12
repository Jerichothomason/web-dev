const navbar=document.querySelector(".navbar");
navbar.classList.add('show');
const ll=document.querySelector(".last");

var prev=ll.getBoundingClientRect().top;
var now;
var down=false;
var up=false;
window.addEventListener('scroll', function(){
    // navbar.classList.toggle('hide-nav');
    // console.log(ll.getBoundingClientRect().top);
        //value goes down -----scroll down   ---disappear

    now=ll.getBoundingClientRect().top;
    if(now<prev&&!down)
        //go down
        {
            navbar.classList.toggle('hide-nav');
            console.log("down");
            down=true;
            up=false;
        }


        if(now>prev&&!up)
        //go down
        {
            navbar.classList.toggle('hide-nav');
            console.log("up");
            down=false;
            up=true;
        }

        prev=now;
    });
