---
layout: page
title: Достижения
permalink: /achievements/
nav: true
nav_order: 3
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" media="print" onload="this.media='all'">

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

## Мои олимпиады

<div class="row mt-4">
  <!-- Математика -->
  <div class="col-md-6 mb-4">
    <div class="card shadow-sm">
      <div class="card-header p-0 border-0" id="mathHeading">
        <button class="btn btn-link w-100 text-start text-decoration-none p-3" type="button" data-bs-toggle="collapse" data-bs-target="#mathAchievements" aria-expanded="false" aria-controls="mathAchievements">
          <h5 class="mb-0">📐 Математика</h5>
        </button>
      </div>
      <div id="mathAchievements" class="collapse" aria-labelledby="mathHeading">
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
    <div class="card shadow-sm">
      <div class="card-header p-0 border-0" id="infHeading">
        <button class="btn btn-link w-100 text-start text-decoration-none p-3" type="button" data-bs-toggle="collapse" data-bs-target="#infAchievements" aria-expanded="false" aria-controls="infAchievements">
          <h5 class="mb-0">💻 Информатика</h5>
        </button>
      </div>
      <div id="infAchievements" class="collapse" aria-labelledby="infHeading">
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

## Прочее
- Регулярно решаю алгоритмические задачи.
- Преподаю в ГБУ ДО "Центр Интеллект"
- Все результаты подтверждены дипломами. Сканы могу предоставить по запросу.

<script>
  (function() {
    // Функция инициализации Swiper
    function initSwiper() {
      if (typeof Swiper === 'undefined') {
        console.warn('Swiper ещё не загружен');
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
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 20 }
        }
      });
    }

    // Проверяем наличие Bootstrap Collapse
    if (typeof bootstrap === 'undefined' || typeof bootstrap.Collapse === 'undefined') {
      var bsScript = document.createElement('script');
      bsScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
      document.body.appendChild(bsScript);
    }

    // Проверяем наличие Swiper JS
    if (typeof Swiper === 'undefined') {
      var swScript = document.createElement('script');
      swScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      swScript.onload = initSwiper;
      document.body.appendChild(swScript);
    } else {
      initSwiper();
    }
  })();
</script>