var feedback = document.querySelector(".modal-feedback");
var feedbackForm = feedback.querySelector("form");
var feedbackName = feedback.querySelector("#name");
var feedbackEmail = feedback.querySelector("#email");
var feedbackText = feedback.querySelector("#feedback");
var feedbackOpen =document.querySelector("#feedback-btn");
var feedbackClose = feedback.querySelector(".modal-feedback-close");
var layout = document.querySelector(".modal-layout");
var loginPopup = document.querySelector(".entry-menu-popup");
var loginForm = document.querySelector("#login-form");
var login = document.querySelector("#js-user-login");
var password = document.querySelector("#js-user-pass");
var loginStorage = localStorage.getItem("login");

/** Открытие окна по клику на кнопку **/
feedbackOpen.addEventListener("click", function(event){
    event.preventDefault();
    feedback.classList.remove("feedback-error");
    layout.classList.add("layout-visible")
    feedback.classList.add("modal-feedback-open");
    console.log("Открываем окно и добавляем полупрозрачный слой");
});

/** Закрытие окна по крестику **/
feedbackClose.addEventListener("click", function(event){
    event.preventDefault();
    layout.classList.remove("layout-visible")
    feedback.classList.remove("modal-feedback-open");
    console.log("Закрываем окно по крестику")
});

/** Закрытие окна по щелчку вне окна обратной связи **/
layout.addEventListener("click", function(event){
    event.preventDefault();
    layout.classList.remove("layout-visible")
    feedback.classList.remove("modal-feedback-open");
    console.log("Закрываем окно по щелчку на layout")
});

/** Закрытие окна по escape **/
window.addEventListener("keydown", function(event){
    if (event.keyCode === 27) {
        layout.classList.remove("layout-visible")
        feedback.classList.remove("modal-feedback-open");
        console.log("Закрываем окно по escape")
    }
});

/** Проверка, введены ли данные в форму обратной связи **/
feedbackForm.addEventListener("submit", function(event){
    if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value){
        event.preventDefault();
        feedback.classList.remove("feedback-error");
        console.log("Не все данные введены");
        setTimeout(function(){
            feedback.classList.add("feedback-error");
        }, 1);
    } else {
    event.preventDefault();
    console.log("Отправка формы")        
    }
})

/** Проверка, введён ли login **/
/*if (feedbackName.value) {
    feedbackEmail.focus();
    console.log("поле заполнено")
} else {
    console.log("Поле пустое");
    feedbackText.focus();
}*/

/** Запоминаем логин, ставим фокус в поле логин или пароль **/
/*if (!loginStorage.value) {
    login.value = loginStorage;
    password.focus();
    console.log("поле заполнено")
} else {
    console.log("Поле пустое");
    login.focus();
} 

loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    if (loginStorage.value) {
        console.log("Логин: " + loginStorage);
    } else {
        localStorage.setItem("login", login.value);
        loginStorage = localStorage.getItem("login");
        console.log("Вы отправляете логин " + loginStorage);
    }
});*/