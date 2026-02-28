/* ============================================================
   SiyasatPH — Shared Data & Utilities  (data.js)
   ============================================================ */

/* ---- 40 Hardcoded Scam Records ---- */
const db = [
    /* 2026 */
    { date:"Jan 23, 2026", name:"PESO WEALTH BUILDERS",        type:"Ponzi Scheme",          modus:"Promised 300% ROI in 45 days via fake agri-trading and livestock breeding pools." },
    { date:"Jan 19, 2026", name:"DE GUZMAN CONSUMER GOODS",    type:"Ponzi Scheme",          modus:"Promised 200% ROI in 60 days via fake pet breeding and rice trading." },
    { date:"Jan 17, 2026", name:"TASKPLUS PH",                 type:"Task & Job Offer Scam", modus:"Telegram-based clicking scam requiring VIP deposit to unlock withdrawals." },
    { date:"Jan 15, 2026", name:"GCRYPTO EARN",                type:"Investment Fraud",      modus:"Crypto arbitrage scam that collected GCash deposits, then disappeared." },
    { date:"Jan 12, 2026", name:"EXNESS GLOBAL (HFM)",         type:"Unauthorized Broker",   modus:"Advisory issued for soliciting investments without secondary license." },
    { date:"Jan 10, 2026", name:"EASYLOAN PH",                 type:"Illegal Lending",       modus:"Unregistered lending app accessing contacts and sending threatening messages to borrowers." },
    { date:"Jan 08, 2026", name:"LS KBS CRYPTO",               type:"Investment Fraud",      modus:"Crypto humanitarian-themed scam using recruitment cycles." },
    { date:"Jan 06, 2026", name:"BANTAY PONDO FOUNDATION",     type:"Impersonation",         modus:"Fake NGO imitating DSWD branding to collect donations via GCash." },
    { date:"Jan 04, 2026", name:"AYALA INVESTMENTS AI",        type:"Impersonation",         modus:"Uses deepfake technology to impersonate Ayala Corp officials." },
    { date:"Jan 02, 2026", name:"LUCKYTASK APP",               type:"Task & Job Offer Scam", modus:"App lured workers with fake product-rating jobs, then demanded upgrade fees." },

    /* Dec 2025 */
    { date:"Dec 28, 2025", name:"MATRIX TRADING HUB",          type:"Ponzi Scheme",          modus:"Multi-level matrix scheme disguised as forex trading mentorship." },
    { date:"Dec 22, 2025", name:"SUPERCLICK REWARDS",          type:"Task & Job Offer Scam", modus:"YouTube/ad-clicking tasks that required loading wallet to proceed to payout." },
    { date:"Dec 19, 2025", name:"DIGITRADE BROKERS",           type:"Unauthorized Broker",   modus:"Offshore broker operating locally without BSP or SEC approval." },
    { date:"Dec 15, 2025", name:"MAGIC PESO",                  type:"Illegal Lending",       modus:"Operating without OLP registration. Flagged for harassment." },
    { date:"Dec 10, 2025", name:"GLOBAL AGRI VENTURE PH",      type:"Ponzi Scheme",          modus:"Promised monthly dividends from non-existent fish and poultry farm operations." },
    { date:"Dec 05, 2025", name:"CRYPTOPALACE PH",             type:"Investment Fraud",      modus:"Fake crypto exchange collecting deposits with no withdrawal mechanism." },
    { date:"Dec 01, 2025", name:"BIYAHENG NEGOSYO",            type:"Ponzi Scheme",          modus:"Travel franchise scam requiring buy-in fees and recruitment to earn." },

    /* Nov 2025 */
    { date:"Nov 27, 2025", name:"KAPWA LENDS",                 type:"Illegal Lending",       modus:"Predatory lending app charging 35% weekly interest, no OLP registration." },
    { date:"Nov 20, 2025", name:"PISO PISO GROW",              type:"Ponzi Scheme",          modus:"Social media investment club with 15% weekly returns funded by new members." },
    { date:"Nov 15, 2025", name:"CLICK & EARN PRO",            type:"Task & Job Offer Scam", modus:"Paid review platform requiring P1,500 activation before releasing commissions." },
    { date:"Nov 10, 2025", name:"BESTRADE FX",                 type:"Unauthorized Broker",   modus:"Copy-trading platform with fake profit dashboards, funds unrecoverable." },
    { date:"Nov 05, 2025", name:"MANILA AI TRADING",           type:"Impersonation",         modus:"Deepfake ads featuring prominent financial influencer to promote fake app." },

    /* Oct 2025 */
    { date:"Oct 28, 2025", name:"EARN MASTERS HUB",            type:"Task & Job Offer Scam", modus:"Multi-level tasking scam requiring VIP levels costing up to P10,000." },
    { date:"Oct 20, 2025", name:"OHO INVESTMENT PH",           type:"Task & Job Offer Scam", modus:"SEC-flagged scheme posing as an online job; deposits required to unlock withdrawals." },
    { date:"Oct 14, 2025", name:"PINOY WEALTH CLUB",           type:"Ponzi Scheme",          modus:"Facebook group investment pool promising 50% ROI monthly with no business model." },
    { date:"Oct 07, 2025", name:"FXDREAM CAPITAL",             type:"Unauthorized Broker",   modus:"Unlicensed broker soliciting forex trades via Telegram with manipulated charts." },

    /* Sep 2025 */
    { date:"Sep 25, 2025", name:"QUICKLOAN PILIPINAS",         type:"Illegal Lending",       modus:"App loans at 20% per week; sends defaming messages to borrower contacts." },
    { date:"Sep 18, 2025", name:"AGRI FORTUNE INC.",           type:"Investment Fraud",      modus:"Sold fake crop-yield investment packages through social media ads." },
    { date:"Sep 10, 2025", name:"NATIONAL WELFARE AID (FAKE)", type:"Impersonation",         modus:"Mimics DSWD cash aid programs, collects personal data and GCash info." },
    { date:"Sep 03, 2025", name:"BINANCE PH (CLONED SITE)",    type:"Impersonation",         modus:"Phishing clone of Binance directing deposits to scammer wallets." },

    /* Aug 2025 */
    { date:"Aug 28, 2025", name:"MILLIONAIRE MINDSET PH",      type:"Ponzi Scheme",          modus:"Coaching scheme requiring P5,000 buy-in and five recruits to earn returns." },
    { date:"Aug 20, 2025", name:"SHOPRATE TASKS",              type:"Task & Job Offer Scam", modus:"Product-rating app that locked accounts after large task deposits were made." },
    { date:"Aug 13, 2025", name:"PETSA DE PELIGRO LOANS",      type:"Illegal Lending",       modus:"5-6 digital lending scheme; no license, used social media harassment." },
    { date:"Aug 05, 2025", name:"ALPHA CRYPTO GUILD",          type:"Investment Fraud",      modus:"Fake crypto mining pool collecting BTC, then exit-scammed investors." },

    /* Jul 2025 */
    { date:"Jul 30, 2025", name:"STARPESO TRADING",            type:"Unauthorized Broker",   modus:"Unlicensed trading platform that disabled withdrawals after reaching P5M collected." },
    { date:"Jul 22, 2025", name:"FORTUNE TREE PH",             type:"Ponzi Scheme",          modus:"Tree-planting investment promising 20% monthly returns; no actual operations." },
    { date:"Jul 14, 2025", name:"PESO DOCTOR LOANS",           type:"Illegal Lending",       modus:"Charged 30% processing fee upfront; contacts harassed when loan defaulted." },
    { date:"Jul 07, 2025", name:"SSS ASSISTANCE PORTAL (FAKE)",type:"Impersonation",         modus:"Cloned SSS website collecting SSS numbers and one-time PINs for account takeover." },
    { date:"Jun 28, 2025", name:"WORKFROMHOME GLOBAL PH",      type:"Task & Job Offer Scam", modus:"Fake remote work platform; hired workers, collected equipment deposits, then vanished." },
    { date:"Jun 15, 2025", name:"CRYPTO HERMES PH",            type:"Investment Fraud",      modus:"Offered 1% daily returns on USDT; collapsed after 3 months with no refunds." },
];

/* ---- Filter Map ---- */
const filterMap = {
    task:    ["Task & Job Offer Scam"],
    trading: ["Unauthorized Broker"],
    invest:  ["Investment Fraud"],
    ponzi:   ["Ponzi Scheme"],
    lending: ["Illegal Lending"],
    fake:    ["Impersonation", "AI Fake Fraud"],
};

/* ---- Scam Profiles (Risk Audit) ---- */
const scamProfiles = {
    ponzi: {
        title: "Ponzi / Pyramid Scheme",
        whatIs: "A fraudulent investment operation where returns are paid using money from new recruits instead of actual profit.",
        prevention: "Avoid any scheme with guaranteed high returns. Always verify SEC license at sec.gov.ph.",
        reporting: "Report to SEC Enforcement Division at epd@sec.gov.ph or call (02) 8818-6337."
    },
    task: {
        title: "Tasking / Job Offer Scam",
        whatIs: "Victims perform fake online tasks (clicking, liking, rating) and are required to pay fees to withdraw so-called earnings.",
        prevention: "Legitimate employers never ask you to pay to receive your own salary. Walk away immediately.",
        reporting: "Report to CICC at 1326 or file at cybercrime.gov.ph."
    },
    lending: {
        title: "Illegal Lending / OLA Harassment",
        whatIs: "Unregistered online lending apps that charge predatory rates and threaten borrowers by accessing and shaming their contacts.",
        prevention: "Never grant contact or media access to loan apps. Check OLP registration with SEC.",
        reporting: "Report to NPC at complaints@privacy.gov.ph and to SEC at epd@sec.gov.ph."
    },
    fake: {
        title: "Impersonation / Deepfake Fraud",
        whatIs: "Scammers use fake logos, deepfake videos, and cloned websites to pose as government agencies or reputable companies.",
        prevention: "Always verify URLs, social media verification badges, and official SEC/BSP registrations.",
        reporting: "Report to PNP-ACG at (02) 8414-1560 or file online at acg.pnp.gov.ph."
    },
    general: {
        title: "General Investment Fraud",
        whatIs: "Illegal fundraising or investment solicitation without authority from SEC, BSP, or other regulators.",
        prevention: "Verify investment company registration before handing over any money.",
        reporting: "Report to SEC at epd@sec.gov.ph."
    }
};

/* ---- Scam Guides (Bulletin click) ---- */
const scamGuides = {
    "Ponzi Scheme": {
        title: "How to Spot a Ponzi Scheme",
        desc: "Ponzi schemes promise unrealistic profits and pay old investors using new victims' money. They always collapse.",
        signs: ["Guaranteed high fixed returns","No clear or verifiable business model","Heavy pressure to recruit new members","No SEC or BSP registration","Withdrawals blocked or delayed when questioned"],
        action: "Stop all transactions immediately. Preserve receipts and screenshots. Report to SEC Enforcement Division and CICC."
    },
    "Task & Job Offer Scam": {
        title: "How to Spot a Task / Job Scam",
        desc: "These scams pose as online freelance or rating jobs. Victims earn small amounts initially, then are trapped into paying escalating fees.",
        signs: ["You must deposit money to withdraw your balance","VIP membership levels unlock higher tasks","Tasks involve liking/clicking with unrealistic rewards","Operates only on Telegram or WhatsApp","No verifiable company address or SEC registration"],
        action: "Never send any money. Block the recruiter and report to CICC at 1326."
    },
    "Investment Fraud": {
        title: "How to Spot Investment Fraud",
        desc: "These entities collect funds from the public without legal authority to do so.",
        signs: ["No secondary license from SEC","Operates secretively through chat groups","Collects payments via personal GCash or crypto wallets","Promises fixed monthly income","Cannot produce audited financial statements"],
        action: "Verify registration at sec.gov.ph before investing. Report unauthorized entities to SEC."
    },
    "Unauthorized Broker": {
        title: "How to Spot Unauthorized Brokers",
        desc: "Unlicensed brokers solicit trading accounts or managed forex/crypto investments without regulatory approval.",
        signs: ["Not listed on SEC or BSP licensed entities list","No verifiable trading license","Uses cloned or unofficial trading platforms","Profit dashboards are manipulated / fake","Withdrawal requests are ignored or denied"],
        action: "Do not deposit. Report to SEC and BSP immediately."
    },
    "Illegal Lending": {
        title: "How to Spot Illegal Lending Apps",
        desc: "These apps offer quick cash but charge exploitative rates and harass borrowers using their contacts.",
        signs: ["App demands access to contacts, photos, and camera","Sends threatening or defaming messages","Publicly shames borrowers online","No OLP (Online Lending Platform) registration","Interest rates exceed BSP caps"],
        action: "Report to NPC (privacy.gov.ph) and SEC. File criminal charges for harassment with PNP-ACG."
    },
    "Impersonation": {
        title: "How to Spot Impersonation Scams",
        desc: "Fraudsters clone government portals, bank websites, or company pages to steal data and money.",
        signs: ["Uses slightly misspelled domain names or unofficial links","Deepfake videos endorsing investment products","Uses fake government logos on materials","Requests OTP, SSS/PhilHealth numbers, or GCash PIN","No verifiable official contact information"],
        action: "Never enter credentials on unverified sites. Report to PNP-ACG and NPC immediately."
    }
};

/* ---- Navigation helper ---- */
function navigate(page) {
    const pages = {
        home:      'index.html',
        bulletins: 'bulletins.html',
        audit:     'audit.html',
        hotlines:  'hotlines.html',
        about:     'about.html',
    };
    if (pages[page]) window.location.href = pages[page];
}

/* ---- Active nav highlight ---- */
function setActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.desktop-nav a, .menu-link').forEach(a => {
        const href = a.getAttribute('href') || '';
        if (href === page || (page === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });
}

/* ---- Toggle search bar ---- */
function toggleSearch() {
    const sw = document.getElementById('searchWrapper');
    if (!sw) return;
    $(sw).slideToggle(200, () => {
        if ($(sw).is(':visible')) $('#dbSearch').focus();
    });
}

/* ---- Network status ---- */
function updateNetworkStatus() {
    const el   = document.getElementById('netStatus');
    const text = document.getElementById('netText');
    if (!el) return;
    const icon = el.querySelector('i');
    el.classList.remove('text-success','text-danger');
    icon.classList.remove('text-success','text-danger');
    if (navigator.onLine) {
        text.textContent = 'ONLINE';
        el.classList.add('text-success');
        icon.classList.add('text-success');
    } else {
        text.textContent = 'OFFLINE';
        el.classList.add('text-danger');
        icon.classList.add('text-danger');
    }
}

/* ---- PWA Install ---- */
let deferredPrompt;
window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById('installBtn');
    if (btn) btn.style.display = 'inline-block';
});
window.addEventListener('appinstalled', () => {
    const btn = document.getElementById('installBtn');
    if (btn) btn.style.display = 'none';
});
function handleInstall() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
}

/* ---- Submenu toggle ---- */
$(document).on('click', '.submenu-toggle', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    const parent = $(this).closest('.dropdown-submenu');
    parent.siblings('.dropdown-submenu').removeClass('open');
    parent.toggleClass('open');
});

// Close submenus when main dropdown closes
$(document).on('hide.bs.dropdown', function() {
    $('.dropdown-submenu').removeClass('open');
});
