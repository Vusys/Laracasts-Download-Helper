// ==UserScript==
// @name        Laracasts Download Helper
// @namespace   Vusys
// @include     https://laracasts.com/series/*
// @version     7
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==

jQuery(document).ready(function ($) {

    $('body').append('<a class="vdl" style="position:fixed;bottom:25px;left:25px;background:black;color:white;padding:5px;">Get yt-dlp commands</a>');

    $('body').append('<span class="vdl-links" style="position:fixed;top:50px;left:25px;background:black;color:white;padding:5px 10px;max-width: 99%;overflow: scroll;font-family: monospace;font-size:10px;"></span>');

    $(document).on('click', '.vdl', function () {
        $(this).slideToggle();

        let data = $('#app').data('page');

        data.props.series.chapters.forEach(function(chapter){
            chapter.episodes.forEach(function(episode){
                $('.vdl-links').append('yt-dlp --referer https://laracasts.com https://player.vimeo.com/video/' + episode.vimeoId + "<br>");
            });
        });
    });
});
