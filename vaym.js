// Toggle navigation menu (mobile)
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.getElementById("navLinks");
    const showMenuBtn = document.querySelector(".fa-bars");
    const hideMenuBtn = document.querySelector(".fa-times");

    function showMenu() {
        if (navLinks) navLinks.style.right = "0";
    }

    function hideMenu() {
        if (navLinks) navLinks.style.right = "-200px";
    }

    if (showMenuBtn) showMenuBtn.addEventListener("click", showMenu);
    if (hideMenuBtn) hideMenuBtn.addEventListener("click", hideMenu);

    // Smooth scroll for navigation links (optional enhancement)
    const navItems = document.querySelectorAll(".nav-links ul li a");
    navItems.forEach(item => {
        item.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: "smooth" });
                hideMenu();
            }
        });
    });

    // Ministries 'READ MORE' buttons - expand/collapse details (optional enhancement)
    document.querySelectorAll('.Ministries-col button').forEach((btn, idx) => {
        btn.addEventListener('click', function () {
            const col = btn.closest('.Ministries-col');
            if (!col) return;
            // Toggle expanded state
            col.classList.toggle('expanded');
            // Optionally, change button text
            btn.textContent = col.classList.contains('expanded') ? "SHOW LESS" : "READ MORE";
            // Optionally, show/hide extra content if you add more details
        });
    });

    // Social icon links (add correct URLs for actual use)
    const socialLinks = {
        instagram: "https://www.instagram.com/",
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        youtube: "https://www.youtube.com/"
    };
    document.querySelectorAll('.icons .fa').forEach(icon => {
        icon.style.cursor = "pointer";
        icon.addEventListener('click', function () {
            if (icon.classList.contains('fa-instagram')) window.open(socialLinks.instagram, '_blank');
            if (icon.classList.contains('fa-facebook')) window.open(socialLinks.facebook, '_blank');
            if (icon.classList.contains('fa-twitter')) window.open(socialLinks.twitter, '_blank');
            if (icon.classList.contains('fa-youtube-play')) window.open(socialLinks.youtube, '_blank');
        });
    });

    // Optional: Prevent page reload for hero buttons without links
    document.querySelectorAll('.hero-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            if (!btn.getAttribute('href') || btn.getAttribute('href') === "") {
                e.preventDefault();
                // You can show a modal/contact form here
            }
        });
    });
});
