const menu=document.querySelector('.menu');const nav=document.querySelector('.desktop-nav');menu?.addEventListener('click',()=>{nav.classList.toggle('mobile-open')});document.querySelectorAll('.desktop-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')));
const form=document.getElementById('bookingForm');form?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const body=encodeURIComponent(`Customer Name: ${d.get('name')}\nMobile: ${d.get('phone')}\nVehicle: ${d.get('vehicle')}\nService: ${d.get('service')}\nMessage: ${d.get('message')}`);location.href=`mailto:saudiaautomobile@gmail.com?subject=Service Booking - Saudia Automobile&body=${body}`});

// Advanced scroll + interaction animations
const header=document.querySelector('.header');
const revealEls=document.querySelectorAll('.section,.contact,.section-head,.about-art,.about-grid>div,.booking-box,.contact-box,.quick');
const staggerEls=document.querySelectorAll('.service-grid,.check-grid,.gallery-grid');
revealEls.forEach((el,i)=>{ if(!el.classList.contains('hero')) el.classList.add('scroll-reveal'); if(el.matches('.about-art')) el.classList.add('from-left'); if(el.matches('.about-grid>div:nth-child(2)')) el.classList.add('from-right'); });
staggerEls.forEach(el=>el.classList.add('stagger'));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.scroll-reveal,.stagger').forEach(el=>io.observe(el));
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>25),{passive:true});
// Active navigation based on the section currently on screen
const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.desktop-nav a')];
const navIO=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(s=>navIO.observe(s));
// Subtle pointer parallax for the hero
const hero=document.querySelector('.hero');
hero?.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;const car=document.querySelector('.hero-car');if(car)car.style.transform=`translate(${x*8}px,${y*5}px)`},{passive:true});
hero?.addEventListener('pointerleave',()=>{const car=document.querySelector('.hero-car');if(car)car.style.transform=''},{passive:true});
