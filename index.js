const form = document.getElementById('form');

form.addEventListener('submit', function(event)
{
    event.preventDefault();
    let transFormData = new FormData(form);
    let tabla = document.getElementById('table');
    let newRow = tabla.insertRow(-1);
    let newCell= newRow.insertCell(0);

    newCell = newRow.insertCell(1);
    newCell.textContent = transFormData.get("nombre");
    newCell = newRow.insertCell(2);
    newCell.textContent = transFormData.get("apellidos");
    newCell = newRow.insertCell(3);
    newCell.textContent = transFormData.get("curso");
    newCell = newRow.insertCell(4);
    newCell.textContent = transFormData.get("email");

})


  