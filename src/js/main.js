/* Shazion Portfolio - Interactivity */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollAnimations();
    initFormHandling();
    initSmoothScroll();
    initProjectModal();
});

function initMobileMenu() {
    const menuBtn = document.querySelector('nav button');
    const navContainer = document.querySelector('nav .max-w-7xl');

    if (!menuBtn) return;

    menuBtn.addEventListener('click', () => {
        // Basic mobile menu toggle logic
        console.log('Mobile menu toggled');
        // We'll expand this with a proper overlay if needed
    });
}

function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

function initFormHandling() {
    const form = document.querySelector('form');
    if (!form) return;

    const submitBtn = form.querySelector('button[type="button"]');

    submitBtn.addEventListener('click', () => {
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('border-red-500');
            } else {
                input.classList.remove('border-red-500');
            }
        });

        if (isValid) {
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Connection Initiated...';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-70');

            setTimeout(() => {
                alert('Thank you! Your vision brief has been received. Our concierge will contact you shortly.');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-70');
            }, 2000);
        }
    });
}

function initProjectModal() {
    const modal = document.getElementById('project-modal');
    const modalContent = modal.querySelector('.modal-content-container');
    const closeBtn = modal.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    if (!modal || !projectCards.length) return;

    const projectsData = {
        'nexus': {
            title: 'Nexus Finance Dashboard',
            category: 'Fintech Elite',
            description: 'A sophisticated liquidity portal for institutional investors. This project involved building a high-performance dashboard with real-time data visualization, deep liquidity aggregation, and institutional-grade security protocols.',
            images: [
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBrMl8oMqxOLH-T5JE-SUdtS1b9Ha-bmBcOsDjcljwROJAgl4IwtXIpUd40DsG3OgAJTdQBWSsj-qV5fNwY_TA3HPCRrYOLeykDUBnFGdkRGnZw9zYdD9P07instNSh8Eg89wOSz_ldPC3BdTKuNKPKb22sHUZ5e3eViX8DFZBlroebgI4BQ30Nqc98rCYZGumnuAkB2EAZZ51Y0_kD_HbTYuMowDd3nB4js26Ut8q-OIan21lOkYHyyWCgnoYkzYaSVjoLs3zLW3Tr',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAyNAwQHjMWx1y_kp0dRR6a3__bHKVqVoh5ivopPunWAEk-XazlaurdW_R5nwIxL4BY1Kxh1jht3yYXOHcbrZk5CspUhJ8uakwx7XBqXwh0npsVfi9NQRjjV1rh6PNLTPNhXqw9oQPW7GegpvRaQ6aPwGIXnz-25gbg6PAvapl7GHyqnu15Y3iPSQJ6Nv3bWzeg1UduTw3d2dqc76wR50Z2e-Q0o9STPB27mW5tanhwRzF8CS7mVpMri7oUnrs4hUdK82jPiA9_6EC',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBPRMjsQzwnWettjN2_oTSbK0TILAc62LZqVUtkwYsHw0vT_WyJxKXZZSKac9C0oEghp86dtAovvUkNGVAseNZLPPUjbxy7KAPKJq1jHJ-ptK6LMpFTI4Me7cMVgaqiBeFehTDCPIhdEOy4jim_aR-TvgdcowEZpXds3CMojvsevy3rxk9RBJZkMlpEVHI6c2IUxbKwMrZyQ8d4rBLmiOg23wRGnIz6EgM3kGLzgnKRW7gZb5VWu5TIUmnXnyPfDqWcTErZJ_fBmoqv'
            ],
            tech: ['React', 'D3.js', 'Node.js', 'WebSockets', 'AWS']
        },
        'luxe': {
            title: 'Luxe Fashion',
            category: 'E-Commerce',
            description: 'A premium e-commerce experience for a high-end fashion brand. Focus on liquid animations, high-resolution media handling, and a seamless checkout experience that mirrors the luxury of the physical boutiques.',
            images: [
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAyNAwQHjMWx1y_kp0dRR6a3__bHKVqVoh5ivopPunWAEk-XazlaurdW_R5nwIxL4BY1Kxh1jht3yYXOHcbrZk5CspUhJ8uakwx7XBqXwh0npsVfi9NQRjjV1rh6PNLTPNhXqw9oQPW7GegpvRaQ6aPwGIXnz-25gbg6PAvapl7GHyqnu15Y3iPSQJ6Nv3bWzeg1UduTw3d2dqc76wR50Z2e-Q0o9STPB27mW5tanhwRzF8CS7mVpMri7oUnrs4hUdK82jPiA9_6EC',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBrMl8oMqxOLH-T5JE-SUdtS1b9Ha-bmBcOsDjcljwROJAgl4IwtXIpUd40DsG3OgAJTdQBWSsj-qV5fNwY_TA3HPCRrYOLeykDUBnFGdkRGnZw9zYdD9P07instNSh8Eg89wOSz_ldPC3BdTKuNKPKb22sHUZ5e3eViX8DFZBlroebgI4BQ30Nqc98rCYZGumnuAkB2EAZZ51Y0_kD_HbTYuMowDd3nB4js26Ut8q-OIan21lOkYHyyWCgnoYkzYaSVjoLs3zLW3Tr'
            ],
            tech: ['Next.js', 'Shopify Plus', 'GSAP', 'Tailwind CSS']
        },
        'medicore': {
            title: 'MediCore Analytics',
            category: 'HealthTech',
            description: 'An advanced health data analytics platform designed for healthcare providers. We focused on secure data processing, intuitive patient monitoring interfaces, and AI-driven diagnostic insights.',
            images: [
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBPRMjsQzwnWettjN2_oTSbK0TILAc62LZqVUtkwYsHw0vT_WyJxKXZZSKac9C0oEghp86dtAovvUkNGVAseNZLPPUjbxy7KAPKJq1jHJ-ptK6LMpFTI4Me7cMVgaqiBeFehTDCPIhdEOy4jim_aR-TvgdcowEZpXds3CMojvsevy3rxk9RBJZkMlpEVHI6c2IUxbKwMrZyQ8d4rBLmiOg23wRGnIz6EgM3kGLzgnKRW7gZb5VWu5TIUmnXnyPfDqWcTErZJ_fBmoqv',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBrMl8oMqxOLH-T5JE-SUdtS1b9Ha-bmBcOsDjcljwROJAgl4IwtXIpUd40DsG3OgAJTdQBWSsj-qV5fNwY_TA3HPCRrYOLeykDUBnFGdkRGnZw9zYdD9P07instNSh8Eg89wOSz_ldPC3BdTKuNKPKb22sHUZ5e3eViX8DFZBlroebgI4BQ30Nqc98rCYZGumnuAkB2EAZZ51Y0_kD_HbTYuMowDd3nB4js26Ut8q-OIan21lOkYHyyWCgnoYkzYaSVjoLs3zLW3Tr'
            ],
            tech: ['Python', 'TensorFlow', 'React', 'Elasticsearch', 'HIPAA compliant cloud']
        }
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const data = projectsData[projectId];
            if (!data) return;

            modalContent.innerHTML = `
        <div class="grid lg:grid-cols-2 gap-12">
          <div class="slider-container">
            <div class="slider-track" id="modal-slider-track">
              ${data.images.map(img => `
                <div class="slide">
                  <img src="${img}" alt="${data.title}">
                </div>
              `).join('')}
            </div>
            ${data.images.length > 1 ? `
              <div class="slider-nav">
                <button class="slider-btn prev-btn"><span class="material-symbols-outlined">chevron_left</span></button>
                <button class="slider-btn next-btn"><span class="material-symbols-outlined">chevron_right</span></button>
              </div>
              <div class="slider-dots">
                ${data.images.map((_, i) => `<div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`).join('')}
              </div>
            ` : ''}
          </div>
          <div class="flex flex-col justify-center">
            <span class="text-primary font-bold tracking-widest text-[10px] uppercase mb-2">${data.category}</span>
            <h3 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">${data.title}</h3>
            <p class="text-slate-400 leading-relaxed mb-8 text-lg font-light">${data.description}</p>
            <div class="mb-10">
              <h4 class="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-4 opacity-50">Core Technologies</h4>
              <div class="flex flex-wrap gap-3">
                ${data.tech.map(t => `<span class="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">${t}</span>`).join('')}
              </div>
            </div>
            <a href="#" class="glass-button w-full sm:w-fit px-10 py-4 rounded-full text-xs font-bold text-white flex items-center justify-center gap-3 uppercase tracking-widest">
              Live Preview <span class="material-symbols-outlined text-[16px]">north_east</span>
            </a>
          </div>
        </div>
      `;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            if (data.images.length > 1) {
                setupSliderEvents(modal);
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function setupSliderEvents(modal) {
    const track = modal.querySelector('#modal-slider-track');
    const slides = Array.from(track.children);
    const nextBtn = modal.querySelector('.next-btn');
    const prevBtn = modal.querySelector('.prev-btn');
    const dots = modal.querySelectorAll('.dot');
    let currentIndex = 0;

    const updateSlider = (index) => {
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    };

    nextBtn.addEventListener('click', () => {
        updateSlider((currentIndex + 1) % slides.length);
    });

    prevBtn.addEventListener('click', () => {
        updateSlider((currentIndex - 1 + slides.length) % slides.length);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            updateSlider(index);
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}
