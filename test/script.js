function showRandom(){
    box=document.getElementById('child');
    const n=math.floor(math.random()*box.length);
    console.log(n);
    for (let child in box){
        child.style.display='none';
    }
    if(clicked()===n){
        box[n].style.display='block';
        box[n].innerHTML="Win";
    }
    else{
        box[n].style.display='block';
        box[n].innerHTML="Loss";
    }

}
showRandom();
function clicked(input){
    return input;
}