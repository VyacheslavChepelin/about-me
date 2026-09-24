---
layout: page
title: FP — UTLC
description: Интерпретатор бестипового λ-исчисления (ulam)
img: assets/img/project-fp-utlc.jpg
importance: 14
category: fun
related_publications: false
---

Второе задание курса **ФП ИТМО**: интерпретатор / утилита для **бестипового λ-исчисления** (UTLC). CLI `ulam`. Репозиторий classroom — без публичной ссылки.

## Возможности `ulam`

Подкоманды: `parse`, `pretty`, `format`, `to-debruijn`, `from-debruijn`, `to-barendregt`, `alpha-eq`, `step` / `step n`, `gc`, `eval`.

### Что реализовано

- Парсер concrete syntax (лямбды, примитивы, `case`, bottom)
- Проверка замкнутости термов
- De Bruijn / Barendregt-представления
- α-эквивалентность
- Редукция (шаг / eval) и GC
- JSON codec для AST
- Обширный набор pytest (синтаксис, примитивы, редукция, property-тесты)

## Стек

Python 3.11+ · uv · pytest · Nix · entry points в `pyproject.toml`
