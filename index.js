// Write your code in this file!
function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
        return "This one is on me!";
    } else if (distance > 2500) {
        return "No can do.";
    } else if (distance > 2000) {
        return "I will gladly take your thirty bucks.";
    }
}

function ternaryCheckCity(city) {
    const message = city === "NYC" ? ("Ok, sounds good.") : ("No go.");
    return message;
}

function switchOnCharmFromTip(message) {

    switch(message) {
        case "generous":
            return "Thank you so much.";
            break;
        case "not as generous":
            return "Thank you."
            break;
        default:
            return "Bye.";
            break;
    }
}