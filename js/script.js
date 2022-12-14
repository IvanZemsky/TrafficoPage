// Scroll from header

(function() {
    const headerLinks = document.querySelectorAll('.header__nav-item .header__nav-link');
    const connectLinks = document.querySelectorAll('.connect__links-link');
    
    for (const headerLink of headerLinks) {
        headerLink.addEventListener('click', (event) => {
            event.preventDefault();

            const id = headerLink.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    for (const connectLink of connectLinks) {
        connectLink.addEventListener('click', (event) => {
            event.preventDefault();

            const id = connectLink.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}());


// labelCancelFocus

document.body.addEventListener('click', (event) => {
    if (event.target.tagName == 'LABEL') {
      event.preventDefault();
    }
});

// Burger in header

(function(){
    const headerBurger = document.querySelector('#header-burger');
    const headerMenu = document.querySelector('.header__nav-items');

    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('header__nav-burger_cross');
        headerMenu.classList.toggle('header__nav-items_hidden');
    });
}());

// Answers on questions

(function() {
    const faqCardContents = Array.from(document.querySelectorAll('.faq__card-content'));
    const faqCardQuestions = Array.from(document.querySelectorAll('.faq__card-question'));
    const faqCardAnswers = Array.from(document.querySelectorAll('.faq__card-answer'));

    const faqCardQuestionLines = Array.from(document.querySelectorAll('.faq__card-sign-line:first-child'));

    for (let faqCardQuestion of faqCardQuestions) {

        faqCardQuestion.style.height = 'auto';

        let faqCardQuestionIndex = faqCardQuestions.indexOf(faqCardQuestion);
        faqCardContents[faqCardQuestionIndex].style.height = `${faqCardQuestions[faqCardQuestionIndex].offsetHeight}px`;

        faqCardQuestion.addEventListener('click', () => {

            if (faqCardContents[faqCardQuestionIndex].style.height != `${faqCardQuestions[faqCardQuestionIndex].offsetHeight}px`) {
                faqCardContents[faqCardQuestionIndex].style.height = `${faqCardQuestions[faqCardQuestionIndex].offsetHeight}px`;
            }
            else {
                faqCardContents[faqCardQuestionIndex].style.height = 'auto';
            }
            faqCardContents[faqCardQuestionIndex].classList.toggle('faq__card-content_hidden');
            faqCardAnswers[faqCardQuestionIndex].classList.toggle('faq__card-answer_hidden');

            faqCardQuestionLines[faqCardQuestionIndex].classList.toggle('faq__card-sign-line_raised');
        });

        let currentWindowWidth = window.innerWidth;

        window.addEventListener('resize', () => {
            if (currentWindowWidth != window.innerWidth) {

                for (faqCardQuestion of faqCardQuestions) {
                    faqCardQuestion.style.height = 'auto';
    
                    faqCardContents[faqCardQuestionIndex].style.height = `${faqCardQuestions[faqCardQuestionIndex].offsetHeight}px`;
                    faqCardQuestionLines[faqCardQuestionIndex].classList.add('faq__card-sign-line_raised');
                    currentWindowWidth = window.innerWidth;
                }

            }
        });
    }
}());

// Slider

(function() {
    const commentsBackButtons = Array.from(document.querySelectorAll('.comments__arrow-back'));
    const commentsForwardButtons = Array.from(document.querySelectorAll('.comments__arrow-forward'));
    const commentsCards = document.querySelector('.comments__cards');

    let leftOffset = 0;
    let leftOffsetStep;

    function setLeftOffsetStep() {

        if (document.documentElement.clientWidth > 1120) {
            leftOffsetStep = (document.documentElement.clientWidth / 4); // where '4' is the number of cards
        } 

        if (leftOffsetStep > 430) {
            leftOffsetStep = 430;
        }
    
        if (document.documentElement.clientWidth <= 1120) { // for 1120- px monitors
            leftOffsetStep = document.documentElement.clientWidth - 10;
        }
    
        if (document.documentElement.clientWidth <= 1005) { // for 1005- px monitors
            leftOffsetStep = document.documentElement.clientWidth - 30;
        }

    }
    setLeftOffsetStep();

    for (let commentsForwardButton of commentsForwardButtons) {

        commentsForwardButton.addEventListener('click', () => {
            if (document.documentElement.clientWidth > 1120) {
                if (leftOffset > -leftOffsetStep*2) {
    
                    leftOffset -= leftOffsetStep;
                    commentsCards.style.transform = `translateX(${leftOffset}px)`;
                    commentsBackButtons.forEach((item) => item.style.opacity = '1');
        
                    if (leftOffset <= -leftOffsetStep*2) {
                        commentsForwardButton.style.opacity = '.5';
                    }
            
                }
            } 
    
            if (document.documentElement.clientWidth <= 1120 && document.documentElement.clientWidth > 625) {
                if (leftOffset > -leftOffsetStep) {
        
                    leftOffset -= leftOffsetStep;
                    commentsCards.style.transform = `translateX(${leftOffset}px)`;
                    commentsBackButtons.forEach((item) => item.style.opacity = '1');
        
                    if (leftOffset <= -leftOffsetStep) {
                        commentsForwardButton.style.opacity = '.5';
                    }
            
                }
            }
    
            if (document.documentElement.clientWidth <= 625) {
                if (leftOffset > -leftOffsetStep*3) {
        
                    leftOffset -= leftOffsetStep;
                    commentsCards.style.transform = `translateX(${leftOffset}px)`;
                    commentsBackButtons.forEach((item) => item.style.opacity = '1');
        
                    if (leftOffset <= -leftOffsetStep*3) {
                        commentsForwardButton.style.opacity = '.5';
                    }
            
                }
            }
           
            
        });

    }
    
    for (let commentsBackButton of commentsBackButtons) {

        commentsBackButton.addEventListener('click', () => {
            if (leftOffset < 0) {
                leftOffset += leftOffsetStep;
                commentsCards.style.transform = `translateX(${leftOffset}px)`;
                commentsForwardButtons.forEach((item) => item.style.opacity = '1');
    
                if (leftOffset == 0) {
                    commentsBackButton.style.opacity = '0.5';
                }
        
            }
            
        });

    }

    let currentWindowWidth = window.innerWidth;

    window.addEventListener('resize', () => {

        if (currentWindowWidth != window.innerWidth) {

            leftOffset = 0;
            commentsCards.style.transform = `translateX(0px)`;
            commentsForwardButtons.forEach((item) => item.style.opacity = '1');
            commentsBackButtons.forEach((item) => item.style.opacity = '0.5');

            setLeftOffsetStep();
            currentWindowWidth = window.innerWidth;
            
        }
        
    });
    

}());

