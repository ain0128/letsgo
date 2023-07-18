var tl = gsap.timeline({
    repeat: -1
})




tl.to(".imagecontainer",{
    ease: Expo.easeInout,
    width: "100%",
    duration: 3,
    stagger: 3
},'a')

.to(".text h1",{
    ease: Expo.easeInOut,
    stagger:3,
    top:0
},'a')


.to(".text h1",{
    delay: 3,
    ease: Expo.easeInOut,
    stagger:3,
    top: "-100%"
},'a')