$( function() {
    $( '.slider' ).slick( {
        autoplay: false,
        autoplaySpeed: 100,
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
        ]
    } );
} );