const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // se quiser sumir ao subir
      }
    });
  }, {
    threshold: 0.2
  });

  reveals.forEach(el => observer.observe(el));