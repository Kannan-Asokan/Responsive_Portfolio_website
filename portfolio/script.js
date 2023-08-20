let sec1 = document.querySelectorAll('section');
let nav =  document.querySelectorAll('header nav a');

window.onscroll = () => {
    sec1.forEach(sec => {
        let top  = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            nav.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}; 

function email() {
    let email = document.getElementById('p');
    email.innerHTML = "Email-id: kannanhmk677@gmail.com"
}

let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


