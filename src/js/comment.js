// window.addEventListener('load',function(){
//   window.changyan.api.config({
//     appid: 'cyvQS8Skq',
//     conf: 'prod_cbfbaa7c790bb3f0e4fe83e3f49de153'
//     });
// })
window.setTimeout(function(){
  addCommentlistener()
  
  // 评论页
// window.addEventListener('load',function(){
// })
},200)
function addCommentlistener(){
  console.log('onload');
  downloadJsAtOnload()
  const commentEntry = document.querySelector('.comment-entry')
  const commentClose = document.querySelector('.comment-close')
  const comment = document.querySelector('.comment')
  
  const swiperContainer1 = document.querySelector('.swiper-container1')
  
  commentEntry.addEventListener('click',function(){
  
    // console.log('comment.style.position',comment.offsetLeft);
    if(comment.offsetLeft < 0 || comment.offsetLeft >= window.innerWidth){
      comment.style.animation = 'inLeft 1s ease forwards'
      swiperContainer1.style.filter = 'blur(10px)'
      commentEntry.style.display = 'none'
      console.log('in',window.innerWidth);
    }
})
  comment.addEventListener('animationend',function(){
    if(comment.offsetLeft < 0 || comment.offsetLeft >= window.innerWidth){
      commentEntry.style.display = 'block'
    }
  })
  commentClose.addEventListener('click',function(){
    if(comment.offsetLeft >= 0 || comment.offsetLeft < window.innerWidth){
      comment.style.animation = 'outRight 1s ease forwards'
      swiperContainer1.style.filter = ''
      // console.log('out');
    }
  })
  }
  function downloadJsAtOnload(){
    const scriptEle = document.createElement('script')
    scriptEle.src = './js/changyan.js'
    document.body.appendChild(scriptEle)
    console.log('createele');
  }

  window.addEventListener('onloadCy',function(){
    if(window.changyan){
      window.changyan.api.config({
        appid: 'cyvQS8Skq',
        conf: 'prod_cbfbaa7c790bb3f0e4fe83e3f49de153'
        });
    }
    console.log('runwith');
  })

    
  