console.clear();

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ease: "none"});



const pulses = gsap.timeline({
  defaults: {
    duration: 0.05,
    autoAlpha: 1,
    scale: 2,
    transformOrigin: 'center',
    ease: "elastic(2.5, 1)"
  }})
.to(".ball02, .text01", {}, 0.2)
.to(".ball04, .text03", {}, 0.46)
.to(".ball05, .text04", {}, 0.60)
.to(".ball06, .text05", {}, 0.17)

const main = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top top",
    end: "bottom center",
    pin: "#svg",
    pinSpacing: false,
  }})
.to(".ball01", {duration: 0.01, autoAlpha: 1})
.from(".theLine", {drawSVG: "0 live" }, 0)
.to(".ball01", {motionPath: {
  path: ".theLine",
  align:".theLine",
  alignOrigin: [0.5, 0.5],
}}, 0)
.add(pulses, 0);
