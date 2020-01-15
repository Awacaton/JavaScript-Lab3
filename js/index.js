function postTodo(){
    let form = document.getElementById("todoForm");
 
    form.addEventListener("submit", function( event ){
        event.preventDefault(); //Para que no se refresque la pagina
    
        let valor = document.getElementById("newTodo").value; //valor de texfield

        if (valor === "") {
            console.log("vacio");
            
        }else {
            let newDiv = document.createElement("div"); // crea un div
            let newInput = document.createElement("input"); //crea un input
            newInput.setAttribute("type", "checkbox"); // crear un nuev
            newInput.setAttribute("class", "newInput");
            document.getElementsByClassName("agregar")[0].appendChild(newDiv).appendChild(newInput); //agrega el div y el input en la forma con clase "agregar"
            newDiv.appendChild(document.createTextNode(valor)); //agrega el texto al nuevo div
            document.getElementById('newTodo').value = '';
        };
        //debugger; 
        
    });
}

function clearTodo(){
    let form = document.getElementById("clearButton");
    let checkboxes = document.getElementsByClassName("newInput");
    form.addEventListener("click", function(event){

        for(let i=0; i<checkboxes.length;i++ ){
            checkboxes[i].checked = false;
        };
    });

}


function markAll(){
    let form = document.getElementById("markButton");
    let checkboxes = document.getElementsByClassName("newInput");
    form.addEventListener("click", function(event){

        for(let i=0; i<checkboxes.length;i++ ){
            checkboxes[i].checked = true;
        };
    });

}


function deleteAll(){
    let form = document.getElementById("deleteButton");
    let eliminar = document.getElementById("todoList");

    form.addEventListener("click", function(event){

        while (eliminar.firstChild) {
            eliminar.removeChild(eliminar.firstChild);
        };
    });
}

function init(){

    postTodo();
    clearTodo();
    markAll();
    deleteAll();

}

init();