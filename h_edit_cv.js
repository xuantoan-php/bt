$( document ).ready(function(){
	$( ".TextAlignment__button___ONXrU").addClass('disabled');
	$(".TextListing__button___2gRMl").addClass('disabled');
	$(".undo-button").addClass('disabled');
	$(".redo-button").addClass('disabled');
	$(".TextDecoration__button___1BtlU").addClass('disabled');	


	// $(document).on('click', '.h_item', function(e){
	// 	let block = $(this).find('.h_blockControls');
	// 	block.css('display','flex');
	// 	let block_other = $('.h_container').find('.h_blockControls');
	// 	block_other.hide();
	// 	block.css('display','flex');
	// });
	// $(document).on('click', '.h_container', function(e){
	// 	if(e.target == this){
	// 		let block = $(this).find('.h_blockControls').first();
	// 		block.css('display','flex');
	// 		let block_other = $('.h_container:not(this)').not(this).find('.h_blockControls');
	// 		let block_item_other = $('.h_item').find('.h_blockControls');
	// 		block_other.hide();
	// 		block_item_other.hide();
	// 		console.log('h_container');
	// 	}
	// });
	// $(document).on('click', '.h_add', function(){
	// 	var language_active = $('.CvLanguage__active___1DlHm').find('.CvLanguage__option-label___2XJBS').text();
	// 	if(language_active == 'Tiếng Anh'){
	// 		var lg_content = language_eng;
	// 	}
	// 	else if(language_active == 'Tiếng Việt'){
	// 		var lg_content = content;
	// 	}
	// 	for (i = 0; i < language.content.length; i++) {
	// 		switch (language.content[i].class) {
	// 			case "experience":
	// 			experience.text(language.content[i].title);
	// 			break;			
	// 			default:
	// 			break;
	// 		}

	// 	}
	// 	var name_company = 'name company';
	// 	let str1 = "<div class='lg h_item sortable_list draggable'>";
	// 	let str2 = "<div class='h_blockControls'><div title='Thêm dự án' class='h_add'><div class='h_title'>Thêm dự án</div><i class='fa fa-plus-circle'></i>Thêm dự án</div><div title='Chuyển mục này lên trên' class='h_up'><div class='h_title'>Di chuyển mục này lên trên</div><i class='fa fa-caret-up'></i></div><div title='Chuyển mục này xuống dưới' class='h_down'><div class='h_title'>Di chuyển mục này xuống dưới</div><i class='fa fa-caret-up'></i></div><div class='h_line'></div><div class='h_drag' draggable='true'><div class='h_title'>Kéo thả để di chuyển</div><i class='fa fa-arrows-alt'></i></div><div class='h_line'></div><div title='Xóa mục này' class='h_delete'><i class='fa fa-trash'></i><div class='h_title'>Xóa nội dung này</div></div></div>";
	// 	let str3 ="	<div class='h_item_container content-introduce'><div class='experience-company'><div><div tabindex='1' class='text-field font-size-3' content-placeholder='"+name_company+"' content-required-message='&quot;Chi tiết&quot; không được để trống' contenteditable='true'></div></div></div><div class='experience-info'><div><div tabindex='1' class='text-field details-field-input font-size-5' content-placeholder='Điểm nổi bật khi hoạt động ở tổ chức' content-required-message='&quot;Chi tiết&quot; không được để trống' contenteditable='true'></div></div></div></div>";
	// 	let div  = str1 + str2 + str3;
	// 	var listItens = document.querySelectorAll('.draggable');
	// 	[].forEach.call(listItens, function(item){
	// 		addEventsDragAndDrop(item);
	// 	});
	// });

	$(document).on('click', '.project .h_add', function() {
       var str = `<div class="lg h_item sortable_list draggable">
       <div class="h_blockControls">
       <div title="Thêm dự án tham gia" class="h_add">
       <div class="h_title">
       Thêm dự án tham gia
       </div>
       <i class="fas fa-plus-circle"></i>Thêm dự án tham gia
       </div>
       <div title="Chuyển mục này lên trên" class="h_up">
       <div class="h_title">
       Di chuyển mục này lên trên
       </div>
       <i class="fas fa-caret-up"></i>
       </div>
       <div title="Chuyển mục này xuống dưới" class="h_down">
       <div class="h_title">
       Di chuyển mục này xuống dưới
       </div>
       <i class="fas fa-caret-up"></i>
       </div>
       <div class="h_line">

       </div>
       <div class="h_drag" draggable="true">
       <div class="h_title">
       Kéo thả để di chuyển
       </div>
       <i class="fas fa-arrows-alt"></i>
       </div>
       <div class="h_line">

       </div>
       <div title="Xóa mục này" class="h_delete">
       <i class="fas fa-trash"></i>
       <div class="h_title">
       Xóa nội dung này
       </div>
       </div>
       </div>
       <div class="h_item_container content-introduce">
       <div class="experience-company">
       <div class = "company-group">
       <i class="fa fa-square diamond text-second"></i>
       <div tabindex="1" class="item_name input-field text-pr font-size-3 text-second" content-placeholder="Tên dự án" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
       </div>
       <div class="section-period">
       <div tabindex="1" content-placeholder="Bắt đầu" content-required-message="&quot;Ngày bắt đầu&quot; không được để trống" class="d-start input-field details-field-input font-size-5"
       contenteditable="true"></div><div class="duration-hyphen font-size-5">-</div><div tabindex="1" content-placeholder="Kết thúc" content-required-message="&quot;Ngày kết thúc&quot; không được để trống" class="d-end input-field details-field-input font-size-5" contenteditable="true"></div></div>

       </div>
       <div class="experience-info">                          
       <div>
       <div tabindex="1" class="item_detail text-field details-field-input font-size-5" content-placeholder="Chi tiết dự án" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
       </div>
       </div>
       </div>
       </div>`;
       let div  = str;
       $('#list_item_project').append(div);
       var listItens = document.querySelectorAll('.draggable');
       [].forEach.call(listItens, function(item){
           addEventsDragAndDrop(item);
       });
   });
	$(document).on('click', '.experience .h_add', function() {
       var str = `<div class="lg h_item sortable_list draggable">
       <div class="h_blockControls">
       <div title="Thêm kinh nghiệm" class="h_add">
       <div class="h_title">
       Thêm kinh nghiệm
       </div>
       <i class="fas fa-plus-circle"></i>Thêm kinh nghiệm
       </div>
       <div title="Chuyển mục này lên trên" class="h_up">
       <div class="h_title">
       Di chuyển mục này lên trên
       </div>
       <i class="fas fa-caret-up"></i>
       </div>
       <div title="Chuyển mục này xuống dưới" class="h_down">
       <div class="h_title">
       Di chuyển mục này xuống dưới
       </div>
       <i class="fas fa-caret-up"></i>
       </div>
       <div class="h_line">

       </div>
       <div class="h_drag" draggable="true">
       <div class="h_title">
       Kéo thả để di chuyển
       </div>
       <i class="fas fa-arrows-alt"></i>
       </div>
       <div class="h_line">

       </div>
       <div title="Xóa mục này" class="h_delete">
       <i class="fas fa-trash"></i>
       <div class="h_title">
       Xóa nội dung này
       </div>
       </div>
       </div>
       <div class="h_item_container content-introduce">
       <div class="experience-company">
       <div class = "company-group">
       <i class="fa fa-square diamond text-second"></i>
       <div tabindex="1" class="item_name input-field text-pr font-size-3 text-second" content-placeholder="Tên công ty" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
       </div>
       <div class="section-period">
       <div tabindex="1" content-placeholder="Bắt đầu" content-required-message="&quot;Ngày bắt đầu&quot; không được để trống" class="d-start input-field details-field-input font-size-5"
       contenteditable="true"></div><div class="duration-hyphen font-size-5">-</div><div tabindex="1" content-placeholder="Kết thúc" content-required-message="&quot;Ngày kết thúc&quot; không được để trống" class="d-end input-field details-field-input font-size-5" contenteditable="true"></div></div>

       </div>
       <div class="experience-info">
       <h4 tabindex="1" content-placeholder="Chức vụ"
       content-required-message="&quot;Chức vụ&quot; không được để trống" class="item_title input-field font-size-3" contenteditable="true"></h4>
       <div>
       <div tabindex="1" class="item_detail text-field details-field-input font-size-5" content-placeholder="Chi tiết công việc: nhiệm vụ, thành tựu" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
       </div>
       </div>
       </div>
       </div>`;
       let div  = str;
       $('#list_item_exp').append(div);
       var listItens = document.querySelectorAll('.draggable');
       [].forEach.call(listItens, function(item){
           addEventsDragAndDrop(item);
       });
   });
	$(document).on('click', '.education .h_add', function() {
        var str = `<div class="lg h_item sortable_list draggable">
        <div class="h_blockControls">
        <div title="Thêm học vấn" class="h_add">
        <div class="h_title">
        Thêm học vấn
        </div>
        <i class="fas fa-plus-circle"></i>Thêm học vấn
        </div>
        <div title="Chuyển mục này lên trên" class="h_up">
        <div class="h_title">
        Di chuyển mục này lên trên
        </div>
        <i class="fas fa-caret-up"></i>
        </div>
        <div title="Chuyển mục này xuống dưới" class="h_down">
        <div class="h_title">
        Di chuyển mục này xuống dưới
        </div>
        <i class="fas fa-caret-up"></i>
        </div>
        <div class="h_line">

        </div>
        <div class="h_drag" draggable="true">
        <div class="h_title">
        Kéo thả để di chuyển
        </div>
        <i class="fas fa-arrows-alt"></i>
        </div>
        <div class="h_line">

        </div>
        <div title="Xóa mục này" class="h_delete">
        <i class="fas fa-trash"></i>
        <div class="h_title">
        Xóa nội dung này
        </div>
        </div>
        </div>
        <div class="h_item_container content-introduce sortable_item">
        <div class="experience-company">
        <div class = "company-group">
        <i class="fa fa-square diamond text-second"></i>
        <div tabindex="1" class="item_name input-field text-pr font-size-3 text-second" content-placeholder="Tên trường" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
        </div>
        <div class="section-period">
        <div tabindex="1" content-placeholder="Bắt đầu" content-required-message="&quot;Ngày bắt đầu&quot; không được để trống" class="d-start input-field details-field-input font-size-5"
        contenteditable="true"></div><div class="duration-hyphen font-size-5">-</div><div tabindex="1" content-placeholder="Kết thúc" content-required-message="&quot;Ngày kết thúc&quot; không được để trống" class="d-end input-field details-field-input font-size-5" contenteditable="true"></div></div>

        </div>
        <div class="experience-info">
        <h4 tabindex="1" content-placeholder="Chuyên ngành"
        content-required-message="&quot;Chức vụ&quot; không được để trống" class="item_title input-field font-size-3" contenteditable="true"></h4>
        <div>
        <div tabindex="1" class="item_detail text-field details-field-input font-size-5" content-placeholder="Chi tiết học tập: điểm trung bình, thành tựu" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
        </div>
        </div>
        </div>`;
        let div  = str;
        $('#list_item_edu').append(div);
        var listItens = document.querySelectorAll('.draggable');
        [].forEach.call(listItens, function(item){
           addEventsDragAndDrop(item);
       });
    });
	$(document).on('click', '.award .h_add', function() {

        var str = `<div class="lg h_item sortable_list draggable">
        <div class="h_blockControls">
        <div title="Thêm giải thưởng" class="h_add">
        <div class="h_title">
        Thêm giải thưởng
        </div>
        <i class="fas fa-plus-circle"></i>Thêm giải thưởng
        </div>
        <div title="Chuyển mục này lên trên" class="h_up">
        <div class="h_title">
        Di chuyển mục này lên trên
        </div>
        <i class="fas fa-caret-up"></i>
        </div>
        <div title="Chuyển mục này xuống dưới" class="h_down">
        <div class="h_title">
        Di chuyển mục này xuống dưới
        </div>
        <i class="fas fa-caret-up"></i>
        </div>
        <div class="h_line">

        </div>
        <div class="h_drag" draggable="true">
        <div class="h_title">
        Kéo thả để di chuyển
        </div>
        <i class="fas fa-arrows-alt"></i>
        </div>
        <div class="h_line">

        </div>
        <div title="Xóa mục này" class="h_delete">
        <i class="fas fa-trash"></i>
        <div class="h_title">
        Xóa nội dung này
        </div>
        </div>
        </div>
        <div class="h_item_container content-introduce">
        <div class="experience-company">
        <div class = "company-group">
        <i class="fa fa-square diamond text-second"></i>
        <div tabindex="1" class="text-second item_name input-field font-size-3" content-placeholder="Tên giải thưởng" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
        </div>
        <div class="section-period">
        <div tabindex="1" content-placeholder="Ngày cấp" content-required-message="&quot;Ngày cấp&quot; không được để trống" class="input-field d_start details-field-input font-size-3 text-second" contenteditable="true"></div>
        </div>
        </div>
        <div class="experience-info">    
        <h4 tabindex="1" content-placeholder="Chức vụ"
        content-required-message="&quot;Chức vụ&quot; không được để trống" class="item_title input-field font-size-3" contenteditable="true"></h4>                      
        <div>
        <div tabindex="1" class="item_detail text-field details-field-input font-size-5" content-placeholder="" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
        </div>
        </div>
        </div>
        </div>`;
        let div  = str;
        $('#list_item_award').append(div);
        var listItens = document.querySelectorAll('.draggable');
        [].forEach.call(listItens, function(item){
           addEventsDragAndDrop(item);
       });
    });
	$(document).on('click', '.action .h_add', function(){
       var str = `<div class='lg h_item sortable_list draggable'>
       <div class="h_blockControls">
       <div title="Thêm hoạt động" class="h_add">
       <div class="h_title">
       Thêm hoạt động
       </div>
       <i class="fas fa-plus-circle"></i>Thêm hoạt động
       </div>
       <div title="Chuyển mục này lên trên" class="h_up">
       <div class="h_title">
       Di chuyển mục này lên trên
       </div>
       <i class="fas fa-caret-up"></i>
       </div>
       <div title="Chuyển mục này xuống dưới" class="h_down">
       <div class="h_title">
       Di chuyển mục này xuống dưới
       </div>
       <i class="fas fa-caret-up"></i>
       </div>
       <div class="h_line">

       </div>
       <div class="h_drag" draggable="true">
       <div class="h_title">
       Kéo thả để di chuyển
       </div>
       <i class="fas fa-arrows-alt"></i>
       </div>
       <div class="h_line">

       </div>
       <div title="Xóa mục này" class="h_delete">
       <i class="fas fa-trash"></i>
       <div class="h_title">
       Xóa nội dung này
       </div>
       </div>
       </div>
       <div class="h_item_container content-introduce">
       <div class="experience-company">
       <div class = "company-group">
       <i class="fa fa-square diamond text-second"></i>
       <div tabindex="1" class="item_name input-field text-pr font-size-3 text-second" content-placeholder="Tên tổ chức" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
       </div>
       <div class="section-period">
       <div tabindex="1" content-placeholder="Bắt đầu" content-required-message="&quot;Ngày bắt đầu&quot; không được để trống" class="d-start input-field details-field-input font-size-5"
       contenteditable="true"></div><div class="duration-hyphen font-size-5">-</div><div tabindex="1" content-placeholder="Kết thúc" content-required-message="&quot;Ngày kết thúc&quot; không được để trống" class="d-end input-field details-field-input font-size-5" contenteditable="true"></div></div>

       </div>
       <div class="experience-info">
       <h4 tabindex="1" content-placeholder="Vai trò trong tổ chức"
       content-required-message="&quot;Chức vụ&quot; không được để trống" class="item_title input-field font-size-3" contenteditable="true"></h4>
       <div>
       <div tabindex="1" class="item_detail text-field details-field-input font-size-5" content-placeholder="Điểm nổi bật khi hoạt động ở tổ chức" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
       </div>
       </div>
       </div>`;
       let div  = str;
       $('#list_item_action').append(div);
       var listItens = document.querySelectorAll('.draggable');
       [].forEach.call(listItens, function(item){
           addEventsDragAndDrop(item);
       });
   });
	$(document).on('click', '.language .h_add', function() {
       var str = `<div class='lg h_item sortable_list draggable'>
       <div class="h_blockControls">
       <div title="Thêm ngôn ngữ" class="h_add">
       <div class="h_title">
       Thêm ngôn ngữ
       </div>
       <i class="fas fa-plus-circle"></i>Thêm ngôn ngữ
       </div>
       <div title="Chuyển mục này lên trên" class="h_up">
       <div class="h_title">
       Di chuyển mục này lên trên
       </div>
       <i class="fas fa-caret-up"></i>
       </div>
       <div title="Chuyển mục này xuống dưới" class="h_down">
       <div class="h_title">
       Di chuyển mục này xuống dưới
       </div>
       <i class="fas fa-caret-up"></i>
       </div>
       <div class="h_line">

       </div>
       <div class="h_drag" draggable="true">
       <div class="h_title">
       Kéo thả để di chuyển
       </div>
       <i class="fas fa-arrows-alt"></i>
       </div>
       <div class="h_line">

       </div>
       <div title="Xóa mục này" class="h_delete">
       <i class="fas fa-trash"></i>
       <div class="h_title">
       Xóa nội dung này
       </div>
       </div>
       </div>
       <div class="h_item_container content-introduce">
       <div class="experience-company">
       <div class = "company-group">
       <div tabindex="1" class="item_name input-field text-pr font-size-3 text-second" content-placeholder="Ngôn ngữ" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
       </div>
       </div>
       <div class="experience-info">                          
       <div>
       <div tabindex="1" class="item_detail text-field details-field-input font-size-5" content-placeholder="Chi tiết khả năng ngôn ngữ" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
       </div>
       </div>
       </div>
       </div>
       </div>`;
       let div  = str;
       $('#list_item_language').append(div);
       var listItens = document.querySelectorAll('.draggable');
       [].forEach.call(listItens, function(item){
           addEventsDragAndDrop(item);
       });
   });
	$(document).on('click', '.reference .h_add', function() {
       var str = `<div class="lg h_item sortable_list draggable">
       <div class="h_blockControls">
       <div title="Thêm người tham chiếu" class="h_add">
       <div class="h_title">
       Thêm người tham chiếu
       </div>
       <i class="fas fa-plus-circle"></i>Thêm người tham chiếu
       </div>
       <div title="Chuyển mục này lên trên" class="h_up">
       <div class="h_title">
       Di chuyển mục này lên trên
       </div>
       <i class="fas fa-caret-up"></i>
       </div>
       <div title="Chuyển mục này xuống dưới" class="h_down">
       <div class="h_title">
       Di chuyển mục này xuống dưới
       </div>
       <i class="fas fa-caret-up"></i>
       </div>
       <div class="h_line">

       </div>
       <div class="h_drag" draggable="true">
       <div class="h_title">
       Kéo thả để di chuyển
       </div>
       <i class="fas fa-arrows-alt"></i>
       </div>
       <div class="h_line">

       </div>
       <div title="Xóa mục này" class="h_delete">
       <i class="fas fa-trash"></i>
       <div class="h_title">
       Xóa nội dung này
       </div>
       </div>
       </div>
       <div class="h_item_container content-introduce">
       <div class="experience-company">
       <div>
       <div tabindex="1" class="item_name input-field font-size-3" content-placeholder="Tên người tham chiếu" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
       </div>
       <div>
       <div tabindex="1" class="item_title input-field font-size-3" content-placeholder="Chức vụ - Công ty" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
       </div>
       </div>
       <div class="experience-info">
       <div class="detail-group"><span class="detail-name font-size-5"><span>Điện thoại</span>:</span><h4 tabindex="1" content-placeholder="Số điện thoại" content-required-message="&quot;Số điện thoại&quot; không được để trống" class="input-field contact_phone  details-references font-size-5  " contenteditable="true"></h4></div>
       <div class="reference-separator font-size-5">|</div>
       <div class="detail-group"><span class="detail-name font-size-5">Email:</span><h4 tabindex="1" content-placeholder="Địa chỉ email" content-required-message="&quot;Email&quot; không được để trống" class="input-field contact_mail  details-references font-size-5  " contenteditable="true"></h4></div>
       </div>
       </div>
       </div>`;
       let div  = str;
       $('#list_item_reference').append(div);
   });
	$(document).on('click', '.skills .h_add', function() {
		let str1 = "<div class='lg h_item draggable'>";
		let str2 = "<div class='h_blockControls'><div title='Thêm kĩ năng' class='h_add'><div class='h_title'>Thêm kĩ năng</div><i class='fa fa-plus-circle'></i>Thêm kĩ năng</div><div title='Chuyển mục này lên trên' class='h_up'><div class='h_title'>Di chuyển mục này lên trên</div><i class='fa fa-caret-up'></i></div><div title='Chuyển mục này xuống dưới' class='h_down'><div class='h_title'>Di chuyển mục này xuống dưới</div><i class='fa fa-caret-up'></i></div><div class='h_line'></div><div class='h_drag' draggable='true'><div class='h_title'>Kéo thả để di chuyển</div><i class='fa fa-arrows-alt'></i></div><div class='h_line'></div><div title='Xóa mục này' class='h_delete'><i class='fa fa-trash'></i><div class='h_title'>Xóa nội dung này</div></div></div>";
		let str3 ="<div class='h_item_container content-introduce'><div class='experience-company'><div><div tabindex='1' class='text-field font-size-4' content-placeholder='Kĩ năng mềm/kĩ thuật/ngôn ngữ' content-required-message='&quot;Chi tiết&quot; không được để trống' contenteditable='true'></div><div content-required-message='&quot;Mức độ&quot; không được để trống' class='cv-progress-bar skill-level'><div onmouseover='javascript:func(this)' class='cv-progress-bar-flow bg-second editable'></div><div onmouseover='javascript:func(this)' class='cv-progress-bar-flow bg-second editable'></div><div onmouseover='javascript:func(this)' class='cv-progress-bar-flow bg-second editable'></div><div onmouseover='javascript:func(this)' class='cv-progress-bar-flow bg-second editable'></div><div onmouseover='javascript:func(this)' class='cv-progress-bar-flow bg-second editable'></div><div onmouseover='javascript:func(this)' class='cv-progress-bar-flow bg-second level-inactive editable'></div><div onmouseover='javascript:func(this)' class='cv-progress-bar-flow bg-second level-inactive editable'></div><div onmouseover='javascript:func(this)' class='cv-progress-bar-flow bg-second level-inactive editable'></div><div onmouseover='javascript:func(this)' class='cv-progress-bar-flow bg-second level-inactive editable'></div><div onmouseover='javascript:func(this)' class='cv-progress-bar-flow bg-second level-inactive editable'></div></div></div></div></div>";
		let div  = str1 + str2 + str3;
		$('.skills').append(div);
		var listItens = document.querySelectorAll('.draggable');
		[].forEach.call(listItens, function(item){
			addEventsDragAndDrop(item);
		});
	});
	$(document).on('click', '.preference .h_add', function(){
       var str = `<div class='lg h_item sortable_list draggable'>
       <div class="h_blockControls">
       <div title="Thêm quan tâm" class="h_add">
       <div class="h_title">
       Thêm quan tâm
       </div>
       <i class="fas fa-plus-circle"></i>Thêm quan tâm
       </div>
       <div title="Chuyển mục này lên trên" class="h_up">
       <div class="h_title">
       Di chuyển mục này lên trên
       </div>
       <i class="fas fa-caret-up"></i>
       </div>
       <div title="Chuyển mục này xuống dưới" class="h_down">
       <div class="h_title">
       Di chuyển mục này xuống dưới
       </div>
       <i class="fas fa-caret-up"></i>
       </div>
       <div class="h_line">

       </div>
       <div class="h_drag" draggable="true">
       <div class="h_title">
       Kéo thả để di chuyển
       </div>
       <i class="fas fa-arrows-alt"></i>
       </div>
       <div class="h_line">

       </div>
       <div title="Xóa mục này" class="h_delete">
       <i class="fas fa-trash"></i>
       <div class="h_title">
       Xóa nội dung này
       </div>
       </div>
       </div>
       <div class="h_item_container content-introduce">
       <div class="experience-company">
       <div>
       <div tabindex="1" class="text-field font-size-3" content-placeholder="Điều quan tâm" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
       </div>
       </div>
       </div>
       </div>`;
       let div  = str;
       $('#list_item_preference').append(div);
       var listItens = document.querySelectorAll('.draggable');
       [].forEach.call(listItens, function(item){
           addEventsDragAndDrop(item);
       });
   });
	$(document).on('click', '.certificate .h_add', function(){
        var str = `<div class="lg h_item sortable_list draggable"contenteditable='false'>
        <div class="h_blockControls">
        <div title="Thêm chứng chỉ" class="h_add">
        <div class="h_title">
        Thêm chứng chỉ
        </div>
        <i class="fas fa-plus-circle"></i>Thêm chứng chỉ
        </div>
        <div title="Chuyển mục này lên trên" class="h_up">
        <div class="h_title">
        Di chuyển mục này lên trên
        </div>
        <i class="fas fa-caret-up"></i>
        </div>
        <div title="Chuyển mục này xuống dưới" class="h_down">
        <div class="h_title">
        Di chuyển mục này xuống dưới
        </div>
        <i class="fas fa-caret-up"></i>
        </div>
        <div class="h_line">

        </div>
        <div class="h_drag" draggable="true">
        <div class="h_title">
        Kéo thả để di chuyển
        </div>
        <i class="fas fa-arrows-alt"></i>
        </div>
        <div class="h_line">

        </div>
        <div title="Xóa mục này" class="h_delete">
        <i class="fas fa-trash"></i>
        <div class="h_title">
        Xóa nội dung này
        </div>
        </div>
        </div>
        <div class="h_item_container content-introduce">
        <div class="experience-company">
        <div class = "company-group">
        <i class="fa fa-square diamond text-second"></i>
        <div tabindex="1" class="item_name input-field font-size-3" content-placeholder="Tên chứng chỉ" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
        </div>
        <div class="section-period">
        <div tabindex="1" content-placeholder="Ngày cấp" content-required-message="&quot;Ngày cấp&quot; không được để trống" class="input-field received_date details-field-input font-size-3 text-second" contenteditable="true"></div>
        </div>
        </div>
        <div class="experience-info">                                                
        <div>
        <div tabindex="1" class="item_detail text-field details-field-input font-size-5" content-placeholder="Chi tiết chứng chỉ" content-required-message="&quot;Chi tiết&quot; không được để trống" contenteditable="true"></div>
        </div>
        </div>
        </div>
        </div>
        </div>`;
        let div  = str;
        $('#list_item_certificate').append(div);
        var listItens = document.querySelectorAll('.draggable');
        [].forEach.call(listItens, function(item){
           addEventsDragAndDrop(item);
       });
    });
    $(document).on('click', '.social .h_add', function(){
        var str = `<div class='h_item draggable'>                
        <div class="h_blockControls">
        <div title="Thêm hoạt động" class="h_add">
        <div class="h_title">
        Thêm mạng xã hội
        </div>
        <i class="fa fa-plus-circle"></i>Thêm mạng xã hội
        </div>
        <div title="Chuyển mục này lên trên" class="h_up">
        <div class="h_title">
        Di chuyển mục này lên trên
        </div>
        <i class="fa fa-caret-up"></i>
        </div>
        <div title="Chuyển mục này xuống dưới" class="h_down">
        <div class="h_title">
        Di chuyển mục này xuống dưới
        </div>
        <i class="fa fa-caret-up"></i>
        </div>
        <div class="h_line">

        </div>
        <div class="h_drag draggable" draggable="true">
        <div class="h_title">
        Kéo thả để di chuyển
        </div>
        <i class="fa fa-arrows-alt"></i>
        </div>
        <div class="h_line">

        </div>
        <div title="Xóa mục này" class="h_delete">
        <i class="fa fa-trash"></i>
        <div class="h_title">
        Ẩn mục này
        </div>
        </div>
        </div>

        <div class="h_item_container">
        <i class="fa fa-facebook-square social-type font-size-3" style="cursor: pointer;"></i>
        <h4 tabindex="1" content-placeholder="Tên người dùng" content-required-message="&quot;Tên người dùng&quot; không được để trống" class="input-field font-size-4  " contenteditable="true"></h4>
        </div>
        </div>`;
        let div  = str;
        $('#list_item_social').append(div);
        var listItens = document.querySelectorAll('.draggable');
        [].forEach.call(listItens, function(item){
            addEventsDragAndDrop(item);
        });
    });
    $(document).on('click', '.h_delete', function() {
      $(this).parent(".h_blockControls").parent(".h_item").remove();
  });
    $(document).on('click', '.h_delete', function() {
      $(this).parent(".h_blockControls").parent(".h_container").remove();
  });
    $(document).on('click', '.h_up', function(){
      let item  = $(this).parent(".h_blockControls").parent(".h_item");
      if(item.prev().attr('class') == item.attr('class')){
       item.insertBefore(item.prev());
   }	
});
    $(document).on('click', '.h_down', function(){
      let item  = $(this).parent(".h_blockControls").parent(".h_item");
      if(item.next().attr('class') == item.attr('class')){
       item.insertAfter(item.next());
   }
});
    $(document).on('click', '.h_up', function(){
      let item  = $(this).parent(".h_blockControls").parent(".h_container");
      item.insertBefore(item.prev());
  });
    $(document).on('click', '.h_down', function(){
      let item  = $(this).parent(".h_blockControls").parent(".h_container");
      item.insertAfter(item.next());
  });

	// $(document).on('click', '.text-font', function(){
	// 	$(this).find('.arrow-down').toggleClass('rotate');
	// 	$(this).find('.select-font-menu').toggleClass('show');
	// 	event.stopPropagation();
	// });
	$(document).on('click', '.CvSpacing__button___bHjcK', function(){
		$(this).find('.arrow-down').toggleClass('rotate');
		$('.cv-spacing').find('.CvSpacingPopup__cv-spacing-popup___2sxDU').toggleClass('show_block');
		// event.stopPropagation();
	});
    $(document).on('click', '#btn-edit-layout', function(){
      $("#btn-shadow").show();
  });
//     $(".h_container").hover(function(){
//         $(this).
// });
$(document).on('click', '#notifications_btn', function(){
          $('.notification-container').fadeIn(100);
    $('.notification-container').addClass('show_noti');

  console.log('1234');
});
$(document).on('click', '.notifi-header .close', function(){
    // console.log('122344');
          $('.notification-container').fadeOut(100);
    $('.notification-container').removeClass('show_noti');

});

$("#btn-shadow").hide();

   // $(document).on('click', '#notifications', function(){
   //        $("#btn-shadow").show();
   //  });
//     $( ".h_container" ).hover(function(){
//         var block_item = $(this).find('.h_blockControls').first();
//         console.log(block_item);
// });

});
