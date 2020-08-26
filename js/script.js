var LIST = new Map()
var SYS_VARIABLE = new Map()
var status_OK = false
var SYS_INDEX = 1
var dinamic_variable
function clear(element){
    let clearInput = document.getElementById("")
}

function printMap(map){
    for(let [key,value] of map){
        console.log("key: " + key + ",value: "+ value)
    }
}

function stat(){
    dinamic_variable = null
    status_OK = false
    string_prog = ''
    document.getElementById('assign_button_OK').removeAttribute("data-dismiss")
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

function setSysVariable(k,v){
    SYS_VARIABLE.set(k,v)
}

function setList(index){
    LIST.set(SYS_INDEX,index)
}

function incrementSysIndex(){
        SYS_INDEX++
}

function assign(){
    
    var prog = document.getElementById("programm")
    let assign_input = document.getElementById("assign")
    if (/[A-Za-z]/.test(assign_input.value)){
        assign_input.classList.add='valid'
        assign_input.classList.remove='invalid'
    }else{
        assign_input.classList.remove='valid'
        assign_input.classList.add='invalid'
    }
    let assign_def = document.getElementById("assign_def")
    let assign_butt_OK = document.getElementById('assign_button_OK')

    string_prog += assign_def.innerHTML + assign_input.value +" "
    assign_def.innerHTML = 'Значение '
    if (status_OK) {
        prog.innerHTML += string_prog
        assign_def.innerHTML = 'Присвоить '
        setSysVariable(dinamic_variable,assign_input.value)
        setList(2)
        incrementSysIndex()
        assign_butt_OK.setAttribute("data-dismiss","modal")
        printMap(SYS_VARIABLE)
        printMap(LIST)
    }else{
        dinamic_variable = assign_input.value
        status_OK=true}
    clear_input();
    
}
