jQuery(document).ready(function($) {

    $('.tab').hide();
    $('#sidebar nav li').removeClass('active');

    $('.tab').first().show();
    $('#sidebar nav li').first().addClass('active');

    function setTabActive(target) {

        var _this = $('#sidebar nav li a[href="' + target + '"]');

        if(_this.length) {

            var tabEl = _this.parent().parent().parent().parent();
            var sectionEl = tabEl.children('section');

            window.location.hash = target;

            $('#content header h1').text(_this.text());
            document.title = _this.text() + ' - Framy CSS';

            $('#sidebar nav li').removeClass('active');
            $('.tab').hide();

            _this.parent().addClass('active');
            $('#content').find(target).show();

        }

    }

    if(window.location.hash) {
        setTabActive(window.location.hash);
    }

    $(document).on('click', '#sidebar nav li a', function(e) {
        e.preventDefault();
        setTabActive($(this).attr('href'));
        $('#sidebar').removeClass('show');
        $('#overlay').fadeOut(200);
    });

    $(document).on('click', '#content header .menu', function(e) {
        $('#overlay').fadeToggle(200, function() {
            $('#sidebar').toggleClass('show');
        });
    });

});
