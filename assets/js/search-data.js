// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-вячеслав-чепелин",
    title: "Вячеслав Чепелин",
    section: "Navigation",
    handler: () => {
      window.location.href = "/about-me/";
    },
  },{id: "nav-репетиторство",
          title: "Репетиторство",
          description: "Подготовка к олимпиадам по математике и информатике",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about-me/tutoring/";
          },
        },{id: "nav-достижения",
          title: "Достижения",
          description: "Олимпиады по математике и информатике",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about-me/achievements/";
          },
        },{id: "nav-мои-проекты",
          title: "Мои проекты",
          description: "Рабочие и учебные проекты, а также текущая работа",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about-me/projects/";
          },
        },{id: "nav-резюме-и-контакты",
          title: "Резюме и контакты",
          description: "Контакты и резюме Вячеслава Чепелина",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about-me/cv/";
          },
        },{id: "news-открыт-набор-на-олимпиадные-занятия-по-математике-и-информатике-подробности-и-запись",
          title: 'Открыт набор на олимпиадные занятия по математике и информатике — подробности и запись....',
          description: "",
          section: "News",},{id: "projects-оптимизация-лаб-1",
          title: 'Оптимизация — лаб. 1',
          description: "Градиентный спуск и метод Ньютона, оракулы и эксперименты",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/10_opt_lab1/";
            },},{id: "projects-оптимизация-лаб-2",
          title: 'Оптимизация — лаб. 2',
          description: "Сопряжённые градиенты, L-BFGS и Hessian-free Ньютон",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/11_opt_lab2/";
            },},{id: "projects-оптимизация-лаб-3",
          title: 'Оптимизация — лаб. 3',
          description: "Условная и негладкая оптимизация — proximal, Frank–Wolfe, barrier",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/12_opt_lab3/";
            },},{id: "projects-оптимизация-лаб-4",
          title: 'Оптимизация — лаб. 4',
          description: "Стохастическая оптимизация — SGD, SVRG, Adam, Поляк–Рупперт",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/13_opt_lab4/";
            },},{id: "projects-теория-вероятностей-лаб-1",
          title: 'Теория вероятностей — лаб. 1',
          description: "Пять задач и бонус — аналитика плюс симуляции",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/14_thv_lab1/";
            },},{id: "projects-теория-вероятностей-лаб-2",
          title: 'Теория вероятностей — лаб. 2',
          description: "Четыре задачи — аналитика и программный эксперимент",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/15_thv_lab2/";
            },},{id: "projects-продвинутый-python",
          title: 'Продвинутый Python',
          description: "Курс advanced-python — шесть домашних заданий",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/16_adv_python/";
            },},{id: "projects-fp-warmup",
          title: 'FP — Warmup',
          description: "Вводные задачи курса ФП ИТМО на Haskell",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/17_fp_warmup/";
            },},{id: "projects-fp-utlc",
          title: 'FP — UTLC',
          description: "Интерпретатор бестипового λ-исчисления (ulam)",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/18_fp_utlc/";
            },},{id: "projects-бэкенд-покерного-клуба",
          title: 'Бэкенд покерного клуба',
          description: "Telegram-бот и REST API для управления турнирами",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/1_project/";
            },},{id: "projects-ct-notes-y2024",
          title: 'CT Notes y2024',
          description: "Конспекты по программе КТ ИТМО за 2024 год",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/2_project/";
            },},{id: "projects-персональный-сайт-портфолио",
          title: 'Персональный сайт-портфолио',
          description: "Сайт о репетиторстве, олимпиадах и проектах на Jekyll",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/3_project/";
            },},{id: "projects-покерный-таймер",
          title: 'Покерный таймер',
          description: "Полноэкранный таймер блайндов для покерных турниров",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/4_project/";
            },},{id: "projects-shad-python-2025",
          title: 'SHAD Python 2025',
          description: "Домашние и практические задания курса Python ШАД",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/6_project/";
            },},{id: "projects-school-project",
          title: 'School Project',
          description: "Telegram-бот и GUI для генерации заданий из банка ФИПИ",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/7_project/";
            },},{id: "projects-алгоритмы-и-структуры-данных",
          title: 'Алгоритмы и структуры данных',
          description: "Решения задач AISD и конспекты по алгоритмам ИТМО",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/8_project/";
            },},{id: "projects-gpgpu-2026",
          title: 'GPGPU 2026',
          description: "Задания курса по вычислениям на GPU (OpenCL)",
          section: "Projects",handler: () => {
              window.location.href = "/about-me/projects/9_project/";
            },},{id: "reviews-01-anna",
          title: '01 Anna',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/about-me/reviews/01-anna/";
            },},{id: "reviews-02-dmitry",
          title: '02 Dmitry',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/about-me/reviews/02-dmitry/";
            },},{id: "reviews-03-elena",
          title: '03 Elena',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/about-me/reviews/03-elena/";
            },},{id: "reviews-04-ivan",
          title: '04 Ivan',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/about-me/reviews/04-ivan/";
            },},{id: "reviews-05-maria",
          title: '05 Maria',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/about-me/reviews/05-maria/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/about-me/assets/pdf/resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%6C%61%76%61%63%68%65%70%65%6C%69%6E@%6D%61%69%6C.%72%75", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/slavachepelin", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/VyacheslavChepelin", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
