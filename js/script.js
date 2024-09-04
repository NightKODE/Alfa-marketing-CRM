$(document).ready(function () {
  const selectItem = $('.pagecrm__request-select-item');

  $('.pagecrm__request-select-header').on('click', function () {
    $(this).parent('.pagecrm__request-select').toggleClass('is-active');
    if ($('.pagecrm__request-select').hasClass('is-active')) {
      $('.pagecrm__request-select-icon').css('transform', 'rotate(180deg)')
    } else {
      $('.pagecrm__request-select-icon').css('transform', 'rotate(0deg)')
    }
  });

  selectItem.on('click', function () {
    const textSelect = $(this).text();
    $(this).parent('.pagecrm__request-select-body').prev('.pagecrm__request-select-header').children('.pagecrm__request-select-current').text(textSelect);
    $('.pagecrm__request-select').toggleClass('is-active');
  });

  const select2Item = $('.pagecrm__request2-select-item');

  $('.pagecrm__request2-select-header').on('click', function () {
    $(this).parent('.pagecrm__request2-select').toggleClass('is-active');
    if ($('.pagecrm__request2-select').hasClass('is-active')) {
      $('.pagecrm__request2-select-icon').css('transform', 'rotate(180deg)')
    } else {
      $('.pagecrm__request2-select-icon').css('transform', 'rotate(0deg)')
    }
  });

  select2Item.on('click', function () {
    const text2Select = $(this).text();
    $(this).parent('.pagecrm__request2-select-body').prev('.pagecrm__request2-select-header').children('.pagecrm__request2-select-current').text(text2Select);
    $('.pagecrm__request2-select').toggleClass('is-active');
  });

  $('.pagecrm__pay-button').on('click', function () {
    $('.pagecrm__modal-form').toggleClass('show');
    $('.overlay').toggleClass('show');
  });
  $('.pagecrm__modal-button').on('click', function (e) {
    e.preventDefault();
    $('.pagecrm__modal-form').toggleClass('show');
    $('.pagecrm__messege-frame').toggleClass('show');
  });
  $('.pagecrm__messege-close').on('click', function(){
    $('.pagecrm__messege-frame').toggleClass('show');
      $('.overlay').toggleClass('show')
  });
  setInterval(() => {
    if ($(window).scrollTop() >= 100) {
      $('.pagecrm__header-fix-container').css('display', 'block');
    } else {
      $('.pagecrm__header-fix-container').css('display', 'none');
    }
    if ($(window).width() <= 980) {
      $('.pagecrm__header-fix-container').css('display', 'none');
    }
  }, 0);
})