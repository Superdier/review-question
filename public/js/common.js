// --- Dark Mode & Theme Logic ---
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    const themeIcon = isDarkMode ? '☀️' : '🌙';

    // Cập nhật cả hai nút (desktop và mobile) nếu chúng tồn tại
    const mobileToggle = document.getElementById('theme-toggle');
    const desktopToggle = document.getElementById('theme-toggle-desktop');
    if (mobileToggle) mobileToggle.textContent = themeIcon;
    if (desktopToggle) desktopToggle.textContent = themeIcon;

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// --- Navigation Menu Logic ---
function generateNavMenu() {
    const currentPage = window.location.pathname.split("/").pop();
    const navDesktop = document.getElementById('common-nav');
    const navMobile = document.getElementById('nav-menu-mobile');
    const breadcrumbsEl = document.getElementById('breadcrumbs');

    // Thoát nếu không tìm thấy các phần tử cần thiết
    if (!navDesktop || !navMobile || !breadcrumbsEl) return;

    const links = [
        { href: 'index.html', text: 'Nhập câu hỏi', icon: '📘' },
        { href: 'review.html', text: 'Ôn tập', icon: '📖' },
        { href: 'statistics.html', text: 'Thống kê', icon: '📊' }
    ];

    let activeLinkText = '';
    const navHTML = links.map(link => {
        const isActive = currentPage === link.href;
        if (isActive) {
            activeLinkText = link.text;
        }
        return `<a href="./${link.href}" class="nav-item ${isActive ? 'active' : ''}" ${isActive ? 'aria-current="page"' : ''}>${link.icon} ${link.text}</a>`;
    }).join('');

    // Điền nội dung cho cả hai menu
    navDesktop.innerHTML = navHTML;
    navMobile.innerHTML = navHTML;

    // Tạo breadcrumbs
    if (currentPage === 'index.html') {
        breadcrumbsEl.innerHTML = `<strong>Trang chủ</strong>`;
    } else {
        breadcrumbsEl.innerHTML = `<a href="./index.html">Trang chủ</a> / <strong>${activeLinkText}</strong>`;
    }
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu-overlay').classList.toggle('active');
}

// --- Chạy các hàm khởi tạo khi DOM đã sẵn sàng ---
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Áp dụng theme đã lưu
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    // Cập nhật icon cho theme (phải chạy sau khi DOM load để tìm được element)
    const isDarkMode = document.body.classList.contains('dark-mode');
    const themeIcon = isDarkMode ? '☀️' : '🌙';
    const mobileToggle = document.getElementById('theme-toggle');
    const desktopToggle = document.getElementById('theme-toggle-desktop');
    if (mobileToggle) mobileToggle.textContent = themeIcon;
    if (desktopToggle) desktopToggle.textContent = themeIcon;

    // 2. Tạo menu điều hướng
    generateNavMenu();

    // 3. Xóa class 'preload' để bật lại hiệu ứng chuyển động
    setTimeout(() => document.body.classList.remove('preload'), 100);
});