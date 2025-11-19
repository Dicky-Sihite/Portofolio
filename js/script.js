// script.js

// Smooth scroll for nav links (existing code)
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll reveal animation (existing code)
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Project Data (Add your project details here)
const projectsData = {
  Katalog: {
    title: "Katalog Perpustakaan",
    images: [
      "img/project-katalog.png", 
      "img/katalog.png", 
    ],
    description: "The Surabaya City Library and Archives Service Catalog Website is a digital platform designed to make it easier for the public to find, browse, and access the book and archive collections available in the library. This system features a modern, informative, and responsive interface, allowing users to search the catalog quickly and efficiently. This website also features smart search, collection categories, detailed book information, and constantly updated library data integration. With the introduction of this digital catalog, the Surabaya City Library and Archives Service is committed to improving public information services and supporting community literacy thru technology that is more accessible and user-friendly.",
    features: [
      "Elegant & Responsive UI/UX",
      "Catalog Search"
    ],
    technologies: [
      "CodeIgniter 3",
      "Bootstrapt",
      "Figma",
      "Postgre"
    ],
    githubLink: ""
  },
  ari: {
    title: "Weather App ARI",
    images: [
      "img/project-weather.png", 
      "img/ari2.png", 
    ],
    description: "The ARI application is a mobile-based weather app designed to provide users with real-time weather information. Developed using the Flutter framework, the app integrates directly with the OpenWeatherMap API to retrieve accurate and up-to-date global weather data.",
    features: [
      "Daily weather forecasts",
      "City-based search",
      "Dark mode",
      "Integration with global weather API",
      "Real-time weather updates"
    ],
    technologies: [
      "Flutter",
      "Dart",
      "OpenWeatherMap API",
      "Provider (State Management)"
    ],
    githubLink: "https://github.com/Dicky-Sihite/ARI"
  },
  JendelaInformasi: {
    title: "Jendela Informasi",
    images: [
      "img/project-jendela.png",
      "img/jendela2.png",
      "img/jendela3.png",
      "img/jendela4.png",
    ],
    description: "The website features a user-friendly interface, intuitive navigation, and is equipped with an API system that enables seamless integration between the frontend and backend. With a focus on fast access, accurate information, and ease of use, Jendela Informasi serves as a modern news platform that is flexible and ready for future development.",
    features: [
      "Dynamic Homepage",
      "News Management (CRUD)",
      "User Authentication",
      "Integrated API",
      "Social Media Sharing"
    ],
    technologies: [
      "Laravel V.10",
      "PHP V.8.1",
      "MySQL",
      "Stripe API"
    ],
    githubLink: "https://github.com/Dicky-Sihite/ecommerce-example"
  },
 talenta: {
    title: "TALENTA ",
    images: [
      "img/project-SIM.png",
      "img/talenta2.png",
      "img/talenta3.png",
      "img/talenta4.png",

    ],
    description: "TALENTA Campus Talent & Content Information System is a web-based information system designed to showcase and manage student talents across various domains such as music, film, creative content, and more.",
    features: [
      "Role-Based Authentication System (Student, Judge, Admin)",
      "Talent Profile and Student Portfolio Management",
      "Objective Scoring System by Judges",
      "Public Showcase and Voting Feature"
    ],
    technologies: [
      "Laravel V.10", 
      "PHP V.8.2", 
      "Semantic UI", 
      "MySQL"],
    githubLink: "https://github.com/rradz11/sim-talenta"
  },

  itemrift: {
    title: "Item-Rift",
    images: [
      "img/project-Itemrift.png",
      "img/itemrift2.png",
      "img/itemrift3.png",
      "img/itemrift4.png",
    ],
    description: "Item-Rift is a web-based marketplace for second-hand goods among university students, promoting sustainable and affordable campus commerce.",
    features: [
      "User Authentication & Role Management",
      "Item Listing & Management",
      "Messaging System",
      "Forum Module",
      "User Profile Management",
      "Admin Dashboard"
    ],
    technologies: ["Laravel", "PHP", "MySQL",],
    githubLink: "https://github.com/BahauddinRahmanHakim/Item-Rift"
  },

  tripwase: {
    title: "TripWase",
    images: [
      "img/project-TripWase.png",
      "img/tripwase.png",
    ],
    description: "TripWase is a Flutter-based app that estimates travel expenses interactively, helping users plan better with pie chart visualizations.",
    features: [
      "Daily and fixed expense input",
      "Category breakdown",
      "Pie chart visualization",
      "Intuitive user interface"
    ],
    technologies: ["Flutter", "Dart", "Charts"],
    githubLink: "https://github.com/Dicky-Sihite/TRIPWISE"
  },

  audrica: {
    title: "Audrica",
    images: ["img/project-Audrica.png"],
    description: "Audrica is a mobile music player UI/UX project crafted in Figma with a focus on user-friendliness and modern design expectations.",
    features: [
      "Login & Registration System",
      "Search Functionality",
      "Playlist Selection",
      "Music Playback (Player)",
      "Music Library Access",
    ],
    technologies: ["Figma", "MAZE"],
    FigmaLink: "https://www.figma.com/design/Nm2iSr25VCEHY0BworhTUE/Audrica?node-id=0-1&t=PFWufhn4704LXc0b-1"
  },

  readify: {
    title: "Readify",
    images: ["img/project-Readify.png"],
    description: "Readify is an e-book app UI/UX project built in Figma, focusing on clean design and usability for young readers and students.",
    features: [
      "Login & Registration System",
      "Book Categories",
      "Book List",
      "Book Details Page",
      "Book Reading Page",
      "Notifications & Reading History",
      "etc.",
    ],
    technologies: ["Figma", "MAZE"],
    FigmaLink: "https://www.figma.com/design/9DgQOpa70SpEqm1vf73yQZ/UI-UX-Design?node-id=0-1&t=KTebZfjzzoAoLnr2-1"
  },

  bangku: {
    title: "Bangku Belakang",
    images: [
      "img/bangku.png",
      "img/bangku2.png"
    ],
    description: "Bangku Belakang is a web-based application built with HTML, CSS, and JavaScript, designed to display real-time information about movies and TV series using integration with the TMDb (The Movie Database) API.",
    features: [
      "Integrated with API",
      "Filter by Genre",
      "Movie Category",
      "Failed Movies",
    ],
    technologies: [
      "HTML", "CSS", "JavaScript","TMDb API"
    ],
    githubLink: "https://github.com/Dicky-Sihite/Bangku-Belakang"
  }
};

// Sidebar elements
const projectSidebar = document.getElementById('projectSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const closeSidebarBtn = document.querySelector('.close-sidebar-btn');
const sidebarProjectTitle = document.getElementById('sidebarProjectTitle');
const sidebarImageGallery = document.getElementById('sidebarImageGallery');
const sidebarProjectDescription = document.getElementById('sidebarProjectDescription');
const sidebarProjectFeatures = document.getElementById('sidebarProjectFeatures');
const sidebarProjectTech = document.getElementById('sidebarProjectTech');
const sidebarGithubLink = document.getElementById('sidebarGithubLink');
const sidebarFigmaLink = document.getElementById('sidebarFigmaLink');

// Function to open sidebar and populate content
function openProjectSidebar(projectId) {
  const project = projectsData[projectId];

  if (project) {
    sidebarProjectTitle.textContent = project.title;
    sidebarProjectDescription.textContent = project.description;
    sidebarGithubLink.href = project.githubLink;
    sidebarFigmaLink.href = project.FigmaLink;

    // Clear previous images
    sidebarImageGallery.innerHTML = '';
    // Add new images
    project.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${project.title} screenshot`;
      img.loading = "lazy";
      sidebarImageGallery.appendChild(img);
    });
    // Clear previous features
    sidebarProjectFeatures.innerHTML = '';
    // Add new features
    project.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      sidebarProjectFeatures.appendChild(li);
    });

    // Clear previous technologies
    sidebarProjectTech.innerHTML = '';
    // Add new technologies
    project.technologies.forEach(tech => {
      const li = document.createElement('li');
      li.textContent = tech;
      sidebarProjectTech.appendChild(li);
    });

    projectSidebar.classList.add('open');
    sidebarOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling body when sidebar is open
  }
}

// Function to close sidebar
function closeProjectSidebar() {
  projectSidebar.classList.remove('open');
  sidebarOverlay.classList.remove('open');
  document.body.style.overflow = ''; // Restore body scrolling
}

// Event listeners for opening sidebar
document.querySelectorAll('.view-details-btn').forEach(button => {
  button.addEventListener('click', function() {
    const projectId = this.closest('.project-card').dataset.projectId;
    openProjectSidebar(projectId);
  });
});

// Event listeners for closing sidebar
closeSidebarBtn.addEventListener('click', closeProjectSidebar);
sidebarOverlay.addEventListener('click', closeProjectSidebar); // Close when clicking outside sidebar

// Optional: Project scroll controls (if you have them)
function scrollProjects(direction) {
  const projectScroll = document.getElementById('projectScroll');
  const scrollAmount = 350; // Adjust based on your card width + gap
  projectScroll.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}


function openProjectSidebar(projectId) {
  const project = projectsData[projectId];

  if (project) {
    sidebarProjectTitle.textContent = project.title;
    sidebarProjectDescription.textContent = project.description;

    // GITHUB LINK
    if (project.githubLink) {
      sidebarGithubLink.href = project.githubLink;
      sidebarGithubLink.style.display = "inline-block";
    } else {
      sidebarGithubLink.style.display = "none";
    }

    // FIGMA LINK
    if (project.FigmaLink) {
      sidebarFigmaLink.href = project.FigmaLink;
      sidebarFigmaLink.style.display = "inline-block";
    } else {
      sidebarFigmaLink.style.display = "none";
    }

    // IMAGES
    sidebarImageGallery.innerHTML = '';
    project.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${project.title} screenshot`;
      img.loading = "lazy";
      sidebarImageGallery.appendChild(img);
    });

    // FEATURES
    sidebarProjectFeatures.innerHTML = '';
    project.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      sidebarProjectFeatures.appendChild(li);
    });

    // TECHNOLOGIES
    sidebarProjectTech.innerHTML = '';
    project.technologies.forEach(tech => {
      const li = document.createElement('li');
      li.textContent = tech;
      sidebarProjectTech.appendChild(li);
    });

    // TAMPILKAN SIDEBAR
    projectSidebar.classList.add('open');
    sidebarOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
