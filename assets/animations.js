(function(){
  const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealSelectors=['.section-head','.about-text','.about-visual','.service-card','.cond-item','.cond-note','.contact-info','.contact-form','.stat'];
  revealSelectors.forEach((sel,i)=>{document.querySelectorAll(sel).forEach((el,j)=>{el.classList.add('reveal');if(j%3===1)el.classList.add('reveal-delay-1');if(j%3===2)el.classList.add('reveal-delay-2');});});
  if(!prefersReduced&&'IntersectionObserver' in window){
    const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target);}});},{threshold:.15,rootMargin:'0px 0px -8% 0px'});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  } else { document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view')); }
  const header=document.querySelector('header');
  window.addEventListener('scroll',()=>{if(header)header.classList.toggle('scrolled',window.scrollY>10);},{passive:true});
  if(!prefersReduced){
    const hero=document.querySelector('.hero');
    window.addEventListener('scroll',()=>{if(!hero)return;const y=window.scrollY;if(y<900){hero.style.backgroundPosition='center '+(y*.08)+'px';}},{passive:true});
  }
})();
