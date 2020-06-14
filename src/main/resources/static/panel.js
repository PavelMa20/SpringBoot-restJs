$(document).ready(function () {
    ajaxLogin();

    function ajaxLogin() {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/admin/panel",
            success: function (result) {
                var dta = document.createElement("P");
                dta.innerHTML = "<style>p{ color: white; padding-top: 5px;size: auto }</style>";
                var textDta = document.createTextNode(result.email + " with roles: " + result.roles[0].roleName);
                dta.appendChild(textDta);
                document.getElementById("panelInfo").appendChild(dta);
            }
        })
    }
})