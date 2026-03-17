const libraries = [
    // NERUL / SEAWOODS
    { name: "Ideal Study Library", area: "Nerul West", fee: 1500, is24h: true, hasAC: true, isStation: true, crowd: "High (UPSC)", silence: "Strict", light: "LED", facilities: "WiFi, Power-back", map: "Ideal+Study+Library+Nerul" },
    { name: "Lakshyashila Study Room", area: "Nerul East", fee: 1400, is24h: false, hasAC: true, isStation: true, crowd: "Very High", silence: "Extreme", light: "Table Lamps", facilities: "AC, Water", map: "Lakshyashila+Nerul" },
    { name: "Takshshila Study Library", area: "Nerul", fee: 1200, is24h: false, hasAC: true, isStation: false, crowd: "Medium", silence: "High", light: "Standard", facilities: "WiFi", map: "Takshshila+Study+Nerul" },
    { name: "Scholars Study Room", area: "Nerul", fee: 1300, is24h: true, hasAC: true, isStation: false, crowd: "High", silence: "Moderate", light: "Bright", facilities: "24/7 Security", map: "Scholars+Study+Nerul" },
    { name: "The Reading Room", area: "Seawoods", fee: 1700, is24h: true, hasAC: true, isStation: true, crowd: "Aspirants", silence: "Extreme", light: "Personalized", facilities: "WiFi, Tea/Coffee", map: "The+Reading+Room+Seawoods" },
    { name: "Seawoods Study Library", area: "Seawoods", fee: 1450, is24h: false, hasAC: true, isStation: true, crowd: "Medium", silence: "High", light: "Natural", facilities: "AC, WiFi", map: "Seawoods+Study+Library" },

    // VASHI / SANPADA / JUINAGAR
    { name: "Lakshyashila Vashi", area: "Vashi", fee: 1600, is24h: false, hasAC: true, isStation: false, crowd: "High", silence: "Strict", light: "Bright", facilities: "WiFi, Cabins", map: "Lakshyashila+Vashi" },
    { name: "ShikshaGram Study Room", area: "Juinagar", fee: 1100, is24h: true, hasAC: true, isStation: true, crowd: "Very High", silence: "Moderate", light: "LED", facilities: "Power-back", map: "Shikshagram+Juinagar" },
    { name: "Vashi Reading Library", area: "Vashi", fee: 1200, is24h: false, hasAC: false, isStation: false, crowd: "Medium", silence: "Moderate", light: "Natural", facilities: "Newspapers", map: "Vashi+Reading+Library" },
    { name: "Meenatai Thackeray Library", area: "Vashi", fee: 0, is24h: false, hasAC: false, isStation: false, crowd: "General", silence: "Low", light: "Bright", facilities: "Public Access", map: "Meenatai+Thackeray+Library" },
    { name: "NMMC Public Library", area: "Vashi", fee: 0, is24h: false, hasAC: false, isStation: false, crowd: "Mixed", silence: "Moderate", light: "Standard", facilities: "Reference Books", map: "NMMC+Library+Vashi" },
    { name: "Sanpada Study Centre", area: "Sanpada", fee: 1000, is24h: false, hasAC: true, isStation: true, crowd: "Student Hub", silence: "High", light: "LED", facilities: "WiFi", map: "Sanpada+Study+Centre" },

    // KHARGHAR
    { name: "Global Study Library", area: "Kharghar", fee: 1400, is24h: true, hasAC: true, isStation: false, crowd: "Professional", silence: "High", light: "Soft White", facilities: "WiFi, Pantry", map: "Global+Study+Kharghar" },
    { name: "Infinity Library", area: "Kharghar", fee: 1850, is24h: true, hasAC: true, isStation: false, crowd: "UPSC/CA", silence: "Strict", light: "Focus Lamps", facilities: "High-speed WiFi", map: "Infinity+Library+Kharghar" },
    { name: "Readers Hub Library", area: "Kharghar", fee: 1300, is24h: true, hasAC: true, isStation: false, crowd: "Mixed", silence: "High", light: "LED", facilities: "Locker, WiFi", map: "Readers+Hub+Kharghar" },
    { name: "Study Lounge Library", area: "Kharghar", fee: 1500, is24h: true, hasAC: true, isStation: false, crowd: "Aspirants", silence: "High", light: "LED", facilities: "WiFi, Water", map: "Study+Lounge+Kharghar" },
    { name: "Kharghar Study Circle", area: "Kharghar", fee: 1200, is24h: false, hasAC: true, isStation: false, crowd: "Students", silence: "High", light: "Standard", facilities: "WiFi", map: "Kharghar+Study+Circle" },
    { name: "Belpada Reading Library", area: "Kharghar", fee: 900, is24h: false, hasAC: false, isStation: true, crowd: "Local", silence: "Moderate", light: "Natural", facilities: "Affordable", map: "Belpada+Reading+Library" },

    // CBD BELAPUR
    { name: "NMMC CBD Public Library", area: "Belapur", fee: 0, is24h: false, hasAC: false, isStation: false, crowd: "Public", silence: "Low", light: "Bright", facilities: "Magazines", map: "NMMC+Belapur" },
    { name: "Goregaon Study Centre", area: "Belapur", fee: 1400, is24h: true, hasAC: true, isStation: true, crowd: "Medium", silence: "High", light: "Standard", facilities: "WiFi", map: "Goregaon+Study+Belapur" },
    { name: "Belapur Reading Room", area: "Belapur", fee: 1100, is24h: false, hasAC: true, isStation: true, crowd: "Students", silence: "Moderate", light: "Standard", facilities: "AC, WiFi", map: "Belapur+Reading+Room" },
    { name: "CIDCO Study Library", area: "Belapur", fee: 300, is24h: false, hasAC: false, isStation: true, crowd: "Public", silence: "Moderate", light: "Natural", facilities: "Cheap", map: "CIDCO+Study+Belapur" },

    // KOPAR KHAIRANE / GHANSOLI
    { name: "STUDY SPACE", area: "Kopar Khairane", fee: 1500, is24h: true, hasAC: true, isStation: false, crowd: "High", silence: "Strict", light: "Focus LED", facilities: "Locker, WiFi", map: "Study+Space+Kopar+Khairane" },
    { name: "KRISHNA STUDY LIBRARY", area: "Ghansoli", fee: 1250, is24h: false, hasAC: true, isStation: true, crowd: "Medium", silence: "High", light: "LED", facilities: "WiFi", map: "Krishna+Study+Ghansoli" },
    { name: "Sai Library", area: "Kopar Khairane", fee: 1100, is24h: true, hasAC: true, isStation: false, crowd: "Aspirants", silence: "High", light: "Standard", facilities: "WiFi", map: "Sai+Library+Kopar+Khairane" },
    { name: "Shikshagram KK", area: "Kopar Khairane", fee: 1200, is24h: true, hasAC: true, isStation: false, crowd: "High", silence: "High", light: "LED", facilities: "Power-back", map: "Shikshagram+Kopar+Khairane" },

    // KAMOTHE / PANVEL
    { name: "Jyoti Study Centre", area: "Kamothe", fee: 1300, is24h: false, hasAC: true, isStation: false, crowd: "Aspirants", silence: "Moderate", light: "Standard", facilities: "WiFi", map: "Jyoti+Study+Kamothe" },
    { name: "Kamothe Reading Library", area: "Kamothe", fee: 1000, is24h: false, hasAC: false, isStation: false, crowd: "Local", silence: "Moderate", light: "Natural", facilities: "Cheap", map: "Kamothe+Reading+Library" },
    { name: "Panvel Study Room", area: "Panvel", fee: 1100, is24h: true, hasAC: true, isStation: true, crowd: "Very High", silence: "High", light: "LED", facilities: "WiFi", map: "Panvel+Study+Room" },
    { name: "Sector 8 Kamothe Study", area: "Kamothe", fee: 1200, is24h: false, hasAC: true, isStation: false, crowd: "Medium", silence: "Moderate", light: "Standard", facilities: "WiFi", map: "Kamothe+Sector+8+Study" }
];

const grid = document.getElementById('libraryGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

let filters = { text: "", is24h: false, hasAC: false, isCheap: false, isStation: false };

function render() {
    const filtered = libraries.filter(lib => {
        const matchesText = lib.name.toLowerCase().includes(filters.text) || lib.area.toLowerCase().includes(filters.text);
        const matches24h = !filters.is24h || lib.is24h;
        const matchesAC = !filters.hasAC || lib.hasAC;
        const matchesCheap = !filters.isCheap || (lib.fee > 0 && lib.fee < 2000);
        const matchesStation = !filters.isStation || lib.isStation;
        return matchesText && matches24h && matchesAC && matchesCheap && matchesStation;
    });

    grid.innerHTML = filtered.map(lib => `
        <div class="card">
            <div class="meta">${lib.area}</div>
            <h3>${lib.name}</h3>
            <div class="info-row">Crowd: <span>${lib.crowd}</span></div>
            <div class="info-row">Silence: <span>${lib.silence}</span></div>
            <div class="info-row">Lighting: <span>${lib.light}</span></div>
            <div class="info-row">Fees: <span>${lib.fee === 0 ? "Free" : "₹"+lib.fee+"/mo"}</span></div>
            <div class="features-box">
                <span class="f-tag">${lib.facilities}</span>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lib.name + " " + lib.area)}" target="_blank" class="btn-map">📍 Open Maps</a>
        </div>
    `).join('');
}

searchInput.addEventListener('input', (e) => { filters.text = e.target.value.toLowerCase(); render(); });
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.dataset.filter;
        filters[type] = !filters[type];
        btn.classList.toggle('active');
        render();
    });
});

render();