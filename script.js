// document.addEventListener('DOMContentLoaded', function () {
//     var swiper = new Swiper('.swiper-container', {
//         loop: false,
//         slidesPerView: '1',
//         spaceBetween: 30,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//     });
// });



// var swiper = new Swiper('.swiper-container', {
//     direction: 'horizontal',
//     loop: true,

//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         renderBullet: function (index, className) {
//             if (index < 5) { // Limit the number of bullets
//                 return '<span class="' + className + '"></span>';

//             }
//         },
//     },

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });


var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    // Custom pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            if (index < 3) { // Limit the number of bullets
                return '<span class="' + className + '"></span>';
            }
            return ''; // Return empty string for bullets beyond the limit
        },
    },

    // Optional parameters for navigation buttons
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
