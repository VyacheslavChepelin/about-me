---
layout: page
title: Бэкенд покерного клуба
description: Telegram-бот и REST API для управления турнирами
img: assets/img/project-poker-backend.jpg
importance: 1
category: work
related_publications: false
---

<p class="mb-4">
  <a class="btn btn-sm btn-outline-primary m-1" href="https://github.com/VyacheslavChepelin" target="_blank" rel="noopener">Код на GitHub</a>
</p>

## Обзор бэкенда

Бэкенд состоит из двух основных частей:
- **Telegram-бот** — для администраторов: управление турнирами, рассылки, импорт результатов из Google Таблиц.
- **REST API** (FastAPI) — обслуживает фронтенд Telegram Mini App (WebApp): список турниров, регистрация, рейтинг, профиль пользователя.

## База данных и ORM

- **PostgreSQL** (на продакшене), SQLite для локальных тестов.
- **SQLAlchemy 2.0** с декларативными моделями и миграциями Alembic.
- Модели: `User`, `Tournament`, `Registration`, `TournamentResult`, `TelegramAccount`, `UserAgreement`.

## Возможности бота

- **Админ-панель** с инлайн-клавиатурами.
- **FSM (конечный автомат)** для многошаговых диалогов: добавление турнира, рассылка.
- **Интеграция с Google Таблицами**: автоматическое создание листа результатов при старте турнира и импорт финальных мест при завершении.
- **Ограничение частоты запросов** и плавная обработка ошибок для массовых рассылок.

## Особенности API

- **Аутентификация** через проверку Telegram init data (HMAC).
- **Динамический рейтинг** с фильтрами по месяцам и множителями за баунти.
- **Эндпоинты жизненного цикла турнира**: регистрация, отмена, детали, результаты.
- **Профиль пользователя** со сменой никнейма.

## Технологический стек

- **FastAPI** + Uvicorn, **Aiogram 3**, **SQLAlchemy**, **Alembic**
- **PostgreSQL**, **gspread** (Google Sheets API)
- Развёрнуто на **Railway**

## Интеграция с Telegram Mini App

API обслуживает JavaScript-фронтенд внутри Telegram WebApp. Все запросы содержат заголовок `X-Telegram-Init-Data` для идентификации и авторизации пользователя.
