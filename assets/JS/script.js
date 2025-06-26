// === NAVBAR SCROLL & ACTIVE LINK ===
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  // 1. Ubah navbar saat scroll
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
  }

  handleNavbarScroll();
  window.addEventListener("scroll", handleNavbarScroll);

  // 2. Tandai link aktif berdasarkan halaman
  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "") currentPage = "index.html";

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");

    // Jika sama, tandai sebagai aktif
    if (linkHref === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    // Tambahan: efek langsung saat klik
    link.addEventListener("click", function () {
      navLinks.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });

    // 3. Tambahkan efek scroll smooth untuk anchor
    if (linkHref && linkHref.startsWith("#")) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(linkHref);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });
});

// === ANIMASI FADE UP SAAT MASUK VIEWPORT ===
document.addEventListener("DOMContentLoaded", () => {
  const fadeUps = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target); // hanya sekali tampil
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeUps.forEach((el) => observer.observe(el));
});

// === LAYANAN KAMI: SWITCH BUTTON DENGAN KONTEN SMOOTH ===
document.addEventListener("DOMContentLoaded", () => {
  const layananBtns = document.querySelectorAll(".layanan-btn");
  const contents = document.querySelectorAll(".layanan-content");
  const container = document.querySelector(".layanan-content-container");

  function setContainerHeight() {
    const activeContent = document.querySelector(".layanan-content.show");
    if (!activeContent) {
      container.style.height = "0px";
      return;
    }
    const height = activeContent.offsetHeight;
    container.style.height = height + "px";
  }

  // Inisialisasi default
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

  // Event saat tombol layanan diklik
  layananBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      layananBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const target = btn.getAttribute("data-target");

      contents.forEach((content) => {
        if (content.id === target) {
          content.classList.remove("d-none");
          setTimeout(() => {
            content.classList.add("show");
            setContainerHeight();
          }, 50);
        } else {
          content.classList.remove("show");
          setTimeout(() => {
            content.classList.add("d-none");
            setContainerHeight();
          }, 300);
        }
      });
    });
  });
});

// HERO SECTION
document.addEventListener("DOMContentLoaded", function () {
  const typedText = document.getElementById("typed-text");
  const texts = [
    "SahCita adalah sebuah perusahaan yang bergerak dalam bidang legalitas bisnis.",
    "Kami membantu legalitas usaha Anda secara profesional dan efisien.",
    "Bersama SahCita, bangun usaha Anda dengan aman dan legal.",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 60;
  let pauseBetween = 1800; // jeda antar kalimat

  function type() {
    const currentText = texts[textIndex];
    let displayedText = currentText.substring(0, charIndex);
    typedText.innerHTML = displayedText;

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        isDeleting = true;
        setTimeout(type, pauseBetween);
      }
    } else {
      if (charIndex > 0) {
        charIndex--;
        setTimeout(type, typingSpeed / 2);
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
      }
    }
  }

  type();
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
  // === ANIMASI FADE-UP SAAT MASUK HALAMAN ===
  const fadeUps = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeUps.forEach((el) => observer.observe(el));

  // === INTERAKSI LAYANAN ===
  const layananBtns = document.querySelectorAll(".layanan-btn");
  const contents = document.querySelectorAll(".layanan-content");
  const container = document.querySelector(".layanan-content-container");

  function setContainerHeight() {
    const activeContent = document.querySelector(".layanan-content.show");
    if (!activeContent) {
      container.style.height = "0px";
      return;
    }
    const height = activeContent.offsetHeight;
    container.style.height = height + "px";
  }

  // Inisialisasi tampilan awal (legalitas)
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

  // Event tombol
  layananBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      layananBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const target = btn.getAttribute("data-target");

      contents.forEach((content) => {
        if (content.id === target) {
          content.classList.remove("d-none");
          setTimeout(() => {
            content.classList.add("show");
            setContainerHeight();
          }, 50);
        } else {
          content.classList.remove("show");
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
document.addEventListener("DOMContentLoaded", () => {
  const fadeUps = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeUps.forEach((el) => observer.observe(el));
});

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

// KONTAK
document.addEventListener("DOMContentLoaded", () => {
  const fadeUpEls = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // agar animasi hanya sekali
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeUpEls.forEach((el) => {
    observer.observe(el);
  });
});
