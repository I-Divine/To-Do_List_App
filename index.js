//We create a list of items to display the to-do events
//We add buttons and event listener to them to delete each element
let eventItem = document.getElementById("to-do event");
let button = document.getElementById("btn");
let container =  document.getElementById("container");
let warningMessage = document.getElementById("warning");
let list = [];
button.addEventListener("click", addItem)
function addItem(){
    if(eventItem.value){
        container.style.visibility="visible";
        let item = document.createElement("div");
        let btn = document.createElement("button");
        let icon = document.createElement("img");
        icon.src = "./assets/images/remove.png";
        icon.className = "icon";
        item.textContent= eventItem.value;
        btn.className= "removeBtn"
        btn.appendChild(icon);
        item.className="task";
        item.appendChild(btn)
        container.prepend(item);
        list = document.querySelectorAll(".removeBtn");
        list.forEach(btn=>{
            btn.addEventListener("click", ()=>{
                btn.parentElement.style.display ="none";
            });
        });
        eventItem.value ="";
    }else{
        warningMessage.style.visibility = "visible";
        setTimeout(() => {
            warningMessage.style.visibility = "hidden";
        }, 5000);
    }
    
}
