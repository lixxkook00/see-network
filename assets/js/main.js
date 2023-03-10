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