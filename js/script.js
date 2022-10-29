// Scroll from header
(function() {
    const headerLinks = document.querySelectorAll('.header__nav-item .header__nav-link');
    
    for (const headerLink of headerLinks) {
        headerLink.addEventListener('click', (event) => {
            event.preventDefault();

            const id = headerLink.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    }
}());


// lavelCancelFocus

document.body.addEventListener('click', (event) => {
    if (event.target.tagName == 'LABEL') {
      event.preventDefault();
    }
  });

// Slider

(function() {
    const commentsBack = document.querySelector('#comments-back');
    const commentsForward = document.querySelector('#comments-forward');
    const commentsCards = document.querySelector('.comments__cards');

    let leftOffset = 0;
    let leftOffsetStep = ((document.documentElement.clientWidth) / 5) + 110;
    if (leftOffsetStep > 430) {
        leftOffsetStep = 430;
    }

    commentsForward.addEventListener('click', function(){
        if (leftOffset > -leftOffsetStep*2) {
            leftOffset -= leftOffsetStep;
            commentsCards.style.transform = `translateX(${leftOffset}px)`;
            commentsBack.style.opacity = '1';

            if (leftOffset <= -leftOffsetStep*2) {
                commentsForward.style.opacity = '.5';
            }
    
        }
        
    });

    commentsBack.addEventListener('click', function(){
        if (leftOffset < 0) {
            leftOffset += leftOffsetStep;
            commentsCards.style.transform = `translateX(${leftOffset}px)`;
            commentsForward.style.opacity = '1';

            if (leftOffset == 0) {
                commentsBack.style.opacity = '.5';
            }
    
        }
        
    });

}());

