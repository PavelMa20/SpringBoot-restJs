$(document).ready(function () {

    ajaxAdmin();
})
    function ajaxAdmin() {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/admin/all",
            success: function (result) {
           //     $('#table-rows tbody').cleanData();
                $.each(result, function (i, person) {

                    var personRow = '<tr>' +
                        '<td>' + person.id + '</td>' +
                        '<td>' + person.givenName + '</td>' +
                        '<td>' + person.surName + '</td>' +
                        '<td>' + person.email + '</td>' +
                        '<td>' + person.age + '</td>' +
                        '<td>' + person.roles[0].roleName + '</td>' +
                        '<td><button class=\'edit-button\' id=' + 'edit' + person.id + ' data-toggle="modal" data-target="#editModel">Edit</button></td>' +
                        '<td><button class=\'delete-button\' id=' + 'delete' + person.id + ' data-toggle="modal" data-target="#deleteModel">Delete</button></td>' +
                        '</tr>';

                    $('#table-rows tbody').append(personRow);

                });

                $("#table-rows tbody tr:odd").addClass("info");
                $("#table-rows tbody tr:even").addClass("success");
            },
            error: function (e) {
                alert("ERROR: ", e);
                console.log("ERROR: ", e);
            }
        });
    }





