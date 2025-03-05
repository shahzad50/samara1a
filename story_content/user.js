window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script95 = function()
{
  const inputs = document.querySelectorAll('.acc-textinput');

// Define an array with maximum character lengths for each input field
const maxLengths = [135, 135, 135];

inputs.forEach((input, index) => {
    // Set maxlength based on the index
    if (index < maxLengths.length) {
        input.setAttribute('maxlength', maxLengths[index]);
    }

    // Define the Storyline variable name
    const storylineVar = `sl1_charCount${index + 1}`;

    // Add event listener to track input
    input.addEventListener('input', () => {
        const charCount = input.value.length; // Get character count
        setVar(storylineVar, charCount); // Update Storyline variable
    });
});

}

window.Script96 = function()
{
  const inputs = document.querySelectorAll('.acc-textinput');

// Define an array with maximum character lengths for each input field
const maxLengths = [135, 135, 135];

inputs.forEach((input, index) => {
    // Set maxlength based on the index
    if (index < maxLengths.length) {
        input.setAttribute('maxlength', maxLengths[index]);
    }

    // Define the Storyline variable name
    const storylineVar = `sl2_charCount${index + 1}`;

    // Add event listener to track input
    input.addEventListener('input', () => {
        const charCount = input.value.length; // Get character count
        setVar(storylineVar, charCount); // Update Storyline variable
    });
});

}

window.Script97 = function()
{
  const inputs = document.querySelectorAll('.acc-textinput');

// Define an array with maximum character lengths for each input field
const maxLengths = [135, 135, 135];

inputs.forEach((input, index) => {
    // Set maxlength based on the index
    if (index < maxLengths.length) {
        input.setAttribute('maxlength', maxLengths[index]);
    }

    // Define the Storyline variable name
    const storylineVar = `sl3_charCount${index + 1}`;

    // Add event listener to track input
    input.addEventListener('input', () => {
        const charCount = input.value.length; // Get character count
        setVar(storylineVar, charCount); // Update Storyline variable
    });
});

}

window.Script98 = function()
{
  const inputs = document.querySelectorAll('.acc-textinput');

// Define an array with maximum character lengths for each input field
const maxLengths = [210, 110, 210];

inputs.forEach((input, index) => {
    // Set maxlength based on the index
    if (index < maxLengths.length) {
        input.setAttribute('maxlength', maxLengths[index]);
    }

    // Define the Storyline variable name
    const storylineVar = `sl4_charCount${index + 1}`;

    // Add event listener to track input
    input.addEventListener('input', () => {
        const charCount = input.value.length; // Get character count
        setVar(storylineVar, charCount); // Update Storyline variable
    });
});

}

};
