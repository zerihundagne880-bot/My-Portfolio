// 1. Dark/Light Mode Switcher
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const isDark = htmlElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Icon መቀየር
    themeIcon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
    
    // ለተጠቃሚው ምርጫውን በኮምፒውተሩ ላይ ሴቭ ማድረግ (Optional)
    localStorage.setItem('theme', newTheme);
});

// 2. All 7 Projects Data
const projects = [
    {
        title: "Student Attendance System",
        desc: "Full-stack application for real-time attendance tracking and management.",
        link: "https://zerihundagne880-bot.github.io/student-attendance-system-1/",
        icon: "fas fa-user-check"
    },
    {
        title: "Shoas Market",
        desc: "E-commerce marketplace platform for online shopping and product discovery.",
        link: "https://zerihundagne880-bot.github.io/Shoas-market/",
        icon: "fas fa-shopping-bag"
    },
    {
        title: "Smart Movies Hub",
        desc: "Movie discovery and information platform with a sleek user interface.",
        link: "https://zerihundagne880-bot.github.io/Smart-movies-hub-/",
        icon: "fas fa-play-circle"
    },
    {
        title: "Ethio Music Group",
        desc: "Large-scale Telegram community management and music automation bot.",
        link: "https://t.me/ethio_music_group21",
        icon: "fab fa-telegram-plane"
    },
    {
        title: "Phone Repair Project",
        desc: "Professional showcase for mobile and electronics repair services.",
        link: "https://zerihundagne880-bot.github.io/phone_repair_project/",
        icon: "fas fa-tools"
    },
    {
        title: "Animation Project",
        desc: "Advanced CSS and HTML5 creative web animations showcase.",
        link: "https://zerihundagne880-bot.github.io/animation-project/animation.html",
        icon: "fas fa-magic"
    },
    {
        title: "My Listing App",
        desc: "Real estate and item listing application with functional UI components.",
        link: "https://zerihundagne880-bot.github.io/mylistingapp/",
        icon: "fas fa-list-ul"
    }
];

const projectGrid = document.getElementById('project-grid');

// ፕሮጀክቶቹን በካርድ መልክ መፍጠር
projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div style="font-size: 2.2rem; color: var(--primary-blue);">
            <i class="${proj.icon}"></i>
        </div>
        <h3>${proj.title}</h3>
        <p>${proj.desc}</p>
        <div style="margin-top: 20px; font-size: 0.8rem; font-weight: bold; color: var(--primary-blue); display: flex; align-items: center; gap: 8px;">
            VIEW PROJECT <i class="fas fa-arrow-right"></i>
        </div>
    `;
    
    // ሲነካ ወደ ሊንኩ እንዲወስድ
    card.onclick = () => window.open(proj.link, '_blank');
    
    projectGrid.appendChild(card);
});
