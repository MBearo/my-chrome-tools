// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function () {
  if (location.host == 'wiki.inf.lehe.com') {
    var time=setInterval(_=>{
      if(document.querySelector('#rte')){
        clearInterval(time)
        document.querySelector('#rte').style.display = 'block'
      }
    },100)
  }
});