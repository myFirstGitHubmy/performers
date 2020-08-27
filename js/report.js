function byReport(){
    let report_input = document.getElementById("report")
    let report_radio_1 = document.getElementById("report_1")
    let report_radio_2 = document.getElementById("report_2")

    if (report_radio_1.checked || report_radio_2.checked) 
        report_input.hidden = false
        else 
        report_input.hidden = true
}

function report(){

}

function clearReportRadio(){
    document.getElementById("report_1").checked = false
    document.getElementById("report_2").checked = false
    document.getElementById("report").hidden = true
    document.getElementById("report").value = ""
}