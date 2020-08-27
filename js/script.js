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

function clear_input(){
    let assign_var = document.getElementById("assign_variable")
    let assign_val = document.getElementById("assign_value")
    assign_var.value = ""
    assign_val.value = ""
}

function setTextCreateElement(text){
    let divEl = document.createElement("div")
        let spanEl = document.createElement("span")
        divEl.className="prog-div"
        spanEl.innerHTML=text
        divEl.append(spanEl)
        document.getElementById("programm").append(divEl)
}



