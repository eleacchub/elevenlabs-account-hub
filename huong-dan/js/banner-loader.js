/**
 * Tự động nhúng banner ElevenLabs vào tất cả các trang
 */
document.addEventListener("DOMContentLoaded", function() {
    // Tạo banner trực tiếp trong script thay vì tải từ file
    const bannerHTML = `
    <!-- Banner ElevenLabs Hub -->
    <div class="banner-hub">
        <div class="banner-content">
            <span class="icon">⚡</span>
            <div>
                <div class="banner-title">ElevenLabs Account Hub</div>
                <div class="banner-desc">Truy cập trực tiếp vào công cụ và bắt đầu sử dụng ngay hôm nay</div>
            </div>
        </div>
        <a href="https://eleacchub.github.io/elevenlabs-account-hub/index.html#" class="banner-btn" target="_blank">Tải Ngay</a>
    </div>
    `;
    
    // Chèn banner vào đầu phần content
    const contentDiv = document.querySelector('.content');
    if (contentDiv) {
        // Chèn banner vào đầu phần nội dung chính
        contentDiv.insertAdjacentHTML('afterbegin', bannerHTML);
    }
}); 
