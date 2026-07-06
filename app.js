 
function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_w9zu35k',
            'template_v5i060a',
          event.target,
            'hE3oyvOEhYM4R9MXG'
    ).then (() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
         loading.classList.remove("modal__overlay--visible")
         alert(
            "The email service is temporarily unavailable. Please contact me directly on angella.gutierrez01@gmail.com "
         )
    })
}

let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}