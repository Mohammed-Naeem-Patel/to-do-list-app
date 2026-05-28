const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const themeBtn=document.getElementById("theme-btn");
const container=document.querySelector(".container");

function addTask(){
    if(inputBox.value===''){
        alert("Please enter the task!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let editBtn=document.createElement("button");
        editBtn.innerHTML="🖉";
        editBtn.classList.add("edit-btn");
        li.appendChild(editBtn);

        let dltbtn=document.createElement("span");
        dltbtn.innerHTML="🗑️";
        li.appendChild(dltbtn);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.classList.contains("edit-btn")){
        let li=e.target.parentElement;
        let updatedText=prompt("Edit Your Task:", li.firstChild.textContent);
        if(updatedText !==null && updatedText.trim()!==''){
            li.firstChild.textContent=updatedText;
            saveData();
        }
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();


themeBtn.addEventListener("click", function(){
    container.classList.toggle("dark-theme");
    
    if(container.classList.contains("dark-theme")){
        themeBtn.innerHTML="🔆";
        localStorage.setItem("theme","dark");
    }
    else{
        themeBtn.innerHTML="🌙";
        localStorage.setItem("theme","light")
    }
});

if(localStorage.getItem("theme")==="dark"){
    container.classList.add("dark-theme");
    themeBtn.innerHTML="🔆";
}