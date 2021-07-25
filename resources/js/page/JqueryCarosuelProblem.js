// import React, {useEffect} from "react";
import ReactDOM, { findDOMNode } from "react-dom"
// import getDOMNode from '*'
// import $ from 'jquery';
import React, { Component, useEffect } from 'react'

const Index = () => {
    // useEffect(()=> {
    //     jQuerycode()
    // }, [])

    // const count = 0;
    // const jQuerycode = () => {
    //     $("#mydiv").on("click", function() {
    //         alert(`count ${count+1}`)
    //     })
    // }

    // const jQuerycode = () => {
    //     // var state = true;
    //     // $( "#button" ).on( "click", function() {
    //     //     if ( state ) {
    //     //       $( "#effect" ).animate({
    //     //         backgroundColor: "#red",
    //     //         color: "#fff",
    //     //         width: 500
    //     //       }, 3000 );
    //     //     } else {
    //     //       $( "#effect" ).animate({
    //     //         backgroundColor: "#fff",
    //     //         color: "#000",
    //     //         width: 240
    //     //       }, 3000 );
    //     //     }
    //     //     state = !state;
    //     //   });
    // }

    (function($) {
        "use strict";
        var windows = $(window);
        var screenSize = windows.width();
        var sticky = $('.header-sticky');
        var menubarTop = $('.menubar-top');
        windows.on('scroll', function () {
            var scroll = windows.scrollTop();
    
    
            if (scroll < 300) {
                sticky.removeClass('is-sticky');
    
                menubarTop.removeClass('d-none');
                menubarTop.addClass('d-flex');
            } else {
                sticky.addClass('is-sticky');
                menubarTop.addClass('d-none');
                menubarTop.removeClass('d-flex');
            }
    
    
            //code for scroll top
    
            if (scroll >= 400) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
    
        });

        $('.scroll-top').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 2000);
        });

        $("#shopping-cart").mouseenter(function () {
            $("#cart-floating-box").stop().slideDown(1000);
        });
    
        $("#shopping-cart").mouseleave(function () {
            $("#cart-floating-box").stop().slideUp(1000);
        });

        /*--
	Hero slider one active
	-----------------------------------*/
	const heroSlider = $('.hero-slider-one');
	heroSlider.on( 'touchstart', function() {
        heroSlider.slick( 'slickPlay');
    });
    
	$(getDOMNode()).slick({
		arrows: true,
		autoplay: true,
		autoplaySpeed: 8000,
		dots: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
	});
    })(jQuery);

    return (<>
        <div className="divClass" id="mydiv">hello world</div>
        
            </>)

}

export default Index

// export default class Index extends Component {

//     jQuerycode = () => {
//         $(".button").click(function(){
//          alert('found')
        
//         });
//       }
//       componentDidMount(){
//         this.jQuerycode()
//       }
//       render() {
//         return (
//           <div>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci vel voluptates sit voluptas illum eveniet consectetur corrupti suscipit nesciunt et, inventore velit quaerat ex deleniti ut facere, voluptate ab? Ducimus.</p>
//             <button className="button">Click here</button>
//           </div>
//         )
//       }
// }


if (document.getElementById("react-content")) {
    ReactDOM.render(<Index />, document.getElementById("react-content"));
}