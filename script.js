// Enhanced Typing Animation with Code Words
const typingTexts = ['Software Developer', 'Full-Stack Engineer', 'AI Enthusiast', 'Problem Solver', 'Code Architect'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function typeText() {
    const currentText = typingTexts[textIndex];
    const typingElement = document.getElementById('typing-text');
    
    if (!typingElement) return;
    
    // Clear any existing timeout
    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }
    
    if (isDeleting) {
        // Deleting text
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Typing text
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        // Finished typing, pause before deleting
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next text
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }
    
    typingTimeout = setTimeout(typeText, typeSpeed);
}

// Clean up function to prevent memory leaks
function cleanupTyping() {
    if (typingTimeout) {
        clearTimeout(typingTimeout);
        typingTimeout = null;
    }
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

// Developer Console Widget
function initDeveloperConsole() {
    const consoleWidget = document.getElementById('dev-console');
    const consoleToggle = document.getElementById('console-toggle');
    const consoleInput = document.getElementById('console-input');
    const consoleHistory = document.getElementById('console-history');
    const consoleBody = document.getElementById('console-body');
    
    let isMinimized = false;
    let commandHistory = [];
    let historyIndex = -1;
    
    // Enhanced console commands with dummy data
    const commands = {
        help: () => {
            return `Available commands:
  • help - Show this help message
  • clear - Clear console history
  • about - Display portfolio info
  • skills - List technical skills
  • projects - Show project count
  • contact - Display contact info
  • date - Show current date
  • time - Show current time
  • theme - Toggle dark/light mode
  • color <color> - Change accent color
  • whoami - Display developer info
  • ls - List directory contents
  • pwd - Show current directory
  • cat <file> - Display file contents
  • echo <text> - Display text
  • status - Show system status
  • network - Display network info
  • weather - Show weather info
  • calc <expression> - Simple calculator
  • quote - Show random quote`;
        },
        clear: () => {
            consoleHistory.innerHTML = '';
            return 'Console cleared.';
        },
        about: () => {
            return `Timothy Makupete Phiri
Full-Stack Developer | AI Specialist | Educator
Location: Malawi
University: Mzuzu University (B.Ed ICT)
Experience: Web Development, AI Integration, Cloud Deployment`;
        },
        skills: () => {
            return `Core Skills:
  • Frontend: Vue.js (90%), React.js (85%), HTML/CSS (95%)
  • Backend: Python/Django (88%), Node.js (82%), PostgreSQL (82%)
  • Cloud: AWS (75%), Netlify (90%), Vercel (85%)
  • AI: Machine Learning (80%), NLP (75%), Computer Vision (70%)
  • Mobile: Android Development (75%), React Native (70%)`;
        },
        projects: () => {
            const projectCards = document.querySelectorAll('.project-card');
            return `Total Projects: ${projectCards.length} deployed applications
Recent Projects:
  • Capsulcode Technologies - Vue.js Company Website
  • Akuka Lodge - Hotel Management System
  • MSCE ChatBolt - AI Learning Assistant
  • ScooVerse - School Management System
  • Red Valley Lodge - Booking Platform
  • Trackit - Stolen Phone Tracking (In Development)`;
        },
        contact: () => {
            return `Contact Information:
  • Email: timotheemakupete@gmail.com
  • GitHub: github.com/timothee-makupete
  • LinkedIn: linkedin.com/in/timothy-phiri
  • Location: Mzuzu, Malawi
  • Available for: Freelance, Full-time, Consulting`;
        },
        date: () => {
            return new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        },
        time: () => {
            return new Date().toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            });
        },
        theme: () => {
            themeToggle.click();
            return 'Theme toggled successfully.';
        },
        color: (color) => {
            if (color) {
                document.documentElement.style.setProperty('--primary', color);
                return `Accent color changed to ${color}`;
            }
            return 'Usage: color <color-name> (e.g., color blue)';
        },
        whoami: () => {
            return `timothy@developer:~$ 
User: Timothy Makupete Phiri
Role: Full-Stack Software Developer
Permissions: READ, WRITE, EXECUTE
Session: Active
Last Login: ${new Date().toLocaleString()}`;
        },
        ls: () => {
            return `portfolio/
├── about.md
├── projects/
│   ├── capsulcode/
│   ├── akuka-lodge/
│   ├── chatbolt/
│   └── scooverse/
├── skills/
│   ├── frontend/
│   ├── backend/
│   └── cloud/
├── research/
│   └── trackit/
└── contact.json`;
        },
        pwd: () => {
            return '/home/timothy/portfolio';
        },
        cat: (filename) => {
            const files = {
                'about.md': '# About Timothy Phiri\nFull-stack developer passionate about creating innovative web solutions.',
                'contact.json': '{"email": "timotheemakupete@gmail.com", "github": "timothee-makupete"}',
                'skills/frontend': 'Vue.js, React.js, HTML5, CSS3, JavaScript, TypeScript',
                'skills/backend': 'Python, Django, Node.js, Express, PostgreSQL, MongoDB'
            };
            
            if (filename && files[filename]) {
                return files[filename];
            } else if (filename) {
                return `cat: ${filename}: No such file or directory`;
            }
            return 'Usage: cat <filename>';
        },
        echo: (...args) => {
            return args.join(' ') || '';
        },
        status: () => {
            return `System Status:
  • CPU: 45% usage
  • Memory: 62% used (8.2GB/13.2GB)
  • Disk: 78% used (234GB/300GB)
  • Network: Connected
  • Uptime: 2 days, 14 hours
  • Server: Running on port 3000`;
        },
        network: () => {
            return `Network Information:
  • IP: 192.168.1.100
  • Gateway: 192.168.1.1
  • DNS: 8.8.8.8, 8.8.4.4
  • Speed: 100 Mbps
  • Status: Connected
  • Latency: 12ms`;
        },
        weather: () => {
            return `Weather Report - Mzuzu, Malawi:
  • Temperature: 24°C
  • Condition: Partly Cloudy
  • Humidity: 65%
  • Wind: 12 km/h
  • UV Index: 6 (High)
  • Sunrise: 05:42 AM
  • Sunset: 06:18 PM`;
        },
        calc: (expression) => {
            if (!expression) return 'Usage: calc <expression> (e.g., calc 2+2)';
            try {
                // Simple calculator - only allow basic operations
                const safeExpression = expression.replace(/[^0-9+\-*/().\s]/g, '');
                if (safeExpression !== expression) {
                    return 'Error: Invalid characters in expression';
                }
                const result = Function('"use strict"; return (' + safeExpression + ')')();
                return `Result: ${result}`;
            } catch (e) {
                return 'Error: Invalid expression';
            }
        },
        quote: () => {
            const quotes = [
                '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
                '"The best way to predict the future is to invent it." - Alan Kay',
                '"First, solve the problem. Then, write the code." - John Johnson',
                '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
                '"Innovation distinguishes between a leader and a follower." - Steve Jobs',
                '"Code never lies, comments sometimes do." - Ron Jeffries'
            ];
            return quotes[Math.floor(Math.random() * quotes.length)];
        }
    };
    
    // Toggle console
    consoleToggle.addEventListener('click', () => {
        isMinimized = !isMinimized;
        consoleWidget.classList.toggle('minimized');
        consoleToggle.innerHTML = isMinimized ? 
            '<i class="fas fa-plus"></i>' : 
            '<i class="fas fa-minus"></i>';
    });
    
    // Make console draggable
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    
    const consoleHeader = consoleWidget.querySelector('.console-header');
    
    consoleHeader.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
    
    // Touch events for mobile
    consoleHeader.addEventListener('touchstart', dragStart);
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', dragEnd);
    
    function dragStart(e) {
        if (e.type === 'touchstart') {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }
        
        if (e.target === consoleHeader || consoleHeader.contains(e.target)) {
            isDragging = true;
        }
    }
    
    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            
            if (e.type === 'touchmove') {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }
            
            xOffset = currentX;
            yOffset = currentY;
            
            consoleWidget.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
    }
    
    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }
    
    // Handle command input
    consoleInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = consoleInput.value.trim();
            if (command) {
                executeCommand(command);
                commandHistory.push(command);
                historyIndex = commandHistory.length;
                consoleInput.value = '';
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                consoleInput.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                consoleInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                consoleInput.value = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            // Simple tab completion
            const currentInput = consoleInput.value.toLowerCase();
            const possibleCommands = Object.keys(commands).filter(cmd => cmd.startsWith(currentInput));
            if (possibleCommands.length === 1) {
                consoleInput.value = possibleCommands[0];
            }
        }
    });
    
    function executeCommand(command) {
        const parts = command.split(' ');
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);
        
        // Add command to history
        addConsoleLine(`$ ${command}`, 'console-command');
        
        // Execute command
        if (commands[cmd]) {
            const result = commands[cmd](...args);
            // Handle multi-line results
            const lines = result.split('\n');
            lines.forEach(line => {
                addConsoleLine(line, 'console-command-result');
            });
        } else {
            addConsoleLine(`Command not found: ${cmd}. Type 'help' for available commands.`, 'console-command-error');
        }
        
        // Scroll to bottom
        consoleHistory.scrollTop = consoleHistory.scrollHeight;
    }
    
    function addConsoleLine(text, className = '') {
        const line = document.createElement('div');
        line.className = className;
        line.textContent = text;
        consoleHistory.appendChild(line);
    }
    
    // Initial welcome message
    setTimeout(() => {
        addConsoleLine('Developer Console v2.0.0 - Mobile Enhanced', 'console-command-help');
        addConsoleLine('Type "help" for available commands', 'console-command-help');
        addConsoleLine('New features: ls, cat, calc, weather, quote', 'console-command-info');
        consoleHistory.scrollTop = consoleHistory.scrollHeight;
    }, 2000);
}

// Research Section Animations
function initResearchSection() {
    // Animate dashboard stats
    animateDashboardStats();
    
    // Animate progress bars
    animateProgressBars();
    
    // Add interactive hover effects
    addResearchInteractions();
}

function animateDashboardStats() {
    const devicesTracked = document.getElementById('devices-tracked');
    const recoveryRate = document.getElementById('recovery-rate');
    const networkSize = document.getElementById('network-size');
    
    if (devicesTracked) {
        let currentDevices = 0;
        const targetDevices = 1247;
        const increment = Math.ceil(targetDevices / 50);
        
        const deviceTimer = setInterval(() => {
            currentDevices += increment;
            if (currentDevices >= targetDevices) {
                currentDevices = targetDevices;
                clearInterval(deviceTimer);
            }
            devicesTracked.textContent = currentDevices.toLocaleString();
        }, 30);
    }
    
    if (recoveryRate) {
        let currentRate = 0;
        const targetRate = 87;
        const rateIncrement = targetRate / 40;
        
        const rateTimer = setInterval(() => {
            currentRate += rateIncrement;
            if (currentRate >= targetRate) {
                currentRate = targetRate;
                clearInterval(rateTimer);
            }
            recoveryRate.textContent = Math.floor(currentRate) + '%';
        }, 50);
    }
    
    if (networkSize) {
        let currentNodes = 0;
        const targetNodes = 5432;
        const nodeIncrement = Math.ceil(targetNodes / 60);
        
        const nodeTimer = setInterval(() => {
            currentNodes += nodeIncrement;
            if (currentNodes >= targetNodes) {
                currentNodes = targetNodes;
                clearInterval(nodeTimer);
            }
            networkSize.textContent = currentNodes.toLocaleString();
        }, 25);
    }
}

function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target;
                const targetProgress = progressFill.getAttribute('data-progress');
                
                setTimeout(() => {
                    progressFill.style.width = targetProgress + '%';
                }, 200);
                
                observer.unobserve(progressFill);
            }
        });
    }, { threshold: 0.5 });
    
    progressFills.forEach(bar => observer.observe(bar));
}

function addResearchInteractions() {
    // Tech tag interactions
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const techName = this.textContent;
            showTechDetails(techName);
        });
        
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Feature item interactions
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
        // Ensure visibility immediately
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.visibility = 'visible';
        }, 100 + (index * 100));
        
        item.addEventListener('click', function() {
            const featureName = this.querySelector('span').textContent;
            showFeatureDetails(featureName);
        });
    });
    
    // Dashboard image hover effect
    const dashboardImage = document.querySelector('.dashboard-image');
    if (dashboardImage) {
        dashboardImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
        });
        
        dashboardImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
    }
}

function showTechDetails(techName) {
    const techDetails = {
        'Android': 'Native Android development with Kotlin/Java for BLE and Wi-Fi Direct integration',
        'Node.js': 'Backend API server with Express.js and WebSocket support',
        'Ethereum Blockchain': 'Smart contracts for IMEI registration and verification',
        'Bluetooth LE': 'Low-energy scanning for device discovery and communication',
        'Wi-Fi Direct': 'Peer-to-peer networking for offline device detection',
        'React': 'Frontend dashboard with real-time updates and data visualization',
        'MongoDB': 'NoSQL database for location data and device information'
    };
    
    // Create modal or notification with tech details
    const details = techDetails[techName] || 'Advanced technology implementation';
    console.log(`${techName}: ${details}`);
}

function showFeatureDetails(featureName) {
    const featureDetails = {
        'Mesh Network Detection': 'Decentralized device detection using community-powered scanning',
        'Blockchain IMEI Recording': 'Tamper-proof IMEI registration on Ethereum blockchain',
        'Real-time Location Tracking': 'Continuous location updates with GPS and network triangulation',
        'End-to-End Encryption': 'AES-256 encryption for all communication channels',
        'Battery Efficient Scanning': 'Optimized BLE scanning algorithms for minimal power consumption',
        'Offline-First Operation': 'Local caching and peer-to-peer communication without internet dependency'
    };
    
    // Create modal or notification with feature details
    const details = featureDetails[featureName] || 'Advanced security and tracking features';
    console.log(`${featureName}: ${details}`);
}

// Add research section to navigation
function updateNavigation() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) {
        const researchLink = document.createElement('li');
        researchLink.innerHTML = '<a href="#research">Research</a>';
        
        // Insert before contact link
        const contactLink = navLinks.querySelector('li:nth-last-child(2)');
        if (contactLink) {
            navLinks.insertBefore(researchLink, contactLink);
        }
    }
}

// Enhanced Console Messages
function addConsoleMessages() {
    const messages = [
        'Initializing portfolio...',
        'Loading awesome projects...',
        'Compiling skills...',
        'Deploying creativity...',
        'Ready for action!',
        'npm install success',
        'git pull origin main',
        'Building production bundle...',
        'Server listening on port 3000'
    ];
    
    let messageIndex = 0;
    const terminalText = document.querySelector('.terminal-text');
    const consoleOutput = document.getElementById('console-output');
    
    if (terminalText && consoleOutput) {
        setInterval(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            
            // Update main terminal text
            terminalText.style.opacity = '0';
            setTimeout(() => {
                terminalText.textContent = messages[messageIndex];
                terminalText.style.opacity = '1';
            }, 300);
            
            // Add to console output occasionally
            if (Math.random() > 0.7) {
                const randomCommand = [
                    'git status',
                    'npm run build',
                    'docker-compose up',
                    'pytest tests/',
                    'python manage.py migrate'
                ][Math.floor(Math.random() * 5)];
                
                const commandLine = document.createElement('div');
                commandLine.className = 'console-line';
                commandLine.innerHTML = `
                    <span class="console-prompt">$</span>
                    <span class="console-command">${randomCommand}</span>
                `;
                
                const resultLine = document.createElement('div');
                resultLine.className = 'console-line';
                resultLine.innerHTML = `
                    <span class="console-success">✓ Command executed successfully</span>
                `;
                
                consoleOutput.appendChild(commandLine);
                consoleOutput.appendChild(resultLine);
                
                // Keep only last 5 lines
                const lines = consoleOutput.querySelectorAll('.console-line');
                if (lines.length > 10) {
                    lines[0].remove();
                    lines[1].remove();
                }
                
                consoleOutput.scrollTop = consoleOutput.scrollHeight;
            }
        }, 4000);
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

// Mobile Navigation Toggle - More robust implementation
document.addEventListener('DOMContentLoaded', function() {
    // Multiple attempts to ensure elements are loaded
    setTimeout(() => {
        initMobileNavigation();
    }, 100);
    
    setTimeout(() => {
        initMobileNavigation();
    }, 500);
});

function initMobileNavigation() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    
    console.log('Mobile navigation init:', { 
        mobileToggle: !!mobileToggle, 
        navLinks: !!navLinks,
        windowWidth: window.innerWidth 
    });

    if (mobileToggle && navLinks) {
        // Remove any existing listeners to prevent duplicates
        mobileToggle.replaceWith(mobileToggle.cloneNode(true));
        const newToggle = document.getElementById('mobile-toggle');
        
        newToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile toggle clicked!');
            
            navLinks.classList.toggle('active');
            
            const isActive = navLinks.classList.contains('active');
            this.innerHTML = isActive 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
            
            console.log('Nav active state:', isActive);
        });
        
        // Also add touch event for mobile
        newToggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            console.log('Mobile toggle touched!');
            this.click();
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                newToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!newToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                newToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                newToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        console.log('Mobile navigation initialized successfully');
    } else {
        console.warn('Mobile navigation elements not found:', {
            mobileToggle: !!mobileToggle,
            navLinks: !!navLinks
        });
    }
}

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
        initEnhancedParticles();
        updateScrollProgress();
        fadeInOnScroll();
        fetchGitHubStats();
        initPageTransitions();
        
        // Professional features
        animateSkillBars();
        enhanceProjectCards();
        addConsoleMessages();
        animateCodeStats();
        initKeyboardShortcuts();
        initDeveloperConsole();
        initResearchSection();
        updateNavigation();
    }, 1600);
});

// Initialize with header state
fadeInOnScroll();
