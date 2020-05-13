/*
 *
 *  name: baseMotheds
 *  author: tonney
 *  date: 2019/04/17 10:30
 *
 */
$(function() {
    baseMotheds.init();
});

// baseMotheds
var baseMotheds = function() {
    var scrollTop = function() {
        var offset = 300,
            offset_opacity = 1200,
            scroll_top_duration = 700,
            $back_to_top = $('.backTop');
        $(window).scroll(function() {
            ($(this).scrollTop() > offset) ? $back_to_top.addClass('backTopVisible'): $back_to_top.removeClass('backTopVisible cd-fade-out');
            if ($(this).scrollTop() > offset_opacity) {
                $back_to_top.addClass('cd-fade-out');
            }
        });
        $back_to_top.on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration);
        });
    };
    return {
        init: function() {
            scrollTop();
        }
    }
}();