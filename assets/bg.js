(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;const c=document.getElementById('bg'),x=c.getContext('2d');let W,H,P=[];
function rs(){W=c.width=innerWidth*devicePixelRatio;H=c.height=innerHeight*devicePixelRatio;const n=Math.min(70,Math.floor(innerWidth*innerHeight/22000));P=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}))}
function dr(){x.clearRect(0,0,W,H);const g=48*devicePixelRatio;x.strokeStyle='rgba(56,225,255,0.045)';x.lineWidth=1;x.beginPath();for(let i=0;i<W;i+=g){x.moveTo(i,0);x.lineTo(i,H)}for(let j=0;j<H;j+=g){x.moveTo(0,j);x.lineTo(W,j)}x.stroke();
const L=140*devicePixelRatio;for(const p of P){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1}
for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const a=P[i],b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<L){x.strokeStyle=`rgba(56,225,255,${.18*(1-d/L)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
x.fillStyle='rgba(120,235,255,.7)';for(const p of P){x.beginPath();x.arc(p.x,p.y,1.4*devicePixelRatio,0,7);x.fill()}
if(!RM&&!document.hidden)requestAnimationFrame(dr)}
addEventListener('resize',rs);document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!RM)dr()});rs();dr();})();
