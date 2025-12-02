function shake() {

    var ball = document.getElementById("ball");
    ball.classList.add("shake");

    setTimeout(function () {
        ball.classList.remove("shake");
        getFortune();
        document.getElementById("question").value = "";
    }, 1500);
}

function getFortune() {
    var fortunes = [
        'Your Mom',
        'Duck!',
        'How did you even get in this situation?',
        'How about NO?',
        'Go ask someone who cares.',
        'Depends on your state of mind.',
        'Don’t ask me!',
        'Just don’t bother.',
        '404 - ERROR',
        'Budget Denied',
        'You Wish!',
        'Out of office',
        'Discuss over drinks?',
        'Get a grip!',
        'If thats what you want',
        'More coffee needed',
        'Wouldn’t you like to know!',
        'Don’t ask questions you don’t want to know the answer to.',
        'Your guess is as good as mine',
        'I’m not nearly omnipotent enough for this.',
        'Search your feelings. You know it to be true.',
        'Pay $1.99 for 5 more answers.',
        'Answer vague, keep rubbing me.',
        'You ARE the father!',
        'Absolutely, positively, unequivocally, definitely maybe.',
        'Reply hazy. Try Google?',
        'Go ask a real person.',
        'Lawyer Up', 'Oh, it’s you again...',
        'No, but someone else is having it much better than you.',
        'You’re joking, right?',
        'We have been trying to contact you about your car’s extended warranty!'
];
    var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];


    var whiteSurface = document.querySelector(".whitesurface");
    whiteSurface.innerHTML = `<p class="ball-text" style="font-size:20px; padding:10px;">${fortune}</p>`;

}