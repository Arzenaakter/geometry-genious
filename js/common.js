function displayResult(count, triangleName, area, convert){
    
    const tableContent = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${triangleName}</td>
    <td>${area} cm<sup>2</sup></td>
    <td><button  style="background-color: blue; padding: 8px; color: white; font-weight:bold;"}> Convert to m<sup>2</sup></button></td>

    `;
    tableContent.append(tr);
}
