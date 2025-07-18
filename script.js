//your JS code here. If required.
const CurrentElement = document.getElementById("counter");
const incrementbtn = document.getElementById("Incrementbtn");

incrementbtn.addEventListener("click",(){
	const currentValue = parseInt(CurrentElement.textContent)
	alert(`current Value : ${currentValue}`);
	CurrentElement.textContent = currentValue+1;
})