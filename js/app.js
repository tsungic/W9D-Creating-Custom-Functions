// function addAndMultiply(numOne, numTwo) {
//     var  result = (numOne + numTwo) * 5;
//     return result
// }


function addAndMultiply(numOne, numTwo) {
    return (numOne + numTwo) * 5;
}

function checkLegnth(checkedString) {
    if(checkedString.length > 10) {
        return true;
    } 
    else if(checkedString.length <= 10) {
        return false;
    }
    else {
        console.log("There has been an error!")
    }
}
// 1
console.log(addAndMultiply(6,2));
console.log(addAndMultiply(1,7));
console.log(addAndMultiply(3,3));

// 2
console.log(checkLegnth("short"));
console.log(checkLegnth("thisisverylong"));
console.log(checkLegnth("shortshort"));

// 3
function arrayChecker(arrayToCheck) {
    for(var index = 0; index < arrayToCheck.length; index++) {
        if(arrayToCheck[index].startsWith("ph")) {
            return arrayToCheck[index];
        }
    }
    return"No string starts with ph!";
}


console.log(arrayChecker(["phew", "notphew"]));
console.log(arrayChecker(["okay", "notphone"]));
console.log(arrayChecker(["phase", "okay", "notphase"]));

