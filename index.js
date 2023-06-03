const firstMessage = [
    'What a beatiful day!',
     "You're about to have a great day!",
    'Ready to start a great day?',
    "You are looking great today!"
    ]
const inspMsg = [
    {
        msg: "It is often the small steps, not the giant leaps, that bring about the most lasting change.",
        author: "Queen Elizabeth II"
    },
    {
        msg: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela"
    },
    {
        msg: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
        author: "Amanda Gorman"
    },
    {
        msg: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington"
    },
    {
        msg: "I have learned not to allow rejection to move me.",
        author: "Cicely Tyson"
    }
] 

const messageGenerator = name => {
    let firstMessageIndex = Math.floor(Math.random() * firstMessage.length)
    let inspMsgIndex = Math.floor(Math.random() * inspMsg.length);
    return `Howdy ${name}! ${firstMessage[firstMessageIndex]} Today's quote is:  ${inspMsg[inspMsgIndex].msg} by ${inspMsg[inspMsgIndex].author}`;
} 

console.log(messageGenerator('Pooyan'))