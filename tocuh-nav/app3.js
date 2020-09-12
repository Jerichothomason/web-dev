const navbar=document.querySelector(".navbar");
navbar.classList.add('show');
const ll=document.querySelector(".last");

var prev=ll.getBoundingClientRect().top;
var now;
var down=false;
var up=false;
window.addEventListener('scroll', floater);
window.addEventListener('touch-move', floater);


    function floater(){
        now=ll.getBoundingClientRect().top;
        console.log("working");
        if(now<prev&&!down)
            //go down
            {
                navbar.classList.toggle('hide-nav');
                console.log("down");
                // alert('down');
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
    }