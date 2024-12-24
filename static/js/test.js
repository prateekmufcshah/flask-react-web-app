// Inline JavaScript function to sanitize input
function handleFormSubmit(event) {
event.preventDefault(); // Prevent default form submission behavior

// Get the input value
const inputElement = document.querySelector("input[name='name']");
const outputElement = document.getElementById("output");

if (inputElement) {
  const rawText = inputElement.value;
  
  // Sanitize the input by removing non-alphanumeric characters
  const sanitizedText = rawText.replace(/[^a-zA-Z0-9 ]/g, "").trim();

  // Display the sanitized text on the page
  console.log(sanitizedText)
  outputElement.textContent = `Raw Input Text: ${rawText}\nSanitized Text: ${sanitizedText}`;
  
  // Clear the input field
  inputElement.value = "";

  //alert(`Sanitized Text: ${sanitizedText}`);
} else {
  alert("Input field not found.");
}
}