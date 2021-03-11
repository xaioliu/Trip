// 图片轮播
$(function () {
    var index = 0;
    $('.content .right').click(function () {
        index++;
        console.log(index)
        $('.inner-box').stop(true).animate({
            'left': -index * 1204,
        }, function () {
            if (index === 2) {
                index = 0;
                $('.inner-box').css('left', 0);
            }
        });
    });
});

// 基本信息
$(function () {
    // 先定义个变量
    var index = 0;
   $('ul li #show').click(function () {
    //    当点击一次这个变量就加1
        index++;
       $(this).next('.set-up').show();
       console.log(index);
       var indexs = index +1; 
    //    在定以一个变量储存相加的值
       if (indexs % 2 == 1) {
        //    判断这个变量的属性，是基数就显示，是偶数就关闭
        $(this).next('.set-up').hide();
       }
   });
})
