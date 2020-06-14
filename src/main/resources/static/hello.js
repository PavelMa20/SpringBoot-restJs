$(document).ready(function () {
    ajaxHelloUser();
})
function ajaxHelloUser() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/hello/person",
        success: function (result) {

            var userRow = '<tr>' +
                '<td>' + result.id + '</td>' +
                '<td>' + result.givenName + '</td>' +
                '<td>' + result.surName + '</td>' +
                '<td>' + result.email + '</td>' +
                '<td>' + result.age + '</td>' +
                '<td>' + result.roles[0].roleName + '</td>' +
                '</tr>';
            $('#table-rows1 tbody').append(userRow);

            var dta = document.createElement("P");
            dta.innerHTML = "<style>p{ color: white; padding-top: 5px;size: auto }</style>";
            var textDta = document.createTextNode(result.email + " with roles: " + result.roles[0].roleName);
            dta.appendChild(textDta);
            document.getElementById("panelInfo").appendChild(dta);
        }
    })
}