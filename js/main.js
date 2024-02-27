 const mntoggle = document.querySelector('.menu-toggle input');
 const nav = document.querySelector('nav ul');
 const footer = document.getElementById('current-date');

mntoggle.addEventListener('click',function(){
    nav.classList.toggle('menushow');
})

function updateDate() {
    // Mendapatkan waktu sekarang
    const now = new Date();
    // Mendapatkan tanggal, bulan, dan tahun
    const date = now.getDate();
    const month = now.getMonth() + 1; // Perhatikan bulan dimulai dari 0
    const year = now.getFullYear();

    // Format tanggal dan bulan agar selalu dua digit
    const formattedDate = date < 10 ? '0' + date : date;
    const formattedMonth = month < 10 ? '0' + month : month;

    // Membuat string tanggal dalam format "DD MMMM YYYY"
    const dateString = formattedDate + ' ' + getMonthName(month) + ' ' + year;

    // Menampilkan tanggal di footer
    footer.textContent = `Sekarang Tanggal ${dateString}`;
}

// Fungsi untuk mendapatkan nama bulan
function getMonthName(month) {
    const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    return monthNames[month - 1];
}

// Memanggil fungsi updateDate untuk pertama kali
updateDate();

// Memanggil fungsi updateDate setiap detik untuk tetap sinkron dengan waktu sekarang
setInterval(updateDate, 1000);


