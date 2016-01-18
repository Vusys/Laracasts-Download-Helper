// ==UserScript==
// @name        Laracasts Download Helper
// @namespace   Vusys
// @include     https://laracasts.com/series/*
// @version     1
// @grant       none
// ==/UserScript==

$('.Lesson-List__item').each(function(index){

	var id = $(this).find('input[name="lesson-id"]').val();
	var title = $(this).find('.episode-title a').text().trim();

	var dl = '<a href="/downloads/'+id+'?type=episode" title="'+ (index+1) + ' - ' +title+'" class="Button Button--with-icon"> <span>Download</span></a>';

	$(this).append( '<td>' + dl + '</td>' );

});
