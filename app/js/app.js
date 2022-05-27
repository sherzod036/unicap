document.addEventListener('DOMContentLoaded', () => {
  // ACCORDION
  const accordion = document.querySelector('.accordion')

  if (accordion) {
    const heightData = []

    const descriptions = document.querySelectorAll('.accordion-descr')
    const blocks = document.querySelectorAll('.accordion-block')

    descriptions.forEach((d) => heightData.push(d.offsetHeight))

    descriptions.forEach((d) => (d.style.height = '0px'))

    blocks[0].classList.add('activable')
    descriptions[0].style.height = `${heightData[0]}px`

    const titles = document.querySelectorAll('.accordion-title')

    titles.forEach((t, index) => {
      t.addEventListener('click', (e) => {
        blocks.forEach((b) => b.classList.remove('activable'))

        descriptions.forEach((d) => (d.style.height = '0px'))

        t.parentNode.classList.add('activable')
        t.nextElementSibling.style.height = `${heightData[index]}px`
      })
    })
  }

  // CAREER
  const career = document.querySelector('.career-page')

  if (career) {
    const sizeStore = []

    const inners = document.querySelectorAll('.career-page__block-inner')

    inners.forEach((i) => sizeStore.push(i.offsetHeight))
    inners.forEach((i) => (i.style.height = `0px`))

    const blocks = document.querySelector('.career-page__blocks')

    const block = document.querySelectorAll('.career-page__block')

    block[0].classList.add('activable')
    inners[0].style.height = `${sizeStore[0]}px`

    blocks.addEventListener('click', (e) => {
      const curr = e.target.closest('.career-page__block')

      const getIcons = document.querySelectorAll('.career-page__block-icon .rotatable')

      getIcons.forEach((i) => i.classList.remove('activable'))
      const getCurrIcon = curr.querySelector('.career-page__block-icon .rotatable')
      getCurrIcon.classList.add('activable')

      block.forEach((b) => b.classList.remove('activable'))
      inners.forEach((i) => (i.style.height = `0px`))
      curr.classList.add('activable')

      block.forEach((b, index) => {
        if (b.classList.contains('activable')) {
          const el = b.querySelector('.career-page__block-inner')
          el.style.height = `${sizeStore[index]}px`
        }
      })
    })
  }
})
