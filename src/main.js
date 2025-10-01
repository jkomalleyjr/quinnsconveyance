import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Developer Controls -->
  <div class="dev-controls" id="devControls" style="display: none;">
    <h3>🛠️ Developer Mode</h3>
    <button onclick="toggleDevMode()">Exit Dev Mode</button>
    <button onclick="clearSelection()">Clear Selection</button>
    <button class="danger" onclick="removeSelected()">Remove Selected</button>
    <button onclick="undoLast()">Undo Last</button>
    <button class="success" onclick="saveChanges()">💾 Save Changes</button>
    <div class="selected-info" id="selectedInfo" style="display: none;">
      <strong>Selected:</strong> <span id="selectedElement">div.feature</span>
    </div>
    <div class="instructions">
      <strong>Instructions:</strong><br>
      • Click any element to select it<br>
      • Click "Remove Selected" to delete<br>
      • Click "Save Changes" to make permanent<br>
      • Press ESC to exit dev mode<br>
      • Unsaved changes reset on refresh
    </div>
  </div>

  <!-- Header -->
  <header class="header" style="background: rgb(255, 255, 255); backdrop-filter: none;">
    <div class="container">
      <div class="header-content">
        <a href="#" class="logo">Quinn's Conveyance</a>
        <nav class="nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#quote" class="cta-button">Get Quote</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Trusted Time-Critical Logistics Partner</h1>
          <p>Quinn's Conveyance delivers expedited freight solutions with decades of experience. When speed counts and deadlines can't wait, we get your cargo where it needs to go—safely and on time.</p>
          <div class="hero-buttons">
            <a href="#quote" class="btn-primary">Get a Quote</a>
            <a href="#services" class="btn-secondary">Our Services</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="truck-icon">🚛</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="services" id="services">
    <div class="container">
      <div class="section-header">
        <h2>Our Hot Shot Services</h2>
        <p>From sprinter vans to full flatbeds, we match the right vehicle to your urgent shipping needs</p>
      </div>
      <div class="services-grid">
        
        
        
        <div class="service-card">
          <div class="service-icon">🏗️</div>
          <h3>Flatbed Services</h3>
          <p>Flexible flatbed trucking for construction materials, machinery, and industrial equipment with real-time tracking and dedicated support.</p>
          <a href="#" class="learn-more">Learn More →</a>
        </div>
        <div class="service-card">
          <div class="service-icon">🛻</div>
          <h3>Hot Shot Trucking</h3>
          <p>Specialized hot shot services for wide or oversized loads with pickup trucks and trailers. Local, regional, or national deliveries available.</p>
          <a href="#" class="learn-more">Learn More →</a>
        </div>
        
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="stats">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <h3>#1</h3>
          <p>Logistics Company</p>
        </div>
        
        <div class="stat-item">
          <h3>5/5</h3>
          <p>Customer Rating</p>
        </div>
        <div class="stat-item">
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="why-choose" id="about">
    <div class="container">
      <div class="section-header">
        <h2>Why Businesses Rely on Hot Shot Trucking</h2>
        <p>Discover the advantages of expedited freight solutions that keep your business moving</p>
      </div>
      <div class="features-grid">
        <div class="feature">
          <div class="feature-icon">⚡</div>
          <h3>Speed &amp; Expedited Delivery</h3>
          <p>Same-day and next-day delivery options with vehicles dispatched immediately, driving straight to destination without delays.</p>
        </div>
        <div class="feature">
          <div class="feature-icon">🎯</div>
          <h3>Direct Door-to-Door Service</h3>
          <p>Exclusive-use trucking that avoids hubs and terminals, reducing handling and ensuring faster, more predictable transit times.</p>
        </div>
        
        <div class="feature">
          <div class="feature-icon">💰</div>
          <h3>Cost-Effective vs Air Freight</h3>
          <p>More affordable than air freight for regional or cross-country loads while maintaining the speed your business demands.</p>
        </div>
        <div class="feature">
          <div class="feature-icon">🕐</div>
          <h3>24/7 Availability</h3>
          <p>Round-the-clock dispatch including weekends and holidays, ensuring access to transportation whenever emergencies occur.</p>
        </div>
        <div class="feature">
          <div class="feature-icon">📍</div>
          <h3>Remote Location Access</h3>
          <p>Reach locations that semi-trailers cannot access, such as construction sites, oilfields, and urban loading zones.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section" id="quote">
    <div class="container">
      <h2>Get Your Free Quote Today</h2>
      <p>Fill out the form below and we'll get back to you within 2 business hours with a custom quote for your expedited freight needs.</p>
      
      <!-- Embedded Microsoft Form -->
      <div class="form-container" style="">
        <iframe src="https://forms.office.com/Pages/ResponsePage.aspx?id=YOUR_FORM_ID&amp;embed=true" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width: 100%; max-height: 100vh;" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" msallowfullscreen="">
        </iframe>
        
        <!-- Fallback for users who can't see the embedded form -->
        <div class="form-fallback">
          <p>Can't see the form? <a href="https://forms.office.com/r/YOUR_FORM_ID" target="_blank" class="btn-primary" style="display: inline-block; margin-top: 10px;">Open in New Window</a></p>
        </div>
      </div>
      
      <!-- Alternative Contact Methods -->
      <div class="contact-alternatives">
        <h3>Prefer to Talk? Call Us Now</h3>
        <div class="hero-buttons">
          <a href="tel:+1-800-555-0123" class="btn-secondary">Call (800) 555-0123</a>
          <a href="mailto:quotes@quinnsconveyance.com" class="btn-secondary">Email Us</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Quinn's Conveyance</h3>
          <p>Your trusted partner for expedited freight and hot shot trucking services across North America.</p>
        </div>
        <div class="footer-section">
          <h3>Services</h3>
          <p><a href="#">Hot Shot Trucking</a></p>
          <p><a href="#">Expedited Freight</a></p>
          <p><a href="#">Flatbed Services</a></p>
          <p><a href="#">Sprinter Vans</a></p>
        </div>
        <div class="footer-section">
          <h3>Industries</h3>
          <p><a href="#">Oil &amp; Gas</a></p>
          <p><a href="#">Construction</a></p>
          <p><a href="#">Manufacturing</a></p>
          <p><a href="#">Automotive</a></p>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <p>Phone: (800) 555-0123</p>
          <p>Email: info@quinnsconveyance.com</p>
          <p>Available 24/7/365</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Quinn's Conveyance. All rights reserved.</p>
      </div>
    </div>
  </footer>
`

// Add your JavaScript functionality here
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add scroll effect to header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.background = '#ffffff';
      header.style.backdropFilter = 'none';
    }
  });
});