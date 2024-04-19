const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    const iconMinus = question.querySelector('.icon-minus');
    const iconPlus = question.querySelector('.icon-plus');
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
      iconMinus.style.display = 'block';
      iconPlus.style.display = 'none';
    } else {
      answer.style.display = 'none';
      iconMinus.style.display = 'none';
      iconPlus.style.display = 'block';
    }
  });
});
