const present = document.querySelector('.present');
const body = document.querySelector('body');
const presentTop = document.querySelector('.present_top');
const presentBottom = document.querySelector('.present_bottom');
const ribbonTop = document.querySelector('.ribbon_top');
const ribbonBottom = document.querySelector('.ribbon_bottom');
present.addEventListener('click', () =>{

    present.className = 'present2';

    const lightEffect = document.createElement('span');
    lightEffect.className = 'light_effect';
    present.append(lightEffect);

    setTimeout(() => {
        const clickMeH2 = document.querySelector('.click_me');
        clickMeH2.style.color = 'rgba(255, 255, 255, 0)';

        lightEffect.className = 'light_effect2';

        presentTop.className = 'present_top2';
        presentBottom.className = 'present_bottom2';
        ribbonTop.className = 'ribbon_top2';
        ribbonBottom.className = 'ribbon_bottom2';

        const textBox = document.createElement('h1');
        textBox.innerHTML = "З Днем Батька! Бажаю тобі сил, здоров'я, побільше відпочинку, багато грошей та щастя! Сподіваюсь, що скоро побачимось)";
        textBox.className = 'present_text';
        body.append(textBox);

        const emoji = document.createElement('span');
        emoji.innerHTML = '💪';
        emoji.className = 'emoji_class';
        body.append(emoji);
    }, 500);
    
    const presentBody = document.querySelector('.body_present');

    setTimeout(() => {
        presentBody.remove();
    }, 3000);
});

function getCR(element) {
    const matrix = window.getComputedStyle(element).transform;
    const array = matrix.split(',');
    const y = array[array.length - 1];
    const x = array[array.length - 2];
    const numericY = parseFloat(y);
    const numericX = parseFloat(x);

    return {x: numericX, y: numericY};
}

// const emojis = ['💪', '🎁', '🎉',];

// function getRandomEmoji() {
//     const randomIndex = Math.floor(Math.random() * emojis.length); 
//     const span = document.createElement('span');
//     span.innerHTML = emojis[randomIndex]; 
//     span.className = 'emojiStyle';
//     body.appendChild(span);
//     const emjcord = getCR(span);
//     fullEmj(emjcord);
// }



// function fullEmj(emjcord) {
//     const newY = emjcord.y + 1;
//     fullEmj();
// }

// getRandomEmoji();

