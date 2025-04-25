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

// =============================================
// ===========carousel in home page=============
// =============================================
$(document).ready(function () {
  $("#owl-carousel-1").owlCarousel({
    loop: true, // Enable infinite loop
    margin: 30, // Space between items
    nav: true, // Show next/prev buttons
    dots: false, // Show dots navigation
    responsive: {
      0: {
        items: 1, // Items for small screens
      },
      600: {
        items: 2, // Items for medium screens
      },
      1000: {
        items: 3, // Items for large screens
      },
    },
  });
});

// =============================================
// ========carousel in what we do page==========
// =============================================
$(document).ready(function () {
  $("#owl-carousel-2").owlCarousel({
    loop: true, // Enable infinite loop
    margin: 30, // Space between items
    nav: true, // Show next/prev buttons
    dots: false, // Show dots navigation
    responsive: {
      0: {
        items: 1, // Items for small screens
      },
      600: {
        items: 2, // Items for medium screens
      },
      1000: {
        items: 4, // Items for large screens
      },
    },
  });
});

// =============================================
// ========accordian in what we do page=========
// =============================================
$(document).ready(function () {
  $(".accordion-list > li > .answer").hide();

  $(".accordion-list > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
});
