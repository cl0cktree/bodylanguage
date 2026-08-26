$(function(){
	/*공통*/
	$('.toptitle-backbtn-filter, .search-btn-filter, .title-btn-filter, .monthchange-day-filter, .natcol-language-icon-filter, .table-cardfilter-allfilter, .table-col-filter, .con-img-filter, .toptitle-plus-filter').mousedown(function(){
		$(this).css({'background':'rgba(0,0,0,0.5)'})
	})
	$('.toptitle-backbtn-filter, .search-btn-filter, .title-btn-filter, .monthchange-day-filter, .natcol-language-icon-filter, .table-cardfilter-allfilter, .table-col-filter, .con-img-filter, .toptitle-plus-filter').mouseup(function(){
		$(this).css({'background':'rgba(0,0,0,0)'})
	})
	
	$('.scroll-login-getinbtn, .table-getin-btn, .table-bottom-btn, .con-col-btn, .table-trans-btn, .table-write-btn, .table-dday-calendarbtn, .meetfilter-table-paybtn, .meetfilter-table-paybtn1, .meetfilter-table-paybtn2, .chatfilter-chat-textbtn, .row-td-languagebtn, .selectfilter-bottom-btn').mousedown(function(){
		$(this).css({'background':'#000','color':'#fff'})
	})
	$('.scroll-login-getinbtn, .table-getin-btn, .table-bottom-btn, .con-col-btn, .table-trans-btn, .table-write-btn, .table-dday-calendarbtn, .meetfilter-table-paybtn, .meetfilter-table-paybtn1, .meetfilter-table-paybtn2, .chatfilter-chat-textbtn, .row-td-languagebtn, .selectfilter-bottom-btn').mouseup(function(){
		$(this).css({'background':'#fff','color':'#000'})
	})
	$('.confirm-word-btn, .confirm-word-btn2').mousedown(function(){
		$(this).css({'background':'#fff','color':'#000'})
	})
	$('.confirm-word-btn, .confirm-word-btn2').mouseup(function(){
		$(this).css({'background':'#4c4c4c','color':'#fff'})
	})
	
	$('#sec-bottom-btn1').stop().click(function(){
		window.open('sub3-1.html','_self')
	})
	$('#sec-bottom-btn3').stop().click(function(){
		window.open('sub3-2.html','_self')
	})
	$('#sec-bottom-btn2,#sec-bottom-btn4').stop().click(function(){
		window.open('sub4.html','_self')
	})

    /*index*/
	$('.scroll-language-btn').mousedown(function(){
		$(this).css({'background':'#767171'})
	})
	$('.scroll-language-btn').mouseup(function(){
		$(this).css({'background':'#cccccc'})
	})
	$('#scroll-language-kbtn').stop().click(function(){
		window.open('sub/sub1.html','_self')
	})
	$('#scroll-language-ebtn').stop().click(function(){
		window.open('sub/sub1.html','_self')
	})
	/*sub1*/
	
	$('.scroll-login-getinbtn').stop().click(function(){
		window.open('sub1-1.html','_self')
	})	
	$('.scroll-login-loginbtn').mousedown(function(){
		$(this).css({'background':'#767171','color':'#fff'})
	})
	$('.scroll-login-loginbtn').mouseup(function(){
		$(this).css({'background':'#959595','color':'#000'})
	})
	$('.scroll-login-loginbtn').stop().click(function(){
		window.open('sub2.html','_self')
	})
	
	/*sub2*/
	$('#table-getin-btn1').stop().click(function(){
		alert('가입 되었습니다.')
		window.open('../index.html','_self')
	})
	$('.scroll-language-btn2').mousedown(function(){
		$(this).css({'background':'#616060'})
	})
	$('.scroll-language-btn2').mouseup(function(){
		$(this).css({'background':'#7f7f7f'})
	})
	$('.sec-bottom-btn').mousedown(function(){
		$(this).css({'background':'#454545'})
	})
	$('.sec-bottom-btn').mouseup(function(){
		$(this).css({'background':'#666'})
	})

	/*sub2-1-1 및 나라와 언어 검색 부분*/
	/*-table-nationtable-col 클릭시 발생-*/
	var back = 1;
	$('.table-nationtable-col').stop().click(function(){
		lang = this.innerText;
		$('.table-search-textbox').val(lang)
		
		if ($(this).css('font-size')=="14px")
		{
			$('.table-nationtable-col').css({'background':'#fff','color':'#000','font-size':'13px'}) 
		
		}else {
			
			$('.table-nationtable-col').css({'background':'#fff','color':'#000','font-size':'13px'}) 			
			$(this).css({'background':'#000','color':'#fff','font-size':'14px'})
		}
	})
	/*-검색창에서 검색시 해당 data 외에는 감춤-*/
	$('.table-search-textbox').keyup(function() {
		var k = $(this).val();
        $(".table-nationtable-col").hide();
        var temp = $(".table-nationtable-col:contains('" + k + "')");
        $(temp).show();
    })
	/*-검색버튼 클릭시 해당 data 반응-*/
	$('.search-btn-filter').stop().click(function(){
		var searchL=document.getElementById('table-search-textbox1').value;
		if ($(".table-nationtable-col:contains('" + searchL + "')"))
		{
			
			if ($('.table-nationtable-col').css('font-size')=="14px")
			{
				$('.table-nationtable-col').css({'background':'#fff','color':'#000','font-size':'13px'}) 
			
			}else {
				
				$('.table-nationtable-col').css({'background':'#fff','color':'#000','font-size':'13px'}) 			
				$(".table-nationtable-col:contains('" + searchL + "')").css({'background':'#000','color':'#fff','font-size':'14px'})
			}
		}		
	})	
		
	/*sub2-1-3 및 달력클릭 이벤트 공통*/
	monsum = 0;
	
	$('.monthchange-day-filter').stop().click(function(){
		if ($(this).parents('.title-monthchange-day').css('font-size')!=='12px')
		{	
			if ($('.title-monthchange-day').css('display')=='table-cell')
			{
				monsum++;
				$(this).parents('.title-monthchange-day').css({'background':'#b2b2b2','font-size':'12px'})			
				if (monsum == 1)
				{
					$('#ghidden1').val(this.parentNode.innerText)
				}else if (monsum == 2)
				{
					if (document.getElementById('ghidden1').value=='')
					{
						$('#ghidden1').val(this.parentNode.innerText)
					}else{
						$('#ghidden2').val(this.parentNode.innerText)
					}
					if (document.getElementById('ghidden2').value-document.getElementById('ghidden1').value>0)
					{
						var gsd1 = document.getElementById("start-day-selectbox1");
						var gsdtb1 = document.getElementById("con-start-day-textbox1");
						var ged1 = document.getElementById("end-day-selectbox1");
						var gedtb1 = document.getElementById("con-end-day-textbox1");

						document.getElementById('start-day-selectbox1').options[0].selected = "selected";
						document.getElementById('start-day-selectbox1').value = 0;
						document.getElementById('start-day-selectbox1').options[document.getElementById('ghidden1').value].selected = "selected";
						document.getElementById('start-day-selectbox1').value = document.getElementById('ghidden1').value;
						
						document.getElementById('end-day-selectbox1').options[0].selected = "selected";
						document.getElementById('end-day-selectbox1').value = 0;
						document.getElementById('end-day-selectbox1').options[document.getElementById('ghidden2').value].selected = "selected";
						document.getElementById('end-day-selectbox1').value = document.getElementById('ghidden2').value;
						
						if (document.getElementById('time-info-con1'))
						{
							gsdtb1.value = '';
							gedtb1.value = '';
							gsdtb1.value = gsd1.options[gsd1.selectedIndex].text.substring(5,10);
							gedtb1.value = ged1.options[ged1.selectedIndex].text.substring(5,10);
						}		
						monsum = 2;
					}else if (document.getElementById('ghidden2').value-document.getElementById('ghidden1').value<0)
					{
						var gsd2 = document.getElementById("start-day-selectbox1");
						var gsdtb2 = document.getElementById("con-start-day-textbox1");
						var ged2 = document.getElementById("end-day-selectbox1");
						var gedtb2 = document.getElementById("con-end-day-textbox1");

						document.getElementById('start-day-selectbox1').options[0].selected = "selected";
						document.getElementById('start-day-selectbox1').value = 0;
						document.getElementById('start-day-selectbox1').options[document.getElementById('ghidden2').value].selected = "selected";
						document.getElementById('start-day-selectbox1').value = document.getElementById('ghidden2').value;
						
						document.getElementById('end-day-selectbox1').options[0].selected = "selected";
						document.getElementById('end-day-selectbox1').value = 0;
						document.getElementById('end-day-selectbox1').options[document.getElementById('ghidden1').value].selected = "selected";
						document.getElementById('end-day-selectbox1').value = document.getElementById('ghidden1').value;	
						
						if (document.getElementById('time-info-con1'))
						{
							gsdtb2.value = '';
							gedtb2.value = '';
							gsdtb2.value = gsd2.options[gsd2.selectedIndex].text.substring(5,10);
							gedtb2.value = ged2.options[ged2.selectedIndex].text.substring(5,10);		
						}
						monsum = 2;
					}
				}else if (monsum > 2)
				{
					alert('시작일과 종료일만 지정 가능합니다.')
					$(this).parents('.title-monthchange-day').css({'background':'#fff','font-size':'13px'})
					
					monsum = 2;
				}
				
			}else{
				sm = document.getElementById("all-select-month1");
				smtb = document.getElementById("info-dday-month1");
				sd = document.getElementById("all-select-day1");
				sdtb = document.getElementById("info-dday-day1");
				sdtb.innerText = sd.options[sd.selectedIndex].text.valueOf();
				st = document.getElementById("all-select-time1");
				sttb = document.getElementById("time-hour-start1");
				sttb.innerText = st.options[st.selectedIndex].text.valueOf();
				ed = document.getElementById("all-select-day2");
				et = document.getElementById("all-select-time2");
				ettb = document.getElementById("time-hour-end1");
				ettb.innerText = et.options[et.selectedIndex].text.valueOf();

				$(this).parents('.title-monthchange-day').css({'background':'#4b3601','font-size':'12px'})
				smtb.innerText = '3월';
				
				monsum++;
				document.getElementById('all-select-month1').options[3].selected = "selected";
				document.getElementById('all-select-month2').options[3].selected = "selected";
				
				if (monsum>2)
				{
					alert('시작일과 종료일만 지정 가능합니다.')
					$(this).parents('.title-monthchange-day').css({'background':'#fff','font-size':'13px'})
					
					monsum = 2;
				}else{
					if (monsum==2)
					{
						if (document.getElementById('hidden-day1').value=='')
						{
							$('#hidden-day1').val(this.parentNode.innerText)
						}else{
							$('#hidden-day2').val(this.parentNode.innerText)
						}
						hidden1 = document.getElementById('hidden-day1').value;
						hidden2 = document.getElementById('hidden-day2').value;
						
						if (hidden2-hidden1<0)
						{
							document.getElementById('all-select-day1').options[0].selected = "selected";
							sd.options[sd.selectedIndex].value = 0;
							document.getElementById('all-select-day2').options[0].selected = "selected";
							ed.options[ed.selectedIndex].value = 0;

							document.getElementById('all-select-day1').options[hidden2].selected = "selected";
							sd.options[sd.selectedIndex].value = hidden2;
							document.getElementById('all-select-day2').options[hidden1].selected = "selected";
							ed.options[ed.selectedIndex].value = hidden1;
							sdtb.innerText = document.getElementById('hidden-day1').value+'일';
							monsum = 2;
						}else{
							document.getElementById('all-select-day1').options[0].selected = "selected";
							sd.options[sd.selectedIndex].value = 0;
							document.getElementById('all-select-day2').options[0].selected = "selected";
							ed.options[ed.selectedIndex].value = 0;
							
							document.getElementById('all-select-day1').options[hidden1].selected = "selected";
							sd.options[sd.selectedIndex].value = hidden1;
							document.getElementById('all-select-day2').options[hidden2].selected = "selected";
							ed.options[ed.selectedIndex].value = hidden2;
							sdtb.innerText = document.getElementById('hidden-day1').value+'일';
							monsum = 2;
						}
					}else if (monsum==1)
					{
						$('#hidden-day1').val(this.parentNode.innerText)
						sdtb.innerText = document.getElementById('hidden-day1').value+'일';
										
					}					
				}
			}
			if (monsum>2)
			{
				alert('시작일과 종료일만 지정 가능합니다.')
				$(this).parents('.title-monthchange-day').css({'background':'#fff','font-size':'13px'})
				monsum = 2;
				smtb.innerText = '월';
				sdtb.innerText = '일';
			}			
		}else{
			$(this).parents('.title-monthchange-day').css({'background':'#fff','font-size':'13px'})	
			monsum--;
						
			if (monsum==1)
			{
				if ($('.title-monthchange-day').css('display')=='table-cell')
				{
					if (document.getElementById('ghidden1').value ==  this.parentNode.innerText)
					{
						document.getElementById('ghidden1').value = '';
					}else{
						document.getElementById('ghidden2').value = '';
					}
				}else{
					hidden1 = document.getElementById('hidden-day1').value;
					hidden2 = document.getElementById('hidden-day2').value;
					document.getElementById('all-select-day2').options[0].selected = "selected";
					ed.options[ed.selectedIndex].value = 0;
					if (document.getElementById('hidden-day1').value == this.parentNode.innerText)
					{
						document.getElementById('hidden-day1').value = '';
					}else{
						document.getElementById('hidden-day2').value = '';
					}
				}
			}else if (monsum==0)
			{
				if ($('.title-monthchange-day').css('display')=='table-cell')
				{
					if (document.getElementById('ghidden1').value==this.parentNode.innerText)
					{
						document.getElementById('ghidden1').value = '';
					}else{
						document.getElementById('ghidden2').value = '';
					}
				}else{
					document.getElementById('all-select-day1').options[0].selected = "selected";
					sd.options[sd.selectedIndex].value = 0;
					if (document.getElementById('hidden-day1').value == this.parentNode.innerText)
					{
						document.getElementById('hidden-day1').value = '';
					}else{
						document.getElementById('hidden-day2').value = '';
					}
				}				
				monsum = 0;
			}else if (monsum<0)
			{
				if ($('.title-monthchange-day').css('display')=='table-cell')
				{
					if (document.getElementById('ghidden1').value==this.parentNode.innerText)
					{
						document.getElementById('ghidden1').value = '';
					}else{
						document.getElementById('ghidden2').value = '';
					}
				}else{
					document.getElementById('all-select-day1').options[0].selected = "selected";
					sd.options[sd.selectedIndex].value = 0;
					if (document.getElementById('hidden-day1').value == this.parentNode.innerText)
					{
						document.getElementById('hidden-day1').value = '';
					}else{
						document.getElementById('hidden-day2').value = '';
					}
				}				
				monsum = 1;
			}
		}		
	})

	$('#start-day-selectbox1').change(function(){
		document.getElementById('ghidden1').value = this.options[this.selectedIndex].value;
		monsum++;
		
		if ((document.getElementById('ghidden1').value!=='')&&(document.getElementById('ghidden2').value!==''))
		{
			if (document.getElementById('ghidden2').value-document.getElementById('ghidden1').value>0)
			{
				$('.title-monthchange-day').css({'background':'#fff','font-size':'13px'})
				if (document.getElementById('ghidden1').value==1)
				{
					$('#title-monthchange-wed1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==2)
				{
					$('#title-monthchange-thu1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==3)
				{						
					$('#title-monthchange-fri1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==4)
				{						
					$('#title-monthchange-sat1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==5)
				{												
					$('#title-monthchange-sun2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==6)
				{
					$('#title-monthchange-mon2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==7)
				{
					$('#title-monthchange-tue2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==8)
				{
					$('#title-monthchange-wed2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==9)
				{
					$('#title-monthchange-thu2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==10)
				{
					$('#title-monthchange-fri2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==11)
				{
					$('#title-monthchange-sat2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==12)
				{
					$('#title-monthchange-sun3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==13)
				{
					$('#title-monthchange-mon3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==14)
				{
					$('#title-monthchange-tue3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==15)
				{
					$('#title-monthchange-wed3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==16)
				{
					$('#title-monthchange-thu3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==17)
				{
					$('#title-monthchange-fri3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==18)
				{
					$('#title-monthchange-sat3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==19)
				{
					$('#title-monthchange-sun4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==20)
				{
					$('#title-monthchange-mon4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==21)
				{
					$('#title-monthchange-tue4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==22)
				{
					$('#title-monthchange-wed4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==23)
				{
					$('#title-monthchange-thu4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==24)
				{
					$('#title-monthchange-fri4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==25)
				{
					$('#title-monthchange-sat4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==26)
				{
					$('#title-monthchange-sun5').css({'background':'#b2b2b2','font-size':'12px'})
				} 
				else if (document.getElementById('ghidden1').value==27)
				{
					$('#title-monthchange-mon5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==28)
				{
					$('#title-monthchange-tue5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==29)
				{
					$('#title-monthchange-wed5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==30)
				{
					$('#title-monthchange-thu5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==31)
				{
					$('#title-monthchange-fri5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				if (document.getElementById('ghidden2').value==1)
				{
					$('#title-monthchange-wed1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==2)
				{
					$('#title-monthchange-thu1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==3)
				{
					$('#title-monthchange-fri1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==4)
				{
					$('#title-monthchange-sat1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==5)
				{
					$('#title-monthchange-sun2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==6)
				{
					$('#title-monthchange-mon2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==7)
				{
					$('#title-monthchange-tue2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==8)
				{
					$('#title-monthchange-wed2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==9)
				{
					$('#title-monthchange-thu2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==10)
				{
					$('#title-monthchange-fri2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==11)
				{
					$('#title-monthchange-sat2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==12)
				{
					$('#title-monthchange-sun3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==13)
				{
					$('#title-monthchange-mon3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==14)
				{
					$('#title-monthchange-tue3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==15)
				{
					$('#title-monthchange-wed3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==16)
				{
					$('#title-monthchange-thu3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==17)
				{
					$('#title-monthchange-fri3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==18)
				{
					$('#title-monthchange-sat3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==19)
				{
					$('#title-monthchange-sun4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==20)
				{
					$('#title-monthchange-mon4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==21)
				{
					$('#title-monthchange-tue4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==22)
				{
					$('#title-monthchange-wed4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==23)
				{
					$('#title-monthchange-thu4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==24)
				{
					$('#title-monthchange-fri4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==25)
				{
					$('#title-monthchange-sat4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==26)
				{
					$('#title-monthchange-sun5').css({'background':'#b2b2b2','font-size':'12px'})
				} 
				else if (document.getElementById('ghidden2').value==27)
				{
					$('#title-monthchange-mon5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==28)
				{
					$('#title-monthchange-tue5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==29)
				{
					$('#title-monthchange-wed5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==30)
				{
					$('#title-monthchange-thu5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==31)
				{
					$('#title-monthchange-fri5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				monsum = 2;
			}else{
				alert('시작일과 종료일을 정확히 설정해주세요.')
				$('.title-monthchange-day').css({'background':'#fff','font-size':'13px'})
				document.getElementById("con-start-day-textbox1").value='';
				document.getElementById("con-end-day-textbox1").value='';
				monsum = 0;
			}
		}else if (document.getElementById('ghidden1').value!=='')
		{
			
			if (document.getElementById('ghidden1').value==1)
			{
				$('#title-monthchange-wed1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==2)
			{
				$('#title-monthchange-thu1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==3)
			{						
				$('#title-monthchange-fri1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==4)
			{						
				$('#title-monthchange-sat1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==5)
			{												
				$('#title-monthchange-sun2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==6)
			{
				$('#title-monthchange-mon2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==7)
			{
				$('#title-monthchange-tue2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==8)
			{
				$('#title-monthchange-wed2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==9)
			{
				$('#title-monthchange-thu2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==10)
			{
				$('#title-monthchange-fri2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==11)
			{
				$('#title-monthchange-sat2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==12)
			{
				$('#title-monthchange-sun3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==13)
			{
				$('#title-monthchange-mon3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==14)
			{
				$('#title-monthchange-tue3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==15)
			{
				$('#title-monthchange-wed3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==16)
			{
				$('#title-monthchange-thu3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==17)
			{
				$('#title-monthchange-fri3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==18)
			{
				$('#title-monthchange-sat3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==19)
			{
				$('#title-monthchange-sun4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==20)
			{
				$('#title-monthchange-mon4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==21)
			{
				$('#title-monthchange-tue4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==22)
			{
				$('#title-monthchange-wed4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==23)
			{
				$('#title-monthchange-thu4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==24)
			{
				$('#title-monthchange-fri4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==25)
			{
				$('#title-monthchange-sat4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==26)
			{
				$('#title-monthchange-sun5').css({'background':'#b2b2b2','font-size':'12px'})
			} 
			else if (document.getElementById('ghidden1').value==27)
			{
				$('#title-monthchange-mon5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==28)
			{
				$('#title-monthchange-tue5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==29)
			{
				$('#title-monthchange-wed5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==30)
			{
				$('#title-monthchange-thu5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==31)
			{
				$('#title-monthchange-fri5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			if (document.getElementById('ghidden2').value==1)
			{
				$('#title-monthchange-wed1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==2)
			{
				$('#title-monthchange-thu1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==3)
			{
				$('#title-monthchange-fri1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==4)
			{
				$('#title-monthchange-sat1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==5)
			{
				$('#title-monthchange-sun2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==6)
			{
				$('#title-monthchange-mon2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==7)
			{
				$('#title-monthchange-tue2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==8)
			{
				$('#title-monthchange-wed2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==9)
			{
				$('#title-monthchange-thu2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==10)
			{
				$('#title-monthchange-fri2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==11)
			{
				$('#title-monthchange-sat2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==12)
			{
				$('#title-monthchange-sun3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==13)
			{
				$('#title-monthchange-mon3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==14)
			{
				$('#title-monthchange-tue3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==15)
			{
				$('#title-monthchange-wed3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==16)
			{
				$('#title-monthchange-thu3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==17)
			{
				$('#title-monthchange-fri3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==18)
			{
				$('#title-monthchange-sat3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==19)
			{
				$('#title-monthchange-sun4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==20)
			{
				$('#title-monthchange-mon4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==21)
			{
				$('#title-monthchange-tue4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==22)
			{
				$('#title-monthchange-wed4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==23)
			{
				$('#title-monthchange-thu4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==24)
			{
				$('#title-monthchange-fri4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==25)
			{
				$('#title-monthchange-sat4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==26)
			{
				$('#title-monthchange-sun5').css({'background':'#b2b2b2','font-size':'12px'})
			} 
			else if (document.getElementById('ghidden2').value==27)
			{
				$('#title-monthchange-mon5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==28)
			{
				$('#title-monthchange-tue5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==29)
			{
				$('#title-monthchange-wed5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==30)
			{
				$('#title-monthchange-thu5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==31)
			{
				$('#title-monthchange-fri5').css({'background':'#b2b2b2','font-size':'12px'})
			}
		}	
	})
	
	$('#end-day-selectbox1').change(function(){
		document.getElementById('ghidden2').value = this.options[this.selectedIndex].value;
		monsum++;
		if ((document.getElementById('ghidden1').value!=='')&&(document.getElementById('ghidden2').value!==''))
		{
			if (document.getElementById('ghidden2').value-document.getElementById('ghidden1').value>0)
			{		
				$('.title-monthchange-day').css({'background':'#fff','font-size':'13px'})
				if (document.getElementById('ghidden1').value==1)
				{
					$('#title-monthchange-wed1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==2)
				{
					$('#title-monthchange-thu1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==3)
				{						
					$('#title-monthchange-fri1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==4)
				{						
					$('#title-monthchange-sat1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==5)
				{												
					$('#title-monthchange-sun2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==6)
				{
					$('#title-monthchange-mon2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==7)
				{
					$('#title-monthchange-tue2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==8)
				{
					$('#title-monthchange-wed2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==9)
				{
					$('#title-monthchange-thu2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==10)
				{
					$('#title-monthchange-fri2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==11)
				{
					$('#title-monthchange-sat2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==12)
				{
					$('#title-monthchange-sun3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==13)
				{
					$('#title-monthchange-mon3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==14)
				{
					$('#title-monthchange-tue3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==15)
				{
					$('#title-monthchange-wed3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==16)
				{
					$('#title-monthchange-thu3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==17)
				{
					$('#title-monthchange-fri3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==18)
				{
					$('#title-monthchange-sat3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==19)
				{
					$('#title-monthchange-sun4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==20)
				{
					$('#title-monthchange-mon4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==21)
				{
					$('#title-monthchange-tue4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==22)
				{
					$('#title-monthchange-wed4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==23)
				{
					$('#title-monthchange-thu4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==24)
				{
					$('#title-monthchange-fri4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==25)
				{
					$('#title-monthchange-sat4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==26)
				{
					$('#title-monthchange-sun5').css({'background':'#b2b2b2','font-size':'12px'})
				} 
				else if (document.getElementById('ghidden1').value==27)
				{
					$('#title-monthchange-mon5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==28)
				{
					$('#title-monthchange-tue5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==29)
				{
					$('#title-monthchange-wed5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==30)
				{
					$('#title-monthchange-thu5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden1').value==31)
				{
					$('#title-monthchange-fri5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				if (document.getElementById('ghidden2').value==1)
				{
					$('#title-monthchange-wed1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==2)
				{
					$('#title-monthchange-thu1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==3)
				{
					$('#title-monthchange-fri1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==4)
				{
					$('#title-monthchange-sat1').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==5)
				{
					$('#title-monthchange-sun2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==6)
				{
					$('#title-monthchange-mon2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==7)
				{
					$('#title-monthchange-tue2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==8)
				{
					$('#title-monthchange-wed2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==9)
				{
					$('#title-monthchange-thu2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==10)
				{
					$('#title-monthchange-fri2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==11)
				{
					$('#title-monthchange-sat2').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==12)
				{
					$('#title-monthchange-sun3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==13)
				{
					$('#title-monthchange-mon3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==14)
				{
					$('#title-monthchange-tue3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==15)
				{
					$('#title-monthchange-wed3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==16)
				{
					$('#title-monthchange-thu3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==17)
				{
					$('#title-monthchange-fri3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==18)
				{
					$('#title-monthchange-sat3').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==19)
				{
					$('#title-monthchange-sun4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==20)
				{
					$('#title-monthchange-mon4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==21)
				{
					$('#title-monthchange-tue4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==22)
				{
					$('#title-monthchange-wed4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==23)
				{
					$('#title-monthchange-thu4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==24)
				{
					$('#title-monthchange-fri4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==25)
				{
					$('#title-monthchange-sat4').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==26)
				{
					$('#title-monthchange-sun5').css({'background':'#b2b2b2','font-size':'12px'})
				} 
				else if (document.getElementById('ghidden2').value==27)
				{
					$('#title-monthchange-mon5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==28)
				{
					$('#title-monthchange-tue5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==29)
				{
					$('#title-monthchange-wed5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==30)
				{
					$('#title-monthchange-thu5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				else if (document.getElementById('ghidden2').value==31)
				{
					$('#title-monthchange-fri5').css({'background':'#b2b2b2','font-size':'12px'})
				}
				monsum = 2;
			}else{
				alert('시작일과 종료일을 정확히 설정해주세요.')
				$('.title-monthchange-day').css({'background':'#fff','font-size':'13px'})
				document.getElementById("con-start-day-textbox1").value='';
				document.getElementById("con-end-day-textbox1").value='';
				monsum = 0;
			}
		}else if (document.getElementById('ghidden2').value!=='')
		{
			$('.title-monthchange-day').css({'background':'#fff','font-size':'13px'})
			if (document.getElementById('ghidden1').value==1)
			{
				$('#title-monthchange-wed1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==2)
			{
				$('#title-monthchange-thu1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==3)
			{						
				$('#title-monthchange-fri1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==4)
			{						
				$('#title-monthchange-sat1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==5)
			{												
				$('#title-monthchange-sun2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==6)
			{
				$('#title-monthchange-mon2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==7)
			{
				$('#title-monthchange-tue2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==8)
			{
				$('#title-monthchange-wed2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==9)
			{
				$('#title-monthchange-thu2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==10)
			{
				$('#title-monthchange-fri2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==11)
			{
				$('#title-monthchange-sat2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==12)
			{
				$('#title-monthchange-sun3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==13)
			{
				$('#title-monthchange-mon3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==14)
			{
				$('#title-monthchange-tue3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==15)
			{
				$('#title-monthchange-wed3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==16)
			{
				$('#title-monthchange-thu3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==17)
			{
				$('#title-monthchange-fri3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==18)
			{
				$('#title-monthchange-sat3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==19)
			{
				$('#title-monthchange-sun4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==20)
			{
				$('#title-monthchange-mon4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==21)
			{
				$('#title-monthchange-tue4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==22)
			{
				$('#title-monthchange-wed4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==23)
			{
				$('#title-monthchange-thu4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==24)
			{
				$('#title-monthchange-fri4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==25)
			{
				$('#title-monthchange-sat4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==26)
			{
				$('#title-monthchange-sun5').css({'background':'#b2b2b2','font-size':'12px'})
			} 
			else if (document.getElementById('ghidden1').value==27)
			{
				$('#title-monthchange-mon5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==28)
			{
				$('#title-monthchange-tue5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==29)
			{
				$('#title-monthchange-wed5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==30)
			{
				$('#title-monthchange-thu5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden1').value==31)
			{
				$('#title-monthchange-fri5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			if (document.getElementById('ghidden2').value==1)
			{
				$('#title-monthchange-wed1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==2)
			{
				$('#title-monthchange-thu1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==3)
			{
				$('#title-monthchange-fri1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==4)
			{
				$('#title-monthchange-sat1').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==5)
			{
				$('#title-monthchange-sun2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==6)
			{
				$('#title-monthchange-mon2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==7)
			{
				$('#title-monthchange-tue2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==8)
			{
				$('#title-monthchange-wed2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==9)
			{
				$('#title-monthchange-thu2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==10)
			{
				$('#title-monthchange-fri2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==11)
			{
				$('#title-monthchange-sat2').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==12)
			{
				$('#title-monthchange-sun3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==13)
			{
				$('#title-monthchange-mon3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==14)
			{
				$('#title-monthchange-tue3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==15)
			{
				$('#title-monthchange-wed3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==16)
			{
				$('#title-monthchange-thu3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==17)
			{
				$('#title-monthchange-fri3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==18)
			{
				$('#title-monthchange-sat3').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==19)
			{
				$('#title-monthchange-sun4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==20)
			{
				$('#title-monthchange-mon4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==21)
			{
				$('#title-monthchange-tue4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==22)
			{
				$('#title-monthchange-wed4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==23)
			{
				$('#title-monthchange-thu4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==24)
			{
				$('#title-monthchange-fri4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==25)
			{
				$('#title-monthchange-sat4').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==26)
			{
				$('#title-monthchange-sun5').css({'background':'#b2b2b2','font-size':'12px'})
			} 
			else if (document.getElementById('ghidden2').value==27)
			{
				$('#title-monthchange-mon5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==28)
			{
				$('#title-monthchange-tue5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==29)
			{
				$('#title-monthchange-wed5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==30)
			{
				$('#title-monthchange-thu5').css({'background':'#b2b2b2','font-size':'12px'})
			}
			else if (document.getElementById('ghidden2').value==31)
			{
				$('#title-monthchange-fri5').css({'background':'#b2b2b2','font-size':'12px'})
			}
		}		
	})
	
	
	$('#table-bottom-btn-filter1').stop().click(function(){
		if ($('.scroll-table-payfilter').css('display')=='none')
		{
			$('#toptitle-backbtn-filter1').css({'display':'none'})
			$('#toptitle-backbtn-filter2').css({'display':'block'})
			$('.scroll-table-payfilter').css({'display':'block'})
		}else{
			alert('결제 모듈이 설치되지 않았습니다.')	
			$('#toptitle-backbtn-filter1').css({'display':'block'})
			$('#toptitle-backbtn-filter2').css({'display':'none'})
			$('.scroll-table-payfilter').css({'display':'none'})
		}
		
	
	})
	
	$('#toptitle-backbtn-filter2').stop().click(function(){
		$('#toptitle-backbtn-filter1').css({'display':'block'})
		$('#toptitle-backbtn-filter2').css({'display':'none'})
		$('.scroll-table-payfilter').css({'display':'none'})
	})

	$('#con-col-btn1').stop().click(function(){
		$('#sec-scroll-whofilter1').css({'display':'block'})
		$('#toptitle-backbtn-filter3').css({'display':'block'})
		
	})
	$('#con-col-btn2').stop().click(function(){
		$('#sec-scroll-whofilter2').css({'display':'block'})
		$('#toptitle-backbtn-filter3').css({'display':'block'})
		
	})

	$('#toptitle-backbtn-filter3').stop().click(function(){
		$('.sec-scroll-whofilter').css({'display':'none'})
		$('.sec-scroll-langfilter').css({'display':'none'})
		
		$(this).css({'display':'none'})
	})
	$('#table-trans-btn1, #table-trans-btn2').stop().click(function(){
		alert('통역신청을 하였습니다.')
		window.open('sub2-1.html','_self')
	})
	
	$('.table-write-btn').stop().click(function(){
		var precol1 = document.getElementById('write-textarea-box1').value;
		var precol2 = document.getElementById('write-textarea-box2').value;
		var date = new Date();
		var year = date.getFullYear(); 
		var month = date.getMonth()+1;
		var day = date.getDate();
		var hour = date.getHours();
		var min = date.getMinutes();
		var today = year+'-'+month+'-'+day;
		var intTime=parseInt(hour,[10]);

		if (min<10)
		{
			var zeromi = "0"
		}else{
			var zeromi = ""
		}
		if (hour<10)
		{
			var zeroh = "0"
		}else{
			var zeroh = ""
		}
		if (day<10)
		{
			var zerod = "0"
		}else{
			var zerod = ""
		}
		if (month<10)
		{
			var zeromo = "0"
		}else{
			var zeromo = ""
		}
		var fullDate = year+'-'+zeromo+month+'-'+zerod+day+' '+zeroh+hour+':'+zeromi+min;
		
		if ($('#sec-scroll-whofilter1').css('display')=='block')
		{
			if ($('#write-textarea-box1').val()!=="")
			{
			if ($('#write-textarea-box1').val()!=="150자 이내로 입력해주세요.")
			{
				$('#scroll-table-reple1').prepend('<div id="" class="table-reple-precol"><div id="" class="table-reple-col"><div id="" class="reple-col-word">'+precol1+'</div><div id="" class="reple-col-time">'+fullDate+'</div></div></div>')
				$('#write-textarea-box1').val('150자 이내로 입력해주세요.')
				$('#write-textarea-box1').css({'color':'#ccc'})
			}else{
					alert('내용을 입력해주세요.')
					$('#write-textarea-box1').val('')
					$('#write-textarea-box1').css({'color':'#000'})
					
			}
			}else{alert('내용을 입력해주세요.')}
		
		}else{
			if ($('#write-textarea-box2').val()!=="")
			{
			if ($('#write-textarea-box2').val()!=="150자 이내로 입력해주세요.")
			{
				$('#scroll-table-reple2').prepend('<div id="" class="table-reple-precol"><div id="" class="table-reple-col"><div id="" class="reple-col-word">'+precol2+'</div><div id="" class="reple-col-time">'+fullDate+'</div></div></div>')
				$('#write-textarea-box2').val('150자 이내로 입력해주세요.')
				$('#write-textarea-box2').css({'color':'#ccc'})
			}else{
					alert('내용을 입력해주세요.')
					$('#write-textarea-box2').val('')
					$('#write-textarea-box2').css({'color':'#000'})
					
			}
			}else{alert('내용을 입력해주세요.')}
		}
	})
	$('#table-trans-btn3, #table-trans-btn4').stop().click(function(){
		$('.sec-scroll-ddayfilter').css({'display':'block'})
		$('#toptitle-backbtn-filter4').css({'display':'block'})
		$('.remove').remove('')
	})
	$('#toptitle-backbtn-filter4').stop().click(function(){
		if ($('.sec-scroll-meetfilter').css('display')=='block')
		{
			if ($('.sec-scroll-ddayfilter').css('z-index')=='15')
			{
				$('.sec-scroll-meetfilter').css({'display':'none'})
			}else{
				$('.sec-scroll-ddayfilter').css({'z-index':'15'})
				
			}
			
			if ($('.scroll-table-payfilter').css('display')=='block')
			{
				$('.scroll-table-payfilter').css({'display':'none'})
				$('.sec-scroll-meetfilter').css({'display':'block'})
			}			
			
			if ($('.scroll-table-cardfilter').css('display')=='block')
			{
				$('.scroll-table-payfilter').css({'display':'block'})
				$('.scroll-table-cardfilter').css({'display':'none'})
			}
			if ($('.scroll-table-compfilter').css('display')=='block')
			{
				$('.scroll-table-cardfilter').css({'display':'block'})
				$('.scroll-table-compfilter').css({'display':'none'})
			}
		}else{
			$('.sec-scroll-ddayfilter').css({'display':'none'})
			$(this).css({'display':'none'})
		}
	})
	$('#table-bottom-btn-filter2').stop().click(function(){
		if ($('.sec-scroll-ddayfilter').css('z-index')=='15')
		{
			$('.sec-scroll-meetfilter').css({'display':'block'})
		}else{
			
			$('.table-dday-scadule').append('<div id="" class="dday-scadule-col"><div class="remove">' + document.getElementById("con-start-day-textbox1").value.substring(3,5) + '일 / 08 ~ ' + document.getElementById("con-start-time-textbox2").value.substring(0,3) + '</div></div><br>')
			$('.table-compfilter-infowrap').append('<div id="" class="compfilter-infowrap-col"><div class="remove">'+document.getElementById("con-start-day-textbox1").value.substring(3,5)+'일/ 08시 ~ '+document.getElementById("con-start-time-textbox2").value.substring(0,3)+'</div></div>')
			alert('등록 되었습니다.')
			if ($('.sec-scroll-ddayfilter').css('z-index')=='15')
			{
				$('.sec-scroll-meetfilter').css({'display':'none'})
			}else{
				$('.sec-scroll-ddayfilter').css({'z-index':'15'})
				
			}
		}
	})
	$('#meetfilter-table-paybtn1').stop().click(function(){
		$('.scroll-table-payfilter').css({'display':'block'})
	})
	
	$('.table-dday-calendarbtn').stop().click(function(){
		$('.sec-scroll-ddayfilter').css({'z-index':'18'})
	})
	
	$('#table-bottom-btn-filter3').stop().click(function(){
		$('.scroll-table-cardfilter').css({'display':'block'})
	
	})
	$('.table-cardfilter-allfilter').stop().click(function(){
		alert('결제 모듈이 설치되지 않았습니다.')
		$('.scroll-table-compfilter').css({'display':'block'})
	})
	$('#table-bottom-btn-filter4').stop().click(function(){
		alert('예약이 완료 되었습니다.')
		$('.sec-scroll-whofilter').css({'display':'none'})
		$('.sec-scroll-meetfilter').css({'display':'none'})
		$('.sec-scroll-ddayfilter').css({'display':'none'})
		$('.scroll-table-payfilter').css({'display':'none'})
		$('.scroll-table-cardfilter').css({'display':'none'})
		$('.scroll-table-compfilter').css({'display':'none'})	
		$('#toptitle-backbtn-filter4').css({'display':'none'})
		$('#toptitle-backbtn-filter3').css({'display':'none'})
	})
	/*sub3-1*/
	$('#who-table-paybtn1').stop().click(function(){
		if (confirm('수락 하시겠습니까?'))
		{
			$('.meetfilter-table-paybtn1').css({'display':'none'})
			$('.meetfilter-table-paybtn2').css({'display':'block'})
			if ($('.meetfilter-table-paybtn2').css('display')=='block')
			{
				
				$('#con-col-btn2').text('완료')
			}
		}else{
			return;
		}		
		
	})
	$('#who-table-paybtn2').stop().click(function(){
		if (confirm('거절 하시겠습니까?'))
		{
			$('#con-col-btn2').remove('')
			$('#con-col-btnwrap2').append('<div id="con-col-btn2" class="con-col-btn">거절</div>')
		}else{
			return;
		}
	})
	
	
	$('#who-table-paybtn3').stop().click(function(){
		$('#sec-scroll-chatfilter1').css({'display':'block'})
		$('#sec-scroll-chatfilter2').css({'display':'none'})
		$('#toptitle-backbtn-filter5').css({'display':'block'})
	})
	
	$('#who-table-paybtn4').stop().click(function(){
		$('#sec-scroll-chatfilter1').css({'display':'none'})
		$('#sec-scroll-chatfilter2').css({'display':'block'})
		$('#toptitle-backbtn-filter5').css({'display':'block'})
	})

	$('#toptitle-backbtn-filter5').stop().click(function(){
		$('.sec-scroll-chatfilter').css({'display':'none'})
		$('.sec-scroll-whofilter2').css({'display':'none'})
		$(this).css({'display':'none'})
	})


	$('.scroll-chatfilter-chatcon').stop().click(function(){
		if ($('.chatfilter-chat-textwrap').css('bottom')!=='0px')
		{
			$('.chatfilter-chat-textwrap').animate({'bottom':'0px'},200)
		}else{
			$('.chatfilter-chat-textwrap').animate({'bottom':'-40px'},200)
		}
	})
	$('#chatfilter-chat-textbox1').keyup(function(){
		var textsend = $(this).val();
		var textleng = textsend.length;
		
		
		if ($(this).val()!=='입력해주세요.')
		{
			if ($(this).val()!=='')
			{
				
				if (textsend !== ' ')
				{
					$('.chat-textbtn-blockfilter').css({'display':'none'})
					$('.chatfilter-chat-textbtn').css({'color':'#000'})
				}else{
					
					$('.chat-textbtn-blockfilter').css({'display':'block'})
					$('.chatfilter-chat-textbtn').css({'color':'#ccc'})
				}
				
			}else{
				
				$('.chat-textbtn-blockfilter').css({'display':'block'})
				$('.chatfilter-chat-textbtn').css({'color':'#ccc'})
			}
		}else{
			
			$('.chat-textbtn-blockfilter').css({'display':'block'})
			$('.chatfilter-chat-textbtn').css({'color':'#ccc'})
		}
	})
	$('#chatfilter-chat-textbox2').keyup(function(){
		var textsend = $(this).val();
		var textleng = textsend.length;
		
		
		if ($(this).val()!=='입력해주세요.')
		{
			if ($(this).val()!=='')
			{
				
				if (textsend !== ' ')
				{
					$('.chat-textbtn-blockfilter').css({'display':'none'})
					$('.chatfilter-chat-textbtn').css({'color':'#000'})
				}else{
					
					$('.chat-textbtn-blockfilter').css({'display':'block'})
					$('.chatfilter-chat-textbtn').css({'color':'#ccc'})
				}
				
			}else{
				
				$('.chat-textbtn-blockfilter').css({'display':'block'})
				$('.chatfilter-chat-textbtn').css({'color':'#ccc'})
			}
		}else{
			
			$('.chat-textbtn-blockfilter').css({'display':'block'})
			$('.chatfilter-chat-textbtn').css({'color':'#ccc'})
		}
	})

	$('.chatfilter-chat-textbtn').stop().click(function(){
		var chating1 = document.getElementById('chatfilter-chat-textbox1').value;
		var chating2 = document.getElementById('chatfilter-chat-textbox2').value;
		var date = new Date();
		var year = date.getFullYear(); 
		var month = date.getMonth()+1;
		var day = date.getDate();
		var hour = date.getHours();
		var min = date.getMinutes();
		var today = year+'-'+month+'-'+day;
		var intTime=parseInt(hour,[10]);
						
		if (min<10)
		{
			var zerom = "0";
		}else{
			var zerom = "";
		}
		if (hour>=12)
		{
			var apm = "오후 ";
			
			hour = intTime-12;
			
		}else{
			var apm = "오전 ";
			
		}
		
		var time = apm+hour+':'+zerom+min;
		if ($('#sec-scroll-chatfilter1').css('display')=='block')
		{
			$('#scroll-chatfilter-chatcon1').append('<div class="remove"><div id="" class="chatfilter-chatcon-talkwrap2"><div id="" class="chatfilter-chatcon-talk2">'+chating1+'</div><div id="" class="chatfilter-chatcon-time">'+time+'</div></div></div>')
			$('#chatfilter-chat-textbox1').val('입력해주세요.')
			$('#chatfilter-chat-textbox1').css({'color':'#ccc'})
			$('.chat-textbtn-blockfilter').css({'display':'block'})
			$('.chatfilter-chat-textbtn').css({'color':'#ccc'})
		}else{
			$('#scroll-chatfilter-chatcon2').append('<div class="remove"><div id="" class="chatfilter-chatcon-talkwrap2"><div id="" class="chatfilter-chatcon-talk2">'+chating2+'</div><div id="" class="chatfilter-chatcon-time">'+time+'</div></div></div>')
			$('#chatfilter-chat-textbox2').val('입력해주세요.')
			$('#chatfilter-chat-textbox2').css({'color':'#ccc'})
			$('.chat-textbtn-blockfilter').css({'display':'block'})
			$('.chatfilter-chat-textbtn').css({'color':'#ccc'})
		}
		
	})
	/*sub3-2*/
	$('#table-transwho-btn1').stop().click(function(){
		$('#sec-scroll-whofilter4').css({'display':'block'})
		$('#toptitle-backbtn-filter5').css({'display':'block'})
	})
	$('#table-transwho-btn2').stop().click(function(){
		$('#sec-scroll-whofilter3').css({'display':'block'})
		$('#toptitle-backbtn-filter5').css({'display':'block'})
	})
	$('#who-table-canclebtn1').stop().click(function(){
		$('.sec-scroll-who-allfilter').css({'display':'block'})
	})
	$('#who-table-canclebtn1').stop().click(function(){
		$('.sec-scroll-who-allfilter').css({'display':'block'})
		$('.who-allfilter-confirm').css({'display':'none'})
		$('#who-allfilter-confirm3').css({'display':'block'})
	})
	$('.confirm-word-btn2').stop().click(function(){
		$('.sec-scroll-who-allfilter').css({'display':'none'})
		$('.sec-scroll-whofilter,.sec-scroll-whofilter2').css({'display':'none'})
		$('#toptitle-backbtn-filter3, #toptitle-backbtn-filter4, #toptitle-backbtn-filter5').css({'display':'none'})
	})
	$('#who-table-canclebtn2').stop().click(function(){
		$('.sec-scroll-who-allfilter').css({'display':'block'})
		$('.who-allfilter-confirm').css({'display':'none'})
		$('#who-allfilter-confirm1').css({'display':'block'})
	})
	$('#confirm-word-btn1').stop().click(function(){
		$('.who-allfilter-confirm').css({'display':'none'})
		$('#who-allfilter-confirm2').css({'display':'block'})
	})
	$('#confirm-word-btn2').stop().click(function(){
		$('.sec-scroll-who-allfilter').css({'display':'none'})
	})
	$('#confirm-word-btn3').stop().click(function(){
		$('.sec-scroll-who-allfilter').css({'display':'none'})
		$('.sec-scroll-whofilter,.sec-scroll-whofilter2').css({'display':'none'})
		$('#toptitle-backbtn-filter3, #toptitle-backbtn-filter4, #toptitle-backbtn-filter5').css({'display':'none'})
		$('#table-con-col1').css({'display':'none'})
	})
	$('#confirm-word-btn4').stop().click(function(){
		$('.sec-scroll-who-allfilter').css({'display':'none'})
		
	})
	/*sub4-1*/
	$('.con-img-filter').stop().click(function(){
		$('.sec-scroll-photofilter').css({'display':'block'})		
		$('#in-img-select1').css({'display':'none'})
		document.getElementById('fileName').value=''
		$('#con-img-show1').css({'display':'block'})
		$('#con-img-show2').css({'display':'none'})
		$('.con-img-filter').text('사진등록')
	})
	$('#find-img-btn').stop().mousedown(function(){
		$(this).css({'background':'#ccc','color':'#888'})
	})
	$('#find-img-btn').stop().mouseup(function(){
		$(this).css({'background':'#ddd','color':'#000'})
		
	})
	$('#find-img-btn').stop().click(function(){
		$('#in-img-select1').css({'display':'block'})
		document.getElementById('fileName').value='/images/girlphoto1.jpg'		
	})
	$('#table-box-btn1').stop().click(function(){
		if ($('#in-img-select1').css('display')=='block')
		{
			$('#con-img-show1').css({'display':'none'})
			$('#con-img-show2').css({'display':'block'})
			$('.sec-scroll-photofilter').css({'display':'none'})
			if ($('#con-img-show1').css('display')!=='block')
			{
				$('.con-img-filter').text('')
			}else{
				$('.con-img-filter').text('사진등록')
			}
		}else{
			alert('사진을 선택해주세요.')
		}
	})
	$('#table-box-btn2').stop().click(function(){
		$('.sec-scroll-photofilter').css({'display':'none'})
		$('.con-img-filter').text('사진등록')
	})
	$('#table-box-btn2').stop().click(function(){
		$('.sec-scroll-photofilter').css({'display':'none'})
		$('.con-img-filter').text('사진등록')
	})
	$('.row-td-languagebtn').stop().click(function(){
		$('.sec-scroll-langfilter').css({'display':'block'})
		$('#toptitle-backbtn-filter3').css({'display':'block'})
	})
	$('#table-bottom-langbtn1').stop().click(function(){
		$('#row-td-inputwrap1').remove('')
		$('#box-row-td5').append('<div id="row-td-inputwrap1" class="row-td-inputwrap">'+lang+'</div>')
		$('.sec-scroll-langfilter').css({'display':'none'})
		$('#toptitle-backbtn-filter3').css({'display':'none'})
	})
	$('#table-bottom-submitbtn1').stop().click(function(){
		alert('등록 되었습니다.')
		window.open('sub4.html','_self')
	})

	/*sub4-2*/
	$('#table-cardfilter-allfilter2').stop().click(function(){
		$('.scroll-table-cardfilter').css({'display':'block'})
		$('#toptitle-backbtn-filter6').css({'display':'block'})
	})
	$('#table-cardfilter-allfilter3').stop().click(function(){
		window.open('sub4.html','_self')
	})
	$('#toptitle-backbtn-filter6').stop().click(function(){
		$('.scroll-table-cardfilter').css({'display':'none'})
		$(this).css({'display':'none'})
	})
	
	/*sub4-3*/
	$('.toptitle-plus-filter').stop().click(function(){
		$('.sec-scroll-selectfilter').css({'z-index':'6','opacity':'1'})
		$('#toptitle-backbtn-filter7').css({'display':'block'})
		$('.sec-toptitle-plus').css({'display':'none'})
	})
	$('#toptitle-backbtn-filter7').stop().click(function(){
		$('.sec-scroll-selectfilter').css({'z-index':'-1','opacity':'0'})
		$(this).css({'display':'none'})
		$('.sec-toptitle-plus').css({'display':'block'})
	})
	$('#all-select-day1').change(function(){
		document.getElementById('hidden-day1').value = this.options[this.selectedIndex].value;
		if ((document.getElementById('hidden-day1').value!=='')&&(document.getElementById('hidden-day2').value!==''))
		{
			monsum = 2;
		}else if (document.getElementById('hidden-day1').value=='')
		{
			monsum++;
		}		
	})
	$('#all-select-day2').change(function(){
		document.getElementById('hidden-day2').value = this.options[this.selectedIndex].value;
		if ((document.getElementById('hidden-day1').value!=='')&&(document.getElementById('hidden-day2').value!==''))
		{
			monsum = 2;
		}else if (document.getElementById('hidden-day2').value=='')
		{
			monsum++;
		}		
	})
	$('.selectfilter-bottom-btn').stop().click(function(){
		sm = document.getElementById("all-select-month1");
		smtb = document.getElementById("info-dday-month1");
		sd = document.getElementById("all-select-day1");
		sdtb = document.getElementById("info-dday-day1");
		sdtb.innerText = sd.options[sd.selectedIndex].text.valueOf();
		st = document.getElementById("all-select-time1");
		sttb = document.getElementById("time-hour-start1");
		sttb.innerText = st.options[st.selectedIndex].text.valueOf();
		ed = document.getElementById("all-select-day2");
		et = document.getElementById("all-select-time2");
		ettb = document.getElementById("time-hour-end1");
		ettb.innerText = et.options[et.selectedIndex].text.valueOf();
		hidden1 = document.getElementById('hidden-day1').value;
		hidden2 = document.getElementById('hidden-day2').value;
		
		if (sm.options[sm.selectedIndex].value>=3)
		{
			if (sm.options[sm.selectedIndex].value>4)
			{
				alert('다음 달 까지만 선택이 가능합니다.')
			}else{
				smtb.innerText = sm.options[sm.selectedIndex].text.valueOf();
				$('.sec-scroll-selectfilter').css({'z-index':'-1','opacity':'0'})
				$('#toptitle-backbtn-filter7').css({'display':'none'})
				$('.sec-toptitle-plus').css({'display':'block'})
			}
		}else{
			alert('지난 달은 선택 하실 수 없습니다.')
		}
		if (monsum==2)
		{
			if (sd.value-ed.value < 0)
			{					
				$('.title-monthchange-day').css({'background':'#fff','font-size':'13px'})
				if (hidden1==1)
				{
					$('#title-monthchange-wed1').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==2)
				{
					$('#title-monthchange-thu1').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==3)
				{						
					$('#title-monthchange-fri1').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==4)
				{						
					$('#title-monthchange-sat1').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==5)
				{												
					$('#title-monthchange-sun2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==6)
				{
					$('#title-monthchange-mon2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==7)
				{
					$('#title-monthchange-tue2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==8)
				{
					$('#title-monthchange-wed2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==9)
				{
					$('#title-monthchange-thu2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==10)
				{
					$('#title-monthchange-fri2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==11)
				{
					$('#title-monthchange-sat2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==12)
				{
					$('#title-monthchange-sun3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==13)
				{
					$('#title-monthchange-mon3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==14)
				{
					$('#title-monthchange-tue3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==15)
				{
					$('#title-monthchange-wed3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==16)
				{
					$('#title-monthchange-thu3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==17)
				{
					$('#title-monthchange-fri3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==18)
				{
					$('#title-monthchange-sat3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==19)
				{
					$('#title-monthchange-sun4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==20)
				{
					$('#title-monthchange-mon4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==21)
				{
					$('#title-monthchange-tue4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==22)
				{
					$('#title-monthchange-wed4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==23)
				{
					$('#title-monthchange-thu4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==24)
				{
					$('#title-monthchange-fri4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==25)
				{
					$('#title-monthchange-sat4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==26)
				{
					$('#title-monthchange-sun5').css({'background':'#4b3601','font-size':'12px'})
				} 
				else if (hidden1==27)
				{
					$('#title-monthchange-mon5').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==28)
				{
					$('#title-monthchange-tue5').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==29)
				{
					$('#title-monthchange-wed5').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==30)
				{
					$('#title-monthchange-thu5').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden1==31)
				{
					$('#title-monthchange-fri5').css({'background':'#4b3601','font-size':'12px'})
				}
				if (hidden2==1)
				{
					$('#title-monthchange-wed1').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==2)
				{
					$('#title-monthchange-thu1').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==3)
				{
					$('#title-monthchange-fri1').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==4)
				{
					$('#title-monthchange-sat1').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==5)
				{
					$('#title-monthchange-sun2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==6)
				{
					$('#title-monthchange-mon2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==7)
				{
					$('#title-monthchange-tue2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==8)
				{
					$('#title-monthchange-wed2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==9)
				{
					$('#title-monthchange-thu2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==10)
				{
					$('#title-monthchange-fri2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==11)
				{
					$('#title-monthchange-sat2').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==12)
				{
					$('#title-monthchange-sun3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==13)
				{
					$('#title-monthchange-mon3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==14)
				{
					$('#title-monthchange-tue3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==15)
				{
					$('#title-monthchange-wed3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==16)
				{
					$('#title-monthchange-thu3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==17)
				{
					$('#title-monthchange-fri3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==18)
				{
					$('#title-monthchange-sat3').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==19)
				{
					$('#title-monthchange-sun4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==20)
				{
					$('#title-monthchange-mon4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==21)
				{
					$('#title-monthchange-tue4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==22)
				{
					$('#title-monthchange-wed4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==23)
				{
					$('#title-monthchange-thu4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==24)
				{
					$('#title-monthchange-fri4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==25)
				{
					$('#title-monthchange-sat4').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==26)
				{
					$('#title-monthchange-sun5').css({'background':'#4b3601','font-size':'12px'})
				} 
				else if (hidden2==27)
				{
					$('#title-monthchange-mon5').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==28)
				{
					$('#title-monthchange-tue5').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==29)
				{
					$('#title-monthchange-wed5').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==30)
				{
					$('#title-monthchange-thu5').css({'background':'#4b3601','font-size':'12px'})
				}
				else if (hidden2==31)
				{
					$('#title-monthchange-fri5').css({'background':'#4b3601','font-size':'12px'})
				}
				monsum = 2;		
			}else if(sd.value-ed.value > 0){
				
				alert('시작일과 종료일을 정확히 설정해주세요.')
				$('.title-monthchange-day').css({'background':'#fff','font-size':'13px'})		
				smtb.innerText = '월';
				sdtb.innerText = '일';
				document.getElementById('all-select-day1').options[0].selected = "selected";
				document.getElementById('all-select-day2').options[0].selected = "selected";
				sd.options[sd.selectedIndex].value = 0;
				ed.options[ed.selectedIndex].value = 0;
				monsum = 0;
			}else if (sd.value-ed.value == 0)
			{
				/*
				if (document.getElementById('hidden-day1').value<10)
				{
					document.getElementById('hidden-day1').value = sd.options[sd.selectedIndex].value.substring(1);
				}else{
					document.getElementById('hidden-day1').value;
				}
				if (document.getElementById('hidden-day2').value<10)
				{
					document.getElementById('hidden-day2').value = ed.options[ed.selectedIndex].value.substring(1)
				}else{
					document.getElementById('hidden-day2').value;
				}
				*/
				alert('시작일과 종료일을 정확히 설정해주세요.')
				$('.title-monthchange-day').css({'background':'#fff','font-size':'13px'})		
				smtb.innerText = '월';
				sdtb.innerText = '일';
				document.getElementById('all-select-day1').options[0].selected = "selected";
				document.getElementById('all-select-day2').options[0].selected = "selected";
				sd.options[sd.selectedIndex].value = 0;
				ed.options[ed.selectedIndex].value = 0;
				monsum = 0;
			}
		}else if (monsum < 2)
		{
			alert('시작일과 종료일을 정확히 설정해주세요.')
			$('.title-monthchange-day').css({'background':'#fff','font-size':'13px'})		
			smtb.innerText = '월';
			sdtb.innerText = '일';
			document.getElementById('all-select-day1').options[0].selected = "selected";
			document.getElementById('all-select-day2').options[0].selected = "selected";
			sd.options[sd.selectedIndex].value = 0;
			ed.options[ed.selectedIndex].value = 0;
			monsum = 0;
		}
	})	
		
	/*sub4-4*/
	$('#table-cardfilter-allfilter4').stop().click(function(){
		window.open('sub4.html','_self')
	})
	return false;
}); 
