    // URL file JSON yang ingin diambil
    $(document).ready(function() {
        // URL file JSON yang ingin diambil
        const jsonUrl = './js/judul_headline.json';
    
        // Fungsi untuk mengambil data JSON dan menampilkan dalam tabel
        function fetchAndDisplayData() {
            // Mengambil data JSON
            $.getJSON(jsonUrl, function(data) {
                // Mendapatkan elemen tbody dari tabel
                const $tbody = $('#data-table tbody');
    
                // Mengulangi setiap item data dan membuat baris tabel
                $.each(data, function(index, item) {
                    // Membuat elemen baris tabel
                    const $row = $('<tr>');
    
                    // Membuat elemen kolom untuk setiap atribut data
                    const $kategoriCell = $('<td>').text(item.kategori);
                    const $judulHeadlineCell = $('<td>').text(item.judul_headline);
                    const $waktuPublishCell = $('<td>').text(item.waktu_publish);
                    const $waktuScrapingCell = $('<td>').text(item.waktu_scraping);
    
                    // Menambahkan sel ke dalam baris
                    $row.append($kategoriCell, $judulHeadlineCell, $waktuPublishCell, $waktuScrapingCell);
    
                    // Menambahkan baris ke dalam tabel
                    $tbody.append($row);
                });
            }).fail(function(error) {
                console.error('Error fetching data:', error);
            });
        }
    
        // Panggil fungsi untuk mengambil dan menampilkan data saat halaman dimuat
        fetchAndDisplayData();
    });
    
