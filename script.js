// Binary Rain Effect
function initBinaryRain() {
    const binaryRain = document.getElementById('binary-rain');
    if (!binaryRain) return;
    
    const binaryChars = ['0', '1'];
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const span = document.createElement('span');
        span.style.left = i * 20 + 'px';
        span.style.animationDuration = (Math.random() * 3 + 2) + 's';
        span.style.animationDelay = Math.random() * 2 + 's';
        
        let binaryString = '';
        for (let j = 0; j < 20; j++) {
            binaryString += binaryChars[Math.floor(Math.random() * binaryChars.length)];
        }
        span.textContent = binaryString;
        
        binaryRain.appendChild(span);
    }
}

// Enhanced Typing Animation with Code Words
const typingTexts = ['Software Developer', 'Full-Stack Engineer', 'AI Enthusiast', 'Problem Solver', 'Code Architect'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = typingTexts[textIndex];
    const typingElement = document.getElementById('typing-text');
    
    if (!typingElement) return;
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeText, typeSpeed);
}

// Matrix-Style Navigation Enhancement
function enhanceNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px var(--code-blue)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
}

// Glitch Effect for Headings
function initGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch-effect');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out infinite';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = 'glitch 2s ease-in-out infinite';
        });
    });
}

// Skill Bars Animation on Scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Enhanced Project Card Hover Effects
function enhanceProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(58, 134, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow)';
        });
    });
}

// Terminal-Style Console Messages
function addConsoleMessages() {
    const messages = [
        'Initializing portfolio...',
        'Loading awesome projects...',
        'Compiling skills...',
        'Deploying creativity...',
        'Ready for action!'
    ];
    
    let messageIndex = 0;
    const terminalText = document.querySelector('.terminal-text');
    
    if (terminalText) {
        setInterval(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            terminalText.style.opacity = '0';
            
            setTimeout(() => {
                terminalText.textContent = messages[messageIndex];
                terminalText.style.opacity = '1';
            }, 300);
        }, 3000);
    }
}

// Code Typing Effect for Stats
function animateCodeStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalText = stat.textContent;
        const isNumber = /^\d+/.test(finalText);
        
        if (isNumber) {
            const finalNumber = parseInt(finalText);
            let currentNumber = 0;
            const increment = Math.ceil(finalNumber / 50);
            
            const timer = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= finalNumber) {
                    currentNumber = finalNumber;
                    clearInterval(timer);
                }
                stat.textContent = currentNumber + '+';
            }, 30);
        }
    });
}

// Floating Code Animation
function animateFloatingCode() {
    const floatingCodes = document.querySelectorAll('.floating-code');
    
    floatingCodes.forEach((code, index) => {
        const duration = 6 + index * 2;
        const delay = index * 0.5;
        
        code.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        // Add random movement
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            code.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 1000);
    });
}

// Enhanced Loading Animation
function showLoadingAnimation() {
    const loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'loading-spinner';
    loadingSpinner.style.position = 'fixed';
    loadingSpinner.style.top = '50%';
    loadingSpinner.style.left = '50%';
    loadingSpinner.style.transform = 'translate(-50%, -50%)';
    loadingSpinner.style.zIndex = '9999';
    
    document.body.appendChild(loadingSpinner);
    
    setTimeout(() => {
        loadingSpinner.remove();
    }, 1500);
}

// Keyboard Shortcuts for Programmers
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for quick navigation
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const projectsSection = document.getElementById('projects');
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Ctrl/Cmd + D for dark mode toggle
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            themeToggle.click();
        }
        
        // Number keys for navigation
        if (e.key >= '1' && e.key <= '5') {
            const sections = ['home', 'about', 'projects', 'experience', 'contact'];
            const index = parseInt(e.key) - 1;
            if (sections[index]) {
                document.getElementById(sections[index]).scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

// Enhanced Particle System
function initEnhancedParticles() {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) return;
    
    const particleCount = 30;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = `rgba(${58 + Math.random() * 50}, ${134 + Math.random() * 50}, 255, 0.6)`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';
        particle.style.filter = 'blur(1px)';
        
        particlesContainer.appendChild(particle);
        particles.push({
            element: particle,
            x: parseFloat(particle.style.left),
            y: parseFloat(particle.style.top),
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: parseFloat(particle.style.width)
        });
    }
    
    function animateEnhancedParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > 100) particle.vx *= -1;
            if (particle.y < 0 || particle.y > 100) particle.vy *= -1;
            
            particle.element.style.left = particle.x + '%';
            particle.element.style.top = particle.y + '%';
            
            // Add pulsing effect
            const pulse = Math.sin(Date.now() * 0.001 + particle.x) * 0.5 + 0.5;
            particle.element.style.opacity = 0.3 + pulse * 0.3;
        });
        
        requestAnimationFrame(animateEnhancedParticles);
    }
    
    animateEnhancedParticles();
}

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Scroll Progress Bar
function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
        progressBar.style.width = scrollProgress + '%';
    }
}

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
                card.classList.add('hidden');
            }
        });
    });
});

// Particles Background
function initParticles() {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = 'rgba(58, 134, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';
        
        particlesContainer.appendChild(particle);
        particles.push({
            element: particle,
            x: parseFloat(particle.style.left),
            y: parseFloat(particle.style.top),
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }
    
    function animateParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > 100) particle.vx *= -1;
            if (particle.y < 0 || particle.y > 100) particle.vy *= -1;
            
            particle.element.style.left = particle.x + '%';
            particle.element.style.top = particle.y + '%';
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    updateScrollProgress();
});

// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

// Check on load and scroll
window.addEventListener('load', fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For now, we'll just show an alert and reset the form
    alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon.`);
    
    // Reset form
    this.reset();
    
    // Log to console for demo purposes
    console.log({
        name,
        email,
        subject,
        message
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// GitHub API Integration
async function fetchGitHubStats() {
    const username = 'timothee-makupete';
    const reposElement = document.getElementById('github-repos');
    const starsElement = document.getElementById('github-stars');
    const followersElement = document.getElementById('github-followers');
    
    if (!reposElement || !starsElement || !followersElement) return;
    
    try {
        // Add loading state
        [reposElement, starsElement, followersElement].forEach(el => {
            el.classList.add('loading');
        });
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        
        // Fetch repositories to calculate stars
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const reposData = await reposResponse.json();
        
        // Calculate total stars
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        
        // Update DOM with animation
        animateNumber(reposElement, userData.public_repos);
        animateNumber(starsElement, totalStars);
        animateNumber(followersElement, userData.followers);
        
        // Remove loading state
        [reposElement, starsElement, followersElement].forEach(el => {
            el.classList.remove('loading');
        });
        
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Fallback to default values
        reposElement.textContent = '25+';
        starsElement.textContent = '50+';
        followersElement.textContent = '10+';
        
        [reposElement, starsElement, followersElement].forEach(el => {
            el.classList.remove('loading');
        });
    }
}

// Animate number counting
function animateNumber(element, target) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(current) + '+';
    }, 16);
}

// Smooth Page Transitions
function initPageTransitions() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.classList.add('page-transition');
        observer.observe(section);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show loading animation first
    showLoadingAnimation();
    
    // Initialize all animations and effects
    setTimeout(() => {
        typeText();
        initBinaryRain();
        initEnhancedParticles();
        updateScrollProgress();
        fadeInOnScroll();
        fetchGitHubStats();
        initPageTransitions();
        
        // New programmer-themed features
        enhanceNavigation();
        initGlitchEffects();
        animateSkillBars();
        enhanceProjectCards();
        addConsoleMessages();
        animateCodeStats();
        animateFloatingCode();
        initKeyboardShortcuts();
    }, 1600);
});

// Initialize with header state
fadeInOnScroll();
