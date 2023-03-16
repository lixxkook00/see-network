const languageBtn = document.querySelector('.lang.a')
const languageOverlay = document.querySelector('.langModel')
const languageMain = document.querySelector('.langModel .main')
const closeLanguage = document.querySelector('.langModel .main .fa-xmark')


if(languageBtn != null){
    languageBtn.onclick = () => {
        languageOverlay.classList.add('active')
        languageMain.classList.add('active')
    }
}

if(languageOverlay != null){
    languageOverlay.onclick = () => {
        languageOverlay.classList.remove('active')
        languageMain.classList.remove('active')
    }
}

if(closeLanguage != null){
    closeLanguage.onclick = () => {
        languageOverlay.classList.remove('active')
        languageMain.classList.remove('active')
    }
}

// effect input
const inputEffect = document.querySelectorAll('.uni-input-input')

inputEffect.forEach(element => {
    element.addEventListener("change", (event) => {
        element.parentNode.parentNode.parentNode.classList.add('filled')
    })

    if(element.value){
        element.parentNode.parentNode.parentNode.classList.add('filled')
    }
});



// copy to clipboard

const handleCopyToClipBoard = (string,id,originText) => {
    navigator.clipboard.writeText(string);

    document.querySelector(`#${id}`).innerHTML = `
        <div class="copied">
            <i class="fa-regular fa-circle-check"></i>
        </div>
    `

    setTimeout(() => {
        document.querySelector(`#${id}`).innerText = originText
    },2000)
}