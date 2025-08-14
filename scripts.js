// scripts.js
// Animações e interatividade para o portfólio Eric Campos

document.addEventListener('DOMContentLoaded', function () {
    // === Animações e interações específicas para mobile ===
    function isMobile() {
        return window.innerWidth <= 700 || /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    }

    if (isMobile()) {
        // Cards e seções "pulam" levemente ao tocar
        document.querySelectorAll('.card__section, .about__section, section').forEach(function (el) {
            el.addEventListener('touchstart', function () {
                el.style.transition = 'transform 0.18s, box-shadow 0.18s';
                el.style.transform = 'scale(1.03)';
                el.style.boxShadow = '0 8px 32px 0 #22D4FD33';
            });
            el.addEventListener('touchend', function () {
                el.style.transform = '';
                el.style.boxShadow = '';
            });
        });

        // Foto de perfil "pula" ao tocar
        var foto = document.querySelector('.home__foto');
        if (foto) {
            foto.addEventListener('touchstart', function () {
                foto.style.transition = 'transform 0.18s, box-shadow 0.18s';
                foto.style.transform = 'scale(1.10) rotate(-2deg)';
                foto.style.boxShadow = '0 0 32px 8px #22D4FD88';
            });
            foto.addEventListener('touchend', function () {
                foto.style.transform = '';
                foto.style.boxShadow = '';
            });
        }

        // Links sociais "piscam" ao tocar
        document.querySelectorAll('.apresentacao__links__link_imagem, .home__links__link img').forEach(function (img) {
            img.addEventListener('touchstart', function () {
                img.style.filter = 'drop-shadow(0 0 12px #22D4FD)';
                img.style.transform = 'scale(1.18)';
            });
            img.addEventListener('touchend', function () {
                img.style.filter = '';
                img.style.transform = '';
            });
        });

        // WhatsApp "pulsando" ao tocar
        var whatsapp = document.querySelector('img[alt*="WhatsApp"]');
        if (whatsapp) {
            whatsapp.addEventListener('touchstart', function () {
                whatsapp.style.transform = 'scale(1.18)';
                whatsapp.style.boxShadow = '0 0 16px 4px #25D36699';
            });
            whatsapp.addEventListener('touchend', function () {
                whatsapp.style.transform = '';
                whatsapp.style.boxShadow = '';
            });
        }

        // Menu: destaque ao tocar
        document.querySelectorAll('.cabecalho__menu__link').forEach(function (link) {
            link.addEventListener('touchstart', function () {
                link.style.background = '#22D4FD22';
                link.style.color = '#22D4FD';
            });
            link.addEventListener('touchend', function () {
                link.style.background = '';
                link.style.color = '';
            });
        });
    }
    // Animação de partículas de fundo (leve, apenas visual)
    function criarParticulas() {
        const colors = ['#22D4FD', '#fff', '#25D366', '#181c2a'];
        for (let i = 0; i < 22; i++) {
            let p = document.createElement('div');
            p.className = 'particle';
            p.style.position = 'fixed';
            p.style.zIndex = '0';
            p.style.top = Math.random() * 100 + 'vh';
            p.style.left = Math.random() * 100 + 'vw';
            p.style.width = p.style.height = (Math.random() * 8 + 4) + 'px';
            p.style.background = colors[Math.floor(Math.random()* decolors.length)];
            p.style.opacity = 0.18 + Math.random() * 0.22;
            p.style.borderRadius = '50%';
            p.style.pointerEvents = 'none';
            document.body.appendChild(p);
            animarParticula(p);
        }
    }
    function animarParticula(p) {
        let dx = (Math.random() - 0.5) * 0.7;
        let dy = (Math.random() - 0.5) * 0.7;
        setInterval(function () {
            let top = parseFloat(p.style.top);
            let left = parseFloat(p.style.left);
            top += dy;
            left += dx;
            if (top > 100) top = 0;
            if (top < 0) top = 100;
            if (left > 100) left = 0;
            if (left < 0) left = 100;
            p.style.top = top + 'vh';
            p.style.left = left + 'vw';
        }, 60 + Math.random()*60);
    }
    criarParticulas();

    // Efeito de "balanço" nos títulos ao passar o mouse
    document.querySelectorAll('h1, h2, h3').forEach(function (el) {
        el.addEventListener('mouseenter', function () {
            el.style.transition = 'transform 0.3s';
            el.style.transform = 'rotate(-2deg) scale(1.06)';
        });
        el.addEventListener('mouseleave', function () {
            el.style.transform = '';
        });
    });

    // Card animado ao passar mouse (efeito de "levantar")
    document.querySelectorAll('.card__section, .about__section').forEach(function (el) {
        el.addEventListener('mouseenter', function () {
            el.style.transition = 'box-shadow 0.3s, transform 0.3s';
            el.style.boxShadow = '0 8px 32px 0 #22D4FD33';
            el.style.transform = 'translateY(-6px) scale(1.015)';
        });
        el.addEventListener('mouseleave', function () {
            el.style.boxShadow = '';
            el.style.transform = '';
        });
    });

    // Efeito de "rastro" nos links sociais
    document.querySelectorAll('.apresentacao__links__link_imagem, .home__links__link img').forEach(function (img) {
        img.addEventListener('mousemove', function (e) {
            img.style.filter = 'drop-shadow(0 0 8px #22D4FD)';
            img.style.transform = 'scale(1.13)';
        });
        img.addEventListener('mouseleave', function () {
            img.style.filter = '';
            img.style.transform = '';
        });
    });

    // Animação de "borda neon" ao focar em campos de formulário
    document.querySelectorAll('input, textarea').forEach(function (el) {
        el.addEventListener('focus', function () {
            el.style.boxShadow = '0 0 12px #22D4FD, 0 0 2px #fff';
            el.style.borderColor = '#22D4FD';
        });
        el.addEventListener('blur', function () {
            el.style.boxShadow = '';
            el.style.borderColor = '';
        });
    });

    // Efeito de "aparecer letra por letra" em todos os subtítulos
    document.querySelectorAll('.about__subtitulo, .card__subtitulo').forEach(function (el) {
        if (!el.dataset.typed) {
            var texto = el.textContent;
            el.textContent = '';
            el.dataset.typed = 'true';
            let i = 0;
            function digitar() {
                if (i < texto.length) {
                    el.textContent += texto[i];
                    i++;
                    setTimeout(digitar, 32);
                }
            }
            digitar();
        }
    });
    // Fade-in animado para todas as seções
    document.querySelectorAll('section, .about__section, .card__section').forEach(function (el, i) {
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
        setTimeout(function () {
            el.style.transition = 'opacity 0.7s cubic-bezier(.39,.575,.565,1), transform 0.7s cubic-bezier(.39,.575,.565,1)';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 200 + i * 180);
    });

    // Efeito hover nos links do menu
    document.querySelectorAll('.cabecalho__menu__link').forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            link.style.color = '#22D4FD';
            link.style.textShadow = '0 2px 12px #22D4FD55';
        });
        link.addEventListener('mouseleave', function () {
            link.style.color = '';
            link.style.textShadow = '';
        });
    });

    // Animação de destaque na foto de perfil ao passar o mouse
    var foto = document.querySelector('.home__foto');
    if (foto) {
        foto.addEventListener('mouseenter', function () {
            foto.style.boxShadow = '0 0 32px 8px #22D4FD88';
            foto.style.transform = 'scale(1.08) rotate(-2deg)';
            foto.style.transition = 'box-shadow 0.4s, transform 0.4s';
        });
        foto.addEventListener('mouseleave', function () {
            foto.style.boxShadow = '';
            foto.style.transform = '';
        });
    }

    // Botão WhatsApp com efeito pulsante
    var whatsapp = document.querySelector('img[alt*="WhatsApp"]');
    if (whatsapp) {
        whatsapp.style.transition = 'box-shadow 0.4s, transform 0.4s';
        whatsapp.addEventListener('mouseenter', function () {
            whatsapp.style.boxShadow = '0 0 16px 4px #25D36699';
            whatsapp.style.transform = 'scale(1.13)';
        });
        whatsapp.addEventListener('mouseleave', function () {
            whatsapp.style.boxShadow = '';
            whatsapp.style.transform = '';
        });
        // Pulsar automático
        setInterval(function () {
            whatsapp.style.transform = 'scale(1.10)';
            setTimeout(function () {
                whatsapp.style.transform = '';
            }, 400);
        }, 3500);
    }

    // Animação de digitação no título principal (apenas na home)
    var titulo = document.querySelector('.home__titulo');
    if (titulo && !titulo.dataset.typed) {
        var texto = titulo.textContent;
        titulo.textContent = '';
        titulo.dataset.typed = 'true';
        var i = 0;
        function digitar() {
            if (i < texto.length) {
                titulo.textContent += texto[i];
                i++;
                setTimeout(digitar, 55);
            }
        }
        digitar();
    }

    // Scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Efeito de destaque ao focar inputs (se houver)
    document.querySelectorAll('input, textarea').forEach(function (el) {
        el.addEventListener('focus', function () {
            el.style.boxShadow = '0 0 8px #22D4FD77';
            el.style.borderColor = '#22D4FD';
        });
        el.addEventListener('blur', function () {
            el.style.boxShadow = '';
            el.style.borderColor = '';
        });
    });
});
