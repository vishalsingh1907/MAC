/* ── EVENT DATA ── */
const EVT = {
  'azure-ai': {
    title: 'Azure AI & Machine Learning Workshop', tag: 'Workshop', tagCls: 'workshop',
    date: 'April 12, 2025', loc: 'CoE Lab, Block D', seats: '40 seats available', dur: '6 hours (10 AM – 4 PM)',
    desc: 'This hands-on workshop introduces students to Azure Cognitive Services and Azure Machine Learning Studio.',
    learn: ['Introduction to Azure Portal', 'Building classification models', 'Deploying models via REST API'],
    who: 'Open to all students from any department.',
    prereq: 'A laptop and a curiosity for AI.'
  },
  'hackathon': {
    title: 'HackVidyapeeth — 24-Hour Innovation Challenge', tag: 'Hackathon', tagCls: 'hackathon',
    date: 'May 3–4, 2025', loc: 'Main Auditorium', seats: '120 seats (teams of 2–4)', dur: '24 hours',
    desc: 'Flagship annual hackathon to build solutions using Microsoft technology.',
    learn: ['Rapid prototyping', 'Team collaboration', 'Pitching skills'],
    who: 'Open to all Lingaya\'s Vidyapeeth students.',
    prereq: 'No specific prerequisites. Bring laptops.'
  }
  // Additional events (ai-seminar, power-platform, github) follow the same pattern...
};

/* ── PAGE ROUTING ── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById('page-' + id);
  if (targetPage) {
    targetPage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Reset any success messages
  document.querySelectorAll('.success-msg').forEach(el => el.style.display = 'none');
  setTimeout(initReveal, 100);
}

function goHome() { showPage('home'); }

/* ── DYNAMIC EVENT LOADING ── */
function showEvent(id) {
  const e = EVT[id]; 
  if (!e) return;

  document.getElementById('ev-title').textContent = e.title;
  const tg = document.getElementById('ev-tag');
  tg.textContent = e.tag;
  tg.className = 'event-tag ' + e.tagCls;

  document.getElementById('ev-date').textContent = e.date;
  document.getElementById('ev-loc').textContent = e.loc;
  document.getElementById('ev-seats').textContent = e.seats;
  document.getElementById('ev-dur').textContent = e.dur;
  document.getElementById('ev-desc').textContent = e.desc;
  document.getElementById('ev-who').textContent = e.who;
  document.getElementById('ev-prereq').textContent = e.prereq;

  const ul = document.getElementById('ev-learn');
  ul.innerHTML = e.learn.map(l => `<li><i class="fa-solid fa-check"></i>${l}</li>`).join('');
  
  showPage('event');
}

/* ── UTILITIES ── */
function sTo(sel) {
  setTimeout(() => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

function submitOk(id) {
  const msg = document.getElementById(id);
  msg.style.display = 'block';
  msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ── MOBILE NAV & ANIMATIONS ── */
const hb = document.getElementById('hamburger');
const nl = document.getElementById('navLinks');
if (hb) hb.addEventListener('click', () => nl.classList.toggle('open'));

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: .1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

// Initial Call
initReveal();