// toan-up-img

function blockk() {
    document.getElementById("up_img").style.display = "block";
}

function hidenn() {
    document.getElementById("up_img").style.display = "none";
}

$('.btn_download').click(function() {
    $('#download_cv').show();
});

$('.download_cancel').click(function() {
    $('#download_cv').hide();
});

$('.download_close').click(function() {
    $('#download_cv').hide();
});

$(document).ready(function() {
    $("#downloadPDF").click(function() {
        pdfdoc.fromHTML($('#content2').html(), 10, 10, {
            width: 110,
            elementHandlers: specialElementHandlers
        });
        pdfdoc.save('First.pdf');

    });
});
// var doc = new jsPDF();
// var specialElementHandlers = {
//     '#editor': function(element, renderer) {
//         return true;
//     }
// };
// $('#downloadPDF').click(function() {
//     doc.fromHTML($('#content2').html(), 15, 15, {
//         'width': 170,
//         'elementHandlers': specialElementHandlers
//     });
//     doc.save('sample-file.pdf');
//     // domtoimage.toPng(document.getElementById('content2'))
//     //     .then(function(blob) {
//     //         var pdf = new jsPDF('l', 'pt', [$('#content2').width(), $('#content2').height()]);

//     //         pdf.addImage(blob, 'PNG', 0, 0, $('#content2').width(), $('#content2').height());
//     //         pdf.save("test.pdf");

//     //         that.options.api.optionsChanged();
//     //     });
// });

// cropper

$(function() {
    'use strict';

    var console = window.console || { log: function() {} };
    var URL = window.URL || window.webkitURL;
    var $image = $('#filepreview');
    var $download = $('.vi-download');
    var $dataX = $('#dataX');
    var $dataY = $('#dataY');
    var $dataHeight = $('#dataHeight');
    var $dataWidth = $('#dataWidth');
    var $dataRotate = $('#dataRotate');
    var $dataScaleX = $('#dataScaleX');
    var $dataScaleY = $('#dataScaleY');
    var options = {
        aspectRatio: 16 / 9,
        preview: '.img-edit-preview',
    };
    var originalImageURL = $image.attr('src');
    var uploadedImageName = 'cropped.jpg';
    var uploadedImageType = 'image/jpeg';
    var uploadedImageURL;

    if (!$.isFunction(document.createElement('canvas').getContext)) {
        $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
        $('button.btn-save-image').prop('disabled', true);
    }
    $('.btn-remove-image').click(function() {
        $image.cropper('destroy').cropper(options);
        $('.imagesEditor').hide();
        $('.editorChooseImage').show();
    });
    $('.btn-close-img').click(function() {
        $('#up_img').hide();
    });

    var base_url = "http://localhost:8891";
    $('.btn-save-image').click(function() {
        if ($(this).hasClass('disabled')) {} else {
            var dataX = $dataX.val();
            var dataY = $dataY.val();
            var dataHeight = $dataHeight.val();
            var dataWidth = $dataWidth.val();
            var dataRotate = $dataRotate.val();
            var dataScaleX = $dataScaleX.val();
            var dataScaleY = $dataScaleY.val();
            var baseW = $dataWidth.val();
            var baseH = $dataHeight.val();
            var cropper = $image.data('cropper');
            var result = $image.cropper('getCroppedCanvas', {
                width: baseW,
                height: baseH,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 4000,
                maxHeight: 4000,
                fillColor: '#fff',
                imageSmoothingEnabled: true,
                imageSmoothingQuality: 'high'
            });
            var img = result.toDataURL(uploadedImageType);
            $.ajax(base_url + '/cv/saveimg', {
                method: "POST",
                data: { img64: img },
                cache: false,
                // dataType : 'json',
                success: function(img) {
                    var b = base_url + "/" + img.trim();
                    $('.upimg').attr('src', b);
                    console.log('Upload success');
                },
                error: function() {
                    console.log('Upload error');
                }
            });
            $('#up_img').hide();
        }
    });
    $('.upimg').click(function() {
        $image.cropper('destroy').cropper(options);
        $('#imageEditorWraper').show();
    });

    // Cropper
    $image.on({
        ready: function(e) {
            // console.log(e.type);
        },
        cropstart: function(e) {
            // console.log(e.type, e.detail.action);
        },
        cropmove: function(e) {
            // console.log(e.type, e.detail.action);
        },
        cropend: function(e) {
            // console.log(e.type, e.detail.action);
        },
        crop: function(e) {
            // console.log(e.type);
        },
        zoom: function(e) {
            // console.log(e.type, e.detail.ratio);
        }
    }).cropper(options);

    // Methods
    $('.docs-buttons').on('click', '[data-method]', function() {
        var $this = $(this);
        var data = $this.data();
        var cropper = $image.data('cropper');
        var cropped;
        var $target;
        var result;

        if ($this.prop('disabled') || $this.hasClass('disabled')) {
            return;
        }

        if (cropper && data.method) {
            data = $.extend({}, data);

            if (typeof data.target !== 'undefined') {
                $target = $(data.target);

                if (typeof data.option === 'undefined') {
                    try {
                        data.option = JSON.parse($target.val());
                    } catch (e) {
                        console.log(e.message);
                    }
                }
            }

            cropped = cropper.cropped;

            switch (data.method) {
                case 'rotate':
                    if (cropped && options.viewMode > 0) {
                        $image.cropper('clear');
                    }

                    break;
            }

            result = $image.cropper(data.method, data.option, data.secondOption);

            switch (data.method) {
                case 'rotate':
                    if (cropped && options.viewMode > 0) {
                        $image.cropper('crop');
                    }

                    break;

                case 'scaleX':
                case 'scaleY':
                    $(this).data('option', -data.option);
                    break;

                case 'getCroppedCanvas':
                    if (result) {
                        $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);

                        if (!$download.hasClass('disabled')) {
                            download.download = uploadedImageName;
                            $download.attr('href', result.toDataURL(uploadedImageType));
                        }
                    }

                    break;
                case 'destroy':
                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                        uploadedImageURL = '';
                        $image.attr('src', originalImageURL);
                    }

                    break;
            }

            if ($.isPlainObject(result) && $target) {
                try {
                    $target.val(JSON.stringify(result));
                } catch (e) {
                    console.log(e.message);
                }
            }
        }
    });

    // Keyboard
    $(document.body).on('keydown', function(e) {
        if (e.target !== this || !$image.data('cropper') || this.scrollTop > 300) {
            return;
        }

        switch (e.which) {
            case 37:
                e.preventDefault();
                $image.cropper('move', -1, 0);
                break;

            case 38:
                e.preventDefault();
                $image.cropper('move', 0, -1);
                break;

            case 39:
                e.preventDefault();
                $image.cropper('move', 1, 0);
                break;

            case 40:
                e.preventDefault();
                $image.cropper('move', 0, 1);
                break;
        }
    });

    // Import image
    var $inputImage = $('#inputImage');

    if (URL) {
        $inputImage.change(function() {
            var files = this.files;
            var file;

            if (!$image.data('cropper')) {
                return;
            }

            if (files && files.length) {
                file = files[0];

                if (/^image\/\w+$/.test(file.type)) {
                    uploadedImageName = file.name;
                    uploadedImageType = file.type;

                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                    }

                    uploadedImageURL = URL.createObjectURL(file);
                    $image.cropper('destroy').attr('src', uploadedImageURL).cropper(options);
                    $inputImage.val('');
                } else {
                    window.alert('Please choose an image file.');
                }
            }
        });
    } else {
        $inputImage.prop('disabled', true).parent().addClass('disabled');
    }
});
var selectedElement = null;

function format(command, value) {
    document.execCommand(command, false, value);
}
// function setFocus(e) {
// 		// $(this).data('editor').focus();
// 		  range = window.getSelection().getRangeAt(0);
// 		  console.log(range.startContainer.parentNode);
// }
// console.log(userSelection.focusOffset);
// 	// selectedElement.style.outline = 'none';

// selectedElement = window.getSelection().focusNode.parentNode;
// // selectedElement.style.outline = '1px solid #f00';
// console.log(selectedElement);
// selectedElement = window.getSelection().toString();
// console.log(selectedElement);
// selection1 = window.getSelection().anchorNode.parentNode;
// selection2 = window.getSelection().toString();

// console.log(selection2);
// 	if (selection) {
//     for (i=0; i<selection.rangeCount; i++)  {
//         range = selection.getRangeAt(i)
//         if (range) {
//             console.log(range);
//         }
//     }
// }

// document.onkeyup = setFocus;
// document.onmouseup = setFocus;
$(document).ready(function() {
    $("#fonts").change(function() {
        let fonts = $("#fonts option:selected").val();
        $(".cv-content-editor").css('font-family', fonts);
    });
    let flag = 0;
    $(document).on('click', '.details-field-input', function(elem) { // huy edit 17/6
        $(this).addClass('check_editor');
        if (document.queryCommandState('bold') == true) {
            $('.bold-button').parent().addClass('btn_active');
        } else {
            $('.bold-button').parent().removeClass('btn_active');
        }
        if (document.queryCommandState('italic') == true) {
            $('.italic-button').parent().addClass('btn_active');
        } else {
            $('.italic-button').parent().removeClass('btn_active');
        }
        if (document.queryCommandState('underline') == true) {
            $('.underline-button').parent().addClass('btn_active');
        } else {
            $('.underline-button').parent().removeClass('btn_active');
        }
        if (document.queryCommandState('justifyCenter') == true) {
            $('.fa-align-center').parent().addClass('btn_active');
        } else {
            $('.fa-align-center').parent().removeClass('btn_active');
        }
        if (document.queryCommandState('justifyLeft') == true) {
            $('.fa-align-left').parent().addClass('btn_active');
        } else {
            $('.fa-align-left').parent().removeClass('btn_active');
        }
        if (document.queryCommandState('justifyRight') == true) {
            $('.fa-align-Right').parent().addClass('btn_active');
        } else {
            $('.fa-align-Right').parent().removeClass('btn_active');
        }
        if (document.queryCommandState('justifyFull') == true) {
            $('.fa-align-justify').parent().addClass('btn_active');
        } else {
            $('.fa-align-jusify').parent().removeClass('btn_active');
        }
        if (document.queryCommandState('insertOrderedList') == true) {
            $('.fa-list-ol').parent().addClass('btn_active');
        } else {
            $('.fa-list-ol').parent().removeClass('btn_active');
        }
        if (document.queryCommandState('insertUnorderedList') == true) {
            $('.fa-list-ul').parent().addClass('btn_active');
        } else {
            $('.fa-list-ul').parent().removeClass('btn_active');
        }

        // if(document.queryCommandState('bold')==true){ 
        //     $('.bold-button').parent().addClass('btn_active');
        // }
        $(".text-align-button").removeClass('disabled');
        $(".text-align-button").removeClass('disabled');
        $(".text-align-button").removeClass('disabled');
        $(".text-list-button").removeClass('disabled');
        $(".text-list-button").removeClass('disabled');
        $(".text-decoration_1B").removeClass('disabled');
        $(".text-decoration_1B").removeClass('disabled');
        $(".text-decoration_1B").removeClass('disabled');
        $(".undo-button").removeClass('disabled');
        $(".redo-button").removeClass('disabled');
        flag = 1;
    });
    $(document).on('mousedown', '.text-decoration_1B', function(e) { // huy edit 17/6
        if ($(this).children(".bold-button").attr('class')) {
            let class_button = $(this).attr('class');
            if (class_button.indexOf('disabled') == -1) {
                $(this).toggleClass('btn_active');
                document.execCommand('bold', false);
            }
        }
        if ($(this).children(".italic-button").attr('class')) {
            let class_button = $(this).attr('class');
            if (class_button.indexOf('disabled') == -1) {
                $(this).toggleClass('btn_active');
                document.execCommand('italic', false);
            }
        }
        if ($(this).children(".underline-button").attr('class')) {
            let class_button = $(this).attr('class');
            if (class_button.indexOf('disabled') == -1) {
                $(this).toggleClass('btn_active');
                document.execCommand('underline', false);
            }
        }
        return false;
    });

    $(document).on('mousedown', '.text-align-button', function(e) { // huy edit 17/6
        if ($(this).children(".fa-align-center").attr('class')) {
            let class_button = $(this).attr('class');
            if (class_button.indexOf('disabled') == -1) {
                $(this).addClass('btn_active');
                console.log(class_button);
                $('.text-align-button').not(this).removeClass("btn_active");
                if (class_button.indexOf('disabled') == -1) {
                    document.execCommand('justifyCenter', false);
                }
            }
        }
        if ($(this).children(".fa-align-right").attr('class')) {
            let class_button = $(this).attr('class');
            if (class_button.indexOf('disabled') == -1) {
                $(this).addClass('btn_active');
                $('.text-align-button').not(this).removeClass("btn_active");
                if (class_button.indexOf('disabled') == -1) {
                    document.execCommand('justifyRight', false);
                }
            }
        }
        if ($(this).children(".fa-align-left").attr('class')) {
            let class_button = $(this).attr('class');
            if (class_button.indexOf('disabled') == -1) {
                $(this).addClass('btn_active');
                $('.text-align-button').not(this).removeClass("btn_active");
                if (class_button.indexOf('disabled') == -1) {
                    document.execCommand('justifyLeft', false);
                }
            }
        }
        if ($(this).children(".fa-align-justify").attr('class')) {
            let class_button = $(this).attr('class');
            if (class_button.indexOf('disabled') == -1) {
                $(this).addClass('btn_active');
                $('.text-align-button').not(this).removeClass("btn_active");
                if (class_button.indexOf('disabled') == -1) {
                    document.execCommand('justifyFull', false);
                }
            }
        }
        // $('.check_editor').focus();
        return false;
    });
    $(".text-list-button").on("mousedown", function(e) { // huy edit 17/6
        if ($(this).children(".fa-list-ol").attr('class')) {
            let class_button = $(this).attr('class');
            if (class_button.indexOf('disabled') == -1) {
                $(this).addClass('btn_active');
                $('.text-list-button').not(this).removeClass("btn_active");
                if (class_button.indexOf('disabled') == -1) {
                    document.execCommand('insertOrderedList', false);
                }
            }
        }
        if ($(this).children(".fa-list-ul").attr('class')) {
            let class_button = $(this).attr('class');
            if (class_button.indexOf('disabled') == -1) {
                $(this).addClass('btn_active');
                $('.text-list-button').not(this).removeClass("btn_active");
                if (class_button.indexOf('disabled') == -1) {
                    document.execCommand('insertUnorderedList', false);
                }
            }
        }
        return false;
    });

    $(document).on('click', '.undo-button', function(e) { // huy edit 17/6
        let class_button = $(this).attr('class');
        if (class_button.indexOf('disabled') == -1) {
            document.execCommand('undo', false, null);
        }
    });
    $(document).on('click', '.redo-button', function(e) { // huy edit 17/6
        if (class_button.indexOf('disabled') == -1) {
            document.execCommand('redo', true);
        }
    });
    // $(".TextAlignment__button___ONXrU").on( "mousedown", function (e) {
    // 	return false;
    // });
    $(document).click(function(event) {
        var $target = $(event.target);
        if (!$target.closest('.CvSpacingPopup__cv-spacing-popup___2sxDU').length && !$target.closest('.CvSpacing__button___bHjcK').length) {
            $('.cv-spacing').find('.CvSpacingPopup__cv-spacing-popup___2sxDU').removeClass('show_block');
        }
        if (!$target.closest('.LeftDrawer__desktop-container___1tcP6').length && !$target.closest('.ColorScheme__button___3G7l1').length) {
            $('.LeftDrawer__desktop-container___1tcP6').removeClass('show_block');
            $(".tip-cv").show();
        }
        if (!$target.closest('.CvLanguage__button___4OmUI').length && !$target.closest('.CvLanguage__container___2xR8o').length) {
            $('.CvLanguage__container___2xR8o ').removeClass('show_block');
        }
        // if(!$target.closest('.h_container').length) {
        // 	$('.h_blockControls').hide();	
        // }   
        if (!$target.closest('.q-show-menu').length && !$target.closest('#menu_header').length) {
            $('#menu_header').hide();
        }
        if (!$target.closest('#notifications_btn').length && !$target.closest('.notification-container').length) {
            $('.notification-container').fadeOut(100);
            $('.notification-container').removeClass('show_noti');
        }

        let btn_align = "TextAlignment__button___ONXrU";

        let text_field = $(event.target).closest(".details-field-input").length;
        let closest = $(event.target).closest(".text-align-button").length;
        let closest2 = $(event.target).closest(".text-list-button").length;
        let closest3 = $(event.target).closest(".text-decoration_1B").length;
        let closest4 = $(event.target).closest(".undo-button").length;
        let closest5 = $(event.target).closest(".redo-button").length;
        // console.log('closest2',closest2);
        // console.log(flag);
        if (!$target.closest('#menucontainer').length &&
            $('#menucontainer').is(":visible")) {
            $('#menucontainer').hide();
        }
        if (text_field == 0 && flag != 0 && closest == 0 && closest2 == 0 && closest3 == 0 && closest4 == 0 && closest5 == 0) {
            console.log('122222222');
            $(".text-align-button").addClass('disabled');
            $(".text-list-button").addClass('disabled');
            $(".text-decoration_1B").addClass('disabled');
            $(".undo-button").addClass('disabled');
            $(".redo-button").addClass('disabled');
            $(".text-decoration_1B").removeClass('btn_active');
            $(".text-align-button").removeClass('btn_active');
            $(".text-list-button").removeClass('btn_active');
            flag = 0;
        } else if ((closest !== 0 || closest2 !== 0 || closest3 !== 0) && flag == 1) {
            $(".text-align-button").removeClass('disabled');
            $(".text-list-button").removeClass('disabled');
            $(".text-decoration_1B").removeClass('disabled');
        }
        // return false;
    });
    $(document).on('input', '#line_height', function() {
        let value = $(this).val();
        value = parseFloat(value);
        value = value.toFixed(2);
        $(this).attr('value', value);
        let res = value.replace(".", "");
        $(this).attr('style', '--value:' + value + '; --min:1.15; --max:1.75'); // $(this).attr('style') = '--value:1.15; --min:1.15; --max:1.75';
        let list_class_name = $('.cv-content-editor').attr('class');
        let class_add = 'root-line-height-' + res;
        let class_remove = '';
        let arr_class = list_class_name.split(' ');
        for (let i = 0; i < arr_class.length; i++) {
            if (arr_class[i].indexOf("root-line-height") != -1) {
                class_remove = arr_class[i];
            }
        }
        $('.cv-content-editor').removeClass(class_remove).addClass(class_add);
    });
    $(document).on('input', '#layout_margin', function() {
        let value = $(this).val();
        $(this).attr('value', value);
        $(this).attr('style', '--value:' + value + '; --min:0; --max:100'); // $(this).attr('style') = '--value:1.15; --min:1.15; --max:1.75';
        let list_class_name = $('.cv-content-editor').attr('class');
        let class_add = 'layout-margin-' + value;
        let class_remove = '';
        let arr_class = list_class_name.split(' ');
        for (let i = 0; i < arr_class.length; i++) {
            if (arr_class[i].indexOf("layout-margin") != -1) {
                class_remove = arr_class[i];
            }
        }
        $('.cv-content-editor').removeClass(class_remove).addClass(class_add);
    });
    $(document).on('input', '#font_size', function() {
        let value = $(this).val();
        value = parseFloat(value);
        value = value.toFixed(1);
        $(this).attr('value', value);
        let res = value.replace(".", "");
        $(this).attr('style', '--value:' + value + '; --min:12; --max:17'); // $(this).attr('style') = '--value:1.15; --min:1.15; --max:1.75';
        let list_class_name = $('.cv-content-editor').attr('class');
        let class_add = 'root-font-size-' + res;
        let class_remove = '';
        let arr_class = list_class_name.split(' ');
        for (let i = 0; i < arr_class.length; i++) {
            if (arr_class[i].indexOf("root-font-size-") != -1) {
                class_remove = arr_class[i];
            }
        }
        $('.cv-content-editor').removeClass(class_remove).addClass(class_add);
        event.stopPropagation();
    });
    $(document).on('click', '.Slider__left-btn___3VWir', function() {
        let input = $(this).siblings('.Slider__slider-wrapper___ay6Aj').find('input');
        let step = input.attr('step');
        let min = input.attr('min');
        let max = input.attr('max');
        let id_input = input.attr('id');
        console.log(id_input);
        let new_value = 0;
        let value = input.val();
        if (value > min) {
            console.log('1234');
            let class_demo = '';
            new_value = parseFloat(value - step);
            if (id_input == 'font_size') {
                new_value = new_value.toFixed(1);
                class_demo = "root-font-size-";
            } else if (id_input == 'line_height') {
                new_value = new_value.toFixed(2);
                class_demo = "root-line-height-";
            } else if (id_input == 'layout_margin') {
                class_demo = "layout-margin-";
            }
            input.val(new_value);
            input.attr('value', new_value);
            input.attr('style', '--value:' + new_value + '; --min:' + min + '; --max:' + max);
            let string_new = new_value.toString();
            let res = string_new.replace(".", "");
            let list_class_name = $('.cv-content-editor').attr('class');
            let class_add = class_demo + res;
            let class_remove = '';
            let arr_class = list_class_name.split(' ');
            for (let i = 0; i < arr_class.length; i++) {
                if (arr_class[i].indexOf(class_demo) != -1) {
                    class_remove = arr_class[i];
                }
            }
            $('.cv-content-editor').removeClass(class_remove).addClass(class_add);
        }
        return false;
    });
    $(document).on('click', '.Slider__right-btn___1M8IP', function() {
        let input = $(this).siblings('.Slider__slider-wrapper___ay6Aj').find('input');
        let step = parseFloat(input.attr('step'));
        let min = input.attr('min');
        let max = input.attr('max');
        let id_input = input.attr('id');
        let new_value = 0;
        let value = parseFloat(input.val());
        if (value < max) {
            console.log('1234');
            let class_demo = '';
            new_value = value + step;
            if (id_input == 'font_size') {
                new_value = new_value.toFixed(1);
                class_demo = "root-font-size-";
            } else if (id_input == 'line_height') {
                new_value = new_value.toFixed(2);
                class_demo = "root-line-height-";
            } else if (id_input == 'layout_margin') {
                class_demo = "layout-margin-";
            }
            input.val(new_value);
            input.attr('value', new_value);
            input.attr('style', '--value:' + new_value + '; --min:' + min + '; --max:' + max);
            let string_new = new_value.toString();
            let res = string_new.replace(".", "");
            console.log(value);
            let list_class_name = $('.cv-content-editor').attr('class');
            let class_add = class_demo + res;
            let class_remove = '';
            let arr_class = list_class_name.split(' ');
            for (let i = 0; i < arr_class.length; i++) {
                if (arr_class[i].indexOf(class_demo) != -1) {
                    class_remove = arr_class[i];
                }
            }
            $('.cv-content-editor').removeClass(class_remove).addClass(class_add);
        }
        return false;
    });
    $(".pull-tips").hide();
    $(document).on('click', '.ColorScheme__button___3G7l1', function() {
        $('.LeftDrawer__desktop-container___1tcP6').toggleClass('show_block');
        $(".tip-cv").toggleClass('move_tip');
        $(".pull-tips").toggle();
    });
    $(document).on('click', '.pull-tips', function() {
        $(".tip-cv").toggleClass('move_tip');
        $(this).toggle();
        $(".TipExampleContainer__right___3hs5j").toggleClass('tip_rotate');
    });
    $(document).on('click', '.color-scheme-option', function() {
        $(this).toggleClass('ColorOptions__active___QUwTd');
        $(".color-scheme-option").not(this).removeClass('ColorOptions__active___QUwTd');
        let color_pr = $(this).find('.primary-color-option').css("background-color");
        let color_sec = $(this).find('.secondary-color-option').css("background-color");
        // $('.bg-pr').css('background-color',color_pr);
        // $('.bg-second').css('background-color',color_sec);
        // $('.text-pr').css('color',color_pr);
        $.ajax({
            url: "/cv/change_color",
            type: "POST",
            dataType: "json",
            data: {
                color_pr: color_pr,
                color_sec: color_sec,
            },
            success: function(data) {

            }
        });
        // });
        // $('.text-second').css('color',color_sec);
        // 	$('.ColorScheme__icon-color___1OK5Q').each(function( index ){
        // 	if($(this).index() == 0){
        // 		$(this).css('background-color',color_pr);
        // 		window.loca

        // 	}
        // 	else{
        // 		$(this).css('background-color',color_sec);
        // 	}
        // });
        window.location.reload();

        // console.log(color_option);
    });
    $(document).on('click', '.CvLanguage__button___4OmUI', function() {
        $('.CvLanguage__container___2xR8o').toggleClass('show_block');

    })
    $(document).on('click', '.lang-option', function() {
        $(this).addClass('CvLanguage__active___1DlHm');
        var language = $(this).attr('value');
        console.log(language);
        $('.lang-option').not(this).removeClass('CvLanguage__active___1DlHm');
        $.ajax({
            url: "/cv/change_language",
            type: "POST",
            dataType: "json",
            data: {
                language: language,
            },
            success: function(data) {

            }
        });
        window.location.reload();
        // var language_name = $(this).find('.CvLanguage__option-label___2XJBS').text();
        // var language = '';
        // if(language_name == 'Tiếng Anh'){
        // 	var language = language_eng;
        // }
        // else if(language_name == 'Tiếng Việt'){
        // 	var language = content;
        // }
        // var experience  = $(".experience .title-introduce");
        // var project  = $(".project .title-introduce");
        // var education  = $(".education .title-introduce");
        // var award  = $(".award .title-introduce");
        // var contact  = $(".contact-infor .title-introduce");
        // var skills  = $(".skills .title-introduce");
        // var reference  = $(".reference .title-introduce");
        // var certificate  = $(".certificate .title-introduce");
        // var content_language  = $(".language .title-introduce");
        // var preference  = $(".preference .title-introduce");
        // var action  = $(".action .title-introduce");
        // var introduce  = $(".intro.title-introduce");
        // var project  = $(".project .title-introduce");
        // var experience  = $(".experience .title-introduce");
        // var project  = $(".project .title-introduce");
        // var experience  = $(".experience .title-introduce");
        // var project  = $(".project .title-introduce");
        // console.log(introduce.text());
        // for (i = 0; i < language.content.length; i++) {
        // 	switch (language.content[i].class) {
        // 		case "experience":
        // 		experience.text(language.content[i].title);
        // 		break;
        // 		case "project":
        // 		project.text(language.content[i].title);
        // 		break;
        // 		case "education":
        // 		education.text(language.content[i].title);
        // 		break;
        // 		break;
        // 		case "award":
        // 		award.text(language.content[i].title);
        // 		break;
        // 		case "contact-infor":
        // 		contact.text(language.content[i].title);
        // 		break;
        // 		case "skills":
        // 		skills.text(language.content[i].title);
        // 		break;
        // 		case "reference":
        // 		reference.text(language.content[i].title);
        // 		break;
        // 		case "certificate":
        // 		certificate.text(language.content[i].title);
        // 		break;
        // 		case "language":
        // 		content_language.text(language.content[i].title);
        // 		break;
        // 		case "preference":
        // 		preference.text(language.content[i].title);
        // 		break;
        // 		case "action":
        // 		action.text(language.content[i].title);
        // 		break;
        // 		case "intro":
        // 		introduce.text(language.content[i].title);
        // 		break;
        // 		default:
        // 		break;
        // 	}
        // }
    });
    $(document).on('click', '.social .h_item_container i', function() {
        $('.SelectSocialModal__modal-container___2y8ir').addClass('show_flex');
        $(this).addClass('active');
        console.log($(this).attr('class'));
    });
    $(document).on('click', '.SelectSocialModal__modal-container___2y8ir', function() {
        $(this).removeClass('show_flex');
    });
    $(document).on('click', '.SelectSocialModal__social-wrapper___1JYL7', function() {
        var class_icon = $(this).children().attr('class');
        $(this).addClass('SelectSocialModal__actived___1Uism');
        $('.SelectSocialModal__social-wrapper___1JYL7').not(this).removeClass('SelectSocialModal__actived___1Uism');
        $('.social i.active').attr('class', class_icon + ' social-type' + ' font-size-3');
        // string.replace(searchvalue, newvalue)
    });
    // $('.CvLanguage__container___2xR8o').hide();
    // $('.LeftDrawer__desktop-container___1tcP6').hide();
    // $('.SelectSocialModal__modal-container___2y8ir').hide();
    // $(document).on('click', '.h_item', function() {
    // 	$(this).css('background','red');
    // });
    $("#menu_header").hide();
    $(document).on('click', '.q-show-menu', function() {
        $("#menu_header").toggle();
    });
    // $(document).on('click', 'li.new_job', function(){
    // 	$(".ask-to-save-modal").toggle();
    // });
    // $(document).on('click', 'li.new_job a', function(e){
    // 	e.preventDefault();
    // });
    // $(document).on('click', '.close-modal', function(e){
    // 	$(".ask-to-save-modal").hide();
    // });
    $(".ask-to-save-modal").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() == 0) {
            $('.LeftDrawer__container___3jGI0').css('top', '158px');
        } else {
            $('.LeftDrawer__container___3jGI0').css('top', '100px');
        }
    });
});