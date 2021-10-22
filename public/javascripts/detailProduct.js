/*PRODUTOS RECOMENDADOS*/
new Glider(document.querySelector('.glider-detail'), {
  // Mobile-first defaults
  slidesToShow: 'auto',
  slidesToScroll: 1,
  scrollLock: true,
  dots: 'dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
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



/* FUNCIONALIDAD QUE PERMITE HACER CLICK EN IMG MINIATURA Y QUE SE MUESTRE COMO IMG PRINCIPAL */


/* document.getElementById('img-prev1').addEventListener('click', () =>{
        document.getElementById('img-principal').setAttribute('src', '/images/detailProduct/smartv-43-samsung-img1.png')
})



document.getElementById('img-prev2').addEventListener('click', () =>{
        document.getElementById('img-principal').setAttribute('src', '/images/detailProduct/smartv-43-samsung-img2.png')
})


document.getElementById('img-prev3').addEventListener('click', () =>{
        document.getElementById('img-principal').setAttribute('src', '/images/detailProduct/smartv-43-samsung-img3.png')
})
 */

