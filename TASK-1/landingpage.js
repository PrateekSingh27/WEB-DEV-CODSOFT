// Example: Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
        
    });
});

document.querySelector('nav a[href="#characters"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    const charactersSection = document.getElementById('characters');

    if (charactersSection.style.display === 'none') {
        charactersSection.style.display = 'grid'; // Show the section

        const charactersData = [
            { name: "Naruto Uzumaki", image: "naruto-icon.png" },
            { name: "Sasuke Uchiha", image: "sasuke-icon.png" },
            { name: "Sakura Haruno", image: "sakura-icon.png" },
            { name: "Kakashi Hatake", image: "kakashi-icon.png" },
            { name: "Itachi Uchiha", image: "itachi-icon.png" },
            { name: "Gaara", image: "gaara-icon.png" },
            { name: "Jiraiya", image: "jiraiya-icon.png" },
            { name: "Tsunade", image: "tsunade-icon.png" },
            { name: "Shikamaru Nara", image: "shikamaru-icon.png" }
            // Add more characters here...
        ];

        charactersData.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');
            characterDiv.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
            `;
            charactersSection.appendChild(characterDiv);
        });


    } else {
        charactersSection.innerHTML = ''; // Clear existing characters
        charactersSection.style.display = 'none'; // Hide the section
    }
});

// ... (Rest of your script.js code)
