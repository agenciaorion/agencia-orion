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

// ============================================================
// NAVBAR
// ============================================================
function renderNavbar() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Define qual link está ativo com base na página atual
  const links = [
    { href: "index.html",   label: "Home" },
    { href: "servicos.html", label: "Serviços" },
    { href: "sobre.html",    label: "Sobre Nós" },
    { href: "contato.html",  label: "Contato" },
  ];

  const navLinks = links
    .map(({ href, label }) => {
      const isActive = currentPage === href
        ? "text-primary border-b-2 border-primary pb-0.5"
        : "text-on-surface-variant";
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
        : "text-deep-slate/70 border-l-4 border-transparent";
      return `
        <a href="${href}"
           class="block py-4 px-5 font-label-bold text-base uppercase tracking-wider ${isActive} hover:text-orion-purple hover:border-orion-purple hover:bg-orion-purple/5 rounded-r-xl transition-all">
          ${label}
        </a>`;
    })
    .join("");

  const navbar = `
    <nav id="main-nav" class="bg-surface/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-outline-variant/30 transition-all duration-300">
      <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-2 max-w-container-max mx-auto transition-all duration-300" id="nav-inner">

        <!-- Logo com efeito pulse no hover -->
        <a href="index.html" class="flex items-center group">
          <img src="assets/images/logo.png" alt="Logo Agência Orion"
               class="h-10 w-auto transition-transform duration-300 group-hover:scale-105" style="margin-left: -8px;">
        </a>

        <!-- Links desktop com caixinha no hover -->
        <div class="hidden md:flex items-center gap-2">
          ${navLinks}
        </div>

        <!-- Botão CTA desktop -->
        <a href="${WHATSAPP_LINK}" target="_blank"
           class="hidden md:inline-flex bg-primary text-on-primary font-label-bold px-6 py-3 rounded-lg hover:shadow-[0_4px_20px_rgba(98,27,238,0.3)] transition-all">
          Falar com a Orion
        </a>

        <!-- Botão menu mobile -->
        <button id="menu-toggle" class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-orion-purple text-white hover:bg-orion-purple/90 transition-colors" aria-label="Abrir menu">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>

    <!-- Menu mobile — tela cheia, fora da nav -->
    <div id="mobile-menu" class="md:hidden fixed inset-0 z-[400] flex flex-col bg-background">

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
          <span class="text-muted-gray font-label-bold text-xs uppercase tracking-widest">Siga-nos</span>
          <a href="https://instagram.com/_agencia.orion" target="_blank"
             class="w-10 h-10 rounded-full border border-orion-purple/40 flex items-center justify-center text-orion-purple hover:bg-orion-purple/10 transition-all" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@agencia.orion" target="_blank"
             class="w-10 h-10 rounded-full border border-orion-purple/40 flex items-center justify-center text-orion-purple hover:bg-orion-purple/10 transition-all" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
            </svg>
          </a>
        </div>
        <a href="${WHATSAPP_LINK}" target="_blank"
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
    <footer class="bg-on-background text-stark-white pt-16 pb-8 border-t-4 border-orion-purple">
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
            <li><a href="index.html"    class="text-muted-gray hover:text-orion-purple transition-colors">Home</a></li>
            <li><a href="servicos.html" class="text-muted-gray hover:text-orion-purple transition-colors">Serviços</a></li>
            <li><a href="sobre.html"    class="text-muted-gray hover:text-orion-purple transition-colors">Sobre Nós</a></li>
            <li><a href="contato.html"  class="text-muted-gray hover:text-orion-purple transition-colors">Contato</a></li>
          </ul>
        </div>

        <!-- Coluna 3: Redes sociais -->
        <div>
          <h4 class="font-label-bold mb-6 uppercase tracking-widest text-stark-white text-sm">Redes Sociais</h4>
          <ul class="space-y-4">
            <li><a href="https://instagram.com/_agencia.orion" target="_blank" class="text-muted-gray hover:text-orion-purple transition-colors">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@agencia.orion" target="_blank" class="text-muted-gray hover:text-orion-purple transition-colors">TikTok</a></li>
            <li><a href="${WHATSAPP_LINK}" target="_blank" class="text-muted-gray hover:text-orion-purple transition-colors">WhatsApp</a></li>
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
    <a href="${WHATSAPP_LINK}" target="_blank" class="whatsapp-fab" aria-label="Falar pelo WhatsApp">
      <svg fill="currentColor" height="28" width="28" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </svg>
    </a>
  `;

  const container = document.getElementById("whatsapp-fab");
  if (container) container.innerHTML = fab;
}

// ============================================================
// INICIALIZAÇÃO: roda tudo quando a página carrega
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();
  renderWhatsappFab();

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

  // Injeta o link do WhatsApp em todos os botões marcados com data-whatsapp
  document.querySelectorAll("[id='cta-whatsapp'], [id='btn-whatsapp-contato']").forEach(el => {
    el.href = WHATSAPP_LINK;
  });
});
