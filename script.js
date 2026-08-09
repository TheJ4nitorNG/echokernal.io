// Data for your portfolio
const portfolioData = {
    skills: [
        "JavaScript", "TypeScript", "HTML5", "CSS3", 
        "PostgreSQL", "Supabase", "React.js", "Twilio", 
        "Resend", "GameMaker Language (GML)", "Flutter/DART App Development"
    ],
    projects: [
        {
            title: "MultAI.ca",
            description: "The website for multai.ca, still under construction.",
            url: "https://www.multai.ca",
            tags: ["Web Design", "AI"],
            image: "assets/multai.png"
        },
        {
            title: "Dev-sync",
            description: "Like Pinterest for Developers, find interesting code snippets for your projects.",
            url: "https://devedit.app",
            tags: ["Full Stack", "Community", "Tech"],
            image: "assets/devsync.png"
        },
        {
            title: "QRing.io",
            description: "A website built for MultAI's post-quantum crypto called QRing.",
            url: "https://qring.io",
            tags: ["Security", "Web Design"],
            image: "assets/qring.png" 
        },
        {
            title: "FemConnect.live",
            description: "A dating site designed for femboys and queer guys seeking meaningful connections over random hookups.",
            url: "https://femconnect.live",
            tags: ["Full Stack", "Community"],
            image: "assets/femconnect.png"
        },
        {
            title: "Fake Game Foundry",
            description: "An interactive web application that teaches the fundamentals of game development through an intuitive UI.",
            url: "https://fakegamefoundry.fly.dev",
            tags: ["Education", "Interactive UI"],
            image: "assets/foundry.png"
        },
        {
            title: "KLB Industrial Website",
            description: "A professional corporate website developed for KLB Industrial Corp.",
            url: "https://klbindustrial.com",
            tags: ["React.js", "Corporate"],
            image: "assets/klb.png"
        },
        {
            title: "DevPilot",
            description: "Powershell program uses Ollama to simplify commands so you can just ask in plain english what you want done, and DevPilot will run the correct command for that function.",
            url: "https://github.com/TheJ4nitorNG/DevPilot",
            tags: ["PowerShell", "CLI", "AI Tool"],
            image: "assets/devpilot.png"
        },
        {
            title: "WTFKit",
            description: "A PowerShell/command line debugger tool.",
            url: "https://wtfkit.online",
            tags: ["PowerShell", "Debugger", "CLI"],
            image: "assets/wtfkit.png"
        },
        {
            title: "CmdSim",
            description: "Simulate your commands before you actually run them!",
            url: "https://github.com/TheJ4nitorNG/cmdsim/tree/master",
            tags: ["PowerShell", "CLI", "Simulator"],
            image: "assets/cmdsim.png"
        },
        {
            title: "WTFKit Online",
            description: "A website built to host the WTFKit files and explain how to install and use it properly.",
            url: "https://wtfkit.online/",
            tags: ["Web Design", "Documentation"],
            image: "assets/wtfkitonline.png"
        }
    ]
};

// Function to render skills
function renderSkills() {
    const skillsList = document.getElementById('skills-list');
    if (!skillsList) return; 

    portfolioData.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        li.className = 'skill-item';
        skillsList.appendChild(li);
    });
}

// Function to render projects
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return; 
    
    portfolioData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        card.innerHTML = `
            <img src="${project.image}" alt="Screenshot of ${project.title}" class="project-img" onerror="this.src='https://via.placeholder.com/400x200?text=Image+Coming+Soon'">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags-container">${tagsHtml}</div>
            <a href="${project.url}" target="_blank" class="btn">View Project &rarr;</a>
        `;
        
        projectsContainer.appendChild(card);
    });
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
});

// --- THEME TOGGLE LOGIC ---
const themeToggleBtn = document.getElementById('theme-toggle');

// 1. Check if the user has a saved theme preference in localStorage
const currentTheme = localStorage.getItem('theme');

// 2. If the saved theme is 'light', apply it immediately on load
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggleBtn.textContent = '🌙';
}

// 3. Listen for clicks on the toggle button
themeToggleBtn.addEventListener('click', () => {
    // Toggle the .light-mode class on the body
    document.body.classList.toggle('light-mode');
    
    // Determine which theme is currently active
    let theme = 'dark';
    if (document.body.classList.contains('light-mode')) {
        theme = 'light';
        themeToggleBtn.textContent = '🌙';
    } else {
        themeToggleBtn.textContent = '☀️';
    }
    
    // Save the user's preference to localStorage
    localStorage.setItem('theme', theme);
});