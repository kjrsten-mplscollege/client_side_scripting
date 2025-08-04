
//I wrapped everything from FreeCodeCamp in this function, so that I could activate it when I press the button, and not as soon as the page loads. The "inv" that I'm passing in can be true or false, that's how we are telling it to be inverted or not.
function buildPyramid(inv) {

    const character = "@";
    const count = 23;
    const rows = [];
    let inverted = inv; //this comes from the inv parameter we pass in
    
    //moved this up to the top to organize the code better
    let result = "";

    //this code is all from FreeCodeCamp's final step
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

    // here I am adding a new array to make a second pyramid
    const newRows = [];

    // for the second array, it's backwards world! Inverted means the opposite:
    for (let i = 1; i <= count; i++) {
        if(inverted){
            newRows.push(padRow(i, count));
        } else {
            newRows.unshift(padRow(i, count));
        }
    }

    // we can still concatenate (add to) the same "result" string, but we're doing it in the new array.
    for (const row of newRows) {
        result = result + row + "\n";
    }

    console.log(result);

    //This last step prints the array strings into the <pyramid> HTML element on the page:
    document.getElementById("pyramid").innerHTML = "<pre>" + result + "</pre>";
}

//This is how we hook up the two buttons:
document.getElementById("build").addEventListener("click", function () {
      buildPyramid(false);
});

document.getElementById("invert").addEventListener("click", function () {
    //clear out the pyramid element first, and then build
    document.getElementById("pyramid").innerHTML = "";  
    buildPyramid(true);
});