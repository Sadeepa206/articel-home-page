  // Theme Toggle Functionality
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  
  // Force dark theme as default
  body.setAttribute('data-theme', 'dark');
  themeToggle.textContent = '☀️ Toggle Theme';
  localStorage.setItem('theme', 'dark');

  themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      themeToggle.textContent = newTheme === 'dark' ? '☀️ Toggle Theme' : '🌙 Toggle Theme';
      
      // Add a subtle animation to the toggle button
      themeToggle.style.transform = 'scale(1.1)';
      setTimeout(() => {
          themeToggle.style.transform = 'scale(1)';
      }, 200);
  });

  // Mobile Menu Functionality
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
          navLinks.classList.remove('active');
          menuToggle.textContent = '☰';
      }
  });

  // Button click animations
  document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('click', function() {
          this.style.transform = 'scale(0.95)';
          setTimeout(() => {
              this.style.transform = 'translateY(-3px)';
          }, 200);
      });
  });