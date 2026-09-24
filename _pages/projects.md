---
layout: page
title: Мои проекты
permalink: /projects/
description: Рабочие и учебные проекты, а также текущая работа
nav: true
nav_order: 4
display_categories: [work, fun]
horizontal: false
---

## Работа

<div class="work-panel">
<p>Сейчас совмещаю разработку и преподавание:</p>
<ul>
  <li><strong>Центр искусственного интеллекта и науки о данных СПбГУ</strong> — текущее место работы.</li>
  <li><strong>Преподаватель в ИТМО</strong> (с 2025/26 учебного года).</li>
  <li><strong>Преподаватель в ГБУ ДО «Центр Интеллект»</strong>.</li>
</ul>
<div class="site-cta" style="margin-bottom: 0;">
  <a class="btn btn-primary" href="{{ '/cv/' | relative_url }}">Резюме и контакты</a>
  <a class="btn btn-outline-primary" href="{{ '/assets/pdf/resume.pdf' | relative_url }}" download>Скачать PDF</a>
</div>
</div>

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
    {% assign category_title = category %}
    {% case category %}
      {% when "work" %}
        {% assign category_title = "Рабочие проекты" %}
      {% when "fun" %}
        {% assign category_title = "Учебные проекты" %}
    {% endcase %}
    <a id="{{ category }}" href=".#{{ category }}">
      <h2 class="category">{{ category_title }}</h2>
    </a>
    {% if category == "fun" %}
    <p class="text-muted mb-3">Курсы и лабораторные: ШАД, ИТМО (алгоритмы, GPGPU, оптимизация, теорвер), школьный проект. Приватные classroom/GitLab — без публичных ссылок, с описанием содержимого.</p>
    {% endif %}
    {% assign categorized_projects = site.projects | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "importance" %}
    {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
      {% for project in sorted_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
      </div>
    </div>
    {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
    {% endif %}
  {% endfor %}
{% else %}
{% assign sorted_projects = site.projects | sort: "importance" %}
{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
