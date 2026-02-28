/* ============================================================
   SiyasatPH — Shared Layout (header + footer injector)
   layout.js  — call injectLayout() after DOM ready
   ============================================================ */

function injectLayout() {
    const page = window.location.pathname.split('/').pop() || 'index.html';

    /* ---- helpers ---- */
    function navLink(href, label) {
        const cls = (page === href) ? 'active' : '';
        return `<a href="${href}" class="${cls}">${label}</a>`;
    }
    function menuLink(href, label) {
        const cls = (page === href) ? 'menu-link active' : 'menu-link';
        return `<a href="${href}" class="${cls}">${label}</a>`;
    }

    /* ---- HEADER ---- */
    const header = `
    <header class="agency-header">
        <div class="container d-flex justify-content-between align-items-center flex-nowrap">

            <a href="index.html" class="d-flex align-items-center text-decoration-none gap-2 gap-md-3">
                <img src="icon-512.png"
                     alt="SiyasatPH Logo"
                     class="logo-img"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                <i class="bi bi-shield-fill-check fs-1 text-danger"
                   style="display:none;"></i>
                <div class="overflow-hidden">
                    <div class="agency-logo">SiyasatPH</div>
                    <div class="agency-sub">Offline-First Public Safety Portal</div>
                </div>
            </a>

            <div class="nav-tools">
                <nav class="desktop-nav">
                    ${navLink('index.html',    'Home')}
                    ${navLink('bulletins.html','Bulletins')}
                    ${navLink('audit.html',    'Risk Audit')}
                    ${navLink('hotlines.html', 'Hotlines')}
                    ${navLink('about.html',    'About')}
                </nav>

                <button class="tool-btn" onclick="toggleSearch()" title="Search">
                    <i class="bi bi-search"></i>
                </button>

                <button class="tool-btn burger-menu-btn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#sidebarMenu"
                        title="Menu">
                    <i class="bi bi-list fs-2"></i>
                </button>
            </div>
        </div>

        <div id="searchWrapper">
            <div class="container">
                <div class="input-group">
                    <span class="input-group-text bg-white border-0">
                        <i class="bi bi-search text-danger"></i>
                    </span>
                    <input type="text" id="dbSearch"
                           class="form-control border-0 shadow-none"
                           placeholder="Search Company or App Name…">
                    <button class="btn btn-outline-secondary border-0"
                            onclick="toggleSearch()">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>`;

    /* ---- SIDEBAR ---- */
    const sidebar = `
    <div class="offcanvas offcanvas-end" id="sidebarMenu" tabindex="-1">
        <div class="offcanvas-header border-bottom">
            <h5 class="fw-bold m-0 text-danger text-uppercase">Portal Navigation</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body p-0">
            ${menuLink('index.html',    'Home')}
            ${menuLink('bulletins.html','Bulletins')}
            ${menuLink('audit.html',    'Risk Audit')}
            ${menuLink('hotlines.html', 'Hotlines')}
            ${menuLink('about.html',    'About')}
        </div>
    </div>`;

    /* ---- FOOTER ---- */
    const footer = `
    <footer>
        <div class="container">
            <div class="row g-4">

                <div class="col-md-4">
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <img src="icon-512.png" alt="Logo"
                             style="width:32px;height:32px;object-fit:contain;filter:brightness(0) invert(1);"
                             onerror="this.style.display='none';">
                        <h6 class="fw-bold text-white mb-0">SiyasatPH</h6>
                    </div>
                    <p class="text-secondary small mb-3">
                        Providing real-time and offline-ready access to official SEC advisories
                        and Cease &amp; Desist orders to protect Filipino investors.
                    </p>
                    <button id="installBtn"
                            class="btn btn-outline-danger btn-sm"
                            onclick="handleInstall()"
                            style="display:none;">
                        <i class="bi bi-phone me-1"></i> Add to Home Screen
                    </button>
                </div>

                <div class="col-6 col-md-2">
                    <h6 class="text-white fw-bold mb-3 text-uppercase" style="font-size:12px;">Navigation</h6>
                    <nav class="footer-nav">
                        <a href="index.html">Home</a>
                        <a href="bulletins.html">Bulletins</a>
                        <a href="audit.html">Risk Audit</a>
                        <a href="hotlines.html">Hotlines</a>
                        <a href="about.html">About</a>
                    </nav>
                </div>

                <div class="col-6 col-md-3">
                    <h6 class="text-white fw-bold mb-3 text-uppercase" style="font-size:12px;">Report To</h6>
                    <nav class="footer-nav">
                        <a href="mailto:epd@sec.gov.ph">SEC — epd@sec.gov.ph</a>
                        <a href="tel:1326">CICC — 1326</a>
                        <a href="tel:+63284141560">PNP-ACG — (02) 8414-1560</a>
                        <a href="mailto:inquiries@privacy.gov.ph">NPC — privacy.gov.ph</a>
                    </nav>
                </div>

                <div class="col-md-3">
                    <h6 class="text-white fw-bold mb-3 text-uppercase" style="font-size:12px;">Data Sources</h6>
                    <p class="small text-secondary mb-1">Securities &amp; Exchange Commission</p>
                    <p class="small text-secondary mb-1">CICC Cybercrime Monitoring Division</p>
                    <p class="small text-secondary">National Privacy Commission</p>
                </div>

            </div>

            <hr class="footer-divider my-4">

            <p class="text-center small text-secondary mb-0">
                © 2026 SiyasatPH | Public Safety Verification Project &nbsp;·&nbsp;
                Not affiliated with any government agency. For advisory purposes only.
            </p>
        </div>
    </footer>`;

    /* ---- Inject ---- */
    document.body.insertAdjacentHTML('afterbegin', header + sidebar);
    document.body.insertAdjacentHTML('beforeend',  footer);

    updateNetworkStatus();
    window.addEventListener('online',  updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    // Search — only works on home page
    $(document).on('input', '#dbSearch', function() {
        if (page !== 'index.html' && page !== '') return;
        const v = $(this).val().toLowerCase();
        const filtered = db.filter(i =>
            i.name.toLowerCase().includes(v) ||
            i.type.toLowerCase().includes(v)
        );
        renderHome(filtered);
    });
}
