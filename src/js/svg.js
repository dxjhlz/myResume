
const pathVo  = {'#e4a787':['Html','80%'],'#d7d8d8':['css','75%'],
                 '#d3d671':['JavaScript','75%'],'#97be0d':['Vue','60%'],'#bedbe9':['Node','50%']}
var svg = document.querySelector('svg');
var paths = svg.querySelectorAll('path');
var text = svg.querySelector('text');
var tspan = text.querySelector('tspan')
var tspan2 = tspan.cloneNode(false);
tspan.style.diaplay = 'block';
text.appendChild(tspan2)
for (let i = 0; i < paths.length; i++) {
  const pathEle = paths[i];
  
  pathEle.addEventListener('mouseenter',function(evt){
    evt.target.style.animation  = "changeBig 0.5s linear 0s 1 normal forwards"
    // 修改 path 标签显示层级
    svg.appendChild(evt.target);
    // 修改描述  
    // console.log(evt.target.attributes.stroke.nodeValue);
    
    tspan.innerHTML = pathVo[evt.target.attributes.stroke.nodeValue][0]
    tspan2.innerHTML = pathVo[evt.target.attributes.stroke.nodeValue][1]
    tspan2.style.display = 'block';
  })
  pathEle.addEventListener('mouseout',function(evt){
    evt.target.style.animation  = "changeSmall 0.5s linear 0s 1 normal forwards"
    tspan.innerHTML = 'Skills';
    tspan2.style.display = 'none';
  })
}
