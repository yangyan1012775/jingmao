$(function(){
    new WOW().init();
    // 语言
    $('.top .fr p').on('mouseenter',function(){
        $(this).find('.lang').stop().slideToggle();
        $(this).find('.icon-arrow-down').removeClass('rot1').addClass('rot');
    });
    $('.top .fr p').on('mouseleave',function(){
        $(this).find('.lang').stop().slideUp();
        $(this).find('.icon-arrow-down').removeClass('rot').addClass('rot1');
    });
    // 搜索
    $('li.search').on('click',function(){
        $(this).find('input').stop().slideToggle();
    });
    $('li.search input').on('click',function(e){
        stopBubble(e);
    });
    // 鼠标点击
    $('.down').on('click',function(){
        $('html,body').animate({'scrollTop':688},600);
    });

    $('.question-list-detail').on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find('.iconfont').removeClass('icon-iconfontmove').addClass('icon-jiahao');
        }else{
            $(this).addClass('active');
            $(this).find('.iconfont').removeClass('icon-jiahao').addClass('icon-iconfontmove');
        }
        $(this).siblings().removeClass('active');
        $(this).siblings().find('.iconfont').removeClass('icon-iconfontmove').addClass('icon-jiahao');
    });

    //侧边
    $(".g_senitmweix").mouseover(function(){
        $(".g_senweix").css("transform","translate(-100%,0)");
    });
    $(".g_senitmweix").mouseleave(function(){
        $(".g_senweix").css("transform","translate(100%,0)");
    });

    $(".g_senitmweix1").mouseover(function(){
        $(".g_senweix1").css("transform","translate(-100%,0)");
    });
    $(".g_senitmweix1").mouseleave(function(){
        $(".g_senweix1").css("transform","translate(100%,0)");
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $(".g_senitmtop").css("display","block");
        }
        else {
            $(".g_senitmtop").css("display","none");
        }
    });
    $('.recruitment-list').on('click',function(){
        $(this).next().stop().slideToggle();
    });

    // 首页数字加
    $('.counter').countUp();
    // 进度条,100%对应1050px
    var screen1 = window.matchMedia('(min-width: 992px) and (max-width: 1199px)');
    var screen2 = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
    var screen3 = window.matchMedia('(max-width: 768px)');
    if (screen1.matches){
        $('.progressbar').each(function(){
            var t = $(this),
                dataperc = t.attr('data-perc'),
                barperc = Math.round(dataperc*14);
            t.find('.bar').animate({width:barperc}, dataperc*25);
            t.find('.label').append('<div class="perc"></div>');

            function perc(){
                var length = t.find('.bar').css('width'),
                    perc = Math.round(parseInt(length)/14),
                    labelpos = (parseInt(length)-2);
                t.find('.label').css('left', labelpos+20);
                t.find('.perc').text(perc+'%');
            }
            perc();
            setInterval(perc, 0);
        });
    }else if(screen2.matches){
        $('.progressbar').each(function(){
            var t = $(this),
                dataperc = t.attr('data-perc'),
                barperc = Math.round(dataperc*10);
            t.find('.bar').animate({width:barperc}, dataperc*25);
            t.find('.label').append('<div class="perc"></div>');

            function perc(){
                var length = t.find('.bar').css('width'),
                    perc = Math.round(parseInt(length)/10),
                    labelpos = (parseInt(length)-2);
                t.find('.label').css('left', labelpos+20);
                t.find('.perc').text(perc+'%');
            }
            perc();
            setInterval(perc, 0);
        });
    }else if(screen3.matches){
        $('.progressbar').each(function(){
            var t = $(this),
                dataperc = t.attr('data-perc'),
                barperc = Math.round(dataperc*9);
            t.find('.bar').animate({width:barperc}, dataperc*25);
            t.find('.label').append('<div class="perc"></div>');

            function perc(){
                var length = t.find('.bar').css('width'),
                    perc = Math.round(parseInt(length)/9),
                    labelpos = (parseInt(length)-2);
                t.find('.label').css('left', labelpos+20);
                t.find('.perc').text(perc+'%');
            }
            perc();
            setInterval(perc, 0);
        });
    } else{
        $('.progressbar').each(function(){
            var t = $(this),
                dataperc = t.attr('data-perc'),
                barperc = Math.round(dataperc*14);
            t.find('.bar').animate({width:barperc}, dataperc*25);
            t.find('.label').append('<div class="perc"></div>');

            function perc(){
                var length = t.find('.bar').css('width'),
                    perc = Math.round(parseInt(length)/14),
                    labelpos = (parseInt(length)-2);
                t.find('.label').css('left', labelpos+40);
                t.find('.perc').text(perc+'%');
            }
            perc();
            setInterval(perc, 0);
        });
    }
    // 发展历程
    if($(".event_box").length!==0){
        jQuery(".event_box").slide({ titCell: ".parHd li", mainCell: ".parBd", defaultPlay: false, titOnClassName: "act", prevCell: ".sPrev", nextCell: ".sNext" });
    }
    if($(".parHd").length!==0){
        jQuery(".parHd").slide({ mainCell: " ul", vis: 3, effect: "left", defaultPlay: false, prevCell: ".sPrev", nextCell: ".sNext" });
    }



});

function stopBubble(e) {
    if(e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
    return false;
}

//回到顶部
function goTop(){

    $('html,body').animate({'scrollTop':0},600);

}

var swiper1 = new Swiper('.swiper-container1', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
    autoplay: {
    delay: 6000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
});

var swiper2 = new Swiper('.swiper-container2', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill : 'row',
    spaceBetween: 30,
    breakpoints: {
        767: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 10,
        },
    },
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
});

var swiper3 = new Swiper('.swiper-container3', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill : 'row',
    spaceBetween: 1,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
});

var swiper4 = new Swiper('.swiper-container4', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 25,
    breakpoints: {
        991: {
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 1,
            slidesPerColumn: 4,
            spaceBetween: 10,
        },
    },
});

var swiper5 = new Swiper('.swiper-container5', {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        767: {
            slidesPerView: 1,
        },
    },
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
});
var swiper6 = new Swiper('.swiper-container6', {
    slidesPerView: 10,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 8,
        },
        991: {
            slidesPerView: 6,
        },
        767: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
});

var swiper7 = new Swiper('.swiper-container7', {
    slidesPerView: 5,
    slidesPerColumn: 2,
    spaceBetween: 25,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    breakpoints: {
        991: {
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 3,
        },
    },
});

var swiper8 = new Swiper('.swiper-container8', {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    breakpoints: {
        767: {
            spaceBetween: 10,
        },
    },
});

var swiper9 = new Swiper('.swiper-container9', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper10 = new Swiper('.swiper-container10', {
    slidesPerView: 4,
    spaceBetween: 28,
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 15,

        },
    },
});