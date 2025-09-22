// document.writCross are playing zero or cross game")

const arr = [-1,-2,-3,-4,-5,-6,-7,-8,-9];
let flag = false;


    

let turn = 0;
function handlePass(x){

    
    
    if(flag){
        return;
    }
    
    
    
    let value = turn%2;
    let v = document.getElementById(x).innerHTML;
    
    
    
    
    switch(value){
        case 0:
            if( v === 'x'){
                document.getElementById(x).innerHTML=`<img class="w-full h-full" src="https://media.istockphoto.com/id/1695982629/vector/red-cross-mark.jpg?s=612x612&w=0&k=20&c=svdE5z8cIP2RcgBaKbUdzh63P-83NJlXavKboMsmeyY=" alt="">` 
                arr[x] = value;
                turn++;
            }
            break;
            case 1:
                
                if( v === 'x'){   
                    document.getElementById(x).innerHTML=`<img class="w-full h-full" src="https://img.freepik.com/free-psd/red-circle_23-2150588573.jpg?semt=ais_hybrid&w=740&q=80" alt="">` 
                    
                    arr[x] = value;
                    turn++;
                }
                break;
        }

        document.getElementById('chance').innerHTML = value == 0? 'Chance to Zero' : 'Chance to Cross'

    
        flag = check(x);
        console.log("iam here" , flag);
}

function check(x){
    if(arr[0] == 0 &&  arr[1] ==  0 && arr[2] == 0){
        
        document.getElementById('chance').innerHTML="Cross won";
        return true;
        
    }else if(arr[0] == 0 &&  arr[3] == 0 && arr[6] == 0){
        document.getElementById('chance').innerHTML="Cross won";
        return true;
        
    }else if(arr[0] == 0 && arr[4] == 0 && arr[8] == 0){
        document.getElementById('chance').innerHTML="Cross won";
        return true;
    }else if(arr[1] == 0 && arr[4] == 0 && arr[7] == 0){
        document.getElementById('chance').innerHTML="Cross won";
        return true;
    }else if(arr[2] == 0 && arr[5] == 0 && arr[8] == 0){
        document.getElementById('chance').innerHTML="Cross won";
        return true;
    }else if(arr[3] == 0 && arr[4] == 0 && arr[5] == 0){
        document.getElementById('chance').innerHTML="Cross won";
        return true;
    }else if(arr[6] == 0 && arr[7] == 0 && arr[8] == 0){
        document.getElementById('chance').innerHTML="Cross won";
        return true;
    }else if(arr[2] == 0 && arr[4] == 0 && arr[6] == 0){
        document.getElementById('chance').innerHTML="Cross won";//dkddld
        return true;
    }else if(arr[0] == 1 &&  arr[1] ==  1 && arr[2] == 1){
        document.getElementById('chance').innerHTML="Zero won";
        
    }else if(arr[0] == 1 &&  arr[3] == 1 && arr[6] == 1){
        document.getElementById('chance').innerHTML="Zero won";
        return true;
    }else if(arr[0] == 1  && arr[4] == 1 && arr[8] == 1){
        document.getElementById('chance').innerHTML="Zero won";
        return true;
    }else if(arr[1] == 1  && arr[4] == 1 && arr[7] == 1){
        document.getElementById('chance').innerHTML="Zero won";
        return true;
    }else if(arr[2] == 1  && arr[5] == 1 && arr[8] == 1){
        document.getElementById('chance').innerHTML="Zero won";
        return true;
    }else if(arr[3] == 1  && arr[4] == 1 && arr[5] == 1){
        document.getElementById('chance').innerHTML="Zero won";
        return true;
    }else if(arr[6] == 1  && arr[7] == 1 && arr[8] == 1){
        document.getElementById('chance').innerHTML="Zero won";
        return true;
    }else if(arr[2] == 1  && arr[4] == 1 && arr[6] == 1){
        document.getElementById('chance').innerHTML="Zero won";
            return true;
    }

    return false;
}