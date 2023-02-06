  $('.scroll-navigation-links li').each(function(){
    
        let navItem = $(this);
        
        navItem.on('click',function(){
    
            let link = navItem.find('a').data('link');
    
             window.location.hash = link;
             
             $('body').addClass('scrolling');
    
             $('html, body').animate({
    
                    scrollTop: $(`[data-scroll='${link}']`).offset().top - 100,
                    
    
             }, 2000 , function(){
                 
                 $('body').removeClass('scrolling');
                 
                 activeOnScroll();
                 
             });
             
        });
    
    });
