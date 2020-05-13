/*
 *
 *  name: detailMotheds
 *  author: tonney
 *  date: 2020/03/30 11:15
 *
 */
$(function() {
    scrollNav();
});
var scrollNav = function() {
    if ($("#fullPitch").length > 0) {
        var headGroup = $('#fullPitch').height();
        $(window).bind("scroll resize", function() {
            if ($(window).scrollTop() > headGroup) {
                $('#navGrid').removeClass('white').addClass('fixed');
            } else {
                $('#navGrid').removeClass('fixed').addClass('white');
            }
        });
    }
};

function check_comm(obj) {
    var content = obj.content.value.trim();
    if (content === '') {
        layer.msg('哎呀，你好像忘记写评论了？');
        return false;
    }
}