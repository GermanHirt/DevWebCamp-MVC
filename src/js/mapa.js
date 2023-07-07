if(document.querySelector('#mapa')) {

    const lat= -38.031742465497466
    const lng= -57.53958469211869

    const zoom = 16 

    const map = L.map('mapa').setView([lat, lng], zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
        .bindPopup(`
            <h2 class="mapa_heading">DevWebCamp</h2>
            <p class="mapa__texto">Centro de Convenciones Sheraton Mar del Plata</p>
        `)
        .openPopup();
}