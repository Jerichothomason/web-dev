const ll=document.querySelector(".last");
const navbar=document.querySelector(".navbar");
navbar.classList.add("show");


var down=false;
var up=false;
var prev=ll.getBoundingClientRect().top;
var now;



function floater(){
    now=ll.getBoundingClientRect().top;
    console.log("workinggg"+now+"  "+prev);

    // console.log("working");
    if(now<prev&&!down)
        
        {
            // go down
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