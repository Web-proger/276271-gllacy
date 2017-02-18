var feedback = document.querySelector(".modal-feedback");
var feedbackOpen =document.querySelector("#feedback-btn");
var feedbackClose = feedback.querySelector(".modal-feedback-close");
var layout = document.querySelector(".modal-layout");


/** Открытие окна по клику на кнопку **/
feedbackOpen.addEventListener("click", function(event){
	event.preventDefault();
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