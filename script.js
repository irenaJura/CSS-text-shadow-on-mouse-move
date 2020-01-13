const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100; // the shadow stretch distance

function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    // destructuring 
    const { offsetWidth: width, offsetHeight: height } = hero;
    // console.log(width, height);
    let { offsetX: x, offsetY: y } = e;
    // console.log(x, y);
    // if we are hovering above h1, we need to modify those values
    // this = thing that you listened on, e.target = thing that it's triggered on
    // this = hero, e.target = hero/h1
    if (this !== e.target) {
        x = x + e.target.offsetLeft; // x from h1 + from the left side to h1
        y = y + e.target.offsetTop; // y form h1 + from the top to h1
    }
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / width * walk) - (walk / 2));
    // console.log(x, y, width);
    
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
}

hero.addEventListener('mousemove', shadow);
