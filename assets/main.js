var defaultPage = 'page-login';
//var defaultPage = 'page-loading';
//var defaultPage = 'page-dashboard';
//var defaultPage = 'page-track';
//var defaultPage = 'page-track-confirm';

$(document).ready(function () {
    $('.page').addClass('hidden');
    $('#' + defaultPage).removeClass('hidden');

    $('[data-target]').click(function() {
        $('.page').addClass('hidden');
        $('#' + $(this).data('target')).removeClass('hidden');
    });
});
