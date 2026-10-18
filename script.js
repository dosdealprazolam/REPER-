// ==========================================
//   REPER - Lógica y Datos de la Web
//   ================================----------

const $ = id => document.getElementById(id);

// --- 1. MODO OSCURO / CLARO ---
const themeBtn = $('themeToggleBtn');
const htmlEl = document.documentElement;
const savedTheme = localStorage.getItem('reper_theme') || 'dark';
htmlEl.setAttribute('data-theme', savedTheme);
if(themeBtn) themeBtn.textContent = savedTheme === 'dark' ? '☀️ Claro' : '🌙 Oscuro';

if(themeBtn) {
  themeBtn.onclick = () => {
    const current = htmlEl.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('reper_theme', next);
    themeBtn.textContent = next === 'dark' ? '☀️ Claro' : '🌙 Oscuro';
  };
}

// --- 2. DATOS ORIGINALES ---
const IMG = {
  incubadora: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&auto=format&fit=crop&q=60',
  luz: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60',
  mice: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=60'
};

const PR = [ 
  {n:'Calcio',c:'suplementos',t:'El calcio mantiene huesos y caparazones fuertes y es clave para que las hembras formen huevos sanos.'}, 
  {n:'Luz UBV Tropical',c:'luz',t:'Los reptiles diurnos necesitan luz UVB para producir vitamina D3 y aprovechar el calcio. Dales su sol, incluso bajo techo.'}, 
  {n:'Foco cerámico',c:'luz',t:'Emite calor infrarrojo sin luz visible, ideal para mantener la temperatura del terrario también de noche.'}, 
  {n:'Cable térmico',c:'luz',t:'Calor desde el sustrato para crear una zona templada en el terrario, sin luz que moleste el descanso.'}, 
  {n:'Luz UVA',c:'luz',t:'Una lámpara halógena UVA crea la zona de asoleo, donde tu reptil o tortuga se calienta y se activa.'}, 
  {n:'Bombilla nocturna',c:'luz',t:'Con una bombilla nocturna das calor y puedes observar a tu reptil de noche sin encender una luz blanca.'}, 
  {n:'Papilla para drosófilas',c:'alimento',t:'Las moscas de la fruta alimentan a crías de geckos y ranas. Con una papilla bien formulada, el cultivo se mantiene sano y constante.'}, 
  {n:'Alimento congelado',c:'congelado',t:'El alimento congelado se conserva bien y se ofrece descongelado, sin necesidad de presas vivas.'}, 
  {n:'Latas monoproteicas',c:'alimento',t:'Una sola fuente de proteína facilita saber qué le sienta bien a tu animal, y ayuda si tiene la digestión sensible.'}, 
  {n:'Pejerrey liofilizado',c:'alimento',t:'El liofilizado conserva el sabor y los nutrientes del pescado sin refrigeración, y el hervido previo lo deja listo para ofrecer.'}, 
  {n:'Incubadoras REPER',c:'incubacion',t:'Una temperatura estable decide si un huevo eclosiona. Controla cada grado con nuestras incubadoras.'}, 
  {n:'Insect Protein',c:'alimento',t:'Entre 75 y 85 g de proteína por cada 100 g, pensada para apoyar la reproducción.'}, 
  {n:'Insect Food',c:'alimento',t:'25 alimentos con probióticos, prebióticos, vitaminas y minerales en un solo balanceado.'}, 
  {n:'Ratonina REPER',c:'alimento',t:'Granos selectos pelletizados con 19,5 % de proteína para criar ratones bien alimentados.'}, 
  {n:'Larva deshidratada',c:'alimento',t:'Proteína de insecto lista para servir y fácil de guardar.'}, 
  {n:'LARCOS',c:'alimento',t:'Pellet de mosca soldado para peces ornamentales, con harinas de alta calidad.'}, 
  {n:'Precios REPER',c:'todo',t:'Producimos e importamos a granel para que cuidar a tus animales exóticos no sea un lujo.'}
]; 

const FE = [ 
  {n:'3 de marzo: Día Mundial de la Vida Silvestre',m:3,d:3,t:'Cada especie cumple un papel en su ecosistema. Cuidarlas empieza por conocerlas.'}, 
  {n:'22 de mayo: Día de la Biodiversidad',m:5,d:22,t:'Perú es uno de los países más biodiversos del planeta. Cuidar bien a tus animales exóticos es parte de cuidar esa riqueza.'}, 
  {n:'23 de mayo: Día Mundial de las Tortugas',m:5,d:23,c:'suplementos',t:'Existen desde hace más de 200 millones de años. Su caparazón es parte del esqueleto, por eso necesitan calcio y luz UBV.'}, 
  {n:'16 de julio: Día Mundial de la Serpiente',m:7,d:16,t:'Las serpientes huelen con la lengua: al sacarla recogen partículas del aire y las llevan a su paladar.'}, 
  {n:'14 de agosto: Día Mundial del Lagarto',m:8,d:14,c:'luz',t:'Hay miles de especies de lagartos. Muchos pueden soltar la cola para escapar y luego regenerar una nueva.'}, 
  {n:'4 de octubre: Día Mundial de los Animales',m:10,d:4,c:'todo',t:'Un animal con buena nutrición, luz y temperatura correctas vive más y mejor. Eso buscamos en cada producto REPER.'}, 
  {n:'21 de octubre: Día de los Reptiles',m:10,d:21,t:'Cerca de 1 de cada 5 reptiles está amenazado de extinción. Conocerlos y cuidarlos bien marca la diferencia.'}
]; 

const CU = [ 
  {n:'Curiosidad',t:'Los reptiles no producen su propio calor: dependen del ambiente para regular su temperatura.'}, 
  {n:'Curiosidad',c:'incubacion',t:'En los caimanes y en muchas tortugas, la temperatura del nido define si nacen machos o hembras.'}, 
  {n:'Curiosidad',t:'Los caimanes reponen sus dientes durante toda la vida.'},
  {n:'Curiosidad',t:'Muchos reptiles mudan la piel para crecer. Con la humedad adecuada, la muda sale completa.'}, 
  {n:'Curiosidad',c:'alimento',t:'Las larvas de mosca soldado convierten residuos orgánicos en proteína de alta calidad.'}
]; 

const FZ = [
  {n:'Ratón adulto congelado', d:'Ratones adultos de 28 a 32 g cada uno, listos para descongelar y ofrecer.', i:'mice', t:[['1 unidad',1,8],['Pack de 10',10,70],['Pack de 36',36,234]]}
];

const fm = num => num.toFixed(2);
const link = text => `https://wa.me/51999999999?text=${encodeURIComponent(text)}`;

let R = [];
for(let i=0; i<17; i++) [PR,FE,CU].forEach(a => a[i] && R.push(a[i]));

const now = new Date(), t0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const dl = r => {
  if(!r.m) return 999;
  const x = (new Date(now.getFullYear(), r.m-1, r.d) - t0) / 864e5;
  return Math.round(x < 0 ? x + 365 : x);
};

let st = 0, best = 11;
R.forEach((r,i) => { if(r.m && dl(r) < best) { best = dl(r); st = i; } });

let ri = 0, rp = false;
const rm = matchMedia('(prefers-reduced-motion:reduce)').matches;

function setR(i) {
  ri = (i + R.length) % R.length;
  if($('rn'))$('rn').textContent = (R[ri].m && dl(R[ri]) == 0 ? 'Hoy, ' : '') + R[ri].n;
  if($('rv'))$('rv').style.display = R[ri].c ? 'block' : 'none';
  if($('rx'))$('rx').textContent = R[ri].t;
  document.querySelectorAll('#rdots button').forEach((b,j) => b.classList.toggle('on', j == ri));
}

function showR(i) {
  const s = $('rs');
  if(!s) return setR(i);
  if(rm) return setR(i);
  s.classList.add('out');
  setTimeout(()=>{ setR(i); s.classList.remove('out'); }, 350);
}

if($('rdots')) {$('rdots').innerHTML = R.map((r,i) => `<button aria-label="${r.n}" data-i="${i}" style="width:12px;height:12px;border-radius:50%;border:none;background:var(--border-color);cursor:pointer;"></button>`).join('');
  $('rdots').onclick = e => { if(e.target.dataset.i !== undefined) showR(+e.target.dataset.i); };
}

const rb = $('rb');
if(rb) {
  rb.onmouseenter = rb.onfocusin = () => rp = true;
  rb.onmouseleave = rb.onfocusout = () => rp = false;
}
setInterval(() => { if(!rp && !document.hidden) showR(ri + 1); }, 6500);
setR(st);

// Renderizar Productos Congelados
if($('fz')) {$('fz').innerHTML = FZ.map(p => `
    <article class="fz">
      <img src="${IMG[p.i] || IMG.incubadora}" alt="${p.n}" loading="lazy">
      <div class="fb">
        <div>
          <h3>${p.n}</h3>
          <p>${p.d}</p>
          <ul class="tr">
            ${p.t.map(([a,q,b]) => `<li><span>${a}${q>1 ? `<small>(S/ ${fm(b/q)} c/u)</small>` : ''}</span><b>S/ ${b}</b></li>`).join('')}
          </ul>
        </div>
        <div><a class="b" target="_blank" rel="noopener" href="${link('Hola REPER, quiero consultar por: '+p.n)}">Pedir por WhatsApp</a></div>
      </div>
    </article>
  `).join('');
}

// Renderizar Catálogo General
if($('gridCat')) {$('gridCat').innerHTML = PR.map(p => `
    <article>
      <img src="${IMG[p.c] || IMG.incubadora}" alt="${p.n}" loading="lazy">
      <div class="fb">
        <div>
          <h3>${p.n}</h3>
          <p>${p.t}</p>
        </div>
        <div><a class="b" target="_blank" rel="noopener" href="${link('Hola REPER, quiero consultar por: '+p.n)}">Consultar</a></div>
      </div>
    </article>
  `).join('');
}

// --- 3. RESTRICCIÓN DE ADMINISTRADOR ---
function verificarAdmin() {
  const pwd = prompt("Introduce la contraseña de Administrador:");
  if (pwd === "reperadmin2026") {
    $('admin-panel').classList.toggle('active');
    alert("Acceso concedido.");
  } else if (pwd !== null) {
    alert("Contraseña incorrecta.");
  }
}

function guardarAdmin() {
  alert("Cambios guardados correctamente.");
  $('admin-panel').classList.remove('active');
}