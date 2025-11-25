.ball-container {
    position: relative;
    display: inline-block;
}

#fortune {
    position: absolute;
    top: 42%;       /* adjust this up/down */
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;   /* adjust to fit your triangle */
    text-align: center;
    color: white;
    font-size: 14px;
    line-height: 1.2;
    font-weight: bold;
    pointer-events: none;  /* keep clicks on the image */
}


function shake() {
    var ball = document.getElementById("ball");
    var messageText = document.getElementById("message");

    if (messageText) {
        messageText.remove();
    }

    ball.classList.add("shake");

    setTimeout(() => {
        ball.classList.remove("shake");
        getFortune();
    }, 1000);
}

function getFortune() {
    var fortunes = [
        'Your Mom', 'Duck!', 'How did you even get in this situation?',
        'How about NO?', 'Go ask someone who cares', 'The glass is half empty',
        'Don’t ask me!', '404 - Quote not found', 'Wouldn’t you like to know',
        'Don’t ask questions you dont want the answer to', 'Your guess is as good as mine',
        'I’m not nearly omnipotent enough for this', 'Search your feeling, you know it to be true',
        'Pay $1.99 for 5 more answers.', 'Answer vague keep rubbing me',
        'You ARE the father', 'Reply hazy, look it up of Google', 'Go ask a real person',
        'Lawyer up', 'Oh, its you again', 
        'No, but someone else is having it much better than you',
        'You’re joking, right?', 
        'We have been trying to contact you about your car’s extended warranty'
    ];

    var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    var parent = document.getElementById("fortune");
    parent.innerHTML = "\"" + fortune + "\"";
}
