jQuery(document).ready(function($) {

    $('.form-group input.form-field').focus(function(e) {
        $(this).parent().addClass('focus');
    });

    $('.form-group input.form-field').blur(function(e) {
        $(this).parent().removeClass('focus');
    });

    $('.form-group > span').click(function(e) {
        $(this).parent().children('input').focus();
    });

    $('.password .icon-view').click(function(e) {
        if(!$(this).hasClass('active')) {
            $(this).parent().children('input').attr('type', 'text').focus();
        } else {
            $(this).parent().children('input').attr('type', 'password').focus();
        }
        $(this).toggleClass('active');
    });

    $('select.form-select').each(function(e) {

        var classes = $(this).attr('class'),
        id = $(this).attr('id'),
        name = $(this).attr('name'),
        value = $(this).find(':selected').text();

        var template =  '<div class="' + classes + '">';
        template += '<span>' + value + '</span>';
        template += '<div>';
        $(this).find('option').each(function() {
            template += '<span class="' + $(this).attr('class') + '" data-value="' + $(this).attr('value') + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).hide();
        $(this).before(template);

    });

    $('.form-select:not(.disabled) > span').on('click', function(e) {
        $('html').one('click',function(e) {
            $('.form-select').removeClass('open');
        });
        $(this).parent().toggleClass('open');
        e.stopPropagation();
    });

    $('.form-select > div > span').on('click', function(e) {
        var div = $(this).parent().parent();
        var select = div.next('select');
        select.val($(this).data('value')).trigger('change');
        $(this).parent().children('span').removeClass('active');
        $(this).addClass('active');
        div.removeClass('open').children('span').text($(this).text());
    });

    $('[data-tooltip]').hover(function(e){
        var title = $(this).data('tooltip');
        $('<div/>').addClass('tooltip').text(title).appendTo('body').fadeIn(150);
    }, function() {
        $('.tooltip').fadeOut(150, function(e) {
            $(this).remove();
        });
    }).mousemove(function(e) {
        var mousex = e.pageX + 12,
        mousey = e.pageY + 8;
        $('.tooltip').css({
            top: mousey,
            left: mousex
        });
    });

});
