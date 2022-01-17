const musicControl = document.querySelector('.B-music-control')
  const musicPause = document.querySelector('.music-pause')
  const musicStart = document.querySelector('.music-start')
  const audio = document.querySelector('audio')
  musicControl.addEventListener('mouseenter',function(){
    musicControl.style.backgroundColor = '#fff'
    setMusicControl()
  })
  musicControl.addEventListener('mouseleave',function(e){
    musicControl.style.backgroundColor = 'transparent'
    musicControl.firstElementChild.style.display = 'none'
    musicControl.lastElementChild.style.display = 'none'
  })
  musicPause.addEventListener('click',function(){
    musicPause.style.display = 'none'
    musicStart.style.display = 'block'
    audio.play()
  })
  musicStart.addEventListener('click',function(){
    musicPause.style.display = 'block'
    musicStart.style.display = 'none'
    audio.pause()
  })
  // 设置音乐按钮的显示
  function setMusicControl(){
    // console.log('audio.pause',audio.paused);
    if(audio.paused){
      musicControl.firstElementChild.style.display = 'block'
      musicControl.lastElementChild.style.display = 'none'
    }else{
      musicControl.firstElementChild.style.display = 'none'
      musicControl.lastElementChild.style.display = 'block'
    }
  }