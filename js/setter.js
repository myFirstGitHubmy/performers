function setSysVariable(k,v){
    SYS_VARIABLE.set(k,v)
}

function setList(index){
    LIST.set(SYS_INDEX,index)
    setIncSysIndex()
}


function setIncSysIndex(){
    SYS_INDEX++
}
