// Function to copy code to clipboard
function copyCode(id) {
  const codeText = document.getElementById(id).innerText;
  
  // Create a temporary text area element
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = codeText;
  
  // Append it to the body, select the text, and copy it
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  
  // Remove the temporary text area
  document.body.removeChild(tempTextArea);
  
  // Show a message to the user
  alert("Code copied to clipboard!");
}

