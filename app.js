const excuses = [
    "I’m mid-argument with my cat about who gets the Zoom background.",
    "My headphones filed for divorce after the last quick call.",
    "I’m training my goldfish to swim—catch me later!",
    "I’m on the run from my own to-do list—catch me later!",
    "I’d join, but my cat’s judging me too hard right now.",
    "I’m too deep in a snack heist to talk right now.",
    "I’m busy curating my playlist of fake static noises.",
    "I’m too busy perfecting my TikTok dance for the team meeting.",
    "My dog ate my headset, and now he’s barking at Teams.",
    "I’m in a heated debate with Siri about pineapple on pizza.",
    "My horoscope said ‘avoid quick chats’—blame the stars.",
    "My keyboard’s on strike, and I’m negotiating its demands.",
    "I’d join, but I’m mid-argument with my Wi-Fi about life choices.",
    "I’d join, but I’m teaching my goldfish to tap dance right now.",
    "Quick calls? Nope, I’m busy knitting socks for my pet rock.",
    "I’m mid-conversation with my fridge—it’s got cooler ideas.",
    "My rubber chicken just challenged me to a duel—can’t miss it.",
    "I’m too busy trying to convince my lamp it’s not a disco ball.",
    "Sorry, I’m mid-negotiation with my ceiling fan for world peace.",
    "I’m too busy teaching my pencil to whistle—priorities, man.",
    "I’m in the middle of a dramatic breakup with my inbox.",
    "My mirror just told me I’m too fabulous for quick chats.",
    "I'm trying to break my personal record for avoiding calls.",
    "My coffee is getting cold, and that’s a crisis I need to address immediately.",
    "I'm practicing my telepathy skills—can you hear me thinking 'no'?",
    "My plant is wilting, and it needs emotional support right now.",
    "I'm currently negotiating peace talks between my keyboard and mouse."
];

document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById("display");
    let displayValue = "Hate those quick calls?\n\nStep #1: Hit 'GENERATE AN EXCUSE'\nStep #2: Share it with your colleague";
    let generate = document.getElementById("generate");
    display.innerText = displayValue

    function getRndIndex() {
        const min = 0;
        const max = excuses.length;
        return Math.floor(Math.random() * (max - min) ) + min;
    };

    function displayExcuse() {
        displayValue = excuses[getRndIndex()];
        display.innerText = '"' + displayValue + '"';
    };

    generate.onclick = () => {
        displayExcuse()
    };

});