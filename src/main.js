document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]")
  
  
  /* for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        console.log(e.target.dataset.tabButton)
    }) 
}
 */

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const target_id = e.target.dataset.tabButton;
        const target_item = document.querySelector(`[data-tab-id=${target_id}]`)
        hideTabs();
        target_item.classList.add('shows__list--is-active');
        removeActiveButton();
        button.classList.add('shows__tabs__button--is-active')

    });
  });

  for (let i=0; i < questions.length; i++) {
    //!questions[i].addEventListener ("click", openAndCloseAnswer(questions[i])) 
    questions[i].addEventListener ("click", () => {openAndCloseAnswer(questions[i])}) 
    //*questions[i].addEventListener ("click", openAndCloseAnswer)  - como o prof fez
  }

})

function openAndCloseAnswer(e) {
    const addClass = 'faq__question__item--is-open'
    const parentElement = e.parentNode
    //*const element = e.target.parentNode - como o prof fez
    parentElement.classList.toggle(addClass);
}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    tabsContainer.forEach ((tab) => {
        tab.classList.remove('shows__list--is-active')
    })
}

function removeActiveButton() {
    const buttons = document.querySelectorAll("[data-tab-button]");
    buttons.forEach ((button) => {
        button.classList.remove('shows__tabs__button--is-active');
    })

}




