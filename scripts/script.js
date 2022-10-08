const activeOverlay = () => {
    const openOverlayButton = document.getElementById('open-quiz-tooltip')
    const closeOverlayButton = document.getElementById('close-quiz-tooltip')
    const quizOverlay = document.getElementById('quiz-tooltip')
    const mainBody = document.getElementById('body-main')

    if (mainBody && openOverlayButton && quizOverlay && closeOverlayButton) {
        openOverlayButton.addEventListener('click', () => {
            quizOverlay.classList.add('active')
            mainBody.classList.add('active')
        })
        closeOverlayButton.addEventListener('click', () => {
            quizOverlay.classList.remove('active')
            mainBody.classList.remove('active')
        })
    }
}

activeOverlay()