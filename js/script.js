 var LIST = new Map()
var SYS_VARIABLE = new Map()
var status_OK = false
var SYS_INDEX = 1
var dinamic_variable
var programm
function clear(element){
    let clearInput = document.getElementById("")
}

function stat(){
    dinamic_variable = null
    status_OK = false
    string_prog = ''
    removeAttrButtOK()
}

function request(){
    let text = document.getElementById("request")

    prog.innerHTML += prog.innerHTML + "Запросить " + text.value + "</br>" 
    text.value = ""
}

function clear_input(){
    let assign_var = document.getElementById("assign_variable")
    let assign_val = document.getElementById("assign_value")
    assign_var.value = ""
    assign_val.value = ""
}



