// https://harnishdesign.net/demo/react/simone/demo/?classicHeader=true&darkTheme=false&bgImage=true

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.x').style.visibility = 'visible';
    document.querySelector('.navbar ul').classList.toggle('active');

})
document.querySelector('.x').addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'block';
    document.querySelector('.x').style.visibility = 'hidden';
    document.querySelector('.navbar ul').classList.remove('active');

})

