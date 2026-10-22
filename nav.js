/**
 * Biar Kito Tau - Portal Palembang
 * Universal Client-Side Navigation & Interactive Enhancement Script
 */
(function() {
  'use strict';

  // Check if we are running in a server with clean routes or relative file mode
  const isDirectFile = window.location.protocol === 'file:' || window.location.pathname.includes('/stitch_biar_kito_tau_portal_ui/');

  // Clean Route Mappings
  const ROUTE_MAP = {
    'peta-utama': '/',
    'beranda': '/',
    'portal-berita': '/berita',
    'berita': '/berita',
    'loker-event': '/loker',
    'loker-dan-event': '/loker',
    'loker-&-event': '/loker',
    'loker-&amp;-event': '/loker',
    'loker': '/loker',
    'agenda': '/agenda',
    'loker-agenda': '/agenda',
    'info-kota-udara': '/lingkungan',
    'info-lingkungan-kota': '/lingkungan',
    'info-kota-dan-udara': '/lingkungan',
    'lingkungan': '/lingkungan',
    'kontak-darurat': '/darurat',
    'darurat': '/darurat',
    'tentang-kami': '/tentang',
    'tentang': '/tentang',
    'pedoman-komunitas': '/tentang',
    'form-laporan': '/lapor',
    'lapor-warga': '/lapor',
    'buat-laporan': '/lapor',
    'lapor': '/lapor',
    'masuk': '/login',
    'login': '/login',
    'sign-up': '/signup',
    'register': '/signup',
    'daftar': '/signup',
    'profil': '/profil',
    'akun': '/profil',
    'profil-akun': '/profil'
  };

  // Relative file paths for fallback or file:// protocol
  const RELATIVE_FILE_MAP = {
    '/': '/stitch_biar_kito_tau_portal_ui/beranda_portal_biar_kito_tau_fullscreen_map_revisi/code.html',
    '/berita': '/stitch_biar_kito_tau_portal_ui/portal_berita_biar_kito_tau_palembang/code.html',
    '/loker': '/stitch_biar_kito_tau_portal_ui/loker_dan_event_biar_kito_tau_palembang/code.html',
    '/agenda': '/stitch_biar_kito_tau_portal_ui/loker_dan_event_agenda_kota_palembang/code.html',
    '/lingkungan': '/stitch_biar_kito_tau_portal_ui/info_lingkungan_kota_biar_kito_tau_palembang/code.html',
    '/darurat': '/stitch_biar_kito_tau_portal_ui/kontak_darurat_biar_kito_tau_palembang/code.html',
    '/tentang': '/stitch_biar_kito_tau_portal_ui/tentang_kami_biar_kito_tau_palembang/code.html',
    '/lapor': '/stitch_biar_kito_tau_portal_ui/formulir_buat_laporan_biar_kito_tau_palembang/code.html',
    '/login': '/stitch_biar_kito_tau_portal_ui/halaman_log_in_biar_kito_tau_palembang/code.html',
    '/signup': '/stitch_biar_kito_tau_portal_ui/halaman_sign_up_biar_kito_tau_palembang/code.html',
    '/profil': '/stitch_biar_kito_tau_portal_ui/profil_akun_user_biar_kito_tau_palembang/code.html'
  };

  function navigateTo(routeKey) {
    const cleanRoute = ROUTE_MAP[routeKey] || routeKey;
    if (isDirectFile) {
      const targetFile = RELATIVE_FILE_MAP[cleanRoute] || cleanRoute;
      // If we are currently inside a subfolder, adjust relative path
      const currentPath = window.location.pathname;
      if (currentPath.includes('/stitch_biar_kito_tau_portal_ui/')) {
        const rootRel = '../..' + targetFile;
        window.location.href = rootRel;
      } else {
        window.location.href = '.' + targetFile;
      }
    } else {
      window.location.href = cleanRoute;
    }
  }

  // Toast notification helper
  function showToast(message, type = 'success') {
    let container = document.getElementById('portal-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'portal-toast-container';
      container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:999999;display:flex;flex-direction:column;gap:10px;pointer-events:none;';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const bgColor = type === 'success' ? '#00288e' : type === 'error' ? '#ba1a1a' : '#006398';
    toast.style.cssText = `background:${bgColor};color:#ffffff;padding:14px 20px;border-radius:12px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.3);font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;display:flex;align-items:center;gap:10px;max-width:380px;pointer-events:auto;animation:toastIn 0.3s ease-out;`;

    toast.innerHTML = `
      <span class="material-symbols-outlined" style="font-size:20px;">${type === 'success' ? 'check_circle' : 'info'}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease-in';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Add CSS animations
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    @keyframes toastIn {
      from { opacity: 0; transform: translateY(20px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
  `;
  document.head.appendChild(styleEl);

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Global Click Navigation Handler
    document.addEventListener('click', (e) => {
      // Check for data-path
      const pathEl = e.target.closest('[data-path]');
      if (pathEl) {
        const rawPath = pathEl.getAttribute('data-path').trim().toLowerCase();
        if (ROUTE_MAP[rawPath]) {
          e.preventDefault();
          navigateTo(rawPath);
          return;
        }
      }

      // Check for Brand Logo click
      const logoEl = e.target.closest('header a[href="#"], header .flex.items-center.gap-2.group, header .flex.items-center.gap-3.shrink-0');
      if (logoEl && (logoEl.textContent.includes('Biar Kito Tau') || logoEl.querySelector('span')?.textContent?.includes('location_on'))) {
        e.preventDefault();
        navigateTo('/');
        return;
      }

      // Check for "Kembali ke Beranda"
      const backHome = e.target.closest('a');
      if (backHome && backHome.textContent.includes('Kembali ke Beranda')) {
        e.preventDefault();
        navigateTo('/');
        return;
      }

      // Check for Auth buttons / links
      if (backHome) {
        const text = backHome.textContent.trim().toLowerCase();
        const href = backHome.getAttribute('href') || '';
        
        if (href === '#login' || text === 'masuk' || text === 'log in') {
          e.preventDefault();
          navigateTo('login');
          return;
        }
        if (href === '#signup' || text === 'daftar' || text === 'sign up') {
          e.preventDefault();
          navigateTo('signup');
          return;
        }
        if (text.includes('buat laporan') || text.includes('+ buat laporan')) {
          e.preventDefault();
          navigateTo('lapor');
          return;
        }
        if (text.includes('lihat semua berita') || text.includes('baca selengkapnya')) {
          e.preventDefault();
          navigateTo('berita');
          return;
        }
        if (text.includes('daftar lowongan') || text.includes('lihat lowongan')) {
          e.preventDefault();
          navigateTo('loker');
          return;
        }
        if (text.includes('lihat agenda') || text.includes('agenda kota')) {
          e.preventDefault();
          navigateTo('agenda');
          return;
        }
      }

      // Check for User Avatar click in Header
      const avatarEl = e.target.closest('header .w-8.h-8.rounded-full, header img[alt*="Profile"], header .flex.items-center.gap-space-sm.pl-space-xs');
      if (avatarEl) {
        e.preventDefault();
        navigateTo('profil');
        return;
      }

      // Check for Map Bottom Bar click (ISPU, Musi, Cuaca)
      const bottomDock = e.target.closest('.absolute.bottom-4.left-1\\/2');
      if (bottomDock) {
        e.preventDefault();
        navigateTo('lingkungan');
        return;
      }

      // Sidebar Collapse Toggle in Beranda
      const toggleSidebarBtn = e.target.closest('button[aria-label*="sidebar"], button[title*="Sembunyikan Panel"], button[title*="Panel"]');
      if (toggleSidebarBtn) {
        e.preventDefault();
        const sidebar = toggleSidebarBtn.closest('aside');
        if (sidebar) {
          const isCollapsed = sidebar.getAttribute('data-collapsed') === 'true';
          const chevron = toggleSidebarBtn.querySelector('.material-symbols-outlined');
          if (isCollapsed) {
            sidebar.style.transform = 'translateX(0)';
            sidebar.setAttribute('data-collapsed', 'false');
            toggleSidebarBtn.title = 'Sembunyikan Panel';
            if (chevron) chevron.textContent = 'chevron_left';
          } else {
            sidebar.style.transform = 'translateX(-100%)';
            sidebar.style.transition = 'transform 0.3s ease-in-out';
            sidebar.setAttribute('data-collapsed', 'true');
            toggleSidebarBtn.title = 'Tampilkan Panel';
            if (chevron) chevron.textContent = 'chevron_right';
          }
        }
        return;
      }
    });

    // 2. Interactive Form Handling
    // Laporan Form Submit
    const reportForm = document.querySelector('form') || document.querySelector('#reportForm');
    const submitReportBtn = Array.from(document.querySelectorAll('button')).find(b => 
      b.textContent.includes('Kirim Laporan') || b.textContent.includes('Publikasikan Laporan')
    );
    if (submitReportBtn) {
      submitReportBtn.addEventListener('click', (e) => {
        e.preventDefault();
        submitReportBtn.disabled = true;
        submitReportBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[18px]">sync</span> Mengirim...';
        
        setTimeout(() => {
          showToast('Laporan berhasil dikirim! ID Tiket: #PLB-2026-0892. Tim Patroli Digital Palembang segera memverifikasi.', 'success');
          submitReportBtn.disabled = false;
          submitReportBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">check</span> Laporan Terkirim!';
          setTimeout(() => {
            navigateTo('profil');
          }, 1800);
        }, 1000);
      });
    }

    // Login Form Submit
    const loginBtn = Array.from(document.querySelectorAll('button')).find(b => 
      b.textContent.trim().toLowerCase() === 'masuk ke portal' || b.textContent.trim().toLowerCase() === 'masuk'
    );
    if (loginBtn && window.location.href.includes('log_in') || window.location.pathname === '/login') {
      loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginBtn.disabled = true;
        loginBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[18px]">sync</span> Memproses...';
        setTimeout(() => {
          showToast('Selamat datang kembali, Ahmad Wong Kito!', 'success');
          setTimeout(() => navigateTo('/'), 1200);
        }, 800);
      });
    }

    // Sign Up Form Submit
    const signupBtn = Array.from(document.querySelectorAll('button')).find(b => 
      b.textContent.trim().toLowerCase() === 'daftar akun warga' || b.textContent.trim().toLowerCase() === 'daftar sekarang'
    );
    if (signupBtn && window.location.href.includes('sign_up') || window.location.pathname === '/signup') {
      signupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        signupBtn.disabled = true;
        signupBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[18px]">sync</span> Mendaftarkan...';
        setTimeout(() => {
          showToast('Pendaftaran berhasil! Selamat bergabung di Portal Palembang.', 'success');
          setTimeout(() => navigateTo('profil'), 1200);
        }, 800);
      });
    }

    // 3. Kontak Darurat Search Filter
    const searchInput = document.getElementById('emergencySearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('main section .grid > div, main section .grid > article');
        cards.forEach(card => {
          if (!query) {
            card.style.display = '';
            return;
          }
          const text = card.textContent.toLowerCase();
          card.style.display = text.includes(query) ? '' : 'none';
        });
      });
    }

    // 4. Highlight current active nav item based on pathname
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
      const dataPath = link.getAttribute('data-path');
      if (!dataPath) return;
      const mappedRoute = ROUTE_MAP[dataPath];
      if (mappedRoute && (currentPath === mappedRoute || currentPath.endsWith(mappedRoute))) {
        link.setAttribute('aria-current', 'page');
      }
    });
  });

  window.__portalNavigate = navigateTo;
})();
