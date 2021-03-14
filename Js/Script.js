var lightcells = document.getElementsByClassName("light");
var darkcells = document.getElementsByClassName("dark");

function resetcells(y){
    for(i = 0 ; i < lightcells.length ; i++){
        lightcells[i].style.backgroundColor="#dbcaa4";
        if(lightcells[i].classList.lenght==2 && y){
                lightcells[i].classList.remove("selected");
        }
    }
    for(i=0 ; i < darkcells.length ; i++){
        darkcells[i].style.backgroundColor="#693502";
        if(darkcells[i].classList.lenght==2 && y){
            darkcells[i].classList.remove("selected");
        }
    }
}

function lightcell(x){
    console.log(x.classList);
    resetcells(0);
    console.log(x.classList.length);
    if(x.classList.contains("selected")){
        resetcells(1);
    }
    else{
        x.classList.add("selected");
    }
    console.log(x.classList);
}