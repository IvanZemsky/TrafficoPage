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