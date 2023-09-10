const cursor = document.querySelector('.cursor')
const blur = document.querySelector('.cursor-blur')
document.addEventListener('mousemove', (val) => {
    cursor.style.transform = `translate(${val.clientX}px,${val.clientY}px)`
    blur.style.top = val.y - 150 + 'px'
    blur.style.left = val.x - 150 + 'px'
})

gsap.to('#nav', {
    backgroundColor: '#000',
    duration: 0.5,
    height: '110px',
    scrollTrigger: {
        trigger: '#nav',
        scroller: 'body',
        // markers: true,
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1,
    },
})

gsap.to('.main', {
    backgroundColor: '#000',
    scrollTrigger: {
        trigger: '.main',
        scroller: 'body',
        start: 'top -25%',
        end: 'top -70%',
        scrub: 2,
    },
})

// gsap.from('.about img', '.aboutUs', {
//     y: 90,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.4,
//     scrollTrigger: {
//         trigger: '.about',
//         scroller: 'body',
//         markers: true,
//         start: 'top 60%',
//         end: 'top 58%',
//         scrub: 3,
//     },
// })

gsap.from('.cards', {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.cards',
        scroller: 'body',
        // markers: true,
        start: 'top 70%',
        end: 'top 65%',
        scrub: 1,
    },
})

gsap.from('#colon1', {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: '#colon1',
        scroller: 'body',
        // markers: true,
        start: 'top 55%',
        end: '45%',
        scrub: 4,
    },
})

gsap.from('#colon2', {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: '#colon1',
        scroller: 'body',
        // markers: true,
        start: 'top 55%',
        end: '45%',
        scrub: 4,
    },
})
