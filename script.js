/* ===================================
   THE PREMIERE - JAVASCRIPT
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    initMusic();
    initSplash();
    initHeader();
    initScrollAnimations();
    initRSVPForm();
    initCopyButtons();
    initWishes();
    initFAB();
    initTrailer();
});

/* ===================================
   SPLASH SCREEN
   =================================== */

let bgMusic;

function initMusic() {
    bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
        bgMusic.volume = 0.4;
        bgMusic.play().catch(() => {});
    }
}

function initSplash() {
    const splash = document.getElementById('splash');
    const openBtn = document.getElementById('openBtn');
    const logoGif = document.getElementById('logoGif');

    if (!splash || !openBtn) return;

    // Get guest name from URL params (e.g., ?to=Nama+Tamu)
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    const nameEl = document.getElementById('guestName');

    if (guestName && nameEl) {
        nameEl.textContent = decodeURIComponent(guestName);
    }

    openBtn.addEventListener('click', () => {
        // Auto-play music on user gesture (Open Invitation click)
        if (bgMusic) {
            bgMusic.volume = 0.4;
            bgMusic.play().catch(() => {});
        }

        // Show logo GIF overlay
        if (logoGif) {
            logoGif.classList.add('active');

            // After GIF animation, hide splash and show main content
            setTimeout(() => {
                splash.style.transition = 'opacity 0.6s';
                splash.style.opacity = '0';
                splash.style.pointerEvents = 'none';

                setTimeout(() => {
                    document.body.classList.add('splash-done');
                    logoGif.classList.remove('active');
                    splash.style.display = 'none';

                    // Re-init animations for main content
                    initScrollAnimations();
                }, 600);
            }, 2500); // GIF duration ~2.5s
        } else {
            // Fallback: directly dismiss
            splash.style.transition = 'opacity 0.6s';
            splash.style.opacity = '0';
            setTimeout(() => {
                document.body.classList.add('splash-done');
                splash.style.display = 'none';
                initScrollAnimations();
            }, 600);
        }
    });

    // Allow clicking user image to edit name (optional)
    const userImg = document.querySelector('.splash-user-img');
    if (userImg) {
        userImg.addEventListener('click', () => {
            const newName = prompt('Masukkan nama Anda:', nameEl.textContent);
            if (newName && newName.trim()) {
                nameEl.textContent = newName.trim();
            }
        });
    }
}

/* ===================================
   HEADER SCROLL BEHAVIOR
   =================================== */

function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 80) {
                    header.style.background = 'rgba(0,0,0,0.97)';
                    header.style.backdropFilter = 'blur(12px)';
                } else {
                    header.style.background = '';
                    header.style.backdropFilter = '';
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ===================================
   SCROLL ANIMATIONS
   =================================== */

function initScrollAnimations() {
    const sections = document.querySelectorAll('.animate-on-scroll');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
    });

    sections.forEach(el => observer.observe(el));
}

/* ===================================
   RSVP FORM
   =================================== */

function initRSVPForm() {
    const form = document.getElementById('rsvpForm');
    const btns = document.querySelectorAll('.rsvp-btn');
    if (!form || !btns.length) return;

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]');
        const guests = form.querySelector('input[type="number"]');
        const submitBtn = form.querySelector('button[type="submit"]');
        const selected = form.querySelector('.rsvp-btn.selected');

        if (!name.value.trim()) {
            shakeEl(name);
            name.focus();
            return;
        }

        if (!selected) {
            shakeEl(btns[0]);
            return;
        }

        // Success
        submitBtn.textContent = 'TERKIRIM ✓';
        submitBtn.style.background = '#46d369';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = 'KIRIM KONFIRMASI';
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            form.reset();
            btns.forEach(b => b.classList.remove('selected'));
        }, 3000);
    });
}

/* ===================================
   COPY BUTTON
   =================================== */

function initCopyButtons() {
    const copyBtns = document.querySelectorAll('.copy-btn');
    if (!copyBtns.length) return;

    copyBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            const text = btn.dataset.copy;
            if (!text) return;

            try {
                await navigator.clipboard.writeText(text);
            } catch {
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.style.cssText = 'position:fixed;opacity:0';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            }

            const orig = btn.textContent;
            btn.textContent = 'TERSALIN!';
            btn.classList.add('copied');

            setTimeout(() => {
                btn.textContent = orig;
                btn.classList.remove('copied');
            }, 2000);
        });
    });
}

/* ===================================
   WISHES SYSTEM
   =================================== */

function initWishes() {
    const input = document.getElementById('wishInput');
    const sendBtn = document.getElementById('sendWish');
    const list = document.getElementById('wishesList');
    if (!input || !sendBtn || !list) return;

    const colors = ['#e50914', '#2a2a2a', '#1a1a1a', '#3a3a3a'];

    function addWish(text) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const html = `
            <div class="wish-item">
                <div class="wish-avatar" style="background:${color}">TU</div>
                <div class="wish-body">
                    <div class="wish-header">
                        <span class="wish-name">Tamu Undangan</span>
                        <span class="wish-time">Baru saja</span>
                    </div>
                    <p class="wish-text">${text}</p>
                </div>
            </div>
        `;
        list.insertAdjacentHTML('afterbegin', html);
    }

    function send() {
        const text = input.value.trim();
        if (!text) {
            shakeEl(input);
            input.focus();
            return;
        }
        addWish(text);
        input.value = '';
    }

    sendBtn.addEventListener('click', send);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') send();
    });
}

/* ===================================
   FLOATING ACTION BUTTONS
   =================================== */

function initFAB() {
    const soundBtn = document.getElementById('soundBtn');
    const soundIcon = document.getElementById('soundIcon');
    if (!soundBtn) return;

    soundBtn.addEventListener('click', () => {
        if (!bgMusic) return;
        if (bgMusic.paused) {
            bgMusic.play().catch(() => {});
            if (soundIcon) soundIcon.textContent = 'volume_up';
        } else {
            bgMusic.pause();
            if (soundIcon) soundIcon.textContent = 'volume_off';
        }
    });

    const galleryBtn = document.querySelector('[aria-label="Gallery"]');
    if (galleryBtn) {
        galleryBtn.addEventListener('click', () => {
            const mem = document.getElementById('memories');
            if (mem) mem.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

/* ===================================
   TRAILER INTERACTION
   =================================== */

function initTrailer() {
    const trailer = document.querySelector('.trailer-card');
    if (!trailer) return;

    trailer.addEventListener('click', () => {
        const playBtn = trailer.querySelector('.trailer-play-btn');
        if (playBtn) {
            playBtn.style.animation = 'none';
            playBtn.offsetHeight;
            playBtn.style.animation = 'pulseGlow 0.4s ease forwards';
        }
    });
}

/* ===================================
   UTILITY: SHAKE
   =================================== */

function shakeEl(el) {
    if (!el) return;
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = 'shake 0.4s ease';
}

/* ===================================
   TOUCH DEVICE
   =================================== */

if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.body.classList.add('touch-device');
}
