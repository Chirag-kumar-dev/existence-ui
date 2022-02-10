var modal_button=document.querySelector(".press");
var modal_div=document.querySelector(".modal");
var close_modal=document.querySelector(".close-modal");

console.log(modal_button);

modal_button.addEventListener("click",()=>{
    modal_div.style.display = "inline";
});

close_modal.addEventListener("click",()=>{
    modal_div.style.display = "none";
});