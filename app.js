$(document).ready(function(){
	$(".btn-bcg").click(function(){
		$(".btn-bcg").css('color', 'white');
		$("#registration-form input:not([type=button])").each(function(){
			if ($(this).val() == "") {
				$(this).css({'border-width': '1px', 'border-color': 'red', 'border-style': 'solid'});
				$(this).next(".first-name-val").show("first-name-val").css('display', 'block');
			} else {
				$(this).css({'border-width': '1px', 'border-color': 'green', 'border-style': 'solid', 'background': 'url("img/done.png") no-repeat top left', 'backgroundSize': '10px!important'});
				$(this).next(".first-name-val").hide();
			}
		});
	});
});