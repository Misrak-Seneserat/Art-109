function shake() {

    var ball = document.getElementById("ball")
    var messageText = document.getElementById("message")

    ball.classList.add("shake");
    setTimeout(function () { ball.classList.remove("shake"); }, 1500);
    setTimeout(function () { getFortune(); }, 1500);
}


function getFortune() {
    var fortunes = ['Your Mom', 'Duck!', 'How did you even get in this situation?', 'How about NO?',
        'Go ask someone who cares', 'The glass is half empty', 'Don’t ask me!', 'Just don’t bother', '404 - Quote not found',
        'Wouldn’t you like to know! ? ', 'Don’t ask questions you don’t want to know the answer to.', 'Your guess is as good as mine',
        'I’m not nearly omnipotent enough for this', 'Search your feelings.You know it to be true.', 'Pay $1.99 for 5 more answers.',
        'Answer vague keep rubbing me.', 'You ARE the father!', 'Absolutely, positively, unequivocally, definitely maybe.',
        'Reply hazy.Look it up on Google', 'Go ask a real person.', 'Lawyer Up', 'Oh, it’s you again',
        'No, but someone else is having it much better than you.', 'You’re joking, right ?',
        'We have been trying to contact you about your car’s extended warranty']

    var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    var parent = document.getElementById("fortune");
    var newMessage = document.createElement("div");
    newMessage.setAttribute('id', "message");
    newMessage.innerHTML = "\"" + fortune + "\"";
    parent.appendChild(newMessage); var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    var parent = document.getElementById("fortune");
    parent.innerHTML = "";

    var newMessage = document.createElement("div");
    newMessage.id = "message";
    newMessage.innerHTML = "\"" + fortune + "\"";

    parent.appendChild(newMessage);
}
