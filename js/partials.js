// Partials Loader - loads header and footer from separate files
export function loadPartials() {
  loadHeader();
  loadFooter();
}

async function loadHeader() {
  try {
    const response = await fetch("./duck_partials/header.html");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const headerHtml = await response.text();
    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
      headerContainer.innerHTML = headerHtml;

      // Set active navigation based on current page
      setActiveNavigation();
    }
  } catch (error) {
    console.error("Error loading header:", error);
    // Fallback header
    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
      headerContainer.innerHTML = `
                <div id="cookie-bar" class="cookie-bar">
  <div class="cookie-content">
    <div class="cookie-icon">⚡</div>
    <div class="cookie-text">
      <h4>Cookie Notice</h4>
      <p>
        We use cookies to enhance your Duck Duck Adventure gaming experience. 
        By continuing to use this site, you consent to our use of cookies.
      </p>
    </div>
    <div class="cookie-buttons">
      <button id="accept-cookies" class="btn-primary">
        <span class="btn-text">Accept All</span>
        <span class="btn-icon">✓</span>
      </button>
      <a href="./duck-cookies.html" class="btn-secondary">Learn More</a>
    </div>
  </div>
</div>
                <header id="header" class="header">
                    <div class="container">
                        <div class="header-content">
                            <div class="logo">
                                <a href="./" class="logo-link">
                                    <span class="logo-icon">⚡</span>
                                    <span class="logo-text">WinFlowArena.com</span>
                                </a>
                            </div>
                            <nav class="nav">
                                <ul class="nav-list">
                                    <li class="nav-item"><a href="./" class="nav-link" id="nav-home">Home</a></li>
                                    <li class="nav-item"><a href="./duck-news.html" class="nav-link" id="nav-news">Updates</a></li>
                                    <li class="nav-item"><a href="./duck-contacts.html" class="nav-link" id="nav-contact">Support</a></li>
                                </ul>
                            </nav>
                            <button class="mobile-menu-toggle" id="mobile-menu-toggle">
                                <span class="hamburger-line"></span>
                                <span class="hamburger-line"></span>
                                <span class="hamburger-line"></span>
                            </button>
                        </div>
                    </div>
                </header>
            `;
      setActiveNavigation();
    }
  }
}

async function loadFooter() {
  try {
    const response = await fetch("./duck_partials/footer.html");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const footerHtml = await response.text();
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
      footerContainer.innerHTML = footerHtml;
    }
  } catch (error) {
    console.error("Error loading footer:", error);
    // Fallback footer
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
      footerContainer.innerHTML = `
                <footer id="footer" class="footer">
                    <div class="container">
                        <div class="footer-content">
                            <div class="footer-section">
                                <h3 class="footer-title">Contact Us</h3>
                                <div class="contact-info">
                                    <p class="contact-item" id="footer-email">Email: contact@winflowarena.com</p>
                                    <p class="contact-item" id="footer-phone">Phone: +61 2 0208 8888</p>
                                    <p class="contact-item" id="footer-address">Address: 47 Harbour Drive, Melbourne VIC 3000, Australia</p>
                                </div>
                            </div>
                            <div class="footer-section">
                                <h3 class="footer-title">Legal</h3>
                                <ul class="footer-links">
                                    <li><a href="./duck-cookies.html" class="footer-link">Cookie Policy</a></li>
                                    <li><a href="./duck-privacy.html" class="footer-link">Privacy Policy</a></li>
                                    <li><a href="./duck-disclaimer.html" class="footer-link">Disclaimer</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-bottom">
                            <p class="copyright">&copy; <span id="current-year">2025</span> WinFlowArena.com. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            `;
    }
  }
}

function setActiveNavigation() {
  const currentPage = getCurrentPage();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  switch (currentPage) {
    case "home":
      const homeLink = document.getElementById("nav-home");
      if (homeLink) homeLink.classList.add("active");
      break;
    case "news":
      const newsLink = document.getElementById("nav-news");
      if (newsLink) newsLink.classList.add("active");
      break;
    case "contact":
      const contactLink = document.getElementById("nav-contact");
      if (contactLink) contactLink.classList.add("active");
      break;
  }
}

function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes("duck-news.html")) return "news";
  if (path.includes("duck-contacts.html")) return "contact";
  return "home";
}
