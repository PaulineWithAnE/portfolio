gsap.from('.part', {opacity: 0, stagger: 0.5, duration: 1.5, x:-100, ease: 'back'})
gsap.to('.part', {opacity: 0, duration: 1, delay: 2, x:100})

gsap.from('.menu', {opacity: 0, y:30, delay:4.1})
gsap.from('.partHeader', {opacity: 0, stagger: 0.5, duration: 2, y:-50, ease: 'back.out(10)', delay: 2.9})
gsap.from('#time', {opacity: 0, y:30, delay:5})



let time = document.querySelector('#time');
function showTime() {
    time.innerHTML = `my local time ${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Jerusalem', hour: 'numeric', hour12: true, minute: 'numeric' })}`
    setTimeout('showTime()', 1000)
}
showTime();

gsap.to(".all", {delay: 4, onComplete: () => {
    showAll();
}});

gsap.registerPlugin(ScrollTrigger);

function showAll() {
    document.querySelector('.all').style.display = 'block';

    ScrollTrigger.matchMedia({ 

    "(max-width: 500px)": function () {
    
        let tlMenu = gsap.timeline({
            scrollTrigger: {
                trigger: '.mePic',
                start: 'bottom bottom',
                scrub: 1,
            },
        });
    
        tlMenu.to(".menu", {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            opacity: 1
        });

        let tlSquare = gsap.timeline({
            scrollTrigger: {
                trigger: '.mePic',
                start: 'top bottom',
                end: '-200px top',
                scrub: 1,
            },
        });
    
        tlSquare.from(".square", {
            opacity: 0,
            y: 0, 
            scale: 1.5,
        });
    
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.mePic',
                start: 'top bottom',
                end: '-200px top',
                scrub: 1,
            },
        });
        
        tl.from(".mePic", {
            rotation: 50,
            opacity: 0,
            y: 0, 
            x: 200,
        });

        let tlHR = gsap.timeline({
            scrollTrigger: {
                trigger: '.aboutText',
                start: 'bottom bottom',
                
                scrub: 1,
            },
        });
    
        tlHR.to(".aboutHr", {
            opacity: 1,
            width: '380px', 
        });

        let tlHeaderMenu = gsap.timeline({
            scrollTrigger: {
                trigger: '.about',
                start: 'bottom bottom',
                scrub: 1,
                
            },
        });
        
        tlHeaderMenu.from(".headerMenu", {
            opacity: 1,
            y: 300,
        });
    
        let tlBlogVert = gsap.timeline({
            scrollTrigger: {
                trigger: '.headerMenu',
                start: 'top bottom',
                scrub: 1,
                end: '-150px top',
            },
        });
        
        tlBlogVert.from(".blogVert", {
            opacity: 0,
            x: -200,
        });

        let tlPreviewVert = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogCoffee',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewVert.from(".previewVert", {
            opacity: 0,
        });
    
        let tlBlogCoffee = gsap.timeline({
            scrollTrigger: {
                trigger: '.headerMenu',
                start: 'top bottom',
                scrub: 1,
                end: '-150px top',
            },
        });
        
        tlBlogCoffee.from(".blogCoffee", {
            opacity: 0,
            x: 200,
        });

        let tlPreviewCoffee = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogWeather',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewCoffee.from(".previewCoffee", {
            opacity: 0,
        });
    
        let tlBlogWeather = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogCoffee',
                start: 'bottom bottom',
                end: '150px top',
                scrub: 1,
            },
        });
        
        tlBlogWeather.from(".blogWeather", {
            opacity: 0,
            x: -200,
        });

        let tlPreviewWeather = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogAda',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewWeather.from(".previewWeather", {
            opacity: 0,
        });
    
        let tlBlogAda = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogCoffee',
                start: 'bottom bottom',
                end: '150px top',
                scrub: 1,
            },
        });
        
        tlBlogAda.from(".blogAda", {
            opacity: 0,
            x: 200,
        });

        let tlPreviewAda = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogSanta',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewAda.from(".previewAda", {
            opacity: 0,
        });
    
        let tlBlogSanta = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogAda',
                start: 'bottom bottom',
                end: '150px top',
                scrub: 1,
            },
        });
        
        tlBlogSanta.from(".blogSanta", {
            opacity: 0,
            x: -200,
        });

        let tlPreviewSanta = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogBill',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewSanta.from(".previewSanta", {
            opacity: 0,
        });
    
        let tlBlogBill = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogAda',
                start: 'bottom bottom',
                end: '150px top',
                scrub: 1,
            },
        });
        
        tlBlogBill.from(".blogBill", {
            opacity: 0,
            x: 200,
        });

        let tlPreviewBill = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogQuiz',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewBill.from(".previewBill", {
            opacity: 0,
        });
    
        let tlBlogQuiz = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogSanta',
                start: 'bottom bottom',
                end: '150px top',
                scrub: 1,
            },
        });
        
        tlBlogQuiz.from(".blogQuiz", {
            opacity: 0,
            x: -200,
        });

        let tlPreviewQuiz = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogMovie',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewQuiz.from(".previewQuiz", {
            opacity: 0,
        });
    
        let tlBlogMovie = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogQuiz',
                start: 'bottom bottom',
                end: '150px top',
                scrub: 1,
            },
        });
        
        tlBlogMovie.from(".blogMovie", {
            opacity: 0,
            x: 200,
        });

        let tlPreviewMovie = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogMovie',
                start: 'bottom bottom',
                scrub: 1,
            },
        });
        
        tlPreviewMovie.from(".previewMovie", {
            opacity: 0,
        });
    
        let tlHeaderFooter = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogQuiz',
                start: 'bottom bottom',
                scrub: 1,
            },
        });
        
        tlHeaderFooter.from(".footerHeader", {
            opacity: 1,
            y:200
        });

    },

    "(min-width: 501px) and (max-width: 800px)": function () {
    
        let tlMenu = gsap.timeline({
            scrollTrigger: {
                trigger: '.mePic',
                start: 'bottom bottom',
                scrub: 1,
            },
        });
    
        tlMenu.to(".menu", {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            opacity: 1
        });

        let tlSquare = gsap.timeline({
            scrollTrigger: {
                trigger: '.mePic',
                start: 'top bottom',
                end: '-200px top',
                scrub: 1,
            },
        });
    
        tlSquare.from(".square", {
            opacity: 0,
            y: 0, 
            scale: 1.5,
        });
    
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.mePic',
                start: 'top bottom',
                end: '-200px top',
                scrub: 1,
            },
        });
        
        tl.from(".mePic", {
            rotation: 50,
            opacity: 0,
            y: 0, 
            x: 200,
        });

        let tlHR = gsap.timeline({
            scrollTrigger: {
                trigger: '.aboutText',
                start: 'bottom bottom',
                
                scrub: 1,
            },
        });
    
        tlHR.to(".aboutHr", {
            opacity: 1,
            width: '380px', 
        });

        let tlHeaderMenu = gsap.timeline({
            scrollTrigger: {
                trigger: '.about',
                start: 'bottom bottom',
                scrub: 1,
                
            },
        });
        
        tlHeaderMenu.from(".headerMenu", {
            opacity: 1,
            y: 300,
        });
    
        let tlBlogVert = gsap.timeline({
            scrollTrigger: {
                trigger: '.headerMenu',
                start: 'top bottom',
                scrub: 1,
                end: '-150px top',
            },
        });
        
        tlBlogVert.from(".blogVert", {
            opacity: 0,
            x: -200,
        });

        let tlPreviewVert = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogWeather',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewVert.from(".previewVert", {
            opacity: 0,
        });
    
        let tlBlogCoffee = gsap.timeline({
            scrollTrigger: {
                trigger: '.headerMenu',
                start: 'top bottom',
                scrub: 1,
                end: '-150px top',
            },
        });
        
        tlBlogCoffee.from(".blogCoffee", {
            opacity: 0,
            x: 200,
        });

        let tlPreviewCoffee = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogWeather',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewCoffee.from(".previewCoffee", {
            opacity: 0,
        });
    
        let tlBlogWeather = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogCoffee',
                start: 'bottom bottom',
                end: '150px top',
                scrub: 1,
            },
        });
        
        tlBlogWeather.from(".blogWeather", {
            opacity: 0,
            x: -200,
        });

        let tlPreviewWeather = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogSanta',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewWeather.from(".previewWeather", {
            opacity: 0,
        });
    
        let tlBlogAda = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogCoffee',
                start: 'bottom bottom',
                end: '150px top',
                scrub: 1,
            },
        });
        
        tlBlogAda.from(".blogAda", {
            opacity: 0,
            x: 200,
        });

        let tlPreviewAda = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogSanta',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewAda.from(".previewAda", {
            opacity: 0,
        });
    
        let tlBlogSanta = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogAda',
                start: 'bottom bottom',
                end: '150px top',
                scrub: 1,
            },
        });
        
        tlBlogSanta.from(".blogSanta", {
            opacity: 0,
            x: -200,
        });

        let tlPreviewSanta = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogQuiz',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewSanta.from(".previewSanta", {
            opacity: 0,
        });
    
        let tlBlogBill = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogAda',
                start: 'bottom bottom',
                end: '150px top',
                scrub: 1,
            },
        });
        
        tlBlogBill.from(".blogBill", {
            opacity: 0,
            x: 200,
        });

        let tlPreviewBill = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogQuiz',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewBill.from(".previewBill", {
            opacity: 0,
        });
    
        let tlBlogQuiz = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogSanta',
                start: 'bottom bottom',
                end: '150px top',
                scrub: 1,
            },
        });
        
        tlBlogQuiz.from(".blogQuiz", {
            opacity: 0,
            x: -200,
        });

        let tlPreviewQuiz = gsap.timeline({
            scrollTrigger: {
                trigger: '.footerHeader',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewQuiz.from(".previewQuiz", {
            opacity: 0,
        });
    
        let tlBlogMovie = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogSanta',
                start: 'bottom bottom',
                end: '150px top',
                scrub: 1,
            },
        });
        
        tlBlogMovie.from(".blogMovie", {
            opacity: 0,
            x: 200,
        });

        let tlPreviewMovie = gsap.timeline({
            scrollTrigger: {
                trigger: '.footerHeader',
                start: 'top bottom',
                scrub: 1,
            },
        });
        
        tlPreviewMovie.from(".previewMovie", {
            opacity: 0,
        });
    
        let tlHeaderFooter = gsap.timeline({
            scrollTrigger: {
                trigger: '.blogQuiz',
                start: 'bottom bottom',
                end: '150px top',
                scrub: 1,
            },
        });
        
        tlHeaderFooter.from(".footerHeader", {
            opacity: 1,
            y:70
        });

    },

    "(min-width: 960px)": function () {

    let tlSquare = gsap.timeline({
        scrollTrigger: {
            trigger: '.mePic',
            start: 'top bottom',
            end: '-200px top',
            scrub: 1,
        },
    });

    tlSquare.from(".square", {
        opacity: 0,
        y: 50, 
        scale: -2,
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.mePic',
            start: 'top bottom',
            end: '-200px top',
            scrub: 1,
           
        },
    });
    
    tl.from(".mePic", {
        rotation: 50,
        opacity: 0,
        y: 50, 
        x: 700,
    });
    
    let tlHR = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'bottom bottom',
            end: '-200px top',
            scrub: 1,
        },
    });

    tlHR.to(".aboutHr", {
        opacity: 1,
        width: '450px', 
    });
    

    let tlHeaderMenu = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'bottom bottom',
            scrub: 1,
            
        },
    });
    
    tlHeaderMenu.from(".headerMenu", {
        opacity: 1,
        y: 300,
    });

    let tlBlogVert = gsap.timeline({
        scrollTrigger: {
            trigger: '.headerMenu',
            start: 'top bottom',
            scrub: 1,
            end: '-150px top',
        },
    });
    
    tlBlogVert.from(".blogVert", {
        opacity: 0,
        x: -200,
    });

    let tlBlogCoffee = gsap.timeline({
        scrollTrigger: {
            trigger: '.headerMenu',
            start: 'top bottom',
            scrub: 1,
            end: '-150px top',
        },
    });
    
    tlBlogCoffee.from(".blogCoffee", {
        opacity: 0,
        x: 200,
    });

    let tlBlogWeather = gsap.timeline({
        scrollTrigger: {
            trigger: '.blogCoffee',
            start: 'bottom bottom',
            end: '150px top',
            scrub: 1,
        },
    });
    
    tlBlogWeather.from(".blogWeather", {
        opacity: 0,
        x: -200,
    });

    let tlBlogAda = gsap.timeline({
        scrollTrigger: {
            trigger: '.blogCoffee',
            start: 'bottom bottom',
            end: '150px top',
            scrub: 1,
        },
    });
    
    tlBlogAda.from(".blogAda", {
        opacity: 0,
        x: 200,
    });

    let tlBlogSanta = gsap.timeline({
        scrollTrigger: {
            trigger: '.blogAda',
            start: 'bottom bottom',
            end: '150px top',
            scrub: 1,
        },
    });
    
    tlBlogSanta.from(".blogSanta", {
        opacity: 0,
        x: 50,
    });

    let tlBlogBill = gsap.timeline({
        scrollTrigger: {
            trigger: '.blogAda',
            start: 'bottom bottom',
            end: '150px top',
            scrub: 1,
        },
    });
    
    tlBlogBill.from(".blogBill", {
        opacity: 0,
        x: -50,
    });

    let tlBlogQuiz = gsap.timeline({
        scrollTrigger: {
            trigger: '.blogSanta',
            start: 'bottom bottom',
            end: '150px top',
            scrub: 1,
        },
    });
    
    tlBlogQuiz.from(".blogQuiz", {
        opacity: 0,
        x: 150,
    });

    let tlBlogMovie = gsap.timeline({
        scrollTrigger: {
            trigger: '.blogSanta',
            start: 'bottom bottom',
            end: '150px top',
            scrub: 1,
        },
    });
    
    tlBlogMovie.from(".blogMovie", {
        opacity: 0,
        x: -150,
    });

    let tlHeaderFooter = gsap.timeline({
        scrollTrigger: {
            trigger: '.blogQuiz',
            start: 'bottom bottom',
            scrub: 1,
        },
    });
    
    tlHeaderFooter.from(".footerHeader", {
        opacity: 1,
        y:200
    });

    }

    });
}


const icons = document.querySelector('.icons');
const tlIcons = new TimelineMax({
	paused: true
})
tlIcons.from('.item', 1, {opacity: 0, y:-30, ease: 'bounce', stagger: 0.5, delay: 0.2})

window.addEventListener('scroll', function(){
	const icons_position = icons.offsetTop - window.innerHeight + icons.offsetHeight / 2;
	let scrolled = document.documentElement.scrollTop;
	if(icons_position <= scrolled) {
		tlIcons.play();
	}
})



const body = document.querySelector('body');
const pictureVert = document.querySelector('.vertPic');
pictureVert.addEventListener('mousemove', showGif)
pictureVert.addEventListener('mouseleave', hideGif)
const gifVert = document.querySelector('.vert');

const spanMenu = document.querySelector('.spanMenu');
const h2 = document.querySelector('h2');


function showGif(e) {
    let X = e.pageX;
    let Y = e.pageY;
	let top = Y - 160  + 'px';
	let left = X  + 30 + 'px';
    if (window.innerWidth > 800) { 
    gifVert.style.display = 'inline-flex';
    gifVert.style.top = top;
    gifVert.style.left = left;
    body.style.background = '#bfc7af';
    spanMenu.classList.add('spanMenuChanged');
    h2.classList.add('h2Changed');
    pictureVert.classList.add('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
    }
}

function hideGif() {
    gifVert.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuChanged');
    h2.classList.remove('h2Changed');
    pictureVert.classList.remove('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
}

document.querySelector('.previewVert').addEventListener('click', (e) => {
        
    let X = e.pageX;
        let Y = e.pageY;
        let top = Y - 220  + 'px';
        let left = X - 30 + 'px';
        gifVert.style.display = 'inline-flex';
        gifVert.style.top = top;
        gifVert.style.left = left;
        body.style.background = '#bfc7af';
        spanMenu.classList.add('spanMenuChanged');
        h2.classList.add('h2Changed');
        pictureVert.classList.add('picg');
        document.querySelectorAll('.pic').forEach(element => {
            element.classList.add('borderColor')
        });
})
    
document.querySelector('.previewVert').addEventListener('mouseleave', () => {
        
    gifVert.style.display = 'none';
        body.style.background = 'white';
        spanMenu.classList.remove('spanMenuChanged');
        h2.classList.remove('h2Changed');
        pictureVert.classList.remove('picg');
        document.querySelectorAll('.pic').forEach(element => {
            element.classList.remove('borderColor')
        });
})


const pictureCoffee = document.querySelector('.blogCoffee');
pictureCoffee.addEventListener('mousemove', showGifCoffee)
pictureCoffee.addEventListener('mouseleave', hideGifCoffee)
const gifCoffee = document.querySelector('.coffee');

function showGifCoffee(e) {
    let X = e.pageX;
    let Y = e.pageY;
	let top = Y - 160  + 'px';
	let left = X  + 30 + 'px';
    if (window.innerWidth > 800) { 
    gifCoffee.style.display = 'inline-flex';
    gifCoffee.style.top = top;
    gifCoffee.style.left = left;
    body.style.background = '#fcf7eb';
    spanMenu.classList.add('spanMenuCoffee');
    h2.classList.add('h2Changed');
    document.querySelector('.coffeePic').classList.add('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
    }
}

function hideGifCoffee() {
    gifCoffee.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuCoffee');
    h2.classList.remove('h2Changed');
    document.querySelector('.coffeePic').classList.remove('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
}

document.querySelector('.previewCoffee').addEventListener('click', (e) => {
        
    let X = e.pageX;
    let Y = e.pageY;
    let top = Y - 220  + 'px';
    let left = X - 30 + 'px';
    gifCoffee.style.display = 'inline-flex';
    gifCoffee.style.top = top;
    gifCoffee.style.left = left;
    body.style.background = '#fcf7eb';
    spanMenu.classList.add('spanMenuCoffee');
    h2.classList.add('h2Changed');
    document.querySelector('.coffeePic').classList.add('picg');
    document.querySelector('.blogCoffee .text').style.display = 'none'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
})
    
document.querySelector('.previewCoffee').addEventListener('mouseleave', () => {
        
    gifCoffee.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuCoffee');
    h2.classList.remove('h2Changed');
    document.querySelector('.coffeePic').classList.remove('picg');
    document.querySelector('.blogCoffee .text').style.display = 'inline-flex'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
})

const pictureWeather = document.querySelector('.blogWeather');
pictureWeather.addEventListener('mousemove', showGifWeather)
pictureWeather.addEventListener('mouseleave', hideGifWeather)
const gifWeather = document.querySelector('.weather');

function showGifWeather(e) {
    let X = e.pageX;
    let Y = e.pageY;
	let top = Y - 160  + 'px';
	let left = X  + 30 + 'px';
    if (window.innerWidth > 800) { 
    gifWeather.style.display = 'inline-flex';
    gifWeather.style.top = top;
    gifWeather.style.left = left;
    body.style.background = '#E6E6FA';
    spanMenu.classList.add('spanMenuWeather');
    h2.classList.add('h2Weather');
    document.querySelector('.weatherPic').classList.add('picg');
    document.querySelectorAll('.pic').forEach(element => {
            element.classList.add('borderColor')
        });
    }
}

function hideGifWeather() {
    gifWeather.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuWeather');
    h2.classList.remove('h2Weather');
    document.querySelector('.weatherPic').classList.remove('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
}

document.querySelector('.previewWeather').addEventListener('click', (e) => {
        
    let X = e.pageX;
    let Y = e.pageY;
    let top = Y - 220  + 'px';
    let left = X - 30 + 'px';
    gifWeather.style.display = 'inline-flex';
    gifWeather.style.top = top;
    gifWeather.style.left = left;
    body.style.background = '#E6E6FA';
    spanMenu.classList.add('spanMenuWeather');
    h2.classList.add('h2Weather');
    document.querySelector('.weatherPic').classList.add('picg');
    document.querySelector('.blogWeather .text').style.display = 'none'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
})
    
document.querySelector('.previewWeather').addEventListener('mouseleave', () => {
        
    gifWeather.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuWeather');
    h2.classList.remove('h2Weather');
    document.querySelector('.weatherPic').classList.remove('picg');
    document.querySelector('.blogWeather .text').style.display = 'inline-flex'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
})

const pictureAda = document.querySelector('.blogAda');
pictureAda.addEventListener('mousemove', showGifAda)
pictureAda.addEventListener('mouseleave', hideGifAda)
const gifAda = document.querySelector('.adaHanina');

function showGifAda(e) {
    let X = e.pageX;
    let Y = e.pageY;
	let top = Y - 160  + 'px';
	let left = X  + 30 + 'px';
    gifAda.style.display = 'inline-flex';
    if (window.innerWidth > 800) { 
    gifAda.style.top = top;
    gifAda.style.left = left;
    body.style.background = '#EADBDB';
    spanMenu.classList.add('spanMenuAda');
    h2.classList.add('h2Changed');
    document.querySelector('.adaPic').classList.add('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
    }
}

function hideGifAda() {
    gifAda.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuAda');
    h2.classList.remove('h2Changed');
    document.querySelector('.adaPic').classList.remove('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
}

document.querySelector('.previewAda').addEventListener('click', (e) => {
        
    let X = e.pageX;
    let Y = e.pageY;
    let top = Y - 220  + 'px';
    let left = X - 30 + 'px';
    gifAda.style.display = 'inline-flex';
    gifAda.style.top = top;
    gifAda.style.left = left;
    body.style.background = '#EADBDB';
    spanMenu.classList.add('spanMenuAda');
    h2.classList.add('h2Weather');
    document.querySelector('.adaPic').classList.add('picg');
    document.querySelector('.blogAda .text').style.display = 'none'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
})
    
document.querySelector('.previewAda').addEventListener('mouseleave', () => {
        
    gifAda.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuAda');
    h2.classList.remove('h2Weather');
    document.querySelector('.adaPic').classList.remove('picg');
    document.querySelector('.blogAda .text').style.display = 'inline-flex'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
})

const pictureSanta = document.querySelector('.blogSanta');
pictureSanta.addEventListener('mousemove', showGifSanta)
pictureSanta.addEventListener('mouseleave', hideGifSanta)
const gifSanta = document.querySelector('.santa');

function showGifSanta(e) {
    let X = e.pageX;
    let Y = e.pageY;
	let top = Y - 160  + 'px';
	let left = X  + 30 + 'px';
    if (window.innerWidth > 800) { 
    gifSanta.style.display = 'inline-flex';
    gifSanta.style.top = top;
    gifSanta.style.left = left;
    body.style.background = '#8daeb1';
    spanMenu.classList.add('spanMenuSanta');
    h2.classList.add('h2Changed');
    document.querySelector('.santaPic').classList.add('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
    }
}

function hideGifSanta() {
    gifSanta.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuSanta');
    h2.classList.remove('h2Changed');
    document.querySelector('.santaPic').classList.remove('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
}

document.querySelector('.previewSanta').addEventListener('click', (e) => {
        
    let X = e.pageX;
    let Y = e.pageY;
    let top = Y - 220  + 'px';
    let left = X - 30 + 'px';
    gifSanta.style.display = 'inline-flex';
    gifSanta.style.top = top;
    gifSanta.style.left = left;
    body.style.background = '#8daeb1';
    spanMenu.classList.add('spanMenuSanta');
    h2.classList.add('h2Changed');
    document.querySelector('.santaPic').classList.add('picg');
    document.querySelector('.blogSanta .text').style.display = 'none'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
})
    
document.querySelector('.previewSanta').addEventListener('mouseleave', () => {
        
    gifSanta.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuSanta');
    h2.classList.remove('h2Changed');
    document.querySelector('.santaPic').classList.remove('picg');
    document.querySelector('.blogSanta .text').style.display = 'inline-flex'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
})

const pictureBill = document.querySelector('.blogBill');
pictureBill.addEventListener('mousemove', showGifBill)
pictureBill.addEventListener('mouseleave', hideGifBill)
const gifBill = document.querySelector('.bill');

function showGifBill(e) {
    let X = e.pageX;
    let Y = e.pageY;
	let top = Y - 160  + 'px';
	let left = X  + 30 + 'px';
    if (window.innerWidth > 800) { 
    gifBill.style.display = 'inline-flex';
    gifBill.style.top = top;
    gifBill.style.left = left;
    body.style.background = '#EFDECD';
    spanMenu.classList.add('spanMenuBill');
    document.querySelector('.billPic').classList.add('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
    }
}

function hideGifBill() {
    gifBill.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuBill');
    document.querySelector('.billPic').classList.remove('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
}

document.querySelector('.previewBill').addEventListener('click', (e) => {
        
    let X = e.pageX;
    let Y = e.pageY;
    let top = Y - 220  + 'px';
    let left = X - 30 + 'px';
    gifBill.style.display = 'inline-flex';
    gifBill.style.top = top;
    gifBill.style.left = left;
    body.style.background = '#EFDECD';
    spanMenu.classList.add('spanMenuBill');
    document.querySelector('.billPic').classList.add('picg');
    document.querySelector('.blogBill .text').style.display = 'none'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
})
    
document.querySelector('.previewBill').addEventListener('mouseleave', () => {
        
    gifBill.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuBill');
    document.querySelector('.billPic').classList.remove('picg');
    document.querySelector('.blogBill .text').style.display = 'inline-flex'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
})

const pictureQuiz = document.querySelector('.blogQuiz');
pictureQuiz.addEventListener('mousemove', showGifQuiz)
pictureQuiz.addEventListener('mouseleave', hideGifQuiz)
const gifQuiz = document.querySelector('.quiz');

function showGifQuiz(e) {
    let X = e.pageX;
    let Y = e.pageY;
	let top = Y - 160  + 'px';
	let left = X  + 30 + 'px';
    if (window.innerWidth > 800) { 
    gifQuiz.style.display = 'inline-flex';
    gifQuiz.style.top = top;
    gifQuiz.style.left = left;
    body.style.background = '#cfe2ff';
    spanMenu.classList.add('spanMenuQuiz');
    h2.classList.add('h2Weather');
    document.querySelector('.quizPic').classList.add('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
    }
}

function hideGifQuiz() {
    gifQuiz.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuQuiz');
    h2.classList.remove('h2Weather');
    document.querySelector('.quizPic').classList.remove('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
}

document.querySelector('.previewQuiz').addEventListener('click', (e) => {
        
    let X = e.pageX;
    let Y = e.pageY;
    let top = Y - 220  + 'px';
    let left = X - 30 + 'px';
    gifQuiz.style.display = 'inline-flex';
    gifQuiz.style.top = top;
    gifQuiz.style.left = left;
    body.style.background = '#cfe2ff';
    spanMenu.classList.add('spanMenuQuiz');
    h2.classList.add('h2Weather');
    document.querySelector('.quizPic').classList.add('picg');
    document.querySelector('.blogQuiz .text').style.display = 'none'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
})
    
document.querySelector('.previewQuiz').addEventListener('mouseleave', () => {
        
    gifQuiz.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuQuiz');
    h2.classList.remove('h2Weather');
    document.querySelector('.quizPic').classList.remove('picg');
    document.querySelector('.blogQuiz .text').style.display = 'inline-flex'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
})

const pictureMovie = document.querySelector('.blogMovie');
pictureMovie.addEventListener('mousemove', showGifMovie)
pictureMovie.addEventListener('mouseleave', hideGifMovie)
const gifMovie = document.querySelector('.search');

function showGifMovie(e) {
    let X = e.pageX;
    let Y = e.pageY;
	let top = Y - 160  + 'px';
	let left = X  + 30 + 'px';
    if (window.innerWidth > 800) { 
    gifMovie.style.display = 'inline-flex';
    gifMovie.style.top = top;
    gifMovie.style.left = left;
    body.style.background = '#FADADD';
    spanMenu.classList.add('spanMenuMovie');
    document.querySelector('.moviePic').classList.add('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
    }   
}

function hideGifMovie() {
    gifMovie.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuMovie');
    document.querySelector('.moviePic').classList.remove('picg');
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
}

document.querySelector('.previewMovie').addEventListener('click', (e) => {
        
    let X = e.pageX;
    let Y = e.pageY;
    let top = Y - 220  + 'px';
    let left = X - 30 + 'px';
    gifMovie.style.display = 'inline-flex';
    gifMovie.style.top = top;
    gifMovie.style.left = left;
    body.style.background = '#FADADD';
    spanMenu.classList.add('spanMenuMovie');
    document.querySelector('.moviePic').classList.add('picg');
    document.querySelector('.blogMovie .text').style.display = 'none'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.add('borderColor')
    });
})
    
document.querySelector('.previewMovie').addEventListener('mouseleave', () => {
        
    gifMovie.style.display = 'none';
    body.style.background = 'white';
    spanMenu.classList.remove('spanMenuMovie');
    document.querySelector('.moviePic').classList.remove('picg');
    document.querySelector('.blogMovie .text').style.display = 'inline-flex'
    document.querySelectorAll('.pic').forEach(element => {
        element.classList.remove('borderColor')
    });
})

let items = document.querySelectorAll(".item");

items.forEach(function(i) { 

let animation = gsap.to(i, {
  paused: true,
  y: -15
});

i.addEventListener("mouseenter", () => animation.play())
i.addEventListener("mouseleave", () => animation.reverse())   
})