const tikuiScripts = () => {
  const titleSelectors = (content) => [...content?.querySelectorAll('h1, h2, h3, h4, h5, h6')].filter(title => title.id) || [];

  const initNav = () => {
    const content = document.querySelector('[data-navigable]');
    const titles = titleSelectors(content);

    if (titles.length === 0) {
      return;
    }

    const nav = document.createElement('div');
    nav.classList.add('tikui-template-page--nav')
    const navVertical = document.createElement('ul');
    navVertical.classList.add('tikui-nav-vertical');

    titles.forEach((title, index) => {
      const level = title.tagName.slice(1);
      const item = document.createElement('a');
      item.setAttribute('href', `#${title.id}`);
      item.innerText = title.innerText;
      item.classList.add('tikui-nav-item');
      item.classList.add(level === '1' ? '-main' : '-child');
      const slot = document.createElement('li');
      slot.appendChild(item);
      slot.classList.add('tikui-nav-vertical--item');
      slot.classList.add(`-level-${level}`);

      navVertical.appendChild(slot);
    });

    nav.appendChild(navVertical);

    content.prepend(nav);
  };

  const launchOnHash = launch => {
    const hash = location.hash;

    if (hash) {
      launch(hash.slice(1));
    }
  }

  const launchOnAnchor = launch => (hash) => {
    const element = document.getElementById(hash);

    if (element) {
      launch(element);
    }
  }

  const scrollToAnchor = () => launchOnHash(launchOnAnchor((anchor) => anchor.scrollIntoView()))

  const init = () => {
    initNav();
    scrollToAnchor();
  }

  init();
}

document.addEventListener('DOMContentLoaded', tikuiScripts, false);
