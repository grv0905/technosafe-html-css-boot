let topbtn=document.getElementById('gotopbtn');
window.onscroll=function(){
    scrollFunction();
}
scrollFunction=()=>{
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        topbtn.style.display="block";
    }
    else{
        topbtn.style.display="none";
    }
}


topfunction=()=>{
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
}