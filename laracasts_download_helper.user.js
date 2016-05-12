// ==UserScript==
// @name        Laracasts Download Helper
// @namespace   Vusys
// @include     https://laracasts.com/series/*
// @version     2
// @grant       none
// ==/UserScript==

$(document).ready(function () {

	$('body').append('<a class="Button vdl" style="position:fixed;bottom:25px;left:25px;width:100px;">Get Download Buttons</a>');

	$(document).on('click', '.vdl', function () {

		$(this).slideToggle();

		$('.Lesson-List__item').each(function (index) {
			
			var id = $(this).find('input[name="lesson-id"]').val();
			var title = $(this).find('.Lesson-List__title a').text().trim();
			var url = $(this).find('.Lesson-List__title a').attr('href');
			var that = $(this);

			$.get(url, function (data) {
				video_src = $(data).find('video source').attr('src');
				var dl = '<a href="' + video_src + '" title="' + (index + 1) + ' - ' + title + '" target="_blank" class="Button Button--with-icon"> <span>Download</span></a>';
				that.append('<span class="">' + dl + '</span>');
			});

		});

	});

});
