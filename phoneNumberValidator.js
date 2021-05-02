function telephoneCheck(str) {
    const removeSpace = str.replace(/ /g, "");
    if (removeSpace.length === 10) {
        return true;
    } else if (removeSpace.length === 11 && removeSpace[0] === "1") {
        return true;
    } else if (removeSpace.length === 12 && removeSpace[4] === "-" && removeSpace[8] === "-") {
        return true;
    } else if (removeSpace.length === 12 && removeSpace[8] === "-") {
        return true;
    } else if (removeSpace.length === 14 && removeSpace[1] === "(" && removeSpace[5] === ")" && removeSpace[9] === "-" && removeSpace[0] === "1") {
        return true;
    } else if (removeSpace.length === 12 && removeSpace[3] === "-" && removeSpace[7] === "-") {
        return true;
    } else if (removeSpace.length === 13 && removeSpace[0] === "(" && removeSpace[4] === ")" && removeSpace[8] === "-") {
        return true;
    } else if (removeSpace.length == 13 && removeSpace[0] === "1" && removeSpace[4] === "-" && removeSpace[8] === "-") {
        return true;
    }
    return false;//default case is false because if we dont provise terms it should be false

}


let a = telephoneCheck("1 (555) 555-5555");
console.log(a)