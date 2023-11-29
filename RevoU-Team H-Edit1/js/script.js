// Ambil semua elemen gambar kota
const destinations = document.querySelectorAll('.city-logo');

destinations.forEach(logo => {
    logo.style.cursor = 'pointer';

    logo.addEventListener('click', function() {
        const city = this.alt;
        window.location.href = `/destination/${city}.html`; // Mengarahkan ke halaman yang sesuai
    });
});
