function copyCode() {
    // Get the text from the code block
    const codeBlock = event.target.previousElementSibling;
    const text = codeBlock.innerText;

    // Create a temporary textarea element to copy the text
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);

    // Select the text and copy it to clipboard
    textarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Provide feedback to the user
    event.target.textContent = 'Copied!';
    setTimeout(() => {
        event.target.textContent = 'Copy Code';
    }, 2000);
}
