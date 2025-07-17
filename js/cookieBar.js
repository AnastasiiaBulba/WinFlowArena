// Cookie Bar functionality
export function initializeCookieBar() {
  const cookieBar = document.getElementById("cookie-bar");
  const acceptButton = document.getElementById("accept-cookies");

  if (!cookieBar || !acceptButton) return;

  // Check if user has already accepted cookies
  const cookiesAccepted = localStorage.getItem("duckDuckCookiesAccepted");

  if (!cookiesAccepted) {
    // Show cookie bar after a short delay
    setTimeout(() => {
      cookieBar.classList.add("show");
    }, 1500);
  }

  // Handle accept button click
  acceptButton.addEventListener("click", function () {
    localStorage.setItem("duckDuckCookiesAccepted", "true");

    // Add success animation
    const btnText = this.querySelector(".btn-text");
    const btnIcon = this.querySelector(".btn-icon");

    if (btnText && btnIcon) {
      btnText.textContent = "Accepted!";
      btnIcon.textContent = "🎉";
      this.style.backgroundColor = "var(--accent-color)";
      this.style.transform = "scale(1.05)";

      // Hide cookie bar with animation
      setTimeout(() => {
        cookieBar.classList.remove("show");
      }, 500);

      // Reset button after animation
      setTimeout(() => {
        btnText.textContent = "Accept All";
        btnIcon.textContent = "✓";
        this.style.backgroundColor = "";
        this.style.transform = "";
      }, 2000);
    }
  });

  // Handle escape key to hide cookie bar
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && cookieBar.classList.contains("show")) {
      cookieBar.classList.remove("show");
    }
  });

  // Add click outside to dismiss (optional)
  document.addEventListener("click", function (e) {
    if (
      cookieBar.classList.contains("show") &&
      !cookieBar.contains(e.target) &&
      !e.target.closest(".cookie-bar")
    ) {
      cookieBar.classList.remove("show");
    }
  });
}
