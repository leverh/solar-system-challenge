// Planet Information
const planetData = {
    mercury: {
        name: "Mercury",
        type: "Terrestrial Planet",
        diameter: "4,880 km",
        temperature: "-173°C to 427°C",
        mass: "3.30 × 10²³ kg",
        distance: "57.9 million km",
        orbitalPeriod: "88 Earth days",
        rotationPeriod: "59 Earth days",
        surfaceTemperature: "-173°C to 427°C",
        atmosphereComposition: "Trace amounts of oxygen, sodium, hydrogen, helium, and potassium",
        numberOfMoons: 0,
        image: "images/mercury2.webp",
    },
    venus: {
        name: "Venus",
        type: "Terrestrial Planet",
        diameter: "12,104 km",
        temperature: "462°C",
        mass: "4.87 × 10²⁴ kg",
        distance: "108.2 million km",
        orbitalPeriod: "225 Earth days",
        rotationPeriod: "243 Earth days (retrograde)",
        surfaceTemperature: "462°C",
        atmosphereComposition: "96.5% carbon dioxide, 3.5% nitrogen",
        numberOfMoons: 0,
        image: "images/venus2.jpg",
    },
    earth: {
        name: "Earth",
        type: "Terrestrial Planet",
        diameter: "12,742 km",
        temperature: "-88°C to 58°C",
        mass: "5.97 × 10²⁴ kg",
        distance: "149.6 million km",
        orbitalPeriod: "365.25 days",
        rotationPeriod: "24 hours",
        surfaceTemperature: "-88°C to 58°C",
        atmosphereComposition: "78% nitrogen, 21% oxygen, 1% other gases",
        numberOfMoons: 1,
        image: "images/earth2.jpg",
    },
    mars: {
        name: "Mars",
        type: "Terrestrial Planet",
        diameter: "6,779 km",
        temperature: "-87°C to -5°C",
        mass: "6.42 × 10²³ kg",
        distance: "227.9 million km",
        orbitalPeriod: "687 Earth days",
        rotationPeriod: "24.6 hours",
        surfaceTemperature: "-87°C to -5°C",
        atmosphereComposition: "95% carbon dioxide, 2.7% nitrogen, 1.6% argon",
        numberOfMoons: 2,
        image: "images/mars2.jpg",
    },
    jupiter: {
        name: "Jupiter",
        type: "Gas Giant",
        diameter: "139,820 km",
        temperature: "-145°C",
        mass: "1.90 × 10²⁷ kg",
        distance: "778.5 million km",
        orbitalPeriod: "11.86 Earth years",
        rotationPeriod: "9 hours, 56 minutes",
        surfaceTemperature: "-145°C",
        atmosphereComposition: "90% hydrogen, 10% helium, trace amounts of methane and ammonia",
        numberOfMoons: 92,
        image: "images/jupiter2.jpg",
    },
    saturn: {
        name: "Saturn",
        type: "Gas Giant",
        diameter: "116,460 km",
        temperature: "-178°C",
        mass: "5.68 × 10²⁶ kg",
        distance: "1.43 billion km",
        orbitalPeriod: "29.45 Earth years",
        rotationPeriod: "10 hours, 33 minutes",
        surfaceTemperature: "-178°C",
        atmosphereComposition: "96% Hydrogen, 3% Helium",
        numberOfMoons: "83 (Notable: Titan, Enceladus)",
        image: "images/saturn2.jpg",
    },
    uranus: {
        name: "Uranus",
        type: "Ice Giant",
        diameter: "50,724 km",
        temperature: "-224°C",
        mass: "8.68 × 10²⁵ kg",
        distance: "2.87 billion km",
        orbitalPeriod: "84 Earth years",
        rotationPeriod: "17 hours, 14 minutes",
        surfaceTemperature: "-224°C",
        atmosphereComposition: "83% Hydrogen, 15% Helium, 2% Methane",
        numberOfMoons: "27 (Notable: Titania, Oberon, Miranda)",
        image: "images/uranus2.jpg",
    },
    neptune: {
        name: "Neptune",
        type: "Ice Giant",
        diameter: "49,244 km",
        temperature: "-214°C",
        mass: "1.02 × 10²⁶ kg",
        distance: "4.5 billion km",
        orbitalPeriod: "164.8 Earth years",
        rotationPeriod: "16 hours, 6 minutes",
        surfaceTemperature: "-214°C",
        atmosphereComposition: "80% Hydrogen, 19% Helium, 1% Methane",
        numberOfMoons: "14 (Notable: Triton)",
        image: "images/neptune2.jpg",
    },
    sun: {
        name: "Sun",
        type: "Star (Yellow Dwarf, G-Type Main Sequence Star)",
        diameter: "1,391,000 km",
        temperature: "5,500°C (surface), 15,000,000°C (core)",
        mass: "1.989 × 10³⁰ kg",
        distance: "0 km (center of the Solar System)",
        orbitalPeriod: "N/A (center of the Solar System)",
        rotationPeriod: "25 days (equator), 36 days (poles)",
        surfaceTemperature: "5,500°C",
        atmosphereComposition: "74% Hydrogen, 24% Helium, 2% Other elements",
        numberOfMoons: "0 (the Sun is not orbited by moons)",
        image: "images/sun2.jpg",
    },
    pluto: {
        name: "Pluto",
        type: "Dwarf Planet",
        diameter: "2,377 km",
        temperature: "-240°C to -218°C",
        mass: "1.3 × 10²² kg",
        distance: "5.9 billion km",
        orbitalPeriod: "248 Earth years",
        rotationPeriod: "153 hours (6.4 Earth days)",
        surfaceTemperature: "-229°C",
        atmosphereComposition: "Nitrogen, Methane, Carbon Monoxide",
        numberOfMoons: "5 (Notable: Charon)",
        image: "images/pluto2.jpg"
    }
};

// Show Planet Info Modal
function showPlanetInfo(planet) {
    const modal = document.getElementById("planet-info-modal");
    const infoDiv = document.getElementById("planet-info");

    // Get planet data
    const data = planetData[planet];

    // If data is undefined, show an error message
    if (!data) {
        infoDiv.innerHTML = `
            <h1>Unknown Planet</h1>
            <p>Sorry, we couldn't find information for this planet.</p>
        `;
    } else {
        // Populate planet info
        infoDiv.innerHTML = `
            <h1>${data.name}</h1>
            <img src="${data.image}" alt="${data.name}" class="planet-image" />
            <p><strong>Type:</strong> ${data.type}</p>
            <p><strong>Diameter:</strong> ${data.diameter}</p>
            <p><strong>Temperature:</strong> ${data.temperature}</p>
            <p><strong>Mass:</strong> ${data.mass}</p>
            <p><strong>Distance from Sun:</strong> ${data.distance}</p>
            <p><strong>Orbital Period:</strong> ${data.orbitalPeriod}</p>
            <p><strong>Rotation Period:</strong> ${data.rotationPeriod}</p>
            <p><strong>Surface Temperature:</strong> ${data.surfaceTemperature}</p>
            <p><strong>Atmosphere Composition:</strong> ${data.atmosphereComposition}</p>
            <p><strong>Number of Moons:</strong> ${data.numberOfMoons}</p>
        `;
    }

    // Show modal
    modal.style.display = "flex";
}


// Close Modal
function closeModal() {
    console.log("Close button clicked");
    const modal = document.getElementById("planet-info-modal");
    modal.style.display = "none";
}

//Copyright Year
const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;