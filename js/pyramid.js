
function buildPyramid(inv) {

    const character = "@";
    const count = 20;
    const rows = [];
    let inverted = inv;
    let result = "";

    function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
    }

    for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
    }

    for (const row of rows) {
    result = result + row + "\n";
    }

    const newRows = [];

    // for the second array, it's backwards world! Inverted means the opposite:
    for (let i = 1; i <= count; i++) {
        if(inverted){
        newRows.push(padRow(i, count));
        } else {
        newRows.unshift(padRow(i, count));
        }
    }

    // we can still concatenate (add to) the "result" display.
    for (const row of newRows) {
    result = result + row + "\n";
    }

    console.log(result);

    document.getElementById("pyramid").innerHTML = "<pre>" + result + "</pre>";
}


document.getElementById("build").addEventListener("click", function () {
      buildPyramid(false);
});

document.getElementById("invert").addEventListener("click", function () {
    //clear out the pyramid element first
    document.getElementById("pyramid").innerHTML = "";  
    buildPyramid(true);
});