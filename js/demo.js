// 换一批商品交互
$(function () {
    var index = 0;
    $('.change').click(function() {
        // 自增
        index++;
        // 边界判断
        // 让里面的盒子动起来
        $('.inner-box').stop(true).animate({
            left: -index * 1200,
        }, function() {
            if (index === 2) {
                index = 0;
                $('.inner-box').css('left', 0);
            }
        })
    });
})

// 侧边导航栏功能
$(function () {
    $('#btn').click(function () {
        $('#mulu').fadeToggle();
    });
});

// 二维码展示
$(function () {
    $('#WX').mouseenter(function () {
        $('#QR').show();
        $('#QR').css("marginLeft", "345px");
        $('#QR').css("marginTop", "-245px")
    });
    $('#WX').mouseleave(function () {
        $('#QR').hide();
    })
})


// 酒店推荐
$(function () {
    $('.hotal .hotal-title ul li').mouseenter(function() {
        $(this).addClass('active').siblings().removeClass('active');
        // 内容介绍
        // 获取对应索引
        var index = $(this).index();
        // 左右移动
        console.log(index)
        $('.hotal .innerbox').animate({
            'left': -index * 1200
        });
    })
})

// 新闻页面的手风琴效果
$(function () {
    $('p').mouseenter(function () {
        $('p').css("cursor", "pointer");
        $(this).toggleClass(".current").siblings('p').removeClass(".current");
        $(this).next("div").slideToggle().siblings("div").slideUp();
    });
    $('p').mouseleave(function () {
        $('p').css("cursor", "pointer");
        $(this).toggleClass(".current").siblings('p').removeClass(".current");
        $(this).next("div").slideToggle().siblings("div").slideUp();
    })
})  


