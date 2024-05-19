const fullbox = document.getElementById ("fullbox");
filimg = document.getElementById ("fullimg");

function opnefulimg(reference){
    fullbox.style.display = "flex"
    filimg.src = reference  
}

function closeImg(){
    fullbox.style.display = "none";

}

