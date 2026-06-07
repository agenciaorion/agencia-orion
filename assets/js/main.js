// ============================================================
// MAIN.JS — AGÊNCIA ORION
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

  // ----------------------------------------------------------
  // TYPEWRITER — sequência completa desde Inteligência Digital
  // ----------------------------------------------------------
  const fullEl   = document.getElementById("typewriter-full");
  const cursorEl = document.getElementById("typewriter-cursor");
  const labelEl  = document.getElementById("label-inteligencia");
  const subEl    = document.getElementById("hero-sub");
  const btnsEl   = document.getElementById("hero-btns");

  if (fullEl && labelEl) {

    // Segmentos do título com cor
    // formato: { text, purple }
    const segments = [
      { text: "Estratégias que\n",  purple: false },
      { text: "Transformam Marcas", purple: true  },
      { text: "\nem Líderes de Mercado.", purple: false },
    ];

    const chars = [];
    segments.forEach(seg => {
      seg.text.split("").forEach(ch => chars.push({ ch, purple: seg.purple }));
    });

    // Passo 1: "Inteligência Digital" aparece
    setTimeout(() => {
      labelEl.style.opacity = "1";

      // Passo 2: após 600ms começa a digitar o título
      setTimeout(() => {
        let i = 0;

        function type() {
          if (i < chars.length) {
            // Reconstrói o HTML até o índice atual
            let html = "";
            let inPurple = false;
            for (let j = 0; j <= i; j++) {
              const { ch, purple } = chars[j];
              if (purple && !inPurple)       { html += '<span class="text-orion-purple">'; inPurple = true; }
              else if (!purple && inPurple)  { html += "</span>"; inPurple = false; }
              html += ch === "\n" ? "<br>" : ch;
            }
            if (inPurple) html += "</span>";
            fullEl.innerHTML = html;
            i++;
            setTimeout(type, 40);
          } else {
            // Digitou tudo — revela subtítulo e botões
            setTimeout(() => {
              if (cursorEl) cursorEl.style.display = "none";
              if (subEl)  subEl.style.opacity  = "1";
              if (btnsEl) btnsEl.style.opacity = "1";
            }, 400);
          }
        }

        type();
      }, 600);
    }, 300);
  }

  // ----------------------------------------------------------
  // MOUSE HINT — some ao rolar
  // ----------------------------------------------------------
  const mouseHint = document.getElementById("mouse-hint");
  if (mouseHint) {
    window.addEventListener("scroll", () => {
      mouseHint.style.opacity = window.scrollY > 80 ? "0" : "1";
    });
  }

  // ----------------------------------------------------------
  // PLAYER DE VÍDEO
  // ----------------------------------------------------------
  const videoContainer = document.getElementById("video-container");
  const videoOverlay   = document.getElementById("video-overlay");
  const videoPlayer    = document.getElementById("video-player");

  if (videoContainer && videoOverlay && videoPlayer) {
    videoContainer.addEventListener("click", () => {
      const iframe = videoPlayer.querySelector("iframe");
      if (iframe && iframe.dataset.src) iframe.src = iframe.dataset.src;
      videoOverlay.classList.add("hidden");
      videoPlayer.classList.remove("hidden");
    });
  }

  // ----------------------------------------------------------
  // FOGUETE DA SEÇÃO VÍDEO — aparece e sobe ao entrar na seção
  // ----------------------------------------------------------
  const sectionRocket     = document.getElementById("section-rocket");
  const sectionRocketLeft = document.getElementById("section-rocket-left");
  const videoSection      = document.getElementById("video");

  if (videoSection && window.innerWidth >= 1024) {
    const fireRocket = (el, flyClass, delay) => {
      if (!el) return;
      setTimeout(() => {
        el.classList.remove(flyClass);
        el.style.transition = "opacity 0.5s ease";
        el.style.opacity    = "0";
        void el.offsetWidth;
        setTimeout(() => {
          el.style.opacity = "1";
          setTimeout(() => {
            el.classList.add(flyClass);
            setTimeout(() => { el.style.opacity = "0"; }, 3200);
          }, 600);
        }, 150);
      }, delay);
    };

    const rocketObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fireRocket(sectionRocketLeft, "section-rocket-left-fly", 0);
          fireRocket(sectionRocket,     "section-rocket-fly",      800);
        }
      });
    }, { threshold: 0.3 });

    rocketObserver.observe(videoSection);
  }

  // ----------------------------------------------------------
  // FADE-IN ao rolar
  // ----------------------------------------------------------
  const fadeEls = document.querySelectorAll(".fade-in");
  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
      }),
      { threshold: 0.15 }
    );
    fadeEls.forEach((el) => observer.observe(el));
  }

  // ----------------------------------------------------------
  // PARTÍCULAS
  // ----------------------------------------------------------
  if (window.innerWidth >= 1024) {
    const canvas = document.createElement("canvas");
    canvas.id = "particles-canvas";
    canvas.style.cssText = `
      position: fixed; top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none; z-index: 0;
      opacity: 0; transition: opacity 0.5s ease;
    `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let mouse = { x: -999, y: -999 };
    let W = window.innerWidth, H = window.innerHeight;
    let mouseActive = false, fadeTimeout = null;

    canvas.width = W; canvas.height = H;

    window.addEventListener("resize", () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    });

    // Detecta se o mouse está sobre seção roxa
    function isOverPurpleSection() {
      const els = document.elementsFromPoint(mouse.x, mouse.y);
      return els.some(el => {
        const bg = window.getComputedStyle(el).backgroundColor;
        // Cor roxa da Orion: rgb(98, 27, 238)
        return bg === "rgb(98, 27, 238)" || bg === "rgb(73, 0, 190)";
      });
    }

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX; mouse.y = e.clientY;
      if (!mouseActive) { mouseActive = true; canvas.style.opacity = "1"; }
      clearTimeout(fadeTimeout);
      fadeTimeout = setTimeout(() => {
        canvas.style.opacity = "0"; mouseActive = false; mouse = { x: -999, y: -999 };
      }, 1500);
    });

    document.addEventListener("mouseleave", () => {
      clearTimeout(fadeTimeout);
      canvas.style.opacity = "0"; mouseActive = false; mouse = { x: -999, y: -999 };
    });

    const colorsNormal = [
      "rgba(98,27,238,0.75)",
      "rgba(98,27,238,0.45)",
      "rgba(130,70,255,0.65)",
      "rgba(73,0,190,0.55)",
      "rgba(180,140,255,0.55)",
    ];

    const colorsPurple = [
      "rgba(255,255,255,0.6)",
      "rgba(255,255,255,0.4)",
      "rgba(220,200,255,0.55)",
      "rgba(255,255,255,0.35)",
      "rgba(200,180,255,0.5)",
    ];

    const TOTAL = 80;
    const particles = Array.from({ length: TOTAL }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      len: Math.random() * 8 + 4,
      angle: Math.random() * Math.PI * 2,
      colorIndex: Math.floor(Math.random() * 5),
      speed: Math.random() * 0.3 + 0.1,
    }));

    let onPurple = false;
    let purpleCheckTimer = 0;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      purpleCheckTimer++;
      if (purpleCheckTimer >= 10) {
        onPurple = mouseActive ? isOverPurpleSection() : false;
        purpleCheckTimer = 0;
      }

      const colors = onPurple ? colorsPurple : colorsNormal;

      particles.forEach((p) => {
        const dx = p.x - mouse.x, dy = p.y - mouse.y; // invertido: repulsão
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repulsão suave quando o mouse está próximo
        if (dist < 180 && dist > 0) {
          const force = (180 - dist) / 180 * 0.8;
          p.vx += (dx / dist) * force * 0.04;
          p.vy += (dy / dist) * force * 0.04;
        }

        const maxV = 2.5;
        p.vx = Math.max(-maxV, Math.min(maxV, p.vx));
        p.vy = Math.max(-maxV, Math.min(maxV, p.vy));

        // Amortecimento forte — desacelera rápido após a repulsão
        p.vx *= 0.94;
        p.vy *= 0.94;

        // Movimento base suave e orgânico
        p.x += p.vx + Math.cos(p.angle) * p.speed * 0.3;
        p.y += p.vy + Math.sin(p.angle) * p.speed * 0.3;
        p.angle += 0.006;

        if (p.x < -20)  p.x = W + 20;
        if (p.x > W+20) p.x = -20;
        if (p.y < -20)  p.y = H + 20;
        if (p.y > H+20) p.y = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.strokeStyle = colors[p.colorIndex];
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(-p.len / 2, 0);
        ctx.lineTo(p.len / 2, 0);
        ctx.stroke();
        ctx.restore();
      });

      requestAnimationFrame(draw);
    }

    draw();
  }

  // ----------------------------------------------------------
  // PARTÍCULAS MOBILE: burst no tap
  // ----------------------------------------------------------
  if (window.innerWidth < 1024) {
    const mCanvas = document.createElement("canvas");
    mCanvas.style.cssText = `
      position: fixed; top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none; z-index: 0;
    `;
    document.body.appendChild(mCanvas);
    const mCtx = mCanvas.getContext("2d");
    mCanvas.width = window.innerWidth;
    mCanvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      mCanvas.width = window.innerWidth;
      mCanvas.height = window.innerHeight;
    });

    const burstColors = [
      "rgba(98,27,238,",
      "rgba(130,70,255,",
      "rgba(180,140,255,",
      "rgba(73,0,190,",
    ];

    let mParticles = [];
    let mAnimating = false;

    function spawnBurst(x, y) {
      const COUNT = 28;
      for (let i = 0; i < COUNT; i++) {
        const angle = (Math.PI * 2 / COUNT) * i + (Math.random() - 0.5) * 0.5;
        const speed = Math.random() * 12 + 6;
        mParticles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: Math.random() * 0.035 + 0.04,
          len: Math.random() * 12 + 8,
          angle,
          color: burstColors[Math.floor(Math.random() * burstColors.length)],
        });
      }
      if (!mAnimating) { mAnimating = true; animateBurst(); }
    }

    function animateBurst() {
      mCtx.clearRect(0, 0, mCanvas.width, mCanvas.height);
      mParticles = mParticles.filter(p => p.life > 0);
      mParticles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        p.vx *= 0.91; p.vy *= 0.91;
        p.life -= p.decay;
        mCtx.save();
        mCtx.translate(p.x, p.y);
        mCtx.rotate(p.angle);
        mCtx.strokeStyle = p.color + Math.max(0, p.life) + ")";
        mCtx.lineWidth = 1.5;
        mCtx.lineCap = "round";
        mCtx.beginPath();
        mCtx.moveTo(-p.len / 2, 0);
        mCtx.lineTo(p.len / 2, 0);
        mCtx.stroke();
        mCtx.restore();
      });
      if (mParticles.length > 0) {
        requestAnimationFrame(animateBurst);
      } else {
        mAnimating = false;
        mCtx.clearRect(0, 0, mCanvas.width, mCanvas.height);
      }
    }

    document.addEventListener("touchstart", (e) => {
      const t = e.touches[0];
      spawnBurst(t.clientX, t.clientY);
    }, { passive: true });
  }

  // ----------------------------------------------------------
  // ORION DOT acompanha o mouse
  // ----------------------------------------------------------
  document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".orion-dot").forEach((dot) => {
      const rect = dot.getBoundingClientRect();
      const dotX = rect.left + rect.width / 2, dotY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - dotY, e.clientX - dotX);
      const dist = Math.min(Math.hypot(e.clientX - dotX, e.clientY - dotY) / 25, 6);
      dot.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;
    });
  });

});
