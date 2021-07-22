// ==UserScript==
// @name        Laracasts Download Helper
// @namespace   Vusys
// @include     https://laracasts.com/series/*
// @version     6
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==

jQuery(document).ready(function ($) {

    $('body').append('<a class="tw-text-center lg:tw-block tw-button tw-border tw-border-solid tw-border-white is-white tw-mr-4 tw-text-xs vdl" style="position:fixed;bottom:25px;left:25px;">Get Download Buttons</a>');

    $(document).on('click', '.vdl', function () {

        $(this).slideToggle();

        $('.episode-list-title').each(function (index) {
            var title = $(this).find('a.tw-text-black').text().trim();
            var url = $(this).find('a.tw-text-black').attr('href');
            var that = $(this);

            $.get('https://laracasts.com' + url, function (data) {
                json = $('<div></div>').append($.parseHTML(data)).find('#app').data('page');

                var dl = '<a href="' + json.props.downloadLink + '" title="' + (index + 1) + ' - ' + title + '" target="_blank" class="button"> <span>Download</span></a>';
                that.parent().parent().parent().parent().append('<span class="">' + dl + '</span>');
            });


        });

    });

});
