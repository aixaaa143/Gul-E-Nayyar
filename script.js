
const categories = ['3piece', '2piece', 'dupatta'];
const productGrid = document.getElementById('productGrid');

for (let i = 1; i <= 30; i++) {
  const type = categories[i % 3];
  const card = document.createElement('div');
  card.className = `product-card ${type}`;
  card.innerHTML = `
    <img src="https://via.placeholder.com/300x400.png?text=Suit+${i}" alt="Product ${i}" />
    <h3>Elegant Look ${i}</h3>
    <p class="price">Rs. ${10000 + i * 100}</p>
    <p class="type">${type.toUpperCase()}</p>
  `;
  card.onclick = () => openModal(i, type);
  productGrid.appendChild(card);
}

function filterItems(category) {
  const items = document.querySelectorAll('.product-card');
  items.forEach(item => {
    item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
  });
}

function openModal(i, type) {
  document.getElementById('productModal').style.display = 'block';
  document.getElementById('modalTitle').innerText = `Elegant Look ${i}`;
  document.getElementById('modalPrice').innerText = `Rs. ${10000 + i * 100}`;
  document.getElementById('modalType').innerText = type.toUpperCase();
  document.getElementById('modalInfo').innerText = 'This suit is handmade and perfect for festive events.';
  document.getElementById('modalImage').src = `https://via.placeholder.com/300x400.png?text=Suit+${i}`;
  document.getElementById('reviewSection').innerHTML = '';
}

function closeModal() {
  document.getElementById('productModal').style.display = 'none';
}

function submitReview() {
  const review = document.getElementById('userReview').value.trim();
  if (review) {
    const para = document.createElement('p');
    para.innerText = review;
    document.getElementById('reviewSection').appendChild(para);
    document.getElementById('userReview').value = '';
  }
}

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow .slide');
setInterval(() => {
  slides.forEach(s => s.classList.remove('active'));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}, 4000);
