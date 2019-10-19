//
var html = '<div id="load_box" style="z-index:999999;position:fixed;top: 0px;left: 0px;background-color:#F0F0F0;width:100%;height:100%;text-align:center;">';
html += '<div style="position: fixed;left:50%;top:50%;margin-left:-40px;margin-top:-21px;">';
html += '<img src="images/load01.gif" /><p style="color:#252525;"></p>';
html += '</div></div>';
document.write(html);

var time = setInterval(function(){
	if(document.readyState == "complete"){
		$('#load_box').animate({'opacity':0},'slow',function(){
			$('#load_box').remove();
		});
		clearInterval(time);
	}
},500);