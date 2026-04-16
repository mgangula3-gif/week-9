function loadUsers() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "users.xml", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            displayUsers(this);
        }
    };
}

function displayUsers(xml) {
    const xmlDoc = xml.responseXML;
    const users = xmlDoc.getElementsByTagName("user");

    let table = "<table><tr><th>ID</th><th>Name</th><th>Role</th><th>Dept</th><th>Email</th></tr>";

    for (let i = 0; i < users.length; i++) {
        table += "<tr>" +
            "<td>" + users[i].getElementsByTagName("id")[0].textContent + "</td>" +
            "<td>" + users[i].getElementsByTagName("name")[0].textContent + "</td>" +
            "<td>" + users[i].getElementsByTagName("role")[0].textContent + "</td>" +
            "<td>" + users[i].getElementsByTagName("department")[0].textContent + "</td>" +
            "<td>" + users[i].getElementsByTagName("email")[0].textContent + "</td>" +
            "</tr>";
    }

    table += "</table>";
    document.getElementById("output").innerHTML = table;
}


function loadBooks() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "books.xml", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            displayBooks(this);
        }
    };
}

function displayBooks(xml) {
    const xmlDoc = xml.responseXML;
    const books = xmlDoc.getElementsByTagName("book");

    let table = "<table><tr><th>Title</th><th>Author</th><th>ISBN</th><th>Publisher</th><th>Edition</th><th>Price</th></tr>";

    for (let i = 0; i < books.length; i++) {
        table += "<tr>" +
            "<td>" + books[i].getElementsByTagName("title")[0].textContent + "</td>" +
            "<td>" + books[i].getElementsByTagName("author")[0].textContent + "</td>" +
            "<td>" + books[i].getElementsByTagName("isbn")[0].textContent + "</td>" +
            "<td>" + books[i].getElementsByTagName("publisher")[0].textContent + "</td>" +
            "<td>" + books[i].getElementsByTagName("edition")[0].textContent + "</td>" +
            "<td>" + books[i].getElementsByTagName("price")[0].textContent + "</td>" +
            "</tr>";
    }

    table += "</table>";
    document.getElementById("output").innerHTML = table;
}
