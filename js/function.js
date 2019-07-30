$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInp").change(function() {
  readURL(this);
});
  var onloadCallback = function() {
    grecaptcha.render('rec_div', {
      'sitekey' : '6Ld07K4UAAAAAFRAO8NO1VWNc6EwEx2OwoJwJIN-'
    });
  };

// Cache selectors
var lastId,
    topMenu = $(".top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});

// Get the header
var header = document.getElementById("myHeader");
// Get the offset position of the navbar
  if (header) {
    window.onscroll = function() {myFunction()};
      var sticky = header.offsetTop;
      // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
      function myFunction() {
        if (window.pageYOffset > sticky) {
          $('.header-section').find('.menu_logo').find('img').attr('src' , 'images/Logo_w.png');
          header.classList.add("sticky");
          $('.header-section').addClass('single_header');
        } else {
          var chek = $('.header-section').hasClass('main_hea_index');
          if(chek){
            $('.header-section').find('.menu_logo').find('img').attr('src' , 'images/Logo.png');
          }
          header.classList.remove("sticky");
          $('.header-section').removeClass('single_header');

          // var chek = $('.main_sec_header').hasClass('main_hea_index');
          // // console.log(chek);
          // if(chek == true){
          //   $('.header-section').removeClass('single');
          // }
        }
      }
  }

$(document).ready(function() {

  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  $(".btn_notfi").click(function(){
      toastr.success("تمت العملية بنجاح", {
          "timeOut": "0",
          "extendedTImeout": "0"
      });
  });
  $(".add_to_fiv").click(function(){
    if(!$(this).hasClass('active')){
      $(this).addClass('active');
      $(this).find('i').removeClass('far').addClass('fas');
      toastr.success("تمت الاضافة بنجاح", {
          "timeOut": "0",
          "extendedTImeout": "0"
      });
    }
  });
  $(".add_to_archive").click(function(){
      toastr.success("تمت الاضافة بنجاح", {
          "timeOut": "0",
          "extendedTImeout": "0"
      });
  });
  $(".add_to_cart").click(function(){
    if(!$(this).hasClass('active')){
      toastr.success("تمت الاضافة بنجاح", {
          "timeOut": "0",
          "extendedTImeout": "0"
      });
    }
  });
  $(".delete_it").click(function(){
    swal({
      title: 'هل أنت متأكد ؟',
      text: "لن تتمكن من استعادة البيانات المحذوفة!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'تأكيد',
      cancelButtonText: 'إلغاء',
      showLoaderOnConfirm: false,
      reverseButtons:true,
      preConfirm: function (value) {
        return new Promise(function (resolve, reject) {
        })
      }
    });
  });
  $(".don_cart").click(function(){
      $(this).addClass('active');
      $(this).find('i').addClass('fa-check');
      $(this).find('i').removeClass('fa-cart-plus');
      $(this).find('i').removeClass('fa-plus');
  });

  $(".help_btn").click(function(){
      if(!$('.answ').find('input:checked').parent().hasClass('Best_answ')){
        $('.text_practices').addClass('active').fadeIn();
        $('.answ').find('.answ_1').addClass('error');
        $('.answ').find('.answ_1.Best_answ').removeClass('error');
        $('.answ').find('.answ_1.Best_answ').addClass('success');
        $('.answ').find('.answ_1.Best_answ').find('input').attr('checked' , true);
      }else{
        $('.answ').find('.answ_1.Best_answ').addClass('success');
      }
  });

  $(".Hints .close").click(function(){
      $(this).parent().fadeOut('slow');
  });

  var a = 0;
  $(window).scroll(function() {
    var nav = $('#stat');
    if (nav.length) {
        var oTop = $('#stat').offset().top - window.innerHeight;
    }
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.Count').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
          {
            duration: 4000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
      a = 1;
    }
  });

  var ctx = document.getElementById('myChart');
  if (ctx) {
    var ctx = ctx.getContext('2d');
    ctx.height = 500;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
            datasets: [{
                label: 'النتيجة',
                data: [10, 56, 65, 50, 80, 70,75,60,50,90],
                backgroundColor: 'rgba(255, 99, 132, 0)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            }]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'المحاولات'
                }
              }],
              yAxes: [{
                display: true,
                ticks: {
                  suggestedMin:0,
                  suggestedMax:100,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'النتيجة'
                }
              }]
          }
        }
    });
  }

  var doUpdate = function() {
    $('.timer').each(function() {
      var count = parseInt($(this).find('span').html());
      if (count !== 0) {
        $(this).find('span').html(count - 1);
      }else{
        alert('Sorry Finish Time');
      }
    });
  };
  setInterval(doUpdate, 1000);

  $('.img_logo_siman').click( function() {
      $('.side_main').toggleClass('active');
  });
  $('.search_btns').click( function() {
      $('.search_all_main').toggleClass('active');
  });
  $('.close_search').click( function() {
      $('.search_all_main').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.list_about li a').click( function() {
      var id = $(this).data('id');
      $('.list_about').find('.active').removeClass('active');
      $(this).addClass('active');
      $('.aboutcon').find('.item_about.active').removeClass('active');
      $('.aboutcon').find('.abouit_'+id).addClass('active');
  });
  $('.ul_modal li a').click( function() {
      var id = $(this).data('id');
      $('.ul_modal').find('.ul_modal>ul li a.active').removeClass('active');
      $(this).addClass('active');
      $('.con_modal_tab').find('.con_modal_ctab.active').removeClass('active');
      $('.con_modal_tab').find('.tabs_'+id).addClass('active');
  });
  $('.item_side_vif_paged h4').click( function() {
      $('.side_vif_paged').find('.item_side_vif_paged.active').removeClass('active');
      var id = $(this).parent().addClass('active');
  });
});
$(document).ready(function() {
  $('.owl_links li.moves').click( function() {
    var click = $(this).data('id');
    $('.owl_links').find('.active').removeClass('active');
    $('.owl_links').find('.owllinks_'+click).addClass('active');
    $('.owl_header').find('.item_header.active').removeClass('active');
    $('.owl_header').find('.it_head_'+click).addClass('active');
  });
  $('.owl_links li.next').click( function() {
    var click = $(this).data('id');
    var idnow = $('.owl_links').find('.active').data('id');
    var leng = $('.owl_links li').length;
    // console.log(idnow);
    if(click == 'next' && idnow == '1'){
      idnow = leng-2;
    }else if(click == 'next' && idnow != '1'){
      idnow -= 1;
    }else if(click == 'prev' && idnow == (leng-2)){
      idnow = 1;
    }else if(click == 'prev' && idnow != (leng-2)){
      idnow += 1;
    }else{
      idnow +1;
    }
    $('.owl_links').find('.active').removeClass('active');
    $('.owl_links').find('.owllinks_'+idnow).addClass('active');
    $('.owl_header').find('.item_header.active').removeClass('active');
    $('.owl_header').find('.it_head_'+idnow).addClass('active');
  });
  $('.owl_links li.prev').click( function() {
    var click = $(this).data('id');
    var idnow = $('.owl_links').find('.active').data('id');
    var leng = $('.owl_links li').length;
    // console.log(idnow);
    if(click == 'next' && idnow == '1'){
      idnow = leng-2;
    }else if(click == 'next' && idnow != '1'){
      idnow -= 1;
    }else if(click == 'prev' && idnow == (leng-2)){
      idnow = 1;
    }else if(click == 'prev' && idnow != (leng-2)){
      idnow += 1;
    }else{
      idnow +1;
    }
    $('.owl_links').find('.active').removeClass('active');
    $('.owl_links').find('.owllinks_'+idnow).addClass('active');
    $('.owl_header').find('.item_header.active').removeClass('active');
    $('.owl_header').find('.it_head_'+idnow).addClass('active');
  });
});

$(document).ready(function() {
  var nav = $('.img_about');
  if (nav.length) {
    $('.img_about').owlCarousel({
      rtl:true,
      loop:true,
      items:1,
      nav:false,
      rewindNav : true, 
      autoplay:true,
      autoplayTimeout:3500,
      autoplayHoverPause:true,
      dots : true,
      pagination : true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn'
    });
  }
  var nav = $('.owl_support');
  if (nav.length) {
    $('.owl_support').owlCarousel({
      rtl:true,
      loop:true,
      margin:20,
      nav:false,
      rewindNav : true, 
      autoplay:true,
      autoplayTimeout:3500,
      autoplayHoverPause:true,
      // mouseDrag:false,
      dots : false,
      pagination : true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1200:{
              items:5
          }
      },
      animateOut: 'fadeOut',
      animateIn: 'fadeIn'
    });
  }

  var nav = $('.owl_less');
  if (nav.length) {
    var owl_less =  $('.owl_less').owlCarousel({
      rtl:true,
      loop:true,
      margin:20,
      nav:false,
      rewindNav : true, 
      mouseDrag:false,
      dots : false,
      pagination : true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1200:{
              items:3
          }
      },
      animateOut: 'fadeOut',
      animateIn: 'fadeIn'
    });
    $('.next_less').click(function() {
        owl_less.trigger('next.owl.carousel');
    });
    $('.prev_less').click(function() {
        owl_less.trigger('prev.owl.carousel');
    });
  }

  var nav = $('.owl_less');
  if (nav.length) {

    var livst =  $('.list_images_visitor').owlCarousel({
      rtl:true,
      loop:true,
      margin:20,
      nav:false,
      rewindNav : true, 
      mouseDrag:false,
      dots : false,
      center:true,
      pagination : true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1200:{
              items:5
          }
      },
      animateOut: 'fadeOut',
      animateIn: 'fadeIn'
    });
    $('.next_visitor').click(function() {
        livst.trigger('prev.owl.carousel');
    });
    $('.prev_visitor').click(function() {
        livst.trigger('next.owl.carousel');
    });
    livst.on('changed.owl.carousel', function(event) {
      $('.list_images_visitor').find('.item_iv.active').removeClass('active');
      $('.list_images_visitor').find('.center').find('.item_iv').addClass('active');
      var id = $('.list_images_visitor').find('.center').find('.item_iv').data('id');
      // console.log(id);
      $('.list_text_visitor').find('.active').removeClass('active');
      $('.list_text_visitor').find('.item_tiv.item_'+id).addClass('active');
    });
  }


  $(".con_mobile_menu ul li:not('.sub_menu') a").click(function() {
    OC_Menu();
  });
  $(".bg_mobile_menu").click(function() {
    OC_Menu();
  });
  $(".menu_open").click(function() {
    OC_Menu();
  });
  $(".colse_men").click(function() {
    OC_Menu();
  });

  function OC_Menu() {
    $('.mobile_menu').toggleClass('active').fadeIn();
  }

});