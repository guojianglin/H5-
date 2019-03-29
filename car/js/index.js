$(function () {
    // 初始化组件
    // 1.配置每一个section的背景颜色
    // 2.设置屏幕内容的的对其方式，默认是垂直居中，改为顶部对其
    // 3.设置导航 设置指示器 点容器
    $('#container').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        scrollingSpeed: 1000,
        afterLoad: function(link,index){//index是屏幕序号
            $('.section').eq(index-1).addClass("now");

        },
        onLeave: function (index,nextIndex,direction) {

            if (index == 2 && nextIndex == 3) {
                $('.section').eq(index-1).addClass("leave");
            }else if (index == 3 && nextIndex == 4) {
                $('.section').eq(index-1).addClass("leave");
            }else if (index == 5 && nextIndex == 6) {
                $('.section').eq(index-1).addClass("leave");
                $('.screen06 .box').addClass("show");
            }else if(index == 6 && nextIndex == 7) {
                $('.screen07 .star').addClass('show');
                $('.screen07 .star img').each(function (i, item) {

                    // $(this).delay(i*1000*0.5).fadeIn();
                    $(this).css('transition-delay',i*0.5+'s');
                })
                $('.screen07 .text').addClass('show').css('transition-delay',2.5+'s');
            }
        },
        afterRender: function () {
            $('.more').on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });
            $('.screen04 .car').on('animationend',function(){
                $('.screen04 .address').show(function(){
                    $(this).find('img:last').fadeIn(1000);
                });

            });
            $('.screen08').on('mousemove',function(e){
                $('.screen08').find('.hand').css({
                    left: e.clientX-215,
                    top: e.clientY-20
                })
            }).find('.again').on('click', function () {
                $('.now, .show, .leave').removeClass('now').removeClass('leave').removeClass('show');
                $('.content [style]').removeAttr('style');
                $.fn.fullpage.moveTo(1);
            });

        }
    });
});