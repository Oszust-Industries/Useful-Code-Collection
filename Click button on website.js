function clickButtonWhenAvailable() {
    var buttonName = 'button.tut-slides-next'
    var button = document.querySelector(buttonName);
    if (button) {
        console.log("Button found, clicking...");
        button.click();
        // Check again after 1 second in case the button is re-rendered
        setTimeout(clickButtonWhenAvailable, 1000);
    } else {
        // Try again in 500 milliseconds
        setTimeout(clickButtonWhenAvailable, 500);
    }
}

// Start the process
clickButtonWhenAvailable();
