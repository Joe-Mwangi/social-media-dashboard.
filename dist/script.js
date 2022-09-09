const btn = document.querySelector('.btn-container')
const body = document.querySelector('.container')
const grid = document.querySelectorAll('.grid')
const overview = document.querySelector('.overview')

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    body.classList.toggle('theme')
    overview.classList.toggle('text-color')
    grid.forEach(box => box.classList.toggle('bg'))
})
