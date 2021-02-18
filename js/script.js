const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 600,
    interval: 3000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 50
});

$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.blog-satu').addClass('pMuncul');
})

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    
    if(wScroll > $('.content-dua').offset().top - 250) {

        $('.content-dua .blog-dua ').each(function(i) {
            setTimeout(function() {
                $('.content-dua .blog-dua ').eq(i).addClass('muncul')
            }, 200 * (i+1));
        });
        
    }

    if(wScroll > $('.content-tiga').offset().top - 250) {

        $('.content-tiga .blog-tiga ').each(function(i) {
            setTimeout(function() {
                $('.content-tiga .blog-tiga ').eq(i).addClass('muncul')
            }, 200 * (i+1));
        });
        
    }

    if(wScroll > $('.content-empat').offset().top - 250) {

        $('.content-empat .blog-empat ').each(function(i) {
            setTimeout(function() {
                $('.content-empat .blog-empat ').eq(i).addClass('muncul')
            }, 200 * (i+1));
        });
        
    }
});