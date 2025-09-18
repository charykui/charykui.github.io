
// Theme toggle
const themeToggle = document.getElementById('themeToggle');
if(themeToggle){
  const saved = localStorage.getItem('theme') || 'light';
  document.body.className = saved === 'dark' ? 'theme-dark' : 'theme-light';
  themeToggle.textContent = saved === 'dark' ? '☀️' : '🌙';
  themeToggle.addEventListener('click', ()=>{
    const isDark = document.body.classList.contains('theme-dark');
    if(isDark){ document.body.classList.remove('theme-dark'); document.body.classList.add('theme-light'); themeToggle.textContent = '🌙'; localStorage.setItem('theme','light'); }
    else { document.body.classList.remove('theme-light'); document.body.classList.add('theme-dark'); themeToggle.textContent = '☀️'; localStorage.setItem('theme','dark'); }
  });
}

// Simple client-side filtering
function setupFilters(filterId, gridId){
  const filters = document.getElementById(filterId);
  const grid = document.getElementById(gridId);
  if(!filters || !grid) return;
  filters.addEventListener('click', (e)=>{
    if(e.target.tagName!=='BUTTON') return;
    [...filters.querySelectorAll('button')].forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');
    const tag = e.target.dataset.filter;
    const cards = grid.querySelectorAll('.card');
    cards.forEach(c=>{
      if(tag==='all' || c.dataset.category===tag) c.style.display='block'; else c.style.display='none';
    });
  });
}
document.addEventListener('DOMContentLoaded', ()=>{
  setupFilters('projects-filters','projects-grid');
  setupFilters('labs-filters','labs-grid');
});
