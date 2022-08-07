function acuad(){
    let l=Number(document.getElementById("numc").value);
    let res=document.getElementById("rac");
    res.innerText="";
    let ac=l*l;
    res.innerText=ac;
    res.style.backgroundColor="white";
}
function arect(){
    let l1=Number(document.getElementById("numr1").value);
    let l2=Number(document.getElementById("numr2").value);
    let res=document.getElementById("rar");
    res.innerText="";
    let ar=l1*l2;
    res.innerText=ar;
    res.style.backgroundColor="white";
}
function desc(){
    let num=Number(document.getElementById("numd").value);
    let res=document.getElementById("rde");
    res.innerText="";
    if (num<500){
        dt="Recibiste 10%. Total="+Math.floor(num*0.9);
    }else if(num>1000){
        dt="Recibiste 30%. Total="+Math.floor(num*0.7);
    }else{
        dt="No recibiste descuento. Total="+num;
    }
    res.innerText=dt;
    res.style.backgroundColor="white";
}
function paroimpar(){
    let num=Number(document.getElementById("numpoi").value);
    let res=document.getElementById("rpi");
    res.innerText="";
    let rn=num%2;
    if (rn==0){
        res.innerText="El número es par";
    }else{
        res.innerText="El número es impar";
    }
    res.style.backgroundColor="white";
}
function ndesc(){
    const ul=document.getElementById("lisd");
    ul.innerText="";
    for (let i=100; i>=1; i--) {
        const li=document.createElement("li");
        li.setAttribute("class","list-group-item mt-1 text-center");
        li.innerText=i;
        ul.appendChild(li)
    }
}
function nasc(){
    const ul=document.getElementById("lisa");
    ul.innerText="";
    for (let i=1; i<=100; i++) {
        const li=document.createElement("li");
        li.setAttribute("class","list-group-item mt-1 text-center");
        li.innerText=i;
        ul.appendChild(li)
    }
}