const toggle = document.getElementById('toggle')
const close = document.getElementById('close')
const open = document.getElementById('open')
const modal = document.getElementById('modal')
const navbar = document.getElementById('navbar')

// Function to close navbar when user clicks outside
function closeNavbar (e) {
  if (
    document.body.classList.contains('show-nav') &&
    !navbar.contains(e.target) &&
    e.target !== toggle
  ) {
    document.body.classList.remove('show-nav')
    document.body.removeEventListener('click', closeNavbar)
  }
}

// Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav')
  if (document.body.classList.contains('show-nav')) {
    document.body.addEventListener('click', closeNavbar)
  }
})

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'))

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'))

// Hide modal on outside click
window.addEventListener('click', e => {
  if (e.target !== modal && !modal.contains(e.target)) {
    modal.classList.remove('show-modal')
  }
})
