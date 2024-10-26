var tl = gsap.timeline({scrollTrigger:{
    trigger: ".about",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#can",{
    top: "95%",
    left: "12%",
    rotate: "30deg"
}, 'choclate')
tl.to("#choclate",{
    top:"160%",
    left: "23%"
}, 'choclate')
tl.to("#choclate2",{
    width: "25%",
    top:"160%",
    right: "10%",
    rotate: "-15deg"
}, 'choclate')
tl.to("#almod",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'choclate')
tl.to("#almod2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'choclate')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".product",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.to("#choclate",{
    width:"28%",
    left: "42%",
    top: "214%"
}, 'can')
tl2.to("#choclate2",{
    width:"15%",
    left: "35%",
    top: "270%"
}, 'can')
tl2.to("#can",{
    width:"30%",
    top: "218%",
    left: "35%",
    rotate: "0deg"
}, 'can')

