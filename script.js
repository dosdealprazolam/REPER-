const $ = i => document.getElementById(i), WA = '51967629555';

// Mapeo organizado con la carpeta 'img/' haciendo referencia al objeto correspondiente
const IMG = {
    calcio: 'img/calcio.png',
    luz_ubv: 'img/luz_ubv.png',
    foco_ceramico: 'img/foco_ceramico.png',
    cable_termico: 'img/cable_termico.png',
    luz_uva: 'img/luz_uva.png',
    bombilla_nocturna: 'img/bombilla_nocturna.png',
    papilla_drosofilas: 'img/papilla_drosofilas.png',
    alimento_congelado: 'img/alimento_congelado.png',
    latas_monoproteicas: 'img/latas_monoproteicas.png',
    pejerrey_liofilizado: 'img/pejerrey_liofilizado.png',
    incubadora_reper: 'img/incubadora_reper.png',
    insect_protein: 'img/insect_protein.png',
    insect_food: 'img/insect_food.png',
    ratonina_reper: 'img/ratonina_reper.png',
    larva_deshidratada: 'img/larva_deshidratada.png',
    larcos: 'img/larcos.png',
    precios_reper: 'img/precios_reper.png',
    mice: 'img/mice_congelado.png'
};

const PR = [
    { n: 'Calcio', c: 'suplementos', p: 'S/ 80', i: 'calcio', t: 'El calcio mantiene huesos y caparazones fuertes y es clave para que las hembras formen huevos sanos.' },
    { n: 'Luz UBV Tropical', c: 'luz', p: 'S/ 55', i: 'luz_ubv', t: 'Los reptiles diurnos necesitan luz UVB para producir vitamina D3 y aprovechar el calcio. Dales su sol, incluso bajo techo.' },
    { n: 'Foco cerámico', c: 'luz', p: 'S/ 45', i: 'foco_ceramico', t: 'Emite calor infrarrojo sin luz visible, ideal para mantener la temperatura del terrario también de noche.' },
    { n: 'Cable térmico', c: 'luz', p: 'S/ 45', i: 'cable_termico', t: 'Calor desde el sustrato para crear una zona templada en el terrario, sin luz que moleste el descanso.' },
    { n: 'Luz UVA', c: 'luz', p: 'S/ 45', i: 'luz_uva', t: 'Una lámpara halógena UVA crea la zona de asoleo, donde tu reptil o tortuga se calienta y se activa.' },
    { n: 'Bombilla nocturna', c: 'luz', p: 'S/ 45', i: 'bombilla_nocturna', t: 'Con una bombilla nocturna das calor y puedes observar a tu reptil de noche sin encender una luz blanca.' },
    { n: 'Papilla para drosófilas', c: 'alimento', p: 'S/ 36', i: 'papilla_drosofilas', t: 'Las moscas de la fruta alimentan a crías de geckos y ranas. Con una papilla bien formulada, el cultivo se mantiene sano y constante.' },
    { n: 'Alimento congelado', c: 'congelado', p: 'S/ 8', i: 'alimento_congelado', t: 'El alimento congelado se conserva bien y se ofrece descongelado, sin necesidad de presas vivas.' },
    { n: 'Latas monoproteicas', c: 'alimento', p: 'S/ 25', i: 'latas_monoproteicas', t: 'Una sola fuente de proteína facilita saber qué le sienta bien a tu animal, y ayuda si tiene la digestión sensible.' },
    { n: 'Pejerrey liofilizado', c: 'alimento', p: 'S/ 40', i: 'pejerrey_liofilizado', t: 'El liofilizado conserva el sabor y los nutrientes del pescado sin refrigeración, y el hervido previo lo deja listo para ofrecer.' },
    { n: 'Incubadoras REPER', c: 'incubacion', p: 'S/ 550', i: 'incubadora_reper', t: 'Una temperatura estable decide si un huevo eclosiona. Controla cada grado con nuestras incubadoras.' },
    { n: 'Insect Protein', c: 'alimento', p: 'S/ 65', i: 'insect_protein', t: 'Entre 75 y 85 g de proteína por cada 100 g, pensada para apoyar la reproducción.' },
    { n: 'Insect Food', c: 'alimento', p: 'S/ 45', i: 'insect_food', t: '25 alimentos con probióticos, prebióticos, vitaminas y minerales en un solo balanceado.' },
    { n: 'Ratonina REPER', c: 'alimento', p: 'S/ 12', i: 'ratonina_reper', t: 'Granos selectos pelletizados con 19,5 % de proteína para criar ratones bien alimentados.' },
    { n: 'Larva deshidratada', c: 'alimento', p: 'S/ 65', i: 'larva_deshidratada', t: 'Proteína de insecto lista para servir y fácil de guardar.' },
    { n: 'LARCOS', c: 'alimento', p: 'S/ 40', i: 'larcos', t: 'Pellet de mosca soldado para peces ornamentales, con harinas de alta calidad.' },
    { n: 'Precios REPER', c: 'todo', p: 'S/ 12', i: 'precios_reper', t: 'Producimos e importamos a granel para que cuidar a tus animales exóticos no sea un lujo.' }
];

const FE = [
    { n: '3 de marzo: Día Mundial de la Vida Silvestre', m: 3, d: 3, t: 'Cada especie cumple un papel en su ecosistema. Cuidarlas empieza por conocerlas.' },
    { n: '22 de mayo: Día de la Biodiversidad', m: 5, d: 22, t: 'Perú es uno de los países más biodiversos del planeta. Cuidar bien a tus animales exóticos es parte de cuidar esa riqueza.' },
    { n: '23 de mayo: Día Mundial de las Tortugas', m: 5, d: 23, c: 'suplementos', t: 'Existen desde hace más de 200 millones de años. Su caparazón es parte del esqueleto, por eso necesitan calcio y luz UBV.' },
    { n: '16 de julio: Día Mundial de la Serpiente', m: 7, d: 16, t: 'Las serpientes huelen con la lengua: al sacarla recogen partículas del aire y las llevan a su paladar.' },
    { n: '14 de agosto: Día Mundial del Lagarto', m: 8, d: 14, c: 'luz', t: 'Hay miles de especies de lagartos. Muchos pueden soltar la cola para escapar y luego regenerar una nueva.' },
    { n: '4 de octubre: Día Mundial de los Animales', m: 10, d: 4, c: 'todo', t: 'Un animal con buena nutrición, luz y temperatura correctas vive más y mejor. Eso buscamos en cada producto REPER.' },
    { n: '21 de octubre: Día de los Reptiles', m: 10, d: 21, t: 'Cerca de 1 de cada 5 reptiles está amenazado de extinción. Conocerlos y cuidarlos bien marca la diferencia.' }
];

const CU = [
    { n: 'Curiosidad', t: 'Los reptiles no producen su propio calor: dependen del ambiente para regular su temperatura.' },
    { n: 'Curiosidad', c: 'incubacion', t: 'En los caimanes y en muchas tortugas, la temperatura del nido define si nacen machos o hembras.' },
    { n: 'Curiosidad', t: 'Los caimanes reponen sus dientes durante toda la vida.' },
    { n: 'Curiosidad', t: 'Muchos reptiles mudan la piel para crecer. Con la humedad adecuada, la muda sale completa.' },
    { n: 'Curiosidad', c: 'alimento', t: 'Las larvas de mosca soldado convierten residuos orgánicos en proteína de alta calidad.' }
];

const R = [];
for (let i = 0; i < 17; i++) [PR, FE, CU].forEach(a => a[i] && R.push(a[i]));

const now = new Date(), t0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const dl = r => {
    const x = (new Date(now.getFullYear(), r.m - 1, r.d) - t0) / 864e5;
    return Math.round(x < 0 ? x + 365 : x);
};

let st = 0, best = 11;
R.forEach((r, i) => { if (r.m && dl(r) < best) { best = dl(r); st = i; } });

let ri = 0, rp = false;
const rm = matchMedia('(prefers-reduced-motion:reduce)').matches;

function setR(i) {
    ri = (i + R.length) % R.length;
    $('rn').textContent = (R[ri].m && dl(R[ri]) == 0 ? 'Hoy, ' : '') + R[ri].n;
    $('rv').style.display = R[ri].c ? '' : 'none';
    $('rx').textContent = R[ri].t;
    document.querySelectorAll('#rdots button').forEach((b, j) => b.classList.toggle('on', j == ri));
}

function showR(i) {
    const s = $('rs');
    if (rm) return setR(i);
    s.classList.add('out');
    setTimeout(() => { setR(i); s.classList.remove('out'); }, 350);
}

const rdotsEl = $('rdots');
if (rdotsEl) {
    rdotsEl.innerHTML = R.map((r, i) => `<button aria-label="${r.n}" data-i="${i}"></button>`).join('');
    rdotsEl.onclick = e => { if (e.target.dataset.i !== undefined) showR(+e.target.dataset.i); };
}

const rvEl = $('rv');
if (rvEl) {
    rvEl.onclick = () => {
        const c = R[ri].c, b = { behavior: rm ? 'auto' : 'smooth' };
        if (c == 'congelado') $('congelado').scrollIntoView(b);
        else { cat = c; draw(); $('catalogo').scrollIntoView(b); }
    };
}

const rb = $('rb');
if (rb) {
    rb.onmouseenter = rb.onfocusin = () => rp = true;
    rb.onmouseleave = rb.onfocusout = () => rp = false;
}

setInterval(() => { if (!rp && !document.hidden) showR(ri + 1); }, 6500);
setR(st);

const FZ = [{
    n: 'Ratón adulto congelado',
    d: 'Ratones adultos de 28 a 32 g cada uno, listos para descongelar y ofrecer.',
    i: 'mice',
    t: [['1 unidad', 1, 8], ['Pack de 10', 10, 70], ['Pack de 36', 36, 234]]
}];

const fzEl = $('fz');
if (fzEl) {
    fzEl.innerHTML = FZ.map(p => `
        <article class="fz">
            <img src="${IMG[p.i]}" alt="${p.n}" loading="lazy">
            <div class="fb">
                <h3>${p.n}</h3>
                <p>${p.d}</p>
                <ul class="tr">
                    ${p.t.map(([a, q, b]) => `<li><span>${a}${q > 1 ? `<small>S/ ${(b / q).toFixed(2)} cada uno</small>` : ''}</span><b>S/ ${b}</b></li>`).join('')}
                </ul>
                <div><a class="b" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${encodeURIComponent('Hola REPER, quiero consultar por: ' + p.n)}">Pedir</a></div>
            </div>
        </article>
    `).join('');
}

let cat = 'todo';
function draw() {
    const gr = $('gr');
    if (!gr) return;
    const items = cat === 'todo' ? PR : PR.filter(p => p.c === cat);
    gr.innerHTML = items.map(p => `
        <article class="cd">
            <div class="ph">
                <img src="${IMG[p.i] || 'img/placeholder.png'}" alt="${p.n}" loading="lazy">
            </div>
            <div class="cb">
                <h3>${p.n}</h3>
                <p>${p.t}</p>
                <div class="ft">
                    <span class="pr">${p.p}</span>
                    <a class="b s" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${encodeURIComponent('Hola REPER, quiero consultar por: ' + p.n)}">Pedir</a>
                </div>
            </div>
        </article>
    `).join('');
}

const ch = $('ch');
if (ch) {
    const categories = [
        { id: 'todo', label: 'Todo' },
        { id: 'alimento', label: 'Alimento' },
        { id: 'suplementos', label: 'Suplementos' },
        { id: 'luz', label: 'Luz y Calor' },
        { id: 'incubacion', label: 'Incubación' }
    ];
    ch.innerHTML = categories.map(c => `<button class="${c.id === cat ? 'on' : ''}" data-cat="${c.id}">${c.label}</button>`).join('');
    ch.onclick = e => {
        if (e.target.dataset.cat) {
            cat = e.target.dataset.cat;
            ch.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.cat === cat));
            draw();
        }
    };
}

const linkText = t => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
if ($('wa3'))$('wa3').href = linkText('Hola REPER, quiero consultar por los productos de importación');
if ($('wa0'))$('wa0').href = `https://wa.me/${WA}`;
if ($('wa1'))$('wa1').href = `https://wa.me/${WA}`;
if ($('wa2'))$('wa2').href = `https://wa.me/${WA}`;

const kEl = $('k');
if (kEl) kEl.innerHTML = '<span class="flag"></span> Hecho en Perú';

function setTema(t) {
    document.documentElement.setAttribute('data-tema', t || 'base');
}
setTema('base');
draw();