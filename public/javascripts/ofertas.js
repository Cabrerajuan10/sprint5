/*SLIDER PRODUTOS RECOMENDADOS*/
new Glider(document.querySelector('.glider-ofertas'), {
    // Mobile-first defaults
    slidesToShow: 'auto',
    slidesToScroll: 1,
    scrollLock: true,
    dots: 'dots-of',
    arrows: {
      prev: '#prev',
      next: '#next'
    },
    responsive: [
            {
         // screens greater than >= 775px
          breakpoint: 480,
         settings: {
           // Set to `auto` and provide item width to adjust to viewport
           slidesToShow: '2',
           slidesToScroll: 'auto',
          itemWidth: 150,
         duration: 0.25
        }
     },
               {
        // screens greater than >= 775px
        breakpoint: 769,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: '3',
          slidesToScroll: 'auto',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: '4',
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });
