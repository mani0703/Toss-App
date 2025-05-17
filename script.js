let angle = 0;

function toss() {
    const coin = document.querySelector('.inner');
    coin.classList.add('animation');
    setTimeout(() => {
        coin.classList.remove('animation');
        angle += 180;
        if (Math.random() < 0.5) {
            coin.style.transition = 'transform 1s'
            coin.style.transform = `rotateX(${angle + 0}deg)`
        }
        else {
            coin.style.transition = 'transform 1s'
            coin.style.transform = `rotateX(${angle + 180}deg)`
        }

    }, 2000)
}