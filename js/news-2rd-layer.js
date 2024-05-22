gsap.fromTo(".dec-newspaper", {
    opacity:0,
    scale:0
},{ 
    scrollTrigger:{
        trigger: ".news-set",
        start:'bottom bottom'
    }, // .boxがビューポート内に入った時にアニメーションが開始。
    opacity: 1,
    delay:0.7,
    scale:1,
    ease: "bounce.out",
    
});

gsap.fromTo(".dec-smartphone", {
    opacity:0,
    scale:0,
},{ 
    scrollTrigger:{
        trigger: ".news-set",
        start:'bottom bottom'
    }, // .boxがビューポート内に入った時にアニメーションが開始。
    opacity: 1,
    scale:1,
    ease: "bounce.out",
});
