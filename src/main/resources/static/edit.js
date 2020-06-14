$(document).ready(function () {
    $(document).delegate('.edit-button', 'click', function() {
        var parent = $(this).parent().parent();
        var id = parent.children()[0].childNodes[0].nodeValue;
             $("#eid").val(id) ;

              ajaxPerson();
              editPerson();
        $('#table-rows tbody').html('');
    })
});

function ajaxPerson() {
   var formData = {
       id : $("#eid").val()
   }

    $.ajax({
        type : "POST",
        url : "http://localhost:8080/admin/get",
        contentType: "application/json",
        data: JSON.stringify(formData.id),
        dataType: 'json',
        success : function(result) {
         //   var person = JSON.parse(result);
            $('#efirstname').val(result.givenName);
            $('#esurname').val(result.surName);
            $('#eemail').val(result.email);
            $('#epassword').val(result.password);
            $('#eage').val(result.age);
            $('#eroles').val(result.roles);

        },
        error : function(e) {
            alert(e.message())
            console.log("ERROR: ", e);
        }
    });
}
function editPerson() {
    $("#editform").submit(function (event) {
        event.preventDefault();
        ajaxEditPost();
    });
    function ajaxEditPost() {
        var formData = {
            id : $("#eid").val(),
            givenName : $("#efirstname").val(),
            surName : $("#esurname").val(),
            email :  $("#eemail").val(),
            password : $("#epassword").val(),
            age : $("#eage").val(),
            roles : [$("#eroles").val()]
        }
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : "http://localhost:8080/admin/update",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function() {
            },
         /*   error : function(e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }*/
        });
    }
}
