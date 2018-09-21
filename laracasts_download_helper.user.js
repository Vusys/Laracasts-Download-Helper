// ==UserScript==
// @name        Laracasts Download Helper
// @namespace   Vusys
// @include     https://laracasts.com/series/*
// @version     3
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==

$(document).ready(function () {

    $('body').append('<a class="button vdl" style="position:fixed;bottom:25px;left:25px;">Get Download Buttons</a>');

    $(document).on('click', '.vdl', function () {

        $(this).slideToggle();

        $('.episode-list-item').each(function (index) {
            var title = $(this).find('.episode-list-title a').text().trim();
            var url = $(this).find('.episode-list-title a').attr('href');
            var that = $(this);

            $.get(url, function (data) {
                video_src = $(data).find('a.button.for-download ').attr('href');
                var dl = '<a href="' + video_src + '" title="' + (index + 1) + ' - ' + title + '" target="_blank" class="button"> <span>Download</span></a>';
                that.append('<span class="">' + dl + '</span>');
            });

        });

    });

});
