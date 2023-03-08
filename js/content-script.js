// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function () {
  if(location.host==='www.google.com'||location.host==='www.google.com.hk'){
    setTimeout(_=>{
      document.querySelectorAll('.H9lube').forEach(i=>i.style.display='none')
    })
  }
});