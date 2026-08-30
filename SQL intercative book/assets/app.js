const chapters = [
  {
    title: 'Основы запроса',
    lessons: [
      {
        title: 'SELECT, FROM и алиасы',
        description: 'Выбираем столбцы результата, указываем таблицу-источник и наблюдаем, как алиасы меняют запись запроса и заголовки результата.',
        points: ['SELECT', 'FROM', 'AS и алиасы'],
        widget: 'widgets/select-from-aliases.html',
      },
      {
        title: 'WHERE и операторы сравнения',
        description: 'Выбираем столбец, оператор и значение, а затем наблюдаем, какие строки проходят условие WHERE.',
        points: ['WHERE', '= и <>', '>, >=, < и <='],
        widget: 'widgets/where-comparisons.html',
      },
      {
        title: 'Условия: AND, OR и IN',
        description: 'Составляем условия из нескольких частей и сразу видим, какие строки проходят фильтр. Скобки помогают заметить приоритет AND над OR.',
        points: ['AND и OR', 'IN', 'приоритет операторов'],
        widget: '../and_or.html',
      },
      {
        title: 'BETWEEN и диапазоны',
        description: 'Двигаем границы числового или временного диапазона и сравниваем BETWEEN с NOT BETWEEN.',
        points: ['BETWEEN', 'включённые границы', 'NOT BETWEEN'],
        widget: 'widgets/between-ranges.html',
      },
      {
        title: 'ORDER BY и LIMIT',
        description: 'Меняем столбец и направление сортировки, а затем наблюдаем, как LIMIT отрезает первые строки уже упорядоченного результата.',
        points: ['ORDER BY', 'ASC и DESC', 'LIMIT и второй ключ'],
        widget: 'widgets/order-by-limit.html',
      },
      {
        title: 'DISTINCT',
        description: 'Выбираем один или несколько столбцов и наблюдаем, как DISTINCT удаляет повторы выбранной комбинации.',
        points: ['SELECT DISTINCT', 'уникальная комбинация', 'повторяющиеся строки'],
        widget: 'widgets/distinct.html',
      },
      {
        title: 'NULL и IS NULL',
        description: 'Сравниваем обычные операторы с IS NULL и наблюдаем три результата логического условия: TRUE, FALSE и UNKNOWN.',
        points: ['NULL', 'IS NULL', 'TRUE, FALSE и UNKNOWN'],
        widget: 'widgets/null.html',
      },
      {
        title: 'LIKE и поиск по строке',
        description: 'Меняем шаблон поиска и наблюдаем, как символы % и _ влияют на совпадения. Отдельно можно проверить регистр текста.',
        points: ['LIKE', '% и _', 'lower()'],
        widget: '../sql_like_widget-2.html',
      },
    ],
  },
  {
    title: 'Выражения и функции',
    lessons: [
      {
        title: 'Типы данных и функции',
        description: 'Преобразуем значения, сравниваем способы округления и исследуем функции для работы с датами.',
        points: ['CAST и TRY_CAST', 'округление', 'функции дат'],
        widget: '../datatype_functions.html',
      },
      {
        title: 'Строковые функции',
        description: 'Меняем строку и параметры функций, наблюдая результат lower, upper, trim, length, substring, replace и concat.',
        points: ['регистр и пробелы', 'извлечение и замена', 'объединение строк'],
        widget: 'widgets/string-functions.html',
      },
      {
        title: 'Даты и интервалы',
        description: 'Сдвигаем даты, измеряем разницу, округляем timestamp до начала периода и используем значения INTERVAL.',
        points: ['date_add и date_diff', 'date_trunc', 'INTERVAL'],
        widget: 'widgets/dates-intervals.html',
      },
      {
        title: 'COALESCE и NULLIF',
        description: 'Меняем приоритет источников, очищаем служебные значения через NULLIF и выбираем первое известное значение через COALESCE.',
        points: ['первое не-NULL', 'NULLIF при равенстве', 'очистка и fallback'],
        widget: 'widgets/coalesce-nullif.html',
      },
      {
        title: 'CASE WHEN',
        description: 'Превращаем условия в новые признаки, разбираем порядок нескольких WHEN и используем CASE внутри агрегации.',
        points: ['новое поле', 'порядок WHEN', 'условная агрегация'],
        widget: '../sql_case_when_widget.html',
      },
    ],
  },
  {
    title: 'Агрегации',
    lessons: [
      {
        title: 'Агрегации и GROUP BY',
        description: 'Сравниваем агрегат по всей таблице и по группам, наблюдаем поведение NULL, DISTINCT и HAVING.',
        points: ['COUNT, SUM, AVG', 'GROUP BY', 'HAVING'],
        widget: '../sql_aggregation_widget.html',
      },
      {
        title: 'Порядок выполнения SQL-запроса',
        description: 'Проходим агрегирующий запрос в логическом порядке: от исходных строк и фильтрации до сортировки и LIMIT.',
        points: ['логический порядок', 'строки и группы', 'алиасы и поздние этапы'],
        widget: 'widgets/query-execution-order.html',
      },
    ],
  },
  {
    title: 'Соединение данных',
    lessons: [
      {
        title: 'Как таблицы соединяются',
        description: 'Проходим соединение нескольких таблиц по шагам: от исходной таблицы к INNER JOIN и затем к LEFT JOIN.',
        points: ['ключ соединения', 'INNER JOIN', 'LEFT JOIN'],
        widget: '../joins.html',
      },
      {
        title: 'Типы JOIN',
        description: 'Сравниваем INNER, LEFT, RIGHT, FULL и CROSS JOIN на одной паре таблиц и наблюдаем строки без пары.',
        points: ['INNER и внешние JOIN', 'NULL для строки без пары', 'CROSS JOIN'],
        widget: 'widgets/join-types.html',
      },
      {
        title: 'Дубли и кардинальность JOIN',
        description: 'Меняем количество строк с одинаковым ключом слева и справа и наблюдаем формулу m × n для числа совпавших пар.',
        points: ['1:1, 1:N и N:N', 'размножение строк', 'гранулярность ключа'],
        widget: 'widgets/join-cardinality.html',
      },
      {
        title: 'UNION ALL и UNION',
        description: 'Объединяем строки двух запросов, переключаем дедупликацию и наблюдаем, как набор выходных столбцов определяет повтор.',
        points: ['UNION ALL', 'UNION и уникальность', 'совместимая структура SELECT'],
        widget: 'widgets/union.html',
      },
      {
        title: 'Подзапросы',
        description: 'Смотрим, как внутренний запрос возвращает одно значение, набор для IN или временную таблицу для FROM.',
        points: ['скалярный подзапрос', 'IN (subquery)', 'подзапрос в FROM'],
        widget: 'widgets/subqueries.html',
      },
      {
        title: 'WITH и CTE',
        description: 'Разбиваем вложенный запрос на именованные этапы, переключаем две эквивалентные записи и смотрим результат каждого CTE.',
        points: ['WITH', 'именованные CTE', 'цепочка преобразований'],
        widget: 'widgets/cte.html',
      },
      {
        title: 'EXISTS и NOT EXISTS',
        description: 'Проверяем наличие связанных строк коррелированным подзапросом и наблюдаем, как EXISTS и NOT EXISTS фильтруют внешнюю таблицу.',
        points: ['EXISTS', 'NOT EXISTS', 'коррелированный подзапрос'],
        widget: 'widgets/exists.html',
      },
    ],
  },
  {
    title: 'Оконные функции',
    lessons: [
      {
        title: 'Что меняет OVER()',
        description: 'Добавляем PARTITION BY и ORDER BY по одному и наблюдаем, как меняются границы и порядок вычисления окна.',
        points: ['OVER()', 'PARTITION BY', 'ORDER BY'],
        widget: '../over.html',
      },
      {
        title: 'GROUP BY или OVER()',
        description: 'Сравниваем два похожих расчёта и видим главное различие: GROUP BY схлопывает строки, оконная функция сохраняет их.',
        points: ['гранулярность', 'строки результата', 'среднее по группе'],
        widget: '../group_by_vs_over.html',
      },
      {
        title: 'ROW_NUMBER()',
        description: 'Управляем разбиением и сортировкой окна, чтобы понять, откуда берётся номер каждой строки.',
        points: ['нумерация', 'порядок', 'перезапуск внутри группы'],
        widget: '../row_number.html',
      },
      {
        title: 'RANK() и DENSE_RANK()',
        description: 'Сравниваем два способа ранжирования на одинаковых значениях и видим, почему RANK оставляет пропуски, а DENSE_RANK — нет.',
        points: ['одинаковый ранг при ничьей', 'пропуски в RANK', 'PARTITION BY'],
        widget: 'widgets/rank-dense-rank.html',
      },
      {
        title: 'LEAD() и LAG()',
        description: 'Меняем направление сортировки и смещение, наблюдая, какую соседнюю строку выбирает оконная функция.',
        points: ['предыдущая строка', 'следующая строка', 'смещение'],
        widget: '../lead_lag.html',
      },
      {
        title: 'Оконные агрегаты',
        description: 'Переключаем агрегат, партицию и сортировку, чтобы увидеть обычный и накопительный расчёт внутри окна.',
        points: ['оконный агрегат', 'накопительный итог', 'ROWS BETWEEN'],
        widget: '../agg_windows.html',
      },
      {
        title: 'Границы окна: ROWS BETWEEN',
        description: 'Двигаем начало и конец оконной рамки, выбираем текущую строку и наблюдаем, какие физические строки участвуют в агрегате.',
        points: ['PRECEDING и FOLLOWING', 'CURRENT ROW', 'движущаяся рамка'],
        widget: 'widgets/rows-between.html',
      },
      {
        title: 'FIRST_VALUE() и LAST_VALUE()',
        description: 'Находим первое и последнее значение оконной рамки, меняем направление сортировки и сравниваем рамку до текущей строки со всей партицией.',
        points: ['FIRST_VALUE', 'LAST_VALUE', 'влияние рамки и ORDER BY'],
        widget: 'widgets/first-last-value.html',
      },
    ],
  },
  {
    title: 'SQL для аналитика',
    lessons: [
      {
        title: 'Первое и последнее действие',
        description: 'Ищем границы истории пользователя и сравниваем MIN/MAX для времени с ROW_NUMBER, когда нужна полная строка события.',
        points: ['MIN и MAX', 'ROW_NUMBER для крайних строк', 'фильтр до ранжирования'],
        widget: 'widgets/first-last-action.html',
      },
      {
        title: 'Удаление дублей',
        description: 'Сравниваем DISTINCT с дедупликацией через ROW_NUMBER, выбираем ключ дубля и определяем, какую загрузку оставить.',
        points: ['DISTINCT по выбранным полям', 'ROW_NUMBER по ключу', 'ранняя или поздняя запись'],
        widget: 'widgets/deduplication.html',
      },
      {
        title: 'Топ-N внутри группы',
        description: 'Ранжируем объекты внутри категорий, меняем размер Top-N и сравниваем поведение ROW_NUMBER и RANK на одинаковых значениях.',
        points: ['PARTITION BY группы', 'фильтр position ≤ N', 'ничьи на границе Top-N'],
        widget: 'widgets/top-n-per-group.html',
      },
      {
        title: 'DAU, WAU и MAU',
        description: 'Считаем уникальных активных пользователей в скользящих окнах на выбранную дату и меняем определение активности.',
        points: ['COUNT DISTINCT', 'окна 1, 7 и 30 дней', 'определение активного пользователя'],
        widget: 'widgets/dau-wau-mau.html',
      },
      {
        title: 'Воронка и конверсия',
        description: 'Строим последовательность view → contact → purchase, сравниваем строгий порядок с простым наличием событий и считаем конверсии между шагами.',
        points: ['последовательные шаги', 'конверсия от шага и от начала', 'уникальные пользователи'],
        widget: 'widgets/funnel-conversion.html',
      },
      { title: 'Retention' },
      { title: 'Сегментация пользователей' },
    ],
  },
];

const lessons = chapters.flatMap((chapter, chapterIndex) =>
  chapter.lessons.map((lesson) => ({ ...lesson, chapter: chapter.title, chapterIndex }))
);

let currentLesson = 0;
const scrollStateKey = `sql-book-scroll:${location.pathname}`;

function readScrollState() {
  try {
    return JSON.parse(sessionStorage.getItem(scrollStateKey));
  } catch {
    return null;
  }
}

function saveScrollState() {
  const sidebar = document.querySelector('.sidebar');
  try {
    sessionStorage.setItem(scrollStateKey, JSON.stringify({
      lesson: currentLesson,
      pageY: window.scrollY,
      sidebarY: sidebar ? sidebar.scrollTop : 0,
    }));
  } catch {
    // Страница продолжит работать, даже если storage недоступен.
  }
}

let saveScrollFrame = null;
function scheduleScrollSave() {
  if (saveScrollFrame !== null) return;
  saveScrollFrame = requestAnimationFrame(() => {
    saveScrollFrame = null;
    saveScrollState();
  });
}

function buildNavigation() {
  const nav = document.getElementById('book-nav');
  let lessonIndex = 0;

  nav.innerHTML = chapters.map((chapter) => {
    const items = chapter.lessons.map((lesson) => {
      const index = lessonIndex++;
      return `
        <button class="nav-item" type="button" data-lesson="${index}">
          <span class="nav-number">${String(index + 1).padStart(2, '0')}</span>
          <span>${lesson.title}</span>
          ${lesson.widget ? '' : '<span class="nav-status" title="Запланировано"></span>'}
        </button>`;
    }).join('');

    return `
      <section class="nav-section">
        <h2 class="nav-section-title">${chapter.title}</h2>
        ${items}
      </section>`;
  }).join('');

  nav.addEventListener('click', (event) => {
    const item = event.target.closest('[data-lesson]');
    if (!item) return;
    showLesson(Number(item.dataset.lesson));
  });
}

function showLesson(index, { scrollToTop = true } = {}) {
  if (index < 0 || index >= lessons.length) return;

  currentLesson = index;
  const lesson = lessons[index];

  document.getElementById('lesson-kicker').textContent = `${lesson.chapter} · Trino`;
  document.getElementById('lesson-title').textContent = lesson.title;
  document.getElementById('lesson-description').textContent = lesson.description || 'Тема добавлена в структуру учебника. Содержание подготовим позже.';
  document.getElementById('lesson-points').innerHTML = (lesson.points || [])
    .map((point) => `<span class="lesson-point">${point}</span>`)
    .join('');

  const frame = document.getElementById('widget-frame');
  const empty = document.getElementById('widget-empty');
  const openWidget = document.getElementById('open-widget');
  if (lesson.widget) {
    frame.hidden = false;
    empty.hidden = true;
    frame.src = lesson.widget;
    frame.title = `${lesson.title} — интерактивный SQL-виджет`;
    openWidget.hidden = false;
    openWidget.href = lesson.widget;
  } else {
    frame.hidden = true;
    frame.removeAttribute('src');
    empty.hidden = false;
    openWidget.hidden = true;
  }

  document.querySelectorAll('[data-lesson]').forEach((item) => {
    item.classList.toggle('active', Number(item.dataset.lesson) === index);
  });

  const previous = document.getElementById('previous-lesson');
  const next = document.getElementById('next-lesson');
  previous.disabled = index === 0;
  next.disabled = index === lessons.length - 1;
  document.getElementById('lesson-position').textContent = `${index + 1} из ${lessons.length}`;

  history.replaceState(null, '', `#lesson-${index + 1}`);
  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

document.getElementById('previous-lesson').addEventListener('click', () => showLesson(currentLesson - 1));
document.getElementById('next-lesson').addEventListener('click', () => showLesson(currentLesson + 1));

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const savedScrollState = readScrollState();
const sidebar = document.querySelector('.sidebar');
window.addEventListener('scroll', scheduleScrollSave, { passive: true });
sidebar.addEventListener('scroll', scheduleScrollSave, { passive: true });
window.addEventListener('pagehide', saveScrollState);

buildNavigation();

const initialLesson = Number(location.hash.replace('#lesson-', '')) - 1;
const initialLessonIndex = Number.isInteger(initialLesson) && initialLesson >= 0 ? initialLesson : 0;
showLesson(initialLessonIndex, { scrollToTop: false });

if (savedScrollState?.lesson === initialLessonIndex) {
  requestAnimationFrame(() => {
    window.scrollTo(0, savedScrollState.pageY || 0);
    sidebar.scrollTop = savedScrollState.sidebarY || 0;
  });
}
