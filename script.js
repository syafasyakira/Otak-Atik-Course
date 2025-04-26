document.addEventListener('DOMContentLoaded', function() {
    const slidesData = [
        {
            title: "Belajar jadi seru dan menyenangkan",
            description: "Kursus interaktif untuk anak usia 5-12 tahun, dari menggambar hingga coding dasar",
            image: "assets/1.png"
        },
        {
            title: "Tingkatkan kreativitas anak",
            description: "Berbagai kelas seru yang membantu anak mengembangkan imajinasi dan berpikir kritis",
            image: "assets/2.png"
        },
        {
            title: "Belajar sambil bermain",
            description: "Metode pembelajaran yang menyenangkan membuat anak antusias untuk belajar hal baru",
            image: "assets/3.png"
        }
    ];
    
    const heroSlider = document.querySelector('.hero-slider');
    
    // Buat slide untuk data lainnya
    for (let i = 1; i < slidesData.length; i++) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        
        slide.innerHTML = `
            <div class="slide-image">
                <img src="${slidesData[i].image}" alt="Anak-anak belajar dengan menyenangkan" />
            </div>
            <div class="container">
                <div class="slide-content">
                    <h1>${slidesData[i].title}</h1>
                    <p>${slidesData[i].description}</p>
                    <a href="daftar.html" class="btn-daftar">Daftar Sekarang</a>
                </div>
            </div>
        `;
        
        heroSlider.appendChild(slide);
    }
    
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Fungsi untuk mengganti slide
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        
        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        
        slides[currentSlide].classList.add('active');
    }
    
    // Event listener untuk tombol
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
    
    // Auto slide
    let slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Pause auto slide saat hover
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    heroSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    });
});

document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('click', () => {
        const testimonial = card.getAttribute('data-testimonial');

        const quoteEl = document.querySelector('.testimonial-content .quote');
        quoteEl.classList.remove('fade-in');
        void quoteEl.offsetWidth; 
        quoteEl.textContent = `"${testimonial}"`;
        quoteEl.classList.add('fade-in');


        document.querySelectorAll('.testimonial-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

document.getElementById('hp').addEventListener('input', function () {
    const warning = document.getElementById('hp-warning');
    if (!this.checkValidity()) {
      warning.style.display = 'block';
    } else {
      warning.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // halaman: coba-gratis.html
    const cobaForm = document.getElementById('cobaForm');
    if (cobaForm) {
      cobaForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form berhasil dikirim! Terima kasih 😊');
        window.location.href = 'index.html';
      });
    }
  
    // halaman: daftar-sekarang.html
    const daftarForm = document.getElementById('daftarForm');
    const paymentBox = document.getElementById('paymentSection');
    const uploadBtn = document.querySelector('.upload-btn');
  
    if (daftarForm && paymentBox) {
      daftarForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form berhasil dikirim! Silakan lanjut ke pembayaran.');
        paymentBox.style.display = 'block';
        paymentBox.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    if (uploadBtn) {
      uploadBtn.addEventListener('click', function () {
        alert('Fitur unggah bukti pembayaran masih dalam tahap pengembangan.');
        window.location.href = 'index.html';
      });
    }
  });  