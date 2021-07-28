const sr = ScrollReveal();
sr.reveal('#service1', {
    distance: '10px',
    duration: 1000,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    mobile: false,
    reset: false,
})
sr.reveal('#service2', {
    distance: '10px',
    duration: 2000,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    mobile: false,
    reset: false,
})
sr.reveal('#service3', {
    distance: '10px',
    duration: 3000,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    mobile: false,
    reset: false,
})
sr.reveal('#service4', {
    distance: '10px',
    duration: 4000,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    mobile: false,
    reset: false,
})

sr.reveal('.button', {
    duration: 2000,
    scale: 0.5,
    rotate: {x:30, y:40, z:20},
    reset: true,
})
sr.reveal('.text', {
    duration: 3000,
    distance: '100px',
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    mobile: true,
    reset: true,
})


