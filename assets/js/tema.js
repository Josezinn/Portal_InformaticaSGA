// recebe tema
let tema = localStorage.getItem('theme')
let body = document.querySelector("body")
//se tema nao existe seta o dark. se existe, set o tema corrente
if (tema) {
    body.classList.toggle(tema);
} else {
    console.log(tema)
    localStorage.setItem('theme', 'dark-mode')
}