document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Billing toggle
  const billingToggle = document.getElementById('billing-toggle');
  const priceElements = document.querySelectorAll('.price');
  
  if (billingToggle && priceElements) {
    let monthly = true;
    
    // Store original prices
    const originalPrices = Array.from(priceElements).map(el => {
      return parseFloat(el.textContent.replace(/[^\d.-]/g, ''));
    });
    
    billingToggle.addEventListener('click', function() {
      monthly = !monthly;
      
      // Update button text
      billingToggle.textContent = monthly ? 'monthly' : 'yearly';
      
      // Update prices with discount for yearly
      priceElements.forEach((el, i) => {
        const price = originalPrices[i];
        el.textContent = monthly ? `$${price}` : `$${Math.round(price * 0.9)}`;
      });
    });
  }
});
