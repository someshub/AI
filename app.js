// Cards render karo
function renderCards(data) {
  const grid = document.getElementById('serviceGrid');
  grid.innerHTML = '';
  
  data.forEach(service => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.category = service.category;
    card.innerHTML = `
      <div class="card-num">${service.id}</div>
      <div class="card-category">${getCategoryName(service.category)}</div>
      <h3 class="card-title">${service.title}</h3>
      <p class="card-usecase">${service.usecase}</p>
      <div class="card-tech">${service.tech}</div>
      <div class="card-price">${service.price}</div>
      <button class="card-btn" onclick="contact('${service.title}')">Get Quote</button>
    `;
    grid.appendChild(card);
  });
}

function getCategoryName(cat) {
  const names = {
    chat: 'Conversational AI',
    iot: 'Industrial IoT',
    doc: 'Document AI',
    data: 'Data + Analytics',
    marketing: 'Marketing AI',
    dev: 'AI Integration',
    niche: 'Specialized',
    future: 'Future Tech'
  };
  return names[cat] || cat;
}

// Filter logic
const filterBtns = document.querySelectorAll('.filter-btn');
const searchBox = document.getElementById('searchBox');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterServices();
  });
});

searchBox.addEventListener('input', filterServices);

function filterServices() {
  const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
  const searchTerm = searchBox.value.toLowerCase();
  
  const filtered = servicesData.filter(service => {
    const matchCategory = activeFilter === 'all' || service.category === activeFilter;
    const matchSearch = service.title.toLowerCase().includes(searchTerm) || 
                       service.usecase.toLowerCase().includes(searchTerm) ||
                       service.tech.toLowerCase().includes(searchTerm);
    return matchCategory && matchSearch;
  });
  
  renderCards(filtered);
}

// WhatsApp contact
function contact(serviceName) {
  const phone = '919131367020;
  const msg = `Hi Sagar, Mujhe "${serviceName}" service chahiye. Details bhejo.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Initial load
renderCards(servicesData);
