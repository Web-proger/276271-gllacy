var feedback = document.querySelector(".modal-feedback");
var feedbackOpen =document.querySelector("#feedback-btn");
var feedbackClose = feedback.querySelector(".modal-feedback-close");
var layout = document.querySelector(".modal-layout");


/** Открытие окна по клику на кнопку **/
feedbackOpen.addEventListener("click", function(){
	event.preventDefault();
	layout.classList.add("layout-visible")
	feedback.classList.add("modal-feedback-open");
});

/** Закрытие окна по крестику **/
feedbackClose.addEventListener("click", function(){
	event.preventDefault();
	layout.classList.remove("layout-visible")
	feedback.classList.remove("modal-feedback-open");
})

/** Закрытие окна по escape **/