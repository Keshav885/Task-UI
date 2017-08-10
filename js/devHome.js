var h3 = document.querySelector('h3');
var btn2 = document.querySelector('.btn-2');
var btn3 = document.querySelector('.btn-3');
var content =document.querySelector('.btn-content');
var content2 =document.querySelector('.btn-content2');
var content3 =document.querySelector('.btn-content3');
var btnStyles = document.querySelector('.btn-styles');

var display =true;
var display2 =true;
var display3 =true;
h3.addEventListener("click", function(){
    btnStyles.classList.add('btn-container');
    if(display){
        btnStyles.classList.add('btn-container');
        content.style.display = "block";
    }
    else{
        btnStyles.classList.remove('btn-container');
        content.style.display = "none";
    }
    display= !display;
    console.log("display=" +display)
});


btn2.addEventListener("click", function(){
    btnStyles.classList.add('btn-container');

    if(display2){
        btnStyles.classList.add('btn-container');
        content2.style.display = "block";
    }
    else{
        btnStyles.classList.remove('btn-container');
        content2.style.display = "none";
    }
    display2= !display2;
    console.log("display2=" + display2)
});


btn3.addEventListener("click", function(){
    btnStyles.classList.add('btn-container');
    if(display3){
        btnStyles.classList.add('btn-container');
        content3.style.display = "block";
    }
    else{
        btnStyles.classList.remove('btn-container');
        content3.style.display = "none";
    }
    display3= !display3;
    console.log("display3="+display3)
});