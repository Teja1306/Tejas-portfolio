    const user = localStorage.getItem("loggedInUser");
    if (!user) {
        window.location.href = "log.html";
    }

    function logout() {
        localStorage.removeItem("loggedInUser");
        window.location.href = "log.html";
    }
    let currentProject = 0;
    const totalProjects = 4;

    function showProject(index) {
            const container = document.getElementById('projectsContainer');
    const navButtons = document.querySelectorAll('.nav-btn');

    currentProject = index;
    container.style.transform = `translateX(-${index * 100}%)`;
            
            navButtons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
            });
        }

    // Auto-slide functionality
    function autoSlide() {
        currentProject = (currentProject + 1) % totalProjects;
    showProject(currentProject);
        }

    // Auto-slide every 5 seconds
    setInterval(autoSlide, 5000);

        // Smooth scrolling and active navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        });

    // Contact Form Handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create mailto link with form data
    const mailtoLink = `mailto:tejavinayteju2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    alert('Thank you for your message! Your email client should now open with the message ready to send.');

    // Reset form
    this.reset();
        });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
        });

        // Animate skill bars when skills section comes into view
        const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-percentage');
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                });
            }
        });
        }, {threshold: 0.3 });

    