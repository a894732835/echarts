$(function(){
	handleTabs();
});

//页签切换
var handleTabs=function(){
	if (!$('div').hasClass('u-tab')) {
        return false;
   	}
	
	var tabs=$('.u-tabnav li');  
	tabs.on('click',function(e){
		e.preventDefault();	
		content=$(this).parents('.u-tab:first').find('.u-tabmain:first > div');
		console.log($(this).html());
		var index=$(this).index(); 
		$(this).parents('ul:first').find('li').removeClass('active');     
		$(this).addClass('active');     
		content.removeClass('active');	
		content.eq(index).addClass('active');
		if($(this).find(".liiclass")){
			$(this).parents('ul:first').find('li').find(".liiclass").show();
			$(this).find(".liiclass").hide();
		}
	})
}