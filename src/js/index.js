import Swiper from "swiper/bundle";
import '@/js/svg.js';
import '@/js/musicControl.js';
import '@/js/comment.js'
// import 'swiper/css/bundle'
window.onload = function(){
  // 禁止鼠标点击右键
  document.oncontextmenu = function(e){
    e.preventDefault()
  }
  const  firstSlide = document.querySelector('.slide') 
  const pageFadeBool = [{'bool':true,'nodeClassName':''},
                      {'bool':false,'nodeClassName':'.self-intro-container'},
                      {'bool':false,'nodeClassName':'.B-skill'},
                      {'bool':false,'nodeClassName':'.swiper-container2'},
                      {'bool':false,'nodeClassName':'.B-lian'}]
  // 全局banner
  // 新建 swiper 实例
  var mySwiper = new Swiper('.swiper-container1', {
  width : window.innerWidth,
  height : window.innerHeight,
  direction: 'vertical',
  // 如果需要分页器
  pagination: {
    el: '.main-pagination',
    clickable: true,
  },
  keyboard: true,
  mousewheel: true,
  // 拖动距离触发
  threshold : 10,
  resistanceRatio : 0,
  // longSwipesMs: 100,
  preventInteractionOnTransition : true,
  on: {
    slideChangeTransitionEnd: function(){
      if(!pageFadeBool[this.activeIndex].bool){
        pageFadeBool[this.activeIndex].bool = true
        var containerBox = document.querySelector(pageFadeBool[this.activeIndex].nodeClassName)
        containerBox.classList.add('fadeInLeft')
      }
    },
  },
})

  // banner2
  // 新建 swiper 实例
  var mySwiper2 = new Swiper('.swiper-container2', {
    // width: 300,
    effect : 'creative',
    creativeEffect: {
      prev: {
        shadow: false,
        origin: "left center",
        translate: ["-5%", 0, -200],
        rotate: [0, 100, 0],
      },
      next: {
        origin: "right center",
        translate: ["5%", 0, -200],
        rotate: [0, -100, 0],
      },
    },
    // 如果需要分页器
    pagination: {
      el: '.project-pagination',
      clickable: true,
    },
    keyboard: true,
    // 禁止快速切换页面
    // shortSwipes: false,
  })
  // 修改 pagination 样式
  // mySwiper.pagination.$el.addClass('main-pagination')
// 网页窗口大小调节后调整 swiper 大小
window.onresize = function(){
  mySwiper.params.width = window.innerWidth;
  mySwiper.params.height = window.innerHeight;
  mySwiper.update();
  $('.show-area').css({"width": window.innerWidth,"height": window.innerHeight});
  // console.log(window.innerWidth,m1ySwiper.width,$('.show-area'));
}
// 调节 show-area 区域大小
$(function(){ 
  var bgImage = ['','../assets/image/img_5.jpg','../assets/image/img_6.jpg','../assets/image/img_4.jpg','../assets/image/img_7.jpg','../assets/image/img_6.jpg','../assets/image/img_7.jpg']
  $('.show-area').css({"width": window.innerWidth,"height": window.innerHeight});
  // 动态添加 slide 的背景图
  for (let i = 1; i < $('.banner1-wapper').children().length; i++) {
    const slideEle = $('.banner1-wapper').children()[i];
    slideEle.style.backgroundImage = `url(${bgImage[i]})`;
    slideEle.style.backgroundSize = '100% 100%'
  }
  // 第四版分页显示页码
  for (let i = 0; i < $('.project-pagination').children().length; i++) {
    const paginationEle = $('.project-pagination').children()[i];
    paginationEle.innerHTML = String(i+1);
  }
  // console.log('111',$('.project-pagination').children(),$('.project-pagination').children() instanceof Array , typeof($('.project-pagination').children()));
  
  // const page1TranslateBoxParent = document.querySelector('.box1')
  // 第一版 3d 块浮起
  const descBlock = document.querySelector('.block')
  const  circleLight = document.querySelector('.circleLight')
  circleLight.style.backgroundImage = 'radial-gradient(circle at 0px 0px, rgb(255, 255, 255), transparent)'
  descBlock.addEventListener('mousemove',function(e){
    e.stopPropagation()
    const boxWidth = descBlock.offsetWidth
    const boxHeight = descBlock.offsetHeight
    const tslateX = e.layerX - boxWidth/2
    const tslateY = e.layerY - boxHeight/2
    // console.log(tslateX,tslateY);
    // 跟鼠标位置对应
    circleLight.style.backgroundImage = `radial-gradient(circle at ${e.layerX}px ${e.layerY}px, rgba(196, 203, 207), transparent)`
    descBlock.style.transform = `scale(1.01) rotateX(${tslateY/30}deg) rotateY(${tslateX/30}deg) translateX(${tslateX/30}px) translateY(${tslateY/30}px)`
    // console.log(`rotateX(${tslateX}deg) rotateY(${tslateY}deg)`,descBlock.style);
  })
  descBlock.addEventListener('mouseout',function(e){
    e.stopPropagation()
    // console.log(tslateX,tslateY);
    // 跟鼠标位置对应
    circleLight.style.backgroundImage = ''
    descBlock.style.transform = ''
    // console.log(`rotateX(${tslateX}deg) rotateY(${tslateY}deg)`,descBlock.style);
  })
  // 网页加载后 loader 消失
  const loaderContainer = document.querySelector('.loader-container')
  const loaderLeft = document.querySelector('.loader-left')
  loaderLeft.addEventListener('animationend',function(){
    loaderContainer.style.display = 'none'
  })
  loaderContainer.children[2].addEventListener('animationend',function(){
    loaderContainer.children[2].style.display = 'none'
  })
})
}
