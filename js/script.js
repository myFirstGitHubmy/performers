let string_prog = ''
let status_OK = false
function clear(element){
    let clearInput = document.getElementById("")
}

function stat(){
    status_OK = false
    string_prog = ''
    document.getElementById('assign_button_OK').removeAttribute('data-dismiss')
}

function request(){
    let text = document.getElementById("request")

    prog.innerHTML += prog.innerHTML + "Запросить " + text.value + "</br>" 
    text.value = ""
}

function clear_input(){
    let assign_input = document.getElementById("assign")
    assign_input.value = ""
}

function assign(){
    var prog = document.getElementById("programm")
    let assign_input = document.getElementById("assign")
    let assign_def = document.getElementById("assign_def")
    let assign_butt_OK = document.getElementById('assign_button_OK')

    string_prog += assign_def.innerHTML + assign_input.value
    clear_input();
    assign_def.innerHTML = 'Значение '
    string_prog+= assign_def.innerHTML + assign_input.value 
    
    if (status_OK) {
        prog.innerHTML = prog.innerHTML+ string_prog
        assign_def.innerHTML = 'Присвоить '
        assign_butt_OK.setAttribute('data-dismiss',"modal")}else{
            status_OK=true}
    clear_input();

}