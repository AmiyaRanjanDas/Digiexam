//Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.remove('disable-scroll');
  }, 4000); // 4000ms = 4 seconds
});
TweenMax.staggerFrom(".preLoader", 1.5, {
  width: "100%",
  ease: Power1.easeIn,
  delay: 4
}, 0.09);
TweenMax.staggerFrom(".block", 0.8, {
  width: "5.1%",
  ease: Power1.easeIn,
  delay: 1
}, 0.07);
TweenMax.staggerFrom(".loder", 1.5, {
  opacity: 1,
  ease: Power1.easeIn,
  delay: 0.5
}, 0.09);
// =============================================
// =========Tween stack for home page===========
// =============================================
TweenMax.staggerFrom(".header", 1.5, {
  opacity: 0,
  y: 25,
  ease: Expo.easeInOut,
  delay: 2.5
}, 0.1);
TweenMax.staggerFrom(".home_section .content h1 span", 1.5, {
  opacity: 0,
  y: 25,
  ease: Expo.easeInOut,
  delay: 2.8
}, 0.05);
TweenMax.staggerFrom(".home_section .content p", 1.5, {
  opacity: 0,
  y: 25,
  ease: Expo.easeInOut,
  delay: 3
}, 0.07);

// =============================================
// ==============Navbar javascript==============
// =============================================
const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Dynamic content switching for both mega menus
document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const sidebar = link.closest(".sidebar");
    const contentArea = link
      .closest(".mega-content")
      .querySelector(".content-area");

    // Remove active class from all links in this sidebar
    sidebar.querySelectorAll("a").forEach((l) => l.classList.remove("active"));

    // Remove active class from all sections in this content area
    contentArea
      .querySelectorAll(".content-section")
      .forEach((section) => section.classList.remove("active"));

    // Add active class to current link and corresponding section
    link.classList.add("active");
    const sectionId = link.getAttribute("data-section");
    contentArea.querySelector(`#${sectionId}`).classList.add("active");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) {
    navLinks.classList.remove("active");
  }
});

document.querySelectorAll(".nav-links .has-mega").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      console.log(link.textContent.toLowerCase().replace(/\s+/g, ""));

      const menuId =
        link.textContent.toLowerCase().replace(/\s+/g, "") + "-menu";
      document.getElementById(menuId).classList.add("active");
    }
  });
});

// Back button handling
document.querySelectorAll(".mobile-back").forEach((back) => {
  back.addEventListener("click", () => {
    back.closest(".mobile-submenu").classList.remove("active");
  });
});

// Mobile section switching
document.querySelectorAll("[data-mobile-section]").forEach((link) => {
  link.addEventListener("click", (e) => {
    // e.preventDefault();
    const submenu = link.closest(".mobile-submenu");

    // Remove active class from all links and sections
    submenu.querySelectorAll("a").forEach((l) => l.classList.remove("active"));
    submenu
      .querySelectorAll(".content-section")
      .forEach((section) => section.classList.remove("active"));

    // Add active class to current link and section
    link.classList.add("active");
    const sectionId = link.getAttribute("data-mobile-section");
    submenu.querySelector(`#${sectionId}`).classList.add("active");
  });
});

// Close submenus when resizing above mobile breakpoint
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
    mobileSubmenus.forEach((submenu) => {
      submenu.classList.remove("active");
    });
  }
});


// ==========================================
// ==============scroll section==============
// ==========================================
const scrollSection = document.querySelector('.scroll_section');
const h1s = scrollSection.querySelectorAll('.h1_box h1');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  const sectionTop = scrollSection.offsetTop;
  const sectionHeight = scrollSection.offsetHeight;
  const windowHeight = window.innerHeight;
  const imgBox = document.querySelector('.img_box');

  // How far into the section are we?
  const distanceFromTop = scrollY + windowHeight - sectionTop;
  const scrollProgress = Math.min(Math.max(distanceFromTop / sectionHeight, 0), 1); 

  // Calculate transform based on progress
  const translateY = 80 - scrollProgress * 80; // from 80% to 0%

  h1s.forEach(h1 => {
    h1.style.transform = `translateY(${translateY}%)`;
  });
  const imgTranslateY = 80 - scrollProgress * 80;
  imgBox.style.transform = `translate(-50%, ${imgTranslateY}%)`;
});


