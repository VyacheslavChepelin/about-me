---
layout: page
title: Резюме и контакты
permalink: /cv/
nav: true
nav_order: 5
---

## Контакты

<div class="row mt-4">
  <div class="col-md-8 mx-auto">
    <div class="list-group mb-5">
      
      <a href="mailto:slavachepelin@mail.ru" class="list-group-item list-group-item-action d-flex align-items-center contact-item">
        <i class="fas fa-envelope fa-2x me-3 text-primary"></i>
        <div>
          <h6 class="mb-0">Email</h6>
          <small class="text-secondary">slavachepelin@mail.ru</small>
        </div>
      </a>

      <a href="https://t.me/slavachepelin" class="list-group-item list-group-item-action d-flex align-items-center contact-item" target="_blank">
        <i class="fab fa-telegram fa-2x me-3 text-info"></i>
        <div>
          <h6 class="mb-0">Telegram</h6>
          <small class="text-secondary">@slavachepelin</small>
        </div>
      </a>

      <a href="tel:+79213508399" class="list-group-item list-group-item-action d-flex align-items-center contact-item">
        <i class="fas fa-phone fa-2x me-3 text-success"></i>
        <div>
          <h6 class="mb-0">Телефон</h6>
          <small class="text-secondary">+7 (921) 350-83-99</small>
        </div>
      </a>

      <a href="https://vk.com/slavachepelin" class="list-group-item list-group-item-action d-flex align-items-center contact-item" target="_blank">
        <i class="fab fa-vk fa-2x me-3 text-primary"></i>
        <div>
          <h6 class="mb-0">ВКонтакте</h6>
          <small class="text-secondary">vk.com/slavachepelin</small>
        </div>
      </a>

      <a href="https://github.com/VyacheslavChepelin" class="list-group-item list-group-item-action d-flex align-items-center contact-item" target="_blank">
        <i class="fab fa-github fa-2x me-3 text-body"></i>
        <div>
          <h6 class="mb-0">GitHub</h6>
          <small class="text-secondary">VyacheslavChepelin</small>
        </div>
      </a>

    </div>
  </div>
</div>

<div class="text-center mb-4">
  <p class="text-secondary">Предпочитаете мессенджеры? Напишите в Telegram — отвечаю быстрее всего.</p>
</div>

<hr>

## Резюме

<div class="row justify-content-center mb-5">
  <div class="col-md-6 text-center">
    <a href="{{ '/assets/pdf/resume.pdf' | prepend: site.baseurl }}" 
       class="btn btn-primary btn-lg" 
       download>
       <i class="fas fa-download me-2"></i> Скачать резюме (PDF)
    </a>
    <p class="text-secondary small mt-2">Последнее обновление: весна 2026</p>
  </div>
</div>

<style>
/* Базовые стили контактов */
.contact-item {
  transition: background-color 0.2s ease, color 0.2s ease;
}
.contact-item h6 {
  color: inherit; /* h6 наследует цвет родителя, не остаётся чёрным */
}
/* Принудительно для тёмной темы al‑folio (класс .dark у html) */
html.dark .contact-item {
  color: var(--bs-body-color) !important;
  background-color: var(--bs-body-bg) !important;
}
html.dark .contact-item:hover {
  background-color: var(--bs-list-group-action-hover-bg) !important;
}
</style>