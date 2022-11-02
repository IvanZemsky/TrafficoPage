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


// labelCancelFocus

document.body.addEventListener('click', (event) => {
    if (event.target.tagName == 'LABEL') {
      event.preventDefault();
    }
});

// Answers on questions

(function() {
    const faqCardContents = Array.from(document.querySelectorAll('.faq__card-content'));
    const faqCardAnswers = Array.from(document.querySelectorAll('.faq__card-answer'));
    
    for (const faqCardContent of faqCardContents) {
        faqCardContent.addEventListener('click', (event) => {
            let faqCardContentIndex = faqCardContents.indexOf(faqCardContent);
            console.log(faqCardContentIndex);

            faqCardContents[faqCardContentIndex].classList.toggle('faq__card-content_hidden');
            faqCardAnswers[faqCardContentIndex].classList.toggle('faq__card-answer_hidden');
        });
    }
}());

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

