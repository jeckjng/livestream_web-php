
$(".aply").click(function(){

	var reg_realName=/^(?=.*\d.*\b)/;
	var reg_phone=/^(\d{5}|\d{6}|\d{7}|\d{8}|\d{9}|\d{10}|\d{11}|\d{12}|\d{13}|\d{14}|\d{15}|\d{16}|\d{17}|\d{18}|\d{19}|\d{20}|\d{21})$/;

	var reg_identity=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
	var language_id = $("input[name='language_id']").val();
	if($("#real_name").val()==""||reg_realName.test($("#real_name").val())==true){
		console.log(language_id==1);
		if(language_id==1){
			layer.msg("Please intput the realname");

		}else {
			layer.msg("请正确填写真实姓名");
		}

	}else if(reg_phone.test($("#mobile").val())==false){
		if(language_id==1){
			layer.msg("Please intput the rightnumber");
		}else {
			layer.msg("请正确输入手机号码");

		}
	}else if($("#cer_no").val()=="" ||reg_identity.test($("#cer_no").val())==false){
		if(language_id==1){
			layer.msg("Please intput the rightAccoutnumber");

		}else {
			layer.msg("请正确填写身份证号");
		}
	}else if($(".sf1").val()==""||$(".sf2").val()==""||$(".sf3").val()==""){
		if(language_id==1){
			layer.msg("Please upload the photo of Id");
		}else {
			layer.msg("请上传证件相关照片");
		}
	}else{
		aiax();
	}
})
function aiax(){
	$.ajax({url:"./index.php?g=Appapi&m=Auth&a=authsave",
		dataType:"json",
		data:{
			uid:uid,
			token:token,
			tenant_id:$("#tenant_id").val(),
			real_name:$("#real_name").val(),
			mobile:$("#mobile").val(),
			cer_no:$("#cer_no").val(),
			front_view:$(".sf1").val(),
			back_view:$(".sf2").val(),
			handset_view:$(".sf3").val()
		},
		type:"POST",
		success:function(data){
			//console.log(data);
			if(data.ret==200){
				var language_id = $("input[name='language_id']").val();
				if(language_id==1){
					window.location.href="./index.php?g=Appapi&m=Auth&a=success&uid="+uid+"&language_id=1";
				}else{
					window.location.href="./index.php?g=Appapi&m=Auth&a=success&uid="+uid;
				}

			}else{
				layer.msg(data.msg);
			}
		},
		error:function(e){
			layer.msg(e.msg);
		}
	})

}
//身份证上传

function file_click(e){
	var n= e.attr("data-index");

	upload(n);
}
function upload(index) {
	$('#upload').empty();
	var input = '<input type="file" id="ipt-file1" name="image"  accept="image/*"/><input type="file" id="ipt-file2" name="image"  accept="image/*"/><input type="file" id="ipt-file3" name="image"  accept="image/*"/>';
	$('#upload').html(input);
	var iptt=document.getElementById(index);
	if(window.addEventListener) { // Mozilla, Netscape, Firefox
		iptt.addEventListener('change',function(){
			ajaxFileUpload(index);

			var arr_img = new Array("/public/appapi/auth/images/identity_face.png", "/public/appapi/auth/images/identity_back.png", "/public/appapi/auth/images/identity_handle.png");
			var sub = index.substr(8, 1);
			  var language_id = $("input[name='language_id']").val();
			//   alert(language_id);return  false;
			  if(language_id==0 || language_id=='') {
			    $(".img-sfz[data-index=" + index + "]").attr("src", arr_img[sub - 1]);
			    $(".shadd[data-select=" + index + "]").show();
			  }else {
				  $(".shadd[data-select=" + index + "]").show();
			  }
		},false);
	}else{
		iptt.attachEvent('onchange',function(){
			ajaxFileUpload(index);
			var arr_img=new Array("/public/appapi/auth/images/identity_face.png","/public/appapi/auth/images/identity_back.png","/public/appapi/auth/images/identity_handle.png");
			var sub=index.substr(8,1);
			$(".img-sfz[data-index="+index+"]").attr("src",arr_img[sub-1]);
			$(".shadd[data-select="+index+"]").show();
		});
	}
	$('#'+index).click();
}
function ajaxFileUpload(img) {
	var language_id = $("input[name='language_id']").val();
	$("."+img).css({"width":"0px"});
	$(".box-upload[data-index="+img+"]").hide();
	$("."+img).animate({"width":"100%"},700,function(){
		var id= img;
		var num=img.substr(8,1);
		$.ajaxFileUpload
		(
			{
				url: './index.php?g=Appapi&m=Auth&a=upload',
				secureuri: false,
				fileElementId: id,
				data: { saveName:'auth_'+uid+'_'+num },
				dataType: 'html',
				success: function(data) {
					data=data.replace(/<[^>]+>/g,"");
					var str=JSON.parse(data);
					console.log(str);
					if(str.ret==200){
						var sub=img.substr(8,1);
						$(".sf"+sub).attr("value",str.data.url);
						//$.alert("上传成功");
						$(".shadd[data-select="+img+"]").hide();
						$(".box-upload[data-index="+img+"]").show();
						if(language_id==1){
							$(".box-upload[data-index=" + img + "] img").attr("src", "/public/appapi/auth/images/ok.jpg");

						}else {
							$(".box-upload[data-index="+img+"] img").attr("src","/public/appapi/auth/images/ok2.jpg");
						}
					}else{
						$(".shadd[data-select="+img+"]").hide();
						$(".box-upload[data-index="+img+"]").show();
						if(language_id==1){
						    layer.msg('no file uploaded!');
						    $(".box-upload[data-index="+img+"] img").attr("src","/public/appapi/auth/images/no3.jpg");
						}else {
							layer.msg('没有文件被上传');
							$(".box-upload[data-index="+img+"] img").attr("src","/public/appapi/auth/images/no2.jpg");
						}
					}
				},
				error: function(data) {
					layer.msg("上传失败");
					$(".shadd[data-select="+img+"]").hide();
					$(".box-upload[data-index="+img+"]").show();
					$(".box-upload[data-index="+img+"] img").attr("src","/public/appapi/auth/images/no2.jpg");
				}
			}
		)
		return true;
	});
}