const modal=document.querySelector(".modal");
const previews=document.querySelectorAll(".gallery img");

const original=document.querySelector(".full-img");
const imgText=document.querySelector(".caption");

previews.forEach(preview =>{
    preview.addEventListener('click',() => {
        
        const os=preview.getAttribute("data-original");
        
        original.src=`${os}`;

            const alt=preview.alt;
            imgText.textContent = alt;
        // console.log(isrc);
        modal.classList.add('open');
        console.log("hurray img clicked");   
        original.classList.add("open");  
        
    });
});

modal.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
})