function request(){
    let request_text = document.getElementById("request_text")
    let request_value = document.getElementById("request")
    let str_req = ''
    let index = 1
    str_req += request_text.innerHTML + request_value.value + "</br>" 
    setList(index)
    setTextCreateElement(str_req)
    setSysVariable(request_value.value,null)
    printMap(SYS_VARIABLE)
    printMap(LIST)
        request_value.value = ""
}