//
function superbowlWin(arrRecord = []) {
     var obj = arrRecord.find(winYear) ;
     if (obj != null) {
        return obj.year;
     }
}

 function winYear(element) {
    if (element.result == `W`) {
       return element ;
    }
 }