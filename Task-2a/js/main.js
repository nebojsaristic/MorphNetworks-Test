const input = document.getElementById("input");

function getInputValue() {
    console.log(count(input.value)); 
}

function count(string) {
    const char1Count = string.match(/\(/g) ? string.match(/\(/g).length : false;
    const char2Count = string.match(/\)/g) ? string.match(/\)/g).length : false;
    return char1Count === char2Count;
}
