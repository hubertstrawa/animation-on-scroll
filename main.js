const flightPath = {
    curviness: 1.30,
    autoRotate: true,
    values: [
        {x: 100, y: -20}, {x: 300, y: 10}, {x: 500, y: 100},
        {x: 750, y: -100}, {x: 350, y: -50}, {x: 600, y: 100},
        {x: 800, y: 0}, {x: window.innerWidth, y: -250}
    ]
};

const textPath = {
    curviness: 0,
    autoRotate: false,
    values: [
        {x: 0, y: 50}, {x: 0, y: 175},
        
    ]
};

const tween = new TimelineLite();
const next = new TimelineLite();


tween.add(
    TweenLite.to('.plane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

next.add(
    TweenLite.to('.quote', 1, {
        bezier: textPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 1500,
    triggerHook: 0
})
.setTween(tween)
.setPin('.animation')
.addIndicators()
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.animation2',
    duration: 400,
    triggerHook: 0
})
.setTween(next)
.setPin('.animation2')
.addIndicators()
.addTo(controller);