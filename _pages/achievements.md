---
layout: page
title: Достижения
permalink: /achievements/
nav: true
nav_order: 3
---

<style>
  :root {
    --ach-bg: var(--bs-body-bg, #ffffff);
    --ach-text: var(--bs-body-color, #212529);
    --ach-card-bg: var(--bs-card-bg, #ffffff);
    --ach-border: var(--bs-border-color, #dee2e6);
    --ach-math-bg: #0d6efd;
    --ach-inf-bg: #198754;
    --ach-nav-color: var(--bs-body-color, #212529);
  }
  [data-bs-theme="dark"], [data-theme="dark"], .dark-mode, html.dark, body.dark {
    --ach-bg: var(--bs-body-bg-dark, #212529);
    --ach-text: var(--bs-body-color-dark, #e9ecef);
    --ach-card-bg: var(--bs-card-bg-dark, #2c3034);
    --ach-border: var(--bs-border-color-dark, #495057);
    --ach-math-bg: #3d8bfd;
    --ach-inf-bg: #20c997;
    --ach-nav-color: #e9ecef;
  }

  .ach-section {
    background-color: var(--ach-bg);
    color: var(--ach-text);
    padding: 1rem 0;
  }
  .ach-section h2 { color: var(--ach-text); margin-bottom: 1.5rem; font-weight: 600; }

  .ach-card {
    background-color: var(--ach-card-bg);
    border: 1px solid var(--ach-border);
    color: var(--ach-text);
  }
  .ach-card .table { color: var(--ach-text); --bs-table-bg: transparent; }
  .ach-card .table th, .ach-card .table td { border-color: var(--ach-border); }

  .ach-header { color: #fff !important; text-decoration: none !important; }
  .ach-header .btn-link { color: #fff !important; text-decoration: none !important; }
  .ach-header .btn-link:hover, .ach-header .btn-link:focus { color: #f8f9fa !important; }

  /* 🎯 Фикс Swiper: изолируем от конфликтов Bootstrap/темы */
  .mySwiper {
    width: 100%;
    overflow: hidden;
    border-radius: 0.5rem;
    padding-bottom: 3rem; /* место для пагинации */
  }
  .swiper-slide {
    height: auto;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .swiper-slide img {
    width: 100%;
    height: 320px; /* Фиксируем высоту для ровного вида */
    object-fit: cover;
    display: block;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  @media (max-width: 768px) { .swiper-slide img { height: 220px; } }

  /* Адаптивные стрелки и точки */
  .swiper-button-next, .swiper-button-prev {
    color: var(--ach-nav-color) !important;
    background: rgba(255,255,255,0.8);
    border-radius: 50%;
    width: 36px !important;
    height: 36px !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  .swiper-button-next::after, .swiper-button-prev::after { font-size: 16px !important; font-weight: 700; }
  [data-bs-theme="dark"] .swiper-button-next,
  [data-bs-theme="dark"] .swiper-button-prev { background: rgba(0,0,0,0.6); color: #fff !important; }

  .swiper-pagination-bullet { background: var(--ach-nav-color) !important; opacity: 0.4; width: 10px !important; height: 10px !important; }
  .swiper-pagination-bullet-active { opacity: 1; background: var(--ach-nav-color) !important; }
</style>

<div class="ach-section">
  <!-- ✅ Чистый HTML-заголовок вместо Markdown -->
  <h2 class="mt-4">📸 Фотографии с олимпиад</h2>

  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="{{ '/assets/img/achievements/photo_1.jpg' | prepend: site.baseurl }}" alt="Фото 1">
      </div>
      <div class="swiper-slide">
        <img src="{{ '/assets/img/achievements/photo_2.jpg' | prepend: site.baseurl }}" alt="Фото 2">
      </div>
      <div class="swiper-slide">
        <img src="{{ '/assets/img/achievements/photo_3.jpg' | prepend: site.baseurl }}" alt="Фото 3">
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>

  <div class="row mt-5">
    <!-- Математика -->
    <div class="col-md-6 mb-4">
      <div class="card shadow-sm ach-card">
        <div class="card-header p-0" id="mathHeading" style="background-color: var(--ach-math-bg);">
          <button class="btn btn-link w-100 text-start ach-header p-3" type="button" data-bs-toggle="collapse" data-bs-target="#mathAchievements" aria-expanded="true" aria-controls="mathAchievements">
            <h5 class="mb-0">📐 Математика</h5>
          </button>
        </div>
        <div id="mathAchievements" class="collapse show" aria-labelledby="mathHeading">
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover mb-0">
                <thead><tr><th>Год</th><th>Олимпиада</th><th>Этап / Уровень</th><th>Результат</th></tr></thead>
                <tbody>
                  <tr><td>2024</td><td>ВСОШ</td><td>Региональный</td><td>Победитель</td></tr>
                  <tr><td>2023</td><td>ВСОШ</td><td>Региональный</td><td>Победитель</td></tr>
                  <tr><td>2023</td><td>ВСОШ</td><td>Заключительный</td><td>Участник</td></tr>
                  <tr><td>2023</td><td>ОММО</td><td>2</td><td>Победитель</td></tr>
                  <tr><td>2023</td><td>Физтех</td><td>1</td><td>Призёр</td></tr>
                  <tr><td>2024</td><td>ООШ</td><td>2</td><td>Победитель</td></tr>
                  <tr><td>2023</td><td>ООШ</td><td>3</td><td>Призёр</td></tr>
                  <tr><td>2024</td><td>Северный Мат. турнир</td><td>Личный зачёт</td><td>Призёр</td></tr>
                  <tr><td>2024</td><td>Северный Мат. турнир</td><td>Командный зачёт</td><td>Призёр</td></tr>
                  <tr><td>2023</td><td>Южный Мат. турнир</td><td>Финал</td><td>Участник</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Информатика -->
    <div class="col-md-6 mb-4">
      <div class="card shadow-sm ach-card">
        <div class="card-header p-0" id="infHeading" style="background-color: var(--ach-inf-bg);">
          <button class="btn btn-link w-100 text-start ach-header p-3" type="button" data-bs-toggle="collapse" data-bs-target="#infAchievements" aria-expanded="true" aria-controls="infAchievements">
            <h5 class="mb-0">💻 Информатика</h5>
          </button>
        </div>
        <div id="infAchievements" class="collapse show" aria-labelledby="infHeading">
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover mb-0">
                <thead><tr><th>Год</th><th>Олимпиада</th><th>Этап / Уровень</th><th>Результат</th></tr></thead>
                <tbody>
                  <tr><td>2024</td><td>ВСОШ</td><td>Региональный</td><td>Победитель</td></tr>
                  <tr><td>2023</td><td>ВСОШ</td><td>Региональный</td><td>Победитель</td></tr>
                  <tr><td>2023</td><td>Технокубок</td><td>1</td><td>Призёр</td></tr>
                  <tr><td>2024</td><td>ВКОШП</td><td>Санкт-Петербург</td><td>Призёр</td></tr>
                  <tr><td>2024</td><td>ВКОШП</td><td>Финал</td><td>Призёр</td></tr>
                  <tr><td>2024</td><td>ОБКИ</td><td>Региональный</td><td>Победитель</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## 📜 Прочее
- Регулярно решаю алгоритмические задачи (ct-itmo-aisd на C++/Python).
- Преподаю в образовательном центре «Интеллект».
- Все результаты подтверждены дипломами. Сканы могу предоставить по запросу.

<!-- ⚠️ Скрипты строго внизу -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof Swiper === 'undefined') {
      console.error('❌ Swiper не подключён. Проверьте CDN.');
      return;
    }
    new Swiper('.mySwiper', {
      loop: true,
      speed: 800,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      slidesPerView: 1,
      spaceBetween: 16,
      // 🔑 Критично: следит за изменениями DOM (смена темы, сворачивание карточек)
      observer: true,
      observeParents: true,
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 20 }
      }
    });
  });
</script>