/**
 * Tự động nhúng banner ElevenLabs vào tất cả các trang
 */
document.addEventListener("DOMContentLoaded", function() {
    // Xác định đường dẫn tới banner.html dựa vào vị trí hiện tại
    let bannerPath = 'banner.html';
    
    // Điều chỉnh đường dẫn nếu đang ở thư mục con
    if (window.location.pathname.includes('/')) {
        const pathSegments = window.location.pathname.split('/').filter(Boolean);
        // Nếu đang ở thư mục con, điều chỉnh đường dẫn
        if (pathSegments.length > 1) {
            bannerPath = '../banner.html';
        }
    }
    
    // Tải nội dung banner và chèn vào đầu phần content
    fetch(bannerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Không thể tải banner');
            }
            return response.text();
        })
        .then(data => {
            const contentDiv = document.querySelector('.content');
            if (contentDiv) {
                // Chèn banner vào đầu phần nội dung chính
                contentDiv.insertAdjacentHTML('afterbegin', data);
            }
        })
        .catch(error => {
            console.error('Lỗi khi tải banner:', error);
        });
}); 
