document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('button').forEach(function(button){
        button.onclick=()=>{
            document.querySelector("#hello").style.color = button.dataset.color;
        }
    });
});