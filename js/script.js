window.addEventListener('load', function(){
    const faqContainer = document.querySelector('.faq__wrap-container');
    const faqBg = document.querySelector('.faq-bg');

    faqBg.style.height = `${faqContainer.offsetHeight + 109}px`;
});

// Slider

(function commentsSlider() {
    const commentsBack = document.querySelector('#comments-back');
    const commentsForward = document.querySelector('#comments-forward');
    const commentsCards = document.querySelector('.comments__cards');

    let leftOffset = 0;

    commentsForward.addEventListener('click', function(){
        leftOffset += 435;
        if(leftOffset > 1300) {
            leftOffset = 0;
        }
        
        commentsCards.style.left = `-${leftOffset}px`;
    });

    commentsBack.addEventListener('click', function(){
        leftOffset -= 435;
        if(leftOffset < 0) {
            leftOffset = 0;
        }
        commentsCards.style.left = `-${leftOffset}px`;
    });

}());