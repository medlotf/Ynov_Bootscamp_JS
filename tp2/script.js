document.addEventListener('DOMContentLoaded', () => {
    
    const cont=document.createElement("div")
    cont.setAttribute("id","content");
    document.body.appendChild(cont);
    const mainDiv=document.getElementById("content");

    const divOne=document.createElement("div")
    divOne.classList.add("menu","dark-grey");
    mainDiv.appendChild(divOne);
    const menuDiv=document.querySelector(".menu");

    for (let index = 1; index <=5 ; index++) {
        const item=document.createElement("div");
        item.classList.add("item","light-grey");
        menuDiv.appendChild(item);

        const thisItem=document.querySelectorAll(".item")[index-1];//current

        var h = document.createElement("H2");
        var t = document.createTextNode(index);
        h.appendChild(t);

        var span = document.createElement("span");
        if(index===1 || index===4)
            var txt = document.createTextNode("cible 1");
        else
            var txt = document.createTextNode("cible 2");
        span.appendChild(txt);
        
        thisItem.appendChild(h);
        thisItem.appendChild(span);
        

    }

    const divTwo=document.createElement("div")
    divTwo.classList.add("targets","grey");
    mainDiv.appendChild(divTwo);
    const targetDiv=document.querySelector(".targets");

    const targetPink=document.createElement("div");
    targetPink.classList.add("target","pink");
    targetDiv.appendChild(targetPink);
    const targetDivOne=document.querySelector(".pink");

    var h = document.createElement("H3");
    var t = document.createTextNode("cible 1");
    h.appendChild(t);

    var span = document.createElement("span");
    span.classList.add("compteur");
    var txt = document.createTextNode("0");
    span.appendChild(txt);
    
    targetDivOne.appendChild(h);
    targetDivOne.appendChild(span);
    
    const targetDivTwo=targetDivOne.cloneNode(true);
    targetDivTwo.classList.remove("pink");
    targetDivTwo.classList.add("red");
    targetDivTwo.firstChild.innerHTML="cible 2";
    targetDivOne.parentElement.appendChild(targetDivTwo);

 })