function loadContent(contentId) {
  const currentContent = document.querySelector(
    '#konten-utama > div[style="display: block"]'
  );
  if (currentContent) {
    currentContent.style.opacity = "0";
    currentContent.style.transform = "translateY(20px)";

    setTimeout(() => {
      document.querySelectorAll("#konten-utama > div").forEach((div) => {
        div.style.display = "none";
        div.style.opacity = "0";
        div.style.transform = "translateY(20px)";
      });

      const selectedContent = document.getElementById(contentId);
      selectedContent.style.display = "block";

      setTimeout(() => {
        selectedContent.style.opacity = "1";
        selectedContent.style.transform = "translateY(0)";
        selectedContent.classList.add("fade-in");
      }, 50);
    }, 300);
  } else {
    document.querySelectorAll("#konten-utama > div").forEach((div) => {
      div.style.display = "none";
    });
    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = "block";
    selectedContent.classList.add("fade-in");
  }

  document.querySelectorAll(".menu a").forEach((link) => {
    link.classList.remove("active");
  });

  document
    .querySelector(`.menu a[onclick="loadContent('${contentId}')"]`)
    .classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  updatePageTitle(contentId);
}

function updatePageTitle(contentId) {
  const baseSiteName = "Rian Septiawan";
  let pageTitle;

  switch (contentId) {
    case "beranda":
      pageTitle = `${baseSiteName} - Portofolio Pendidikan Teknik Informatika UNP`;
      break;
    case "pendidikan-formal":
      pageTitle = `Riwayat Pendidikan | ${baseSiteName} - Portofolio`;
      break;
    case "pendidikan-non-formal":
      pageTitle = `Kursus & Pelatihan | ${baseSiteName} - Portofolio`;
      break;
    case "pengalaman-organisasi":
      pageTitle = `Pengalaman Organisasi | ${baseSiteName} - Portofolio`;
      break;
    case "galeri":
      pageTitle = `Galeri Foto | ${baseSiteName} - Portofolio`;
      break;
    default:
      pageTitle = `${baseSiteName} - Portofolio Pendidikan Teknik Informatika UNP`;
  }

  document.title = pageTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    switch (contentId) {
      case "beranda":
        metaDescription.setAttribute(
          "content",
          "Portofolio Rian Septiawan, mahasiswa Pendidikan Teknik Informatika UNP, dengan pengalaman di bidang IT, web development, dan organisasi kampus."
        );
        break;
      case "pendidikan-formal":
        metaDescription.setAttribute(
          "content",
          "Riwayat pendidikan formal Rian Septiawan, dari SD hingga kuliah di Pendidikan Teknik Informatika UNP."
        );
        break;
      case "pendidikan-non-formal":
        metaDescription.setAttribute(
          "content",
          "Kursus dan pelatihan yang diikuti oleh Rian Septiawan, termasuk web development dan digital marketing."
        );
        break;
      case "pengalaman-organisasi":
        metaDescription.setAttribute(
          "content",
          "Pengalaman organisasi Rian Septiawan di INFITECH dan USKO FT UNP sebagai aktifis kampus."
        );
        break;
      case "galeri":
        metaDescription.setAttribute(
          "content",
          "Galeri foto kegiatan Rian Septiawan di kampus UNP dan berbagai acara."
        );
        break;
    }
  }
}

function showCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  if (!document.getElementById("current-time")) {
    const timeElement = document.createElement("div");
    timeElement.id = "current-time";
    timeElement.style.opacity = "0";
    timeElement.style.transform = "translateY(-20px)";
    timeElement.style.transition = "all 0.5s ease";
    document.querySelector(".kepala").appendChild(timeElement);

    setTimeout(() => {
      timeElement.style.opacity = "1";
      timeElement.style.transform = "translateY(0)";
    }, 100);
  }

  document.getElementById("current-time").textContent = timeString;
}

function addMenuHoverEffect() {
  const menuItems = document.querySelectorAll(".menu a");

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transition = "all 0.3s";
    });
  });
}

function addLinkHighlightEffect() {
  const sidebarLinks = document.querySelectorAll(".sisi_kiri a, .sisi_kanan a");

  sidebarLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.backgroundColor = "rgba(52, 152, 219, 0.1)";
      link.style.borderRadius = "4px";
      link.style.transform = "translateX(5px)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.backgroundColor = "transparent";
      link.style.transform = "translateX(0)";
    });
  });
}

function addParallaxEffect() {
  const header = document.querySelector(".kepala");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < 150) {
      header.style.backgroundPositionY = `calc(50% + ${
        scrollPosition * 0.4
      }px)`;
    }
  });
}

function enhanceGalleryInteraction() {
  const galleryItems = document.querySelectorAll(".galeri-item");

  galleryItems.forEach((item) => {
    const img = item.querySelector("img");
    const caption = item.querySelector("p");

    item.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.1)";
      caption.style.backgroundColor = "#3498db";
      caption.style.color = "white";
    });

    item.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      caption.style.backgroundColor = "";
      caption.style.color = "";
    });
  });
}

function addSmoothTransitions() {
  document.querySelectorAll(".badan > div").forEach((div) => {
    div.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    div.style.opacity = "1";
    div.style.transform = "translateY(0)";
  });
}

function validateContactForm() {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
        form.classList.add("success-animation");
        setTimeout(() => {
          alert("Pesan berhasil dikirim!");
          form.reset();
          form.classList.remove("success-animation");
        }, 500);
      } else {
        if (!name) document.getElementById("name").classList.add("error");
        if (!email) document.getElementById("email").classList.add("error");
        if (!message) document.getElementById("message").classList.add("error");

        alert("Silakan isi semua field!");
      }
    });

    form.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("input", () => {
        input.classList.remove("error");
      });
    });
  }
}

function setupGalleryModal() {
  if (!document.getElementById("galleryModal")) {
    const modalHTML = `
      <div id="galleryModal" class="modal">
        <span class="close">&times;</span>
        <a class="prev">&#10094;</a>
        <a class="next">&#10095;</a>
        <img class="modal-content" id="modalImage">
        <div id="modalCaption" class="modal-caption"></div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    const modal = document.getElementById("galleryModal");
    const closeBtn = modal.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    });

    const prevBtn = modal.querySelector(".prev");
    const nextBtn = modal.querySelector(".next");

    prevBtn.addEventListener("click", () => {
      navigateGallery(-1);
    });

    nextBtn.addEventListener("click", () => {
      navigateGallery(1);
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => {
          modal.style.display = "none";
        }, 300);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (modal.style.display === "block") {
        if (e.key === "Escape") {
          modal.classList.remove("show");
          setTimeout(() => {
            modal.style.display = "none";
          }, 300);
        } else if (e.key === "ArrowLeft") {
          navigateGallery(-1);
        } else if (e.key === "ArrowRight") {
          navigateGallery(1);
        }
      }
    });
  }
}

let currentImageIndex = 0;
let galleryImages = [];

function openImageModal(img, caption, index) {
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("modalCaption");

  currentImageIndex = index;

  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = caption;

  setTimeout(() => {
    modal.classList.add("show");
  }, 50);
}

function navigateGallery(step) {
  if (galleryImages.length === 0) return;

  currentImageIndex =
    (currentImageIndex + step + galleryImages.length) % galleryImages.length;
  const newImg = galleryImages[currentImageIndex].querySelector("img");
  const newCaption =
    galleryImages[currentImageIndex].querySelector("p").textContent;

  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("modalCaption");

  modalImg.style.opacity = "0";
  modalImg.style.transform = "scale(0.95)";

  setTimeout(() => {
    modalImg.src = newImg.src;
    captionText.innerHTML = newCaption;
    modalImg.style.opacity = "1";
    modalImg.style.transform = "scale(1)";
  }, 300);
}

function enhanceGalleryItems() {
  galleryImages = Array.from(document.querySelectorAll(".galeri-item"));

  galleryImages.forEach((item, index) => {
    const img = item.querySelector("img");
    const caption = item.querySelector("p").textContent;

    item.addEventListener("click", () => {
      openImageModal(img, caption, index);
    });

    item.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.1)";
      item.querySelector("p").style.backgroundColor = "#3498db";
      item.querySelector("p").style.color = "white";
    });

    item.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      item.querySelector("p").style.backgroundColor = "";
      item.querySelector("p").style.color = "";
    });
  });
}

function setupResponsiveMenu() {
  const menuItems = document.querySelectorAll(".menu ul li a");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
      }
    });
  });
}

// Dark mode
function initTheme() {
  const storedTheme = localStorage.getItem("theme");


  const themeToApply = storedTheme || "light";

  setTheme(themeToApply);
}

function setTheme(themeName) {
  document.documentElement.setAttribute("data-theme", themeName);

  localStorage.setItem("theme", themeName);

  updateThemeToggleIcon(themeName);
}

function toggleTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  setTheme(newTheme);

  animateThemeChange();
}

function updateThemeToggleIcon(theme) {
  const sunPath = document.querySelector(".theme-toggle .sun");
  const moonPath = document.querySelector(".theme-toggle .moon");

  if (theme === "dark") {
    sunPath.style.display = "none";
    moonPath.style.display = "block";
  } else {
    sunPath.style.display = "block";
    moonPath.style.display = "none";
  }
}

function animateThemeChange() {
  document.body.classList.add("theme-transition");
  setTimeout(() => {
    document.body.classList.remove("theme-transition");
  }, 500);
}

function setupThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupThemeToggle();

  addSmoothTransitions();
  loadContent("beranda");
  showCurrentTime();
  setInterval(showCurrentTime, 1000);
  addMenuHoverEffect();
  addLinkHighlightEffect();
  addParallaxEffect();
  setTimeout(enhanceGalleryInteraction, 1000);
  validateContactForm();
  setupGalleryModal();
  setupResponsiveMenu();

  const galleryContent = document.getElementById("galeri");
  if (galleryContent) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target.style.display === "block") {
          enhanceGalleryItems();
        }
      });
    });

    observer.observe(galleryContent, {
      attributes: true,
      attributeFilter: ["style"],
    });

    if (galleryContent.style.display === "block") {
      enhanceGalleryItems();
    }
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newTheme = e.matches ? "dark" : "light";
      if (!localStorage.getItem("theme")) {
        setTheme(newTheme);
      }
    });

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
    } else {
    }
  });
});
