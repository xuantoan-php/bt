//load dữ liệu vào data
$(document).ready(function() {
    $("#submit1").click(function() {

        $.ajax({
            url: 'insert.php',
            type: 'POST',
            data: {
                "vitri": $("input[name=vitri]").val(),
                "soluong": $("input[name=soluong]").val(),
                "hoahong": $("input[name=hoahong]").val(),
                "thuviec": $("input[name=thuviec]").val(),
                "mota": $("textarea[name=mota]").val(),
                "yeucau": $("textarea[name=yeucau]").val(),
                "quyenloi": $("textarea[name=quyenloi]").val(),
                "hoso": $("textarea[name=hoso]").val(),
                "birthday": $("input[name=birthday]").val(),
                "nguoilienhe": $("input[name=nguoilienhe]").val(),
                "diachi": $("input[name=diachi]").val(),
                "sdt": $("input[name=sdt]").val(),
                "email": $("input[name=email]").val(),
            },
            success: function(data) {
                alert(data);
            }
        });
    });
    $("#submit2").click(function() {

        location.reload();
    });
});

//click
$(document).ready(function() {
    $(".menu_item1").click(function() {
        $(".dropdown").slideToggle("slow");
        $(".dropdown_up1").slideToggle("slow");
        $(".menu_link2_img8").slideToggle("slow");
        $(".menu_link2_img8").addClass("dropdown_down");
        $(".menu_item1").addClass("dropdown_css");
    });
})