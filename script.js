  // Project data
        const projects = [
           {
                title: "Work Based Learning Project (1) (Partner)",
                description: "Senior Year",
                tech: "HTML,CSS,Bootstrap,JS",
                image: "web.png",
                url: "https://www.mrhsteched.com/pages/MRHS_WDPP/index.html"
            },
             {
                title: "UT Austin Website",
                description: "Senior Year",
                tech: "HTML,CSS,Bootstrap,JS",
                image: "austin.png",
                url: "https://sophiehornik.github.io/College-Project/"
            },
            {
                title: "Work Based Learning Project (2)",
                description: "Senior Year",
                tech: "HTML,CSS,Bootstrap,JS",
                image: "WBL.png",
                url: "https://sophiehornik.github.io/WBLP/"
            },
            {
                title: "Little Bird Toy Shop",
                description: "Junior Year",
                tech: "HTML,CSS,Bootstrap,JS",
                image: "littlebird.png",
                url: "https://sophiehornik.github.io/LittleBirdSophieHornik/"
            },
            {
                title: "Trunk or Treat",
                description: "Senior Year",
                tech: "HTML,CSS,Bootstrap,JS",
                image: "hallo.png",
                url: "https://sophiehornik.github.io/Trunk-or-treat/"
            },
            {
                title: "New Jersey Institute of Technology Slideshow",
                description: "Senior Year",
                tech: "HTML,CSS,Bootstrap,JS",
                image: "NJITss.png",
                url: "https://sophiehornik.github.io/NJIT-project/"
            },
            {
                title: "AJAX Tutorial Site",
                description: "Senior Year",
                tech: "HTML,CSS,Bootstrap,JS",
                image: "AJAX.png",
                url: "https://sophiehornik.github.io/AJAX-Tutorial-Site/"
            },
            {
                title: "New Jersey Institute of Technology Movie Posters Project",
                description: "Senior Year",
                tech: "HTML,CSS,Bootstrap,JS",
                image: "movies.png",
                url: "https://sophiehornik.github.io/NJIT-3_StarterFiles/"
            },
            {
                title: "Vue Mastery Site",
                description: "Senior Year",
                tech: "HTML,CSS,Bootstrap,JS",
                image: "vue.png",
                url: "https://sophiehornik.github.io/0_Vue_Mastery_Tutorial_Starter/"
            },
            {
                title: "Super Team Website",
                description: "Junior Year",
                tech: "HTML,CSS,Bootstrap,JS",
                image: "teams.png",
                url: "https://sophiehornik.github.io/mayMonthly/"
            },
            {
                title: "Sophomore Portfolio",
                description: "Sophomore Year",
                tech: "HTML,CSS,Bootstrap",
                image: "yr1.png",
                url: "https://congenial-spork-r4gv6p6xpjr7fpxp9-5500.app.github.dev/index.html"
            },
            {
                title: "On My Birthday Website",
                description: "Junior Year",
                tech: "HTML,CSS,Bootstrap,JS",
                image: "birthday.png",
                url: "https://sophiehornik.github.io/birthday-site/"
            },
            {
                title: "MadLibs Website",
                description: "Junior Year",
                tech: "HTML,CSS,Bootstrap,JS",
                image: "madlib.png",
                url: "https://sophiehornik.github.io/madlib/"
            },
              {
                title: "Career Website",
                description: "Junior Year",
                tech: "HTML,CSS,Bootstrap,JS",
                image: "vet.png",
                url: "https://sophiehornik.github.io/april24/"
            },
            
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
                        <div class="col-2">
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
            }`
        
      