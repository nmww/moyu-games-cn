(function(){
  if(!('ontouchstart' in window) && !navigator.maxTouchPoints) return;
  function fire(type, t){
    var p=t.changedTouches?t.changedTouches[0]:t.touches[0];
    if(!p) return;
    var el=document.elementFromPoint(p.clientX,p.clientY)||document.body;
    var ev=new MouseEvent(type,{clientX:p.clientX,clientY:p.clientY,
      bubbles:true,cancelable:true,view:window});
    el.dispatchEvent(ev);
  }
  document.addEventListener('touchstart',function(e){if(e.touches.length>1)return;fire('mousedown',e);},{passive:false});
  document.addEventListener('touchmove',function(e){if(e.touches.length>1)return;fire('mousemove',e);e.preventDefault();},{passive:false});
  document.addEventListener('touchend',function(e){fire('mouseup',e);},{passive:false});
})();