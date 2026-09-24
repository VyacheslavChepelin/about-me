---
layout: page
title: FP — Warmup
description: Вводные задачи курса ФП ИТМО на Haskell
img: assets/img/project-fp-warmup.jpg
importance: 13
category: fun
related_publications: false
---

Первое задание курса **функционального программирования** (КТ ИТМО, org `fp-ctd-itmo`). Репозиторий classroom — без публичной ссылки.

## О чём

Набор небольших CLI-программ на **Haskell** (Cabal + Nix): разминка перед основным курсом.

### Задачи

- `fib`, `fact`, `tri` — классические рекуррентности
- `prime` — проверка простоты
- `catalan` — числа Каталана
- `parens` — корректность скобочных последовательностей
- `transpose` — транспонирование

Сборка: `nix build`, бинарники в `result/bin`.

## Стек

Haskell (GHC2021) · Cabal · Nix flakes · CI classroom
