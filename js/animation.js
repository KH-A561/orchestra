const tl = gsap.timeline(); 
tl.to(".box", { duration: 1, x: 100 })
  .to(".box", { duration: 1, backgroundColor: "#f38630" }, "+=0.5") 
  .to(".box", { duration: 1, x: 0, rotation: -360 }, "+=0.5")