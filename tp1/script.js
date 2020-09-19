document.addEventListener('DOMContentLoaded', () => {
    // -- your code here, after the DOM has been fully 
    const itemTab=document.querySelectorAll(".item");
    console.log(itemTab);
    itemTab.forEach(i => {
        if(i.lastElementChild.innerHTML==="cible 1"){
            i.classList.remove("light-grey");
            i.classList.add("pink");
            const target=document.querySelector(".pink .compteur");
            const newValue=parseInt(target.innerHTML)+1;
            target.innerHTML=newValue.toString();
        }
        else if(i.lastElementChild.innerHTML==="cible 2"){
            i.classList.remove("light-grey");
            i.classList.add("red");
            const target=document.querySelector(".red .compteur");
            const newValue=parseInt(target.innerHTML)+1;
            target.innerHTML=newValue.toString();
        }
    });
 })