$(document).ready(function () {
$(".panel-body").hide();
$("#HierarchyResults").hide();
$("#groupResults").hide();
$(".PAdetails").hide();
$(".RewardManagerDetails").hide();
$(".PaymentUserDetails").hide();
$(".ReportUserDetails").hide();
$(".MasterPADetails").hide();
$(".wizard-container").hide();
	
$("#SearchHirarchy").click(function(){
	
	$("#HierarchyResults").show();
				});

$("#searchGroup").click(function(){
	
	$("#groupResults").show();
				});

$("#ProgramAdministrator").click(function(){
	$(".PAdetails").show();
	$(".RewardManagerDetails").hide();
	$(".PaymentUserDetails").hide();
	$(".ReportUserDetails").hide();
	$(".MasterPADetails").hide();
	});

$("#RewardManager").click(function(){

	$(".RewardManagerDetails").show();
	$(".PAdetails").hide();
	$(".PaymentUserDetails").hide();
	$(".ReportUserDetails").hide();
	$(".MasterPADetails").hide();
	});

$("#PaymentUser").click(function(){

	$(".RewardManagerDetails").hide();
	$(".PAdetails").hide();
	$(".PaymentUserDetails").show();
	$(".ReportUserDetails").hide();
	$(".MasterPADetails").hide();
	});

$("#ReportUser").click(function(){

	$(".RewardManagerDetails").hide();
	$(".PAdetails").hide();
	$(".PaymentUserDetails").hide();
	$(".ReportUserDetails").show();
	$(".MasterPADetails").hide();
	});

$("#MasterPA").click(function(){

	$(".RewardManagerDetails").hide();
	$(".PAdetails").hide();
	$(".PaymentUserDetails").hide();
	$(".ReportUserDetails").hide();
	$(".MasterPADetails").show();
	});


	$("#todo_arrow_img1").click(function(){
		$("#panelbody1").toggle();
														$(this).parent().find('.todo_arrow_collapse').toggleClass('todo_arrow_expand');
														});
	$("#todo_arrow_img2").click(function(){
		$("#panelbody2").toggle();
		$(this).parent().find('.todo_arrow_collapse').toggleClass('todo_arrow_expand');
		});
	
	
	$(".displayinlineimage").click(function(){
		
		$(".wizard-container").toggle();
		$(".WindowContainer").css("opacity","0.3");
		$(".wizard-container").css("opacity","1.0");
	
					});
	
	
$(".btn-finish").click(function(){
	alert("Your Role is successfully added.");
		$(".wizard-container").hide();
		$(".WindowContainer").css("opacity","1.0");
		
					});


$("#save").click(function(){
	alert("Your details have been sucessfully saved.");
					});



});	