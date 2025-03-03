document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('quiz-results');
    const progressBar = document.getElementById('quiz-progress-bar'); // Reference to progress bar
    const warningContainer = document.getElementById('warning-message'); // Container for the warning message

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let score = 0;
        const correctAnswers = ['B', 'B', 'A', 'C', 'B'];
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
            { title: "Home: In my MYP Personal Project, I will explore the fascinating field of astrophysics, a branch of space science that combines chemistry and physics to understand the universe and everything within it. Astrophysics explores a wide range of topics, from the basics of the solar system to the formation and evolution of galaxies, planets, nebulae, and more. Astrophysicists seek to uncover the mysteries of the cosmos, by studying the interactions of matter, energy, and forces. They study the universe in order to help us understand things that happen in our solar system as well as other galaxies. Through this project, I want to learn and explain these cosmic phenomena and share insights into the research that is shaping our understanding of space and time. Join me on this exciting journey as we learn more about the wonders of the universe, from the classification of stars to the nature of black hole stars, and explore how astrophysics connects the forces in the universe with the very fabric of existence.", url: "index.html" },
            { title: "Exoplanet Detection Methods: Exoplanet detection is a critical field of study in astronomy, enabling scientists to explore and understand worlds that exist beyond our solar system. Since the discovery of the first exoplanet, 51 Pegasi b, in 1995, the methods used to detect these distant planets have advanced significantly. This planet, which orbits a star similar to our Sun, marked the beginning of an era of planet hunting beyond our solar system. Today, thanks to the work of astronomers and space telescopes, we now know that there are more planets than stars in our galaxy. The Kepler Space Telescope estimated that there are over 1 trillion planets in the Milky Way alone. Small planets, especially those that are similar in size to Earth, appear to be relatively common, making the search for Earth-like worlds more promising than ever before. One of the key methods used to detect exoplanets is radial velocity, also known as the 'wobble method.'This technique tracks the slight movement of a star caused by the gravitational tug of an orbiting planet. The first planet discovered in this way, 51 Pegasi b, is a gas giant roughly half the size of Jupiter. It orbits its star incredibly quickly, taking only four days to complete one orbit. This rapid orbit causes the star to move slightly back and forth, or 'wobble,' in response to the planet’s gravity. The wobble method became the standard technique for planet hunting for many years, and as astronomers refined their methods of detecting these small changes in stellar motion, they were able to find more hot gas giants similar to 51 Pegasi b. The discovery of such planets has helped increase our understanding of planetary systems far beyond our own. Another important detection method is transits. This occurs when a planet passes in front of its host star, causing a brief dip in the star’s brightness. The Kepler Space Telescope played a pivotal role in the “modern” era of exoplanet discovery by focusing on a single region of the sky for four years. During this time, Kepler studied over 150,000 stars and observed the dimming of light caused by planets transiting across their stars. By carefully measuring the amount of light that dims and how long it takes for the planet to pass in front of the star, scientists can calculate important details about the planet, including its orbital period (the time it takes to orbit its star) and the mass of its host star.", url: "exoplanet.html" },
            { title: "Exoplanet Detection Methods: In 2018, NASA launched a satellite called TESS (Transiting Exoplanet Survey Satellite) to use this same method to find exoplanets by monitoring a wider area of the sky. A more advanced technique is transit spectroscopy, which allows scientists to analyze the light that passes through a planet’s atmosphere during a transit. Just like a rainbow splits light into its different colors, light that travels through a planet’s atmosphere is altered by the gases present. By studying how this light changes, astronomers can determine which molecules are in the planet’s atmosphere, such as helium, water vapor, and other chemical compounds. The Hubble Space Telescope has already been able to detect these gases in exoplanet atmospheres, and the James Webb Space Telescope, which launched in 2021, is expected to provide even more detailed information about the composition of exoplanet atmospheres, bringing us closer to understanding whether any of these planets could be habitable.", url: "exoplanet.html" },
            { title: "Exoplanet Detection Methods: Another method, gravitational microlensing, uses a phenomenon first predicted by Albert Einstein. Gravitational microlensing occurs when a star with a planet in orbit passes in front of another star. The gravity of the first star acts as a lens, magnifying the light from the background star. If the first star has a planet, this causes a secondary spike in light, which can be detected by astronomers. This method is incredibly useful for detecting exoplanets that are far away and otherwise difficult to find. The Nancy Grace Roman Space Telescope, set to launch in 2027, will use gravitational microlensing to detect exoplanets that might be missed by other methods. Finally, direct imaging involves taking actual pictures of exoplanets, but this is a challenging task, as most exoplanets do not emit their own light. However, some large, hot gas giants can be bright enough to be captured in images. While most exoplanet images have been taken of gas giants, future advancements in technology will allow scientists to take pictures of smaller, cooler planets as well. One important development is the coronagraph, a tool designed to block out the light of a star, allowing astronomers to observe planets in its orbit. The Nancy Grace Roman Space Telescope will also use a coronagraph, making it one of the most advanced telescopes for direct imaging of exoplanets. Additionally, a starshade is a device shaped like a sunflower that can block the light of a star and reveal planets orbiting it. NASA is currently working to improve the design of the starshade, with the goal of testing it on future missions.", url: "exoplanet.html" },
            { title: "Stellar Classification: Stellar classification is the method used by astronomers to categorize stars based on their physical properties such as temperature, luminosity, and spectral type. The Harvard system is based on the star’s surface temperature, and the MK system is based on the star’s luminosity (Gregersen). The generally accepted classification is a combination of both these classification schemes (Gregersen). In 1901, a group of scientists at Harvard College Observatory realized that they could classify most stars into a sequence by their color temperatures, from hot blue to cold red (“How Do You Classify a Star? A Guide to Stellar Classification and What They Mean”). The sequence started at 26 letters, but was then reduced into what we have today, the 7 letters O, B, A, F, G, K, and M (Spectral Classification of Stars). These categories are based on the star's temperature, with O-type stars being the hottest (over 30,000 K) and M-type stars being the coolest (under 3,500 K). Each category is further subdivided using numbers 0-9 to give a more precise classification, such as G2 for the Sun. In 1943, luminosity classes were added as well (“How Do You Classify a Star? A Guide to Stellar Classification and What They Mean”). These are the luminosity classes: 0 – hypergiants, la – very luminous supergiants, Ib – less luminous supergiants, II – luminous giants, III – ordinary giants, IV – subgiants, V – main sequence stars (dwarfs), VI – subdwarfs, These stellar classifications help astronomers understand the evolution and life cycles of stars, as well as the characteristics of different types of stellar populations within galaxies.", url: "stellar.html" },
            { title: "Galactic Evolution: Galactic evolution refers to the processes by which galaxies form, evolve, and change over time (“What Is Galactic Evolution? - Universe Today”). The Universe was created 13.8 million years ago, during an event called the Big Bang. Galaxies begin as clouds of gas and dust that collapse and rotate due to gravity to form stars. Over billions of years, galaxies can transform a lot through mergers and interactions with other galaxies, which can dramatically alter their structure and star formation activity (“What Is Galactic Evolution? - Universe Today”). The study of galactic evolution also involves understanding the role of dark matter and supermassive black holes, which are believed to play key roles in shaping the dynamics of galaxies. Astronomers observe distant galaxies at different stages of their evolution, allowing them to piece together the history of our own Milky Way galaxy and its role in the broader cosmic evolution.", url: "galaxy.html" },
            { title: "Dark Matter: All the atoms and light in the universe make up about 5 percent of the total contents of the cosmos. The rest is composed of dark matter and dark energy (“Dark Energy and Dark Matter | Center for Astrophysics”). We know little about dark matter, and even less about dark energy. To this day, scientists are still trying to figure out new things about both. Dark matter is a mysterious substance that does not emit, absorb, or reflect light, making it invisible to current detection methods. Astronomer Fritz Zwicky was the first person to propose the existence of dark matter. He noticed that galaxies in the Coma cluster were moving so quickly that they should have been flung away into space, but something was gravitationally holding them back (NASA, “Dark Matter - NASA Science”). However, its presence can be inferred by observing its gravitational effects on visible matter, such as stars and galaxies. One main gravitational effect is the bending of light from distant objects in a phenomenon called gravitational lensing (NASA, “Shining a Light on Dark Matter - NASA Science”). Today, it is believed that dark matter makes up about 27% of the universe's total mass and energy content (Lerner).", url: "darkmatter.html" },
            { title: "Black Hole: A black hole is an astronomical object that has a really strong gravitational pull. It’s so strong that not even light can escape it. A black hole’s surface is called the event horizon (Reddy). Black holes aren’t really holes, they’re just huge concentrations of matter packed tightly together in a tiny space. The biggest black hole that we know of is 66 billion times the Sun’s mass (NASA, “Black Holes - NASA Science”). There’s two main types of black holes. Stellar-mass black holes have three to twelve times the Sun’s mass, and are spread out around the Milky Way. There are also supermassive black holes, which can range from hundreds of thousands to even billions of times the Sun’s mass. They are found in the centers of most big galaxies, including ours (Reddy). The one in the center of our galaxy is Sagittarius A, and it is about 4 million times the Sun’s mass (Nola Taylor Tillman and Dobrijevic). Spaghettification is a real term that describes what happens to matter when it gets too close to a black hole. It is basically squeezed and stretched vertically, which makes it look like a noodle. Black holes don’t emit or reflect light, which make them almost undetectable to telescopes. Instead, scientists study how they affect their surroundings (NASA, “Dark Matter & Dark Energy - NASA Science”).", url: "blackhole.html" },
            { title: "The Big Bang Theory: The Big Bang Theory is the most widely accepted explanation of the origin and evolution of the universe. It states that the universe began as an infinitely small, hot, and dense point about 13.8 billion years ago, and has been expanding ever since (Howell and May). There is still debate between scientists on whether this is actually true, and some researchers have alternative ideas. However, the Big Bang Theory is supported by several key observations. The cosmic microwave background radiation supports this theory, and it’s basically the afterglow of the Big Bang (Howell and May). The red-shift of galaxies is another indicator that the universe is still expanding. This is because astronomers have discovered that the farther away a galaxy is, the more red-shifted its light is. The further away the galaxies are, the faster they are moving. In an explosion, the bits that move faster travel farther from the explosion. This supports the theory that the Universe is still expanding (“Big Bang Theory - the Expanding Universe - AQA - GCSE Physics (Single Science) Revision - AQA”). The Big Bang Theory also predicts the formation of light elements such as hydrogen, helium, and lithium during the first few minutes of the universe's existence, and the subsequent formation of stars, galaxies, and larger structures.", url: "cosmology.html" },
            { title: "Supernovae: A supernova is a catastrophic event that marks the end of a star’s life cycle, and it occurs when a star’s core collapses under gravity after exhausting its nuclear fuel. Stars don’t always go through these massive cosmic explosions, instead, some cool in later life to become white dwarfs and then black dwarfs (National Geographic, “Supernovae Information and Facts”). There are two main types of supernovae: Type I and Type II. There is also a Type III, but that’s way more rare and it won’t be covered here. Type I supernovae occur in binary star systems when a white dwarf accumulates matter from another star until it reaches a critical mass. When it reaches this critical mass, it implodes (Parks). Type II supernovae occur in massive stars, more than 8 times the mass of our Sun, when their core collapses after the star runs out of nuclear fuel. Each of these types also has subclasses with more specific types. Supernova explosions release an enormous amount of energy, outshining entire galaxies for a short time, and dispersing heavy elements into the interstellar medium. These elements, such as carbon, oxygen, and iron, are essential for the formation of planets and life. Supernovae are also responsible for creating the conditions necessary for the formation of black holes, which can result from the collapse of the most massive stars (Parks).", url: "supernova.html" },
            { title: "Bibliography: “Big Bang Theory - the Expanding Universe - AQA - GCSE Physics (Single Science) Revision - AQA.” BBC Bitesize, www.bbc.co.uk/bitesize/guides/zstb8mn/revision/2. “Dark Energy and Dark Matter | Center for Astrophysics.” Www.cfa.harvard.edu, 2024, www.cfa.harvard.edu/research/topic/dark-energy-and-dark-matter. “Galaxy Evolution.” National Radio Astronomy Observatory, public.nrao.edu/radio-astronomy/galaxy-evolution/. “Galaxy Formation and Evolution | Center for Astrophysics.” Www.cfa.harvard.edu, www.cfa.harvard.edu/research/topic/galaxy-formation-and-evolution. Gregersen, Erik. “Stellar Classification | Astronomy.” Encyclopædia Britannica, 2019, www.britannica.com/science/stellar-classification. Harvard. “Black Holes | Center for Astrophysics.” Www.cfa.harvard.edu, www.cfa.harvard.edu/research/topic/black-holes. “How Do You Classify a Star? A Guide to Stellar Classification and What They Mean.” Skyatnightmagazine.com, 2024, www.skyatnightmagazine.com/advice/a-guide-to-stellar-spectral-classifications. Howell, Elizabeth, and Andrew May. “What Is the Big Bang Theory?” Space.com, 27 July 2023, www.space.com/25126-big-bang-theory.html. Las Cumbres Observatory. “Types of Stars.” Lco.global, lco.global/spacebook/stars/types-stars/. Lerner, Louise. “Dark Energy, Explained.” University of Chicago News, 20 Sept. 2024, news.uchicago.edu/explainer/dark-energy-explained. NASA. “Black Holes - NASA Science.” Science.nasa.gov, NASA, 8 May 2024, science.nasa.gov/universe/black-holes/. ---. “Dark Matter & Dark Energy - NASA Science.” Science.nasa.gov, 2024, science.nasa.gov/universe/dark-matter-dark-energy/. ---. “Dark Matter - NASA Science.” Science.nasa.gov, 20 Dec. 2023, science.nasa.gov/mission/roman-space-telescope/dark-matter/. ---. “Evolution - NASA Science.” Science.nasa.gov, 22 Oct. 2024, science.nasa.gov/universe/galaxies/evolution/. ---. “How We Find and Characterize - NASA Science.” Science.nasa.gov, 2024, science.nasa.gov/exoplanets/how-we-find-and-characterize/. ---. “Shining a Light on Dark Matter - NASA Science.” Science.nasa.gov, science.nasa.gov/mission/hubble/science/science-highlights/shining-a-light-on-dark-matter/. ---. “Star Types - NASA Science.” Science.nasa.gov, NASA, May 2024, science.nasa.gov/universe/stars/types/. National Geographic. “Dark Matter and Dark Energy’s Role in the Universe.” Science, 10 Jan. 2017, www.nationalgeographic.com/science/article/dark-matter. ", url: "bibliography.html" },
            { title: "Bibliograhy: ---. “Supernovae Information and Facts.” Science, 2 Dec. 2016, www.nationalgeographic.com/science/article/supernovae. Nola Taylor Tillman, and Daisy Dobrijevic. “Black Holes: Everything You Need to Know.” Space.com, Space.com, 11 July 2019, www.space.com/15421-black-holes-facts-formation-discovery-sdcmp.html. Parks, Jake. “The Different Types of Supernovae.” Astronomy Magazine, 8 Nov. 2023, www.astronomy.com/science/the-different-types-of-supernovae-explained/. Reddy, Francis. “What Are Black Holes?” NASA, NASA, 8 Sept. 2020, www.nasa.gov/universe/what-are-black-holes/. Spectral Classification of Stars. “Supernovas & Remnants | Center for Astrophysics.” Www.cfa.harvard.edu, www.cfa.harvard.edu/research/topic/supernovas-remnants. “What Are “Dark Matter” and “Dark Energy”?” Www.esa.int, www.esa.int/Science_Exploration/Space_Science/What_are_dark_matter_and_dark_energy. “What Is Galactic Evolution? - Universe Today.” Universe Today, 7 Oct. 2016, www.universetoday.com/30713/galaxy-evolution/. Wikipedia Contributors. “Stellar Classification.” Wikipedia, Wikimedia Foundation, 13 Aug. 2019, en.wikipedia.org/wiki/Stellar_classification.", url: "bibliography.html" },
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
