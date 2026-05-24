---
layout: page
title: Бэкенд покерного клуба
description: Telegram-бот и REST API для управления турнирами
img: assets/img/poker-backend.jpg
importance: 1
category: work
related_publications: false
---

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

```python
# Пример: запуск турнира создаёт лист в Google Таблице
async def create_tournament_sheet(tournament, db_session):
    sheet = get_master_sheet()
    safe_title = tournament.title[:25].replace(':', '').replace('/', '')
    sheet_name = f"{tournament.start_time.strftime('%d.%m')} {safe_title}"
    ...
    worksheet = sheet.add_worksheet(title=sheet_name, rows=150, cols=8)
    headers = ["Никнейм", "Место", "Re-entry", "Add-on", "Баунти", "Баллы", "", "Кто вылетел"]
    worksheet.update('A1:H1', [headers])
```

## Особенности API

- **Аутентификация** через проверку Telegram init data (HMAC).
- **Динамический рейтинг** с фильтрами по месяцам и множителями за баунти.
- **Эндпоинты жизненного цикла турнира**: регистрация, отмена, детали, результаты.
- **Профиль пользователя** со сменой никнейма (логика переключения профилей).

```python
@app.get("/api/tournaments")
def get_tournaments(status: str = None, month: str = None, db: Session = Depends(get_db)):
    # Возвращает турниры, отсортированные с превью участников и результатами (если завершён)
    ...
```

## Технологический стек

- **FastAPI** + Uvicorn, **Aiogram 3**, **SQLAlchemy**, **Alembic**
- **PostgreSQL**, **gspread** (Google Sheets API), **python-jose** (JWT/валидация)
- Развёрнуто на **Railway** с использованием Nixpacks-сборщика

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/railway-deploy.jpg" title="Деплой на Railway" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Сервис работает на Railway с проверками здоровья и автоматическим деплоем.
</div>

##  Интеграция с Telegram Mini App

API обслуживает JavaScript-фронтенд внутри Telegram WebApp. Все запросы содержат заголовок `X-Telegram-Init-Data` для идентификации и авторизации пользователя.
