$(document).ready(function () {
    $(document).delegate('.delete-button', 'click', function() {
        var parent = $(this).parent().parent();
        var id = parent.children()[0].childNodes[0].nodeValue;
        $("#did").val(id) ;

        ajaxDeletePerson();
        deletePerson();
        $('#table-rows tbody').html('');

    })
});

function ajaxDeletePerson() {
    var formData = {
        id : $("#did").val()
    }

    $.ajax({
        type : "POST",
        url : "http://localhost:8080/admin/get",
        contentType: "application/json",
        data: JSON.stringify(formData.id),
        dataType: 'json',
        success : function(result) {
            $('#dfirstname').val(result.givenName);
            $('#dsurname').val(result.surName);
            $('#demail').val(result.email);
            $('#dage').val(result.age);
            $('#droles').val(result.roles[0].roleName);

        },
        error : function(e) {
            alert(e.message())
            console.log("ERROR: ", e);
        }
    });
}
function deletePerson() {
    $("#deleteForm").submit(function (event) {
        event.preventDefault();
        var formData = {
            id : $("#did").val()
        }
        $.ajax({
            type : "POST",
            url : "http://localhost:8080/admin/delete",
            contentType: "application/json",
            data: JSON.stringify(formData.id),
            dataType: 'json',
            success : function(result) {
                document.getElementById("table-rows1").deleteRow($("#did").val());
            },
         /*   error : function(e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }*/
        });
    });

}