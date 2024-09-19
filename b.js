function reflexAgent(mood) {
    // define mood-action mappings
    const moodAction = {
        happy: "Smile",
        sad: "Cry",
        angry: "Frown"
    };

    // determine  action based on mood
    const action = moodAction[mood] || "No specific action";
    displayResponse(action);
    displayImage(mood);
}

function displayResponse(action) {
    const responseElement = document.getElementById("response");
    responseElement.innerHTML = `The agent suggests: ${action}`;
}

function displayImage(mood) {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ''; // clear previous image

    const img = document.createElement('img');
    img.style.width = '450px';
    img.style.height = '250px';

    switch(mood) {
        case 'happy':
            img.src = 'happy.gif';
            img.alt = 'Smile';
            break;
        case 'sad':
            img.src = 'crying.gif';
            img.alt = 'Cry';
            break;
        case 'angry':
            img.src = 'angry.gif';
            img.alt = 'Frown';
            break;
        default:
            img.src = 'question.png';
            img.alt = 'No action';
    }

    imageContainer.appendChild(img);
}

function submit() {
    const mood = document.getElementById("mood").value.toLowerCase();
    reflexAgent(mood); // call  reflex agent function
}

//  enter key
document.getElementById('mood').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        submit();
    }
});
