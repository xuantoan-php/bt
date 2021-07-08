var emailOK = true;
var phoneOK = true;

function checkdata_email() {
    var email = $("#txtemail").val();
    $.ajax({
        url: 'cv/checkdata_email',
        type: 'POST',
        dataType: "json",
        data: {
            email: email,
        },
        success: function(data) {
            if (data.result == true) {
                emailOK = false;
            } else {
                emailOK = true;
            }
        }
    });
}

function checkdata_phone() {
    var phone = $("#txtphone").val();
    $.ajax({
        url: 'cv/checkdata_phone',
        type: 'POST',
        dataType: "json",
        data: {
            phone: phone,
        },
        success: function(data) {
            if (data.result == true) {
                phoneOK = false;
            } else {
                phoneOK = true;
            }
        }
    });
}

$(document).ready(function() {
    $("#frm_sign_up").submit(function() {
        var hoten = $("#txthoten").val();
        var password = $("#txtmatkhau").val();
        var email = $("#txtemail").val();
        var phone = $("#txtphone").val();
        var checkpass = $("#txtrepass").val();
        var confirm = document.getElementById('confirm').checked;
        var flag = true;
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

        if (hoten == '' || !/^[a-zA-Z0-9]+$/.test(hoten)) {
            alert("Vui lòng kiểm tra lại họ tên");
            flag = false;
        } else if (password == '' || password.length < 8 || password != checkpass) {
            flag = false;
            alert("Vui lòng kiểm tra lại mật khẩu");
        } else if (phone != '' && !/^[0-9]{10}$/.test(phone)) {
            flag = false;
            alert("Vui lòng kiểm tra lại Phone và phone phải 10 số");
        } else if (!mailformat.test(email)) {
            flag = false;
            alert("Vui lòng kiểm tra lại Email");
        }

        if (emailOK == true) {

        } else {
            emailOK == false;
            alert("email đã tồn tại");
            flag = false;
        }

        if (phoneOK == true) {

        } else {
            phoneOK == false;
            alert("phone đã tồn tại");
            flag = false;
        }

        if (confirm == true) {

        } else {
            alert("Bạn chưa đồng ý với điều khoản sử dụng dịch vụ");
            flag = false;
        }
        return flag;
    });

});