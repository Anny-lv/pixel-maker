// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const table = document.getElementById("pixelCanvas");
    table.innerHTML = "";


    while (table.rows.length > 1)
        table.deleteRow(0);
    const rows = document.getElementById("inputHeight").value;
    const columns = document.getElementById("inputWidth").value;

    for (let x = 0; x < rows; x++) {
        const row = table.insertRow(x);
        row.setAttribute("class", "row");
        for (let y = 0; y < columns; y++) {
            const cell = row.insertCell(y);
            cell.addEventListener('click', function (evt) {
                evt.target.style.backgroundColor = document.getElementById("colorPicker").value;

            });

        }
    }

    for (let x = 0; x < rows; x++) {
        const row = table.insertRow(x);
        row.setAttribute("class", "row");
        for (let y = 0; y < columns; y++) {
            const cell = row.insertCell(y);
            cell.addEventListener('click', function (evt) {
                evt.target.style.backgroundColor = backgroundColor;

            });

        }
    }




    return false;
}
document.getElementById("sizePicker").addEventListener("submit", function (evt) {
    evt.preventDefault();
    makeGrid();
});