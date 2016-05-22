var defaultPage = 'page-login';
//var defaultPage = 'page-loading';
//var defaultPage = 'page-dashboard';
//var defaultPage = 'page-track-mic';
//var defaultPage = 'page-track-sliders';
//var defaultPage = 'page-track-confirm';
//var defaultPage = 'page-track-graph';

$(document).ready(function () {
    $('.page').addClass('hidden');
    $('#' + defaultPage).removeClass('hidden');

    $('[data-target]').click(function(e) {
        $('.page').addClass('hidden');
        $('#' + $(this).data('target')).removeClass('hidden');
        e.stopPropagation();
    });

    $('body').click(function (e) {
        if (!$(e.target).attr('data-target')) {
            $('[data-target]').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        }
        e.stopPropagation();
    });
});
