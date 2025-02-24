document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('quiz-results');
    const progressBar = document.getElementById('quiz-progress-bar'); // Reference to progress bar
    const warningContainer = document.getElementById('warning-message'); // Container for the warning message

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let score = 0;
        const correctAnswers = ['B', 'B', 'B', 'B', 'A'];
        const userAnswers = [];
        let allAnswered = true;  // Flag to check if all questions are answered

        for (let i = 1; i <= 5; i++) {
            const answer = document.querySelector(`input[name="question${i}"]:checked`);
            if (answer) {
                userAnswers.push(answer.value);
            } else {
                userAnswers.push(null);
                allAnswered = false; // If any question is unanswered
            }
        }

        if (!allAnswered) {
            // Show the warning if any question is not answered
            warningContainer.style.display = 'block';
            return; // Prevent form submission
        } else {
            warningContainer.style.display = 'none'; // Hide warning if all answers are provided
        }

        // Calculate the score
        userAnswers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {
                score++;
            }
        });

        // Update progress bar based on score
        let progress = (score / 5) * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', progress);

        // Determine the result color based on score
        let resultColor = '#e74c3c';  // Default red color (muted)
        let progressBarColor = '#e74c3c'; // Default progress bar red color

        if (score >= 3 && score <= 4) {
            resultColor = '#f39c12'; // Softer orange
            progressBarColor = '#f39c12'; // Softer orange for progress bar
        } else if (score === 5) {
            resultColor = '#2ecc71'; // Vibrant green
            progressBarColor = '#2ecc71'; // Vibrant green for progress bar
        }

        // Set the color of the result container and progress bar
        resultContainer.style.backgroundColor = resultColor;
        resultContainer.style.color = 'white';
        resultContainer.style.padding = '15px';
        resultContainer.innerHTML = `You got ${score} out of 5 correct!`;

        // Set the progress bar color
        progressBar.style.backgroundColor = progressBarColor;
    });

    // Double-clicking radio buttons to unselect
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
        radio.addEventListener('dblclick', function() {
            this.checked = false;
        });
    });
});

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    
    const searchQuery = document.querySelector('#search-input').value.toLowerCase();

    const content = document.querySelector('section'); 
    const contentText = content.textContent.toLowerCase();
    
    if (contentText.includes(searchQuery)) {
        // Alert the user if we find a match on the current page
        alert('Matching content found on this page!');
    } else {
        const pages = [
            { title: "Home", url: "index.html" },
            { title: "Exoplanet Detection Methods: Exoplanet detection is a critical field of study in astronomy, enabling scientists to explore and understand worlds that exist beyond our solar system. Since the discovery of the first exoplanet, 51 Pegasi b, in 1995, the methods used to detect these distant planets have advanced significantly. This planet, which orbits a star similar to our Sun, marked the beginning of an era of planet hunting beyond our solar system. Today, thanks to the work of astronomers and space telescopes, we now know that there are more planets than stars in our galaxy. The Kepler Space Telescope estimated that there are over 1 trillion planets in the Milky Way alone. Small planets, especially those that are similar in size to Earth, appear to be relatively common, making the search for Earth-like worlds more promising than ever before. One of the key methods used to detect exoplanets is radial velocity, also known as the 'wobble method.'This technique tracks the slight movement of a star caused by the gravitational tug of an orbiting planet. The first planet discovered in this way, 51 Pegasi b, is a gas giant roughly half the size of Jupiter. It orbits its star incredibly quickly, taking only four days to complete one orbit. This rapid orbit causes the star to move slightly back and forth, or 'wobble,' in response to the planet’s gravity. The wobble method became the standard technique for planet hunting for many years, and as astronomers refined their methods of detecting these small changes in stellar motion, they were able to find more hot gas giants similar to 51 Pegasi b. The discovery of such planets has helped increase our understanding of planetary systems far beyond our own. Another important detection method is transits. This occurs when a planet passes in front of its host star, causing a brief dip in the star’s brightness. The Kepler Space Telescope played a pivotal role in the “modern” era of exoplanet discovery by focusing on a single region of the sky for four years. During this time, Kepler studied over 150,000 stars and observed the dimming of light caused by planets transiting across their stars. By carefully measuring the amount of light that dims and how long it takes for the planet to pass in front of the star, scientists can calculate important details about the planet, including its orbital period (the time it takes to orbit its star) and the mass of its host star.", url: "exoplanet.html" },
            { title: "Exoplanet Detection Methods: In 2018, NASA launched a satellite called TESS (Transiting Exoplanet Survey Satellite) to use this same method to find exoplanets by monitoring a wider area of the sky. A more advanced technique is transit spectroscopy, which allows scientists to analyze the light that passes through a planet’s atmosphere during a transit. Just like a rainbow splits light into its different colors, light that travels through a planet’s atmosphere is altered by the gases present. By studying how this light changes, astronomers can determine which molecules are in the planet’s atmosphere, such as helium, water vapor, and other chemical compounds. The Hubble Space Telescope has already been able to detect these gases in exoplanet atmospheres, and the James Webb Space Telescope, which launched in 2021, is expected to provide even more detailed information about the composition of exoplanet atmospheres, bringing us closer to understanding whether any of these planets could be habitable.", url: "exoplanet.html" },
            { title: "Exoplanet Detection Methods: Another method, gravitational microlensing, uses a phenomenon first predicted by Albert Einstein. Gravitational microlensing occurs when a star with a planet in orbit passes in front of another star. The gravity of the first star acts as a lens, magnifying the light from the background star. If the first star has a planet, this causes a secondary spike in light, which can be detected by astronomers. This method is incredibly useful for detecting exoplanets that are far away and otherwise difficult to find. The Nancy Grace Roman Space Telescope, set to launch in 2027, will use gravitational microlensing to detect exoplanets that might be missed by other methods. Finally, direct imaging involves taking actual pictures of exoplanets, but this is a challenging task, as most exoplanets do not emit their own light. However, some large, hot gas giants can be bright enough to be captured in images. While most exoplanet images have been taken of gas giants, future advancements in technology will allow scientists to take pictures of smaller, cooler planets as well. One important development is the coronagraph, a tool designed to block out the light of a star, allowing astronomers to observe planets in its orbit. The Nancy Grace Roman Space Telescope will also use a coronagraph, making it one of the most advanced telescopes for direct imaging of exoplanets. Additionally, a starshade is a device shaped like a sunflower that can block the light of a star and reveal planets orbiting it. NASA is currently working to improve the design of the starshade, with the goal of testing it on future missions.", url: "exoplanet.html" },
            { title: "Stellar Classification: Stellar Classification is the method by which astronomers categorize stars based on their physical properties such as temperature, luminosity, and spectral type. The most widely used system is the Harvard spectral classification, which divides stars into seven main categories: O, B, A, F, G, K, and M. These categories are based on the star's temperature, with O-type stars being the hottest (over 30,000 K) and M-type stars being the coolest (under 3,500 K). Each category is further subdivided using numbers 0-9 to give a more precise classification, such as G2 for the Sun. These stellar classifications help astronomers understand the evolution and life cycles of stars, as well as the characteristics of different types of stellar populations within galaxies. The study of stellar spectra is also essential for understanding the chemical composition of stars and the interstellar medium.            ", url: "stellar.html" },
            { title: "Galactic Evolution: Galactic Evolution refers to the processes by which galaxies form, evolve, and change over time. Galaxies begin as small clouds of gas and dust that collapse under gravity to form stars, leading to the birth of a galaxy. Over billions of years, galaxies can undergo major transformations, such as mergers and interactions with other galaxies, which can dramatically alter their structure and star formation activity. The study of galactic evolution also involves understanding the role of dark matter and supermassive black holes, which are believed to play key roles in shaping the dynamics of galaxies. Astronomers observe distant galaxies at different stages of their evolution, allowing them to piece together the history of our own Milky Way galaxy and its role in the broader cosmic evolution.            ", url: "galaxy.html" },
            { title: "Dark Matter: Dark Matter is a mysterious substance that does not emit, absorb, or reflect light, making it invisible to current detection methods. However, its presence can be inferred by observing its gravitational effects on visible matter, such as stars and galaxies. The existence of dark matter was first proposed in the 1930s, when astronomer Fritz Zwicky noticed that galaxies in galaxy clusters were moving too quickly to remain gravitationally bound, implying that there was unseen mass influencing their motion. Today, it is believed that dark matter makes up about 27% of the universe's total mass-energy content. While scientists have yet to directly detect dark matter, its presence is inferred through its gravitational effects, such as the way galaxies rotate or the bending of light from distant objects in a phenomenon called gravitational lensing.            ", url: "darkmatter.html" },
            { title: "Black Hole Star: Black Hole Star is a term used to describe a star that is on the brink of collapsing into a black hole. When a massive star runs out of nuclear fuel, its core can no longer support the weight of the outer layers, causing the star to collapse under its own gravity. If the core's mass exceeds a certain limit, the collapse leads to the formation of a black hole, a region of space where gravity is so strong that not even light can escape. The process of stellar collapse that leads to a black hole is known as a supernova explosion. These events are some of the most violent and energetic in the universe, and they release vast amounts of energy. Black holes are often classified into different categories based on their size, with stellar-mass black holes being the remnants of individual stars, and supermassive black holes found at the centers of most galaxies, including our own Milky Way.            ", url: "blackhole.html" },
            { title: "Cosmological Models: Big Bang Theory - The Big Bang Theory is the prevailing model explaining the origin and evolution of the universe. According to the Big Bang Theory, the universe began as an infinitely small, hot, and dense point about 13.8 billion years ago, and has been expanding ever since. This expansion is supported by several key observations, including the cosmic microwave background radiation, which is the afterglow of the Big Bang, and the redshift of galaxies, which indicates that the universe is still expanding. The Big Bang Theory also predicts the formation of light elements such as hydrogen, helium, and lithium during the first few minutes of the universe's existence, and the subsequent formation of stars, galaxies, and larger structures. Over time, the expansion of the universe has slowed and continues to evolve, with current research focusing on understanding the role of dark energy, which is believed to be responsible for the accelerated expansion of the universe.            ", url: "cosmology.html" },
            { title: "Supernova Explosions: Supernova Explosions are catastrophic events that mark the end of a star's life cycle, occurring when a star’s core collapses under gravity after exhausting its nuclear fuel. There are two main types of supernovae: Type I, which occur in binary star systems when a white dwarf accretes matter from a companion star until it reaches a critical mass, and Type II, which occur in massive stars when their core collapses after the star runs out of fuel. Supernova explosions release an enormous amount of energy, outshining entire galaxies for a short time, and dispersing heavy elements into the interstellar medium. These elements, such as carbon, oxygen, and iron, are essential for the formation of planets and life. Supernovae are also responsible for creating the conditions necessary for the formation of black holes, which can result from the collapse of the most massive stars.            ", url: "supernova.html" },
        ];

        // Search through the page titles and match with the search query
        const results = pages.filter(page => page.title.toLowerCase().includes(searchQuery));

        if (results.length > 0) {
            // If there's a match, redirect to the first matching page
            window.location.href = results[0].url;
        } else {
            alert('No matching content found.');
        }
    }
});
