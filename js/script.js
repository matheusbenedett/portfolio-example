document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

// menu open/close config

const menu_btn = document.querySelector('#hamburger-menu')
const header = document.querySelector('#header-menu')
const menu_items = document.querySelectorAll('#nav-menu .menu-item a')

menu_items.forEach(item => {
    item.addEventListener('click', hideMenu)
})

function showMenu() {
    header.classList.add('open-menu')
}

function hideMenu() {
    header.classList.remove('open-menu')
}

function checkMenu() {
    if(!header.classList.contains('open-menu')) {
        showMenu()
    } else {
        hideMenu()
    }
}

menu_btn.addEventListener('click', checkMenu)
