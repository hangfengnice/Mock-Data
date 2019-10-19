$(document).ready(function(){
        $('.flexslider').flexslider({
            directionNav: true,
            pauseOnAction: false,
			pauseOnHover:!0,
        });
});


$(function(){	    
	qs();
});
function qs(){
	$(".nav_js").click(
		function(){
			$(".nav_txt").stop(true,false).delay(0).animate({height:"100%"}, 0);
			$(".nav_js1").stop(true,false).delay(0).animate({width:"196px",height:"53px"}, 0);
		}
	)
	$(".nav_colsed").click(
		function(){
			$(".nav_txt").stop(true,false).delay(0).animate({height:"0"}, 0);
			$(".nav_js1").stop(true,false).delay(0).animate({width:"0px",height:"0px"}, 0);
		}
	)
	$(".nav_js1").click(
		function(){
			$(".nav_txt").stop(true,false).delay(0).animate({height:"0"}, 0);
			$(".nav_js1").stop(true,false).delay(0).animate({width:"0px",height:"0px"}, 0);
		}
	)
}

//首页JS
$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['#000', '#000', '#000', '#000', '#dad6cb','#000','#000','#1a1a1a'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
		//menu: '#menu',
		//'navigation': true,
		afterLoad: function(anchorLink, index){
			if(index == 1){//第一屏动画
				$(".div_index .div2 .p1").stop(true,false).delay(0).animate({opacity:"1",top:"0"}, 800);
				$(".div_index .div2 .p2").stop(true,false).delay(100).animate({opacity:"1",top:"0"}, 800);
			}
			if(index == 2){//第二屏动画
				$(".section2 .div1 .p1").stop(true,false).delay(0).animate({opacity:"1",top:"0"}, 800);
				$(".section2 .div1 .p2").stop(true,false).delay(100).animate({opacity:"1",top:"0"}, 800);
			}

			if(index == 3){//第三屏动画
				$(".section3 .div1 .p1").stop(true,false).delay(0).animate({opacity:"1",top:"0"}, 800);
				$(".section3 .div1 .p2").stop(true,false).delay(100).animate({opacity:"1",top:"0"}, 800);
			}
			if(index == 4){//第四屏动画
				$(".section4 #show1 .tag_tit").stop(true,false).delay(0).animate({opacity:"1",bottom:"5%"}, 800);
			}
			if(index == 5){//第五屏动画
				$(".section5 .div1").stop(true,false).delay(500).animate({opacity:"1",top:"20%"}, 800);
				$(".section5 .div2").find(".p1").stop(true,false).delay(0).animate({opacity:"1"}, 800)
				$(".section5 .div2").find(".p1").addClass("p1a");
				$(".section5 .div2").find(".p2").stop(true,false).delay(500).animate({top:"0px",left:"158px",opacity:"1"}, 800)
				$(".section5 .div2").find(".p3").stop(true,false).delay(700).animate({top:"200px",left:"0px",opacity:"1"}, 800)
				$(".section5 .div2").find(".p4").stop(true,false).delay(900).animate({bottom:"0px",left:"158px",opacity:"1"}, 800)
				$(".section5 .div2").find(".p5").stop(true,false).delay(1100).animate({top:"0px",right:"158px",opacity:"1"}, 800)
				$(".section5 .div2").find(".p6").stop(true,false).delay(1300).animate({top:"200px",right:"0px",opacity:"1"}, 800)
				$(".section5 .div2").find(".p7").stop(true,false).delay(1500).animate({bottom:"0px",right:"158px",opacity:"1"}, 800)
			}
			if(index == 6){//第六屏动画
				$(".section6 .lf").stop(true,false).delay(0).animate({opacity:"1",left:"0"}, 800);
				$(".section6 .rg").stop(true,false).delay(0).animate({opacity:"1",right:"0"}, 800);
				$(".section7 .p1").stop(true,false).delay(0).animate({opacity:"0",top:"50"}, 800);
				$(".section7 .p2 .lf").stop(true,false).delay(0).animate({opacity:"0",left:"-50"}, 800);
				$(".section7 .p2 .rg").stop(true,false).delay(0).animate({opacity:"0",right:"-50"}, 800);
			}
			if(index == 7){//第七屏动画
				$(".section7 .p1").stop(true,false).delay(0).animate({opacity:"1",top:"0"}, 800);
				$(".section7 .p2 .lf").stop(true,false).delay(0).animate({opacity:"1",left:"0"}, 800);
				$(".section7 .p2 .rg").stop(true,false).delay(0).animate({opacity:"1",right:"0"}, 800);
			}
			if(index == 8){//第八屏动画
			}
		},
		onLeave: function(index, direction){
			if(index == '1'){//第一屏动画还原
				$(".div_index .div2 .p1").stop(true,false).delay(100).animate({opacity:"0",top:"50"}, 500);
				$(".div_index .div2 .p2").stop(true,false).delay(0).animate({opacity:"0",top:"50"}, 500);
			}
			if(index == '2'){//第二屏动画还原
				$(".section2 .div1 .p1").stop(true,false).delay(0).animate({opacity:"0",top:"50"}, 800);
				$(".section2 .div1 .p2").stop(true,false).delay(0).animate({opacity:"0",top:"50"}, 800);
			}
			if(index == '3'){//第三屏动画还原
				$(".section3 .div1 .p1").stop(true,false).delay(0).animate({opacity:"0",top:"50"}, 800);
				$(".section3 .div1 .p2").stop(true,false).delay(0).animate({opacity:"0",top:"50"}, 800);
			}
			if(index == '4'){//第四屏动画还原
				$(".section4 #show1 .tag_tit").stop(true,false).delay(0).animate({opacity:"0",bottom:"0"}, 800);
			}
			if(index == '5'){//第五屏动画还原
				$(".section5 .div1").stop(true,false).delay(0).animate({opacity:"0",top:"23%"}, 800);
				$(".section5 .div2").find(".p1").stop(true,false).delay(0).animate({opacity:"0"}, 800)
				$(".section5 .div2").find(".p1").removeClass("p1a");
				$(".section5 .div2").find(".p2").stop(true,false).delay(0).animate({top:"80px",left:"238px",opacity:"0"}, 800)
				$(".section5 .div2").find(".p3").stop(true,false).delay(0).animate({top:"200px",left:"80px",opacity:"0"}, 800)
				$(".section5 .div2").find(".p4").stop(true,false).delay(0).animate({bottom:"80px",left:"238px",opacity:"0"}, 800)
				$(".section5 .div2").find(".p5").stop(true,false).delay(0).animate({top:"80px",right:"238px",opacity:"0"}, 800)
				$(".section5 .div2").find(".p6").stop(true,false).delay(0).animate({top:"200px",right:"80px",opacity:"0"}, 800)
				$(".section5 .div2").find(".p7").stop(true,false).delay(0).animate({bottom:"80px",right:"238px",opacity:"0"}, 800)
			}
			if(index == '6'){//第六屏动画还原
				$(".section6 .lf").stop(true,false).delay(0).animate({opacity:"0",left:"-50"}, 800);
				$(".section6 .rg").stop(true,false).delay(0).animate({opacity:"0",right:"-50"}, 800);
			}
			if(index == '7'){//第七屏动画还原
			
			}
			if(index == '8'){//第八屏动画还原
				
			}
		}
	});
});