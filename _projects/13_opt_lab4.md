---
layout: page
title: Оптимизация — лаб. 4
description: Стохастическая оптимизация — SGD, SVRG, Adam, Поляк–Рупперт
img: assets/img/project-opt-lab4.jpg
importance: 9
category: fun
related_publications: false
---

Командная лабораторная ИТМО (Чепелин, Свешников, Хасанов). Публичной ссылки нет.

## О чём работа

Стохастическая оптимизация в машинном обучении на ML-оракулах.

### Методы

- Mini-batch **SGD** (constant / inverse sqrt / step decay)
- **SVRG** и линейная сходимость
- **Adam**
- Усреднение **Поляка–Рупперта**
- Full GD для сравнения

### Данные и эксперименты

LIBSVM: `a9a`, `gisette`, `abalone`, `bodyfat` (скачиваются автоматически).

Ноутбуки: расписания шага SGD, SVRG, Adam и аномалии, трек Поляка–Рупперта; графики в `plots/`.

### Стек

Python · NumPy · Jupyter · pytest · venv
