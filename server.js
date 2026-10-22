const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 8080;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const ROUTES = {
  '/': 'stitch_biar_kito_tau_portal_ui/beranda_portal_biar_kito_tau_fullscreen_map_revisi/code.html',
  '/beranda': 'stitch_biar_kito_tau_portal_ui/beranda_portal_biar_kito_tau_fullscreen_map_revisi/code.html',
  '/peta': 'stitch_biar_kito_tau_portal_ui/beranda_portal_biar_kito_tau_fullscreen_map_revisi/code.html',
  '/berita': 'stitch_biar_kito_tau_portal_ui/portal_berita_biar_kito_tau_palembang/code.html',
  '/loker': 'stitch_biar_kito_tau_portal_ui/loker_dan_event_biar_kito_tau_palembang/code.html',
  '/event': 'stitch_biar_kito_tau_portal_ui/loker_dan_event_biar_kito_tau_palembang/code.html',
  '/agenda': 'stitch_biar_kito_tau_portal_ui/loker_dan_event_agenda_kota_palembang/code.html',
  '/lingkungan': 'stitch_biar_kito_tau_portal_ui/info_lingkungan_kota_biar_kito_tau_palembang/code.html',
  '/cuaca': 'stitch_biar_kito_tau_portal_ui/info_lingkungan_kota_biar_kito_tau_palembang/code.html',
  '/darurat': 'stitch_biar_kito_tau_portal_ui/kontak_darurat_biar_kito_tau_palembang/code.html',
  '/kontak': 'stitch_biar_kito_tau_portal_ui/kontak_darurat_biar_kito_tau_palembang/code.html',
  '/tentang': 'stitch_biar_kito_tau_portal_ui/tentang_kami_biar_kito_tau_palembang/code.html',
  '/lapor': 'stitch_biar_kito_tau_portal_ui/formulir_buat_laporan_biar_kito_tau_palembang/code.html',
  '/buat-laporan': 'stitch_biar_kito_tau_portal_ui/formulir_buat_laporan_biar_kito_tau_palembang/code.html',
  '/login': 'stitch_biar_kito_tau_portal_ui/halaman_log_in_biar_kito_tau_palembang/code.html',
  '/masuk': 'stitch_biar_kito_tau_portal_ui/halaman_log_in_biar_kito_tau_palembang/code.html',
  '/signup': 'stitch_biar_kito_tau_portal_ui/halaman_sign_up_biar_kito_tau_palembang/code.html',
  '/daftar': 'stitch_biar_kito_tau_portal_ui/halaman_sign_up_biar_kito_tau_palembang/code.html',
  '/profil': 'stitch_biar_kito_tau_portal_ui/profil_akun_user_biar_kito_tau_palembang/code.html',
  '/akun': 'stitch_biar_kito_tau_portal_ui/profil_akun_user_biar_kito_tau_palembang/code.html'
};

function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Halaman Tidak Ditemukan');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('500 Kesalahan Server: ' + err.code);
      }
      return;
    }

    // Auto-inject nav.js into HTML files for interactive client navigation
    if (contentType && contentType.startsWith('text/html')) {
      let htmlStr = content.toString('utf-8');
      if (!htmlStr.includes('/nav.js') && !htmlStr.includes('nav.js')) {
        const injectScript = '\n<!-- Portal Navigation & Interaction Enhancement -->\n<script src="/nav.js"></script>\n</body>';
        htmlStr = htmlStr.replace('</body>', injectScript);
        content = Buffer.from(htmlStr, 'utf-8');
      }
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });
    res.end(content);
  });
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // 1. Check clean route mapping
  if (ROUTES[pathname]) {
    const targetPath = path.join(ROOT_DIR, ROUTES[pathname]);
    return serveFile(res, targetPath, 'text/html; charset=utf-8');
  }

  // 2. Direct nav.js handler
  if (pathname === '/nav.js') {
    const navPath = path.join(ROOT_DIR, 'nav.js');
    return serveFile(res, navPath, 'application/javascript; charset=utf-8');
  }

  // 3. Static file handling
  let safePath = path.normalize(path.join(ROOT_DIR, pathname));
  if (!safePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('403 Akses Ditolak');
  }

  fs.stat(safePath, (err, stats) => {
    if (err) {
      // If not found, fallback to Beranda
      const fallbackPath = path.join(ROOT_DIR, ROUTES['/']);
      return serveFile(res, fallbackPath, 'text/html; charset=utf-8');
    }

    if (stats.isDirectory()) {
      // Check for index.html or code.html in directory
      const indexPath = path.join(safePath, 'index.html');
      const codePath = path.join(safePath, 'code.html');

      if (fs.existsSync(indexPath)) {
        return serveFile(res, indexPath, 'text/html; charset=utf-8');
      } else if (fs.existsSync(codePath)) {
        return serveFile(res, codePath, 'text/html; charset=utf-8');
      } else {
        const fallbackPath = path.join(ROOT_DIR, ROUTES['/']);
        return serveFile(res, fallbackPath, 'text/html; charset=utf-8');
      }
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    serveFile(res, safePath, contentType);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Portal Biar Kito Tau Kota Palembang Berjalan!`);
  console.log(`📡 URL Lokal:   http://localhost:${PORT}`);
  console.log(`📡 URL Network: http://127.0.0.1:${PORT}`);
  console.log(`======================================================`);
  console.log(`📌 Rute yang tersedia:`);
  console.log(`   - Peta Utama & Beranda:  http://localhost:${PORT}/`);
  console.log(`   - Portal Berita:         http://localhost:${PORT}/berita`);
  console.log(`   - Loker & Event:         http://localhost:${PORT}/loker`);
  console.log(`   - Agenda Kota:           http://localhost:${PORT}/agenda`);
  console.log(`   - Info Lingkungan Kota:  http://localhost:${PORT}/lingkungan`);
  console.log(`   - Kontak Darurat:        http://localhost:${PORT}/darurat`);
  console.log(`   - Tentang Kami:          http://localhost:${PORT}/tentang`);
  console.log(`   - Formulir Lapor Warga:  http://localhost:${PORT}/lapor`);
  console.log(`   - Masuk / Log In:        http://localhost:${PORT}/login`);
  console.log(`   - Daftar / Sign Up:      http://localhost:${PORT}/signup`);
  console.log(`   - Profil Akun Warga:     http://localhost:${PORT}/profil`);
  console.log(`======================================================\n`);
});
