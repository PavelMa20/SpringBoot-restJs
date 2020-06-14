$( document ).ready(function() {

    $("#userform").submit(function (event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost() {
        // PREPARE FORM DATA
        var formData = {

            givenName : $("#givenname").val(),
            surName : $("#surname").val(),
            email :  $("#email").val(),
            password : $("#password").val(),
            age : $("#age").val(),
            roles : [$("#roles").val()]
        }
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : "http://localhost:8080/admin/add",
            data : JSON.stringify(formData),
            dataType : 'json',
          success : function(result) {
                console.log(result);
            },
         /*  error : function(e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }*/
        });
        resetData();
        $('#table-rows tbody').html('');

    }
    function resetData(){
        $("#givenname").val("");
        $("#surname").val("");
        $("#email").val("");
        $("#password").val("");
        $("#age").val("");
        $("#roles").val("");
    }
})
