gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from(".content", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut,
});

tl.from(
  ".stagger1",
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: Power4.easeOut,
    duration: 2,
  },
  "-=1.5"
);
tl.from(
  ".hero-design",
  {
    opacity: 0,
    y: 50,
    ease: Power4.easeOut,
    duration: 1,
  },
  "-=2"
);

tl.to(".scroll", { y: 15, repeat: -1, yoyo: true }, "-=1.2");

gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".transition3", {
  scrollTrigger: {
    trigger: ".transition3",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.6,
});

gsap.from(".letter-anim", {
  stagger: 0.2,
  scale: 0.1,
  duration: 2,
  ease: Back.easeOut.config(1.5),
});
