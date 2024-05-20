const adviceElement = document.getElementById("advice");
const getAdviceButton = document.getElementById("getAdvice");

getAdviceButton.addEventListener("click", getAdvice);

async function getAdvice() {
  console.log("getting advice....");
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  console.log(data);
  const advice = data.slip.advice;
  adviceElement.textContent = advice;
}

getAdvice();
