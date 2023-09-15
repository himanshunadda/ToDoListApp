
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("addbutton");

addButton.addEventListener("click", () => {
    if(inputBox.value === ''){
        alert("please add text in input field");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        saveData();
    }
    inputBox.value = "";
});

listContainer.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        
        saveData();

    }
    }, false);

    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML);
    }

    function showData(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
showData();

