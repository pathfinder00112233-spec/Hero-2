(function(){var DN=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
function f(m){var h=Math.floor(m/60),x=h>=12?'PM':'AM';h=h%12||12;return h+':'+('0'+m%60).slice(-2)+' '+x}
function st(){var t=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'})),d=t.getDay(),m=t.getHours()*60+t.getMinutes();
if(d===0)return{o:0,t:'Closed · Opens Mon 9:30 AM'};
var o=540,c=1080;
if(m>=o&&m<c)return{o:1,t:'Open · Closes 2:00 PM / Reopens 4:00 PM'};
return{o:0,t:d===6?'Closed · Opens Mon 9:30 AM':'Closed · '+(m<o?'Opens 9:00 AM':'Tomorrow 9:30 AM')};}
function upd(){var r=st();document.querySelectorAll('[data-opd]').forEach(function(e){e.textContent=r.t;e.classList.toggle('is-open',!!r.o)})}
upd();setInterval(upd,6e4);
document.querySelectorAll('.ba-cmp').forEach(function(c){var i=c.querySelector('input');i.addEventListener('input',function(){c.style.setProperty('--pos',i.value+'%')});['mousedown','touchstart','pointerdown'].forEach(function(v){c.addEventListener(v,function(e){e.stopPropagation()},{passive:true})})});
var cv=document.getElementById('scene');if(cv){var ok=!!window.THREE;try{var g=document.createElement('canvas');ok=ok&&!!(g.getContext('webgl')||g.getContext('experimental-webgl'))}catch(e){ok=false}
if(!ok){var p=document.createElement('p');p.className='gl-fallback';p.textContent='The 3D model could not load on this device. Please read the guide below or message us on WhatsApp.';cv.replaceWith(p)}}})();
(function(){
window.focusBookingConfirm=function(){var d=document.getElementById('bookingDeskSection'),b=document.getElementById('deskWhatsAppCta'),n=document.getElementById('bookingNote');if(!d||!b)return;
var dy=d.getBoundingClientRect().top+pageYOffset-52,by=b.getBoundingClientRect().bottom+pageYOffset-(innerHeight-130);
window.scrollTo({top:Math.max(dy,by),behavior:'smooth'});
setTimeout(function(){var s=document.getElementById('treatmentSelect');if(n){n.textContent='Booking for: '+((s&&s.value)||'your selected treatment')+'. Not the right treatment? Change it above.';n.classList.add('show')}
b.classList.remove('nudge');void b.offsetWidth;b.classList.add('nudge')},700)};
document.querySelectorAll('a[href="#bookingDeskSection"]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();window.focusBookingConfirm()})});
})();
