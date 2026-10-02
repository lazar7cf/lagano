/* Shared progressive enhancements. Navigation and the entire menu work without JS. */
(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.getElementById('site-navigation');
  const mobile = window.matchMedia('(max-width: 767px)');

  if (header && toggle && navigation) {
    header.classList.add('nav-enhanced');
    const setOpen = (open, restoreFocus = false) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Navigation schließen' : 'Navigation öffnen');
      navigation.hidden = mobile.matches && !open;
      if (restoreFocus) toggle.focus();
    };
    const syncNavigation = () => {
      toggle.hidden = !mobile.matches;
      setOpen(false);
    };
    syncNavigation();
    mobile.addEventListener('change', syncNavigation);
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false, true);
    });
    document.addEventListener('click', (event) => {
      if (!header.contains(event.target)) setOpen(false);
    });
    header.addEventListener('focusout', (event) => {
      if (event.relatedTarget && !header.contains(event.relatedTarget)) setOpen(false);
    });
  }

  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  // Existing hours, evaluated in the café's timezone, including DST and next-day opening.
  const status = document.querySelector('[data-open-status]');
  if (status) {
    const hours = {
      Sun: [600, 1260], Mon: [540, 1320], Tue: [540, 1320], Wed: [540, 1320],
      Thu: [540, 1320], Fri: [540, 1380], Sat: [540, 1380]
    };
    const weekdays = Object.keys(hours);
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    });
    const updateStatus = () => {
      const parts = Object.fromEntries(formatter.formatToParts(new Date()).map((part) => [part.type, part.value]));
      const minutes = Number(parts.hour) * 60 + Number(parts.minute);
      const [opens, closes] = hours[parts.weekday];
      const open = minutes >= opens && minutes < closes;
      const tomorrow = weekdays[(weekdays.indexOf(parts.weekday) + 1) % 7];
      const next = minutes < opens ? opens : hours[tomorrow][0];
      const time = `${String(Math.floor(next / 60)).padStart(2, '0')}:${String(next % 60).padStart(2, '0')}`;
      status.classList.toggle('is-closed', !open);
      status.querySelector('[data-status-text]').textContent = open
        ? `Jetzt geöffnet · bis ${String(Math.floor(closes / 60)).padStart(2, '0')}:00 Uhr`
        : `Geschlossen · ${minutes < opens ? 'heute' : 'morgen'} ab ${time} Uhr`;
      status.hidden = false;
    };
    updateStatus();
    setInterval(updateStatus, 60000);
  }

  const search = document.getElementById('menu-search');
  const sections = [...document.querySelectorAll('.menu-section')];
  const categoryLinks = [...document.querySelectorAll('.category-nav a')];
  const categoryNav = document.querySelector('.category-nav');
  if (!search || !sections.length) return;

  const tools = document.querySelector('[data-menu-tools]');
  const clear = document.querySelector('[data-search-clear]');
  const empty = document.querySelector('[data-menu-empty]');
  const resultStatus = document.querySelector('[data-search-status]');
  const photos = [...document.querySelectorAll('.menu-photo-break')];
  const note = document.querySelector('.menu-note');
  const normalize = (value) => value.toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replaceAll('ß', 'ss');
  const entries = sections.map((section) => ({ section, items: [...section.querySelectorAll('.menu-item')].map((item) => ({ item, text: normalize(item.querySelector('.menu-item-info').textContent) })) }));
  tools.hidden = false;

  const setActiveCategory = (id) => {
    categoryLinks.forEach((link) => {
      if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    const active = categoryLinks.find((link) => link.hash === `#${id}`);
    if (!active) return;
    const offset = active.getBoundingClientRect().left - categoryNav.getBoundingClientRect().left + categoryNav.scrollLeft;
    if (offset < categoryNav.scrollLeft || offset + active.offsetWidth > categoryNav.scrollLeft + categoryNav.clientWidth) {
      categoryNav.scrollTo({ left: offset - 20, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    }
  };

  const filterMenu = () => {
    const term = normalize(search.value.trim());
    let total = 0;
    entries.forEach(({ section, items }) => {
      let visible = 0;
      items.forEach(({ item, text }) => {
        item.hidden = Boolean(term) && !text.includes(term);
        if (!item.hidden) visible += 1;
      });
      section.hidden = visible === 0;
      total += visible;
    });
    document.querySelectorAll('.menu-grid').forEach((grid) => {
      grid.hidden = ![...grid.querySelectorAll('.menu-section')].some((section) => !section.hidden);
    });
    photos.forEach((photo) => { photo.hidden = Boolean(term); });
    note.hidden = total === 0;
    clear.hidden = !search.value;
    empty.hidden = total !== 0;
    resultStatus.textContent = term ? `${total} ${total === 1 ? 'Getränk gefunden' : 'Getränke gefunden'}` : 'Die ganze Karte mit Preisen.';
    const firstVisible = sections.find((section) => !section.hidden);
    setActiveCategory(firstVisible?.id);
  };
  search.addEventListener('input', filterMenu);
  const resetSearch = () => { search.value = ''; filterMenu(); search.focus({ preventScroll: true }); };
  clear.addEventListener('click', resetSearch);
  document.querySelector('[data-search-reset]').addEventListener('click', resetSearch);
  search.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && search.value) { event.preventDefault(); resetSearch(); }
  });

  // An anchor always opens the complete category, even after a search.
  categoryLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (search.value) { search.value = ''; filterMenu(); }
      setActiveCategory(link.hash.slice(1));
    });
  });

  // Observe only a short reading band below the two sticky bars.
  if ('IntersectionObserver' in window) {
    let observer;
    const observeCategories = () => {
      observer?.disconnect();
      const stickyHeight = header.offsetHeight + document.querySelector('.category-bar').offsetHeight;
      observer = new IntersectionObserver((observations) => {
        const visible = observations.filter((observation) => observation.isIntersecting && !observation.target.hidden);
        const current = visible.find((observation) => `#${observation.target.id}` === window.location.hash) || visible[0];
        if (current) setActiveCategory(current.target.id);
      }, { rootMargin: `-${stickyHeight + 8}px 0px -${Math.max(0, window.innerHeight - stickyHeight - 150)}px 0px`, threshold: 0 });
      sections.forEach((section) => observer.observe(section));
    };
    observeCategories();
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(observeCategories, 150);
    });
  }
})();
