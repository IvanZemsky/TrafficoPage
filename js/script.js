window.addEventListener('load', function(){
    const faqContainer = document.querySelector('.faq__wrap-container');
    const faqBg = document.querySelector('.faq-bg');

    faqBg.style.height = `${faqContainer.offsetHeight + 109}px`;
});