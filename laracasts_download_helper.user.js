// ==UserScript==
// @name        Laracasts Download Helper
// @namespace   Vusys
// @include     https://laracasts.com/series/*
// @version     1
// @grant       none
// ==/UserScript==

$('.episode-wrap').each(function(index){

	var id = $(this).find('input[name="lesson-id"]').val();
	var title = $(this).find('.episode-title a').text().trim();

	var dl = '<a href="/downloads/'+id+'?type=episode" title="'+ (index+1) + ' - ' +title+'" class="dl flaticon stroke btn-primary btn btn-xs icon-cloud"> <span>Download</span></a>';

	$(this).append( '<td>' + dl + '</td>' );

});
