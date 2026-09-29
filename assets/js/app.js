(function(){
  const gate=document.querySelector('[data-age-gate]');
  const gated=document.querySelector('[data-payment-gated]');
  const form=document.querySelector('[data-age-form]');
  const error=document.querySelector('[data-age-error]');
  function oldEnough(v){const d=new Date(v);if(Number.isNaN(d.getTime()))return false;const now=new Date();let age=now.getFullYear()-d.getFullYear();const m=now.getMonth()-d.getMonth();if(m<0||(m===0&&now.getDate()<d.getDate()))age--;return age>=18;}
  function unlock(){if(gate)gate.hidden=true;if(gated)gated.style.display='block';}
  if(localStorage.getItem('fedpromptly_age_verified')==='yes')unlock();
  form?.addEventListener('submit',e=>{e.preventDefault();const dob=form.querySelector('input').value;if(oldEnough(dob)){localStorage.setItem('fedpromptly_age_verified','yes');unlock();}else{error.textContent='You must be 18 or older to view subscription payment embeds.';}});
  document.querySelectorAll('[data-tilt]').forEach(card=>{card.addEventListener('pointermove',e=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(700px) rotateX(${y*-4}deg) rotateY(${x*4}deg) translateY(-4px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
  const grid=document.querySelector('#project-grid');
  fetch(location.pathname.endsWith('/projects.html') || location.pathname.endsWith('/labs.html') ? 'data/portfolio.json' : 'data/portfolio.json').then(r=>r.json()).then(data=>{if(!grid)return;grid.innerHTML=data.projects.map(p=>`<article class="panel project-card" data-tilt><div class="eyebrow">${p.type}</div><h3>${p.name}</h3><p>${p.description}</p><p class="muted"><strong>Status:</strong> ${p.status}<br><strong>For:</strong> ${p.audience}</p><p><strong>Try this:</strong> ${p.whatYouCanDo}</p><a href="${p.url}" aria-label="Open ${p.name}">Explore project →</a></article>`).join('')}).catch(()=>{if(grid)grid.innerHTML='<p class="muted">Project catalog is temporarily unavailable. The ecosystem is still being built.</p>'});
})();

  const menuButton=document.querySelector('.menu-toggle');const menu=document.querySelector('#site-menu');menuButton?.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});
