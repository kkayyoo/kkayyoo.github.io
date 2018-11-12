$(document).foundation();

(function() {
  //Open Mobile Menu
  function openMobileMenu() {
    $(".menu-icon").on("click", function() {
      $(this).toggleClass("is-open");
      $(".main--nav").toggleClass("open");
    });
  }

  // Page Scroll to Sections
  function pageScroll() {
    $("a.page-scroll").bind("click", function(e) {
      e.preventDefault();
      var $anchor = $(this);
      $("html, body").animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        1500
      );
    });
  }

  //Detect if elements in viewpoint
  $.fn.isInViewport = function() {
    var rect = this[0].getBoundingClientRect();
    return (
      (rect.height > 0 || rect.width > 0) &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  //Image Animation
  function animateImages(el) {
    $(el).each(function() {
      if ($(this).isInViewport()) {
        $(this).addClass("is--visible");
      } else {
        $(this).removeClass("is--visible");
      }
    });
  }

  // Detect request animation frame
  var load =
    window.requestAnimationFrame ||
    // IE Fallback
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };

  //Header Animation
  function headerUp(el) {
    $(el).addClass("is--visible");
    load(headerUp);
  }

  // $(window).onload(function() {
  //   $(".hero-info").addClass(".is--visible");
  // });

  headerUp(".hero-info h3");
  openMobileMenu();
  pageScroll();
  $(window).scroll(function() {
    animateImages(".content--image img");
    animateImages(".content--info");
  });
})();
