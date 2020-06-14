$(document).ready(function () {

    ajaxUser();
     function ajaxUser() {
         $.ajax({
             type: "GET",
             url: "http://localhost:8080/admin/panel",
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

             }
         })
     }

});