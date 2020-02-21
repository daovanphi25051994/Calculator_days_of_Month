function showDays() {
    let month = parseInt(document.getElementById("month").value);
    let messageResult = "";
    if (month >=1 && month <= 12){
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: messageResult = "31 days";
                 break;
            case 2: messageResult = "28 or 29 days";
                break;
            default: messageResult = "30 days";
        }
        document.getElementById("result").innerHTML = month +" month is " + messageResult;
    }else {
        document.getElementById("result").innerHTML = "Nhap sai thang ! ";
    }
}