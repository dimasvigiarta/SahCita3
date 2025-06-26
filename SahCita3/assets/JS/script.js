// NAVBAR
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scroll");
  } else {
    navbar.classList.remove("nav-scroll");
  }
});

// Navbar scroll tetap
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scroll");
  } else {
    navbar.classList.remove("nav-scroll");
  }
});

// Ganti warna menu aktif saat diklik
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Hapus class active dari semua menu
      navLinks.forEach((el) => el.classList.remove("active"));
      // Tambahkan class active ke menu yang diklik
      this.classList.add("active");
    });
  });
});

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// TENTANG KAMI
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in-section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach((fader) => {
    observer.observe(fader);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Untuk animasi fade-in-section (gambar & konten)
  const faders = document.querySelectorAll(".fade-in-section");
  const fadeUps = document.querySelectorAll(".fade-up");

  const fadeObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach((el) => fadeObserver.observe(el));
  fadeUps.forEach((el) => fadeObserver.observe(el));
});

//LAYANAN KAMI
document.addEventListener("DOMContentLoaded", () => {
  const layananBtns = document.querySelectorAll(".layanan-btn");
  const contents = document.querySelectorAll(".layanan-content");
  const container = document.querySelector(".layanan-content-container");
  const fadeUpElements = document.querySelectorAll(".fade-up");

  // Fungsi animasi fade-up saat halaman pertama kali dibuka
  fadeUpElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, i * 150);
  });

  // Fungsi untuk mengatur tinggi container sesuai konten aktif
  function setContainerHeight() {
    const activeContent = document.querySelector(".layanan-content.show");
    if (!activeContent) {
      container.style.height = "0px";
      return;
    }
    const height = activeContent.offsetHeight;
    container.style.height = height + "px";
  }

  // Inisialisasi: Reset semua tombol dan konten, lalu aktifkan konten "legalitas"
  layananBtns.forEach((btn) => btn.classList.remove("active"));
  contents.forEach((c) => {
    c.classList.add("d-none");
    c.classList.remove("show");
  });

  const defaultBtn = document.querySelector(
    '.layanan-btn[data-target="legalitas"]'
  );
  const defaultContent = document.getElementById("legalitas");
  if (defaultBtn && defaultContent) {
    defaultBtn.classList.add("active");
    defaultContent.classList.remove("d-none");
    defaultContent.classList.add("show");
    setContainerHeight();
  }

  // Event listener tombol layanan
  layananBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Reset semua tombol
      layananBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const target = btn.getAttribute("data-target");

      contents.forEach((content) => {
        if (content.id === target) {
          content.classList.remove("d-none");
          // Delay kecil supaya animasi show dapat trigger dengan lancar
          setTimeout(() => {
            content.classList.add("show");
            setContainerHeight();
          }, 50);
        } else {
          content.classList.remove("show");
          // Setelah animasi selesai baru sembunyikan konten
          setTimeout(() => {
            content.classList.add("d-none");
            setContainerHeight();
          }, 300);
        }
      });
    });
  });
});

// GALERI
document.querySelectorAll(".card-img-top").forEach((img) => {
  img.addEventListener("click", function (e) {
    e.preventDefault();

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0,0,0,0.85)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999";
    overlay.style.cursor = "zoom-out";

    const fullImg = document.createElement("img");
    fullImg.src = img.src;
    fullImg.alt = img.alt || "";
    fullImg.style.maxWidth = "90%";
    fullImg.style.maxHeight = "90%";
    fullImg.style.borderRadius = "10px";
    fullImg.style.boxShadow = "0 15px 40px rgba(0,0,0,0.6)";
    fullImg.style.transition = "transform 0.3s ease";
    fullImg.style.transform = "scale(0.9)";
    setTimeout(() => {
      fullImg.style.transform = "scale(1)";
    }, 10);

    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  });
});
