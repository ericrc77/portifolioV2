// scripts.js - Portfólio Eric Campos
// Código otimizado e refinado

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Utilitários
    const isMobile = () => /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    const $ = selector => document.querySelectorAll(selector);
    
    // === ANIMAÇÕES MOBILE ===
    if (isMobile()) {
        // Touch effects para seções
        $('.card__section, .about__section, section').forEach(el => {
            el.addEventListener('touchstart', () => {
                el.style.cssText = 'transition: transform 0.18s, box-shadow 0.18s; transform: scale(1.03); box-shadow: 0 8px 32px 0 #22D4FD33;';
            });
            el.addEventListener('touchend', () => {
                el.style.cssText = '';
            });
        });

        // Foto de perfil touch effect
        const foto = document.querySelector('.home__foto, .about__foto');
        if (foto) {
            foto.addEventListener('touchstart', () => {
                foto.style.cssText = 'transition: transform 0.18s, box-shadow 0.18s; transform: scale(1.10) rotate(-2deg); box-shadow: 0 0 32px 8px #22D4FD88;';
            });
            foto.addEventListener('touchend', () => {
                foto.style.cssText = '';
            });
        }

        // Links sociais touch effect
        $('.home__links__icon, .apresentacao__links__link_imagem').forEach(img => {
            img.addEventListener('touchstart', () => {
                img.style.cssText = 'filter: drop-shadow(0 0 12px #22D4FD); transform: scale(1.18);';
            });
            img.addEventListener('touchend', () => {
                img.style.cssText = '';
            });
        });
    }

    // === SISTEMA DE PARTÍCULAS ===
    function createParticles() {
        const colors = ['#22D4FD', '#fff', '#25D366', '#181c2a'];
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: fixed; z-index: 0; pointer-events: none;
                top: ${Math.random() * 100}vh; left: ${Math.random() * 100}vw;
                width: ${Math.random() * 6 + 3}px; height: ${Math.random() * 6 + 3}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                opacity: ${0.15 + Math.random() * 0.2}; border-radius: 50%;
            `;
            fragment.appendChild(particle);
            animateParticle(particle);
        }
        document.body.appendChild(fragment);
    }

    function animateParticle(particle) {
        const speed = 0.15 + Math.random() * 0.25;
        const dx = (Math.random() - 0.5) * speed;
        const dy = (Math.random() - 0.5) * speed;
        let top = parseFloat(particle.style.top);
        let left = parseFloat(particle.style.left);
        function step() {
            top += dy;
            left += dx;
            if (top > 100) top = -5;
            if (top < -5) top = 100;
            if (left > 100) left = -5;
            if (left < -5) left = 100;
            particle.style.transform = `translate(${left}vw, ${top}vh)`;
            requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // === HOVER EFFECTS ===
    const hoverEffects = {
        titles: {
            selector: 'h1, h2, h3',
            enter: el => el.style.cssText = 'transition: transform 0.3s; transform: rotate(-1deg) scale(1.05);',
            leave: el => el.style.transform = ''
        },
        
        cards: {
            selector: '.card__section, .about__section, .skill__card, .competencia__item, .certificacao__item',
            enter: el => el.style.cssText = 'transition: all 0.3s; box-shadow: 0 8px 32px 0 #22D4FD33; transform: translateY(-4px);',
            leave: el => el.style.cssText = ''
        },
        
        socialIcons: {
            selector: '.home__links__icon, .apresentacao__links__link_imagem',
            enter: el => el.style.cssText = 'filter: drop-shadow(0 0 8px #22D4FD); transform: scale(1.1); transition: all 0.3s;',
            leave: el => el.style.cssText = ''
        },
        
        menuLinks: {
            selector: '.cabecalho__menu__link',
            enter: el => el.style.cssText = 'color: #22D4FD; text-shadow: 0 2px 12px #22D4FD55; transition: all 0.3s;',
            leave: el => el.style.cssText = ''
        }
    };

    // Aplicar hover effects
    Object.values(hoverEffects).forEach(effect => {
        $(effect.selector).forEach(el => {
            el.addEventListener('mouseenter', () => effect.enter(el));
            el.addEventListener('mouseleave', () => effect.leave(el));
        });
    });

    // === EFEITOS ESPECIAIS ===
    
    // Foto de perfil hover
    const profilePhoto = document.querySelector('.home__foto, .about__foto');
    if (profilePhoto) {
        profilePhoto.addEventListener('mouseenter', () => {
            profilePhoto.style.cssText = 'box-shadow: 0 0 32px 8px #22D4FD88; transform: scale(1.06) rotate(-2deg); transition: all 0.4s;';
        });
        profilePhoto.addEventListener('mouseleave', () => {
            profilePhoto.style.cssText = '';
        });
    }

    // WhatsApp pulse effect
    const whatsappIcon = document.querySelector('img[alt*="WhatsApp"]');
    if (whatsappIcon) {
        whatsappIcon.addEventListener('mouseenter', () => {
            whatsappIcon.style.cssText = 'box-shadow: 0 0 16px 4px #25D36699; transform: scale(1.1); transition: all 0.4s;';
        });
        whatsappIcon.addEventListener('mouseleave', () => {
            whatsappIcon.style.cssText = '';
        });
        
        // Auto pulse
        setInterval(() => {
            whatsappIcon.style.transform = 'scale(1.08)';
            setTimeout(() => whatsappIcon.style.transform = '', 300);
        }, 4000);
    }

    // === ANIMAÇÕES DE ENTRADA ===
    
    // Fade-in sequencial
    $('section, .about__section, .card__section').forEach((el, i) => {
        el.style.cssText = 'opacity: 0; transform: translateY(30px);';
        setTimeout(() => {
            el.style.cssText = 'transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); opacity: 1; transform: translateY(0);';
        }, 100 + i * 150);
    });

    // Typing effect para título principal
    const mainTitle = document.querySelector('.home__titulo');
    if (mainTitle && !mainTitle.dataset.typed) {
        const originalText = mainTitle.textContent;
        mainTitle.textContent = '';
        mainTitle.dataset.typed = 'true';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < originalText.length) {
                mainTitle.textContent += originalText[i];
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }

    // === SCROLL SUAVE ===
    $('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // === FOCUS EFFECTS ===
    $('input, textarea').forEach(input => {
        input.addEventListener('focus', () => {
            input.style.cssText = 'box-shadow: 0 0 12px #22D4FD77; border-color: #22D4FD; transition: all 0.3s;';
        });
        input.addEventListener('blur', () => {
            input.style.cssText = '';
        });
    });

    // === INICIALIZAÇÃO ===
    
    // Performance: só criar partículas se não for dispositivo muito limitado ou se usuário não prefere reduzir movimento
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion && !navigator.connection?.effectiveType?.includes('2g')) {
        createParticles();
    } else if (reduceMotion) {
        document.documentElement.classList.add('reduce-motion');
    }

    // Toggle manual de partículas (acessibilidade/performance)
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Alternar efeitos';
    toggleBtn.setAttribute('aria-pressed', 'true');
    toggleBtn.style.cssText = 'position:fixed;bottom:16px;right:16px;background:#181c2a;color:#22D4FD;border:1px solid #22D4FD;padding:8px 14px;border-radius:8px;font-family:inherit;cursor:pointer;font-size:0.8rem;z-index:500;box-shadow:0 4px 12px rgba(0,0,0,0.4);';
    toggleBtn.addEventListener('click', () => {
        const active = toggleBtn.getAttribute('aria-pressed') === 'true';
        toggleBtn.setAttribute('aria-pressed', String(!active));
        if (active) {
            document.querySelectorAll('.particle').forEach(p => p.remove());
            toggleBtn.textContent = 'Ativar efeitos';
        } else {
            createParticles();
            toggleBtn.textContent = 'Desativar efeitos';
        }
    });
    document.body.appendChild(toggleBtn);

    // Preload de imagens críticas
    const criticalImages = ['assets/perfil.jpeg', 'assets/github.png', 'assets/whatsapp.jpg', 'assets/instagram.png'];
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Verificação de fallback para foto de perfil caso não carregue no mobile
    function ensureProfilePhoto() {
        document.querySelectorAll('.home__foto, .about__foto, .curriculo__foto').forEach(img => {
            if (!img.complete || img.naturalWidth === 0) {
                const candidates = [
                    'assets/perfil.jpeg',
                    './assets/perfil.jpeg',
                    '/assets/perfil.jpeg',
                    'perfil.jpeg'
                ];
                for (const c of candidates) {
                    img.src = c;
                    if (img.complete && img.naturalWidth > 0) break;
                }
            }
        });
    }
    setTimeout(ensureProfilePhoto, 500);
    window.addEventListener('load', ensureProfilePhoto);

    console.log('🚀 Portfólio Eric Campos carregado com sucesso!');
});
