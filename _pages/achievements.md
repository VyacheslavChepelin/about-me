---
layout: page
title: Достижения
permalink: /achievements/
nav: true
nav_order: 3
---

<style>
  /* 🎨 Адаптивные переменные для светлой/тёмной темы */
  :root {
    --ach-bg: var(--bs-body-bg, #ffffff);
    --ach-text: var(--bs-body-color, #212529);
    --ach-card-bg: var(--bs-card-bg, #ffffff);
    --ach-border: var(--bs-border-color, #dee2e6);
    --ach-math-bg: #0d6efd;
    --ach-inf-bg: #198754;
  }

  /* Поддержка популярных селекторов переключения тем в Jekyll */
  [data-bs-theme="dark"], [data-theme="dark"], .dark-mode, html.dark, body.dark {
    --ach-bg: var(--bs-body-bg-dark, #212529);
    --ach-text: var(--bs-body-color-dark, #e9ecef);
    --ach-card-bg: var(--bs-card-bg-dark, #2c3034);
    --ach-border: var(--bs-border-color-dark, #495057);
    --ach-math-bg: #3d8bfd;  /* Чуть ярче для контраста с белым текстом в тёмной теме */
    --ach-inf-bg: #20c997;
  }

  .theme-wrapper {
    background-color: var(--ach-bg) !important;
    color: var(--ach-text);
    padding-bottom: 2rem;
  }
  .theme-wrapper h2, .theme-wrapper h3, .theme-wrapper h4, .theme-wrapper h5, .theme-wrapper h6 {
    color: var(--ach-text);
  }

  .theme-card {
    background-color: var(--ach-card-bg);
    border: 1px solid var(--ach-border);
    color: var(--ach-text);
  }
  .theme-card .table {
    color: var(--ach-text);
    --bs-table-bg: transparent; /* Убираем принудительный белый фон таблицы */
  }

  .theme-header { color: #fff !important; }
  .theme-header .btn-link { color: #fff !important; }
  .theme-header .btn-link:hover, .theme-header .btn-link:focus { color: #f8f9fa !important; }
</style>

<div class="theme-wrapper">
  ## 📸 Фотографии с олимпиад

  <div class="swiper mySwiper mt-4 pb-4">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="{{ '/assets/img/achievements/photo_1.jpg' | prepend: site.baseurl }}" class="d-block w-100 rounded shadow" alt="Фото 1"></div>
      <div class="swiper-slide"><img src="{{ '/assets/img/achievements/photo_2.jpg' | prepend: site.baseurl }}" class="d-block w-100 rounded shadow" alt="Фото 2"></div>
      <div class="swiper-slide"><img src="{{ '/assets/img/achievements/photo_3.jpg' | prepend: site.baseurl }}" class="d-block w-100 rounded shadow" alt="Фото 3"></div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>

  <div class="row mt-5">
    <!-- Математика -->
    <div class="col-md-6 mb-4">
      <div class="card shadow-sm theme-card">
        <div class="card-header p-0" id="mathHeading" style="background-color: var(--ach-math-bg);">
          <button class="btn btn-link w-100 text-start theme-header text-decoration-none p-3" type="button" data-bs-toggle="collapse" data-bs-target="#mathAchievements" aria-expanded="true" aria-controls="mathAchievements">
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
      <div class="card shadow-sm theme-card">
        <div class="card-header p-0" id="infHeading" style="background-color: var(--ach-inf-bg);">
          <button class="btn btn-link w-100 text-start theme-header text-decoration-none p-3" type="button" data-bs-toggle="collapse" data-bs-target="#infAchievements" aria-expanded="true" aria-controls="infAchievements">
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

<!-- ⚠️ Скрипты внизу страницы -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof Swiper === 'undefined') {
      console.error('❌ Swiper не подключён. Проверьте CDN или локальные пути.');
      return;
    }
    new Swiper('.mySwiper', {
      loop: true,
      speed: 800,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: { 768: { slidesPerView: 2, spaceBetween: 20 } }
    });
  });
</script>