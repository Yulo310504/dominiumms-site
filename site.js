
document.documentElement.classList.add('js');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv,#tl').forEach(el=>io.observe(el));
const cu=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,to=+el.dataset.to;let t0=null;const st=t=>{if(!t0)t0=t;const p=Math.min((t-t0)/1600,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(st)};requestAnimationFrame(st);cu.unobserve(el)}),{threshold:.5});
document.querySelectorAll('.cu').forEach(el=>cu.observe(el));
const hdr=document.getElementById('hdr');addEventListener('scroll',()=>hdr.classList.toggle('s',scrollY>40),{passive:true});
document.getElementById('bg')&&document.getElementById('bg').addEventListener('click',()=>hdr.classList.toggle('mo-open'));document.querySelectorAll('.mm a').forEach(a=>a.addEventListener('click',()=>hdr.classList.remove('mo-open')));
document.querySelectorAll('.sp').forEach(el=>el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.setProperty('--mx',(e.clientX-r.left)+'px');el.style.setProperty('--my',(e.clientY-r.top)+'px')}));
document.querySelectorAll('.qa button').forEach(b=>b.addEventListener('click',()=>b.parentElement.classList.toggle('open')));
if(document.getElementById('bars')){const VAR=[88,72,95,64,80,58,91,69,77,61,85,70],bars=document.getElementById('bars'),bs=[...bars.querySelectorAll('i')],ln=bars.querySelector('.ln'),simt=document.getElementById('simt');
function mode(m){bars.classList.toggle('var',m==='var');bs.forEach((b,i)=>b.style.height=(m==='var'?VAR[i]:92)+'%');ln.style.bottom='calc(92% + 10px - 2px)';
simt.textContent=m==='var'?'Sem garantia, a arrecadação oscila conforme a inadimplência do mês, e o síndico precisa correr atrás dos atrasados.':'Com a receita garantida, o condomínio recebe o mesmo valor todos os meses, e a cobrança dos atrasados fica com a garantidora.';
document.querySelectorAll('.tg button').forEach(x=>x.classList.toggle('on',x.dataset.m===m))}
document.querySelectorAll('.tg button').forEach(b=>b.addEventListener('click',()=>mode(b.dataset.m)));
bs.forEach(b=>b.style.height='0%');ln.style.bottom='calc(92% + 10px - 2px)';
new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){mode('var');setTimeout(()=>mode('fix'),1800);o.disconnect()}}),{threshold:.4}).observe(bars);
}
document.querySelectorAll('[data-tabs]').forEach(w=>{const bs=w.querySelectorAll('button'),items=document.querySelectorAll(w.dataset.tabs);
bs.forEach(b=>b.addEventListener('click',()=>{bs.forEach(x=>x.classList.toggle('on',x===b));const f=b.dataset.f;items.forEach(i=>i.classList.toggle('hid',f!=='all'&&!(i.dataset.f||'').split(' ').includes(f)))}))});
const lb=document.getElementById('lb');if(lb){const ims=[...document.querySelectorAll('.gal a')];let k=0;const im=lb.querySelector('img'),cap=lb.querySelector('small');
const show=i=>{k=(i+ims.length)%ims.length;im.src=ims[k].href;cap.textContent=(k+1)+' / '+ims.length;lb.classList.add('on')};
ims.forEach((a,i)=>a.addEventListener('click',e=>{e.preventDefault();show(i)}));lb.querySelector('.lx').onclick=()=>lb.classList.remove('on');lb.querySelector('.lp').onclick=()=>show(k-1);lb.querySelector('.ln2').onclick=()=>show(k+1);
lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('on')});addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key==='Escape')lb.classList.remove('on');if(e.key==='ArrowLeft')show(k-1);if(e.key==='ArrowRight')show(k+1)})}
const fm=document.getElementById('fm');if(fm)fm.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(fm);const o=fm.querySelector('[name=cidade]').selectedOptions[0];
const t=`Olá! Meu nome é ${d.get('nome')}.\nSou ${d.get('perfil')} do ${d.get('condominio')||'condomínio'} (${o.textContent}).\nAssunto: ${d.get('assunto')}\n\n${d.get('mensagem')}`;
window.open('https://wa.me/'+o.value+'?text='+encodeURIComponent(t),'_blank');location.href='obrigado.html'});
const cp=document.getElementById('cp');if(cp)cp.addEventListener('click',()=>{navigator.clipboard&&navigator.clipboard.writeText(location.href);cp.classList.add('ok');setTimeout(()=>cp.classList.remove('ok'),1500)});
