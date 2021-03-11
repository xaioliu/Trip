// 返回顶部
$(function () {
    window.gotoTop = function(options) {
        // 默认参数
        var defaults = {
            bottom: '100px'
        }
        // 参数合并
        var parms = $.extend({}, defaults, options)
        // 准备返回结构
        var $gotoTopHtml = $(`<div class="backToTop">
                    <img src = "${parms.imgUrl}" alt="">
                    </div>`);
        // 样式
        $gotoTopHtml.css({
            width: '38px',
            height: '50px',
            position: 'fixed',
            bottom:parms.bottom,
            left: '550px',
            marginLeft: '55%',
            display: 'none',
        });
        $(document).scroll(function() {
            // 获取距离顶部的位置
            var topDistance = $('html, body').scrollTop();
            // 做距离判断
            if (topDistance > 500) {
                $('.backToTop').show();
            } else {
                $('.backToTop').hide();
            }
        })
        // 返回顶部(动态添加的元素 需要事件的委托)
        $('body').on('click', '.backToTop', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 300)
        })
        // 追加到页面尾部
        $('body').append($gotoTopHtml)
    }
})