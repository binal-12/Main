const resume =document.getElementsByClassName("button")[0]

resume.addEventListener('click', () => {

    window.open('./resume.pdf', '_blank').focus()
})

var goto = (p) => {
    let loc = "#" + p.textContent
    window.location.href = loc;
}


// ===============================================

const project = document.getElementById("Projects").children;

for( let i=2, n=project.length; i<n; i++){
    if(i%2 == 0){
        project[i].children[1].style.marginLeft = "55px"
    } else {
        project[i].children[0].style.marginRight = "55px"
    }
}

//=====================================================

const form = document.getElementById("conatct-form")

