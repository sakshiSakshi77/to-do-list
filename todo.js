const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function AddTask(){
    if(inputBox.value==''){
        alert("no tasks entered!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        // text in ip field is added in li
        listContainer.appendChild(li);
        // li is displayed in list container so we append li in listContainer
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        //cross icon code word
        li.appendChild(span);//display span
    }
    inputBox.value="";
    save();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        console.log( e.target.classList);
        //e.target.remove();
        // e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
function save(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();