document.getElementById('download-btn').addEventListener('click', function() {
    // التأكد من أن الرابط صحيح
    const pdfUrl = 'menu.pdf';  // ضع هنا رابط ملف PDF المناسب
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'منيو المطعم.pdf';  // اسم الملف عند التحميل
    link.click();
});

// إضافة تأثيرات التفاعل مع الأيقونات
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.color = '#28a745';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
        icon.style.color = '';
    });
});
