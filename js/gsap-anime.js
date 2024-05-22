

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    effect:'fade',
    fadeEffect: {crossFade: true},
    crossFade:false,
    speed:4000,
    autoplay: {
      delay: 5000,
    }
  });




// const swiperPhoto = new Swiper(".swiper.sec-bg", {
//     slidesPerView: 1,
//     effect:'slide',
//     speed:1000,
//     autoplay: {
//       delay: 1000,
//     }
//   });

const circleLine = new Vivus('circleLine', {
    type: 'delayed',
    duration: 60,
    animTimingFunction: Vivus.EASE,
    start: 'manual'
  });
  
gsap.set('.message',{
    opacity:0,
    y:40,
})

const circle = document.getElementById('circle');
const colorTxt = document.querySelector('.gs-text-on');
const circlePhoto = document.querySelector('.circle-foto-outer');

gsap.timeline() 
.to('.circle-foto-outer',{})
.add(() => {
    circlePhoto.classList.add('is-active');})
.to(circle,{
},"-=0.9")
.add(() => {
    circle.classList.add('active');})
.to('.circle-foto-outer',{
    opacity:1,
})
.to(circleLine,{
    delay:.5,
    onStart: () => {
        circleLine.play();
      }
})
.to('.message',{
    opacity:1,
    delay:.8,
    duration:1.1,
    y:0,
    ease: "power1.out",
})
.to('.gs-text-on',{
    ease: "power1.out",
}).add(() => {
    colorTxt.classList.add('active');
},"-=0.7")







const markerTop = document.querySelector('.gs-markerTop');
const markerBottom = document.querySelector('.gs-markerBottom');
const loadImg = document.querySelector('.gs-lead-load');
gsap.timeline({
    scrollTrigger: {
        trigger:circle,
        start: 'bottom bottom',
        // markers:true,
    }
}) 
.fromTo(".gs-leadTop-man",
{
opacity:0,
scale:0,
},
 {  
    opacity:1,
    scale:1,
    delay:1,
    ease: "bounce.out",

},'-1.3')

.to('.gs-markerTop',{
}).add(() => {
    markerTop.classList.add('coverIn');
})
.to('.gs-markerBottom',{
}).add(() => {
    markerBottom.classList.add('coverIn');
})

.to(loadImg,{}).add(() => {
    loadImg.classList.add('active');
})
.fromTo(".gs-leadBottom-man", {
    opacity:0,
    scale:0,
},
{
    opacity:1,
    scale:1,
    delay:1,
},"-=0.7")

gsap.set('.bubble-l',{
    opacity:0,
    scale:0,
})
gsap.set('.bubble-mi',{
    opacity:0,
    scale:0,
})
gsap.set('.bubble-r',{
    opacity:0,
    scale:0,
})

gsap.timeline({

    default: {
        ease: "bounce.out",
    },
    scrollTrigger: {
        trigger:'#about',
        start:'top top',
    }
    })

    .to('.bubble-l',{
        opacity:1,
        scale:1,
        duration:.3,
 
     
    })
    .to('.bubble-mi',{
        opacity:1,
        scale:1,
        duration:.3,
   
    })
    .to('.bubble-r',{
        opacity:1,
        scale:1,
        duration:.3,



    })
    


    gsap.timeline({
        scrollTrigger: {
            trigger:'.news-list',
            start:'bottom bottom',
        }
    })

.fromTo('.gs-sp-news',
{
    opacity:0,
    scale:0,
},
{
        opacity:1,
        scale:1,
        ease: "bounce.out",
})

.fromTo('.gs-bubble-news',
{
    opacity:0,
    scale:0,
}
,{
    opacity:1,
    scale:1,
    ease: "bounce.out",
})




gsap.fromTo('.gs-insta-bubble',{
    opacity:0,
    scale:0,
},{
    scrollTrigger: {
        trigger:'#insta',
        start:'top center',
    },
    opacity:1,
    scale:1,
    duration:1.1,
    ease: "bounce.out",
})





gsap.to ('.voice-circle',
{
    scrollTrigger: {
        trigger:'.bg-voice',
        start: 'top top',
        toggleClass: {
            targets: ".voice-circle", // クラスを切り替える対象の要素
            className: "active", // クラス名 "active" を切り替える
          },
    }
})

gsap.fromTo('.sec-bg',{
    opacity:.6,
},{
    duration:1.1,
    opacity:1,
    scrub:true,
    ease: "power1.out",
    scrollTrigger: {
        trigger:'.sec-bg',
        start:'top 50%',
        toggleClass: {
            targets:'.sec-bg',
            className:'is-active',
        }
    }

})



// スマホ表示　ファーストビューの順番変更
const mm = gsap.matchMedia();

mm.add("(max-width: 767px)", () => {

    const spCircleLine = new Vivus('sp-circleLine', {
        type: 'delayed',
        duration: 60,
        animTimingFunction: Vivus.EASE,
        start: 'autostart' //manual
      });
    
      const spCircle = document.getElementById('sp-circle');
    
    
    gsap.timeline() 
    .to('.message',{
        opacity:1,
        y:0,
    })
    .to('.gs-text-on',{
        ease: "power1.out",
    }).add(() => {
        colorTxt.classList.add('active');
    })
    .add(() => {
        spCircle.classList.add('active');}
        ,"-=0.7")
    .to('.circle-foto-outer',{
        opacity:1,
    })
    .to('.circle-foto-outer',{})
    .add(() => {
        circlePhoto.classList.add('is-active');})
    .to(spCircle,{
    },"-=0.5")
    .to(spCircleLine,{
        delay:5,
        onStart: () => {
            spCircleLine.play();
          }
    })

    .fromTo(".gs-leadTop-man",
    {
    opacity:0,
    scale:0,
    },
     {  
        opacity:1,
        scale:1,
        delay:4,
        ease: "bounce.out",
    
    })
    
    .to('.gs-markerTop',{
    }).add(() => {
        markerTop.classList.add('coverIn');
    })
    .to('.gs-markerBottom',{
    }).add(() => {
        markerBottom.classList.add('coverIn');
    })
    
    .to(loadImg,{}).add(() => {
        loadImg.classList.add('active');
    })
    .fromTo(".gs-leadBottom-man", {
        opacity:0,
        scale:0,
    },
    {
        opacity:1,
        scale:1,
        delay:1,
    },"-=0.7")



    // インスタ吹き出し

    gsap.fromTo('.gs-insta-bubble',{
        opacity:0,
        scale:0,
        duration:.1,
    },{
        scrollTrigger: {
            trigger:'#insta',
            start:'top top',
        },
        opacity:1,
        scale:1,
    })


    gsap.timeline({
        scrollTrigger: {
            trigger:'.news-list',
            start:'bottom bottom',
        }
    })

.fromTo('.gs-sp-news',
{
    opacity:0,
    scale:0,
},
{
        opacity:1,
        scale:1,
        ease: "bounce.out",
})

.fromTo('.gs-bubble-news',
{
    opacity:0,
    scale:0,
}
,{
    opacity:1,
    scale:1,
    duration:.3,
    ease: "bounce.out",
})

    
});