---
layout: page
title: Покерный таймер
description: Полноэкранный таймер блайндов для покерных турниров
img: assets/img/project-poker-timer.jpg
importance: 4
category: work
related_publications: false
---

<p class="mb-4">
  <a class="btn btn-sm btn-primary m-1" href="https://cdn.jsdelivr.net/gh/VyacheslavChepelin/poker-timer-project@main/poker_timer.html" target="_blank" rel="noopener">Открыть демо</a>
  <a class="btn btn-sm btn-outline-primary m-1" href="https://github.com/VyacheslavChepelin/poker-timer-project" target="_blank" rel="noopener">Код на GitHub</a>
</p>

{% include figure.liquid loading="eager" path="assets/img/project-poker-timer.jpg" title="Покерный таймер" class="img-fluid rounded z-depth-1 mb-3" %}

Одностраничное веб-приложение для структуры покерного турнира: раунды, блайнды, анте и время до перерыва — в полноэкранном режиме.

### Технологии

- **HTML5, CSS3, JavaScript (ES6)** — без фреймворков; `clamp()`, Flexbox, плавные переходы.
- **GitHub Actions** — сборка единого HTML при пуше в `main`.
- **Node.js** — `build.js` вшивает CSS и JS в `template.html`.
- **JSON** — структура раундов и перерывов, редактируется в интерфейсе.

### Возможности

- Настраиваемые раунды: длительность, блайнды, анте.
- Автоматические перерывы.
- Управление с клавиатуры: <kbd>Пробел</kbd>, <kbd>↑</kbd><kbd>↓</kbd>, <kbd>←</kbd><kbd>→</kbd>.
- Загрузка фонового изображения.
- Расчёт среднего стека.
- Финишный экран «Турнир завершён».

### Ссылки

- Исходный код: [github.com/VyacheslavChepelin/poker-timer-project](https://github.com/VyacheslavChepelin/poker-timer-project)
- Живое демо: [poker_timer.html](https://cdn.jsdelivr.net/gh/VyacheslavChepelin/poker-timer-project@main/poker_timer.html)
