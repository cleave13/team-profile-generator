const docStart =
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>`

function managerCard(obj) {
    const content = 
    `<div class="card bg-primary m-5" style="width: 18rem;">
        <div class="card-header">
            ${obj.role + ': ' + obj.fullName}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${obj.empId}</li>
            <li class="list-group-item">Email: ${obj.email}Email: <a href = "mailto: ${obj.email}">${obj.email}</a></li>
            <li class="list-group-item">Office Number: ${obj.officeNum}</li>
        </ul>
    </div>`

    return content;
}

function engineerCard(obj) {
    const content = 
    `<div class="card bg-secondary m-5" style="width: 18rem;">
        <div class="card-header">
            ${obj.role + ': ' + obj.fullName}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${obj.empId}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${obj.email}">${obj.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${obj.github}" target="_blank">${obj.github}</a></li>
        </ul>
    </div>`

    return content;
}

function internCard(obj) {
    const content = 
    `<div class="card bg-info m-5" style="width: 18rem;">
        <div class="card-header">
            ${obj.role + ': ' + obj.fullName}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${obj.empId}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${obj.email}">${obj.email}</a></li>
            <li class="list-group-item">School: ${obj.school}</li>
        </ul>
    </div>`

    return content;
}

const docEnd =
`</body>
</html>`

module.exports = { docStart, managerCard, internCard, engineerCard, docEnd }