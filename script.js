const resume =document.getElementsByClassName("button")[0]

resume.addEventListener('click', () => {

    window.open('./resume.pdf', '_blank').focus()
})