// ============================================================
// COMPONENTS.JS — AGÊNCIA ORION
// Menu e rodapé que aparecem em TODAS as páginas.
// Para editar o menu ou o rodapé, mexa apenas aqui.
// ============================================================

// --- Número do WhatsApp (edite aqui para atualizar em todo o site) ---
const WHATSAPP_NUMBER = "5588998157783";
const WHATSAPP_LINK   = `https://wa.me/${WHATSAPP_NUMBER}`;

// Expõe o link globalmente para páginas que precisam usar fora do components.js
window.WHATSAPP_LINK = WHATSAPP_LINK;

// --- EmailJS — preencha após criar conta em emailjs.com ---
const EMAILJS_PUBLIC_KEY      = 'kOhEeM8EuqeRuQdS6';
const EMAILJS_SERVICE_ID      = 'service_8g49q37';
const EMAILJS_TEMPLATE_LEAD   = 'template_zinub1s';
const EMAILJS_TEMPLATE_BUDGET = 'template_0aucomk';

// ============================================================
// DARK MODE
// ============================================================
function updateDarkIcons() {
  var isDark = document.documentElement.classList.contains('dark');
  var icon = isDark ? 'dark_mode' : 'light_mode';
  ['dark-icon', 'dark-icon-mobile'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.textContent = icon;
  });
}

window.toggleDark = function() {
  var isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('orion-theme', isDark ? 'dark' : 'light');
  updateDarkIcons();
};

function initDarkMode() {
  var t = localStorage.getItem('orion-theme');
  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
  updateDarkIcons();
}

// ============================================================
// NAVBAR
// ============================================================
function renderNavbar() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Define qual link está ativo com base na página atual
  const links = [
    { href: "index.html",    label: "Home" },
    { href: "servicos.html", label: "Serviços" },
    { href: "sobre.html",    label: "Sobre Nós" },
    { href: "contato.html",  label: "Contato" },
  ];

  const navLinks = links
    .map(({ href, label }) => {
      const isActive = currentPage === href
        ? "text-primary border-b-2 border-primary pb-0.5"
        : "text-on-surface-variant dark:text-white/60";
      return `
        <a href="${href}"
           class="nav-link font-label-bold text-sm uppercase tracking-wider ${isActive} px-3 py-2 hover:text-primary transition-colors duration-200">
          ${label}
        </a>`;
    })
    .join("");

  const mobileLinks = links
    .map(({ href, label }) => {
      const isActive = currentPage === href
        ? "text-orion-purple font-bold border-l-4 border-orion-purple bg-orion-purple/10"
        : "text-deep-slate/70 dark:text-white/60 border-l-4 border-transparent";
      return `
        <a href="${href}"
           class="block py-4 px-5 font-label-bold text-base uppercase tracking-wider ${isActive} hover:text-orion-purple hover:border-orion-purple hover:bg-orion-purple/5 rounded-r-xl transition-all">
          ${label}
        </a>`;
    })
    .join("");

  const navbar = `
    <nav id="main-nav" class="bg-surface/90 dark:bg-[#0f0f13]/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-outline-variant/30 dark:border-white/[0.08] transition-all duration-300">
      <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-2 max-w-container-max mx-auto transition-all duration-300" id="nav-inner">

        <!-- Logo com efeito pulse no hover -->
        <a href="index.html" class="flex items-center group">
          <img src="assets/images/logo.png" alt="Logo Agência Orion"
               class="h-10 w-auto transition-transform duration-300 group-hover:scale-105" style="margin-left: -8px;">
        </a>

        <!-- Links desktop -->
        <div class="hidden md:flex items-center gap-2">
          ${navLinks}
        </div>

        <!-- Dark toggle + CTA desktop -->
        <div class="hidden md:flex items-center gap-3">
          <button id="dark-toggle" onclick="window.toggleDark()"
            class="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container dark:hover:bg-[#28282f] transition-colors text-on-surface-variant dark:text-white/60"
            aria-label="Alternar modo escuro">
            <span id="dark-icon" class="material-symbols-outlined text-xl" style="font-variation-settings:'FILL' 0,'wght' 400">light_mode</span>
          </button>
          <button id="nav-cta-btn"
             class="bg-primary text-on-primary font-label-bold px-6 py-3 rounded-lg hover:shadow-[0_4px_20px_rgba(98,27,238,0.3)] hover:-translate-y-0.5 transition-all duration-200 border-0 cursor-pointer">
            Falar com a Orion
          </button>
        </div>

        <!-- Dark toggle + menu mobile -->
        <div class="md:hidden flex items-center gap-2">
          <button id="dark-toggle-mobile" onclick="window.toggleDark()"
            class="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container dark:hover:bg-[#28282f] transition-colors text-on-surface-variant dark:text-white/60"
            aria-label="Alternar modo escuro">
            <span id="dark-icon-mobile" class="material-symbols-outlined text-xl" style="font-variation-settings:'FILL' 0,'wght' 400">light_mode</span>
          </button>
          <button id="menu-toggle" class="w-10 h-10 flex items-center justify-center rounded-lg bg-orion-purple text-white hover:bg-orion-purple/90 transition-colors" aria-label="Abrir menu">
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Menu mobile — tela cheia, fora da nav -->
    <div id="mobile-menu" class="md:hidden fixed inset-0 z-[400] flex flex-col bg-background dark:bg-[#0f0f13]">

      <!-- Cabeçalho: logo + botão fechar -->
      <div class="flex items-center justify-between px-6 py-3 border-b border-orion-purple/15" style="min-height:56px;">
        <a href="index.html" class="flex items-center">
          <img src="assets/images/logo.png" alt="Agência Orion" class="h-10 w-auto" style="margin-left:-8px;">
        </a>
        <button id="menu-close" class="p-2 rounded-lg text-orion-purple hover:bg-orion-purple/10 transition-colors" aria-label="Fechar menu">
          <span class="material-symbols-outlined text-3xl">close</span>
        </button>
      </div>

      <!-- Links de navegação -->
      <div class="flex-1 flex flex-col px-6 py-8 gap-1">
        ${mobileLinks}
      </div>

      <!-- Rodapé: redes sociais + CTA -->
      <div class="px-6 pb-10 pt-4 border-t border-orion-purple/15 space-y-6">
        <div class="flex items-center gap-4">
          <span class="text-muted-gray dark:text-white/40 font-label-bold text-xs uppercase tracking-widest">Siga-nos</span>
          <a href="https://instagram.com/_agencia.orion" target="_blank" rel="noopener noreferrer"
             class="w-10 h-10 rounded-full border border-orion-purple/40 flex items-center justify-center text-orion-purple hover:bg-orion-purple/10 transition-all" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@agencia.orion" target="_blank" rel="noopener noreferrer"
             class="w-10 h-10 rounded-full border border-orion-purple/40 flex items-center justify-center text-orion-purple hover:bg-orion-purple/10 transition-all" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
            </svg>
          </a>
        </div>
        <a href="${WHATSAPP_LINK}" target="_blank" rel="noopener noreferrer"
           class="cta-gradient flex items-center justify-center gap-3 w-full text-stark-white font-label-bold py-4 rounded-xl uppercase tracking-wider text-sm">
          <svg viewBox="0 0 16 16" fill="currentColor" width="18" height="18">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
          Entre em Contato
        </a>
      </div>
    </div>
  `;

  // Injeta o menu no topo da página
  const container = document.getElementById("navbar");
  if (container) container.innerHTML = navbar;

  // Abre o modal de captura ao clicar no CTA da navbar
  document.getElementById('nav-cta-btn')?.addEventListener('click', () => {
    window.openLeadModal({ source: 'Navbar' });
  });

  // Scroll suave ao clicar em Home — só se já estiver na index
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Se clicar em Home estando na index, sobe suavemente
    if (href === "index.html" && (currentPage === "index.html" || currentPage === "")) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  // Lógica do menu mobile
  const toggle    = document.getElementById("menu-toggle");
  const closeBtn  = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => mobileMenu.classList.add("open"));
  }
  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener("click", () => mobileMenu.classList.remove("open"));
  }
  // Fecha ao navegar (útil para scroll na mesma página)
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => mobileMenu.classList.remove("open"));
    });
  }
}

// ============================================================
// FOOTER
// ============================================================
function renderFooter() {
  const footer = `
    <footer class="bg-on-background dark:bg-[#08080d] text-stark-white pt-16 pb-8 border-t-4 border-orion-purple">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

        <!-- Coluna 1: Sobre a agência -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-6">
            <span class="font-headline-md text-2xl text-stark-white font-bold">Agência Orion</span>
            <span class="orion-dot"></span>
          </div>
          <p class="text-muted-gray font-body-md max-w-sm mb-8 leading-relaxed">
            Especialistas em performance e branding para empresas que buscam crescimento real e sustentável no ecossistema digital.
          </p>
        </div>

        <!-- Coluna 2: Navegação -->
        <div>
          <h4 class="font-label-bold mb-6 uppercase tracking-widest text-stark-white text-sm">Navegação</h4>
          <ul class="space-y-4">
            <li><a href="index.html"    class="group flex items-center gap-2 text-muted-gray hover:text-orion-purple transition-colors">Home<span class="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sm">→</span></a></li>
            <li><a href="servicos.html" class="group flex items-center gap-2 text-muted-gray hover:text-orion-purple transition-colors">Serviços<span class="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sm">→</span></a></li>
            <li><a href="posts.html"    class="group flex items-center gap-2 text-muted-gray hover:text-orion-purple transition-colors">Posts<span class="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sm">→</span></a></li>
            <li><a href="sobre.html"    class="group flex items-center gap-2 text-muted-gray hover:text-orion-purple transition-colors">Sobre Nós<span class="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sm">→</span></a></li>
            <li><a href="contato.html"  class="group flex items-center gap-2 text-muted-gray hover:text-orion-purple transition-colors">Contato<span class="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sm">→</span></a></li>
          </ul>
        </div>

        <!-- Coluna 3: Redes sociais -->
        <div>
          <h4 class="font-label-bold mb-6 uppercase tracking-widest text-stark-white text-sm">Redes Sociais</h4>
          <ul class="space-y-4">
            <li><a href="https://instagram.com/_agencia.orion" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-muted-gray hover:text-orion-purple transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a></li>
            <li><a href="https://www.tiktok.com/@agencia.orion" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-muted-gray hover:text-orion-purple transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/></svg>
              TikTok
            </a></li>
            <li><a href="${WHATSAPP_LINK}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-muted-gray hover:text-orion-purple transition-colors">
              <svg viewBox="0 0 16 16" fill="currentColor" width="18" height="18"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
              WhatsApp
            </a></li>
          </ul>
        </div>
      </div>

      <!-- Linha final -->
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-muted-gray text-sm">© ${new Date().getFullYear()} Agência Orion. Estratégia & Soluções em Marketing.</p>
        <p class="text-muted-gray text-sm">agenciaorionce.com.br</p>
      </div>
    </footer>
  `;

  const container = document.getElementById("footer");
  if (container) container.innerHTML = footer;
}

// ============================================================
// BOTÃO FLUTUANTE DO WHATSAPP
// ============================================================
function renderWhatsappFab() {
  const fab = `
    <a href="${WHATSAPP_LINK}" target="_blank" rel="noopener noreferrer" class="whatsapp-fab" aria-label="Falar pelo WhatsApp">
      <svg fill="currentColor" height="28" width="28" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </svg>
    </a>
  `;

  const container = document.getElementById("whatsapp-fab");
  if (container) container.innerHTML = fab;
}

// ============================================================
// LEAD MODAL — captura nome + e-mail antes de ir ao WhatsApp
// ============================================================

let _leadConfig = {};

function renderLeadModal() {
  const chipStyle = document.createElement('style');
  chipStyle.textContent = '.lead-chip.lead-chip-selected{background:rgba(98,27,238,0.08);border-color:#621BEE;color:#621BEE;}';
  document.head.appendChild(chipStyle);

  const CHIP_SERVICES = ['Estratégia & Branding','Tráfego Pago','Social Media','Design Gráfico','AudioVisual','Drone','Cobertura de Eventos','Influencers','Sites & Apps','Produção de Áudio','Masterização de Áudio','Não sei ainda'];
  const chipsHTML = CHIP_SERVICES.map(s =>
    `<button type="button" data-service="${s}" class="lead-chip px-3 py-1.5 rounded-lg border border-outline-variant/60 dark:border-white/[0.10] text-xs font-label-bold text-on-surface dark:text-[#e8e6ef] bg-surface-container-low dark:bg-[#16161a] hover:border-orion-purple/50 hover:text-orion-purple transition-all cursor-pointer" onclick="this.classList.toggle('lead-chip-selected')">${s}</button>`
  ).join('');

  const modal = document.createElement('div');
  modal.id = 'lead-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'lead-modal-title');
  modal.style.cssText = 'display:none;position:fixed;inset:0;z-index:600;align-items:center;justify-content:center;padding:1rem;';
  modal.innerHTML = `
    <div class="absolute inset-0 bg-black/55 backdrop-blur-sm" onclick="if(event.target===this)window.closeLeadModal()"></div>
    <div class="relative bg-white dark:bg-[#1e1e24] rounded-3xl p-8 w-full max-w-[440px] shadow-2xl">
      <button onclick="window.closeLeadModal()"
              class="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-[#28282f] hover:bg-gray-200 dark:hover:bg-[#333338] transition-colors flex items-center justify-center text-gray-500 dark:text-white/50 text-sm border-0 cursor-pointer">
        ✕
      </button>

      <div class="flex items-center gap-2 mb-5">
        <span class="orion-dot"></span>
        <span class="font-label-bold text-xs text-orion-purple uppercase tracking-widest">Agência Orion</span>
      </div>

      <h3 id="lead-modal-title" class="font-headline-lg text-deep-slate dark:text-[#e8e6ef] text-xl mb-2 leading-tight"></h3>
      <p  id="lead-modal-subtitle" class="text-muted-gray dark:text-[#9994a8] text-sm mb-5 leading-relaxed"></p>

      <p id="lead-modal-error" class="text-red-500 text-sm mb-4 hidden"></p>

      <div class="flex flex-col gap-3 mb-4">
        <input id="lead-name" type="text" placeholder="Seu nome completo"
               class="w-full border border-outline-variant dark:border-white/[0.12] rounded-xl px-4 py-3.5 text-sm text-on-surface dark:text-[#e8e6ef] bg-surface-container-low dark:bg-[#16161a] focus:outline-none focus:border-orion-purple focus:ring-2 focus:ring-orion-purple/20 transition-all placeholder:text-muted-gray/50 dark:placeholder:text-white/30"
               onkeydown="if(event.key==='Enter')document.getElementById('lead-email').focus()">
        <input id="lead-email" type="email" placeholder="Seu melhor e-mail"
               class="w-full border border-outline-variant dark:border-white/[0.12] rounded-xl px-4 py-3.5 text-sm text-on-surface dark:text-[#e8e6ef] bg-surface-container-low dark:bg-[#16161a] focus:outline-none focus:border-orion-purple focus:ring-2 focus:ring-orion-purple/20 transition-all placeholder:text-muted-gray/50 dark:placeholder:text-white/30"
               onkeydown="if(event.key==='Enter')window.submitLead()">
      </div>

      <div id="lead-chips-section" class="mb-5">
        <p class="text-xs text-muted-gray/70 dark:text-white/40 mb-2 uppercase tracking-wider font-label-bold">Serviço de interesse <span class="font-normal normal-case tracking-normal opacity-60">(opcional)</span></p>
        <div class="flex flex-wrap gap-1.5">${chipsHTML}</div>
      </div>

      <button id="lead-submit-btn" onclick="window.submitLead()"
              class="w-full bg-orion-purple text-stark-white font-label-bold py-4 rounded-xl hover:shadow-[0_10px_30px_rgba(98,27,238,0.4)] transition-all uppercase tracking-wider text-sm mb-3 border-0 cursor-pointer">
        Continuar para WhatsApp
      </button>

      <button onclick="window.skipLead()"
              class="w-full text-muted-gray dark:text-white/40 text-sm py-2 hover:text-orion-purple transition-colors bg-transparent border-0 cursor-pointer">
        Prefiro ir direto ao WhatsApp →
      </button>
    </div>
  `;
  document.body.appendChild(modal);
}

window.openLeadModal = function(config) {
  _leadConfig = config || {};
  const isQuote = _leadConfig.services && _leadConfig.services.length > 0;

  const titleEl    = document.getElementById('lead-modal-title');
  const subtitleEl = document.getElementById('lead-modal-subtitle');
  const errorEl    = document.getElementById('lead-modal-error');
  const nameEl     = document.getElementById('lead-name');
  const emailEl    = document.getElementById('lead-email');
  const btnEl      = document.getElementById('lead-submit-btn');

  if (titleEl) titleEl.textContent    = isQuote ? 'Quase lá!' : 'Antes de continuar';
  if (subtitleEl) subtitleEl.textContent = isQuote
    ? 'Deixe seu contato para recebermos o orçamento por e-mail e te retornarmos pelo WhatsApp.'
    : 'Deixe seu contato e te retornamos pelo WhatsApp em instantes.';
  if (errorEl)  { errorEl.textContent = ''; errorEl.classList.add('hidden'); }
  if (nameEl)   nameEl.value  = '';
  if (emailEl)  emailEl.value = '';
  if (btnEl)    { btnEl.textContent = 'Continuar para WhatsApp'; btnEl.disabled = false; }

  // Chips: esconde quando serviços já foram escolhidos (orçamento); reseta seleção
  const chipsSection = document.getElementById('lead-chips-section');
  if (chipsSection) chipsSection.style.display = isQuote ? 'none' : 'block';
  document.querySelectorAll('.lead-chip').forEach(c => c.classList.remove('lead-chip-selected'));

  const modal = document.getElementById('lead-modal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => nameEl?.focus(), 80);
  }
};

window.closeLeadModal = function() {
  const modal = document.getElementById('lead-modal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
};

window.skipLead = function() {
  const services = _leadConfig.services;
  window.closeLeadModal();
  if (services && services.length > 0) {
    const lines = services.map(s => '• ' + s).join('\n');
    const msg = 'Olá Orion!\n\nGostaria de um orçamento para:\n\n' + lines + '\n\nAguardo retorno!';
    window.open(WHATSAPP_LINK + '?text=' + encodeURIComponent(msg), '_blank');
  } else {
    window.open(WHATSAPP_LINK, '_blank');
  }
};

window.submitLead = function() {
  const name    = document.getElementById('lead-name').value.trim();
  const email   = document.getElementById('lead-email').value.trim();
  const errorEl = document.getElementById('lead-modal-error');
  const btnEl   = document.getElementById('lead-submit-btn');

  if (!name || !email) {
    if (errorEl) { errorEl.textContent = 'Por favor, preencha nome e e-mail.'; errorEl.classList.remove('hidden'); }
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (errorEl) { errorEl.textContent = 'E-mail inválido.'; errorEl.classList.remove('hidden'); }
    return;
  }

  if (btnEl) { btnEl.textContent = 'Enviando...'; btnEl.disabled = true; }

  const configServices = _leadConfig.services;
  const source         = _leadConfig.source || 'Site';
  const isQuote        = configServices && configServices.length > 0;

  // Chips selecionados no modal (quando não é orçamento pré-configurado)
  const modalChips = Array.from(document.querySelectorAll('.lead-chip.lead-chip-selected')).map(c => c.dataset.service);
  const services   = isQuote ? configServices : (modalChips.length > 0 ? modalChips : null);

  const templateParams = {
    lead_name:  name,
    lead_email: email,
    source:     source,
    services:   services ? services.join(', ') : 'Não informado',
    message:    '',
    date:       new Date().toLocaleString('pt-BR'),
    to_email:   'contato@agenciaorionce.com.br',
  };

  function proceed() {
    window.closeLeadModal();
    let msg;
    if (services && services.length > 0) {
      const lines = services.map(s => '• ' + s).join('\n');
      msg = `Olá Orion!\n\n*Nome:* ${name}\n*E-mail:* ${email}\n\nGostaria de um orçamento para:\n\n${lines}\n\nAguardo retorno!`;
    } else {
      msg = `Olá Orion!\n\n*Nome:* ${name}\n*E-mail:* ${email}\n\nGostaria de saber mais sobre os serviços de vocês!`;
    }
    window.open(WHATSAPP_LINK + '?text=' + encodeURIComponent(msg), '_blank');
  }

  const templateId = isQuote ? EMAILJS_TEMPLATE_BUDGET : EMAILJS_TEMPLATE_LEAD;
  if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'COLE_SUA_PUBLIC_KEY') {
    emailjs.send(EMAILJS_SERVICE_ID, templateId, templateParams).then(proceed, proceed);
  } else {
    proceed();
  }
};

function loadEmailJS() {
  if (EMAILJS_PUBLIC_KEY === 'COLE_SUA_PUBLIC_KEY') return;
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  script.onload = () => emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  document.head.appendChild(script);
}

// Helper global — usado pelo formulário de contato.html
window.sendContactEmail = function(params) {
  if (typeof emailjs === 'undefined' || EMAILJS_PUBLIC_KEY === 'COLE_SUA_PUBLIC_KEY') return;
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_BUDGET, {
    lead_name:  params.name,
    lead_email: params.email || 'Não informado',
    services:   params.services || 'Não informado',
    message:    params.message || '',
    source:     'Formulário de Contato',
    date:       new Date().toLocaleString('pt-BR'),
    to_email:   'contato@agenciaorionce.com.br',
  });
};

// ============================================================
// INICIALIZAÇÃO: roda tudo quando a página carrega
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  initDarkMode();
  renderFooter();
  renderWhatsappFab();
  renderLeadModal();
  loadEmailJS();

  // Wire up CTA final do index (cta-whatsapp) para abrir modal
  const ctaWhatsapp = document.getElementById('cta-whatsapp');
  if (ctaWhatsapp) {
    ctaWhatsapp.addEventListener('click', (e) => {
      e.preventDefault();
      window.openLeadModal({ source: 'CTA Final - Início' });
    });
  }

  // Navbar shrink ao rolar — roda aqui pois o navbar já foi injetado
  const nav      = document.getElementById("main-nav");
  const navInner = document.getElementById("nav-inner");
  if (nav && navInner) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        nav.classList.add("shadow-md");
        navInner.classList.remove("py-2");
        navInner.classList.add("py-1");
      } else {
        nav.classList.remove("shadow-md");
        navInner.classList.remove("py-1");
        navInner.classList.add("py-2");
      }
    });
  }

  // Injeta o link do WhatsApp no botão de contato da página contato.html
  const btnWhatsappContato = document.getElementById('btn-whatsapp-contato');
  if (btnWhatsappContato) btnWhatsappContato.href = WHATSAPP_LINK;
});
