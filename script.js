// JavaScript for interactive features

// Display an alert when a navigation link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      alert(`You clicked on: ${link.textContent}`);
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Toggle theme button
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Theme';
  toggleButton.style.position = 'fixed';
  toggleButton.style.bottom = '10px';
  toggleButton.style.right = '10px';
  document.body.appendChild(toggleButton);
  
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
  