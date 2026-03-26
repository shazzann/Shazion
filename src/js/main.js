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

function showToast(message, isError = false) {
    const toast = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');

    if (!toast) return;

    // Reset variable classes
    toast.className = 'fixed bottom-10 right-4 md:right-10 z-[120] transform transition-all duration-500 translate-y-20 opacity-0 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border pointer-events-none';

    if (isError) {
        toast.classList.add('bg-red-500/20', 'border-red-500/30', 'text-red-200');
        toastIcon.textContent = 'error';
        toastIcon.className = 'material-symbols-outlined text-[20px] text-red-400';
    } else {
        toast.classList.add('bg-primary/20', 'border-primary/30', 'text-slate-200');
        toastIcon.textContent = 'check_circle';
        toastIcon.className = 'material-symbols-outlined text-[20px] text-primary';
    }

    toastMessage.textContent = message;

    // Animate in
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-20', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');
    });

    // Animate out after delay
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 4000);
}

function initFormHandling() {
    const form = document.querySelector('form');
    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-70');

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showToast('Vision brief received. We will contact you shortly.');
                form.reset();
            } else {
                showToast('Problem submitting form. Please try again.', true);
            }
        })
        .catch(error => {
            showToast('Error sending message. Please try again later.', true);
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-70');
        });
    });
}

function initProjectModal() {
    const modal = document.getElementById('project-modal');
    const modalContent = modal.querySelector('.modal-content-container');
    const closeBtn = modal.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    if (!modal || !projectCards.length) return;

    const projectsData = {
        'colombo': {
            title: 'Colombo Cosmetics OMS',
            category: 'Commerce Ops',
            description: 'Mobile-first progressive web app for Colombo Cosmetics to manage orders, shipping, receipts, and business reporting with a polished luxury UI.',
            link: 'https://shazzann.github.io/CC-portfolio/',
            images: [
                '/ColomboCosmetics/cover.png',
                '/ColomboCosmetics/dashboard.png',
                '/ColomboCosmetics/allorders.png',
                '/ColomboCosmetics/order.png',
                '/ColomboCosmetics/reports.png'
            ],
            tech: ['React', 'PWA', 'Tailwind CSS', 'Node.js', 'Analytics']
        },
        
        'colour house': {
            title: 'Colour House',
            category: 'E-Commerce',
            link: 'https://colourhouse.lk/',
            description: 'A vibrant e-commerce platform built for Colour House, featuring a modern shopping experience, product catalog, and comprehensive admin dashboard.',
            images: [
                '/colourhouse/landing.png',
                '/colourhouse/products.png',
                '/colourhouse/latest.png',
                '/colourhouse/contact.png',
                '/colourhouse/admindashboard.png'
            ],
            tech: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL']
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
                  <img src="${img}" alt="${data.title}" class="cursor-pointer hover:opacity-90 transition-opacity">
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
                        <a href="${data.link || '#'}" target="_blank" rel="noopener noreferrer" class="glass-button w-full sm:w-fit px-10 py-4 rounded-full text-xs font-bold text-white flex items-center justify-center gap-3 uppercase tracking-widest">
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
            
            setupImageExpansionEvents(modal);
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

function setupImageExpansionEvents(modal) {
    const images = modal.querySelectorAll('.slide img');
    const expansionModal = document.getElementById('image-expansion-modal');
    const expandedImage = document.getElementById('expanded-image');
    const closeExpansionBtn = expansionModal.querySelector('.close-expansion');

    if (!expansionModal || !expandedImage) return;

    images.forEach(img => {
        img.addEventListener('click', () => {
            expandedImage.src = img.src;
            expandedImage.alt = img.alt;
            
            expansionModal.classList.remove('hidden');
            // Small delay to allow display flex to apply before opacity transition
            setTimeout(() => {
                expansionModal.classList.remove('opacity-0');
                expandedImage.classList.remove('scale-95');
                expandedImage.classList.add('scale-100');
            }, 10);
        });
    });

    const closeExpansion = () => {
        expansionModal.classList.add('opacity-0');
        expandedImage.classList.remove('scale-100');
        expandedImage.classList.add('scale-95');
        
        // Wait for transition before hiding
        setTimeout(() => {
            expansionModal.classList.add('hidden');
            expandedImage.src = ''; // Clear source so old image doesn't flash next time
        }, 300);
    };

    closeExpansionBtn.addEventListener('click', closeExpansion);
    
    // Close when clicking the backdrop, but not the image itself
    expansionModal.addEventListener('click', (e) => {
        if (e.target === expansionModal) {
            closeExpansion();
        }
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
