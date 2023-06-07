// ----------navbar menu toggle--------------

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.x').style.visibility = 'visible';
    document.querySelector('.navbar ul').classList.toggle('active');

});
document.querySelector('.x').addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'block';
    document.querySelector('.x').style.visibility = 'hidden';
    document.querySelector('.navbar ul').classList.remove('active');
});
// -------type text-----------
let typed = new Typed('.type_text', {
    strings: ['Front-end Developer', 'Fresher','Fast Lerner'],
    typeSpeed: 50,
    backSpeed:100,
    backDelay:1000,
    fadeOutClass: 'typed-fade-out',
    loop:true
  });

