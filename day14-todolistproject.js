const input=document.querySelector(".user-input");
const calender=document.querySelector(".date-input");
const addbtn=document.querySelector(".add-btn");
const list=document.querySelector(".todolist");
addbtn.addEventListener("click",()=>{addtask();});
function addtask(){
    const div=document.createElement("div");
    div.classList.add("row");
    const value=input.value;
    const date=calender.value;

    const task=document.createElement("span");
    task.classList.add("task");
    task.innerText=value+" ";

    const time=document.createElement("span");
    time.classList.add("date");
    time.innerText=date+" ";

    const delbtn =document.createElement("button");
    delbtn.classList.add("del-btn");
    delbtn.innerText="Delete";
    delbtn.addEventListener("click",()=>{div.remove();});
    
    div.appendChild(task);
    div.appendChild(time);
    div.appendChild(delbtn);

    list.appendChild(div);
    
    //reset values
    input.value="";
    calender.value="";

}