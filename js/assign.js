function removeAttrButtOK(){
    document.getElementById('assign_button_OK').removeAttribute("data-dismiss")
}

function assign(){//todo/will add validation on input[#assign]
    let level = 2
    let string_prog = ""
    prog = document.getElementById("programm")
    let assign_variable = document.getElementById("assign_variable")
    let assign_value = document.getElementById("assign_value")
    let assign_var = document.getElementById("assign_var")
    let assign_val = document.getElementById("assign_val")
    let assign_butt_OK = document.getElementById('assign_button_OK')

   string_prog += assign_var.innerHTML + assign_variable.value +" " + assign_val.innerHTML + assign_value.value
        //тег div>span
        let divEl = document.createElement("div")
        let spanEl = document.createElement("span")
        divEl.className="prog-div"
        spanEl.innerHTML=string_prog
        divEl.append(spanEl)
        document.getElementById("programm").append(divEl)
        // в SYS_VARIABLE добавляем переменную со значением
        setSysVariable(assign_variable.value,assign_value.value)
        setList(level)
        setIncSysIndex()
        // assign_butt_OK.setAttribute("data-dismiss","modal")
        printMap(SYS_VARIABLE)
        printMap(LIST)
        console.log(getSizeMap(SYS_VARIABLE))
    clear_input();
}