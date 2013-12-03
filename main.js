 // Colorbox, Carousel, Mag, Arrow Button need this to work! 

 $(document).ready(
    function()
    {
      $('a.lightbox_caption').colorbox
      (
        {
          title: function() {
            if($(this).attr('title') != '') {
              return '<div class="lightbox_caption_span">' + $(this).attr('title') + '</div>';
            } else {
              return '';
            }
          },
          opacity: '0.6'
        }
      );
      $('a.lightbox').colorbox
      (
        {
          title: '<span style="display:none;"></span>',
          opacity: '0.6'
        }
      );
      $('a.colorlink').colorbox
      (
        {
          inline: true,
          opacity: '0.6'
        }
      );
      $("#carousel").tabs();
      $(".mag").append("<span></span>");
      $(".arrow-button").append("<span></span>");
    }
  );
  
  function nextTab()
  {
    currentTab = $('#carousel').tabs('option', 'selected');
    numTabs = $('#carousel > ul > li').size();
    newTab = currentTab + 1;
    if(newTab == numTabs)
    {
      newTab = 0;
    }
    $( "#carousel" ).tabs('select', newTab);
    return false;
  }

  function prevTab()
  {
    currentTab = $('#carousel').tabs('option', 'selected');
    numTabs = $('#carousel > ul > li').size();
    if(currentTab < 1)
    {
      newTab = numTabs - 1;
    }
    else
    {
      newTab = currentTab - 1;
    }
    $( "#carousel" ).tabs('select', newTab);
    return false;
  }

 // If Mobile No Colorbox
(function ($){

    $(function (){

 /* Disable Colorbox on mobile devices */

  $mobile_colorbox();
  $(window).resize(function () {
         $mobile_colorbox()
   });

    });

    $mobile_colorbox = function ()
    {
        if ( $(window).width() <= 767 ) {
            $('.colorbox').colorbox.remove();
        }       
    }

})(jQuery);


 