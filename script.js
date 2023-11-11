

let tl = gsap.timeline()


gsap.from("#navbar",{
    y:-100,
     duration:0.5,
     delay:0.5,
     ease: "bounce.out",
     backgroundColor:"transparent",
     scrollTrigger:{
         trigger:"#navbar",
         scroller:"body",

     }
 })

 gsap.from(" #tagline1",{
    autoAlpha: 0,
    x:-200,
     scale:0.1,
     duration:0.5,
     delay:1,
     overflow:"hidden",
     stagger:1,
     scrollTrigger:{
         trigger:"#tagline1",
         scroller:"body",
         

     }
 })

 gsap.from(" #tagline2",{
    autoAlpha: 0,
    x:100,
     scale:0.1,
     duration:0.5,
     delay:1,
     overflow:"hidden",
     stagger:1,
     scrollTrigger:{
         trigger:"#tagline2",
         scroller:"body",
         

     }
 })

 gsap.from(" #btn",{
    x:-200,
    scaleX:0.9,	
     duration:0.5,
     delay:1,
     overflow:"hidden",
    // reapet:-1,
    //  repeatDelay:0.5,
     scrollTrigger:{
         trigger:"#btn",
         scroller:"body",
         

     }
 })

 gsap.from(" #right",{
    ease: "bounce.out",
    autoAlpha: 0,
     scale:0.5,
     duration:0.5,
     delay:1,
     overflow:"hidden",

     scrollTrigger:{
         trigger:"#right",
         scroller:"body",

     }
 })



 gsap.from(" #big",{
    y:100,
    autoAlpha: 0,
     duration:0.5,
     delay:1,
     overflow:"hidden",

     scrollTrigger:{
         trigger:"#big",
         scroller:"body",

     }
 })


 gsap.from(" #ons",{
    x:100,
    autoAlpha:0,
     duration:0.5,
     delay:1.2,
     overflow:"hidden",

     scrollTrigger:{
         trigger:"#ons",
         scroller:"body",

     }
 })

 gsap.from(" #lorem",{
    x:100,
    autoAlpha:0,
     duration:0.5,
     delay:1.5,
     overflow:"hidden",

     scrollTrigger:{
         trigger:"#lorem",
         scroller:"body",
        

     }
 })



 gsap.from(" #btn2",{
    autoAlpha:0,
    x:100,
    scaley:1.5,	
     duration:0.5,
     delay:1.6,
     overflow:"hidden",
 
     scrollTrigger:{
         trigger:"#btn2",
         scroller:"body",
        
     }
 })

 gsap.from("#salerimg",{
    x:-300,
        autoAlpha:0,
     duration:0.5,
     delay:1,
     overflow:"hidden",
     scrollTrigger:{
         trigger:"#salerimg",
         scroller:"body",
        // start:0,
        // top:200
      
        
     }
 })


 gsap.from("#what",{
    autoAlpha:0,
    y:100,
  rotateX:180,
  duration:0.5,
  delay:0.5,
scrollTrigger:{
    trigger:"#what",
    scroller:"body", 
  

}
 })


 gsap.from("#happy",{
    autoAlpha:0,
    y:100,
  rotateX:180,
  duration:0.6,
  delay:0.6,
scrollTrigger:{
    trigger:"#happy",
    scroller:"body", 
  

}
 })

 gsap.from("#text",{
    autoAlpha:0,
    y:100,
  rotateX:180,
  duration:0.7,
  delay:0.7,
scrollTrigger:{
    trigger:"#text",
    scroller:"body", 
  

}
 })




 gsap.from("#person1",{
    autoAlpha:0, 
x:250,
 delay:1.5,

scrollTrigger:{
    trigger:"#person1",
    scroller:"body", 
   
}
 })

 gsap.from("#person2",{
    autoAlpha:0, 
scale:1.2,
 delay:1.5,
 stagger:1, 
scrollTrigger:{
    trigger:"#person2",
    scroller:"body", 
   
}
 })

 gsap.from("#person3",{
    autoAlpha:0, 

 delay:1.5,
 x:-250,
scrollTrigger:{
    trigger:"#person3",
    scroller:"body", 
   
}
 })


 


    gsap.from("#one ,#two , #three ,#four",{
        autoAlpha:0,
       duration:0.4,
        delay:0.1,
        stagger:1, 
        overflow:"hidden",
       scrollTrigger:{
           trigger:"#one ,#two , #three ,#four",
           scroller:"body",  
          
      
       }
        })