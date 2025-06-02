// Project data
const projects = [
    {
        title: "Summer-Tainment",
        description: "Year 2 Project",
        tech: "HTML/CSS/Bootstrap",
        image: "summer.png",
        url: "https://sophiehornik.github.io/Summer-Site/#car"
    },
    {
        title: "Work Based Learning Project",
        description: "(Year 2 Project)",
        tech: "HTML/CSS/Bootstrap/JS",
        image: "WBLP.png",
        url: "https://sophiehornik.github.io/WBLP/"
    },
    {
        title: "Trick or Treat",
        description: "Year 3 Project",
        tech: "HTML/CSS/Bootstrap/JS",
        image: "hallo.png",
        url: "https://sophiehornik.github.io/Trunk-or-treat/"
    },
    {
        title: "Team Project",
        description: "Year 2 Project",
        tech: "HTML/CSS/Bootstrap/JS",
        image: "team.png",
        url: "https://sophiehornik.github.io/mayMonthly/"
    },
    {
        title: "Mixtape Cafe",
        description: "Check out me and Randy Kladerman's cafe! (Year 1 Project)",
        tech: "HTML/CSS/Bootstrap",
        image: "img/mixtape.png",
        url: "https://zlevin1228.github.io/Coffee-Shop/"
    },
    {
        title: "Summertainment",
        description: "Check out an experience from the summer of 2023! (Year 2 Project)",
        tech: "HTML/CSS/Bootstrap",
        image: "img/dontoliver.png",
        url: "https://zlevin1228.github.io/Summertainment/"
    },
    {
        title: "George Halas Tribute",
        description: "Check out a tribute to Bears legend George Halas! (Year 2 Project)",
        tech: "HTML/CSS/Bootstrap",
        image: "img/halas.png",
        url: "https://zlevin1228.github.io/Look-Ma-Im-Famous/"
    },
    {
        title: "On My Birthday",
        description: "Check out some important events on my birthday! (Year 2 Project)",
        tech: "JavaScript",
        image: "img/birthday.png",
        url: "https://zlevin1228.github.io/On-My-Birthday/"
    },
    {
        title: "Rock, Paper, Scissors",
        description: "Try out the classic game of Rock, Paper, Scissors! (Year 2 Project)",
        tech: "Video Game",
        image: "img/rps.png",
        url: "https://zlevin1228.github.io/RPS/"
    },
    {
        title: "Little Bird Toy Co.",
        description: "With Randy Kladerman, our mock WBLP (Year 2 Project)",
        tech: "CSS/JS",
        image: "img/littlebird.png",
        url: "https://rklad.github.io/little-bird-toy-co/"
    },
    {
        title: "Monthly Website Gallery",
        description: "My biggest websites from Year 2 put together onto one page",
        tech: "HTML/CSS",
        image: "img/monthly.png",
        url: "https://zlevin1228.github.io/Gallery/"
    },
    {
        title: "College Recruitment",
        description: "Learn about the University of Virginia! (Year 3 Project)",
        tech: "JavaScript/Bootstrap",
        image: "img/uva.png",
        url: "https://zlevin1228.github.io/College-Recruitment/"
    },
    {
        title: "Trunk or Treat",
        description: "Check out a website made for the 2024 Trunk or Treat! (Year 3 Project)",
        tech: "jQuery",
        image: "img/trunkortreat.png",
        url: "https://zlevin1228.github.io/Trunk-Or-Treat/"
    },
    {
        title: "My Top 10 Favorite Songs Of All Time",
        description: "Check out my favorite songs ever! (Year 3 Project)",
        tech: "jQuery/JSON",
        image: "img/slideshow.png",
        url: "https://zlevin1228.github.io/NJIT-Slideshow/"
    },
    {
        title: "Web Design Program",
        description: "A website about the Web Program, with Randy K, Issac E, Ayat S, Matt P, & Sophie H (Year 3 Project)",
        tech: "JS/jQuery/Vue.js",
        image: "img/wdpp.png",
        url: "https://zlevin1228.github.io/WebDesign/"
    },
    {
        title: "Seth A. Levin CPA",
        description: "A website for my father's business, Seth A. Levin CPA. (Year 3 Project)",
        tech: "Vue.js/PHP",
        image: "img/sethalevincpa.png",
        url: "https://www.sethalevincpa.com/"
    }
];

// Initialize Vue app
if (typeof Vue !== 'undefined') {
    const { createApp } = Vue;

    createApp({
        data() {
            return {
                projects: projects
            }
        },
        methods: {
            getAosAnimation(index) {
                const animations = ['fade-up', 'fade-left', 'fade-right', 'zoom-in'];
                return animations[index % 4];
            },
            addScrollEffects() {
                // Removed parallax scroll since we removed the football field background
                console.log('Scroll effects initialized');
            },
            addHoverEffects() {
                setTimeout(() => {
                    document.querySelectorAll('.project-card').forEach(card => {
                        card.addEventListener('mouseenter', function(e) {
                            this.style.transform = 'translateY(-10px) scale(1.02) rotateX(5deg)';
                        });
                        
                        card.addEventListener('mouseleave', function(e) {
                            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                        });
                    });
                }, 100);
            }
        },
        mounted() {
            // Initialize AOS
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    easing: 'ease-in-out',
                    once: false,
                    mirror: true
                });
            }

            // Add interactive effects
            this.addScrollEffects();
            this.addHoverEffects();
        }
    }).mount('#app');
} else {
    // Fallback if Vue doesn't load
    console.log('Vue.js not loaded, using vanilla JavaScript');
    
    // Render projects with vanilla JS
    const projectGrid = document.querySelector('.row.g-4');
    if (projectGrid) {
        projectGrid.innerHTML = projects.map((project, index) => {
            const animations = ['fade-up', 'fade-left', 'fade-right', 'zoom-in'];
            const animation = animations[index % 4];
            
            return `
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="project-card" 
                         data-aos="${animation}"
                         data-aos-delay="${index * 100}"
                         data-aos-duration="800">
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                        <div class="tech-badge">${project.tech}</div>
                        <div class="project-overlay">
                            <h5>${project.title}</h5>
                            <p>${project.description}</p>
                            <a href="${project.url}" target="_blank" class="open-project-btn">
                                Open Project
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Global function for vanilla JS fallback - no longer needed
// function selectProject(title, tech, description) {
//     alert(`Selected: ${title}\nTech: ${tech}\nDescription: ${description}`);
// }

// Additional vanilla JavaScript for enhanced interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS if Vue didn't load
    if (typeof Vue === 'undefined' && typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
            mirror: true
        });
    }

    // Add floating animation to cards
    setTimeout(() => {
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.animation = `float 3s ease-in-out infinite`;
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }, 2000);

    // Add scroll effects removed since no background to animate
    console.log('Page loaded successfully');
});

// CSS Animation for floating effect
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
    }
`;