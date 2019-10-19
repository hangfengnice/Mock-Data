//#ff8a00; HANSUN VI color system
//Blood_Wolf JQ Plug in package to support open source, if used or two development, please indicate the source, thank you for your cooperation!
//Site by HANSUN for the whole planning / page design / program development completed. 24 hours technical support - HANSUN:http://www.68hanchen.com

//Click on the box without A tag
window.onload = function () {
	for (var ii = 0; ii < document.links.length; ii++)
		document.links[ii].onfocus = function () { this.blur() }
}

//Navigation bar
$(function(){
	$(".nav ul li").hover(
		function(){
			$(this).children('').next().stop(true,true).slideDown(400);
		},
		function(){
			$(this).children('').next().stop(true,true).slideUp(400);
		}
	);
});

//banner 
$(document).ready(function(){
        $('.flexslider').flexslider({
            directionNav: true,
            pauseOnAction: false
        });
});


//Blood_wolf Animate GO
$(function(){	    
	qs();
  });

function qs(){
	$(".div_default1 .div1").stop(true,false).delay(1000).animate({top:"0px", opacity:"1"}, 800);
	$(".div_default1 .div2").stop(true,false).delay(1200).animate({top:"0px", opacity:"1"}, 800);
	$(".div_default1 .div3").stop(true,false).delay(1400).animate({top:"0px", opacity:"1"}, 800);
	$(".div_default1").stop(true,false).delay(5000).animate({bottom:"-100%", opacity:"1"}, 800);
	$(".a_default").click(
		function(){
			$(".div_default1").stop(true,false).delay(0).animate({bottom:"-100%", opacity:"1"}, 800);
		}
	)
	$(".ul_lf li").hover(
		function(){
			$(this).stop(true,false).delay(0).animate({left:"-10px"}, 500);
		},
		function(){
			$(this).stop(true,false).delay(0).animate({left:"0px"}, 500);
		}
	)
	$(".ul_js li").hover(
		function(){
			$(this).stop(true,false).delay(0).animate({top:"-10px"}, 500);
		},
		function(){
			$(this).stop(true,false).delay(0).animate({top:"0px"}, 500);
		}
	)
	$(".a_js").click(
		function(){
			$(".a_txt").stop(true,false).delay(0).animate({width:"100%",height:"100%"}, 0);
			$(".a_txt").find(".div1").stop(true,false).delay(0).animate({opacity:"0.9"}, 500);
			$(".a_txt").find(".div2").stop(true,false).delay(0).animate({opacity:"1"}, 500);
			$(".a_txt").find(".div3").stop(true,false).delay(0).animate({right:"0"}, 500);
		}
	)
	$(".a_closed").click(
		function(){
			$(".a_txt").stop(true,false).delay(500).animate({width:"0",height:"0"}, 0);
			$(".a_txt").find(".div1").stop(true,false).delay(0).animate({opacity:"0"}, 500);
			$(".a_txt").find(".div2").stop(true,false).delay(0).animate({opacity:"0"}, 500);
			$(".a_txt").find(".div3").stop(true,false).delay(0).animate({right:"-80%"}, 500);
		}
	)
	$(".a_js1").click(
		function(){
			$(".a_txt1").stop(true,false).delay(0).animate({width:"100%",height:"100%"}, 0);
			$(".a_txt1").find(".div1").stop(true,false).delay(0).animate({opacity:"0.5"}, 300);
			$(".a_txt1").find(".div2").stop(true,false).delay(0).animate({opacity:"1"}, 300);
		}
	)
	$(".a_colsed1").click(
		function(){
			$(".a_txt1").stop(true,false).delay(300).animate({width:"0",height:"0"}, 0);
			$(".a_txt1").find(".div1").stop(true,false).delay(0).animate({opacity:"0"}, 300);
			$(".a_txt1").find(".div2").stop(true,false).delay(0).animate({opacity:"0"}, 300);
		}
	)
	$(".a_js2").click(
		function(){
			$(".a_txt2").stop(true,false).delay(0).animate({width:"100%",height:"100%"}, 0);
			$(".a_txt2").find(".div1").stop(true,false).delay(0).animate({opacity:"0.5"}, 300);
			$(".a_txt2").find(".div2").stop(true,false).delay(0).animate({opacity:"1"}, 300);
		}
	)
	$(".a_colsed2").click(
		function(){
			$(".a_txt2").stop(true,false).delay(300).animate({width:"0",height:"0"}, 0);
			$(".a_txt2").find(".div1").stop(true,false).delay(0).animate({opacity:"0"}, 300);
			$(".a_txt2").find(".div2").stop(true,false).delay(0).animate({opacity:"0"}, 300);
		}
	)
	$(".aaaa:nth-child(5)").addClass("li");
	$(".ul li:nth-child(4n),.div_ser4 .div1 .rg .pp2 select:nth-child(3n)").css({"margin-right":"0"});
	$(".ul_3 li:nth-child(3n)").css({"margin-right":"0"})
	$(".ul_2 li:nth-child(2n)").css({"margin-right":"0"})
}

//Nav Animate

$(document).bind("scroll",function(){
	var ntt = $(".nav").offset().top;
	if (ntt > 0) {
		$(".nav").stop(true,false).delay(0).animate({top:"-30"}, 0);
	} else {
		$(".nav").stop(true,false).delay(0).animate({top:"0"}, 0);
	}	
});
var ntt = !1;
  $(window).bind("scroll",
	  function() {
	  var st = $(document).scrollTop();//往下滚的高度
	  ntt = ntt ? ntt: $(".heg").offset().top;
	  // document.title=st;
	  var sel=$(".heg");
	  if (ntt < st) {
		  sel.addClass("heg_on");
	  } else {
		  sel.removeClass("heg_on");
	  }
  });

//var nt = !1;
//	$(window).bind("scroll",
//		function() {
//		var st = $(document).scrollTop();//往下滚的高度
//		nt = nt ? nt: $("#heg").offset().top;
//		// document.title=st;
//		var sel=$("#heg");
//		if (nt < st) {
//			sel.addClass("heg_on");
//		} else {
//			sel.removeClass("heg_on");
//		}
//	});

//Scroll Animate
Scroller = {
    speed: 10,
    offsetParent: function(d) {
        offsetParent = d.offsetTop;
        if (d.offsetParent) {
            while (d = d.offsetParent) {
                offsetParent += d.offsetTop
            }
        }
        return offsetParent
    },
    scrollTop: function() {
        body = document.body;
        d = document.documentElement;
        if (body && body.scrollTop) {
            return body.scrollTop
        }
        if (d && d.scrollTop) {
            return d.scrollTop
        }
        if (window.pageYOffset) {
            return window.pageYOffset
        }
        return 0
    },
    attachEvent: function(a, b, d) {
        if (a.addEventListener) {
            return a.addEventListener(b, d, false)
        }
        if (a.attachEvent) {
            return a.attachEvent("on" + b, d)
        }
    },
    end: function(e) {
        if (window.event) {
            window.event.cancelBubble = true;
            window.event.returnValue = false;
            return
        }
        if (e.preventDefault && e.stopPropagation) {
            e.preventDefault();
            e.stopPropagation()
        }
    },
    scroll: function(d) {
        i = window.innerHeight || document.documentElement.clientHeight;
        h = document.body.scrollHeight;
        a = Scroller.scrollTop();
        if (d > a) {
            if (h - d > i) {
                a += Math.ceil((d - a) / Scroller.speed)
            } else {
                a += Math.ceil((d - a - (h - d)) / Scroller.speed)
            }
        } else {
            a = a + (d - a) / Scroller.speed
        }
        window.scrollTo(0, a);
        if (a == d || Scroller.offsetTop == a) {
            clearInterval(Scroller.interval)
        }
        Scroller.offsetTop = a
    },
    init: function() {
        Scroller.attachEvent(window, "load", Scroller.load)
    },
    load: function() {
        a = document.getElementsByTagName("a");
        Scroller.end(this);
        window.onscroll;
        for (i = 0; i < a.length; i++) {
            l = a[i];
            d = location.pathname;
            if (l.href && l.href.indexOf("#") != -1 && (l.pathname == d || "/" + l.pathname == d)) {
                Scroller.attachEvent(l, "click", Scroller.end);
                l.onclick = function() {
                    Scroller.end(this);
                    l = this.hash.substr(1);
                    a = document.getElementsByTagName("a");
                    for (i = 0; i < a.length; i++) {
                        if (a[i].name == l) {
                            clearInterval(Scroller.interval);
                            Scroller.interval = setInterval("Scroller.scroll(" + Scroller.offsetParent(a[i]) + ")", 10)
                        }
                    }
                }
            }
        }
    }
};
Scroller.init()

//niceScroll
$(document).ready(function() {
	var nice = $("html").niceScroll({
		oneaxismousemode:false,
		cursorcolor:"#ccc",
		cursoropacitymax:1,
		cursorwidth: "8px",
		cursorborderradius: "0px",
		cursorborder: "0px solid #fff",
		autohidemode:false,
		background:"#fff",
		zindex:"10000",
		scrollspeed: 60,
		mousescrollstep: 40,
		hwacceleration: true,
	});
});

//Browser judgment
//var browser=navigator.appName
//var b_version=navigator.appVersion
//var version=b_version.split(";");
//var trim_Version=version[1].replace(/[ ]/g,"");
//if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0")
//{
//	alert("您的浏览器版本过低，请用IE9以上或其他高版本浏览器浏览该网站。");
//	window.open("http://chrome.360.cn");
//}
//if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0")
//{
//   	alert("您的浏览器版本过低，请用IE9以上或其他高版本浏览器浏览该网站。");
//	window.open("http://chrome.360.cn");
//}