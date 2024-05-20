// Select the element with the ID "advice" and store it in a variable
const adviceElement = document.getElementById("advice");

// Select the element with the ID "getAdvice" and store it in a variable
const getAdviceButton = document.getElementById("getAdvice");

// Add an event listener to the button that calls the getAdvice function when clicked
getAdviceButton.addEventListener("click", getAdvice);

// Asynchronous function to fetch advice
async function getAdvice() {
  // Log a message to the console indicating advice is being fetched
  console.log("getting advice....");

  // Fetch data from the Advice Slip API
  const response = await fetch("https://api.adviceslip.com/advice");

  // Parse the JSON response and store the data in a variable
  const data = await response.json();

  // Log the fetched data to the console for debugging purposes (optional)
  console.log(data);

  // Extract the advice text from the data object
  const advice = data.slip.advice;

  // Update the content of the adviceElement with the fetched advice
  adviceElement.textContent = advice;
}

// Call the getAdvice function to fetch advice on page load (optional)
// getAdvice();
