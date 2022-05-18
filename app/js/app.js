document.addEventListener('DOMContentLoaded', () => {
  // ACCORDION
  const accordion = document.querySelector('.accordion');

  if (accordion) {
    const heightData = [];

    const descriptions = document.querySelectorAll('.accordion-descr');
    const blocks = document.querySelectorAll('.accordion-block');

    descriptions.forEach((d) => heightData.push(d.offsetHeight));

    descriptions.forEach((d) => (d.style.height = '0px'));

    blocks[0].classList.add('activable');
    descriptions[0].style.height = `${heightData[0]}px`;

    const titles = document.querySelectorAll('.accordion-title');

    titles.forEach((t, index) => {
      t.addEventListener('click', (e) => {
        blocks.forEach((b) => b.classList.remove('activable'));

        descriptions.forEach((d) => (d.style.height = '0px'));

        t.parentNode.classList.add('activable');
        t.nextElementSibling.style.height = `${heightData[index]}px`;
      });
    });
  }
});
