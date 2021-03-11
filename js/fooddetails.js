$(function () {
    // 导航菜单的显示和影藏
    $('ul li').mouseenter(function () {
        $(this).css("background-color", "rgb(72, 209, 102)");
        $(this).css("color", "green");
        $(this).find('.cont').fadeIn();
    })
    $('ul li').mouseleave(function () {
        $(this).css("background-color", "rgb(141, 243, 243)");
        $(this).css("color", "green");
        $(this).find('.cont').fadeOut();

    });


    // 菜品放大后
    $('.foodHeader table tr .delete img').click(function () {
        $('.foodImg').show();
    });
    $('.foodImg .shut-down').click(function () {
        $('.foodImg').hide();
    });


    // 收藏变色
    $('.foodHeader .setelement #collection,#collections').click(function () {
        $('#collectionl').show();
        $('#collectionl').css({
            'height': '41px',
            'width' : '39px',
            'position' : 'relative',
            'top' : '-34px',
            'margin-left' : '864px',
        });
        $('.foodHeader .setelement #allPrice ').css({
            'position': 'absolute',
            'margin-top': '-33px'
        })
    });
    $('.foodHeader .setelement #collectionl,#collections').click(function () {
        $('#collectionl').hide();
        $('.foodHeader .setelement #allPrice ').css({
            'position': 'absolute',
            'margin-top': '1px',
            'margin-left': '150px'
        })
    });


    // 购物车的算法
    // 现获取单选和全选选择框的input
    var $tbodyInputs = $('table tr td input[type = checkbox]');  //单选的input
    var $totalPriceInput = $('.setelement input[type = checkbox]');  //全选的input

    // 全选功能
    // 1.给表格中的一行数据的input选择框，复制为选中状态(true/false)，
    // 2给总价的全选框，也复制为选中状态(true/false)
    // 让表格中的选择框，反选全选选择框
    // 1.给表格中的选择框绑定点击事件
    // 2.定一个标杆 flag = true
    // 3.循环表格中的选择框
    // 4.获取每一个选择框的选中状态
    // 判断，只有一个为false则就不是全选，flag = false
    // 5.把flag当值赋值给全选框，因为flag就是对应的选中状态

    // 单选功能
    $tbodyInputs.change(function () {
        var flag = true;
        $tbodyInputs.each(function (index, input) {   //循环表格的input
            // 获取每一个选中状态
            var checkState = $(this).prop('checked');   //获取选中状态
            if(!checkState) {    //只要有一个为false
                flag = false;    //则全选框就不选中
            }
        })
        $totalPriceInput.prop('checked', flag);  //把值赋值给全选
        allTotal();   //总价
    });

    // 全选功能
    $totalPriceInput.change(function () {
        var checkState = $(this).prop('checked');    //获取全选的状态
        $tbodyInputs.prop('checked', checkState);   //赋值给全选
        allTotal();   //总价
    });

    
    // 加法功能
    // 1.获取加按钮，绑定事件
    // 2.点击的时候获取输入框的值
    // 3.输入框的值自增
    // 4.把自增后的值，重新赋值给输入框
    $('.add').click(function  () {
        var count = parseInt($(this).next().val());  //获取输入框的值
        count++;    //自增
        $(this).next().val(count);  //赋值给输入框
        // console.log(count)

        // 小计
        subTotal($(this), count);
        allTotal();   //总价
    });


    // 减法功能
    // 1.获取减按钮，绑定事件
    // 2.点击的时候获取输入框的值
    // 3.输入框的值自减，边界判断不能小于1，小于1等于1，否则等于自己
    // 4.把自减后的值，重新赋值给输入框
    $('.desc').click(function () {
        var count = parseInt($(this).prev().val()); //获取输入框的值
        count--;   //自减
        count = count < 1 ? 1 : count;   //三元运算符判断，
        $(this).prev().val(count);     //赋值给输入框

        // 小计
        subTotal($(this), count);
        allTotal();   //总价
    });


    // 封装一个小计函数(点击加减按钮的时候，需要调用小计功能) 
    function subTotal(dom, count) {
        // 找到对应的单价
        var singlePrice = parseFloat(dom.closest('tr').find('.price').text());
        var subTotalPrice = singlePrice * count;   
        dom.closest('tr').find('.subprice').text(subTotalPrice.toFixed(2));   //把小计的结果渲染到对应的位置，保留2位小数
    }

    // 总计功能实现(头部全选，尾部全选 表格的选择框 加 减 删除 六个地方调用总计)
    // 1.获取所有表格选中状态，循环，获取选中状态，判断
    // 定义一个变量用于保存总价 定义一个变量 用于保存已选商品 数量
    // 2.如果选中，那么就要累加这一行的小计
    function allTotal() {
        var allPrice = 0;  //保存总价
        var selectedCount = 0;   //保存数量
        $('table tr td input[type = checkbox]').each(function () {    //循环表格中的选择框 
            var checkState = $(this).prop('checked');   //获取选中状态
            if(checkState) {   //如果是ture
               allPrice += parseFloat($(this).closest('tr').find('.subprice').text());   //累加这一行
               selectedCount++;   //数量+1
            }
        })
        // 渲染
        $('.setelement #allPrice').text(allPrice.toFixed(2));   //渲染总价
        $('.setelement .count').text(selectedCount);   //渲染数量
    }

    // 删除功能(伪删除，只能从数据库删除)
    $('#deletes').click(function () {
        $('table tr td input[type = checkbox]').each(function () {
            var checkState = $(this).prop('checked');    //获取选中状态
            if (checkState) { //如果是ture
                $(this).closest('tr').remove(); //删掉自己
            }
        })
        getGoodCount();   //重新计算总价
        allTotal();   //计算总价
    });


    // // 封装一个获取全部数据的函数
    // function getGoodCount() {
    //     // 获取数量
    //     var goodsCount = $('table tr').length;
    //     // 渲染
    //     $()
    // }
})