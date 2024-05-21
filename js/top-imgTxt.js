//enter link


const entryIMG = document.querySelector('.entry-link-inner');
const hover =  "../img/top-page/entry-linkIMG-hover.png";
const img =  "../img/top-page/entry-linkIMG.png";

entryIMG.addEventListener('mouseover', () => {
    entryIMG.classList.add('active');
    entryIMG.src = hover
})
entryIMG.addEventListener('mouseout', () => {
    entryIMG.classList.remove('active');
    entryIMG.src = img
})


// 見出し（背景）

const ttlBGs = document.querySelectorAll('.cont-h-bg-fir');

const textPopAnime = () => {
    ttlBGs.forEach((ttlBG) => {
        const textTtl = ttlBG.textContent;
        const textTtlSpl = textTtl.split('');
    
        // 元の要素の内容を空にする
        ttlBG.textContent = '';
        let time = 0
        // 一文字ずつspanタグで囲んで元の要素に挿入
        textTtlSpl.forEach((textTtlS) => {
            const span = document.createElement('span');
            span.textContent = textTtlS;
            ttlBG.appendChild(span);
    
            setTimeout(() => {
                span.classList.add('is-active');
            }, time);
    
            // 次の文字の遅延時間を設定する
            time += 70;     
        });
    });
}






ttlBGs.forEach((ttl) => {
    gsap.to(
      ttl,
      {
        duration:.2,
        // スクロールトリガーの登録
        scrollTrigger: {
          trigger: ttl,
          start: "top 90%",
          ease: "expo",
          onEnter: () => {
            textPopAnime();
          }
        },
      }
    );
  });



   // 見出し（小さいタイトル）

 const ttlSmalls = document.querySelectorAll('.cont-h-inner');
 ttlSmalls.forEach((ttlSmall) => {
   gsap.to(
    ttlSmall,{
        duration:4,
       scrollTrigger: {
           trigger: ttlSmall,
           start: "top 90%",
           ease: "expo",
           onEnter: () => {
            ttlSmall.classList.add('is-active');
           }
         },
    })
 })



//  スマホ

 const textSp = gsap.matchMedia();

textSp.add("(max-width: 767px)", () => {

ttlBGs.forEach((ttl) => {
  gsap.set(ttl,{
    opacity:0,
  })
  gsap.to(
    ttl,
    {
      markers:true,
      opacity:0.5,
      // スクロールトリガーの登録
      scrollTrigger: {
        trigger: ttl,
        start: "top 100%",
        ease: "expo",
        onEnter: () => {
          textPopAnime();
        }
      },
    }
  );
});


})
 