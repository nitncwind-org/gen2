// menu bar
	if( 'ontouchstart' in window ){ var click = 'touchstart'; }
	else { var click = 'click'; }


	$('div.menu-burger').on(click, function(){

			if( !$(this).hasClass('open') ){ openMenu(); } 
			else { closeMenu(); }

	});
	

	$('div.menu ul li a').on(click, function(e){
		e.preventDefault();
		closeMenu();
	});		


	function openMenu(){
		
		$('div.circle').addClass('expand');
					
		$('div.menu-burger').addClass('open');	
		$('div.x, div.y, div.z').addClass('menu-collapse');
		$('.menu li').addClass('animate');
		
		setTimeout(function(){ 
			$('div.y').hide(); 
			$('div.x').addClass('rotate30'); 
			$('div.z').addClass('rotate150'); 
		}, 70);
		setTimeout(function(){
			$('div.x').addClass('rotate45'); 
			$('div.z').addClass('rotate135');  
		}, 120);
		
		

	}
	
	function closeMenu(){

		$('div.menu-burger').removeClass('open');	
		$('div.x').removeClass('rotate45').addClass('rotate30'); 
		$('div.z').removeClass('rotate135').addClass('rotate150');				
		$('div.circle').removeClass('expand');
		$('.menu li').removeClass('animate');
		
		setTimeout(function(){ 			
			$('div.x').removeClass('rotate30'); 
			$('div.z').removeClass('rotate150'); 			
		}, 50);
		setTimeout(function(){
			$('div.y').show(); 
			$('div.x, div.y, div.z').removeClass('menu-collapse');
		}, 70);													
		
	}

$(".link").click(function () {
	location.href = $(this).attr("url");
});