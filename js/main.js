// Gifty Navigator - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {

  // ===== Mobile Menu Toggle =====
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) navLinks.classList.remove('open');
    });
  }

  // ===== Active Nav Highlight =====
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
      link.classList.add('active');
    }
  });

  // ===== Filter Buttons =====
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const filterGroup = this.closest('.filter-bar');
      filterGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ===== Tabs =====
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const tabGroup = this.closest('.tabs');
      const tabContainer = tabGroup.parentElement;
      const tabName = this.dataset.tab;
      
      tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      tabContainer.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.dataset.tab === tabName) content.classList.add('active');
      });
    });
  });

  // ===== Quiz Logic =====
  const quizSteps = document.querySelectorAll('.quiz-step');
  const quizResult = document.querySelector('.quiz-result');
  const progressBar = document.querySelector('.quiz-progress-bar');
  let currentStep = 0;
  const answers = [];

  if (quizSteps.length > 0) {
    // Show first step
    quizSteps[0].classList.add('active');
    updateProgress();

    document.querySelectorAll('.quiz-option').forEach(option => {
      option.addEventListener('click', function() {
        const step = this.closest('.quiz-step');
        step.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');
      });
    });

    document.querySelectorAll('.quiz-next').forEach(btn => {
      btn.addEventListener('click', () => {
        const step = quizSteps[currentStep];
        const selected = step.querySelector('.quiz-option.selected');
        if (!selected) return;
        
        answers.push(selected.textContent.trim());
        
        if (currentStep < quizSteps.length - 1) {
          step.classList.remove('active');
          currentStep++;
          quizSteps[currentStep].classList.add('active');
          updateProgress();
        } else {
          step.classList.remove('active');
          showQuizResult();
        }
      });
    });

    document.querySelectorAll('.quiz-back').forEach(btn => {
      btn.addEventListener('click', () => {
        if (currentStep > 0) {
          quizSteps[currentStep].classList.remove('active');
          currentStep--;
          answers.pop();
          quizSteps[currentStep].classList.add('active');
          updateProgress();
        }
      });
    });
  }

  function updateProgress() {
    if (!progressBar) return;
    const pct = ((currentStep + 1) / quizSteps.length) * 100;
    progressBar.style.width = pct + '%';
  }

  function showQuizResult() {
    if (!quizResult) return;
    
    // Simple recommendation logic based on answers
    const personality = answers[2] || '';
    const budget = answers[3] || '';
    const priority = answers[4] || '';
    
    let recommendation = '';
    let products = [];
    
    if (personality.includes('Tech') || personality.includes('gadget')) {
      recommendation = 'Tech Upgrade';
      products = ['Wireless Earbuds', 'Smart Home Hub', 'Portable Charger'];
    } else if (personality.includes('Food') || personality.includes('drink')) {
      recommendation = 'Foodie Experience';
      products = ['Premium Olive Oil Set', 'Hot Sauce Making Kit', 'Wine Subscription'];
    } else if (personality.includes('Adventurous') || personality.includes('outdoors')) {
      recommendation = 'Outdoor Adventure';
      products = ['Camping Hammock', 'Portable Fire Pit', 'National Parks Pass'];
    } else if (personality.includes('Cozy') || personality.includes('homebody')) {
      recommendation = 'Cozy Comfort';
      products = ['Weighted Blanket', 'Premium Candle Set', 'Reading Nook Kit'];
    } else {
      recommendation = 'Creative Spark';
      products = ['Art Supply Kit', 'DIY Candle Making Set', 'Custom Journal'];
    }
    
    quizResult.innerHTML = `
      <h3>🎉 Your Perfect Gift Direction: <strong>${recommendation}</strong></h3>
      <p style="font-size:1.1rem;margin-bottom:1.5rem;">Based on your answers, here's what we recommend:</p>
      <div class="product-grid" style="margin-bottom:1.5rem;">
        ${products.map(p => `
          <div class="product-card">
            <div class="product-image">🎁</div>
            <div class="product-body">
              <div class="product-title">${p}</div>
              <div class="product-desc">Handpicked based on your recipient's personality and occasion</div>
              <a href="#products" class="btn-buy">View Recommendation</a>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="email-capture">
        <h3>📬 Get Your Full Gift Guide</h3>
        <p>We'll send you a personalized gift list with prices, links, and our famous "avoid-this" warnings. Plus: upcoming holiday reminders so you never gift-shop last minute.</p>
        <form class="email-form" onsubmit="event.preventDefault(); alert('Thank you! Check your inbox.');">
          <input type="email" placeholder="Your email address" required>
          <button type="submit" class="btn btn-primary">Send My Guide</button>
        </form>
      </div>
    `;
    
    quizResult.classList.add('active');
    updateProgress();
  }

  // ===== Product Price Toggle =====
  document.querySelectorAll('.price-filter').forEach(btn => {
    btn.addEventListener('click', function() {
      const priceRange = this.dataset.price;
      const productSection = this.closest('.section');
      if (!productSection) return;
      
      productSection.querySelectorAll('.price-filter').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Show/hide logic would go here on a real implementation
    });
  });

  // ===== Smooth Scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== Intersection Observer for fade-in animations =====
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.stat-card, .occasion-card, .product-card, .age-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // ===== Current Year for dynamic content =====
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

});
